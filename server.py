#!/usr/bin/env python3
"""
KBO Journey - Local Live Server & Auto-Save Daemon
Provides static file serving and automatic saving of data.json and js/data.js on POST /api/save.
Zero third-party dependencies (uses built-in Python http.server).
"""

import http.server
import json
import os
import sys
from datetime import datetime

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class KBORequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Prevent caching for live editing
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "running", "directory": DIRECTORY}).encode("utf-8"))
            return
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/save":
            content_length = int(self.headers.get("Content-Length", 0))
            post_body = self.rfile.read(content_length)

            try:
                data = json.loads(post_body.decode("utf-8"))

                # 1. Write formatted data.json
                data_json_path = os.path.join(DIRECTORY, "data.json")
                with open(data_json_path, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)

                # 2. Synchronize js/data.js entries block
                data_js_path = os.path.join(DIRECTORY, "js", "data.js")
                if os.path.exists(data_js_path):
                    with open(data_js_path, "r", encoding="utf-8") as f:
                        data_js_content = f.read()

                    entries_marker = "  entries: {"
                    marker_idx = data_js_content.find(entries_marker)
                    if marker_idx != -1:
                        preamble = data_js_content[:marker_idx]
                        json_pretty = json.dumps(data, indent=2, ensure_ascii=False)
                        # Indent JSON by 4 spaces for clean formatting in js/data.js
                        indented_json = "\n".join("    " + line if line else "" for line in json_pretty.splitlines()).lstrip()
                        new_js_content = (
                            preamble
                            + "  entries: "
                            + indented_json
                            + "\n};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = KBO_DATA;\n}\n"
                        )
                        with open(data_js_path, "w", encoding="utf-8") as f:
                            f.write(new_js_content)

                now_str = datetime.now().strftime("%I:%M:%S %p")
                print(f"[{now_str}] Auto-saved data.json and synchronized js/data.js ({len(data)} entries)")

                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "timestamp": now_str,
                    "entryCount": len(data)
                }).encode("utf-8"))

            except Exception as e:
                print(f"[Error saving data] {e}", file=sys.stderr)
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def run(port=PORT):
    server_address = ("", port)
    httpd = http.server.ThreadingHTTPServer(server_address, KBORequestHandler)
    print(f"==================================================")
    print(f"⚾ KBO Journey Server with Auto-Save running!")
    print(f"🌐 App:   http://localhost:{port}/")
    print(f"⚙️ Admin: http://localhost:{port}/admin.html")
    print(f"==================================================")
    httpd.serve_forever()

if __name__ == "__main__":
    run()

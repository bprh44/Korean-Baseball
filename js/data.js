/**
 * ============================================================================
 * KBO — A Way Into Korea (한국으로 들어가는 길)
 * Decoupled Content Store & Regional Travel Data
 * ============================================================================
 * 
 * Edit this file to customize:
 *  - Personal travel stories (English & Korean)
 *  - Ballpark anchors & civic notes
 *  - Photo triptych URLs or local paths (e.g., "images/busan/1.jpg")
 *  - Signature anthem YouTube IDs and start timestamps
 *  - "Hear the City" dialect phrases & pronunciation guides
 *  - KTX transit routes
 */

const KBO_DATA = {
  // --------------------------------------------------------------------------
  // Configuration & API Keys
  // --------------------------------------------------------------------------
  config: {
    // CARTO Basemaps API Key (Removes the "API key required" watermark)
    cartoApiKey: "cb1_3fzc_1_e47177e320e1c761d456a149",
    
    // Default initial city/team view (Rank #1 KT Wiz)
    defaultHeroEntry: "suwon-kt"
  },

  // --------------------------------------------------------------------------
  // KBO Current Rankings Order (Standings Ribbon)
  // --------------------------------------------------------------------------
  rankingOrder: [
    "suwon-kt",             // 1. KT Wiz - Suwon
    "daegu-samsung",        // 2. Samsung Lions - Daegu
    "seoul-jamsil-lg",       // 3. LG Twins - Seoul (Jamsil)
    "gwangju-kia",          // 4. KIA Tigers - Gwangju
    "seoul-jamsil-doosan",   // 5. Doosan Bears - Seoul (Jamsil)
    "changwon-nc",          // 6. NC Dinos - Changwon
    "daejeon-hanwha",       // 7. Hanwha Eagles - Daejeon
    "busan-lotte",          // 8. Lotte Giants - Busan
    "incheon-ssg",          // 9. SSG Landers - Incheon
    "seoul-gocheok-kiwoom",  // 10. Kiwoom Heroes - Seoul (Gocheok)
    "jeju-hallasan"         // Bonus: Hallasan Mountain - Jeju
  ],

  // --------------------------------------------------------------------------
  // KTX High-Speed Railway Network (Actual Surveyor Track Alignments)
  // --------------------------------------------------------------------------
  railways: {
    // 1. KTX Gyeongbu High-Speed Railway (Seoul -> Gwangmyeong -> Daejeon -> Dongdaegu -> Singyeongju -> Ulsan -> Busan)
    ktxGyeongbu: {
      nameEn: "KTX Gyeongbu High-Speed Railway",
      nameKo: "KTX 경부고속선 (서울-부산)",
      color: "#9e2a2b",
      weight: 3.5,
      dashArray: "7, 5",
      coords: [
        [37.5559, 126.9723], // Seoul Station
        [37.5298, 126.9647], // Yongsan
        [37.5180, 126.9535], // Hangang Railway Bridge
        [37.5135, 126.9428], // Noryangjin
        [37.5133, 126.9264], // Daebang
        [37.5155, 126.9075], // Yeongdeungpo
        [37.5090, 126.8910], // Sindorim
        [37.5030, 126.8820], // Guro
        [37.4810, 126.8825], // Gasan Digital
        [37.4660, 126.8910], // Doksan
        [37.4520, 126.8980], // Siheung Junction (HSR track begins)
        [37.4162, 126.8848], // Gwangmyeong KTX Station
        [37.3800, 126.9150], // Anyang Surisan Tunnel
        [37.3450, 126.9380], // Gunpo Sanbon
        [37.3100, 126.9550], // Uiwang West
        [37.2600, 126.9400], // Hwaseong Maesong
        [37.2200, 126.9250], // Hwaseong Bibong
        [37.1500, 126.9150], // Hwaseong Paltan
        [37.0900, 126.9350], // Hwaseong Hyangnam
        [37.0200, 126.9700], // Pyeongtaek Cheongbuk
        [36.9650, 127.0200], // Pyeongtaek Oseong
        [36.9320, 127.0860], // Pyeongtaek HSR Junction (Suseo line merges)
        [36.7944, 127.1044], // Cheonan-Asan KTX Station
        [36.7200, 127.1500], // Cheonan Pungse
        [36.6700, 127.2400], // Gwangdeok Mountain Pass
        [36.6190, 127.3270], // Osong KTX Station (Honam line splits)
        [36.5700, 127.3800], // Cheongju Gangnae
        [36.5200, 127.4200], // Cheongju Nam-i
        [36.4500, 127.4250], // Sintanjin (Geum River Bridge)
        [36.3800, 127.4300], // Daejeon Hoedeok
        [36.3325, 127.4342], // Daejeon KTX Station
        [36.3100, 127.4700], // Daejeon Sikjang Mountain Tunnel
        [36.3000, 127.5600], // Okcheon Gunbuk
        [36.2700, 127.6000], // Okcheon
        [36.2200, 127.7200], // Yeongdong Simcheon
        [36.1750, 127.7800], // Yeongdong
        [36.2000, 127.9100], // Hwanggan
        [36.2150, 127.9950], // Chupungnyeong Pass (Sobaek Mountains)
        [36.1600, 128.0900], // Gimcheon Bongsan
        [36.1150, 128.1800], // Gimcheon (Gumi) KTX Station
        [36.0600, 128.3100], // Chilgok Buksam
        [35.9900, 128.4000], // Waegwan (Nakdong River Crossing)
        [35.9300, 128.5100], // Chilgok Jicheon
        [35.8850, 128.5900], // Daegu Station Approach
        [35.8797, 128.6285], // Dongdaegu KTX Station
        [35.8300, 128.7200], // Gyeongsan East
        [35.7800, 128.8900], // Cheongdo / Gyeongju Sannae
        [35.7700, 129.0200], // Geoncheon Tunnel
        [35.7975, 129.1386], // Singyeongju (Gyeongju) KTX Station
        [35.7100, 129.1500], // Gyeongju Naenam
        [35.6300, 129.1450], // Ulsan Dudong
        [35.5510, 129.1380], // Ulsan (Tongdosa) KTX Station
        [35.4500, 129.0800], // Yangsan Samryang
        [35.3200, 129.0500], // Geumjeong Mountain Tunnel (20.3km)
        [35.2400, 129.0550], // Busan Dongnae Underground
        [35.1500, 129.0500], // Busanjin
        [35.1152, 129.0422]  // Busan Station KTX Terminal
      ]
    },

    // 2. KTX Suseo High-Speed Railway (Suseo -> Yulhyeon Tunnel -> Dongtan -> Pyeongtaek-Jije -> Junction)
    ktxSuseo: {
      nameEn: "KTX Suseo High-Speed Railway",
      nameKo: "KTX 수서고속선 (수서-동탄-평택)",
      color: "#9e2a2b",
      weight: 3.5,
      dashArray: "5, 4",
      coords: [
        [37.4874, 127.1022], // Suseo KTX Station (Gangnam/Songpa)
        [37.4650, 127.1080], // Segok-dong
        [37.4000, 127.1150], // Seongnam / Pangyo Underground (Yulhyeon Tunnel)
        [37.2950, 127.1080], // Yongin Guseong
        [37.1995, 127.0963], // Dongtan KTX Station
        [37.1000, 127.0850], // Pyeongtaek Jinwi
        [37.0189, 127.0706], // Pyeongtaek-Jije KTX Station
        [36.9320, 127.0860], // Pyeongtaek HSR Junction (Merges into Gyeongbu HSR)
        [36.7944, 127.1044]  // Cheonan-Asan Junction
      ]
    },

    // 3. KTX Honam High-Speed Railway (Osong -> Gongju -> Iksan -> Jeongeup -> Gwangju-Songjeong -> Mokpo)
    ktxHonam: {
      nameEn: "KTX Honam High-Speed Railway",
      nameKo: "KTX 호남고속선 (오송-익산-광주송정)",
      color: "#2a4a7b",
      weight: 3.5,
      dashArray: "7, 5",
      coords: [
        [36.6190, 127.3270], // Osong KTX Junction
        [36.5400, 127.2400], // Sejong Yeonki
        [36.3980, 127.0990], // Gongju KTX Station
        [36.2600, 127.0500], // Buyeo Tancheon
        [36.1600, 127.0100], // Nonsan Seongdong
        [36.0500, 126.9700], // Iksan Mangseong
        [35.9405, 126.9460], // Iksan KTX Station
        [35.8300, 126.9000], // Gimje Baeksan
        [35.7300, 126.8700], // Gimje Hwangsan
        [35.5750, 126.8420], // Jeongeup KTX Station
        [35.4800, 126.8200], // Noryeong Mountain Tunnel
        [35.3800, 126.7900], // Jangseong Buk-ha
        [35.2500, 126.7850], // Jangseong Hwangryong
        [35.1900, 126.7880], // Gwangju Hanam
        [35.1378, 126.7915], // Gwangju-Songjeong KTX Station
        [35.0150, 126.7170], // Naju KTX Station
        [34.9200, 126.5600], // Hampyeong
        [34.8600, 126.4700], // Muan
        [34.7912, 126.3865]  // Mokpo Terminal
      ]
    },

    // 4. KTX Gyeongjeon Line (Dongdaegu -> Miryang -> Changwon -> Masan)
    ktxGyeongjeon: {
      nameEn: "KTX Gyeongjeon Line (Masan / Changwon)",
      nameKo: "KTX 경전선 (밀양-창원-마산)",
      color: "#2d6a4f",
      weight: 3.5,
      dashArray: "7, 5",
      coords: [
        [35.8797, 128.6285], // Dongdaegu KTX
        [35.8000, 128.7500], // Gyeongsan
        [35.6500, 128.7400], // Cheongdo
        [35.4740, 128.7710], // Miryang KTX Station
        [35.3950, 128.8350], // Samrangjin Junction
        [35.3500, 128.7900], // Gimhae Hanrimjeong
        [35.3100, 128.7350], // Jinyeong KTX Station
        [35.2750, 128.7100], // Changwon Dong-eup
        [35.2359, 128.6941], // Changwon-Jungang KTX Station
        [35.2550, 128.6041], // Changwon Station
        [35.2345, 128.5830]  // Masan Station KTX
      ]
    },

    // 5. Gyeongin Railway Axis (Seoul - Incheon Port)
    incheonLine: {
      nameEn: "Gyeongin Railway Axis (Seoul - Incheon)",
      nameKo: "경인선 광역철도축 (서울-인천)",
      color: "#8c6239",
      weight: 3.0,
      dashArray: "6, 4",
      coords: [
        [37.5559, 126.9723], // Seoul Station
        [37.5298, 126.9647], // Yongsan
        [37.5155, 126.9075], // Yeongdeungpo
        [37.5030, 126.8820], // Guro Junction
        [37.4920, 126.8240], // Onsu
        [37.4840, 126.7830], // Bucheon
        [37.4875, 126.7535], // Songnae
        [37.4895, 126.7245], // Bupyeong
        [37.4715, 126.7030], // Dongam
        [37.4645, 126.6800], // Juan
        [37.4765, 126.6330], // Dongincheon
        [37.4760, 126.6170]  // Incheon Port
      ]
    }
  },

  // Major High-Speed Rail Stations
  stations: [
    { "nameEn": "Seoul Station", "nameKo": "서울역 (KTX)", "coords": [37.55377, 126.97116], "type": "ktx" },
    { "nameEn": "Yongsan Station", "nameKo": "용산역 (KTX)", "coords": [37.52979, 126.96471], "type": "ktx" },
    { "nameEn": "Suseo Station", "nameKo": "수서역 (KTX)", "coords": [37.4839, 127.10518], "type": "ktx" },
    { "nameEn": "Gwangmyeong Station", "nameKo": "광명역 (KTX)", "coords": [37.41623, 126.8847], "type": "ktx" },
    { "nameEn": "Dongtan Station", "nameKo": "동탄역 (KTX)", "coords": [37.1995, 127.09568], "type": "ktx" },
    { "nameEn": "Cheonan-Asan Station", "nameKo": "천안아산역 (KTX)", "coords": [36.79441, 127.10446], "type": "junction" },
    { "nameEn": "Osong Station", "nameKo": "오송역 (KTX 분기)", "coords": [36.61945, 127.32761], "type": "junction" },
    { "nameEn": "Daejeon Station", "nameKo": "대전역 (KTX)", "coords": [36.3325, 127.43419], "type": "ktx" },
    { "nameEn": "Gimcheon-Gumi Station", "nameKo": "김천구미역 (KTX)", "coords": [36.11346, 128.1793], "type": "ktx" },
    { "nameEn": "Dongdaegu Station", "nameKo": "동대구역 (KTX)", "coords": [35.87956, 128.62855], "type": "ktx" },
    { "nameEn": "Miryang Station", "nameKo": "밀양역 (KTX)", "coords": [35.47473, 128.77158], "type": "ktx" },
    { "nameEn": "Singyeongju Station", "nameKo": "신경주역 (KTX)", "coords": [35.798, 129.13903], "type": "ktx" },
    { "nameEn": "Ulsan Station", "nameKo": "울산역 (KTX)", "coords": [35.551, 129.13798], "type": "ktx" },
    { "nameEn": "Busan Station", "nameKo": "부산역 (KTX)", "coords": [35.11522, 129.04213], "type": "ktx" },
    { "nameEn": "Iksan Station", "nameKo": "익산역 (KTX)", "coords": [35.94053, 126.94589], "type": "ktx" },
    { "nameEn": "Jeongeup Station", "nameKo": "정읍역 (KTX)", "coords": [35.5752, 126.84163], "type": "ktx" },
    { "nameEn": "Gwangju-Songjeong Station", "nameKo": "광주송정역 (KTX)", "coords": [35.13835, 126.79016], "type": "ktx" },
    { "nameEn": "Changwon-Jungang Station", "nameKo": "창원중앙역 (KTX)", "coords": [35.24089, 128.70298], "type": "ktx" },
    { "nameEn": "Changwon Station", "nameKo": "창원역 (KTX)", "coords": [35.25521, 128.60382], "type": "ktx" },
    { "nameEn": "Masan Station", "nameKo": "마산역 (KTX)", "coords": [35.23785, 128.57832], "type": "ktx" }
  ],

  // --------------------------------------------------------------------------
  // The 10 Entries (8 Cities)
  // --------------------------------------------------------------------------
  entries: {
      "suwon-kt": {
        "id": "suwon-kt",
        "rank": 1,
        "primaryColor": "#222222",
        "secondaryColor": "#EC1C24",
        "emblemImg": "images/logos/emblem_KT.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#222222\"/><text x=\"16\" y=\"22\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#EC1C24\" letter-spacing=\"-0.5\">kt</text></svg>",
        "cityKey": "suwon",
        "cityNameEn": "Suwon",
        "cityNameKo": "수원",
        "shortCityEn": "Suwon",
        "shortCityKo": "수원",
        "cityHanja": "水原",
        "teamNameEn": "KT Wiz",
        "teamNameKo": "KT 위즈",
        "stadiumEn": "Suwon KT Wiz Park",
        "stadiumKo": "수원KT위즈파크",
        "coords": [
          37.2997,
          127.0097
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: KT Corporation \n• Founded: 1981 (corporate roots trace to the 1885 Hanseong Telegraph Office)\n• Main Industries: Telecommunications & 5G Wireless, Broadband Network, ICT & Cloud Infrastructure, AI & Digital Media\n• Assessed Value / Total Assets: 45.3 trillion KRW (~$34 billion USD; ranked 12th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: KT그룹\n• 창립 및 모태: 1981년 설립 (1885년 대한민국 최초의 통신 기관 한성전보총국에 뿌리)\n• 핵심 주력산업: 유무선 초고속 통신망(5G/LTE), ICT 및 클라우드 인프라, 인공지능(AI), 디지털 미디어 콘텐츠\n• 자산 및 기업가치: 공정자산 약 45조 3,000억 원 (대한민국 재계 순위 12위권 대기업 집단)",
        "photos": [
          {
            "src": "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202509/02/SpoChosun/20250902124822864drri.jpg",
            "labelEn": "Suwon KT Wiz Park",
            "labelKo": "수원KT위즈파크"
          },
          {
            "src": "https://www.swcf.or.kr/_File/swcfContent/7/files_1476670789_0.jpg",
            "labelEn": "Yeonmudae",
            "labelKo": "연무대"
          },
          {
            "src": "https://mblogthumb-phinf.pstatic.net/MjAyMTEwMjdfMjU5/MDAxNjM1MzM1Nzk4MDcy.Y0WfyfWTdXkaFPwVYAfiJc6EfXMNjd5sQEd-FmaZGd0g.7LRT4BqFF-8DJbEtMoOCXynkrLBUOvaAGNIODtQvKAgg.PNG.kizaki56/14.png?type=w966",
            "labelEn": "Grilled Suwon Jumbo Galbi",
            "labelKo": "수원왕갈비"
          }
        ],
        "anthem": {
          "titleEn": "Magical kt wiz (We Are the Wiz)",
          "titleKo": "승리의 마법사 / 마법의 성",
          "originEn": "kt wiz Championship Theme",
          "originKo": "KT 위즈 승리의 노래",
          "noteEn": "Sung with red-and-black light batons swinging in rhythm against the fortress sky.",
          "noteKo": "야구장에서 빨간색 응원봉을 흔들면서 다 같이 노래해요.",
          "youtubeId": "l89TqRzK_jM",
          "timestamp": 10
        },
        "phrases": [
          {
            "ko": "안녕하셔유",
            "meaningEn": "Hello"
          },
          {
            "ko": "밥 먹은거?",
            "meaningEn": "Did you eat?"
          },
          {
            "ko": "뭐 하는 겨?",
            "meaningEn": "What are you doing?"
          },
          {
            "ko": "왓! 왓! 왓왓왓!",
            "meaningEn": "What! What! What What What!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=85s"
          }
        ]
      },
      "daegu-samsung": {
        "id": "daegu-samsung",
        "rank": 2,
        "primaryColor": "#074CA1",
        "secondaryColor": "#5C768D",
        "emblemImg": "images/logos/emblem_SS.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#074CA1\"/><text x=\"16\" y=\"22\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#FFFFFF\" letter-spacing=\"-1\">SL</text></svg>",
        "cityKey": "daegu",
        "cityNameEn": "Daegu",
        "cityNameKo": "대구",
        "shortCityEn": "Daegu",
        "shortCityKo": "대구",
        "cityHanja": "大邱",
        "teamNameEn": "Samsung Lions",
        "teamNameKo": "삼성 라이온즈",
        "stadiumEn": "Daegu Samsung Lions Park",
        "stadiumKo": "대구 삼성 라이온즈 파크",
        "coords": [
          35.8411,
          128.6815
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: Samsung Group\n• Founded: 1938 (founded in Daegu as Samsung Sanghoe by Lee Byung-chul)\n• Main Industries: Advanced Memory & Foundry Semiconductors, Mobile Devices (Galaxy), Consumer Electronics, Biopharmaceuticals (Samsung Biologics), Heavy Shipbuilding, Financial Life Insurance\n• Assessed Value / Total Assets: 558.0 trillion KRW (~$420 billion USD total assets; Market Cap ~450+ trillion KRW; South Korea's #1 Chaebol)",
        "civicAnchorKo": "• 소유 모기업: 삼성그룹\n• 창립 및 모태: 1938년 대구 수동에서 이병철 창업주가 설립한 '삼성상회'에 뿌리\n• 핵심 주력산업: 첨단 메모리 및 파운드리 반도체, 갤럭시 스마트폰 및 가전(삼성전자), 바이오의약품(삼성바이오로직스), 중공업, 금융·보험\n• 자산 및 기업가치: 공정자산 약 558조 원 (시가총액 450조 원 이상, 대한민국 1위 대표 재벌)",
        "photos": [
          {
            "src": "images/cities/daegu-samsung/1_stadium.jpg",
            "labelEn": "Daegu Samsung Lions Park",
            "labelKo": "대구 삼성 라이온즈 파크"
          },
          {
            "src": "https://tong.visitkorea.or.kr/cms/resource/79/3039679_image2_1.jpg",
            "labelEn": "Starbucks Daegu Jongro Old House",
            "labelKo": "스타벅스 대구종로고택"
          },
          {
            "src": "images/cities/daegu-samsung/3_dish.jpg",
            "labelEn": "Braised Korean Beef Short Ribs",
            "labelKo": "벙글벙글찜갈비 한우"
          }
        ],
        "anthem": {
          "titleEn": "El Dorado",
          "titleKo": "엘도라도 (El Dorado)",
          "originEn": "Goombay Dance Band classic · Soul of Lions",
          "originKo": "삼성 라이온즈 대표 응원가 · 엘도라도",
          "noteEn": "Sung at the start of the 8th inning with arms crossed overhead, swaying like a blue ocean.",
          "noteKo": "8회에 온 관중이 두 팔을 올리고 파란 바다처럼 흔들며 불러요.",
          "youtubeId": "5jGq5v_V6W0",
          "timestamp": 10
        },
        "phrases": [
          {
            "ko": "왔나? [왔↗ 나↘]",
            "meaningEn": "Did you come?"
          },
          {
            "ko": "밥 뭇나? [밥↗ 뭇↘ 나↘]",
            "meaningEn": "Have you eaten?"
          },
          {
            "ko": "니 와카노 [니 와↗ 카↗ 노↘]",
            "meaningEn": "Why are you being like that?"
          },
          {
            "ko": "뭐꼬!",
            "meaningEn": "What is this?!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=31s"
          }
        ]
      },
      "seoul-jamsil-lg": {
        "id": "seoul-jamsil-lg",
        "rank": 3,
        "primaryColor": "#C30037",
        "secondaryColor": "#222222",
        "emblemImg": "images/logos/emblem_LG.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#C30037\"/><circle cx=\"16\" cy=\"16\" r=\"11\" fill=\"#222222\"/><text x=\"16\" y=\"21\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#FFFFFF\">LG</text></svg>",
        "cityKey": "seoul",
        "cityNameEn": "Seoul (Jamsil)",
        "cityNameKo": "서울 (잠실)",
        "shortCityEn": "Seoul (Jamsil)",
        "shortCityKo": "서울 잠실",
        "cityHanja": "首爾",
        "teamNameEn": "LG Twins",
        "teamNameKo": "LG 트윈스",
        "stadiumEn": "Jamsil Baseball Stadium",
        "stadiumKo": "잠실 종합 운동장 야구장",
        "coords": [
          37.5126,
          127.0711
        ],
        "zoomLevel": 16.5,
        "civicAnchorEn": "• Owning Conglomerate: LG Group\n• Founded: 1947 (founded as Lucky Chemical Industrial Co. by Koo In-hwoi)\n• Main Industries: Electronics & Premium Home Appliances (LG Electronics), Electric Vehicle Batteries (LG Energy Solution), Advanced Petrochemicals & Materials (LG Chem), Displays, Telecommunications (LG U+)\n• Assessed Value / Total Assets: 171.2 trillion KRW (~$128 billion USD total assets; ranked 4th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: LG그룹\n• 창립 및 모태: 1947년 구인회 창업주가 부산에서 설립한 '락희화학공업사(현 LG화학)'에 뿌리\n• 핵심 주력산업: 프리미엄 가전 및 전장(LG전자), 차세대 2차전지 배터리(LG에너지솔루션), 첨단 석유화학소재(LG화학), 디스플레이, 유무선 통신(LG유플러스)\n• 자산 및 기업가치: 공정자산 약 171조 2,000억 원 (대한민국 재계 순위 4위 대기업 집단)",
        "photos": [
          {
            "src": "https://newsimg.koreatimes.co.kr/2026/03/28/a47e713c-d93e-473c-8f45-70f069090352.jpg",
            "labelEn": "Jamsil Baseball Stadium",
            "labelKo": "잠실 종합 운동장 야구장"
          },
          {
            "src": "images/cities/seoul-jamsil-lg/2_landmark.jpg",
            "labelEn": "Night view of Gyeonghoeru Pavilion at Gyeongbokgung Palace",
            "labelKo": "경복궁 경회루의 야경"
          },
          {
            "src": "images/cities/seoul-jamsil-lg/3_dish.jpg",
            "labelEn": "Majang Meat Market",
            "labelKo": "마장 축산물시장"
          }
        ],
        "anthem": {
          "titleEn": "Seoul’s LG Twins (Seoul Hymn)",
          "titleKo": "서울의 찬가 / 사랑한다 LG",
          "originEn": "Patty Kim classic reimagined · Jamsil Signature",
          "originKo": "패티김 원곡 노래 · 서울의 찬가",
          "noteEn": "Sung passionately during late-inning rallies as twilight settles over the Olympic stadium complex.",
          "noteKo": "https://youtu.be/BhwoJFjkAf8?si=cNbUCn3J-drs6AL3&t=1461",
          "youtubeId": "https://youtu.be/BhwoJFjkAf8?si=cNbUCn3J-drs6AL3&t=1461",
          "timestamp": 0
        },
        "phrases": [
          {
            "ko": "반갑습니다",
            "meaningEn": "Nice to meet you"
          },
          {
            "ko": "밥 먹었어요?",
            "meaningEn": "Have you had a meal yet?"
          },
          {
            "ko": "아니 근데",
            "meaningEn": "No, that's not it"
          },
          {
            "ko": "떽! 앞으로 던져라!",
            "meaningEn": "Ttek! Throw it forward!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=7s"
          }
        ]
      },
      "gwangju-kia": {
        "id": "gwangju-kia",
        "rank": 4,
        "primaryColor": "#C70125",
        "secondaryColor": "#1B252C",
        "emblemImg": "images/logos/emblem_HT.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#C70125\"/><text x=\"16\" y=\"23\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#FFFFFF\">T</text></svg>",
        "cityKey": "gwangju",
        "cityNameEn": "Gwangju",
        "cityNameKo": "광주",
        "shortCityEn": "Gwangju",
        "shortCityKo": "광주",
        "cityHanja": "光州",
        "teamNameEn": "KIA Tigers",
        "teamNameKo": "KIA 타이거즈",
        "stadiumEn": "Gwangju-Kia Champions Field",
        "stadiumKo": "광주 기아 챔피언스 필드",
        "coords": [
          35.1682,
          126.8891
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: Hyundai Motor Group — Kia Corporation\n• Founded: Kia founded 1944 (as Kyungsung Precision Industry); Hyundai Motor Group consolidated 2000 (Chung Mong-koo)\n• Main Industries: Automotive & Electric Vehicles (Kia, Hyundai, Genesis), Auto Components (Hyundai Mobis), Integrated Steelmaking (Hyundai Steel), Heavy Construction (Hyundai E&C)\n• Assessed Value / Total Assets: 282.5 trillion KRW (~$212 billion USD total assets; South Korea's #3 Chaebol; world's #3 automaker by global volume)",
        "civicAnchorKo": "• 소유 모기업: 현대자동차그룹 — 기아\n• 창립 및 모태: 기아 1944년 '경성정공' 설립(대한민국 최초의 자전거 및 완성차 생산), 2000년 현대자동차그룹 출범\n• 핵심 주력산업: 완성차 및 친환경 전기차(기아, 현대, 제네시스), 핵심 자동차 부품(현대모비스), 일관제철(현대제철), 건설·물류\n• 자산 및 기업가치: 공정자산 약 282조 5,000억 원 (대한민국 재계 순위 3위, 글로벌 완성차 판매량 세계 3위)",
        "photos": [
          {
            "src": "images/cities/gwangju-kia/1_stadium.jpg",
            "labelEn": "Gwangju-Kia Champions Field",
            "labelKo": "광주 기아 챔피언스 필드"
          },
          {
            "src": "images/cities/gwangju-kia/2_landmark.jpg",
            "labelEn": "Yangnim-dong Penguin Village",
            "labelKo": "양림동 펭귄마을"
          },
          {
            "src": "https://cdn.shopify.com/s/files/1/0013/4928/8020/files/gamtae3.jpg",
            "labelEn": "Gamtae",
            "labelKo": "감태"
          }
        ],
        "anthem": {
          "titleEn": "Southbound Train (Namhaeng Yeolcha)",
          "titleKo": "남행열차",
          "originEn": "Kim Soo-hee classic · Immortal Tiger Anthem",
          "originKo": "김수희 원곡 노래 · 남행열차",
          "noteEn": "The unmistakable brass melody triggers an explosive singalong on the 3rd base concourse.",
          "noteKo": "비 내리는 호남선 노래에 맞춰 신나게 춤추며 불러요.",
          "youtubeId": "rVv3V8wZ5R0",
          "timestamp": 12
        },
        "phrases": [
          {
            "ko": "안녕하쇼잉",
            "meaningEn": "Hello",
            "youtubeUrl": "https://youtu.be/Rr4yqUzWcRE?si=vslmjJ7efZnrBVxd&t=218"
          },
          {
            "ko": "밥 먹었냐? [밥↘ 먹↘ 었↗ 냐↗]",
            "meaningEn": "Have you eaten?",
            "youtubeUrl": "https://youtu.be/Rr4yqUzWcRE?si=SUzCSIAlrS_i6jYO&t=818"
          },
          {
            "ko": "아 거시 뭐시?",
            "meaningEn": "Ah, what's that <thing>?",
            "youtubeUrl": "https://youtu.be/Rr4yqUzWcRE?si=o2P3IL49dyUHriwM&t=1016"
          },
          {
            "ko": "아야! 아야! 날새겄다!",
            "meaningEn": "A-ya! A-ya! Nal-sae-geot-da!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=23s"
          }
        ]
      },
      "seoul-jamsil-doosan": {
        "id": "seoul-jamsil-doosan",
        "rank": 5,
        "primaryColor": "#131230",
        "secondaryColor": "#ED1C24",
        "emblemImg": "images/logos/emblem_OB.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#131230\"/><text x=\"16\" y=\"23\" font-family=\"Arial Black, sans-serif\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ED1C24\">D</text></svg>",
        "cityKey": "seoul",
        "cityNameEn": "Seoul (Jamsil)",
        "cityNameKo": "서울 (잠실)",
        "shortCityEn": "Seoul (Jamsil)",
        "shortCityKo": "서울 잠실",
        "cityHanja": "首爾",
        "teamNameEn": "Doosan Bears",
        "teamNameKo": "두산 베어스",
        "stadiumEn": "Jamsil Baseball Stadium",
        "stadiumKo": "잠실 종합 운동장 야구장",
        "coords": [
          37.5118,
          127.0727
        ],
        "zoomLevel": 16.5,
        "civicAnchorEn": "• Owning Conglomerate: Doosan Group\n• Founded: 1896 (founded as Park Seung-jik Store in Jongno, Seoul; South Korea's oldest registered operating company, 130-year heritage)\n• Main Industries: Clean Energy Turbines & Power Plant Engineering (Doosan Enerbility), Small Modular Nuclear Reactors (SMR), Industrial Fuel Cells (Doosan Fuel Cell), Collaborative Robotics (Doosan Robotics), Semiconductor Testing\n• Assessed Value / Total Assets: 26.8 trillion KRW (~$20 billion USD total assets; ranked 16th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: 두산그룹\n• 창립 및 모태: 1896년 박승직 창업주가 서울 종로에 개점한 '박승직상점'에 뿌리 (대한민국 최장수 130년 역사의 국민 기업)\n• 핵심 주력산업: 원자력 및 가스터빈·친환경 발전 플랜트(두산에너빌리티), 소형모듈원자로(SMR), 산업용 수소연료전지(두산퓨얼셀), 협동로봇(두산로보틱스), 반도체 후공정\n• 자산 및 기업가치: 공정자산 약 26조 8,000억 원 (대한민국 재계 순위 16위 대기업 집단)",
        "photos": [
          {
            "src": "https://cdnweb01.wikitree.co.kr/webdata/editor/202412/23/img_20241223112500_a861de72.webp",
            "labelEn": "Jamsil Baseball Stadium",
            "labelKo": "잠실 종합 운동장 야구장"
          },
          {
            "src": "images/cities/seoul-jamsil-doosan/2_landmark.jpg",
            "labelEn": "Banpo Bridge Rainbow Fountain",
            "labelKo": "반포대교 달빛무지개분수"
          },
          {
            "src": "https://h0iothbv4537.edge.naverncp.com/pSIdmNXDSf/restaurant/42860c98fcd0.jpg?type=w&w=1000&quality=90",
            "labelEn": "Mango Bingsu",
            "labelKo": "망고빙수"
          }
        ],
        "anthem": {
          "titleEn": "Song of the Bears (Hustle Doo)",
          "titleKo": "승리의 두산 / 베어스 찬가",
          "originEn": "Original Doosan rally anthem",
          "originKo": "두산 베어스 승리의 노래",
          "noteEn": "Echoes through the 1st base side with rhythmic towel waves and collective clapping.",
          "noteKo": "1루 관중석에서 하얀 수건을 흔들며 다 같이 박수를 쳐요.",
          "youtubeId": "Wv0c_v0V0_U",
          "timestamp": 5
        },
        "phrases": [
          {
            "ko": "안녕하십니까?",
            "meaningEn": "Hello (formal)"
          },
          {
            "ko": "밥은?",
            "meaningEn": "Did you have a meal?"
          },
          {
            "ko": "퇴근 하고 싶어요",
            "meaningEn": "I want to leave work",
            "youtubeUrl": "https://youtu.be/FGq7BbmyOd8?si=7-1supXnwyKan7Ys&t=21"
          },
          {
            "ko": "야! 야! 야!",
            "meaningEn": "Ya! Ya! Ya!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=72s"
          }
        ]
      },
      "changwon-nc": {
        "id": "changwon-nc",
        "rank": 6,
        "primaryColor": "#071D49",
        "secondaryColor": "#B49258",
        "emblemImg": "images/logos/emblem_NC.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#071D49\"/><text x=\"16\" y=\"22\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"14\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#B49258\" letter-spacing=\"-0.5\">NC</text></svg>",
        "cityKey": "changwon",
        "cityNameEn": "Changwon",
        "cityNameKo": "창원",
        "shortCityEn": "Changwon",
        "shortCityKo": "창원",
        "cityHanja": "昌原",
        "teamNameEn": "NC Dinos",
        "teamNameKo": "NC 다이노스",
        "stadiumEn": "Changwon NC Park",
        "stadiumKo": "창원 NC 파크",
        "coords": [
          35.2225,
          128.5824
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Corporate Enterprise: NCSOFT Corporation\n• Founded: 1997 (founded in Seoul by Kim Taek-jin)\n• Main Industries: Online MMORPG Game Software (Lineage franchise, Aion, Blade & Soul, Guild Wars series), Digital Interactive Entertainment, Generative AI Models (VARCO LLM) & Game Engines\n• Assessed Value / Total Assets: 4.8 trillion KRW (~$3.6 billion USD total assets; KOSPI Market Capitalization ~4.5 trillion KRW; premier digital gaming pioneer)",
        "civicAnchorKo": "• 소유 모기업: 엔씨소프트\n• 창립 및 모태: 1997년 김택진 창업주가 설립한 대한민국 1세대 대표 소프트웨어·온라인 게임 기업\n• 핵심 주력산업: 글로벌 온라인 MMORPG 게임 개발(리니지 시리즈, 아이온, 블레이드 & 소울, 길드워), 디지털 엔터테인먼트, 생성형 AI 언어모델(VARCO) 및 게임 엔진 연구\n• 자산 및 기업가치: 총자산 약 4조 8,000억 원 (코스피 시가총액 약 4조 5,000억 원, K-게임 소프트웨어 선도 기업)",
        "photos": [
          {
            "src": "https://www.ncdinos.com/assets/images/sub/img_changwonpark_02.png",
            "labelEn": "Changwon NC Park",
            "labelKo": "창원NC파크"
          },
          {
            "src": "images/cities/changwon-nc/2_landmark.jpg",
            "labelEn": "Gyeonghwa Station Cherry Blossom Train Corridor",
            "labelKo": "진해 경화역 벚꽃 기찻길"
          },
          {
            "src": "https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjBfMjMy/MDAxNjgxOTY3MDI5OTQy.yUj7sJxnViEfOi6X1r7TLZq0GB8TaWghCbkqRPGSlxEg.zrDt6PZNstRVxrbinWYqx00SArIV9Thmx3mQGJUFrIwg.JPEG.s2rlfwk/output_1341078383.jpg?type=w966",
            "labelEn": "Pork Belly BBQ Table",
            "labelKo": "포크밸리 바베큐석으로 (@크리밍)"
          }
        ],
        "anthem": {
          "titleEn": "Come Back to Masan Port (Dorawayo Masan-hang-e)",
          "titleKo": "돌아와요 마산항에",
          "originEn": "Cho Yong-pil classic adapted · Masan Baseball Soul",
          "originKo": "조용필 원곡 노래 · 돌아와요 마산항에",
          "noteEn": "Carries the rugged, briny sea spray and blue-collar longing of the southern coast.",
          "noteKo": "마산 바다의 정취를 느끼며 팬들이 함께 부르는 노래예요.",
          "youtubeId": "b3B09V7N_B8",
          "timestamp": 10
        },
        "phrases": [
          {
            "ko": "왔능교? [왔↘ 능↗ 교↘]",
            "meaningEn": "You arrived?"
          },
          {
            "ko": "밥 먹었능교? [밥↘ 먹↘ 었↗ 능↗ 교↘]",
            "meaningEn": "Have you eaten?"
          },
          {
            "ko": "단디 해라 [단↘ 디↗ 해↘ 라↘]",
            "meaningEn": "Do it properly"
          },
          {
            "ko": "쫌!",
            "meaningEn": "Just stop it!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=58s"
          }
        ]
      },
      "daejeon-hanwha": {
        "id": "daejeon-hanwha",
        "rank": 7,
        "primaryColor": "#F37321",
        "secondaryColor": "#2B2B2B",
        "emblemImg": "images/logos/emblem_HH.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#F37321\"/><text x=\"16\" y=\"23\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#2B2B2B\">E</text></svg>",
        "cityKey": "daejeon",
        "cityNameEn": "Daejeon",
        "cityNameKo": "대전",
        "shortCityEn": "Daejeon",
        "shortCityKo": "대전",
        "cityHanja": "大田",
        "teamNameEn": "Hanwha Eagles",
        "teamNameKo": "한화 이글스",
        "stadiumEn": "Hanwha Life Eagles Park",
        "stadiumKo": "대전 한화생명볼파크",
        "coords": [
          36.3171,
          127.4291
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: Hanwha Group\n• Founded: 1952 (founded as Korea Explosives Co. by Kim Chong-hee)\n• Main Industries: Aerospace & Precision Defense Systems (Hanwha Aerospace, Hanwha Ocean, Hanwha Systems), Green Solar Energy & Clean Solutions (Hanwha Qcells), Advanced Chemicals, Life Insurance & Financial Services (Hanwha Life)\n• Assessed Value / Total Assets: 112.5 trillion KRW (~$84 billion USD total assets; ranked 7th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: 한화그룹\n• 창립 및 모태: 1952년 김종희 창업주가 부산에서 설립한 '한국화약주식회사'에 뿌리\n• 핵심 주력산업: 첨단 우주항공 및 K-방산 무기체계(한화에어로스페이스, 한화오션, 한화시스템), 친환경 태양광 에너지(한화큐셀), 첨단 화학소재, 금융·보험(한화생명)\n• 자산 및 기업가치: 공정자산 약 112조 5,000억 원 (대한민국 재계 순위 7위 대기업 집단)",
        "photos": [
          {
            "src": "https://wimg.mk.co.kr/news/cms/202507/11/20250711_01110127000001_L00.jpg",
            "labelEn": "Hanwha Life Eagles Park",
            "labelKo": "대전 한화생명볼파크"
          },
          {
            "src": "https://newsimg.koreatimes.co.kr/2026/05/14/4b5f172a-4f06-4710-b790-1af3375b1408.png?w=728",
            "labelEn": "Daejeon’s Bread Taxi",
            "labelKo": "빵택시"
          },
          {
            "src": "https://wimg.mk.co.kr/news/cms/202503/17/20250317_01110205000001_L01.jpg",
            "labelEn": "Strawberry Siru",
            "labelKo": "딸기시루"
          }
        ],
        "anthem": {
          "titleEn": "I Am Happy (Naneun Haengbokhamnida)",
          "titleKo": "나는 행복합니다",
          "originEn": "Hanwha Eagles Signature Anthem",
          "originKo": "한화 이글스 대표 응원가 · 나는 행복합니다",
          "noteEn": "Sung with beaming smiles regardless of whether the Eagles are winning or trailing by ten runs.",
          "noteKo": "팀이 이기거나 져도 주황색 손수건을 흔들며 행복하게 불러요.",
          "youtubeId": "zC0T9FvR8Qc",
          "timestamp": 10
        },
        "phrases": [
          {
            "ko": "안녕하시유",
            "meaningEn": "Hello there~ Wonderful to meet you~"
          },
          {
            "ko": "밥 먹었슈?",
            "meaningEn": "Have you had your meal yet?"
          },
          {
            "ko": "괜찮아유~",
            "meaningEn": "It's all right~",
            "youtubeUrl": "https://youtu.be/fkoMPG2-284?si=AvlYMO883dmZuLkK&t=17"
          },
          {
            "ko": "뭐여! ... 뭐하는겨!",
            "meaningEn": "What! What on earth are you doing?!\"",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=16s"
          }
        ]
      },
      "busan-lotte": {
        "id": "busan-lotte",
        "rank": 8,
        "primaryColor": "#002955",
        "secondaryColor": "#D00F31",
        "emblemImg": "images/logos/emblem_LT.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#002955\"/><text x=\"16\" y=\"23\" font-family=\"Georgia, serif\" font-size=\"19\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#D00F31\" font-style=\"italic\">G</text></svg>",
        "cityKey": "busan",
        "cityNameEn": "Busan",
        "cityNameKo": "부산",
        "shortCityEn": "Busan",
        "shortCityKo": "부산",
        "cityHanja": "釜山",
        "teamNameEn": "Lotte Giants",
        "teamNameKo": "롯데 자이언츠",
        "stadiumEn": "Sajik Baseball Stadium",
        "stadiumKo": "사직 야구장",
        "coords": [
          35.194,
          129.0615
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: Lotte Group\n• Founded: 1948 (founded by Shin Kyuk-ho; Lotte Confectionery Korea established 1967)\n• Main Industries: Supermarkets, Department Stores & Retail (Lotte Shopping), Confectionery, Beverages & Food Processing (Lotte Wellfood, Lotte Chilsung), Petrochemical Engineering (Lotte Chemical), Luxury Hospitality & Landmarks (Lotte Hotel, Lotte World Tower)\n• Assessed Value / Total Assets: 129.8 trillion KRW (~$97 billion USD total assets; ranked 6th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: 롯데그룹\n• 창립 및 모태: 1948년 신격호 총괄회장이 설립, 1967년 '롯데제과'를 설립하며 모국 투자와 한국 사업 본격 시작\n• 핵심 주력산업: 백화점 및 대형마트 유통·쇼핑(롯데쇼핑), 식품·제과·음료(롯데웰푸드, 롯데칠성), 기초유기화학 및 고기능성 첨단소재(롯데케미칼), 호텔·관광(롯데호텔, 롯데월드타워)\n• 자산 및 기업가치: 공정자산 약 129조 8,000억 원 (대한민국 재계 순위 6위 대기업 집단)",
        "photos": [
          {
            "src": "images/cities/busan-lotte/1_stadium.jpg",
            "labelEn": "Sajik Baseball Stadium",
            "labelKo": "사직 야구장"
          },
          {
            "src": "images/cities/busan-lotte/2_landmark.jpg",
            "labelEn": "Haedong Yonggungsa Temple",
            "labelKo": "해동 용궁사(부산)"
          },
          {
            "src": "https://pbs.twimg.com/media/HP-8RVAaAAAGhCi?format=webp&name=medium",
            "labelEn": "Rice Cake Sticks in Soup",
            "labelKo": "물떡 "
          }
        ],
        "anthem": {
          "titleEn": "Busan Seagulls (Busan Galmaegi)",
          "titleKo": "부산 갈매기",
          "originEn": "Moon Sung-jae 1982 classic · Anthem of Busan",
          "originKo": "문성재 원곡 노래 · 부산 갈매기",
          "noteEn": "The undisputed supreme anthem of Korean sports, echoing across the harbor when night falls on Sajik.",
          "noteKo": "7회에 주황색 봉지를 머리에 쓰고 온 관중이 합창해요.",
          "youtubeId": "r2Yn-M7K-d4",
          "timestamp": 15
        },
        "phrases": [
          {
            "ko": "왔능예? [왔↘ 능↗ 예↘]",
            "meaningEn": "Hello! Welcome to Busan!"
          },
          {
            "ko": "밥 뭇나? [밥↘ 뭇↗ 나↘]",
            "meaningEn": "Have you eaten?"
          },
          {
            "ko": "와 그라노? [와↘ 그↗ 라↘ 노↘]",
            "meaningEn": "Why are you being like that?"
          },
          {
            "ko": "마! (이놈아 deriv)",
            "meaningEn": "Hey, you! / Punk!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=0s"
          }
        ]
      },
      "incheon-ssg": {
        "id": "incheon-ssg",
        "rank": 9,
        "primaryColor": "#CE0E2D",
        "secondaryColor": "#917042",
        "emblemImg": "images/logos/emblem_SK.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#CE0E2D\"/><text x=\"16\" y=\"23\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"17\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#FFFFFF\">L</text><polygon points=\"16,4 17.5,8.5 22,8.5 18.5,11 20,15.5 16,12.5 12,15.5 13.5,11 10,8.5 14.5,8.5\" fill=\"#E6C898\"/></svg>",
        "cityKey": "incheon",
        "cityNameEn": "Incheon",
        "cityNameKo": "인천",
        "shortCityEn": "Incheon",
        "shortCityKo": "인천",
        "cityHanja": "仁川",
        "teamNameEn": "SSG Landers",
        "teamNameKo": "SSG 랜더스",
        "stadiumEn": "Incheon SSG Landers Field",
        "stadiumKo": "인천SSG랜더스필드",
        "coords": [
          37.437,
          126.6933
        ],
        "zoomLevel": 15.6,
        "civicAnchorEn": "• Owning Conglomerate: Shinsegae Group — E-Mart & SSG\n• Founded: 1955 (roots in Dongwha Department Store; separated from Samsung Group in 1991 under Chairwoman Lee Myung-hee)\n• Main Industries: Hypermarket Discount Chains (E-Mart, Korea's #1 hypermarket), Luxury Department Stores (Shinsegae Dept Store), Integrated E-Commerce (SSG.com), Coffee Franchising (Starbucks Korea / SCK Company), Premium Hospitality (Chosun Hotels & Resorts)\n• Assessed Value / Total Assets: 62.0 trillion KRW (~$46 billion USD total assets; ranked 11th largest South Korean business group)",
        "civicAnchorKo": "• 소유 모기업: 신세계그룹 — 이마트\n• 창립 및 모태: 1955년 동화백화점에 뿌리, 1991년 이명희 회장 주도로 삼성그룹에서 독립 분가하여 독자 출범\n• 핵심 주력산업: 전국 1위 대형할인점(이마트, 트레이더스), 프리미엄 백화점(신세계백화점), 종합 온·오프라인 이커머스(SSG.com), 커피 프랜차이즈(스타벅스 코리아 / SCK컴퍼니), 특급호텔(조선호텔앤리조트)\n• 자산 및 기업가치: 공정자산 약 62조 원 (대한민국 재계 순위 11위 대기업 집단)",
        "photos": [
          {
            "src": "https://itour.incheon.go.kr/upload/image/2025/03/26/370f3320-1f00-4250-8007-8511337115c5.jpg",
            "labelEn": "Incheon SSG Landers Field",
            "labelKo": "인천SSG랜더스필드"
          },
          {
            "src": "https://tong.visitkorea.or.kr/cms/resource/15/3025915_image2_1.JPG",
            "labelEn": "Songdo Central Park",
            "labelKo": "송도 센트럴파크"
          },
          {
            "src": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/83/f2/f5/caption.jpg?w=1000&h=-1&s=1",
            "labelEn": "Sweet and Sour Pork",
            "labelKo": "탕수육 "
          }
        ],
        "anthem": {
          "titleEn": "Yeonan Pier (Yeonan Bodu)",
          "titleKo": "연안부두",
          "originEn": "Kim Trio 1979 classic · Anthem of Incheon",
          "originKo": "김트리오 원곡 노래 · 연안부두",
          "noteEn": "When the 8th inning arrives, the entire stadium sings together holding red flashlights aloft.",
          "noteKo": "8회에 랜더스필드의 붉은 불빛을 켜고 파도타기를 하며 불러요.",
          "youtubeId": "D8eGk-eD4rQ",
          "timestamp": 8
        },
        "phrases": [
          {
            "ko": "안녕하세요?",
            "meaningEn": "Hello!"
          },
          {
            "ko": "밥 먹었냐?",
            "meaningEn": "Have you eaten?"
          },
          {
            "ko": "동치 (동무 / 친구)",
            "meaningEn": "Close buddy"
          },
          {
            "ko": "와! ... 왜!",
            "meaningEn": "Ah! ... Why!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=80s"
          }
        ]
      },
      "seoul-gocheok-kiwoom": {
        "id": "seoul-gocheok-kiwoom",
        "rank": 10,
        "primaryColor": "#570514",
        "secondaryColor": "#937042",
        "emblemImg": "images/logos/emblem_WO.png",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#570514\"/><text x=\"16\" y=\"23\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#FFFFFF\">H</text></svg>",
        "cityKey": "seoul",
        "cityNameEn": "Seoul (Gocheok Dome)",
        "cityNameKo": "서울 ( 고척스카이 돔)",
        "shortCityEn": "Seoul (Gocheok)",
        "shortCityKo": "서울 고척",
        "cityHanja": "首爾",
        "teamNameEn": "Kiwoom Heroes",
        "teamNameKo": "키움 히어로즈",
        "stadiumEn": "Gocheok Sky Dome",
        "stadiumKo": "고척 스카이 돔",
        "coords": [
          37.4982,
          126.8671
        ],
        "zoomLevel": 15.8,
        "civicAnchorEn": "• Naming Sponsor & Owning Enterprise: Kiwoom Securities / Daou Kiwoom Group\n• Founded: Daou Technology founded 1986 (Kim Ik-rae); Kiwoom Securities founded 2000 (Korea's 1st online brokerage); Heroes Baseball Club founded 2008\n• Main Industries: Retail Online Equity & Derivatives Brokerage (Kiwoom Securities, undisputed #1 in Korean retail equity market share since 2005), Enterprise IT Software, Venture Capital & Asset Management\n• Assessed Value / Total Assets: 43.8 trillion KRW (~$33 billion USD in financial customer & group enterprise assets; market cap ~2.6 trillion KRW)",
        "civicAnchorKo": "• 네이밍 스폰서 및 모기업: 키움증권 / 다우키움그룹\n• 창립 및 모태: 1986년 김익래 회장의 '다우기술' 창립, 2000년 대한민국 최초의 지점 없는 온라인 전문 증권사 '키움증권' 설립, 2008년 히어로즈 야구단 출범\n• 핵심 주력산업: 온라인 주식 위탁매매 브로커리지(2005년 이후 20년 연속 대한민국 개인주식 점유율 독보적 1위), 기업 IT 솔루션 및 데이터센터, 벤처투자 및 자산운용\n• 자산 및 기업가치: 키움증권 총자산 약 43조 8,000억 원 (시가총액 약 2조 6,000억 원 규모의 온라인 금융 혁신 그룹)",
        "photos": [
          {
            "src": "images/cities/seoul-gocheok-kiwoom/1_stadium.jpg",
            "labelEn": "Gocheok Sky Dome",
            "labelKo": "고척 스카이 돔"
          },
          {
            "src": "images/cities/seoul-gocheok-kiwoom/2_landmark.jpg",
            "labelEn": "Gwanghwamun Square",
            "labelKo": "광화문 광장"
          },
          {
            "src": "https://platform.ny.eater.com/wp-content/uploads/sites/6/chorus/uploads/chorus_asset/file/19242852/HaiHeadpiece.jpg?quality=90&strip=all&crop=16.796875,0,66.40625,100",
            "labelEn": "Haidilao Hot Pot",
            "labelKo": "하이디라오 훠궈"
          }
        ],
        "anthem": {
          "titleEn": "Heroes Anthem (Dream on Heroes)",
          "titleKo": "영웅출정가 / 꿈이 있기에",
          "originEn": "Kiwoom Heroes Official Theme",
          "originKo": "키움 히어로즈 응원가 · 영웅출정가",
          "noteEn": "Features a modern rock rhythm echoing off the acoustic dome ceiling.",
          "noteKo": "신나는 록 음악 소리에 맞춰 돔구장이 울리도록 힘차게 불러요.",
          "youtubeId": "vBqJd8Z0q8g",
          "timestamp": 15
        },
        "phrases": [
          {
            "ko": "안녕하세요! 어서오세요!",
            "meaningEn": "Hello! Welcome!"
          },
          {
            "ko": "식사하셨어요?",
            "meaningEn": "Have you eaten?"
          },
          {
            "ko": "MBTI가 어떻게 되세요?",
            "meaningEn": "What is your MBTI?"
          },
          {
            "ko": "뭐야!",
            "meaningEn": "What is that?!",
            "youtubeUrl": "https://www.youtube.com/watch?v=6khJykNgUBg&t=46s"
          }
        ]
      },
      "jeju-hallasan": {
        "id": "jeju-hallasan",
        "rank": 99,
        "primaryColor": "#2d6a4f",
        "secondaryColor": "#74c69d",
        "emblemImg": "",
        "logoSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"7\" fill=\"#2d6a4f\"/><polygon points=\"16,6 26,24 6,24\" fill=\"#74c69d\"/><polygon points=\"16,6 20,13 12,13\" fill=\"#FFFFFF\"/><circle cx=\"24\" cy=\"8\" r=\"2\" fill=\"#FFAA00\"/></svg>",
        "cityKey": "jeju",
        "cityNameEn": "Jeju Island",
        "cityNameKo": "제주",
        "shortCityEn": "Jeju",
        "shortCityKo": "제주",
        "cityHanja": "濟州",
        "teamNameEn": "Hallasan",
        "teamNameKo": "한라산",
        "stadiumEn": "Hallasan · UNESCO World Natural Heritage",
        "stadiumKo": "한라산 · 유네스코 세계자연유산",
        "coords": [
          33.3617,
          126.5292
        ],
        "zoomLevel": 13.5,
        "civicAnchorEn": "• Governing Administrative Entity: Jeju Special Self-Governing Province & Hallasan National Park\n• Founded: Designated National Park in 1970; Established as Korea's sole Special Self-Governing Province in 2006 (descended from the ancient Tamna Kingdom)\n• Main Sectors: UNESCO Triple Crown Environmental Protection (Biosphere Reserve, World Natural Heritage, Global Geopark), Eco-Tourism & Hospitality, Renewable Clean Energy (Carbon-Free Island Initiative), Tangerine & Marine Industries\n• Assessed Value / Assets: Incalculable national ecological and economic heritage asset (estimated natural capital and tourism economic value exceeding 15 trillion KRW annually)",
        "civicAnchorKo": "• 관할 및 관리기관: 제주특별자치도 & 한라산국립공원 관리소\n• 지정 및 모태: 1970년 대한민국 국립공원 지정, 2006년 역사적인 옛 탐라국의 자치 전통을 계승한 대한민국 유일의 '특별자치도' 출범\n• 핵심 주력분야: 유네스코 세계자연유산 3관왕 생태계 보전, 친환경 에코 관광 및 호스피탈리티, 신재생 청정에너지(카본 프리 아일랜드), 감귤 및 수산 1차 산업\n• 자산 및 기업가치: 산정 불가의 국가 최고 자연유산 자산 (연간 관광 및 생태계 환경 서비스 경제적 가치 15조 원 이상)",
        "photos": [
          {
            "src": "https://tong.visitkorea.or.kr/cms/resource/99/2653599_image2_1.jpg",
            "labelEn": "Hallasan Mountain",
            "labelKo": "한라산"
          },
          {
            "src": "images/cities/jeju-hallasan/2_landmark.jpg",
            "labelEn": "O'sulloc Tea Museum",
            "labelKo": "오설록 티뮤지엄"
          },
          {
            "src": "images/cities/jeju-hallasan/3_dish.jpg",
            "labelEn": "Jeju Gwanghae Aewol - Aircraft Carrier",
            "labelKo": "제주광해 애월 - 항공모함 왕갈치조림"
          }
        ],
        "anthem": {
          "titleEn": "Jeju Island Blue Night (Jeju-do Pureun Bam)",
          "titleKo": "제주도 푸른 밤",
          "originEn": "Choi Sung-won 1988 classic · Jeju Tourism Official",
          "originKo": "최성원 1988년 명곡 · 제주특별자치도 공식",
          "noteEn": "The timeless, beloved melody inviting weary souls to leave the city and fly to the starlit tangerine groves of Jeju.",
          "noteKo": "떠나요 둘이서 모든 걸 훌훌 털어버리고! 대한민국 국민 모두가 사랑하는 낭만 가득한 제주의 대표 힐링 명곡이에요.",
          "youtubeId": "QkX_XQ5-6bA",
          "timestamp": 0
        },
        "phrases": [
          {
            "ko": "혼저옵서예!",
            "meaningEn": "Please come in"
          },
          {
            "ko": "밥 먹언?",
            "meaningEn": "Did you eat?"
          },
          {
            "ko": "무사 경했니?",
            "meaningEn": "Why did you do that?"
          },
          {
            "ko": "한라산 정복!",
            "meaningEn": "Conquered Hallasan!"
          }
        ]
      }
    }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KBO_DATA;
}

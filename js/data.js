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
    "seoul-gocheok-kiwoom"   // 10. Kiwoom Heroes - Seoul (Gocheok)
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
    { nameEn: "Seoul Station", nameKo: "서울역 (KTX)", coords: [37.5559, 126.9723], type: "ktx" },
    { nameEn: "Yongsan Station", nameKo: "용산역 (KTX)", coords: [37.5298, 126.9647], type: "ktx" },
    { nameEn: "Suseo Station", nameKo: "수서역 (KTX)", coords: [37.4874, 127.1022], type: "ktx" },
    { nameEn: "Gwangmyeong Station", nameKo: "광명역 (KTX)", coords: [37.4162, 126.8848], type: "ktx" },
    { nameEn: "Dongtan Station", nameKo: "동탄역 (KTX)", coords: [37.1995, 127.0963], type: "ktx" },
    { nameEn: "Cheonan-Asan Station", nameKo: "천안아산역 (KTX)", coords: [36.7944, 127.1044], type: "junction" },
    { nameEn: "Osong Station", nameKo: "오송역 (KTX 분기)", coords: [36.6190, 127.3270], type: "junction" },
    { nameEn: "Daejeon Station", nameKo: "대전역 (KTX)", coords: [36.3325, 127.4342], type: "ktx" },
    { nameEn: "Gimcheon-Gumi Station", nameKo: "김천구미역 (KTX)", coords: [36.1150, 128.1800], type: "ktx" },
    { nameEn: "Dongdaegu Station", nameKo: "동대구역 (KTX)", coords: [35.8797, 128.6285], type: "ktx" },
    { nameEn: "Singyeongju Station", nameKo: "신경주역 (KTX)", coords: [35.7975, 129.1386], type: "ktx" },
    { nameEn: "Ulsan Station", nameKo: "울산역 (KTX)", coords: [35.5510, 129.1380], type: "ktx" },
    { nameEn: "Busan Station", nameKo: "부산역 (KTX)", coords: [35.1152, 129.0422], type: "ktx" },
    { nameEn: "Gongju Station", nameKo: "공주역 (KTX)", coords: [36.3980, 127.0990], type: "ktx" },
    { nameEn: "Iksan Station", nameKo: "익산역 (KTX)", coords: [35.9405, 126.9460], type: "ktx" },
    { nameEn: "Jeongeup Station", nameKo: "정읍역 (KTX)", coords: [35.5750, 126.8420], type: "ktx" },
    { nameEn: "Gwangju-Songjeong Station", nameKo: "광주송정역 (KTX)", coords: [35.1378, 126.7915], type: "ktx" },
    { nameEn: "Changwon-Jungang Station", nameKo: "창원중앙역 (KTX)", coords: [35.2359, 128.6941], type: "ktx" },
    { nameEn: "Masan Station", nameKo: "마산역 (KTX)", coords: [35.2345, 128.5830], type: "ktx" }
  ],

  // --------------------------------------------------------------------------
  // The 10 Entries (8 Cities & Neighborhoods)
  // --------------------------------------------------------------------------
  entries: {
    "seoul-jamsil-lg": {
      id: "seoul-jamsil-lg",
      rank: 3,
      primaryColor: "#C30037",
      secondaryColor: "#222222",
      shortCityEn: "Seoul (Jamsil)",
      shortCityKo: "서울 잠실",
      emblemImg: "images/logos/emblem_LG.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#C30037"/><circle cx="16" cy="16" r="11" fill="#222222"/><text x="16" y="21" font-family="Arial Black, Impact, sans-serif" font-size="13" font-weight="900" text-anchor="middle" fill="#FFFFFF">LG</text></svg>`,
      cityKey: "seoul",
      cityNameEn: "Seoul (Jamsil)",
      cityNameKo: "서울특별시 (잠실)",
      cityHanja: "首爾 特別市 蠶室",
      neighborhoodEn: "Songpa-gu · Jamsil Sports Complex",
      neighborhoodKo: "송파구 잠실동 · 올림픽로",
      teamNameEn: "LG Twins",
      teamNameKo: "LG 트윈스",
      stadiumEn: "Jamsil Baseball Stadium",
      stadiumKo: "잠실종합운동장 야구장",
      coords: [37.5122, 127.0719],
      zoomLevel: 15.6,
      civicAnchorEn: "Headquartered on the financial island of Yeouido and the tech campus of Magok, LG’s urban identity converges here at the open-air riverfront of Jamsil. Sharing this cathedral of Seoul baseball since 1990, the club carries the stylish, cosmopolitan pulse of the modern metropolis.",
      civicAnchorKo: "여의도 쌍둥이 빌딩과 마곡 R&D 캠퍼스에 뿌리를 둔 LG의 도심적 감각이 한강변 잠실에서 교차합니다. 1990년부터 서울의 심장부를 지켜온 구단으로, 세련된 수도 서울의 자부심과 도시민의 퇴근길 열정을 대변합니다.",
      storyEn: "On summer evenings in Jamsil, the humid breeze drifts in off the Han River just as hundred-car subway trains empty out at Sports Complex Station. Workers loosen their neckties over cold draft beer and fried chicken on concrete steps, leaving the glass skyscrapers of Gangnam behind. There is a breezy, almost cinematic grace to watching the twilight turn lilac above the stadium lights while twenty thousand voices chant the names of outfielders against the rhythm of drumbeats.",
      storyKo: "여름날 해질녘 잠실에서는 한강에서 불어오는 미지근한 강바람과 종합운동장역을 빠져나오는 퇴근길 인파가 하나로 뒤섞입니다. 강남의 빌딩 숲을 뒤로하고 콘크리트 관중석에 걸터앉아 시원한 생맥주와 치킨을 나누는 순간, 서울 특유의 도시적 세련미와 소박한 정취가 교차합니다. 조명탑 너머로 보랏빛 노을이 내려앉고 수만 명이 외야수의 이름을 연호할 때, 이 거대한 수도가 하나의 따스한 마을처럼 느껴집니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80",
          labelEn: "Place · Han River Twilight & Lotte World Tower",
          labelKo: "장소 · 한강의 해질녘과 잠실 스카이라인"
        },
        {
          src: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=800&q=80",
          labelEn: "Street · Sincheon (Jamsil-saenae) Alleyways",
          labelKo: "거리 · 잠실새내 먹자골목의 불빛"
        },
        {
          src: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&q=80",
          labelEn: "Food · Chimaek & Spicy Cold Noodles",
          labelKo: "음식 · 잠실 명물 3루 야구장 치맥과 비빔냉면"
        }
      ],
      anthem: {
        titleEn: "Seoul’s LG Twins (Seoul Hymn)",
        titleKo: "서울의 찬가 / 사랑한다 LG",
        originEn: "Patty Kim classic reimagined · Jamsil Signature",
        originKo: "패티김 원곡 · 잠실의 대표 응원가",
        noteEn: "Sung passionately during late-inning rallies as twilight settles over the Olympic stadium complex.",
        noteKo: "경기 종반 승부처마다 잠실 밤하늘을 수놓는 서울의 대표적인 떼창 응원가.",
        youtubeId: "J2M5s_h1TjQ",
        timestamp: 12
      },
      phrases: [
        {
          ko: "안녕하세요! 어디 가세요?",
          romaja: "Annyeonghaseyo! Eodi gaseyo?",
          meaningEn: "Hello! Where are you headed?",
          descKo: "표준어의 단정하고 부드러운 인사",
          noteEn: "Clean, polite Seoul cadence spoken in bustling transit hubs."
        },
        {
          ko: "식사는 하셨어요?",
          romaja: "Siksaneun hasyeosseoyo?",
          meaningEn: "Have you eaten yet?",
          descKo: "배려가 담긴 정중한 서울식 안부",
          noteEn: "The polite, respectful question of care in the capital."
        },
        {
          ko: "무적 LG!",
          romaja: "Mujeok LG!",
          meaningEn: "Invincible LG!",
          descKo: "잠실벌을 뒤흔드는 승리의 외침",
          noteEn: "The iconic slogan roaring through Jamsil’s 3rd base concourse."
        }
      ]
    },

    "seoul-jamsil-doosan": {
      id: "seoul-jamsil-doosan",
      rank: 5,
      primaryColor: "#131230",
      secondaryColor: "#ED1C24",
      shortCityEn: "Seoul (Jamsil)",
      shortCityKo: "서울 잠실",
      emblemImg: "images/logos/emblem_OB.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#131230"/><text x="16" y="23" font-family="Arial Black, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#ED1C24">D</text></svg>`,
      cityKey: "seoul",
      cityNameEn: "Seoul (Jamsil / Dongdaemun Heritage)",
      cityNameKo: "서울특별시 (잠실 · 동대문 헤리티지)",
      cityHanja: "首爾 特別市 斗山",
      neighborhoodEn: "Songpa-gu · Dongdaemun Historic Lineage",
      neighborhoodKo: "송파구 잠실동 · 동대문 OB 베어스 원류",
      teamNameEn: "Doosan Bears",
      teamNameKo: "두산 베어스",
      stadiumEn: "Jamsil Baseball Stadium",
      stadiumKo: "잠실종합운동장 야구장",
      coords: [37.5122, 127.0719],
      zoomLevel: 15.6,
      civicAnchorEn: "The original champion of KBO’s inaugural 1982 season, the Bears trace their lineage from old Dongdaemun Stadium straight into Jamsil. Carrying the heritage of Korea’s oldest modern enterprise, Doosan embodies hard-nosed hustle, relentless stamina, and gritty hustle-doo spirit.",
      civicAnchorKo: "1982년 프로야구 원년 우승을 일궈낸 베어스는 옛 동대문운동장의 흙먼지에서 잠실로 이어지는 깊은 역사를 품고 있습니다. 120년 전통 기업의 뚝심과 끝까지 물고 늘어지는 '허슬두'의 끈기가 구단의 정체성입니다.",
      storyEn: "Walking through the old markets around Dongdaemun and down into Jamsil, you meet grandmothers and street vendors who still remember the opening pitch of 1982. Seoul is often praised for its sleek futuristic shine, but underneath is an immense tenacity built by generations who worked twelve-hour shifts and found catharsis in nine innings of stubborn, defensive baseball. The Bears reflect that patient, unyielding spine of the city.",
      storyKo: "동대문의 오래된 평화시장 뒷골목부터 잠실 구장에 이르기까지, 서울의 골목 곳곳에는 1982년 프로야구 원년의 함성을 생생히 기억하는 이들이 살아갑니다. 첨단과 속도의 도시로 불리는 서울이지만, 그 이면에는 묵묵히 땀 흘려 오늘을 일군 서민들의 단단한 끈기가 흐르고 있습니다. 베어스의 야구는 쉬이 물러서지 않는 서울의 우직한 자부심을 닮았습니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
          labelEn: "Place · Dongdaemun Design Plaza & Ancient City Wall",
          labelKo: "장소 · 동대문 성곽과 DDP의 공존"
        },
        {
          src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
          labelEn: "Street · Gwangjang Market Bindaetteok Alley",
          labelKo: "거리 · 광장시장 먹거리 골목의 온기"
        },
        {
          src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          labelEn: "Food · Mung Bean Pancakes & Steaming Broth",
          labelKo: "음식 · 고소한 녹두 빈대떡과 막걸리"
        }
      ],
      anthem: {
        titleEn: "Song of the Bears (Hustle Doo)",
        titleKo: "승리의 두산 / 베어스 찬가",
        originEn: "Original Doosan rally anthem",
        originKo: "두산 베어스 승리의 찬가",
        noteEn: "Echoes through the 1st base side with rhythmic towel waves and collective clapping.",
        noteKo: "1루 응원석을 하얗게 뒤덮는 타월 응원과 절도 있는 박수로 울려 퍼지는 찬가.",
        youtubeId: "Wv0c_v0V0_U",
        timestamp: 5
      },
      phrases: [
        {
          ko: "수고 많으셨습니다",
          romaja: "Sugo maneusyeossseumnida",
          meaningEn: "Thank you for your hard work",
          descKo: "하루의 땀과 노고를 보듬는 인사",
          noteEn: "The essential daily phrase of mutual respect after a long day."
        },
        {
          ko: "식사 든든히 챙겨 드세요",
          romaja: "Siksa deundeunhi chaenggyeo deuseyo",
          meaningEn: "Make sure you eat a hearty meal",
          descKo: "건강과 힘을 북돋는 다정한 염려",
          noteEn: "Expressing genuine care for someone's vitality and stamina."
        },
        {
          ko: "허슬두! (Hustle Doo)",
          romaja: "Heoseuldu!",
          meaningEn: "Never give up / Relentless effort",
          descKo: "두산 베어스의 불굴의 팀 컬러",
          noteEn: "The iconic motto capturing the grit and tenacity of the club."
        }
      ]
    },

    "seoul-gocheok-kiwoom": {
      id: "seoul-gocheok-kiwoom",
      rank: 10,
      primaryColor: "#570514",
      secondaryColor: "#937042",
      shortCityEn: "Seoul (Gocheok)",
      shortCityKo: "서울 고척",
      emblemImg: "images/logos/emblem_WO.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#570514"/><text x="16" y="23" font-family="Arial Black, Impact, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#FFFFFF">H</text></svg>`,
      cityKey: "seoul",
      cityNameEn: "Seoul (Guro / Gocheok Dome)",
      cityNameKo: "서울특별시 (구로 · 고척스카이돔)",
      cityHanja: "首爾 特別市 九老 高尺",
      neighborhoodEn: "Guro-gu · Anyangcheon & Tech Corridor",
      neighborhoodKo: "구로구 고척동 · 안양천과 경인로",
      teamNameEn: "Kiwoom Heroes",
      teamNameKo: "키움 히어로즈",
      stadiumEn: "Gocheok Sky Dome",
      stadiumKo: "고척스카이돔",
      coords: [37.4982, 126.8671],
      zoomLevel: 15.8,
      civicAnchorEn: "Set amidst the industrial workshops and burgeoning IT valleys of southwestern Seoul along Line 1, Gocheok Sky Dome is Korea’s only indoor baseball arena. The Heroes represent the resilient underdog spirit—an independently operated club without a corporate parent chaebol.",
      civicAnchorKo: "구로공단에서 디지털 밸리로 변모한 서남권의 역동적인 기운과 안양천변에 자리한 대한민국 유일의 돔구장입니다. 대기업 모기업 없이 순수 네이밍 스폰서십으로 자생하는 키움 히어로즈는 끝없는 도전과 청년 정신을 상징합니다.",
      storyEn: "Southwestern Seoul carries a rhythmic percussion all its own: the metallic clatter of hardware workshops in Mullae-dong blending into the hum of startup lofts and high-frequency subway switches at Guro Station. Inside Gocheok Dome, the air is climate-controlled and insulated from monsoon downpours, but the energy feels fierce and youthful. Young fans gather under the silver roof to cheer on an underdog that continuously produces world-class talent against all odds.",
      storyKo: "문래동 철공소 골목의 쇳소리와 구로디지털단지의 분주한 키보드 소리가 공존하는 서울 서남부는 끊임없이 탈바꿈하는 도시의 실험실입니다. 빗줄기가 쏟아지는 장마철에도 은빛 지붕 아래에서 야구를 즐길 수 있는 고척돔은 젊고 도전적인 열기로 가득합니다. 거대 자본에 기대지 않고 독자적으로 세계적 선수들을 키워내는 히어로즈의 모습은 오늘을 살아가는 청년들의 도전과 닮았습니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
          labelEn: "Place · Gocheok Sky Dome & Anyangcheon Stream",
          labelKo: "장소 · 안양천변의 은빛 고척스카이돔"
        },
        {
          src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          labelEn: "Street · Mullae Creative Art & Iron Alley",
          labelKo: "거리 · 문래동 예술창작촌과 철공소 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
          labelEn: "Food · Guro Sundae-guk & Craft Beer",
          labelKo: "음식 · 구로 골목의 진한 순댓국과 수제맥주"
        }
      ],
      anthem: {
        titleEn: "Heroes Anthem (Dream on Heroes)",
        titleKo: "영웅출정가 / 꿈이 있기에",
        originEn: "Kiwoom Heroes Official Theme",
        originKo: "키움 히어로즈 공식 출정가",
        noteEn: "Features a modern rock rhythm echoing off the acoustic dome ceiling.",
        noteKo: "돔구장의 독특한 음향을 울리는 웅장한 록 비트의 대표 테마곡.",
        youtubeId: "vBqJd8Z0q8g",
        timestamp: 15
      },
      phrases: [
        {
          ko: "오늘 하루도 파이팅!",
          romaja: "Oneul harudo paiting!",
          meaningEn: "Let's do our best today!",
          descKo: "아침 출근길과 경기 시작 전 나누는 응원",
          noteEn: "The ubiquitous Korean energetic cheer for daily perseverance."
        },
        {
          ko: "밥 먹고 힘내자!",
          romaja: "Bap meokgo himnaeja!",
          meaningEn: "Let’s eat well and gather our strength!",
          descKo: "소박한 식사 한 끼에 담긴 격려",
          noteEn: "Fueling up for challenging work or an intense match."
        },
        {
          ko: "영웅 군단!",
          romaja: "Yeongung gundan!",
          meaningEn: "The Legion of Heroes!",
          descKo: "고척돔을 메우는 자부심의 호칭",
          noteEn: "Affectionate rallying cry used by the passionate fan base."
        }
      ]
    },

    "incheon-ssg": {
      id: "incheon-ssg",
      rank: 9,
      primaryColor: "#CE0E2D",
      secondaryColor: "#917042",
      shortCityEn: "Incheon",
      shortCityKo: "인천",
      emblemImg: "images/logos/emblem_SK.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#CE0E2D"/><text x="16" y="23" font-family="Arial Black, Impact, sans-serif" font-size="17" font-weight="900" text-anchor="middle" fill="#FFFFFF">L</text><polygon points="16,4 17.5,8.5 22,8.5 18.5,11 20,15.5 16,12.5 12,15.5 13.5,11 10,8.5 14.5,8.5" fill="#E6C898"/></svg>`,
      cityKey: "incheon",
      cityNameEn: "Incheon",
      cityNameKo: "인천광역시",
      cityHanja: "仁川 廣域市",
      neighborhoodEn: "Michuhol-gu · Munhak & Port District",
      neighborhoodKo: "미추홀구 문학동 · 개항장과 연안부두",
      teamNameEn: "SSG Landers",
      teamNameKo: "SSG 랜더스",
      stadiumEn: "Incheon SSG Landers Field",
      stadiumKo: "인천SSG랜더스필드",
      coords: [37.4370, 126.6933],
      zoomLevel: 15.6,
      civicAnchorEn: "Korea’s historic gateway to the sea, where Western baseball first landed through the port of Jemulpo in the late 19th century. From the SK Wyverns dynasty to Shinsegae’s SSG Landers, baseball in Incheon is deeply intertwined with coastal trade, port markets, and red-brick history.",
      civicAnchorKo: "19세기 말 제물포 개항을 통해 서양 야구가 한반도에 첫발을 디딘 역사적인 항구도시입니다. SK 와이번스의 왕조 시절을 거쳐 신세계 SSG 랜더스에 이르기까지, 인천 야구는 서해 갯벌의 짠바람과 개항장의 붉은 벽돌 골목 속에 살아 숨 쉽니다.",
      storyEn: "Incheon smells of low-tide sea breeze, roasted coffee beans from vintage port cafes, and simmering black bean paste in Chinatown. Walking up Jayu Park past nineteenth-century consulates, the vista opens over massive container cranes swinging against yellow sunsets. Incheon fans have a maritime openness—blunt spoken, deeply loyal, and quick to welcome strangers to share barbecue skewers right on the ballpark outfield lawn.",
      storyKo: "인천의 골목에는 썰물 때 밀려오는 바다 냄새와 개항장 목조 카페의 볶은 원두 향, 차이나타운의 자장 볶는 고소한 냄새가 겹겹이 쌓여 있습니다. 자유공원에 올라서면 거대한 컨테이너 크레인이 붉은 서해 노을을 배경으로 분주히 움직이는 장관이 펼쳐집니다. 항구도시 특유의 호탕함과 따스함을 지닌 인천 사람들은 외지인을 스스럼없이 외야 바비큐존으로 초대해 고기를 건넵니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
          labelEn: "Place · Incheon Open Port Heritage Street & Red Brick Mansions",
          labelKo: "장소 · 개항장 근대건축거리와 조계지 계단"
        },
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
          labelEn: "Street · Sinpo International Market Dakgangjeong Alley",
          labelKo: "거리 · 신포국제시장 닭강정 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
          labelEn: "Food · Crispy Sweet Fried Chicken & Jajangmyeon",
          labelKo: "음식 · 가마솥에 튀겨낸 신포 닭강정과 원조 자장면"
        }
      ],
      anthem: {
        titleEn: "Yeonan Pier (Yeonan Bodu)",
        titleKo: "연안부두",
        originEn: "Kim Trio 1979 classic · Anthem of Incheon",
        originKo: "김트리오 원곡 · 인천 야구의 영원한 찬가",
        noteEn: "When the 8th inning arrives, the entire stadium sings together holding red flashlights aloft.",
        noteKo: "8회 초가 끝나면 랜더스필드 전체가 붉은 조명을 켜고 파도치듯 부르는 애창곡.",
        youtubeId: "D8eGk-eD4rQ",
        timestamp: 8
      },
      phrases: [
        {
          ko: "어서 오십쇼, 인천입니다!",
          romaja: "Eoseo osipsyo, Incheonimnida!",
          meaningEn: "Welcome to Incheon, the gateway port!",
          descKo: "바닷바람처럼 시원시원한 항구의 환영 인사",
          noteEn: "Broad, welcoming tone of the coastal gateway city."
        },
        {
          ko: "밥은 든든하게 잡쉈어?",
          romaja: "Babeun deundeunhage japswasseo?",
          meaningEn: "Did you get a hearty meal?",
          descKo: "경기도·인천 특유의 푸근한 말투",
          noteEn: "Everyday warm inquiry heard in Sinpo market stalls."
        },
        {
          ko: "연안부두로 가자!",
          romaja: "Yeonanboduro gaja!",
          meaningEn: "Let's head down to Yeonan Pier!",
          descKo: "바다와 야구의 정취를 부르는 외침",
          noteEn: "Symbol of Incheon identity and stadium singalong spirit."
        }
      ]
    },

    "suwon-kt": {
      id: "suwon-kt",
      rank: 1,
      primaryColor: "#EC1C24",
      secondaryColor: "#222222",
      shortCityEn: "Suwon",
      shortCityKo: "수원",
      emblemImg: "images/logos/emblem_KT.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#222222"/><text x="16" y="22" font-family="Arial Black, Impact, sans-serif" font-size="15" font-weight="900" text-anchor="middle" fill="#EC1C24" letter-spacing="-0.5">kt</text></svg>`,
      cityKey: "suwon",
      cityNameEn: "Suwon",
      cityNameKo: "수원특례시",
      cityHanja: "水原 特例市",
      neighborhoodEn: "Jangan-gu · Hwaseong Fortress & Tech Hub",
      neighborhoodKo: "장안구 조원동 · 수원화성과 통닭거리",
      teamNameEn: "KT Wiz",
      teamNameKo: "KT 위즈",
      stadiumEn: "Suwon kt wiz Park",
      stadiumKo: "수원케이티위즈파크",
      coords: [37.2997, 127.0097],
      zoomLevel: 15.6,
      civicAnchorEn: "Surrounded by King Jeongjo’s 18th-century UNESCO World Heritage fortress walls and modern global semiconductor campuses, Suwon is a city of ingenious design. kt wiz, the youngest franchise to claim a Korean Series title, embodies this blend of royal heritage, wizardly tech, and festive community.",
      civicAnchorKo: "정조대왕의 철학과 축성술이 담긴 유네스코 세계유산 수원화성과 최첨단 IT 기술이 어우러진 계획도시입니다. 막내 구단에서 출발해 창단 첫 통합우승의 기적을 쓴 kt wiz는 성곽 도시의 자부심과 마법 같은 활기를 발산합니다.",
      storyEn: "Walking atop the crenellated stonework of Hwaseong Fortress at sunset, you look down upon tile-roof pavilions side-by-side with bustling rows of whole-chicken fryers on Suwon Chicken Street. The aroma of sesame oil and crisp batter floats through the evening breeze. At kt wiz Park, drone light shows illuminate the night sky while families sit at tabletop picnic seats sharing cauldron-fried chicken. Suwon has mastered the art of balancing ancient majesty with neighborly comfort.",
      storyKo: "해질녘 수원화성의 성곽길을 따라 걸으면, 고풍스러운 누각 아래로 가마솥 기름 냄새가 고소하게 번지는 남수동 통닭거리가 내려다보입니다. 야구장 관중석에 삼삼오오 둘러앉아 바삭한 통닭을 뜯으며 드론 라이트쇼를 감상하는 풍경은 수원만의 여유이자 즐거움입니다. 정조의 효심과 실학정신이 깃든 이 도시는 유서 깊은 성벽의 무게감 속에서도 이웃 간의 넉넉한 웃음을 잃지 않습니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
          labelEn: "Place · UNESCO Hwaseong Fortress Secret Sluice Gate",
          labelKo: "장소 · 유네스코 수원화성 화홍문과 방화수류정"
        },
        {
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          labelEn: "Street · Suwon Fried Chicken Street in Namsu-dong",
          labelKo: "거리 · 남수동 가마솥 통닭거리의 활기"
        },
        {
          src: "https://images.unsplash.com/photo-1583032015879-c5c5896a40c9?w=800&q=80",
          labelEn: "Food · Golden Crispy Whole Fried Chicken (Jinmi)",
          labelKo: "음식 · 가마솥에 튀겨낸 바삭한 왕갈비통닭"
        }
      ],
      anthem: {
        titleEn: "Magical kt wiz (We Are the Wiz)",
        titleKo: "승리의 마법사 / 마법의 성",
        originEn: "kt wiz Championship Theme",
        originKo: "kt wiz 승리의 테마송",
        noteEn: "Sung with red-and-black light batons swinging in rhythm against the fortress sky.",
        noteKo: "성곽 도시의 밤하늘을 수놓는 붉은 응원봉의 물결과 함께 불리는 희망의 노래.",
        youtubeId: "l89TqRzK_jM",
        timestamp: 10
      },
      phrases: [
        {
          ko: "화성의 고장, 수원에 잘 오셨습니다!",
          romaja: "Hwaseong-ui gojang, Suwone jal osyeossseumnida!",
          meaningEn: "Welcome to Suwon, the fortress capital!",
          descKo: "역사와 문화가 깃든 품격 있는 환영",
          noteEn: "Proud greeting referencing the historic royal foundation."
        },
        {
          ko: "통닭 한 마리 뜯고 가유~",
          romaja: "Tongdak han mari tteutgo gayu~",
          meaningEn: "Stop by and grab a fried chicken with us~",
          descKo: "경기 남부 특유의 나긋나긋하고 정겨운 어조",
          noteEn: "Friendly local invite to share Suwon’s iconic cauldron food."
        },
        {
          ko: "마법 같은 승리!",
          romaja: "Mabeop gateun seungni!",
          meaningEn: "A magical victory!",
          descKo: "기적을 일구는 위즈의 상징 구호",
          noteEn: "Celebratory shout of the youngest champion club."
        }
      ]
    },

    "daejeon-hanwha": {
      id: "daejeon-hanwha",
      rank: 7,
      primaryColor: "#F37321",
      secondaryColor: "#2B2B2B",
      shortCityEn: "Daejeon",
      shortCityKo: "대전",
      emblemImg: "images/logos/emblem_HH.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#F37321"/><text x="16" y="23" font-family="Arial Black, Impact, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#2B2B2B">E</text></svg>`,
      cityKey: "daejeon",
      cityNameEn: "Daejeon",
      cityNameKo: "대전광역시",
      cityHanja: "大田 廣域市",
      neighborhoodEn: "Jung-gu · Busa-dong & Gyeongbu Rail Junction",
      neighborhoodKo: "중구 부사동 · 으능정이와 대전역 철도 교차점",
      teamNameEn: "Hanwha Eagles",
      teamNameKo: "한화 이글스",
      stadiumEn: "Hanwha Life Eagles Park (New Baseball Dream Park)",
      stadiumKo: "한화생명이글스파크",
      coords: [36.3171, 127.4291],
      zoomLevel: 15.6,
      civicAnchorEn: "The geographic heart and historic railroad junction of the Korean peninsula. Renowned for its patient ‘bodhisattva’ fans who love their team unconditionally through decades of heartbreak, Daejeon mirrors the calm, gentle warmth and understated humor of the Chungcheong region.",
      civicAnchorKo: "한반도의 허리이자 경부선·호남선이 갈라지는 철도의 요충지입니다. 기나긴 패배의 터널 속에서도 보살 같은 미소로 한결같은 응원을 보내온 '보살 팬' 문화는 느긋하지만 속 깊은 충청도의 인정과 유머를 대변합니다.",
      storyEn: "Daejeon is often described by fast-paced Seoulites as quiet and unhurried, but to me it felt like the deep breath Korea takes between journeys. Stepping off the KTX train, the sweet scent of freshly baked fried soboro bread from Sungsimdang Bakery fills the morning air. People speak with elongated vowels, ending sentences with a soothing ‘-yu’. In the stands at Eagles Park, even a strikeout is met with gentle laughter and orange balloon cheers—a rare, heartwarming reminder that community matters far more than the final score.",
      storyKo: "대전은 분주한 수도권 사람들에게 종종 조용한 도시로 불리지만, 제게는 한국이 잠시 깊은 숨을 들이쉬는 평화로운 쉼표처럼 느껴졌습니다. 대전역에 내리면 성심당에서 갓 구워낸 튀김소보로의 달콤한 향기가 코끝을 스치고, 골목길 어르신들은 말끝을 부드럽게 늘어뜨리며 ‘-유’로 인사를 건넵니다. 이글스파크 관중석에서 마주한 오렌지빛 물결은 승패를 넘어 사람과 사람이 나누는 따스한 유대감의 진정한 의미를 가르쳐주었습니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
          labelEn: "Place · Gapcheon River Greenways & Expo Bridge",
          labelKo: "장소 · 갑천 물줄기와 엑스포다리의 노을"
        },
        {
          src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
          labelEn: "Street · Sungsimdang Bakery & Euneungjeongi Street",
          labelKo: "거리 · 으능정이 문화의 거리와 성심당 본점"
        },
        {
          src: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&q=80",
          labelEn: "Food · Spicy Kalguksu Noodles & Fried Soboro",
          labelKo: "음식 · 얼큰한 공주칼국수와 바삭한 튀김소보로"
        }
      ],
      anthem: {
        titleEn: "I Am Happy (Naneun Haengbokhamnida)",
        titleKo: "나는 행복합니다",
        originEn: "Hanwha Eagles Signature Anthem",
        originKo: "한화 이글스 불후의 시그니처 찬가",
        noteEn: "Sung with beaming smiles regardless of whether the Eagles are winning or trailing by ten runs.",
        noteKo: "점수 차에 상관없이 온 관중이 주황빛 손수건을 흔들며 부르는 가장 행복한 야구 노래.",
        youtubeId: "zC0T9FvR8Qc",
        timestamp: 10
      },
      phrases: [
        {
          ko: "괜찮아유~ 다 잘 될 거유",
          romaja: "Gwaenchannayu~ Da jal doel geoyu",
          meaningEn: "It's all right~ Everything will turn out fine",
          descKo: "조급함을 씻어내는 충청도의 너그러운 위로",
          noteEn: "The quintessential slow, comforting Chungcheong dialect cadence."
        },
        {
          ko: "진지 잡수셨슈?",
          romaja: "Jinji japsusyeoss-syu?",
          meaningEn: "Have you had your meal yet?",
          descKo: "어르신께 올리는 온화하고 구수한 안부",
          noteEn: "Polite regional meal greeting with the warm signature '-syu' ending."
        },
        {
          ko: "이따 봐유!",
          romaja: "Itta bwayu!",
          meaningEn: "See you in a bit!",
          descKo: "서두르지 않고 여운을 남기는 작별 인사",
          noteEn: "Affectionate farewell reflecting unhurried hospitality."
        }
      ]
    },

    "daegu-samsung": {
      id: "daegu-samsung",
      rank: 2,
      primaryColor: "#074CA1",
      secondaryColor: "#5C768D",
      shortCityEn: "Daegu",
      shortCityKo: "대구",
      emblemImg: "images/logos/emblem_SS.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#074CA1"/><text x="16" y="22" font-family="Arial Black, Impact, sans-serif" font-size="15" font-weight="900" text-anchor="middle" fill="#FFFFFF" letter-spacing="-1">SL</text></svg>`,
      cityKey: "daegu",
      cityNameEn: "Daegu",
      cityNameKo: "대구광역시",
      cityHanja: "大邱 廣域市",
      neighborhoodEn: "Suseong-gu · Yeonho-dong & Historic Basin",
      neighborhoodKo: "수성구 연호동 · 팔공산과 안지랑 골목",
      teamNameEn: "Samsung Lions",
      teamNameKo: "삼성 라이온즈",
      stadiumEn: "Daegu Samsung Lions Park",
      stadiumKo: "대구삼성라이온즈파크",
      coords: [35.8411, 128.6815],
      zoomLevel: 15.6,
      civicAnchorEn: "Surrounded by a dramatic ring of mountains, the high-temperature basin of Daegu is the cradle of Korea’s textile and modern industrial rise. The Samsung Lions—the only franchise to retain its name and corporate home since 1982—stand as a proud monument to blue-blooded consistency and championship poise.",
      civicAnchorKo: "팔공산과 비슬산이 병풍처럼 둘러싼 뜨거운 분지 도시 대구는 근대 섬유산업과 삼성상회의 발원지입니다. 1982년 원년부터 팀 이름과 모기업을 한 번도 바꾸지 않은 푸른 피의 삼성 라이온즈는 대구 시민들의 흔들리지 않는 긍지입니다.",
      storyEn: "Daegu teaches you what stillness feels like inside a furnace. When the midsummer heat of ‘Daefrica’ presses down, residents seek the shade of Apsan mountain or gather under the fans of Anjirang Gopchang Alley. Speech here is clipped, consonants are hard-edged, and people do not waste unnecessary words. Yet beneath that stoic exterior lies an intense warmth and loyalty: at the octagonal Lions Park, when twenty-five thousand people cross their arms in unison to sing ‘El Dorado’, the blue stadium vibrates like thunder across the basin.",
      storyKo: "대구는 가마솥 같은 분지 속에서의 단단한 고요가 무엇인지를 알려줍니다. 한여름 '대프리카'의 뜨거운 열기가 아스팔트를 달구면 사람들은 안지랑 골목의 연탄불 앞으로 모여들어 짧고 굵은 악센트로 서로의 안부를 묻습니다. 말수는 적고 감정 표현은 투박하지만, 한번 맺은 인연에 대한 의리는 누구보다 깊습니다. 팔각 다이아몬드 라이온즈파크에서 온 관중이 두 팔을 교차하며 '엘도라도'를 합창할 때 푸른 사자들의 심장박동이 온 분지를 흔듭니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=800&q=80",
          labelEn: "Place · Palgongsan Mountain Crest & Basin Sunset",
          labelKo: "장소 · 팔공산 갓바위 능선과 대구 분지의 노을"
        },
        {
          src: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
          labelEn: "Street · Dongseong-ro & Kim Kwang-seok Memorial Art Road",
          labelKo: "거리 · 김광석 다시그리기길과 동성로 뒷골목"
        },
        {
          src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
          labelEn: "Food · Sizzling Briquette Grilled Tripe (Gopchang)",
          labelKo: "음식 · 안지랑 골목의 노릇노릇한 연탄 막창구이"
        }
      ],
      anthem: {
        titleEn: "El Dorado",
        titleKo: "엘도라도 (El Dorado)",
        originEn: "Goombay Dance Band classic · Soul of Lions",
        originKo: "Goombay Dance Band 원곡 · 푸른 피의 영혼가",
        noteEn: "Sung at the start of the 8th inning with arms crossed overhead, swaying like a blue ocean.",
        noteKo: "8회 말 공격 직전, 2만 4천 명의 관중이 두 팔을 교차하며 부르는 라이온즈의 신화적인 찬가.",
        youtubeId: "5jGq5v_V6W0",
        timestamp: 10
      },
      phrases: [
        {
          ko: "맞나? 진짜가!",
          romaja: "Manna? Jinjjaga!",
          meaningEn: "Is that so? Really?!",
          descKo: "상승조 억양으로 놀라움과 맞장구를 치는 대구의 만능 리액션",
          noteEn: "Universal Daegu conversation hook with a sharp rising tone."
        },
        {
          ko: "밥 묵었나?",
          romaja: "Bap mugeonna?",
          meaningEn: "Have you eaten?",
          descKo: "‘묵’ 자에 강한 강세를 두는 투박하지만 속 깊은 안부",
          noteEn: "Distinctive strong stress on the middle syllable."
        },
        {
          ko: "치아라, 마!",
          romaja: "Chiara, ma!",
          meaningEn: "Forget it / Clean it up!",
          descKo: "단호하지만 뒤끝 없는 경상도 특유의 종결 표현",
          noteEn: "Blunt, affectionate dismissal among close friends."
        }
      ]
    },

    "busan-lotte": {
      id: "busan-lotte",
      rank: 8,
      primaryColor: "#002955",
      secondaryColor: "#D00F31",
      shortCityEn: "Busan",
      shortCityKo: "부산",
      emblemImg: "images/logos/emblem_LT.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#002955"/><text x="16" y="23" font-family="Georgia, serif" font-size="19" font-weight="900" text-anchor="middle" fill="#D00F31" font-style="italic">G</text></svg>`,
      cityKey: "busan",
      cityNameEn: "Busan",
      cityNameKo: "부산광역시",
      cityHanja: "釜山 廣域市",
      neighborhoodEn: "Dongnae-gu · Sajik-dong & Hillside Harbor",
      neighborhoodKo: "동래구 사직동 · 산복도로와 자갈치 포구",
      teamNameEn: "Lotte Giants",
      teamNameKo: "롯데 자이언츠",
      stadiumEn: "Sajik Baseball Stadium",
      stadiumKo: "사직야구장",
      coords: [35.1940, 129.0615],
      zoomLevel: 15.6,
      civicAnchorEn: "Korea’s maritime capital and greatest port. Often hailed as the ‘Mecca of Korean Baseball’, Sajik Stadium transforms into the world’s biggest open-air karaoke arena, where orange trash bag hats, shredded newspaper batons, and unfiltered sea breezes ignite a collective cultural catharsis.",
      civicAnchorKo: "대한민국 제1의 무역항이자 야구의 수도라 불리는 해양도시입니다. ‘사직 노래방’이라 불리는 사직구장은 주황색 비닐봉지 리본과 신문지 응원봉, 짠 바닷바람이 어우러져 세상에서 가장 뜨거운 공동체적 카타르시스를 뿜어냅니다.",
      storyEn: "Busan has the highest volume of hospitality in all of Korea. When the fishwives at Jagalchi Market toss mackerel onto crushed ice while shouting greetings three stalls over, you realize this city does not whisper—it pulls you straight into its tidal currents. Winding up the Sanbok-doro hillside roads on rickety buses, colorful homes cling to steep cliffs overlooking the blue Pacific. At Sajik, when twenty-five thousand people tie orange plastic bags around their ears and sing ‘Busan Seagulls’, you are no longer a visitor—you belong to the sea.",
      storyKo: "부산은 환대의 볼륨이 가장 큰 도시입니다. 자갈치 시장의 아주머니들이 얼음 위로 싱싱한 고등어를 툭 던지며 세 집 건너편 상인에게 호탕하게 소리를 지를 때, 이 도시는 귓속말을 하지 않고 방문자를 단숨에 거친 조류 속으로 끌어당긴다는 사실을 깨닫게 됩니다. 산복도로의 가파른 비탈길을 오르는 시내버스 창밖으로 푸른 영도 앞바다가 펼쳐지고, 사직구장에서 주황색 비닐봉지를 머리에 묶은 2만 5천 명이 ‘부산 갈매기’를 떼창할 때 외지인은 비로소 부산의 식구가 됩니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
          labelEn: "Place · Sanbok-doro Hillside Road & Port Horizon",
          labelKo: "장소 · 영도 산복도로에서 바라본 부산항 파노라마"
        },
        {
          src: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80",
          labelEn: "Street · Jagalchi Seafood Market & Nampo-dong",
          labelKo: "거리 · 자갈치 어시장과 남포동 포장마차 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
          labelEn: "Food · Steaming Pork Rice Soup (Dwaeji-gukbap)",
          labelKo: "음식 · 부추와 다대기를 듬뿍 넣은 뜨끈한 돼지국밥"
        }
      ],
      anthem: {
        titleEn: "Busan Seagulls (Busan Galmaegi)",
        titleKo: "부산 갈매기",
        originEn: "Moon Sung-jae 1982 classic · Anthem of Busan",
        originKo: "문성재 원곡 · 부산 시민의 애국가",
        noteEn: "The undisputed supreme anthem of Korean sports, echoing across the harbor when night falls on Sajik.",
        noteKo: "7회 말 끝남과 동시에 온 사직구장을 거대한 노래방으로 바꾸는 부산의 영혼가.",
        youtubeId: "r2Yn-M7K-d4",
        timestamp: 15
      },
      phrases: [
        {
          ko: "마, 부산 아이가!",
          romaja: "Ma, Busan aiga!",
          meaningEn: "Hey, this is Busan after all!",
          descKo: "사직 관중석과 포장마차 어디서나 울려 퍼지는 자부심",
          noteEn: "The iconic Busan proclamation of local grit and confidence."
        },
        {
          ko: "안녕하이소~ 밥 뭇나?",
          romaja: "Annyeonghaiso~ Bap munna?",
          meaningEn: "Hello there~ Have you eaten?",
          descKo: "해안가 특유의 빠르고 억센 억양 속에 배어 있는 정",
          noteEn: "Combined greeting and meal check heard in seaside fish stalls."
        },
        {
          ko: "아~주라! (Ah-jura!)",
          romaja: "Ah-jura!",
          meaningEn: "Give it to the child!",
          descKo: "파울볼을 잡은 어른에게 아이에게 건네라고 외치는 사직의 명물 전통",
          noteEn: "Crowd chant urging adults who catch foul balls to give them to nearby kids."
        }
      ]
    },

    "gwangju-kia": {
      id: "gwangju-kia",
      rank: 4,
      primaryColor: "#C70125",
      secondaryColor: "#1B252C",
      shortCityEn: "Gwangju",
      shortCityKo: "광주",
      emblemImg: "images/logos/emblem_HT.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#C70125"/><text x="16" y="23" font-family="Arial Black, Impact, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#FFFFFF">T</text></svg>`,
      cityKey: "gwangju",
      cityNameEn: "Gwangju",
      cityNameKo: "광주광역시",
      cityHanja: "光州 廣域市",
      neighborhoodEn: "Buk-gu · Im-dong & Mudeungsan Ridge",
      neighborhoodKo: "북구 임동 · 무등산과 양림동 근대골목",
      teamNameEn: "KIA Tigers",
      teamNameKo: "KIA 타이거즈",
      stadiumEn: "Gwangju-Kia Champions Field",
      stadiumKo: "광주-기아 챔피언스 필드",
      coords: [35.1682, 126.8891],
      zoomLevel: 15.6,
      civicAnchorEn: "The cultural bedrock of the southwestern Honam plains. Carrying the historic 11-championship legacy of Haitai and KIA, Tigers baseball has long served as a cathartic voice of pride, endurance, and democratic spirit for the people of Gwangju.",
      civicAnchorKo: "호남 곡창지대의 문화적 구심점이자 한국 민주주의의 성지입니다. 해태 시절부터 이어진 불멸의 11회 한국시리즈 불패 신화는 굴곡진 현대사를 견뎌온 광주 시민들에게 가장 큰 위로이자 꺾이지 않는 자존심이었습니다.",
      storyEn: "My memory of Gwangju is inseparable from the boundless generosity of its dinner tables. In the quiet brick alleyways of Yangnim-dong, an elderly cook serves a humble table where more than twenty side dishes crowd the surface before the simmering duck soup even arrives. The local accent flows with a melodic, rhythmic cadence that feels like song. Inside Champions Field, when red balloons float up against the silhouette of Mount Mudeung and the crowd belts out ‘Southbound Train’, you witness a deep communal grace forged through history.",
      storyKo: "광주에서 마주한 호남의 기억은 밥상의 넉넉함과 떼려야 뗄 수 없었습니다. 양림동의 고즈넉한 골목길 허름한 식당에서 들깨 오리탕이 나오기도 전에 상을 가득 채우는 스무 가지가 넘는 정갈한 반찬들, 그리고 말끝마다 판소리처럼 리듬을 타는 다정한 억양 속에는 질곡의 시대를 품위 있게 견뎌낸 이들의 깊은 정이 서려 있었습니다. 무등산 능선 아래 챔피언스 필드에서 붉은 물결이 ‘남행열차’를 부를 때 터져 나오는 환희는 승리를 넘어선 삶의 찬가였습니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
          labelEn: "Place · Mudeungsan Columnar Joint Peaks (Jusangjeolli)",
          labelKo: "장소 · 무등산 서석대 주상절리와 억새 능선"
        },
        {
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          labelEn: "Street · Yangnim-dong Modern History & Penguin Village",
          labelKo: "거리 · 양림동 역사문화마을과 펭귄마골 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1583032015879-c5c5896a40c9?w=800&q=80",
          labelEn: "Food · Perilla Seed Duck Soup & Bountiful Namdo Table",
          labelKo: "음식 · 고소한 들깨 오리탕과 푸짐한 남도 한정식"
        }
      ],
      anthem: {
        titleEn: "Southbound Train (Namhaeng Yeolcha)",
        titleKo: "남행열차",
        originEn: "Kim Soo-hee classic · Immortal Tiger Anthem",
        originKo: "김수희 원곡 · 호남 야구의 영원한 찬가",
        noteEn: "The unmistakable brass melody triggers an explosive singalong on the 3rd base concourse.",
        noteKo: "비 내리는 호남선의 애절한 선율이 승리의 환호성으로 바뀌는 타이거즈의 상징 응원가.",
        youtubeId: "rVv3V8wZ5R0",
        timestamp: 12
      },
      phrases: [
        {
          ko: "워매~ 반갑소잉!",
          romaja: "Womae~ Bangapsoing!",
          meaningEn: "Oh goodness~ Wonderful to see you!",
          descKo: "모든 감정을 품어내는 호남 특유의 정겨운 감탄사",
          noteEn: "Warm exclamation of surprise and delighted hospitality."
        },
        {
          ko: "밥은 자셨소?",
          romaja: "Babeun jasyeosso?",
          meaningEn: "Have you had your meal, dear?",
          descKo: "상대방을 극진히 아끼는 남도식 다정한 문안",
          noteEn: "Rich, tender southern Korean inquiry of well-being."
        },
        {
          ko: "싸게싸게 오소!",
          romaja: "Ssage-ssage oso!",
          meaningEn: "Come on over quickly!",
          descKo: "재촉 속에서도 밥 한 끼 더 먹이고픈 인정",
          noteEn: "Classic southern phrase meaning 'hurry over to join us'."
        }
      ]
    },

    "changwon-nc": {
      id: "changwon-nc",
      rank: 6,
      primaryColor: "#071D49",
      secondaryColor: "#B49258",
      shortCityEn: "Changwon",
      shortCityKo: "창원",
      emblemImg: "images/logos/emblem_NC.png",
      logoSvg: `<svg width="20" height="20" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#071D49"/><text x="16" y="22" font-family="Arial Black, Impact, sans-serif" font-size="14" font-weight="900" text-anchor="middle" fill="#B49258" letter-spacing="-0.5">NC</text></svg>`,
      cityKey: "changwon",
      cityNameEn: "Changwon (Masan Heritage)",
      cityNameKo: "창원특례시 (구 마산)",
      cityHanja: "昌原 特例市 馬山",
      neighborhoodEn: "Masanhoewon-gu · Port of Masan & NC Park",
      neighborhoodKo: "마산회원구 양덕동 · 오동동 통술골목과 마산항",
      teamNameEn: "NC Dinos",
      teamNameKo: "NC 다이노스",
      stadiumEn: "Changwon NC Park",
      stadiumKo: "창원NC파크",
      coords: [35.2225, 128.5824],
      zoomLevel: 15.6,
      civicAnchorEn: "Built upon the sacred grounds of old Masan Stadium, Changwon NC Park unites the rugged, fierce baseball heritage of old Masan Port with the sleek precision of a modern planned industrial capital and high-tech software innovator (NCSoft).",
      civicAnchorKo: "구 마산종합운동장의 거친 흙먼지 위에 세워진 대한민국 최초의 메이저리그식 개방형 구장입니다. 1970~80년대 마산 야구의 뜨거운 야성과 계획도시 창원의 정밀한 기계공업, IT 소프트웨어의 혁신이 공존합니다.",
      storyEn: "Changwon lives with two distinct pulses. Walking down the broad, tree-lined boulevards of planned central Changwon feels orderly and calm, but crossing over into old Masan plunges you straight into winding fish-market alleys where the scent of dried pollack and fiery monkfish stew (Agujjim) hangs in the air. Decades before the NC Dinos existed, Masan fans were legendary for their fierce, unapologetic passion for the game. Today at the state-of-the-art open concourse of NC Park, that old port grit lives on under the spirited banner of ‘Dandi Haera’—do it right, do it solid.",
      storyKo: "창원은 서로 다른 두 개의 호흡을 품고 있습니다. 기계공업과 계획도시 특유의 반듯하고 정돈된 대로를 지나 마산으로 넘어가면, 비탈진 언덕길과 건어물 비린내, 그리고 수십 년간 타오른 야구에 대한 거친 집착이 그대로 살아있는 옛 골목이 펼쳐집니다. NC 다이노스가 창단되기 훨씬 전부터 마산의 야구팬들은 소주병을 들고 철조망을 흔들던 전설적인 야성을 지니고 있었습니다. 오늘날 메이저리그급 최신식 NC파크의 개방형 콘코스 위에서도 '단디 해라'라는 묵직한 구호 속에 그 항구의 혼이 그대로 살아 숨 쉽니다.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
          labelEn: "Place · Masan Port & Dotseom Golden Pig Island",
          labelKo: "장소 · 마산항 앞바다와 돝섬 해상유원지"
        },
        {
          src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          labelEn: "Street · Odong-dong Agujjim & Tongsul Alley",
          labelKo: "거리 · 오동동 아구찜거리와 통술집 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          labelEn: "Food · Sun-Dried Spicy Monkfish Stew (Agujjim)",
          labelKo: "음식 · 바람에 말린 쫄깃한 원조 마산 건아구찜"
        }
      ],
      anthem: {
        titleEn: "Come Back to Masan Port (Dorawayo Masan-hang-e)",
        titleKo: "돌아와요 마산항에",
        originEn: "Cho Yong-pil classic adapted · Masan Baseball Soul",
        originKo: "조용필 원곡 개사 · 마산 야구의 상징가",
        noteEn: "Carries the rugged, briny sea spray and blue-collar longing of the southern coast.",
        noteKo: "NC 창단 전부터 옛 마산야구장을 채우던 항구도시 특유의 깊은 바다 냄새가 밴 응원곡.",
        youtubeId: "b3B09V7N_B8",
        timestamp: 10
      },
      phrases: [
        {
          ko: "단디 해라!",
          romaja: "Dandi haera!",
          meaningEn: "Do it thoroughly and solidly!",
          descKo: "NC 다이노스의 공식 슬로건이자 경남의 대표적 격려",
          noteEn: "The definitive Gyeongnam motto for focused, resolute execution."
        },
        {
          ko: "반갑십니더~ 밥 뭇나?",
          romaja: "Bangapsimnideo~ Bap munna?",
          meaningEn: "Pleasure to meet you~ Have you eaten?",
          descKo: "마산·창원 특유의 단단하고 낮은 인사말",
          noteEn: "Deep, sturdy southern coastal greeting."
        },
        {
          ko: "마산 야구 살아있네!",
          romaja: "Masan yagu sarainne!",
          meaningEn: "Masan baseball is alive and kickin’!",
          descKo: "거친 항구 야구의 자부심을 드러내는 찬사",
          noteEn: "Pride in the historic baseball hotbed of southeastern Korea."
        }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KBO_DATA;
}

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
      stadiumEn: "Jamsil Baseball Stadium (3rd Base Side · 3루측)",
      stadiumKo: "잠실종합운동장 야구장 (3루측 응원석)",
      coords: [37.5126, 127.0711],
      zoomLevel: 16.5,
      civicAnchorEn: "Headquartered on the financial island of Yeouido and the tech campus of Magok, LG’s urban identity converges here at the open-air riverfront of Jamsil. Sharing this cathedral of Seoul baseball since 1990, the club carries the stylish, cosmopolitan pulse of the modern metropolis.",
      civicAnchorKo: "서울 잠실야구장은 한강 옆에 있는 큰 야구장이에요. LG 트윈스는 1990년부터 서울 팬들과 함께 즐겁게 야구를 하고 있어요.",
      storyEn: "On summer evenings in Jamsil, the humid breeze drifts in off the Han River just as hundred-car subway trains empty out at Sports Complex Station. Workers loosen their neckties over cold draft beer and fried chicken on concrete steps, leaving the glass skyscrapers of Gangnam behind. There is a breezy, almost cinematic grace to watching the twilight turn lilac above the stadium lights while twenty thousand voices chant the names of outfielders against the rhythm of drumbeats.",
      storyKo: "퇴근 시간에 전철을 타고 종합운동장역 3루 쪽으로 갔어요. 한강에서 시원한 바람이 불어왔어요. 회사원들과 학생들이 야구장에 모여서 시원한 맥주와 치킨을 먹었어요. 밤하늘 아래에서 수많은 사람들이 외야수의 이름을 불렀어요. 서울의 밤은 바쁘지만, 잠실야구장에 오면 모두 친구가 되어서 기분이 참 좋아요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80",
          labelEn: "Place · Han River Twilight & Lotte World Tower",
          labelKo: "장소 · 한강과 높은 롯데월드타워"
        },
        {
          src: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=800&q=80",
          labelEn: "Street · Sincheon (Jamsil-saenae) Alleyways",
          labelKo: "거리 · 맛있는 식당이 많은 잠실새내 먹자골목"
        },
        {
          src: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&q=80",
          labelEn: "Food · Chimaek & Spicy Cold Noodles",
          labelKo: "음식 · 야구장에서 먹는 시원한 맥주와 치킨"
        }
      ],
      anthem: {
        titleEn: "Seoul’s LG Twins (Seoul Hymn)",
        titleKo: "서울의 찬가 / 사랑한다 LG",
        originEn: "Patty Kim classic reimagined · Jamsil Signature",
        originKo: "패티김 원곡 노래 · 서울의 찬가",
        noteEn: "Sung passionately during late-inning rallies as twilight settles over the Olympic stadium complex.",
        noteKo: "경기가 끝날 때 온 관중이 큰 소리로 함께 노래해요.",
        youtubeId: "J2M5s_h1TjQ",
        timestamp: 12
      },
      phrases: [
        {
          ko: "안녕하세요! 어디 가세요?",
          romaja: "Annyeonghaseyo! Eodi gaseyo?",
          meaningEn: "Hello! Where are you headed?",
          descKo: "서울에서 정중하고 친절하게 건네는 인사예요.",
          noteEn: "Clean, polite Seoul cadence spoken in bustling transit hubs."
        },
        {
          ko: "식사는 하셨어요?",
          romaja: "Siksaneun hasyeosseoyo?",
          meaningEn: "Have you eaten yet?",
          descKo: "상대방을 걱정하며 따뜻하게 묻는 말이에요.",
          noteEn: "The polite, respectful question of care in the capital."
        },
        {
          ko: "무적 LG!",
          romaja: "Mujeok LG!",
          meaningEn: "Invincible LG!",
          descKo: "승리를 응원하며 크게 외치는 구호예요.",
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
      stadiumEn: "Jamsil Baseball Stadium (1st Base Side · 1루측)",
      stadiumKo: "잠실종합운동장 야구장 (1루측 홈응원석)",
      coords: [37.5118, 127.0727],
      zoomLevel: 16.5,
      civicAnchorEn: "The original champion of KBO’s inaugural 1982 season, the Bears trace their lineage from old Dongdaemun Stadium straight into Jamsil. Carrying the heritage of Korea’s oldest modern enterprise, Doosan embodies hard-nosed hustle, relentless stamina, and gritty hustle-doo spirit.",
      civicAnchorKo: "두산 베어스는 1982년 프로야구 첫 해에 우승한 역사 깊은 팀이에요. 끝까지 포기하지 않는 '허슬두' 정신이 유명해요.",
      storyEn: "Walking through the old markets around Dongdaemun and down into Jamsil, you meet grandmothers and street vendors who still remember the opening pitch of 1982. Seoul is often praised for its sleek futuristic shine, but underneath is an immense tenacity built by generations who worked twelve-hour shifts and found catharsis in nine innings of stubborn, defensive baseball. The Bears reflect that patient, unyielding spine of the city.",
      storyKo: "동대문 광장시장에서 고소한 녹두 빈대떡을 먹고, 전철 2호선을 타고 잠실야구장 1루 쪽으로 갔어요. 두산 베어스 팬들은 하얀 수건을 높이 들고 힘차게 응원했어요. 경기가 어려워도 선수들이 몸을 날려 공을 잡아서 팬들이 큰 박수를 쳤어요. 땀 흘려 일하고 야구를 보며 힘을 내는 서울 사람들의 따뜻한 마음을 느낄 수 있었어요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
          labelEn: "Place · Dongdaemun Design Plaza & Ancient City Wall",
          labelKo: "장소 · 동대문 성곽과 DDP 건물"
        },
        {
          src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
          labelEn: "Street · Gwangjang Market Bindaetteok Alley",
          labelKo: "거리 · 맛있는 음식이 많은 광장시장"
        },
        {
          src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          labelEn: "Food · Mung Bean Pancakes & Steaming Broth",
          labelKo: "음식 · 바삭하고 고소한 녹두 빈대떡"
        }
      ],
      anthem: {
        titleEn: "Song of the Bears (Hustle Doo)",
        titleKo: "승리의 두산 / 베어스 찬가",
        originEn: "Original Doosan rally anthem",
        originKo: "두산 베어스 승리의 노래",
        noteEn: "Echoes through the 1st base side with rhythmic towel waves and collective clapping.",
        noteKo: "1루 관중석에서 하얀 수건을 흔들며 다 같이 박수를 쳐요.",
        youtubeId: "Wv0c_v0V0_U",
        timestamp: 5
      },
      phrases: [
        {
          ko: "수고 많으셨습니다",
          romaja: "Sugo maneusyeossseumnida",
          meaningEn: "Thank you for your hard work",
          descKo: "하루 일을 마치고 서로에게 감사하는 인사예요.",
          noteEn: "The essential daily phrase of mutual respect after a long day."
        },
        {
          ko: "식사 든든히 챙겨 드세요",
          romaja: "Siksa deundeunhi chaenggyeo deuseyo",
          meaningEn: "Make sure you eat a hearty meal",
          descKo: "건강을 위해 밥을 잘 먹으라고 격려하는 말이에요.",
          noteEn: "Expressing genuine care for someone's vitality and stamina."
        },
        {
          ko: "허슬두! (Hustle Doo)",
          romaja: "Heoseuldu!",
          meaningEn: "Never give up / Relentless effort",
          descKo: "끝까지 최선을 다하자는 두산의 응원 구호예요.",
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
      civicAnchorKo: "서울 고척스카이돔은 비가 와도 야구를 볼 수 있는 한국 유일의 돔구장이에요. 키움 히어로즈는 젊고 열정적인 팀이에요.",
      storyEn: "Southwestern Seoul carries a rhythmic percussion all its own: the metallic clatter of hardware workshops in Mullae-dong blending into the hum of startup lofts and high-frequency subway switches at Guro Station. Inside Gocheok Dome, the air is climate-controlled and insulated from monsoon downpours, but the energy feels fierce and youthful. Young fans gather under the silver roof to cheer on an underdog that continuously produces world-class talent against all odds.",
      storyKo: "구로역 근처 문래동 예술 골목을 걸었어요. 예전에는 쇠를 만드는 공장이 많았는데 지금은 예쁜 카페와 그림이 많아서 사진을 많이 찍었어요. 점심에는 따뜻한 순댓국을 먹었어요. 고척스카이돔에 들어가니 에어컨 바람이 시원해서 날씨가 더워도 아주 쾌적했어요. 지붕 아래에서 팬들이 록 음악에 맞춰 신나게 응원했어요. 젊은 에너지가 가득한 멋진 야구장이었어요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
          labelEn: "Place · Gocheok Sky Dome & Anyangcheon Stream",
          labelKo: "장소 · 안양천 옆의 은빛 고척스카이돔"
        },
        {
          src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          labelEn: "Street · Mullae Creative Art & Iron Alley",
          labelKo: "거리 · 예술 그림과 카페가 있는 문래동 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
          labelEn: "Food · Guro Sundae-guk & Craft Beer",
          labelKo: "음식 · 따끈한 순댓국과 시원한 음료수"
        }
      ],
      anthem: {
        titleEn: "Heroes Anthem (Dream on Heroes)",
        titleKo: "영웅출정가 / 꿈이 있기에",
        originEn: "Kiwoom Heroes Official Theme",
        originKo: "키움 히어로즈 응원가 · 영웅출정가",
        noteEn: "Features a modern rock rhythm echoing off the acoustic dome ceiling.",
        noteKo: "신나는 록 음악 소리에 맞춰 돔구장이 울리도록 힘차게 불러요.",
        youtubeId: "vBqJd8Z0q8g",
        timestamp: 15
      },
      phrases: [
        {
          ko: "오늘 하루도 파이팅!",
          romaja: "Oneul harudo paiting!",
          meaningEn: "Let's do our best today!",
          descKo: "오늘도 힘내서 열심히 하자고 응원하는 말이에요.",
          noteEn: "The ubiquitous Korean energetic cheer for daily perseverance."
        },
        {
          ko: "밥 먹고 힘내자!",
          romaja: "Bap meokgo himnaeja!",
          meaningEn: "Let’s eat well and gather our strength!",
          descKo: "식사를 든든하게 하고 힘을 내자는 따뜻한 말이에요.",
          noteEn: "Fueling up for challenging work or an intense match."
        },
        {
          ko: "영웅 군단!",
          romaja: "Yeongung gundan!",
          meaningEn: "The Legion of Heroes!",
          descKo: "키움 히어로즈 팀을 자랑스럽게 부르는 이름이에요.",
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
      civicAnchorKo: "인천은 서양 야구가 한국에 처음 들어온 역사적인 항구도시예요. SSG 랜더스필드는 바비큐존과 스타벅스가 있는 재미있는 야구장이에요.",
      storyEn: "Incheon smells of low-tide sea breeze, roasted coffee beans from vintage port cafes, and simmering black bean paste in Chinatown. Walking up Jayu Park past nineteenth-century consulates, the vista opens over massive container cranes swinging against yellow sunsets. Incheon fans have a maritime openness—blunt spoken, deeply loyal, and quick to welcome strangers to share barbecue skewers right on the ballpark outfield lawn.",
      storyKo: "지하철 1호선을 타고 인천역 차이나타운에 갔어요. 맛있는 자장면을 먹고, 신포시장에 가서 달콤하고 바삭한 닭강정을 샀어요. 랜더스필드 야구장은 잔디밭에서 고기를 구워 먹으며 야구를 볼 수 있어서 아주 신기했어요. 저녁 8회가 되자 야구장 조명이 어두워지고 붉은 불빛과 함께 '연안부두' 노래가 울려 퍼졌어요. 시원한 서해 바닷바람과 함께한 즐거운 시간이었어요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
          labelEn: "Place · Incheon Open Port Heritage Street & Red Brick Mansions",
          labelKo: "장소 · 인천 개항장의 붉은 벽돌 건물들"
        },
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
          labelEn: "Street · Sinpo International Market Dakgangjeong Alley",
          labelKo: "거리 · 닭강정 냄새가 솔솔 나는 신포국제시장"
        },
        {
          src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
          labelEn: "Food · Crispy Sweet Fried Chicken & Jajangmyeon",
          labelKo: "음식 · 달콤한 닭강정과 원조 자장면"
        }
      ],
      anthem: {
        titleEn: "Yeonan Pier (Yeonan Bodu)",
        titleKo: "연안부두",
        originEn: "Kim Trio 1979 classic · Anthem of Incheon",
        originKo: "김트리오 원곡 노래 · 연안부두",
        noteEn: "When the 8th inning arrives, the entire stadium sings together holding red flashlights aloft.",
        noteKo: "8회에 랜더스필드의 붉은 불빛을 켜고 파도타기를 하며 불러요.",
        youtubeId: "D8eGk-eD4rQ",
        timestamp: 8
      },
      phrases: [
        {
          ko: "어서 오십쇼, 인천입니다!",
          romaja: "Eoseo osipsyo, Incheonimnida!",
          meaningEn: "Welcome to Incheon, the gateway port!",
          descKo: "항구도시 인천에 오신 것을 환영하는 인사예요.",
          noteEn: "Broad, welcoming tone of the coastal gateway city."
        },
        {
          ko: "밥은 든든하게 잡쉈어?",
          romaja: "Babeun deundeunhage japswasseo?",
          meaningEn: "Did you get a hearty meal?",
          descKo: "밥을 잘 챙겨 먹었는지 정답게 물어봐요.",
          noteEn: "Everyday warm inquiry heard in Sinpo market stalls."
        },
        {
          ko: "연안부두로 가자!",
          romaja: "Yeonanboduro gaja!",
          meaningEn: "Let's head down to Yeonan Pier!",
          descKo: "인천 바다와 야구를 즐기러 가자는 활기찬 외침이에요.",
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
      civicAnchorKo: "수원에는 아름다운 유네스코 세계유산 수원화성이 있어요. 그리고 KT 위즈 야구장도 아주 유명해요.",
      storyEn: "Walking atop the crenellated stonework of Hwaseong Fortress at sunset, you look down upon tile-roof pavilions side-by-side with bustling rows of whole-chicken fryers on Suwon Chicken Street. The aroma of sesame oil and crisp batter floats through the evening breeze. At kt wiz Park, drone light shows illuminate the night sky while families sit at tabletop picnic seats sharing cauldron-fried chicken. Suwon has mastered the art of balancing ancient majesty with neighborly comfort.",
      storyKo: "서울에서 기차를 타고 수원에 갔어요. 수원화성 성곽길을 친구와 같이 걸었어요. 저녁에는 남수동 통닭거리에 가서 가마솥 통닭을 먹었는데, 정말 바삭하고 맛있었어요! 밤에는 KT 위즈파크에 가서 야구를 보았어요. 사람들이 가족과 함께 치킨을 먹으면서 응원했어요. 수원 사람들은 친절하고 따뜻했어요. 여러분도 수원에 꼭 가 보세요!",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
          labelEn: "Place · UNESCO Hwaseong Fortress Secret Sluice Gate",
          labelKo: "장소 · 예쁜 수원화성과 연못"
        },
        {
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          labelEn: "Street · Suwon Fried Chicken Street in Namsu-dong",
          labelKo: "거리 · 유명한 수원 통닭거리"
        },
        {
          src: "https://images.unsplash.com/photo-1583032015879-c5c5896a40c9?w=800&q=80",
          labelEn: "Food · Golden Crispy Whole Fried Chicken (Jinmi)",
          labelKo: "음식 · 맛있고 바삭한 통닭"
        }
      ],
      anthem: {
        titleEn: "Magical kt wiz (We Are the Wiz)",
        titleKo: "승리의 마법사 / 마법의 성",
        originEn: "kt wiz Championship Theme",
        originKo: "KT 위즈 승리의 노래",
        noteEn: "Sung with red-and-black light batons swinging in rhythm against the fortress sky.",
        noteKo: "야구장에서 빨간색 응원봉을 흔들면서 다 같이 노래해요.",
        youtubeId: "l89TqRzK_jM",
        timestamp: 10
      },
      phrases: [
        {
          ko: "화성의 고장, 수원에 잘 오셨습니다!",
          romaja: "Hwaseong-ui gojang, Suwone jal osyeossseumnida!",
          meaningEn: "Welcome to Suwon, the fortress capital!",
          descKo: "수원에 온 손님을 반갑게 맞이하는 인사예요.",
          noteEn: "Proud greeting referencing the historic royal foundation."
        },
        {
          ko: "통닭 한 마리 뜯고 가유~",
          romaja: "Tongdak han mari tteutgo gayu~",
          meaningEn: "Stop by and grab a fried chicken with us~",
          descKo: "맛있는 통닭을 같이 먹자고 다정하게 말해요.",
          noteEn: "Friendly local invite to share Suwon’s iconic cauldron food."
        },
        {
          ko: "마법 같은 승리!",
          romaja: "Mabeop gateun seungni!",
          meaningEn: "A magical victory!",
          descKo: "경기에서 이겼을 때 기쁘게 외치는 말이에요.",
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
      civicAnchorKo: "대전은 한국의 중심에 있는 교통의 도시예요. 한화 이글스 팬들은 팀이 져도 늘 웃으며 응원하는 '보살 팬'으로 유명해요.",
      storyEn: "Daejeon is often described by fast-paced Seoulites as quiet and unhurried, but to me it felt like the deep breath Korea takes between journeys. Stepping off the KTX train, the sweet scent of freshly baked fried soboro bread from Sungsimdang Bakery fills the morning air. People speak with elongated vowels, ending sentences with a soothing ‘-yu’. In the stands at Eagles Park, even a strikeout is met with gentle laughter and orange balloon cheers—a rare, heartwarming reminder that community matters far more than the final score.",
      storyKo: "KTX 대전역에 내리자마자 유명한 성심당 빵집에 갔어요. 바삭한 튀김소보로 빵을 한 입 먹었는데, 달콤하고 정말 맛있었어요! 점심에는 얼큰한 칼국수도 먹었어요. 이글스파크에 가니 온 관중이 주황색 풍선을 흔들고 있었어요. 점수가 뒤지고 있어도 사람들이 다 같이 웃으면서 '나는 행복합니다' 노래를 불렀어요. 승리보다 함께하는 시간이 더 소중하다는 것을 배웠어요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
          labelEn: "Place · Gapcheon River Greenways & Expo Bridge",
          labelKo: "장소 · 대전 엑스포다리와 갑천 강변"
        },
        {
          src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
          labelEn: "Street · Sungsimdang Bakery & Euneungjeongi Street",
          labelKo: "거리 · 빵 냄새가 향긋한 성심당 앞거리"
        },
        {
          src: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&q=80",
          labelEn: "Food · Spicy Kalguksu Noodles & Fried Soboro",
          labelKo: "음식 · 따뜻한 칼국수와 달콤한 튀김소보로"
        }
      ],
      anthem: {
        titleEn: "I Am Happy (Naneun Haengbokhamnida)",
        titleKo: "나는 행복합니다",
        originEn: "Hanwha Eagles Signature Anthem",
        originKo: "한화 이글스 대표 응원가 · 나는 행복합니다",
        noteEn: "Sung with beaming smiles regardless of whether the Eagles are winning or trailing by ten runs.",
        noteKo: "팀이 이기거나 져도 주황색 손수건을 흔들며 행복하게 불러요.",
        youtubeId: "zC0T9FvR8Qc",
        timestamp: 10
      },
      phrases: [
        {
          ko: "괜찮아유~ 다 잘 될 거유",
          romaja: "Gwaenchannayu~ Da jal doel geoyu",
          meaningEn: "It's all right~ Everything will turn out fine",
          descKo: "천천히 걱정하지 말라고 달래주는 충청도 말이에요.",
          noteEn: "The quintessential slow, comforting Chungcheong dialect cadence."
        },
        {
          ko: "진지 잡수셨슈?",
          romaja: "Jinji japsusyeoss-syu?",
          meaningEn: "Have you had your meal yet?",
          descKo: "식사를 맛있게 하셨는지 어르신께 묻는 인사예요.",
          noteEn: "Polite regional meal greeting with the warm signature '-syu' ending."
        },
        {
          ko: "이따 봐유!",
          romaja: "Itta bwayu!",
          meaningEn: "See you in a bit!",
          descKo: "조금 뒤에 다시 만나자고 다정하게 인사해요.",
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
      civicAnchorKo: "대구는 주변에 산이 많고 여름에 아주 더운 도시예요. 파란색 삼성 라이온즈는 1982년부터 지금까지 대구 사람들의 큰 자랑이에요.",
      storyEn: "Daegu teaches you what stillness feels like inside a furnace. When the midsummer heat of ‘Daefrica’ presses down, residents seek the shade of Apsan mountain or gather under the fans of Anjirang Gopchang Alley. Speech here is clipped, consonants are hard-edged, and people do not waste unnecessary words. Yet beneath that stoic exterior lies an intense warmth and loyalty: at the octagonal Lions Park, when twenty-five thousand people cross their arms in unison to sing ‘El Dorado’, the blue stadium vibrates like thunder across the basin.",
      storyKo: "KTX를 타고 동대구역에 도착했어요. 대구의 여름은 정말 더웠지만, 안지랑 골목의 막창구이는 아주 고소하고 맛있었어요. 저녁에 팔각형 모양의 라이온즈파크에 갔어요. 파란색 유니폼을 입은 2만 명의 팬들이 두 팔을 들고 '엘도라도' 노래를 불렀어요. 목소리가 정말 크고 멋있었어요. 대구 사람들은 말이 조금 짧지만 정이 아주 많아요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=800&q=80",
          labelEn: "Place · Palgongsan Mountain Crest & Basin Sunset",
          labelKo: "장소 · 높은 팔공산과 대구 풍경"
        },
        {
          src: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
          labelEn: "Street · Dongseong-ro & Kim Kwang-seok Memorial Art Road",
          labelKo: "거리 · 노래가 들리는 김광석 다시그리기길"
        },
        {
          src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
          labelEn: "Food · Sizzling Briquette Grilled Tripe (Gopchang)",
          labelKo: "음식 · 고소하고 맛있는 연탄 막창구이"
        }
      ],
      anthem: {
        titleEn: "El Dorado",
        titleKo: "엘도라도 (El Dorado)",
        originEn: "Goombay Dance Band classic · Soul of Lions",
        originKo: "삼성 라이온즈 대표 응원가 · 엘도라도",
        noteEn: "Sung at the start of the 8th inning with arms crossed overhead, swaying like a blue ocean.",
        noteKo: "8회에 온 관중이 두 팔을 올리고 파란 바다처럼 흔들며 불러요.",
        youtubeId: "5jGq5v_V6W0",
        timestamp: 10
      },
      phrases: [
        {
          ko: "맞나? 진짜가!",
          romaja: "Manna? Jinjjaga!",
          meaningEn: "Is that so? Really?!",
          descKo: "정말인지 신기해서 물어보는 대구 사투리예요.",
          noteEn: "Universal Daegu conversation hook with a sharp rising tone."
        },
        {
          ko: "밥 묵었나?",
          romaja: "Bap mugeonna?",
          meaningEn: "Have you eaten?",
          descKo: "밥을 먹었는지 따뜻하게 물어보는 안부예요.",
          noteEn: "Distinctive strong stress on the middle syllable."
        },
        {
          ko: "치아라, 마!",
          romaja: "Chiara, ma!",
          meaningEn: "Forget it / Clean it up!",
          descKo: "친한 친구에게 그만하라고 편하게 말해요.",
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
      civicAnchorKo: "부산은 한국에서 제일 큰 항구도시예요. 사직야구장은 '세상에서 가장 큰 노래방'이라고 불릴 만큼 응원 열기가 대단해요.",
      storyEn: "Busan has the highest volume of hospitality in all of Korea. When the fishwives at Jagalchi Market toss mackerel onto crushed ice while shouting greetings three stalls over, you realize this city does not whisper—it pulls you straight into its tidal currents. Winding up the Sanbok-doro hillside roads on rickety buses, colorful homes cling to steep cliffs overlooking the blue Pacific. At Sajik, when twenty-five thousand people tie orange plastic bags around their ears and sing ‘Busan Seagulls’, you are no longer a visitor—you belong to the sea.",
      storyKo: "부산역에서 버스를 타고 산복도로에 올라갔어요. 창밖으로 파란 바다가 한눈에 보여서 정말 아름다웠어요. 자갈치 시장에서 따뜻한 돼지국밥을 먹고 사직야구장으로 갔어요. 7회가 끝나자 2만 5천 명의 관중이 주황색 비닐봉지를 머리에 묶고 '부산 갈매기'를 다 함께 불렀어요. 바닷바람을 맞으며 목청껏 소리 지르니 스트레스가 다 풀렸어요. 부산의 열정은 정말 최고예요!",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
          labelEn: "Place · Sanbok-doro Hillside Road & Port Horizon",
          labelKo: "장소 · 높은 산복도로에서 본 푸른 부산 바다"
        },
        {
          src: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80",
          labelEn: "Street · Jagalchi Seafood Market & Nampo-dong",
          labelKo: "거리 · 활기 넘치는 자갈치 어시장"
        },
        {
          src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
          labelEn: "Food · Steaming Pork Rice Soup (Dwaeji-gukbap)",
          labelKo: "음식 · 고기가 듬뿍 들어간 따끈한 돼지국밥"
        }
      ],
      anthem: {
        titleEn: "Busan Seagulls (Busan Galmaegi)",
        titleKo: "부산 갈매기",
        originEn: "Moon Sung-jae 1982 classic · Anthem of Busan",
        originKo: "문성재 원곡 노래 · 부산 갈매기",
        noteEn: "The undisputed supreme anthem of Korean sports, echoing across the harbor when night falls on Sajik.",
        noteKo: "7회에 주황색 봉지를 머리에 쓰고 온 관중이 합창해요.",
        youtubeId: "r2Yn-M7K-d4",
        timestamp: 15
      },
      phrases: [
        {
          ko: "마, 부산 아이가!",
          romaja: "Ma, Busan aiga!",
          meaningEn: "Hey, this is Busan after all!",
          descKo: "우리는 당당한 부산 사람이라고 자랑하는 외침이에요.",
          noteEn: "The iconic Busan proclamation of local grit and confidence."
        },
        {
          ko: "안녕하이소~ 밥 뭇나?",
          romaja: "Annyeonghaiso~ Bap munna?",
          meaningEn: "Hello there~ Have you eaten?",
          descKo: "바다 상인들이 반갑게 인사를 건네며 밥을 챙겨요.",
          noteEn: "Combined greeting and meal check heard in seaside fish stalls."
        },
        {
          ko: "아~주라! (Ah-jura!)",
          romaja: "Ah-jura!",
          meaningEn: "Give it to the child!",
          descKo: "파울볼을 잡은 어른에게 아이에게 주라고 외쳐요.",
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
      civicAnchorKo: "광주는 맛있는 음식이 아주 많은 남도의 중심 도시예요. KIA 타이거즈는 한국시리즈에서 11번 넘게 우승한 전통의 강팀이에요.",
      storyEn: "My memory of Gwangju is inseparable from the boundless generosity of its dinner tables. In the quiet brick alleyways of Yangnim-dong, an elderly cook serves a humble table where more than twenty side dishes crowd the surface before the simmering duck soup even arrives. The local accent flows with a melodic, rhythmic cadence that feels like song. Inside Champions Field, when red balloons float up against the silhouette of Mount Mudeung and the crowd belts out ‘Southbound Train’, you witness a deep communal grace forged through history.",
      storyKo: "KTX를 타고 광주송정역에 내렸어요. 양림동 골목 식당에 갔는데, 반찬이 스무 가지나 나와서 깜짝 놀랐어요! 따뜻한 들깨 오리탕도 정말 맛있었어요. 챔피언스필드 야구장은 무등산 아래에 있어서 풍경이 참 예뻤어요. 팬들이 빨간 풍선을 흔들면서 '남행열차'를 불렀는데, 춤도 추고 노래도 불러서 정말 신났어요. 광주는 인심이 아주 넉넉한 도시예요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
          labelEn: "Place · Mudeungsan Columnar Joint Peaks (Jusangjeolli)",
          labelKo: "장소 · 아름다운 무등산 서석대"
        },
        {
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          labelEn: "Street · Yangnim-dong Modern History & Penguin Village",
          labelKo: "거리 · 양림동 역사마을과 펭귄마을"
        },
        {
          src: "https://images.unsplash.com/photo-1583032015879-c5c5896a40c9?w=800&q=80",
          labelEn: "Food · Perilla Seed Duck Soup & Bountiful Namdo Table",
          labelKo: "음식 · 푸짐한 남도 밥상과 들깨 오리탕"
        }
      ],
      anthem: {
        titleEn: "Southbound Train (Namhaeng Yeolcha)",
        titleKo: "남행열차",
        originEn: "Kim Soo-hee classic · Immortal Tiger Anthem",
        originKo: "김수희 원곡 노래 · 남행열차",
        noteEn: "The unmistakable brass melody triggers an explosive singalong on the 3rd base concourse.",
        noteKo: "비 내리는 호남선 노래에 맞춰 신나게 춤추며 불러요.",
        youtubeId: "rVv3V8wZ5R0",
        timestamp: 12
      },
      phrases: [
        {
          ko: "워매~ 반갑소잉!",
          romaja: "Womae~ Bangapsoing!",
          meaningEn: "Oh goodness~ Wonderful to see you!",
          descKo: "친구를 만나서 정말 반가울 때 쓰는 전라도 말이에요.",
          noteEn: "Warm exclamation of surprise and delighted hospitality."
        },
        {
          ko: "밥은 자셨소?",
          romaja: "Babeun jasyeosso?",
          meaningEn: "Have you had your meal, dear?",
          descKo: "어르신께 진지를 드셨는지 공손하게 묻는 인사예요.",
          noteEn: "Rich, tender southern Korean inquiry of well-being."
        },
        {
          ko: "싸게싸게 오소!",
          romaja: "Ssage-ssage oso!",
          meaningEn: "Come on over quickly!",
          descKo: "빨리 와서 같이 밥을 먹자고 재촉하는 말이에요.",
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
      civicAnchorKo: "창원은 계획도시의 넓은 길과 마산의 오래된 바다가 함께 있는 곳이에요. NC 다이노스는 멋진 야구장에서 새로운 야구를 보여줘요.",
      storyEn: "Changwon lives with two distinct pulses. Walking down the broad, tree-lined boulevards of planned central Changwon feels orderly and calm, but crossing over into old Masan plunges you straight into winding fish-market alleys where the scent of dried pollack and fiery monkfish stew (Agujjim) hangs in the air. Decades before the NC Dinos existed, Masan fans were legendary for their fierce, unapologetic passion for the game. Today at the state-of-the-art open concourse of NC Park, that old port grit lives on under the spirited banner of ‘Dandi Haera’—do it right, do it solid.",
      storyKo: "기차를 타고 마산역에 도착했어요. 어시장에 가니 맛있는 생선 냄새와 매콤한 아구찜 냄새가 났어요. 창원NC파크는 야구장이 아주 현대적이고 깨끗했어요. 잔디밭에 앉아서 친구와 같이 야구를 볼 수 있어서 참 편했어요. 팬들이 '단디 해라!'라고 크게 외쳤는데, 무슨 일이든 똑똑하고 확실하게 잘하라는 경상도 말이에요. 바다 냄새와 함께한 멋진 하루였어요.",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
          labelEn: "Place · Masan Port & Dotseom Golden Pig Island",
          labelKo: "장소 · 푸른 마산항 바다와 섬"
        },
        {
          src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          labelEn: "Street · Odong-dong Agujjim & Tongsul Alley",
          labelKo: "거리 · 매콤한 냄새가 나는 아구찜 골목"
        },
        {
          src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          labelEn: "Food · Sun-Dried Spicy Monkfish Stew (Agujjim)",
          labelKo: "음식 · 쫄깃하고 매운 원조 마산 아구찜"
        }
      ],
      anthem: {
        titleEn: "Come Back to Masan Port (Dorawayo Masan-hang-e)",
        titleKo: "돌아와요 마산항에",
        originEn: "Cho Yong-pil classic adapted · Masan Baseball Soul",
        originKo: "조용필 원곡 노래 · 돌아와요 마산항에",
        noteEn: "Carries the rugged, briny sea spray and blue-collar longing of the southern coast.",
        noteKo: "마산 바다의 정취를 느끼며 팬들이 함께 부르는 노래예요.",
        youtubeId: "b3B09V7N_B8",
        timestamp: 10
      },
      phrases: [
        {
          ko: "단디 해라!",
          romaja: "Dandi haera!",
          meaningEn: "Do it thoroughly and solidly!",
          descKo: "실수 없이 똑똑하게 잘하라는 경상도 격려예요.",
          noteEn: "The definitive Gyeongnam motto for focused, resolute execution."
        },
        {
          ko: "반갑십니더~ 밥 뭇나?",
          romaja: "Bangapsimnideo~ Bap munna?",
          meaningEn: "Pleasure to meet you~ Have you eaten?",
          descKo: "만나서 반갑고 밥은 먹었는지 묻는 정다운 인사예요.",
          noteEn: "Deep, sturdy southern coastal greeting."
        },
        {
          ko: "마산 야구 살아있네!",
          romaja: "Masan yagu sarainne!",
          meaningEn: "Masan baseball is alive and kickin’!",
          descKo: "야구가 정말 재미있고 멋지다고 칭찬하는 말이에요.",
          noteEn: "Pride in the historic baseball hotbed of southeastern Korea."
        }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KBO_DATA;
}

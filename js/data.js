/**
 * Kansai / Kinosaki 2027 trip data — 死黨三人遊
 * Coordinates: OpenStreetMap Nominatim (queried 2026-10-28) unless noted // approx / known
 */
window.TRIP = {
  meta: {
    title: "關西 × 城崎",
    subtitle: "死黨三人遊の悠閒冬之旅",
    dates: "2027-01-31（日）— 02-06（六）",
    days: 7,
    nights: 5,
    travelers: ["Sunny", "同伴", "卓Sir（UO862 ~20:20 抵 KIX → 西成會合）"],
    updated: "2026-10-29 12:22",
    note: "1/31 大阪 Airbnb（HME24S4TXJ・西成旭）同 1/2 城崎山本屋已訂；2/2 起其餘住宿多數仍係 shortlist／TBD。Sunny 機票同租車已訂；卓Sir 機票 UO862 擬搭／確認中。出發前請再確認營業時間同路況。",
    flights: {
      out: { code: "UO686", pnr: "T2H9VR", from: "HKG 08:30", to: "KIX 13:05", date: "31/1", who: "Sunny＋同伴" },
      back: { code: "UO689", pnr: "T2H9VR", from: "KIX 20:15", to: "HKG 23:55", date: "6/2", who: "Sunny＋同伴" },
      cheuk: {
        status: "pending",
        label: "卓Sir 擬搭／確認中",
        out: { code: "UO862", from: "HKG 15:45 T2", to: "KIX 20:20 T1", date: "31/1", duration: "~3h35" },
        back: { date: "6/2", route: "KIX→HKG", note: "回程航班號未見於截圖；窗口同日 2/6" },
        priceNote: "選擇頁約 HKD 3,071（未必已出票）"
      },
      links: [
        { label: "HK Express 機票確認 Doc", url: "https://docs.google.com/document/d/1Vc6RYFxl9GAjuCvLGEg_v4EpkNr2erpCofBijbGhWww/edit?usp=drivesdk", kind: "drive" },
        { label: "機票 Drive 資料夾", url: "https://drive.google.com/drive/folders/1eT94OFD9wHAKkJTrb27f8l9-Z5zQ59Sx", kind: "drive" }
      ]
    },
    car: {
      status: "booked",
      vendor: "Nissan Rent-A-Car 關西機場",
      model: "KICKS e-POWER｜4WD + スタッドレス + ETC",
      confirm: "26102504206",
      pickup: "31/1 15:00 關西機場",
      return: "5/2 15:00 大阪梅田",
      note: "約 ¥67,892｜舊單 26102504145 已取消｜滿油還車｜避開過多雪山路。"
    },
    lodgingDriveFolder: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B",
    links: [
      { label: "行程 Google Sheet｜死黨三人遊2027", url: "https://docs.google.com/spreadsheets/d/1zLaiENfg2PG68l9srUGO1KSYbNbqy-aPlkOWKO1WHt4/edit", kind: "drive" },
      { label: "行程總 Drive 資料夾", url: "https://drive.google.com/drive/folders/1XGVNEAhR3YwMkaBcTWBInnj0TSSYQxhn", kind: "drive" },
      { label: "租車確認 Doc", url: "https://docs.google.com/document/d/1FdTPcwj0uKyostIZuNc2sTtQ-L-Aa9aNyIEZ-66p61E/edit?usp=drivesdk", kind: "drive" },
      { label: "京都海／Sea of Kyoto DMO", url: "https://www.uminokyoto.jp/", kind: "official" }
    ]
  },

  lodging: [
    {
      night: "31/1",
      name: "完整旅居（Airbnb）",
      area: "西成・旭（Nishinari Asahi）",
      address: "大阪府大阪市西成区旭1丁目3-28／1-chōme-3-28 Asahi, Nishinari Ward, Osaka 557-0032",
      confirm: "已訂 HME24S4TXJ｜Host シュウ（Superhost）｜3 成人",
      status: "booked",
      note: "CI 2027-01-31 16:00 → CO 02-01 12:00（正午，非 10:00）｜場內免費住宅車庫 1 位（KICKS OK）｜湯里花園町駅／Osaka Metro 花園町（Y17）徒歩約 1 分｜餘款 HK$1,341.96 於 2027-01-18 Mastercard *0136 扣｜免費取消至 2027-01-26 16:00（當地）｜住客登記（日本規定）｜卓Sir UO862 ~20:20 抵 KIX → 西成會合｜舊 HMEFA5DBKE（守口）已取消",
      links: [
        { label: "Airbnb 房源", url: "https://www.airbnb.com/rooms/1725116940136021450", kind: "official" },
        { label: "Airbnb 訂單 HME24S4TXJ", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HME24S4TXJ", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a185e31a730dccf", kind: "drive" },
        { label: "Gmail 舊單取消", url: "https://mail.google.com/mail/u/0/#inbox/1a185e178d051970", kind: "drive" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "1/2",
      name: "城崎溫泉 山本屋（Yamamotoya）",
      area: "城崎溫泉・湯島",
      address: "669-6101 兵庫県豊岡市城崎町湯島643",
      confirm: "已訂 Rakuten 21315099225634／客房 22315097279732｜3 成人",
      status: "booked",
      note: "CI 2027-02-01（一）15:00–18:00 → CO 02-02（二）10:00｜豪華套房 日式客房・禁煙・可望庭園小型半露天浴池 16.2m²｜方案＜附但馬牛日式牛排＞【季節會席】一泊二食（早＋晚）｜總額 HK$4,425.68（¥89,100）｜入浴税 ¥360 現地付｜Mastercard *0136｜免費取消至 2027-01-28 23:59 JST｜Tel 0796-32-2114｜成個行程唯一一晚溫泉旅館",
      links: [
        { label: "山本屋官方", url: "https://www.kinosaki.com/", kind: "official" },
        { label: "Rakuten 訂單列表", url: "https://travel.rakuten.com/HKG/zh-HK/hotel_reservation/list/?category=UPCOMING", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a185a881ec45ede", kind: "drive" },
        { label: "城崎溫泉官方", url: "https://kinosaki-spa.gr.jp/", kind: "official" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "2/2",
      name: "豊岡／城崎 Airbnb",
      area: "豊岡 or 城崎",
      confirm: "短名單／TBD",
      status: "shortlist",
      note: "山本屋 CO 後 overnight｜整套房・3 人・有泊車優先（Airbnb 偏好）｜Toyooka 半日後｜未訂",
      links: [
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "3/2",
      name: "宮津／伊根 Airbnb",
      area: "宮津 or 伊根",
      confirm: "短名單／TBD",
      status: "shortlist",
      note: "天橋立＋舟屋當日 overnight｜整套房・泊車｜未訂",
      links: [
        { label: "天橋立官方", url: "https://www.amanohashidate.jp/", kind: "official" },
        { label: "伊根觀光", url: "https://www.ine-kankou.jp/", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "4/2",
      name: "舞鶴 Airbnb ★4.96（短名單）",
      area: "舞鶴",
      confirm: "短名單／TBD｜可泊 4 車",
      status: "shortlist",
      note: "評價 ★4.96・可泊 4 車｜赤れんがパーク附近優先｜未訂",
      links: [
        { label: "舞鶴觀光", url: "https://maizuru-kanko.net/", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    }
  ],

  places: [
    {
      id: "kix",
      name: "關西國際機場 KIX",
      nameJa: "関西国際空港",
      day: 1,
      lat: 34.4342045,
      lng: 135.2225230,
      image: "images/kix.jpg",
      tags: ["機場"],
      intro: "旅程起點。Sunny UO686 13:05 抵 KIX，過關拎行李後去 Nissan 取車（15:00）。卓Sir 同日 UO862 20:20 抵達（擬搭／確認中）。",
      tips: "Sunny PNR T2H9VR｜20kg checked｜取車前預留 buffer 過關同拎行李；卓Sir UO862 HKG 15:45 T2→KIX 20:20 T1（擬搭／確認中）。回程 Sunny UO689 20:15；5/2 已還車，6/2 由大阪去機場。",
      detail: "關西國際機場（KIX）建喺大阪灣人工島，係關西主要國際門戶。今次去程同回程都用 HK Express，流程相對集中。",
      history: "KIX 1994 年開港，係日本最早完全建喺海上嘅大型國際機場之一，服務大阪・京都・神戸一帶。",
      origin: "選 KIX 係因為租車喺機場取、之後北上城崎同丹後，動線順。",
      stories: "落地後唔使急住入市區——15:00 取車前搞掂 SIM／換滙／廁所就得。",
      highlights: ["Sunny UO686 13:05 抵達", "15:00 Nissan 取車", "卓Sir UO862 ~20:20 抵達（擬搭／確認中）", "回程 Sunny UO689 20:15"],
      mapsQuery: "Kansai International Airport",
      links: [
        { label: "機場官方", url: "https://www.kansai-airport.or.jp/", kind: "official" },
        { label: "機票確認 Doc", url: "https://docs.google.com/document/d/1Vc6RYFxl9GAjuCvLGEg_v4EpkNr2erpCofBijbGhWww/edit?usp=drivesdk", kind: "drive" }
      ]
    },
    {
      id: "nissan",
      name: "Nissan 租車・關西機場",
      nameJa: "日産レンタカー 関西空港",
      day: 1,
      lat: 34.4355,
      lng: 135.2438, // approx airport rental area
      image: "images/kix.jpg",
      tags: ["交通", "已訂"],
      intro: "自駕起點。KICKS e-POWER 四驅＋雪胎＋ETC；機場取、梅田還。",
      tips: "確認 26102504206（舊 26102504145 已取消）｜31/1 15:00 取 → 5/2 15:00 梅田還｜約 ¥67,892｜滿油還車。",
      detail: "日產租車關西機場店係五日自駕起點。取車後先入大阪 overnight，翌日北上城崎。還車喺大阪梅田，之後無車日飛返。",
      history: "關西機場周邊租車舖服務自駕遊客北上兵庫・京都丹後。",
      origin: "選機場取＋梅田還，減少最後一日趕機場壓力。",
      stories: "已加 4WD、スタッドレス、ETC——冬日丹後海岸同山陰側較穩陣；仍盡量避開過多雪山路。",
      highlights: ["確認 26102504206", "KICKS 4WD＋雪胎＋ETC", "機場取／梅田還"],
      mapsQuery: "日産レンタカー 関西国際空港",
      links: [
        { label: "Nissan Rent-A-Car", url: "https://nissan-rentacar.com/", kind: "official" },
        { label: "租車確認 Doc", url: "https://docs.google.com/document/d/1FdTPcwj0uKyostIZuNc2sTtQ-L-Aa9aNyIEZ-66p61E/edit?usp=drivesdk", kind: "drive" }
      ]
    },
    {
      id: "osaka-night",
      name: "西成 Airbnb・會合卓Sir",
      nameJa: "西成区旭／湯里花園町駅",
      day: 1,
      lat: 34.6450271,
      lng: 135.4957524, // Airbnb confirm maps pin Asahi 1-3-28
      image: "images/osaka-night.jpg",
      tags: ["住宿", "會合", "已訂"],
      intro: "取車後入西成・旭 overnight（完整旅居；場內免費車庫）。卓Sir UO862 ~20:20 抵 KIX 後會合——輕鬆食飯、唔趕。",
      tips: "✅ 場內免費住宅車庫 1 位——Nissan KICKS OK（舊守口 listing 嘅 kei-only／14:00–21:00 封路警告已唔適用）。CI 16:00／CO 翌日 12:00（正午）｜確認碼 HME24S4TXJ｜Host シュウ（Superhost）｜湯里花園町駅／Osaka Metro 花園町（Y17）徒歩約 1 分｜須住客登記。",
      detail: "已訂 Airbnb 完整旅居（HME24S4TXJ）。地址：大阪府大阪市西成区旭1丁目3-28（湯里花園町駅徒歩約 1 分）。第一晚留大阪側等齊人，翌日北上城崎。舊守口・千林 HMEFA5DBKE 已取消。",
      history: "西成区旭一帶近 Osaka Metro 四つ橋線花園町駅，往心齋橋・難波約 10 分電車；便利店超市多，適合 overnight 會合。",
      origin: "選大阪 overnight 係因為機場取車後日短，唔好第一日硬衝城崎；改訂西成旭係因為有普通車位（KICKS OK），唔使再擔心 kei-only 同封路。",
      stories: "節奏：Sunny 落地 → 15:00 取車 → 場內車庫 CI → 卓Sir ~20:20 抵後會合 → 晚飯。翌日 CO 12:00 再北上。",
      highlights: [
        "✅ 場內免費車庫 1 位｜KICKS OK",
        "CI 16:00 → CO 12:00（正午）｜HME24S4TXJ｜Host シュウ",
        "湯里花園町駅／花園町（Y17）徒歩約 1 分",
        "住客登記（日本規定）",
        "卓Sir UO862 ~20:20 抵 KIX → 西成會合｜翌日北上城崎"
      ],
      mapsQuery: "大阪府大阪市西成区旭1丁目3-28",
      links: [
        { label: "Airbnb 房源", url: "https://www.airbnb.com/rooms/1725116940136021450", kind: "official" },
        { label: "Airbnb 訂單", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HME24S4TXJ", kind: "official" },
        { label: "Google Maps 地址", url: "https://maps.google.com/maps?q=34.6450271,135.4957524", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a185e31a730dccf", kind: "drive" },
        { label: "Gmail 舊單取消", url: "https://mail.google.com/mail/u/0/#inbox/1a185e178d051970", kind: "drive" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      id: "sasayama",
      name: "篠山城下町（可選）",
      nameJa: "丹波篠山城下町",
      day: 2,
      lat: 35.0036,
      lng: 135.2194, // known: Sasayama Castle
      image: "images/sasayama.jpg",
      tags: ["可選", "城下町"],
      intro: "大阪→城崎途中可選停：丹波篠山城下町，慢行古街。同福知山擇一即可。",
      tips: "SA 換司機｜唔好兩站都硬塞｜雪天睇路況。",
      detail: "丹波篠山保留城下町雰囲気，適合中途伸展同影相。今次係 optional stop，唔係必到。",
      history: "篠山城為江戶初期築城；城下町同丹波燒、黑枝豆等地方文化齊名。",
      origin: "位處大阪北上山陰／丹波動線，適合短暫休息。",
      stories: "同福知山城＋燒肉二選一就好——死黨遊以輕鬆為先。",
      highlights: ["城下町散步", "途中 optional", "SA 換司機"],
      mapsQuery: "篠山城 丹波篠山",
      links: [
        { label: "觀光官方", url: "https://tourism.sasayama.jp/visit/", kind: "official" }
      ]
    },
    {
      id: "fukuchiyama",
      name: "福知山城（可選）",
      nameJa: "福知山城",
      day: 2,
      lat: 35.2968244,
      lng: 135.1295995,
      image: "images/fukuchiyama-castle.jpg",
      tags: ["可選", "城堡"],
      intro: "明智光秀關聯名城。大阪→城崎途中可停；亦可 Day 5 由舞鶴日歸配燒肉。",
      tips: "天守重建｜冬季時間出發前確認｜同篠山擇一。",
      detail: "福知山城天守重建後成為市中心地標，展出地方同明智光秀相關史料。可作為北上途中短停，或之後由舞鶴日歸。",
      history: "城跡同明智光秀整治福知山有關；現天守為昭和後期復興。",
      origin: "位處京都北部交通節點，連接舞鶴・宮津・山陰方向。",
      stories: "若 Day 2 趕時間，留低畀 Day 5 舞鶴日歸＋燒肉更輕鬆。",
      highlights: ["光秀關聯", "途中或 Day5 日歸", "配燒肉更療癒"],
      mapsQuery: "福知山城",
      links: [
        { label: "官方網站", url: "https://www.fukuchiyamacastle.jp/", kind: "official" }
      ]
    },
    {
      id: "kinosaki",
      name: "城崎溫泉",
      nameJa: "城崎温泉",
      day: 2,
      lat: 35.6236961,
      lng: 134.8137043,
      image: "images/kinosaki.jpg",
      tags: ["溫泉", "重點"],
      intro: "今次唯一溫泉旅館夜（山本屋已訂）。浴衣行七湯；晚餐會席有但馬牛——午餐優先食蟹。",
      tips: "山本屋 CI 15:00–18:00｜一泊二食（晚＝但馬牛季節會席）→ 午餐請食蟹｜外湯手形視 bundle｜雪地行人小心。",
      detail: "城崎溫泉係兵庫代表溫泉街，大溪川兩岸旅館同外湯構成可步行嘅溫泉町。今次只安排一晚 ryokan（山本屋），其餘夜晚用 Airbnb。",
      history: "開湯傳說可追溯古代；近代以文學同外湯文化聞名，地震後重建令街道統一感強。",
      origin: "選城崎係因為可步行、溫泉密度高、又唔使衝進過多雪山。",
      stories: "死黨三人唯一「正式溫泉夜」——浸完湯行街最啱節奏。午餐蟹、晚餐但馬牛，唔撞餐。",
      highlights: ["唯一 ryokan 夜（山本屋已訂）", "外湯＋溫泉街", "午餐蟹／晚餐但馬牛"],
      mapsQuery: "城崎温泉",
      links: [
        { label: "城崎溫泉官方", url: "https://kinosaki-spa.gr.jp/", kind: "official" },
        { label: "山本屋官方", url: "https://www.kinosaki.com/", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      id: "yamamotoya",
      name: "城崎溫泉 山本屋",
      nameJa: "城崎温泉 山本屋",
      day: 2,
      lat: 35.6245,
      lng: 134.8128, // approx willow street / near Ichi-no-Yu; address Yushima 643
      image: "images/hero-kinosaki.jpg",
      tags: ["住宿", "溫泉", "已訂"],
      intro: "已訂唯一 onsen 夜。柳並木中心老舖；豪華套房日式・半露天風呂；一泊二食含但馬牛季節會席。",
      tips: "CI 15:00–18:00／CO 10:00｜Rakuten 訂單 21315099225634・客房 22315097279732｜Tel 0796-32-2114｜入浴税 ¥360 現地｜免費取消至 2027-01-28 23:59 JST｜晚餐已含 → 午餐優先蟹。",
      detail: "城崎溫泉山本屋（Yamamotoya），地址 兵庫県豊岡市城崎町湯島643。Rakuten Travel 已確認：豪華套房 日式客房・禁煙・可望庭園小型半露天浴池（16.2m²）；方案＜附但馬牛日式牛排＞【季節會席】包早＋晚；3 成人；HK$4,425.68（¥89,100）。",
      history: "創業約 350 年老舖，位處城崎柳並木中心、一の湯附近；外湯巡禮動線方便。",
      origin: "選作唯一溫泉旅館夜——位置、半露天風呂房型同但馬牛會席都合死黨三人節奏。",
      stories: "抵達後先 CI／寄行李；午餐蟹、晚飯會席但馬牛。翌日 10:00 CO 再去豊岡半日。",
      highlights: [
        "已訂｜CI 15:00–18:00 → CO 10:00",
        "豪華套房＋半露天風呂",
        "一泊二食・但馬牛季節會席",
        "午餐蟹優先（晚餐已有牛）",
        "訂單 21315099225634／客房 22315097279732"
      ],
      mapsQuery: "城崎温泉 山本屋 湯島643",
      links: [
        { label: "山本屋官方", url: "https://www.kinosaki.com/", kind: "official" },
        { label: "Rakuten 訂單列表", url: "https://travel.rakuten.com/HKG/zh-HK/hotel_reservation/list/?category=UPCOMING", kind: "official" },
        { label: "Google Maps 地址", url: "https://maps.google.com/maps?q=%E5%85%B5%E5%BA%AB%E7%9C%8C%E8%B1%8A%E5%B2%A1%E5%B8%82%E5%9F%8E%E5%B4%8E%E7%94%BA%E6%B9%AF%E5%B3%B6643", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a185a881ec45ede", kind: "drive" },
        { label: "城崎溫泉官方", url: "https://kinosaki-spa.gr.jp/", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      id: "stork",
      name: "兵庫県立コウノトリの郷公園",
      nameJa: "コウノトリの郷公園",
      day: 3,
      lat: 35.5523271,
      lng: 134.8544799,
      image: "images/stork-park.jpg",
      tags: ["景點", "自然"],
      intro: "豊岡半日：東方白鸛野生復育公園。冬天觀鳥同展覽都適合慢慢行。",
      tips: "官方 satokouen.jp｜冬季時間出發前確認｜適合家庭／悠閒節奏。",
      detail: "郷公園係日本東方白鸛復育同野生回歸嘅重要基地，有飼育展示同田園風景。",
      history: "日本野生コウノトリ一度滅絕；豊岡長期推動復育同放飛，成為地方象徵。",
      origin: "選豊岡半日，係因為近城崎、又唔使長途山路。",
      stories: "同鞄街、玄武洞可串成半日 loop，唔使貪多。",
      highlights: ["白鸛復育", "豊岡半日", "悠閒觀鳥"],
      mapsQuery: "コウノトリの郷公園",
      links: [
        { label: "官方網站", url: "https://satokouen.jp/", kind: "official" }
      ]
    },
    {
      id: "bag-street",
      name: "豊岡鞄・袋物街",
      nameJa: "豊岡鞄",
      day: 3,
      lat: 35.5445,
      lng: 134.8205, // approx near Toyooka station / bag town
      image: "images/toyooka.jpg",
      tags: ["購物", "可選"],
      intro: "豊岡係日本袋物／鞄產地。半日可順路睇店、買伴手禮。",
      tips: "店休日出發前確認｜泊車睇當地指示｜唔使硬塞太多店。",
      detail: "豊岡鞄係地方品牌同產業遺產；市區有專門店同展示，適合短停。",
      history: "豊岡袋物產業歷史悠久，近代成為日本知名鞄產地之一。",
      origin: "同郷公園、玄武洞組成豊岡半日。",
      stories: "想買實用伴手禮可以喺呢度解決，唔使留到最後一日趕。",
      highlights: ["豊岡鞄", "伴手禮", "半日串遊"],
      mapsQuery: "豊岡鞄 豊岡駅",
      links: [
        { label: "Sea of Kyoto／周邊 DMO", url: "https://www.uminokyoto.jp/", kind: "official" }
      ]
    },
    {
      id: "genbudo",
      name: "玄武洞公園",
      nameJa: "玄武洞公園",
      day: 3,
      lat: 35.5879771,
      lng: 134.8042576,
      image: "images/genbudo.jpg",
      tags: ["景點", "地質"],
      intro: "玄武岩柱狀節理洞穴群。短行＋影相就好，近豊岡／城崎。",
      tips: "官方 genbudo-park.jp｜地面可能濕滑｜冬日着防滑鞋。",
      detail: "玄武洞以柱狀節理著名，係山陰側經典地質景點，適合豊岡半日順路。",
      history: "洞窟群同火山岩冷卻收縮形成；近代成為學術同觀光地。",
      origin: "近城崎，唔使繞遠路。",
      stories: "半日三點（鸛・鞄・洞）揀 2–3 個就夠，留體力畀夜晚 Airbnb。",
      highlights: ["柱狀節理", "短停夠睇", "防滑鞋"],
      mapsQuery: "玄武洞公園",
      links: [
        { label: "官方網站", url: "https://genbudo-park.jp/", kind: "official" }
      ]
    },
    {
      id: "takeda",
      name: "竹田城跡（冬天不能登城）",
      nameJa: "竹田城跡",
      day: 3,
      lat: 35.2988984,
      lng: 134.8358992,
      image: "images/takeda-castle.jpg",
      tags: ["參考", "冬季關閉"],
      intro: "「天空の城」好影，但 1/4–2/28 冬季禁止登城——今次行程不能上。只作參考／遠望。",
      tips: "⚠️ 2027/1/4–2/28 不能攀登｜唔好專程衝｜官方確認季節開放。",
      detail: "竹田城跡以雲海同石垣聞名，但冬季為安全關閉登山道。本行程日期落喺關閉期，故不安排登城。",
      history: "山城遺跡；近年因空拍同雲海爆紅，同時加強安全管理同季節封閉。",
      origin: "列作參考，避免死黨白跑一趟關門。",
      stories: "想影「城崎附近名城」可以改福知山；竹田留待非冬季再來。",
      highlights: ["冬季關閉 1/4–2/28", "今次不能登城", "遠望／改期再來"],
      mapsQuery: "竹田城跡",
      links: [
        { label: "官方（朝来市）", url: "https://www.city.asago.hyogo.jp/site/takeda/", kind: "official" }
      ]
    },
    {
      id: "amanohashidate",
      name: "天橋立",
      nameJa: "天橋立",
      day: 4,
      lat: 35.5680023,
      lng: 135.1906382,
      image: "images/amanohashidate.jpg",
      tags: ["景點", "重點"],
      intro: "日本三景之一。松林砂嘴橫跨宮津灣；笠松公園「股のぞき」經典角度。",
      tips: "纜車／リフト視風同時間｜冬天凍，着夠暖｜官方 amanohashidate.jp",
      detail: "天橋立係京都北部象徵景觀。可步行沙嘴、坐纜車／椅lift 上展望台。冬日人少啲，風景一樣震撼。",
      history: "自古被詠入和歌；同松島、宮島並列日本三景。",
      origin: "今次丹後主軸之一，連伊根舟屋成日遊。",
      stories: "悠閒玩法：展望台 → 沙嘴散步 → 午餐 → 轉伊根。",
      highlights: ["日本三景", "笠松展望", "連伊根一日"],
      mapsQuery: "天橋立",
      links: [
        { label: "官方網站", url: "https://www.amanohashidate.jp/", kind: "official" },
        { label: "Sea of Kyoto DMO", url: "https://www.uminokyoto.jp/", kind: "official" }
      ]
    },
    {
      id: "ine",
      name: "伊根の舟屋",
      nameJa: "伊根の舟屋",
      day: 4,
      lat: 35.6749398,
      lng: 135.2894367,
      image: "images/ine-funaya.jpg",
      tags: ["景點", "重點"],
      intro: "灣畔舟屋並列嘅漁村風景。慢駛、影相、食海鮮——比熱門京都市區靜好多。",
      tips: "窄路同觀光巴士｜冬天日照短提早走｜官方 ine-kankou.jp",
      detail: "伊根舟屋係丹後代表性海岸聚落，一樓泊船、二樓住人。適合慢遊同攝影。",
      history: "漁業聚落長期沿灣而建；近年成觀光熱點但仍保持生活感。",
      origin: "同天橋立組成「京都海」主菜。",
      stories: "唔好趕 dusk 山路——提早返宮津／Airbnb 最穩。",
      highlights: ["舟屋灣景", "安靜漁村", "連天橋立"],
      mapsQuery: "伊根の舟屋",
      links: [
        { label: "伊根觀光官方", url: "https://www.ine-kankou.jp/", kind: "official" }
      ]
    },
    {
      id: "maizuru",
      name: "舞鶴・赤れんがパーク",
      nameJa: "舞鶴赤れんがパーク",
      day: 5,
      lat: 35.4755614,
      lng: 135.3828528,
      image: "images/maizuru-akarenga.jpg",
      tags: ["景點", "重點"],
      intro: "舊海軍磚造倉庫群活化成公園。紅磚建築＋海風，適合半日散步同咖啡。",
      tips: "官方 akarenga-park.com｜可選加福知山燒肉日歸｜Airbnb ★4.96 短名單（可泊 4 車）",
      detail: "赤れんがパーク保存明治／大正海軍相關磚造倉庫，而家係舞鶴代表性觀光區。",
      history: "舞鶴係舊軍港；磚造倉庫群被活化為文化觀光設施。",
      origin: "選舞鶴 overnight，方便翌日南下梅田還車。",
      stories: "想食燒肉可日歸福知山；唔想開車就喺園區同市區慢慢行。",
      highlights: ["紅磚倉庫", "半日剛好", "可加福知山燒肉"],
      mapsQuery: "舞鶴赤れんがパーク",
      links: [
        { label: "赤れんがパーク", url: "https://akarenga-park.com/", kind: "official" },
        { label: "舞鶴觀光", url: "https://maizuru-kanko.net/", kind: "official" }
      ]
    },
    {
      id: "umeda-return",
      name: "大阪梅田還車",
      nameJa: "大阪・梅田",
      day: 6,
      lat: 34.7054194,
      lng: 135.4983721,
      image: "images/osaka-night.jpg",
      tags: ["交通"],
      intro: "5/2 15:00 前梅田還 Nissan。之後無 Lodging——自行安排市區 overnight 或機場附近（未訂）。",
      tips: "滿油還車｜確認 26102504206｜15:00 deadline｜之後行程自理（本站不寫死未訂酒店）。",
      detail: "還車後自駕結束。6/2 晚機，5/2 夜住宿未列入短名單主軸，請自行補訂或當日決定。",
      history: "梅田係大阪交通樞紐，租車還車點方便轉鐵道去機場。",
      origin: "機場取／梅田還減少最後一日趕路。",
      stories: "還完車可以 chill——第二日先飛。",
      highlights: ["5/2 15:00 還車", "滿油", "之後無車"],
      mapsQuery: "大阪梅田",
      links: [
        { label: "租車確認 Doc", url: "https://docs.google.com/document/d/1FdTPcwj0uKyostIZuNc2sTtQ-L-Aa9aNyIEZ-66p61E/edit?usp=drivesdk", kind: "drive" }
      ]
    },
    {
      id: "kix-depart",
      name: "KIX 回家",
      nameJa: "関西国際空港",
      day: 7,
      lat: 34.4342045,
      lng: 135.2225230,
      image: "images/kix.jpg",
      tags: ["機場"],
      intro: "Sunny UO689 20:15 KIX→HKG 23:55。卓Sir 回程窗口同日 2/6（航班號確認中）。預留去機場同 bag drop buffer。",
      tips: "PNR T2H9VR｜目標傍晚到機場｜20kg checked。",
      detail: "回程同一 PNR。無自駕，用機場巴士／電車／計程車視住宿位置。",
      history: "KIX 夜機常見於廉價航空排班。",
      origin: "選夜機換全日彈性。",
      stories: "唔使太早到——但亦唔好踩死線。",
      highlights: ["UO689 20:15", "23:55 抵 HKG", "同一 PNR T2H9VR"],
      mapsQuery: "Kansai International Airport",
      links: [
        { label: "機場官方", url: "https://www.kansai-airport.or.jp/", kind: "official" },
        { label: "機票確認 Doc", url: "https://docs.google.com/document/d/1Vc6RYFxl9GAjuCvLGEg_v4EpkNr2erpCofBijbGhWww/edit?usp=drivesdk", kind: "drive" }
      ]
    }
  ],

  days: [
    {
      id: 1,
      date: "31/1（日）",
      title: "香港 → KIX → 西成・旭",
      subtitle: "落地取車，Airbnb CI，卓Sir ~20:20 會合",
      hero: "images/kix.jpg",
      summary: "Sunny UO686 13:05 抵 KIX → 15:00 Nissan 取車 → 西成 Airbnb（HME24S4TXJ・旭1-3-28）CI → 卓Sir UO862 ~20:20 抵 KIX 後晚間會合。✅ 場內免費車庫（KICKS OK）。",
      timeline: [
        { time: "08:30", text: "Sunny＋同伴 HKG 起飛 UO686（PNR T2H9VR｜HKD 3401｜20kg）", placeId: null },
        { time: "13:05", text: "Sunny 抵 KIX → 過關拎行李", placeId: "kix" },
        { time: "15:00", text: "Nissan 關西機場取車（確認 26102504206｜KICKS 4WD＋雪胎＋ETC）", placeId: "nissan" },
        { time: "15:45", text: "卓Sir HKG T2 起飛 UO862（擬搭／確認中｜選擇頁約 HKD 3,071｜~3h35）", placeId: null },
        { time: "16:00", text: "西成 Airbnb CI（HME24S4TXJ｜旭1-3-28｜場內免費車庫 1 位・KICKS OK｜CO 翌日 12:00）", placeId: "osaka-night" },
        { time: "20:20", text: "卓Sir 抵 KIX T1（UO862）→ 前往西成 Airbnb 會合｜晚飯輕鬆", placeId: "osaka-night" }
      ],
      transport: "機場取車後去西成・旭（唔去守口／千林）；第一日唔北上。場內免費車庫泊 KICKS。"
    },
    {
      id: 2,
      date: "1/2（一）",
      title: "大阪 → 城崎溫泉・山本屋",
      subtitle: "唯一 onsen ryokan 夜（已訂）",
      hero: "images/kinosaki.jpg",
      summary: "北上城崎；途中可選篠山（城下町）停。山本屋 CI 15:00–18:00（已訂）。晚餐會席有但馬牛 → 午餐優先食蟹。",
      timeline: [
        { time: "朝", text: "西成 Airbnb CO 12:00 → 高速公路北上（可選篠山城下町｜SA 換司機）", placeId: "osaka-night" },
        { time: "途中可選", text: "丹波篠山城下町 或 福知山城（擇一）", placeId: "sasayama" },
        { time: "午", text: "抵達城崎前後｜午餐優先食蟹（晚會席有但馬牛）", placeId: "kinosaki" },
        { time: "15:00–18:00", text: "山本屋 CI（湯島643｜豪華套房半露天風呂｜訂單 21315099225634）", placeId: "yamamotoya" },
        { time: "晚", text: "一泊二食夕食：但馬牛季節會席｜外湯巡禮", placeId: "yamamotoya" }
      ],
      transport: "大阪→城崎約 3–3.5 小時視休息｜要 ETC｜避開過多雪山路｜雪胎已備｜目標 CI 窗內抵達。"
    },
    {
      id: 3,
      date: "2/2（二）",
      title: "豊岡半日",
      subtitle: "白鸛・鞄・玄武洞",
      hero: "images/stork-park.jpg",
      summary: "山本屋 CO 10:00 → 豊岡半日：郷公園、鞄街、玄武洞。竹田城冬季關閉不能登。夜：Airbnb 豊岡／城崎（短名單）。",
      timeline: [
        { time: "朝", text: "山本屋 CO 10:00（含早餐）→ 豊岡方向", placeId: "yamamotoya" },
        { time: "上午", text: "コウノトリの郷公園", placeId: "stork" },
        { time: "午", text: "豊岡鞄／袋物街（可選）＋午餐", placeId: "bag-street" },
        { time: "午後", text: "玄武洞公園", placeId: "genbudo" },
        { time: "參考", text: "⚠️ 竹田城跡 1/4–2/28 冬季不能登城——今次唔安排", placeId: "takeda" },
        { time: "晚", text: "Airbnb 豊岡／城崎（短名單・未訂｜偏好整套房＋泊車）", placeId: null }
      ],
      transport: "豊岡周邊短距離自駕；半日揀 2–3 點即可。"
    },
    {
      id: 4,
      date: "3/2（三）",
      title: "天橋立 × 伊根舟屋",
      subtitle: "京都海主菜",
      hero: "images/amanohashidate.jpg",
      summary: "天橋立展望＋沙嘴，轉伊根舟屋。夜：宮津／伊根 Airbnb。",
      timeline: [
        { time: "上午", text: "天橋立（笠松展望／沙嘴）", placeId: "amanohashidate" },
        { time: "午", text: "午餐（宮津／橋立一帶）", placeId: "amanohashidate" },
        { time: "午後", text: "伊根の舟屋（慢駛影相）", placeId: "ine" },
        { time: "晚", text: "宮津／伊根 Airbnb（短名單・未訂）｜天黑前返程", placeId: "ine" }
      ],
      transport: "海岸道路冬日提早天黑；留 buffer，唔好趕夜路。"
    },
    {
      id: 5,
      date: "4/2（四）",
      title: "舞鶴赤煉瓦",
      subtitle: "可選福知山燒肉日歸",
      hero: "images/maizuru-akarenga.jpg",
      summary: "赤れんがパーク半日；可選福知山城＋燒肉日歸。夜：舞鶴 Airbnb ★4.96 短名單。",
      timeline: [
        { time: "上午", text: "舞鶴赤れんがパーク", placeId: "maizuru" },
        { time: "可選", text: "福知山城＋燒肉日歸（若 Day2 未去）", placeId: "fukuchiyama" },
        { time: "晚", text: "舞鶴 Airbnb ★4.96／可泊 4 車（短名單・未訂）", placeId: "maizuru" }
      ],
      transport: "舞鶴市區短程；日歸福知山約 1 小時視路況。"
    },
    {
      id: 6,
      date: "5/2（五）",
      title: "舞鶴 → 梅田還車",
      subtitle: "自駕完結",
      hero: "images/osaka-night.jpg",
      summary: "南下大阪，15:00 前梅田還車。本晚無既定 lodging（自行安排）。",
      timeline: [
        { time: "朝–午", text: "舞鶴出發南下｜入油（滿油）", placeId: "maizuru" },
        { time: "15:00", text: "大阪梅田 Nissan 還車（確認 26102504206）", placeId: "umeda-return" },
        { time: "晚", text: "無既定住宿｜自行安排大阪／機場附近（未訂）", placeId: null }
      ],
      transport: "目標 15:00 前還車；高速公路視週末車流留 buffer。"
    },
    {
      id: 7,
      date: "6/2（六）",
      title: "KIX → 香港",
      subtitle: "夜機回家",
      hero: "images/kix.jpg",
      summary: "無自駕日。Sunny UO689 20:15 起飛，23:55 抵港。卓Sir 回程窗口同日 2/6 KIX→HKG（航班號確認中）。",
      timeline: [
        { time: "日", text: "大阪 chill／買手信（視前晚住宿）", placeId: "umeda-return" },
        { time: "傍晚", text: "出發去 KIX｜預留 bag drop buffer", placeId: "kix-depart" },
        { time: "20:15", text: "UO689 起飛 → 23:55 HKG", placeId: "kix-depart" }
      ],
      transport: "電車／空港巴士／計程車視住宿；無車。"
    }
  ],

  routeOverview: [
    { id: "kix", label: "KIX" },
    { id: "osaka-night", label: "西成・旭" },
    { id: "kinosaki", label: "城崎" },
    { id: "stork", label: "豊岡" },
    { id: "amanohashidate", label: "天橋立" },
    { id: "ine", label: "伊根" },
    { id: "maizuru", label: "舞鶴" },
    { id: "umeda-return", label: "梅田還車" },
    { id: "kix-depart", label: "KIX" }
  ]
};

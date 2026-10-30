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
    nights: 6,
    travelers: ["Sunny", "同伴", "卓Sir（UO862 ~20:20 抵 KIX → 西成會合）"],
    updated: "2026-10-31 00:11",
    note: "✅ 2/4 離開伊根後去篠山／丹波篠山（已決定・鎖定）。1/31–2/5 六晚住宿全部已訂。免費取消：1/31→1/26 16:00｜山本屋→1/28 23:59 JST｜2/2→1/28 15:00｜伊根約至 1/20｜OITO→1/30 15:00｜Hankyu RESPIRE→2/4 00:00（大阪時間）。Sunny 機票同租車已訂；卓Sir 機票 UO862 擬搭／確認中。出發前請再確認營業時間同路況。",
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
      { label: "行程 Google Sheet｜死黨三人遊2027", url: "https://docs.google.com/spreadsheets/d/1hjShToJP8XwYnxck9Tzy7zn1VWIjDgzYwwArMbFWUL8/edit", kind: "drive" },
      { label: "行程總 Drive 資料夾", url: "https://drive.google.com/drive/folders/1XGVNEAhR3YwMkaBcTWBInnj0TSSYQxhn", kind: "drive" },
      { label: "租車確認 Doc", url: "https://docs.google.com/document/d/1FdTPcwj0uKyostIZuNc2sTtQ-L-Aa9aNyIEZ-66p61E/edit?usp=drivesdk", kind: "drive" },
      { label: "京都海／Sea of Kyoto DMO", url: "https://www.uminokyoto.jp/", kind: "official" }
    ]
  },

  lodging: [
    {
      night: "31/1",
      placeId: "osaka-night",
      name: "完整旅居（Airbnb）",
      area: "西成・旭（Nishinari Asahi）",
      address: "大阪府大阪市西成区旭1丁目3-28／1-chōme-3-28 Asahi, Nishinari Ward, Osaka 557-0032",
      confirm: "已訂 HME24S4TXJ｜Host シュウ（Superhost）｜3 成人",
      status: "booked",
      freeCancel: "免費取消至 1/26 16:00（當地）",
      note: "CI 16:00→CO 12:00；場內免費車庫1位（KICKS OK）；湯里花園町徒歩1分；餘款 1/18 HK$1,341.96",
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
      placeId: "yamamotoya",
      name: "城崎溫泉 山本屋（Yamamotoya）",
      area: "城崎溫泉・湯島",
      address: "669-6101 兵庫県豊岡市城崎町湯島643",
      confirm: "已訂 Rakuten 21315099225634／客房 22315097279732｜3 成人",
      status: "booked",
      freeCancel: "免費取消至 1/28 23:59 JST",
      note: "CI 15:00–18:00→CO 10:00；豪華套房半露天；一泊二食但馬牛會席；入浴税¥360現地",
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
      placeId: "rakuten-stay-riverside",
      name: "Rakuten STAY TERRACE 城崎リバーサイド【C】",
      area: "城崎町上山",
      address: "兵庫県豊岡市城崎町上山1414-4（669-6116）",
      confirm: "已訂 Airbnb HM424YER9F｜3 成人｜溫泉客房 2大床+4單人",
      status: "booked",
      freeCancel: "免費取消至 1/28 15:00（當地）",
      note: "CI 2/2 15:00→CO 2/3 10:00；有廚房可煮食；餘款 HK$2,982.14 於 1/20 MC*0136",
      links: [
        { label: "Rakuten STAY 城崎", url: "https://stay.rakuten.co.jp/terrace/kinosaki/", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a186424be801b96", kind: "drive" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "3/2",
      placeId: "funaya-inn-kyo",
      name: "Funaya Inn -kyo-（伊根舟屋）整棟",
      area: "伊根",
      confirm: "Res 4030-4074-1104｜Sunny Sau Shun Leung｜3 adults Driving",
      status: "booked",
      freeCancel: "約至 1/20 免費；其後 13日前30%／7日前50%／當日100%",
      note: "CI 2/3 15:00–17:00（約15:00到）→CO 2/4 10:00；Japanese/Western；無餐／禁止煮食；¥59,400 tax-in 已網上付；到達按鐘；ETA遲30分要通知（090-7096-4630／funayakyo@gmail.com）",
      links: [
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a1865ca2a687f52", kind: "drive" },
        { label: "伊根觀光", url: "https://www.ine-kankou.jp/", kind: "official" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "4/2",
      placeId: "oito-bettei",
      name: "OITO 別邸 一棟貸切宿",
      area: "丹波篠山・河原町（城下町）",
      address: "669-2325 兵庫県丹波篠山市河原町91",
      confirm: "已訂 Airbnb HMDP9MSW5B｜Host Oito（OITO）｜3 成人｜整棟",
      status: "booked",
      freeCancel: "免費取消至 1/30 15:00（當地）",
      note: "CI 2/4 15:00後→CO 2/5 11:00前；禁煙｜安靜 21:00–07:00｜最多5人過夜；餘款 HK$2,368.20 於 1/22 MC*0136；Host +81 70-8594-2748",
      links: [
        { label: "Airbnb 房源", url: "https://www.airbnb.com/rooms/1348957379995460581", kind: "official" },
        { label: "Airbnb 訂單 HMDP9MSW5B", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMDP9MSW5B", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a18d690b545f61e", kind: "drive" },
        { label: "丹波篠山觀光官方", url: "https://tourism.sasayama.jp/", kind: "official" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      night: "5/2",
      placeId: "hankyu-respire-osaka",
      name: "Hotel Hankyu RESPIRE OSAKA",
      area: "梅田・大深町（Umeda Ofukacho）",
      address: "大阪府大阪市北区大深町1-1／1-1 Ofukacho, Kita Ward, Osaka 530-0011",
      confirm: "已訂 Agoda 1792170954｜Lead Sau Shun Leung｜3 成人｜12–23F Standard Triple Non-Smoking",
      status: "booked",
      freeCancel: "免費取消至 2/4 00:00（大阪時間）",
      note: "CI 2/5 15:00後→CO 2/6 12:00前；高樓層特別要求；¥36,728 tax-in（或約¥38,564含5% adjustment）於 2/2 MC*0136 自動扣",
      links: [
        { label: "酒店官方", url: "https://www.hankyu-hotel.com/hotel/hh/respireosaka/", kind: "official" },
        { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Hankyu+RESPIRE+OSAKA%2C+1-1+Ofukacho%2C+Umeda%2C+Osaka%2C+Japan%2C+5300011", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a18d856c9650566", kind: "drive" },
        { label: "住宿 Drive 資料夾", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
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
      name: "篠山城跡／城下町",
      nameJa: "篠山城跡・大書院",
      day: 5,
      lat: 35.0036,
      lng: 135.2194, // known: Sasayama Castle
      image: "images/sasayama.jpg",
      tags: ["景點", "重點", "城下町"],
      intro: "✅ 2/4 已決定主軸：篠山城跡大書院＋城下町慢行。城下平地散步，冬日適合悠閒節奏；翌日梅田還車更近。",
      tips: "大書院 9:00–17:00（入館至 16:30）｜月曜休館（2/4 木 OK）｜大人 ¥500｜有料駐車場｜丹南篠山口 IC 約 10 分｜城下町平地，唔使行雪山",
      detail: "慶長 14 年（1609）築城；大書院平成再建，展出城史模型同史料。城下町保留古街雰囲気，適合半日慢行、影相同本地食。",
      history: "篠山城為江戶初期築城；城下町同丹波燒、黑豆等地方文化齊名。",
      origin: "伊根 CO 後南下 overnight；比舞鶴更近大阪，翌日 15:00 梅田還車 buffer 更鬆。",
      stories: "死黨遊以輕鬆為先——城＋古街＋安間家／青山／歴史美術館揀 2 館就夠；能樂資料館休至 2 月底 skip；晚可試ぼたん鍋。",
      highlights: ["大書院＋城跡", "城下町散步", "2/4 主軸", "翌日還車更近"],
      mapsQuery: "篠山城大書院 丹波篠山",
      links: [
        { label: "大書院（觀光官方）", url: "https://tourism.sasayama.jp/ohshoin/", kind: "official" },
        { label: "大書院公式", url: "https://withsasayama.jp/osyoin/", kind: "official" },
        { label: "丹波篠山觀光", url: "https://tourism.sasayama.jp/", kind: "official" }
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
      intro: "明智光秀關聯名城。大阪→城崎途中可停。2/4 已專程去篠山——Day2 途中可唔停（福知山都唔硬塞）。",
      tips: "天守重建｜冬季時間出發前確認｜2/4 已去篠山 → Day2 途中可 skip｜唔塞入 2/4。",
      detail: "福知山城天守重建後成為市中心地標，展出地方同明智光秀相關史料。可作為北上途中短停。",
      history: "城跡同明智光秀整治福知山有關；現天守為昭和後期復興。",
      origin: "位處京都北部交通節點，連接舞鶴・宮津・山陰方向。",
      stories: "Day 2 趕時間就跳過——2/4 專程篠山，唔日歸福知山。",
      highlights: ["光秀關聯", "途中 optional", "2/4 唔硬塞"],
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
      id: "kinosaki-ropeway",
      name: "城崎温泉ロープウェイ",
      nameJa: "城崎温泉ロープウェイ",
      day: 3,
      lat: 35.625228,
      lng: 134.803877, // 山麓駅（城崎温泉駅）near Kinosaki ropeway station
      image: "images/kinosaki.jpg",
      tags: ["景點", "展望"],
      intro: "城崎溫泉街內上大師山：約 7 分鐘到山頂展望，町並み同日本海一望。2/2 朝先坐纜車，之後再去豊岡半日。",
      tips: "官方 kinosaki-ropeway.jp｜山麓駅湯島806-1｜片道約 7 分｜冬日營業／休館出發前確認｜溫泉寺中間站可選。",
      detail: "城崎温泉ロープウェイ連接溫泉街同大師山山頂（標高約 231m）。山頂有展望台同テラスカフェ；中間站通温泉寺。街內景點，唔使出城。",
      history: "1962 年開通；三個駅舎為登録有形文化財。山頂景色獲米芝蓮綠色指南評價。",
      origin: "Sunny 2026-10-31：2/2 朝加纜車，取代郷公園；之後先去豊岡鞄街／玄武洞。",
      stories: "山本屋 CO 後行／短程去山麓駅 → 上大師山影相喝杯咖啡 → 落山再自駕豊岡半日。",
      highlights: ["約 7 分上大師山", "町並み・日本海展望", "街內・官方 kinosaki-ropeway.jp"],
      mapsQuery: "城崎温泉ロープウェイ",
      links: [
        { label: "官方網站", url: "https://kinosaki-ropeway.jp/", kind: "official" }
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
      origin: "同玄武洞組成豊岡半日（2/2 朝先坐城崎ロープウェイ）。",
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
      stories: "朝纜車後半日揀鞄街＋玄武洞就夠，留體力畀夜晚 Rakuten STAY。",
      highlights: ["柱狀節理", "短停夠睇", "防滑鞋"],
      mapsQuery: "玄武洞公園",
      links: [
        { label: "官方網站", url: "https://genbudo-park.jp/", kind: "official" }
      ]
    },
    {
      id: "rakuten-stay-riverside",
      name: "Rakuten STAY TERRACE 城崎リバーサイド",
      nameJa: "楽天ステイテラス 城崎リバーサイド",
      day: 3,
      lat: 35.5902,
      lng: 134.8018, // approx riverside near Genbudo / Kamiyama 1414-4
      image: "images/genbudo.jpg",
      tags: ["住宿", "已訂"],
      intro: "已訂 overnight（Airbnb HM424YER9F）。城崎町上山1414-4，近 JR 玄武洞／玄武洞公園對岸河畔；溫泉客房、有廚房可煮食。",
      tips: "CI 2/2 15:00 → CO 2/3 10:00｜確認 HM424YER9F｜地址 豊岡市城崎町上山1414-4（669-6116）｜免費取消至 1/28 15:00（當地）｜餘款 HK$2,982.14 於 1/20。",
      detail: "Rakuten STAY TERRACE 城崎リバーサイド【C】。近玄武洞一帶河畔，唔喺溫泉街中心——自駕方便。溫泉客房（2大床+4單人）、有廚房。",
      history: "樂天 STAY TERRACE 系列溫泉町周邊公寓式住宿，適合團體自駕 overnight。",
      origin: "山本屋後第二晚改住河畔 STAY，方便翌日轉天橋立／伊根，又近玄武洞。",
      stories: "朝ロープウェイ → 豊岡（鞄・洞）完，返上山 CI；可煮食輕鬆。翌日 CO 10:00 轉丹後。",
      highlights: [
        "已訂 HM424YER9F｜上山1414-4",
        "近玄武洞／JR 玄武洞一帶",
        "有廚房可煮食",
        "CI 15:00 → CO 10:00"
      ],
      mapsQuery: "豊岡市城崎町上山1414-4",
      links: [
        { label: "Rakuten STAY 城崎", url: "https://stay.rakuten.co.jp/terrace/kinosaki/", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a186424be801b96", kind: "drive" },
        { label: "Google Maps 地址", url: "https://maps.google.com/maps?q=35.5902,134.8018", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
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
      id: "funaya-inn-kyo",
      name: "Funaya Inn -kyo-（伊根）整棟",
      nameJa: "Funaya Inn -kyo-",
      day: 4,
      lat: 35.6749398,
      lng: 135.2894367, // Ine funaya area approx — exact inn pin unknown
      image: "images/ine-funaya.jpg",
      tags: ["住宿", "已訂"],
      intro: "已訂伊根舟屋整棟（Res 4030-4074-1104）。地圖針用伊根舟屋一帶座標（約 35.6749, 135.2894）；到達按鐘，ETA 遲 30 分要通知。",
      tips: "CI 2/3 15:00–17:00（約15:00到）→ CO 2/4 10:00｜無餐／禁止煮食｜到達按鐘｜遲到通知 090-7096-4630／funayakyo@gmail.com｜約至 1/20 免費取消。",
      detail: "Funaya Inn -kyo- 整棟（Japanese/Western）。伊根灣舟屋區 overnight；座標以伊根の舟屋一帶為準（整棟 exact pin 未知）。¥59,400 tax-in 已網上付。",
      history: "伊根舟屋一樓泊船、二樓住人；部分改建成整棟旅宿。",
      origin: "天橋立＋伊根一日後原地 overnight，第二日轉篠山唔使趕。",
      stories: "影完舟屋就近 CI；無廚房——晚餐要喺宮津／伊根食定。",
      highlights: [
        "已訂整棟｜Res 4030-4074-1104",
        "伊根舟屋一帶（地圖為區域座標）",
        "無餐／禁止煮食",
        "到達按鐘｜遲到要通知"
      ],
      mapsQuery: "伊根の舟屋",
      links: [
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a1865ca2a687f52", kind: "drive" },
        { label: "伊根觀光", url: "https://www.ine-kankou.jp/", kind: "official" },
        { label: "Google Maps（伊根一帶）", url: "https://maps.google.com/maps?q=35.6749398,135.2894367", kind: "official" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      id: "oito-bettei",
      name: "OITO 別邸 一棟貸切宿",
      nameJa: "OITO 別邸 一棟貸切宿",
      day: 5,
      lat: 35.0718,
      lng: 135.2268, // Airbnb listing / confirm pin Kawaramachi 91
      image: "images/sasayama.jpg",
      tags: ["住宿", "已訂", "城下町"],
      intro: "已訂篠山 overnight（Airbnb HMDP9MSW5B）。河原町91・城下町妻入商家群一帶；整棟一棟貸切，適合死黨三人。",
      tips: "CI 2/4 15:00後 → CO 2/5 11:00前｜確認 HMDP9MSW5B｜Host Oito +81 70-8594-2748｜禁煙｜安靜 21:00–07:00｜最多5人過夜｜免費取消至 1/30 15:00（當地）｜餘款 HK$2,368.20 於 1/22 MC*0136。",
      detail: "OITO 別邸 一棟貸切宿。地址：669-2325 兵庫県丹波篠山市河原町91。城下町河原町（重伝建）內；翌日南下梅田還車約 1–1.5h。",
      history: "河原町係丹波篠山城下町妻入商家群核心，近世商家町景觀保存區。",
      origin: "伊根 CO 後 overnight 選城下町整棟——散步河原町完就近 CI，翌日還車動線順。",
      stories: "午後河原町散步後直接 CI；晚餐可試ぼたん鍋。翌日 11:00前 CO → 梅田還車 → Hankyu RESPIRE。",
      highlights: [
        "已訂 HMDP9MSW5B｜河原町91",
        "整棟一棟貸切｜3 成人",
        "CI 15:00後 → CO 11:00前",
        "城下町・河原町重伝建一帶",
        "免費取消至 1/30 15:00（當地）"
      ],
      mapsQuery: "兵庫県丹波篠山市河原町91",
      links: [
        { label: "Airbnb 房源", url: "https://www.airbnb.com/rooms/1348957379995460581", kind: "official" },
        { label: "Airbnb 訂單", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMDP9MSW5B", kind: "official" },
        { label: "Google Maps 地址", url: "https://maps.google.com/maps?q=35.0718,135.2268", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a18d690b545f61e", kind: "drive" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
      ]
    },
    {
      id: "sasayama-rekishi",
      name: "丹波篠山市立歴史美術館",
      nameJa: "丹波篠山市立歴史美術館",
      day: 5,
      lat: 35.0028,
      lng: 135.2212, // approx 呉服町53
      image: "images/sasayama.jpg",
      tags: ["景點", "博物館"],
      intro: "明治木造裁判所改建美術館；室內展王地山燒同地方史料，冬日避寒好站。",
      tips: "9:00–17:00（入館至 16:30）｜月曜休館（2/4 木 OK）｜大人 ¥500｜可買 2／4 館共通券｜有駐車場",
      detail: "明治 24 年（1891）篠山地方裁判所建築改建；展出城下町美術、王地山燒同埋蔵文化財。城下町步行圈內。",
      history: "木造裁判所係日本最古級之一；昭和 57 年改為美術館並保存舊法廷。",
      origin: "城下町半日動線內，大書院後室內短停最適合冬日。",
      stories: "想避寒就入嚟；趕時間買共通券揀 2 館都得。",
      highlights: ["室內避寒", "王地山燒", "明治建築"],
      mapsQuery: "丹波篠山市立歴史美術館",
      links: [
        { label: "觀光官方", url: "https://tourism.sasayama.jp/rekishi-musium/", kind: "official" },
        { label: "公式（withsasayama）", url: "https://withsasayama.jp/history-museum/", kind: "official" }
      ]
    },
    {
      id: "sasayama-kawaramachi",
      name: "河原町妻入商家群",
      nameJa: "河原町妻入商家群",
      day: 5,
      lat: 34.9998,
      lng: 135.2225, // approx 河原町
      image: "images/sasayama.jpg",
      tags: ["景點", "城下町"],
      intro: "約 600m 江戶風妻入商家街；國重伝建。平地散步、影相、Cafe——冬日慢行剛好。",
      tips: "戶外町並み全日可散步｜店舖各自營業｜市營駐車場（1 小時未滿無料）｜唔使行山",
      detail: "篠山城下町昔日商業中心；妻入商家、千本格子、うだつ等保留江戶風情。2021 年電柱地中化後景觀更開揚。",
      history: "城築後不久形成；國指定重要傳統的建造物群保存地區。",
      origin: "同大書院／美術館步行可達，半日城下町動線尾站。",
      stories: "行完城想再影古街就過嚟；店休就當散步影相都值得。",
      highlights: ["妻入商家", "平地散步", "重伝建"],
      mapsQuery: "河原町妻入商家群 丹波篠山",
      links: [
        { label: "觀光官方", url: "https://tourism.sasayama.jp/kawaramachi/", kind: "official" },
        { label: "城下町モデルコース", url: "https://tourism.sasayama.jp/model_course/1/", kind: "official" }
      ]
    },
    {
      id: "sasayama-taisho",
      name: "大正ロマン館（可選）",
      nameJa: "丹波篠山 大正ロマン館",
      day: 5,
      lat: 35.0042,
      lng: 135.2205, // approx 北新町97
      image: "images/sasayama.jpg",
      tags: ["可選", "手信", "Cafe"],
      intro: "舊町役場改建；手信＋Cafe（黑豆軟雪糕）。大書院旁，可選停買手信／食甜品。",
      tips: "平日 10:00–17:00｜火曜定休（2/4 木 OK）｜北新町 97｜大書院步行圏",
      detail: "大正 12 年舊篠山町役場保存再利用；館內賣店同 Cafe＆Restaurant マールコッテ，主打丹波特産。",
      history: "約 70 年作町役場後，平成 5 年改為觀光交流館。",
      origin: "城下町動線內手信／Cafe 站；唔趕就入，趕就 skip。",
      stories: "想暖肚食黑豆軟雪糕就啱；唔係必到。",
      highlights: ["手信", "Cafe", "可選"],
      mapsQuery: "大正ロマン館 丹波篠山",
      links: [
        { label: "公式", url: "https://tanbasasayama.hyogo.jp/romankan/", kind: "official" },
        { label: "觀光官方（EN）", url: "https://tourism.sasayama.jp/visit/foreigner_post/taisho-roman-hall/", kind: "official" }
      ]
    },

    {
      id: "sasayama-anmake",
      name: "武家屋敷安間家史料館",
      nameJa: "武家屋敷安間家史料館",
      day: 5,
      lat: 35.0051,
      lng: 135.2168, // approx 西新町95
      image: "images/sasayama.jpg",
      tags: ["景點", "博物館", "武家屋敷"],
      intro: "天保期武家屋敷改史料館；室內展古文書、武具同生活器物。城下町步行圏，冬日避寒好站。",
      tips: "西新町 95｜大人 ¥500｜可買 2／4 館共通券（大書院・歴史美術館・安間家・青山歴史村）｜月曜休館（2/4 木 OK）｜丹南篠山口 IC 約 10 分",
      detail: "天保元年（1830）以降徒士住宅；平成全面改修後公開。市指定文化財；入母屋造茅葺曲屋，建築當初形保留良好。",
      history: "代々安間家住宅；禄高約 12 石嘅徒士屋敷，係城下町武家居住景觀嘅代表。",
      origin: "4 館共通券成員；大書院後室內短停／或同青山歴史村二揀一。",
      stories: "想睇真・武家屋敷就嚟呢度；同歴史美術館唔使全去晒。",
      highlights: ["武家屋敷", "室內避寒", "4 館共通券"],
      mapsQuery: "武家屋敷安間家史料館 丹波篠山",
      links: [
        { label: "觀光官方", url: "https://tourism.sasayama.jp/anmake/", kind: "official" }
      ]
    },
    {
      id: "sasayama-aoyama",
      name: "青山歴史村・デカンショ館",
      nameJa: "青山歴史村",
      day: 5,
      lat: 35.0045,
      lng: 135.2198, // approx 北新町48
      image: "images/sasayama.jpg",
      tags: ["景點", "博物館"],
      intro: "青山家別邸桂園舎＋土蔵；藩政文書同振徳堂蔵書。館內有デカンショ館（日本遺産）。",
      tips: "北新町 48｜大人 ¥500｜無料駐車場約 7 台｜可買 2／4 館共通券｜月曜休館（2/4 木 OK）｜大書院步行圏",
      detail: "版籍奉還後青山家別邸公開；昭和 62 年起作歷史村。平成 10 年資產寄付市後為市立史料館。デカンショ館喺園內。",
      history: "青山家係篠山藩主；振徳堂為藩校，蔵書同藩政文書係地方史料核心。",
      origin: "城下町半日動線內；同安間家／歴史美術館揀 1–2 館就夠，唔好塞爆。",
      stories: "想睇藩主系譜同デカンショ文化就入；趕時間買共通券揀重點。",
      highlights: ["桂園舎＋土蔵", "デカンショ館", "4 館共通券"],
      mapsQuery: "青山歴史村 丹波篠山",
      links: [
        { label: "觀光官方", url: "https://tourism.sasayama.jp/aoyama-rekishimura/", kind: "official" }
      ]
    },

    {
      id: "hankyu-respire-osaka",
      name: "Hotel Hankyu RESPIRE OSAKA",
      nameJa: "ホテル阪急レスパイア大阪",
      day: 6,
      lat: 34.7055,
      lng: 135.4983, // Umeda Ofukacho 1-1 approx
      image: "images/osaka-night.jpg",
      tags: ["住宿", "已訂", "梅田"],
      intro: "已訂 2/5 overnight（Agoda 1792170954）。梅田大深町1-1；還車後步行／短程可達。12–23F Standard Triple Non-Smoking；高樓層特別要求。",
      tips: "CI 2/5 15:00後 → CO 2/6 12:00前｜Agoda 1792170954｜3 成人｜免費取消至 2/4 00:00（大阪時間）｜其後／No-show 100%｜¥36,728 tax-in（或約¥38,564含5% adjustment）於 2/2 MC*0136 自動扣。",
      detail: "Hotel Hankyu RESPIRE OSAKA／ホテル阪急レスパイア大阪。地址：1-1 Ofukacho, Osaka 530-0011（大深町1-1，梅田）。還車後 CI；翌日 CO 後轉 KIX 夜機 UO689 20:15。",
      history: "阪急レスパイア係梅田北端大型酒店，靠近大阪駅・グランフロント。",
      origin: "梅田還車後 overnight——唔使當日趕機場，6/2 全日彈性再飛。",
      stories: "15:00 還車 → 附近 CI；夜可梅田 chill／手信。翌日 12:00前 CO → KIX。",
      highlights: [
        "已訂 Agoda 1792170954｜大深町1-1",
        "12–23F Standard Triple Non-Smoking｜3 成人",
        "CI 15:00後 → CO 12:00前",
        "免費取消至 2/4 00:00（大阪時間）",
        "梅田・還車後就近"
      ],
      mapsQuery: "Hotel Hankyu RESPIRE OSAKA, 1-1 Ofukacho, Osaka",
      links: [
        { label: "酒店官方", url: "https://www.hankyu-hotel.com/hotel/hh/respireosaka/", kind: "official" },
        { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Hankyu+RESPIRE+OSAKA%2C+1-1+Ofukacho%2C+Umeda%2C+Osaka%2C+Japan%2C+5300011", kind: "official" },
        { label: "Gmail 確認", url: "https://mail.google.com/mail/u/0/#inbox/1a18d856c9650566", kind: "drive" },
        { label: "住宿 Drive", url: "https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B", kind: "drive" }
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
      intro: "5/2 15:00 前梅田還 Nissan。之後步行／短程去 Hotel Hankyu RESPIRE OSAKA CI（已訂 Agoda 1792170954）。",
      tips: "滿油還車｜確認 26102504206｜15:00 deadline｜還車後 → Hankyu RESPIRE CI（大深町1-1）。",
      detail: "還車後自駕結束。5/2 夜住 Hankyu RESPIRE（已訂）；6/2 CO 後轉 KIX 夜機 UO689。",
      history: "梅田係大阪交通樞紐，租車還車點方便轉鐵道去機場。",
      origin: "機場取／梅田還減少最後一日趕路。",
      stories: "還完車 → Hankyu RESPIRE CI；梅田 chill，第二日先飛。",
      highlights: ["5/2 15:00 還車", "滿油", "之後 → Hankyu RESPIRE"],
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
      summary: "北上城崎。2/4 已決定專程去篠山 → Day2 途中可唔停（福知山都唔硬塞）——直奔城崎最穩。山本屋 CI 15:00–18:00（已訂）。晚餐會席有但馬牛 → 午餐優先食蟹。",
      timeline: [
        { time: "朝", text: "西成 Airbnb CO 12:00 → 高速公路北上（SA 換司機｜2/4 已定篠山 → 途中可唔停）", placeId: "osaka-night" },
        { time: "途中可選", text: "⚠️ 2/4 已決定專程篠山 → Day2 途中可唔停；想停先可選福知山城短停（唔硬塞）", placeId: "fukuchiyama" },
        { time: "午", text: "抵達城崎前後｜午餐優先食蟹（晚會席有但馬牛）", placeId: "kinosaki" },
        { time: "15:00–18:00", text: "山本屋 CI（湯島643｜豪華套房半露天風呂｜訂單 21315099225634）", placeId: "yamamotoya" },
        { time: "晚", text: "一泊二食夕食：但馬牛季節會席｜外湯巡禮", placeId: "yamamotoya" }
      ],
      transport: "大阪→城崎約 3–3.5 小時視休息｜要 ETC｜避開過多雪山路｜雪胎已備｜目標 CI 窗內抵達。2/4 已鎖定篠山 → 途中直上最鬆。"
    },
    {
      id: 3,
      date: "2/2（二）",
      title: "ロープウェイ × 豊岡半日",
      subtitle: "大師山展望・鞄・玄武洞",
      hero: "images/kinosaki.jpg",
      summary: "山本屋 CO 10:00 → 朝：城崎温泉ロープウェイ（街內上大師山・約 7 分）→ 之後豊岡半日（かばん街／玄武洞）→ 晚返城崎 Rakuten STAY TERRACE リバーサイド CI（已訂）。",
      timeline: [
        { time: "朝", text: "山本屋 CO 10:00（含早餐）→ 城崎温泉ロープウェイ（湯島806-1｜約 7 分上大師山展望）", placeId: "kinosaki-ropeway" },
        { time: "午", text: "豊岡鞄／袋物街（可選）＋午餐", placeId: "bag-street" },
        { time: "午後", text: "玄武洞公園", placeId: "genbudo" },
        { time: "晚", text: "返城崎｜Rakuten STAY TERRACE 城崎リバーサイド【C】CI（已訂 HM424YER9F｜上山1414-4｜15:00）", placeId: "rakuten-stay-riverside" }
      ],
      transport: "朝纜車喺溫泉街內步行／短程；之後自駕豊岡（鞄街・玄武洞）半日，傍晚返上山住宿。"
    },
    {
      id: 4,
      date: "3/2（三）",
      title: "天橋立 × 伊根舟屋",
      subtitle: "京都海主菜",
      hero: "images/amanohashidate.jpg",
      summary: "天橋立展望＋沙嘴，轉伊根舟屋。夜：Funaya Inn -kyo-（伊根舟屋・已訂）。",
      timeline: [
        { time: "上午", text: "天橋立（笠松展望／沙嘴）", placeId: "amanohashidate" },
        { time: "午", text: "午餐（宮津／橋立一帶）", placeId: "amanohashidate" },
        { time: "午後", text: "伊根の舟屋（慢駛影相）", placeId: "ine" },
        { time: "晚", text: "Funaya Inn -kyo- CI（已訂 Res 4030-4074-1104｜約15:00到｜無餐／禁止煮食）", placeId: "funaya-inn-kyo" }
      ],
      transport: "海岸道路冬日提早天黑；留 buffer，唔好趕夜路。"
    },
    {
      id: 5,
      date: "4/2（四）",
      title: "篠山／丹波篠山慢遊",
      subtitle: "城跡・城下町・室內（冬日平地）",
      hero: "images/sasayama.jpg",
      summary: "✅ 已決定：離開伊根後去篠山／丹波篠山（2/4 鎖定）。城跡大書院 → 安間家／青山歴史村／歴史美術館（揀 2–3 館）→ 河原町；⚠️ 能樂資料館休館至 2 月底 skip。夜：OITO 別邸（河原町91｜已訂 HMDP9MSW5B）｜晚餐可試冬日ぼたん鍋。",
      timeline: [
        { time: "10:00", text: "Funaya Inn -kyo- CO → 車往篠山（約 2–2.5h｜優選高速）｜✅ 目的地已鎖定", placeId: "funaya-inn-kyo" },
        { time: "午", text: "抵達丹波篠山｜城下町午餐（黑豆／本地食｜視店休日）", placeId: "sasayama" },
        { time: "午後", text: "篠山城跡・大書院（9–17｜月休・2/4 木 OK｜大人 ¥500）", placeId: "sasayama" },
        { time: "午後", text: "武家屋敷安間家史料館 或 青山歴史村（同属 4 館共通券｜室內）｜可揀歴史美術館", placeId: "sasayama-anmake" },
        { time: "午後", text: "可選大正ロマン館（手信／Cafe｜10–17｜火休・木 OK）", placeId: "sasayama-taisho" },
        { time: "午後晚", text: "河原町妻入商家群散步（平地古街・重伝建）", placeId: "sasayama-kawaramachi" },
        { time: "跳過", text: "⚠️ 能樂資料館休館至 2 月底——今次 skip，唔好專程跑", placeId: null },
        { time: "晚", text: "OITO 別邸 CI（已訂 HMDP9MSW5B｜河原町91｜15:00後｜整棟）｜晚餐 tip：冬日ぼたん鍋", placeId: "oito-bettei" }
      ],
      transport: "伊根→篠山約 2–2.5h：優選 京都縦貫道→綾部 JCT→舞鶴若狭道→丹南篠山口 IC→城下（約 10 分）。盡量行高速／幹線，避開丹波側山路同窄雪道。翌日篠山→梅田約 1–1.5h（比舞鶴南下更近）。雪胎已備；出發前查京都府／兵庫路況。晚餐 tip：丹波篠山冬日名物ぼたん鍋（猪肉鍋）——城下町／宿附近揀一間就好，唔使專程跑遠。"
    },
    {
      id: 6,
      date: "5/2（五）",
      title: "篠山 → 梅田還車 → Hankyu RESPIRE",
      subtitle: "自駕完結・梅田 overnight（已訂）",
      hero: "images/osaka-night.jpg",
      summary: "篠山南下大阪，15:00 前梅田還車（車程約 1–1.5h）。還車後 → Hotel Hankyu RESPIRE OSAKA CI（已訂 Agoda 1792170954｜大深町1-1｜15:00後）。",
      timeline: [
        { time: "朝–午", text: "OITO 別邸 CO 11:00前 → 南下（丹南篠山口 IC→中國道）｜入油（滿油）", placeId: "oito-bettei" },
        { time: "15:00", text: "大阪梅田 Nissan 還車（確認 26102504206）", placeId: "umeda-return" },
        { time: "15:00後", text: "Hotel Hankyu RESPIRE OSAKA CI（已訂 Agoda 1792170954｜大深町1-1｜12–23F Triple｜高樓層特別要求）", placeId: "hankyu-respire-osaka" }
      ],
      transport: "篠山→梅田約 1–1.5h（舞鶴若狭道→中國道／大阪）。目標 15:00 前還車；車流留 buffer——比舞鶴出發更有餘裕。還車後酒店就近（大深町）。"
    },
    {
      id: 7,
      date: "6/2（六）",
      title: "Hankyu RESPIRE CO → KIX → 香港",
      subtitle: "夜機回家",
      hero: "images/kix.jpg",
      summary: "無自駕日。朝：Hankyu RESPIRE CO（12:00前）→ 梅田 chill／手信 → 傍晚轉 KIX。Sunny UO689 20:15 起飛，23:55 抵港。卓Sir 回程窗口同日 2/6 KIX→HKG（航班號確認中）。",
      timeline: [
        { time: "朝", text: "Hotel Hankyu RESPIRE OSAKA CO 12:00前", placeId: "hankyu-respire-osaka" },
        { time: "日", text: "梅田 chill／買手信（無車）", placeId: "umeda-return" },
        { time: "傍晚", text: "出發去 KIX｜預留 bag drop buffer", placeId: "kix-depart" },
        { time: "20:15", text: "UO689 起飛 → 23:55 HKG", placeId: "kix-depart" }
      ],
      transport: "電車／空港巴士／計程車由梅田去 KIX；無車。"
    }
  ],

  routeOverview: [
    { id: "kix", label: "KIX" },
    { id: "osaka-night", label: "西成・旭" },
    { id: "kinosaki", label: "城崎" },
    { id: "bag-street", label: "豊岡" },
    { id: "amanohashidate", label: "天橋立" },
    { id: "ine", label: "伊根" },
    { id: "sasayama", label: "篠山" },
    { id: "umeda-return", label: "梅田還車" },
    { id: "hankyu-respire-osaka", label: "Hankyu RESPIRE" },
    { id: "kix-depart", label: "KIX" }
  ]
};

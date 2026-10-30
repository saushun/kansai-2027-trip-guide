# 關西 × 城崎 2027｜死黨三人遊 Travel Guide

Interactive static travel guide for Sunny’s Kansai / Kinosaki winter trip（2027-01-31 → 2027-02-06）.

Traditional Chinese + Cantonese-friendly copy · Leaflet map · lodging shortlist · day tabs · official + Drive links.

---

## 本地預覽 / Open locally

```bash
cd kansai-2027-trip-guide
python3 -m http.server 8080
# http://localhost:8080
```

或直接打開 `index.html`（建議用 http.server）。

```
kansai-2027-trip-guide/
  index.html
  .nojekyll
  css/styles.css
  js/data.js      # 行程資料、座標、文案
  js/app.js       # 地圖、分日、scroll reveal
  images/         # Wikimedia Commons
  README.md
```

無需 build step（純 HTML/CSS/JS + Leaflet CDN）。

---

## GitHub Pages（user: `saushun`）

- Repo: `saushun/kansai-2027-trip-guide`（或 `kinosaki-2027-trip-guide`）
- Source: branch `main` → folder `/`（root）
- Live: `https://saushun.github.io/kansai-2027-trip-guide/`

根目錄必須有 `index.html` 同 `.nojekyll`。

---

## 資料狀態（重要）

| 項目 | 狀態 |
|------|------|
| 機票 Sunny HK Express UO686/UO689 PNR **T2H9VR** | ✅ 已訂 |
| 機票 卓Sir HK Express **UO862**（HKG 15:45→KIX 20:20；回程 2/6 窗口） | ⚠️ **擬搭／確認中**（選擇頁約 HKD 3,071） |
| 租車 Nissan **26102504206**（KICKS 4WD+雪胎+ETC） | ✅ 已訂（舊單 26102504145 已取消） |
| 住宿 1/31 大阪 Airbnb **HME24S4TXJ**（西成・旭｜湯里花園町駅） | ✅ 已訂（舊 HMEFA5DBKE 守口已取消） |
| 住宿 1/2 城崎 **山本屋**（Rakuten 21315099225634） | ✅ 已訂（一泊二食・但馬牛會席） |
| 住宿 2/2 起（豊岡／城崎 Airbnb、宮津伊根、舞鶴） | ⚠️ **短名單／TBD，未訂** |
| 唯一溫泉旅館夜 | **1/2→2/2 晨** 城崎山本屋（已訂） |

Drive：

- 行程 Google Sheet（死黨三人遊2027｜KIX 自駕 1月31日–2月6日）：https://docs.google.com/spreadsheets/d/1hjShToJP8XwYnxck9Tzy7zn1VWIjDgzYwwArMbFWUL8/edit
- 行程總夾：https://drive.google.com/drive/folders/1XGVNEAhR3YwMkaBcTWBInnj0TSSYQxhn
- 機票：https://drive.google.com/drive/folders/1eT94OFD9wHAKkJTrb27f8l9-Z5zQ59Sx
- 住宿：https://drive.google.com/drive/folders/1fBUi5ffmAgIYt0OXHWBv3PEMacWGsN4B

座標：OpenStreetMap Nominatim（2026-10-28）＋個別 known/approx（見 `js/data.js`）。

⚠️ 竹田城跡 1/4–2/28 冬季不能登城——行程內已標示。

---

## Photo licenses

See `images/CREDITS.txt`. All from Wikimedia Commons.

Map: © OpenStreetMap · Leaflet.

---

## Last updated

2026-10-30 22:54（Asia/Hong_Kong）— Google Sheet link refreshed to id 1hjShToJP8XwYnxck9Tzy7zn1VWIjDgzYwwArMbFWUL8; lodging content untouched.

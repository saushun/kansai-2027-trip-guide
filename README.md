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
| 機票 HK Express UO686/UO689 PNR **T2H9VR** | ✅ 已訂 |
| 租車 Nissan **26102504206**（KICKS 4WD+雪胎+ETC） | ✅ 已訂（舊單 26102504145 已取消） |
| 住宿（大阪／城崎古まん／豊岡／宮津伊根／舞鶴） | ⚠️ **短名單／TBD，未訂** |
| 唯一溫泉旅館夜 | 1/2→2/2 城崎（建議古まん） |

Drive：

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

2026-10-29 09:57（Asia/Hong_Kong）— Night-1 Osaka Airbnb booked (HMEFA5DBKE, Moriguchi/Senbayashi); other lodging still shortlist.

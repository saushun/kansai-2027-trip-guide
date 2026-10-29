/* Kansai × Kinosaki 2027 interactive guide */
(function () {
  const T = window.TRIP;
  if (!T) return;

  /* —— Last updated stamp (HKT) —— */
  (function stampUpdated() {
    const raw = (T.meta && T.meta.updated) || "";
    const label = raw ? `${raw}（香港時間）` : "";
    const foot = document.getElementById("last-updated");
    const hero = document.getElementById("last-updated-hero");
    if (foot && label) foot.textContent = label;
    if (hero && raw) {
      hero.textContent = `${raw}（香港時間）`;
      // datetime attr: expect "YYYY-MM-DD HH:MM"
      const m = raw.match(/(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})/);
      if (m) hero.setAttribute("datetime", `${m[1]}T${m[2]}:00+08:00`);
    }
  })();


  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  function gmapsUrl(place) {
    const q = encodeURIComponent(place.mapsQuery || place.name);
    if (place.lat && place.lng) {
      return `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  function embedUrl(place) {
    return `https://maps.google.com/maps?q=${place.lat},${place.lng}&z=14&output=embed`;
  }

  function placeById(id) {
    return T.places.find((p) => p.id === id);
  }


  function linkIcon(kind) {
    if (kind === "official") return "🌐";
    if (kind === "drive") return "📁";
    return "🔗";
  }

  function renderLinksRow(links, opts = {}) {
    if (!links || !links.length) return "";
    const cls = opts.className || "place-links";
    const items = links
      .map(
        (L) =>
          `<a class="link-chip link-${L.kind || "ref"}" href="${L.url}" target="_blank" rel="noopener">${linkIcon(L.kind)} ${L.label}</a>`
      )
      .join("");
    return `<div class="${cls}">${items}</div>`;
  }

  function renderLinksList(links) {
    if (!links || !links.length) return "";
    const items = links
      .map(
        (L) =>
          `<li><a href="${L.url}" target="_blank" rel="noopener"><span class="link-kind">${linkIcon(L.kind)}</span> ${L.label}</a></li>`
      )
      .join("");
    return `<div class="modal-section"><h3>參考連結</h3><ul class="modal-links">${items}</ul></div>`;
  }


  /* —— Nav mobile —— */
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", (e) => {
      if (e.target.closest("a, button")) links.classList.remove("open");
    });
  }

  /* —— Hero parallax —— */
  const heroBg = $(".hero-bg");
  if (heroBg) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroBg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
        }
      },
      { passive: true }
    );
  }

  /* —— Route strip —— */
  const routeEl = $("#route-strip");
  if (routeEl) {
    T.routeOverview.forEach((node, i) => {
      const wrap = document.createElement("div");
      wrap.className = "route-node";
      wrap.innerHTML = `<span class="route-pill">${node.label}</span>`;
      routeEl.appendChild(wrap);
      if (i < T.routeOverview.length - 1) {
        const arr = document.createElement("span");
        arr.className = "route-arrow";
        arr.textContent = "→";
        routeEl.appendChild(arr);
      }
    });
  }

  /* —— Lodging —— */
  const lodgeEl = $("#lodging-grid");
  const lodgeFolder = T.meta && T.meta.lodgingDriveFolder;
  if (lodgeFolder) {
    const head = document.querySelector("#lodging .section-head p");
    if (head && !document.getElementById("lodge-drive-folder")) {
      const a = document.createElement("a");
      a.id = "lodge-drive-folder";
      a.className = "lodge-folder-link";
      a.href = lodgeFolder;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "📁 Drive 住宿資料夾";
      head.appendChild(document.createTextNode(" "));
      head.appendChild(a);
    }
  }
  if (lodgeEl) {
    T.lodging.forEach((l) => {
      let badge = "";
      if (l.status === "booked") badge = '<span class="badge badge-ok">已訂</span>';
      else if (l.status === "booked-revised")
        badge = '<span class="badge badge-ok">已改訂</span>';
      else if (l.status === "booked-planned-shorten")
        badge = '<span class="badge badge-warn">已訂・縮短待改</span>';
      else if (l.status === "shortlist")
        badge = '<span class="badge badge-warn">短名單／未訂</span>';
      else if (l.status === "pending")
        badge = '<span class="badge badge-tbd">待確認</span>';
      else badge = '<span class="badge badge-tbd">待定</span>';
      const card = document.createElement("article");
      card.className = "lodge-card reveal" + (l.placeId ? " lodge-card-map" : "");
      if (l.placeId) {
        card.dataset.placeId = l.placeId;
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `喺地圖睇 ${l.name} 位置`);
      }
      const warn = l.warn
        ? `<p class="lodge-warn">${l.warn}</p>`
        : "";
      const cancelTag = l.freeCancel
        ? `<span class="tag tag-cancel">${l.freeCancel}</span>`
        : "";
      const mapHint = l.placeId
        ? `<p class="lodge-map-hint">撳卡睇地圖位置 →</p>`
        : "";
      card.innerHTML = `
        <div class="lodge-night">${l.night}</div>
        <h3>${l.name}${badge}</h3>
        ${cancelTag ? `<div class="lodge-cancel-row">${cancelTag}</div>` : ""}
        <div class="lodge-area">${l.area}${l.address ? " · " + l.address : ""}</div>
        <div class="lodge-confirm">${l.confirm}</div>
        ${warn}
        <p class="lodge-note">${l.note}</p>
        ${mapHint}
        ${renderLinksRow(l.links, { className: "place-links lodge-links" })}`;
      lodgeEl.appendChild(card);
    });
  }

  /* —— Flights / car —— */
  const infoEl = $("#info-row");
  if (infoEl) {
    const f = T.meta.flights;
    const c = T.meta.car;
    const flightLinks = renderLinksRow((f && f.links) || [], { className: "place-links" });
    const metaLinks = renderLinksRow((T.meta && T.meta.links) || [], { className: "place-links" });
    const carPlace = placeById("nissan");
    const carLinks = renderLinksRow((carPlace && carPlace.links) || [], { className: "place-links" });
    const ck = f && f.cheuk;
    const cheukHtml = ck
      ? `<hr style="border:none;border-top:1px solid rgba(0,0,0,0.08);margin:0.75rem 0" />
        <p><span class="badge badge-warn">${ck.label || "卓Sir 擬搭／確認中"}</span></p>
        <p><strong>去程</strong> ${ck.out.date} ${ck.out.code}　${ck.out.from} → ${ck.out.to}${ck.out.duration ? "（" + ck.out.duration + "）" : ""}</p>
        <p><strong>回程</strong> ${ck.back.date} ${ck.back.route || "KIX→HKG"}${ck.back.note ? "｜" + ck.back.note : ""}</p>
        ${ck.priceNote ? `<p style="font-size:0.8rem;opacity:0.85">${ck.priceNote}</p>` : ""}`
      : "";
    infoEl.innerHTML = `
      <div class="info-card reveal">
        <h3>✈️ 機票 HK Express</h3>
        <p><strong>Sunny＋同伴</strong> PNR <code>${f.out.pnr}</code></p>
        <p><strong>去程</strong> ${f.out.date} ${f.out.code}　${f.out.from} → ${f.out.to}</p>
        <p><strong>回程</strong> ${f.back.date} ${f.back.code}　${f.back.from} → ${f.back.to}</p>
        ${cheukHtml}
        ${flightLinks}
      </div>
      <div class="info-card reveal">
        <h3>🚗 租車 Nissan</h3>
        <p><span class="badge ${c.status === "booked" ? "badge-ok" : "badge-tbd"}">${c.status === "booked" ? "已訂" : "待定"}</span> 確認 <code>${c.confirm}</code></p>
        <p>${c.vendor}</p>
        <p>${c.model}</p>
        <p>${c.pickup} → ${c.return}</p>
        <p style="font-size:0.8rem;opacity:0.85">${c.note}</p>
        ${carLinks}
      </div>
      ${metaLinks ? `<div class="info-card reveal"><h3>📎 行程資料</h3>${metaLinks}</div>` : ""}`;
  }

  /* —— Leaflet map —— */
  let map, markers = {};
  function initMap() {
    const mapDiv = $("#trip-map");
    if (!mapDiv || typeof L === "undefined") return;

    map = L.map("trip-map", {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView([35.35, 135.15], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    mapDiv.addEventListener("click", () => map.scrollWheelZoom.enable());
    map.on("mouseout", () => map.scrollWheelZoom.disable());

    const bounds = [];
    T.places.forEach((p) => {
      if (!p.lat || !p.lng) return;
      const isTbd = (p.tags || []).includes("TBD");
      const icon = L.divIcon({
        className: "",
        html: `<div class="fuji-marker${isTbd ? " day-tbd" : ""}"><span>D${p.day}</span></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
      });
      const m = L.marker([p.lat, p.lng], { icon }).addTo(map);
      m.bindPopup(`
        <div class="popup-title">${p.name}</div>
        <div class="popup-day">Day ${p.day}</div>
        <div style="font-size:0.82rem;margin-bottom:0.4rem">${(p.intro || "").slice(0, 80)}…</div>
        <button type="button" class="popup-link popup-detail" data-place="${p.id}" style="background:none;border:none;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit">打開完整導覽 →</button><br>
        <a class="popup-link" href="${gmapsUrl(p)}" target="_blank" rel="noopener">在 Google 地圖開啟</a>
      `);
      m.on("click", () => {
        highlightPlace(p.id);
      });
      m.on("popupopen", () => {
        const btn = document.querySelector(`.popup-detail[data-place="${p.id}"]`);
        if (btn) btn.onclick = (ev) => { ev.preventDefault(); openPlaceModal(p.id); };
      });
      markers[p.id] = m;
      bounds.push([p.lat, p.lng]);
    });
    if (bounds.length) map.fitBounds(bounds, { padding: [36, 36], maxZoom: 10 });

    // legend day filters
    const legend = $("#map-legend");
    if (legend) {
      const allBtn = document.createElement("button");
      allBtn.className = "legend-chip active";
      allBtn.textContent = "全部";
      allBtn.onclick = () => filterMap(null, allBtn);
      legend.appendChild(allBtn);
      const dayCount = (T.days && T.days.length) || (T.meta && T.meta.days) || 7;
      for (let d = 1; d <= dayCount; d++) {
        const b = document.createElement("button");
        b.className = "legend-chip";
        b.textContent = `Day ${d}`;
        b.onclick = () => filterMap(d, b);
        legend.appendChild(b);
      }
    }
  }

  function filterMap(day, btn) {
    $$(".legend-chip").forEach((c) => c.classList.remove("active"));
    if (btn) btn.classList.add("active");
    const visible = [];
    T.places.forEach((p) => {
      const m = markers[p.id];
      if (!m) return;
      if (day === null || p.day === day) {
        m.addTo(map);
        visible.push([p.lat, p.lng]);
      } else {
        map.removeLayer(m);
      }
    });
    if (visible.length) map.fitBounds(visible, { padding: [36, 36], maxZoom: 11 });
  }

  function flyToPlace(id) {
    const p = placeById(id);
    const m = markers[id];
    if (!p || !map) return;
    map.flyTo([p.lat, p.lng], 13, { duration: 1.1 });
    if (m) setTimeout(() => m.openPopup(), 900);
  }

  /* —— Day panels —— */
  const tabsEl = $("#day-tabs");
  const panelsEl = $("#day-panels");
  const allCardsEl = $("#all-cards");

  function buildDays() {
    if (!tabsEl || !panelsEl) return;
    T.days.forEach((day, idx) => {
      const tab = document.createElement("button");
      tab.className = "day-tab" + (idx === 0 ? " active" : "");
      tab.type = "button";
      tab.dataset.day = day.id;
      tab.innerHTML = `<strong>Day ${day.id}</strong><small>${day.date}</small>`;
      tab.addEventListener("click", () => showDay(day.id));
      tabsEl.appendChild(tab);

      const panel = document.createElement("div");
      panel.className = "day-panel" + (idx === 0 ? " active" : "");
      panel.id = `day-panel-${day.id}`;
      panel.dataset.day = day.id;

      const placeIds = [...new Set(day.timeline.map((t) => t.placeId).filter(Boolean))];
      const cardsHtml = placeIds
        .map((id) => placeById(id))
        .filter(Boolean)
        .map((p) => renderCard(p, { withId: false }))
        .join("");

      panel.innerHTML = `
        <div class="day-hero">
          <img src="${day.hero}" alt="${day.title}" loading="lazy">
          <div class="day-hero-cap">
            <h3>Day ${day.id}｜${day.title}</h3>
            <p>${day.subtitle} · ${day.date}</p>
          </div>
        </div>
        <p style="margin:0 0 1rem;color:var(--fuji-blue)">${day.summary}</p>
        <div class="transport-note">🚗 ${day.transport}</div>
        <ul class="timeline">
          ${day.timeline
            .map(
              (t) => `
            <li class="tl-item">
              <div class="tl-time">${t.time}</div>
              <div class="tl-dot"></div>
              <div class="tl-body">
                <p>${t.text}</p>
                ${
                  t.placeId
                    ? `<button type="button" class="place-jump" data-place="${t.placeId}">完整導覽</button>`
                    : ""
                }
              </div>
            </li>`
            )
            .join("")}
        </ul>
        <div class="cards-grid day-cards">${cardsHtml}</div>`;
      panelsEl.appendChild(panel);
    });

    panelsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".place-jump");
      if (!btn) return;
      const id = btn.dataset.place;
      highlightPlace(id);
      openPlaceModal(id);
    });
  }

  function showDay(id) {
    $$(".day-tab").forEach((t) => t.classList.toggle("active", +t.dataset.day === +id));
    $$(".day-panel").forEach((p) => p.classList.toggle("active", +p.dataset.day === +id));
    $$(".nav-day").forEach((t) => t.classList.toggle("active", t.textContent === `D${id}`));
    // re-observe reveals in newly shown panel
    observeReveals();
  }

  function renderCard(p, opts = {}) {
    const tags = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const idAttr = opts.withId === false ? "" : `id="place-${p.id}"`;
    return `
      <article class="place-card reveal" ${idAttr} data-place-id="${p.id}" tabindex="0" role="button" aria-label="打開 ${p.name} 導覽詳情">
        <div class="place-card-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="place-card-body">
          <div class="place-tags">${tags}<span class="tag">Day ${p.day}</span></div>
          <h3>${p.name}</h3>
          <div class="place-ja">${p.nameJa || ""}</div>
          <p class="place-card-hint">撳卡睇完整導覽 →</p>
          <p class="place-intro">${p.intro}</p>
          <div class="place-tips">💡 ${p.tips}</div>
          ${renderLinksRow(p.links)}
          <div class="place-actions">
            <button type="button" class="btn btn-primary open-detail" data-place="${p.id}">完整導覽</button>
            <a class="btn" href="${gmapsUrl(p)}" target="_blank" rel="noopener">Google 地圖</a>
            <button type="button" class="btn map-focus" data-place="${p.id}">地圖標記</button>
          </div>
        </div>
      </article>`;
  }

  function buildAllCards() {
    if (!allCardsEl) return;
    // Unique places in itinerary order
    const seen = new Set();
    const ordered = [];
    T.days.forEach((d) => {
      d.timeline.forEach((t) => {
        if (t.placeId && !seen.has(t.placeId)) {
          seen.add(t.placeId);
          const p = placeById(t.placeId);
          if (p) ordered.push(p);
        }
      });
    });
    T.places.forEach((p) => {
      if (!seen.has(p.id)) ordered.push(p);
    });
    allCardsEl.innerHTML = ordered.map(renderCard).join("");
    // map-focus handled via document delegation below
  }


  /* —— Place detail modal —— */
  const modalEl = $("#place-modal");
  const modalContent = $("#place-modal-content");
  let lastFocus = null;

  function openPlaceModal(id) {
    const p = placeById(id);
    if (!p || !modalEl || !modalContent) return;
    lastFocus = document.activeElement;
    const tags = (p.tags || [])
      .map((t) => `<span class="tag">${t}</span>`)
      .join("") + `<span class="tag">Day ${p.day}</span>`;
    const highlights = (p.highlights || [])
      .map((h) => `<li>${h}</li>`)
      .join("");
    modalContent.innerHTML = `
      <div class="modal-hero">
        <img src="${p.image}" alt="${p.name}">
        <div class="modal-hero-cap">
          <div class="eyebrow">Place guide · Day ${p.day}</div>
          <h2>${p.name}</h2>
          <div class="ja">${p.nameJa || ""}</div>
        </div>
      </div>
      <div class="modal-scroll">
        <div class="modal-tags">${tags}</div>
        <div class="modal-section">
          <h3>概覽</h3>
          <p>${p.detail || p.intro || ""}</p>
        </div>
        ${p.history ? `<div class="modal-section"><h3>歷史</h3><p>${p.history}</p></div>` : ""}
        ${p.origin ? `<div class="modal-section"><h3>由來</h3><p>${p.origin}</p></div>` : ""}
        ${p.stories ? `<div class="modal-section"><h3>故事</h3><p>${p.stories}</p></div>` : ""}
        ${highlights ? `<div class="modal-section"><h3>特色看點</h3><ul class="modal-highlights">${highlights}</ul></div>` : ""}
        <div class="modal-section">
          <h3>實用提示</h3>
          <div class="modal-tips-box">💡 ${p.tips || ""}</div>
        </div>
        ${renderLinksList(p.links)}
      </div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="${gmapsUrl(p)}" target="_blank" rel="noopener">在 Google 地圖開啟</a>
        <button type="button" class="btn map-focus" data-place="${p.id}">睇地圖標記</button>
        <button type="button" class="btn modal-dismiss">關閉</button>
      </div>`;
    modalEl.hidden = false;
    modalEl.classList.add("open");
    modalEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    highlightPlace(id);
    modalEl.querySelector(".modal-close")?.focus();
  }

  function closePlaceModal() {
    if (!modalEl) return;
    modalEl.classList.remove("open");
    modalEl.setAttribute("aria-hidden", "true");
    modalEl.hidden = true;
    document.body.classList.remove("modal-open");
    if (modalContent) modalContent.innerHTML = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function highlightPlace(id) {
    $$(".place-card, .lodge-card").forEach((c) => {
      c.style.outline = c.dataset.placeId === id ? "2px solid var(--warm)" : "";
    });
  }

  /* —— Scroll reveal —— */
  let observer;
  function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$(".reveal, .tl-item, .place-card").forEach((el) => {
      if (!el.classList.contains("visible")) observer.observe(el);
    });
  }

  /* —— Boot —— */
  buildDays();
  buildAllCards();
  initMap();
  observeReveals();

  document.addEventListener("click", (e) => {
    const dismiss = e.target.closest(".modal-dismiss, .modal-close");
    if (dismiss) {
      closePlaceModal();
      return;
    }
    if (e.target === modalEl) {
      closePlaceModal();
      return;
    }
    const detailBtn = e.target.closest(".open-detail, .popup-detail");
    if (detailBtn) {
      e.preventDefault();
      openPlaceModal(detailBtn.dataset.place);
      return;
    }
    const mapBtn = e.target.closest(".map-focus");
    if (mapBtn) {
      e.stopPropagation();
      closePlaceModal();
      flyToPlace(mapBtn.dataset.place);
      $("#map-section")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const card = e.target.closest(".place-card");
    if (card && !e.target.closest("a, button")) {
      openPlaceModal(card.dataset.placeId);
      return;
    }
    const lodge = e.target.closest(".lodge-card[data-place-id]");
    if (lodge && !e.target.closest("a, button, .place-links, .lodge-links")) {
      const id = lodge.dataset.placeId;
      if (!id) return;
      // same path as .place-card → openPlaceModal (highlight + marker context)
      openPlaceModal(id);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl?.classList.contains("open")) {
      closePlaceModal();
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.classList?.contains("place-card")) {
      e.preventDefault();
      openPlaceModal(e.target.dataset.placeId);
      return;
    }
    if (
      (e.key === "Enter" || e.key === " ") &&
      e.target.classList?.contains("lodge-card") &&
      e.target.dataset.placeId
    ) {
      e.preventDefault();
      openPlaceModal(e.target.dataset.placeId);
    }
  });

  // Deep link #place-xxx or #day-N
  function handleHash() {
    const h = location.hash.slice(1);
    if (h.startsWith("place-")) {
      const id = h.replace("place-", "");
      const p = placeById(id);
      if (p) {
        showDay(p.day);
        setTimeout(() => {
          document.getElementById(`place-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
          highlightPlace(id);
          openPlaceModal(id);
        }, 200);
      }
    } else if (h.startsWith("day-")) {
      showDay(+h.replace("day-", ""));
      $("#days-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }
  window.addEventListener("hashchange", handleHash);
  handleHash();

  // Expose for console / debugging
  window.KansaiGuide = { flyToPlace, showDay, gmapsUrl, embedUrl, openPlaceModal, closePlaceModal };
})();

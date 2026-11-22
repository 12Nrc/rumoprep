/* =========================================================
   Rumo Prep — site script (shared by every page)

   1. YOUR DETAILS: fill these in once and they show up
      everywhere on the site (contact page, footer, articles).
   ========================================================= */
const SITE = {
  email: "nrcorrea07@gmail.com",   // your business email
  phone: "202-793-0087",          // shown as written; the call link uses just the digits
  formspreeId: "xvkawgwk",  // from formspree.io: the code after /f/ in your form link, e.g. "xkgwabcd"
};

/* ---------------------------------------------------------
   Everything below runs the site. You shouldn't need to
   change it.
   --------------------------------------------------------- */
(function () {
  // Icon set used across the site
  const ICONS = `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.5"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></symbol>
    <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/></symbol>
    <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"/></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></symbol>
    <symbol id="i-flag" viewBox="0 0 24 24"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></symbol>
    <symbol id="i-cap" viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M17.5 14.6c2.2.4 3.6 2.1 4 4.9"/></symbol>
    <symbol id="i-bulb" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></symbol>
    <symbol id="i-tool" viewBox="0 0 24 24"><path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6l8.5 7 8.5-7"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
    <symbol id="i-back" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></symbol>
  </defs></svg>`;
  document.body.insertAdjacentHTML("afterbegin", ICONS);

  // Phone menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav.main");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.textContent = open ? "Close" : "Menu";
    });
  }

  // Fill in email and phone wherever they appear
  const digits = (s) => { const d = s.replace(/[^\d+]/g, ""); return d.length === 10 ? "+1" + d : d; };
  document.querySelectorAll('[data-site="email"]').forEach((el) => {
    el.textContent = SITE.email || "[email]";
    if (el.tagName === "A") SITE.email ? (el.href = "mailto:" + SITE.email) : el.removeAttribute("href");
  });
  document.querySelectorAll('[data-site="phone"]').forEach((el) => {
    el.textContent = SITE.phone || "[phone]";
    if (el.tagName === "A") SITE.phone ? (el.href = "tel:" + digits(SITE.phone)) : el.removeAttribute("href");
  });

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Roadmap on the home page: draws the road through the numbered pins,
  // then plays the trail and reveals each stop when the section scrolls into view
  const wrap = document.querySelector(".roadmap-wrap");
  if (wrap) {
    const svg = wrap.querySelector(".road");
    const paths = [...svg.querySelectorAll(".road-base,.road-dash,.road-trail")];
    const trail = svg.querySelector(".road-trail");
    const end = svg.querySelector(".road-end");
    const startLabel = svg.querySelector(".road-start-label");
    const endLabel = svg.querySelector(".road-end-label");
    const pins = [...wrap.querySelectorAll(".rm-pin")];
    const stops = [...wrap.querySelectorAll(".rm-stop")];
    const still = !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DURATION = 2800;
    let played = false;

    const draw = () => {
      const box = wrap.getBoundingClientRect();
      const p = pins.map((pin) => {
        const r = pin.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
      const wide = Math.abs(p[0].y - p[1].y) < 4; // pins side by side = two-lane layout
      let d, endX, endY;
      if (wide) {
        const bend = (p[3].y - p[2].y) * 0.75;
        d = `M0 ${p[0].y} L${p[0].x} ${p[0].y} L${p[1].x} ${p[1].y} L${p[2].x} ${p[2].y}` +
            ` C${p[2].x + bend} ${p[2].y} ${p[3].x + bend} ${p[3].y} ${p[3].x} ${p[3].y}` +
            ` L${p[4].x} ${p[4].y} L${p[5].x} ${p[5].y} L14 ${p[5].y}`;
        endX = 14; endY = p[5].y;
        startLabel.setAttribute("x", 0); startLabel.setAttribute("y", p[0].y + 34);
        endLabel.setAttribute("x", 0); endLabel.setAttribute("y", p[5].y + 34);
        startLabel.style.display = "";
        endLabel.style.display = "";
      } else {
        d = `M${p[0].x} ${p[0].y - 36}` + p.map((q) => ` L${q.x} ${q.y}`).join("") + ` L${p[5].x} ${p[5].y + 64}`;
        endX = p[5].x; endY = p[5].y + 64;
        startLabel.style.display = "none";
        endLabel.style.display = "none";
      }
      paths.forEach((el) => el.setAttribute("d", d));
      end.setAttribute("transform", `translate(${endX} ${endY})`);

      // how far along the road each pin sits, so each stop appears as the trail reaches it
      const total = trail.getTotalLength();
      const at = p.map(() => ({ best: Infinity, len: 0 }));
      for (let l = 0; l <= total; l += 4) {
        const q = trail.getPointAtLength(l);
        p.forEach((pt, i) => {
          const dist = (q.x - pt.x) ** 2 + (q.y - pt.y) ** 2;
          if (dist < at[i].best) at[i] = { best: dist, len: l };
        });
      }
      stops.forEach((s, i) => s.style.setProperty("--d", Math.max(0, (at[i].len / total) * DURATION - 200) + "ms"));
      trail.style.strokeDasharray = total;
      if (!played) trail.style.strokeDashoffset = total;
    };

    const play = () => {
      if (played) return;
      played = true;
      trail.style.transition = `stroke-dashoffset ${DURATION}ms cubic-bezier(.45,0,.25,1)`;
      trail.style.strokeDashoffset = 0;
      wrap.classList.add("go");
    };

    const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(() => {
      draw();
      if ("ResizeObserver" in window) new ResizeObserver(() => draw()).observe(wrap);
      if (still) { played = true; trail.style.strokeDashoffset = 0; return; }
      wrap.classList.add("anim");
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { play(); io.disconnect(); }
      }, { threshold: 0.2 });
      io.observe(wrap);
    });
  }

  // "What your family gets": check marks draw in once when the section scrolls into view
  const gets = document.querySelector(".gets");
  if (gets && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gets.classList.add("anim");
    const io2 = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { gets.classList.add("go"); io2.disconnect(); }
    }, { threshold: 0.35 });
    io2.observe(gets);
  }

  // Article pages: highlight the section you're reading in "On this page"
  const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
  if (tocLinks.length && "IntersectionObserver" in window) {
    const setOn = (id) => tocLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + id));
    const heads = tocLinks.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setOn(e.target.id); });
    }, { rootMargin: "-90px 0px -65% 0px" });
    heads.forEach((h) => spy.observe(h));
  }

  // Article pages: "Copy link" button
  document.querySelectorAll("[data-copy-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const done = () => { btn.textContent = "Link copied"; setTimeout(() => (btn.textContent = "Copy link"), 1600); };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href.split("#")[0]).then(done, () => {});
      } catch (e) {}
    });
  });

  // Copy buttons on the contact page
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = (SITE[btn.dataset.copy] || "").trim();
      if (!text) return;
      const done = () => { btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy"), 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => {});
    });
  });

  // Contact form
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const button = form.querySelector('button[type="submit"]');

  // Pre-select the kind of help from links like contact.html?plan=full
  const planKey = new URLSearchParams(location.search).get("plan");
  const planMap = { full: "Full application support", essentials: "Essay review", junior: "Junior year planning" };
  if (planKey && planMap[planKey]) form.elements.plan.value = planMap[planKey];

  const say = (msg, ok) => { status.hidden = false; status.textContent = msg; status.classList.toggle("ok", !!ok); };
  const fallback = () => SITE.email ? " You can also email me at " + SITE.email + "." : "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const parent = form.elements.parent.value.trim();
    const email = form.elements.email.value.trim();
    if (!parent || !/^\S+@\S+\.\S+$/.test(email)) {
      say("Please add your name and a valid email address so I can reply.");
      return;
    }
    if (!SITE.formspreeId) {
      say("The form isn't connected yet. Please email or text me using the details on this page.");
      return;
    }
    button.disabled = true;
    button.textContent = "Sending…";
    try {
      const res = await fetch("https://formspree.io/f/" + SITE.formspreeId, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      say("Thanks, " + parent.split(" ")[0] + "! I'll reply within two days to set up a time to talk.", true);
    } catch (err) {
      say("Something went wrong sending your message." + fallback());
    } finally {
      button.disabled = false;
      button.textContent = "Send request";
    }
  });
})();

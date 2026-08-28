/* Gelian — interactions: nav state, mobile menu, scroll reveal, counters */
(function () {
  "use strict";
  var body = document.body;
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky-nav scrolled state */
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 6); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  if (toggle) {
    var closeMenu = function () {
      body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    };
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      body.style.overflow = open ? "hidden" : "";
    });
    Array.prototype.forEach.call(document.querySelectorAll(".menu a"), function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.classList.contains("menu-open")) closeMenu();
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* Count-up numbers */
  if (!reduce && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; cio.unobserve(el);
        var target = parseFloat(el.getAttribute("data-count"));
        var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var start = null, dur = 1500;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(dec) + suffix;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(document.querySelectorAll("[data-count]"), function (el) { cio.observe(el); });
  }

  /* Footer year */
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contact form — front-end confirmation (no backend wired yet) */
  var cform = document.querySelector("form.form");
  if (cform) {
    cform.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = cform.querySelector("#f-email");
      if (email && !email.value.trim()) { email.focus(); return; }
      cform.innerHTML =
        '<p class="h3" style="max-width:24ch">Thank you — we\'ll be in touch shortly.</p>' +
        '<p class="body" style="margin-top:14px;max-width:42ch">A member of the Gelian team typically replies within one business day.</p>';
    });
  }
})();

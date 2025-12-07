document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const backToTopBtn = document.getElementById("back-to-top");
  const yearEl = document.getElementById("year");
  const langButtons = document.querySelectorAll(".lang-btn");
  const copyToast = document.getElementById("copy-toast");
  const emailCopyBtn = document.querySelector(".contact-copy-btn");

  // Año dinámico
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ========================
  // Traducciones ES / EN
  // ========================
  const translations = {
    es: {
      "_meta.title": "Carlos | Desarrollador de Software Fullstack",
      "_meta.description":
        "Portafolio de Carlos, desarrollador de software fullstack en San Luis Potosí. Experiencia en plataformas web y móviles: Thinkers, S6, Vantix, HayNik y Doctorpfile.",

      "nav.home": "Inicio",
      "nav.about": "Quién soy",
      "nav.skills": "Skills",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",

      "hero.kicker": "Desarrollador de software fullstack",
      "hero.title": "Diseño y construyo<br>plataformas completas,<br>de la base de datos a la interfaz.",
      "hero.subtitle":
        "Trabajo en plataformas donde hay datos reales, usuarios no técnicos y decisiones que importan: educación, gobierno, soporte técnico, salud e IA aplicada. Me gusta tomar requisitos difusos y convertirlos en sistemas claros, mantenibles y listos para producción.",
      "hero.cv": "Ver CV",
      "hero.meta1": "Trabajo remoto · SLP / Latam",
      "hero.meta2": "Gobierno · Educación · IA · Salud",
      "hero.role": "Fullstack Developer",
      "hero.note": "Backend sólido · UX clara · datos con sentido.",
      "hero.caption": "De requisitos difusos a sistemas claros que se pueden desplegar y escalar.",

      "about.title": "Quién soy",
      "about.subtitle": "Cómo pienso el desarrollo de software.",
      "about.p1":
        "Soy un desarrollador de software <strong>fullstack</strong> que disfruta meterse hasta el fondo del problema: base de datos, backend, frontend y, si hace falta, scripts de análisis en Python. Trabajo con <strong>Laravel</strong>, <strong>Livewire</strong>, <strong>Angular</strong>, <strong>JavaScript / TypeScript</strong> y <strong>Python</strong> en productos que viven en producción, no solo en demos.",
      "about.p2":
        "He trabajado en proyectos de <strong>educación</strong>, <strong>gobierno</strong>, <strong>salud</strong> y <strong>soporte técnico</strong>. Eso implica lidiar con datos reales, usuarios que no son técnicos y decisiones donde un bug no es solo “un bug”, sino un problema para alguien de carne y hueso.",
      "about.p3":
        "Me gustan los retos donde hay caos: JSONs enormes, estructuras raras, requerimientos cambiantes. Mi trabajo es ordenar todo eso y convertirlo en sistemas y pantallas que expliquen lo que pasa sin necesidad de una clase de apoyo. Si algo no escala o no es seguro, lo digo y propongo cómo arreglarlo.",
      "about.label": "Lo que aporto",
      "about.item1":
        "Experiencia real en plataformas completas: diseño de base de datos, backend, frontend, despliegue y mantenimiento de sistemas que ya están en producción.",
      "about.item2":
        "Trabajo cómodo con requisitos que cambian sobre la marcha; escucho, aterrizo la idea y la convierto en algo programable sin perder de vista el negocio.",
      "about.item3":
        "Criterio para priorizar: qué resolver hoy porque duele, qué dejar para después y qué ni vale la pena construir.",
      "about.item4":
        "Perseverancia: si algo no funciona, no lo dejo “más o menos”. Busco la causa, refactorizo, pruebo alternativas y no suelto el problema hasta que el sistema se comporte como debe.",
      "about.item5":
        "Comunicación directa y honesta; si algo está mal diseñado, lo digo, propongo opciones y me comprometo con la solución, no con la excusa.",

      "skills.title": "Skills",
      "skills.subtitle": "Tecnologías con las que realmente he entregado proyectos.",

      "projects.title": "Proyectos",
      "projects.subtitle": "Una muestra de en qué he trabajado y qué tipo de problemas resuelvo.",

      "lab.title": "Laboratorio Técnico · Proyectos Experimentales",
      "lab.subtitle":
        "Ideas, experimentos y pruebas de concepto donde exploro nuevas tecnologías. No son productos finales: son piezas que construyo para aprender, validar o abrir caminos para futuros proyectos reales.",

      "contact.title": "Contacto",
      "contact.subtitle": "Si ves encaje entre lo que hago y lo que necesitas, platiquemos.",
      "contact.text1":
        "Me interesa colaborar en proyectos donde pueda aportar criterio técnico, responsabilidad y enfoque a largo plazo. No solo escribir código, sino ayudar a que el producto tenga sentido para quienes lo usan.",
      "contact.text2":
        "Prefiero equipos donde haya feedback claro, confianza y ganas de mejorar el código con cada iteración.",
      "contact.cardTitle": "Mensaje sugerido",
      "contact.cardBody":
        "“Hola Carlos, vi tu portafolio y me interesa explorar cómo podrías sumarte a nuestro equipo / proyecto. ¿Podemos agendar una llamada para revisar tu experiencia y la posición?”",
      "contact.cardNote":
        "A partir de ahí podemos entrar al detalle técnico, retos y expectativas de ambos lados.",

      "copy.toast": "Correo copiado al portapapeles"
    },

    en: {
      "_meta.title": "Carlos | Fullstack Software Developer",
      "_meta.description":
        "Portfolio of Carlos, fullstack software developer based in San Luis Potosí. Experience in web and mobile platforms: Thinkers, S6, Vantix, HayNik and Doctorpfile.",

      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.kicker": "Fullstack software developer",
      "hero.title": "I design and build<br>complete platforms,<br>from database to interface.",
      "hero.subtitle":
        "I work on platforms with real data, non-technical users and decisions that matter: education, government, support, healthcare and applied AI. I like taking fuzzy requirements and turning them into clear, maintainable systems ready for production.",
      "hero.cv": "View résumé",
      "hero.meta1": "Remote work · SLP / Latam",
      "hero.meta2": "Government · Education · AI · Healthcare",
      "hero.role": "Fullstack Developer",
      "hero.note": "Solid backend · Clear UX · Data that tells a story.",
      "hero.caption": "From fuzzy requirements to clear systems that can be deployed and scaled.",

      "about.title": "About me",
      "about.subtitle": "How I think about building software.",
      "about.p1":
        "I'm a <strong>fullstack</strong> developer who likes to go deep into the problem: database, backend, frontend and, when needed, analysis scripts in Python. I work with <strong>Laravel</strong>, <strong>Livewire</strong>, <strong>Angular</strong>, <strong>JavaScript / TypeScript</strong> and <strong>Python</strong> on products that run in production, not just demos.",
      "about.p2":
        "I've worked in <strong>education</strong>, <strong>government</strong>, <strong>healthcare</strong> and <strong>technical support</strong>. That means dealing with real data, non-technical users and decisions where a bug is not just “a bug”, but a problem for a real person.",
      "about.p3":
        "I enjoy projects where there's chaos: huge JSONs, weird structures, changing requirements. My job is to put order into that and turn it into systems and interfaces that explain what's going on without needing extra training. If something doesn't scale or isn't safe, I say it and propose a plan to fix it.",
      "about.label": "What I bring",
      "about.item1":
        "Real experience with complete platforms: data modeling, backend, frontend, deployment and long-term maintenance for systems in production.",
      "about.item2":
        "Comfortable working with changing requirements; I listen, clarify and translate ideas into something we can actually build, without losing business context.",
      "about.item3":
        "Good sense of priority: what hurts and must be solved now, what can wait, and what is not worth building.",
      "about.item4":
        "Persistence: if something doesn't work, I don't leave it “almost fine”. I look for the root cause, refactor, try alternatives and push until the system behaves as expected.",
      "about.item5":
        "Direct and honest communication; if something is poorly designed, I say it, propose options and commit to the solution, not the excuse.",

      "skills.title": "Skills",
      "skills.subtitle": "Technologies I've actually shipped projects with.",

      "projects.title": "Projects",
      "projects.subtitle": "A sample of the kind of problems I've helped solve.",

      "lab.title": "Technical Lab · Experimental Projects",
      "lab.subtitle":
        "Ideas, experiments and proof-of-concepts where I explore new technologies. They're not final products: they're pieces I build to learn, validate and open paths for future real-world projects.",

      "contact.title": "Contact",
      "contact.subtitle": "If what I do resonates with what you need, let's talk.",
      "contact.text1":
        "I'm interested in collaborating on projects where I can bring technical judgement, responsibility and a long-term mindset. Not just writing code, but helping the product make sense for the people using it.",
      "contact.text2":
        "I prefer teams with clear feedback, trust and a shared interest in improving the codebase with every iteration.",
      "contact.cardTitle": "Suggested message",
      "contact.cardBody":
        "“Hi Carlos, I saw your portfolio and I'm interested in exploring how you could join our team / project. Could we schedule a call to review your experience and the position?”",
      "contact.cardNote":
        "From there we can dive into technical details, expectations and challenges on both sides.",

      "copy.toast": "Email copied to clipboard"
    }
  };

  let currentLang = localStorage.getItem("lang") || "es";

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (!value) return;

      if (value.includes("<")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Actualizar <html lang="">
    document.documentElement.setAttribute("lang", lang);

    // Title y meta description
    if (dict["_meta.title"]) {
      document.title = dict["_meta.title"];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["_meta.description"]) {
      metaDesc.setAttribute("content", dict["_meta.description"]);
    }

    // Toast de copia (si existe)
    if (copyToast && dict["copy.toast"]) {
      copyToast.textContent = dict["copy.toast"];
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations(lang);

    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("lang-btn--active");
      } else {
        btn.classList.remove("lang-btn--active");
      }
    });
  }

  // Eventos del switch de idioma
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // ========================
  // Scroll suave y nav activo
  // ========================
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header pegajoso con sombra
    if (header) {
      if (scrollY > 10) {
        header.classList.add("site-header--scrolled");
      } else {
        header.classList.remove("site-header--scrolled");
      }
    }

    // Botón volver arriba
    if (backToTopBtn) {
      if (scrollY > 260) {
        backToTopBtn.classList.add("back-to-top--visible");
      } else {
        backToTopBtn.classList.remove("back-to-top--visible");
      }
    }

    // Nav activo según sección
    let currentSectionId = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const threshold = window.innerHeight * 0.3;
      if (rect.top <= threshold && rect.bottom >= threshold) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        if (href === `#${currentSectionId}`) {
          link.classList.add("nav-link--active");
        } else {
          link.classList.remove("nav-link--active");
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ========================
  // IntersectionObserver para .reveal
  // ========================
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute("data-delay");
            if (delay) {
              el.style.transitionDelay = `${delay}s`;
            }
            el.classList.add("reveal--visible");
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18
      }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("reveal--visible"));
  }

  // ========================
  // Copiar correo al portapapeles
  // ========================
  function showCopyToast() {
    if (!copyToast) return;
    copyToast.classList.add("copy-toast--visible");
    setTimeout(() => {
      copyToast.classList.remove("copy-toast--visible");
    }, 2200);
  }

  if (emailCopyBtn) {
    emailCopyBtn.addEventListener("click", async () => {
      const email = emailCopyBtn.dataset.email || "";
      if (!email) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
          showCopyToast();
        } else {
          alert(email);
        }
      } catch (err) {
        alert(email);
      }
    });
  }

  // ========================
  // Playground de órbitas (canvas)
  // ========================
  function initMiniGame() {
    const canvas = document.getElementById("mini-game-canvas");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let center = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0, active: false };
    let orbits = [];

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      width = canvas.width;
      height = canvas.height;
      center.x = width / 2;
      center.y = height / 2;
      createOrbits();
    }

    function createOrbits() {
      orbits = [];
      const numOrbits = 6;
      const maxRadius = Math.min(width, height) * 0.42;
      for (let i = 0; i < numOrbits; i++) {
        const t = (i + 1) / (numOrbits + 1);
        const radius = maxRadius * t;
        const speed = (0.4 + t * 0.8) * (Math.random() > 0.5 ? 1 : -1);
        const size = 4 + t * 6;
        orbits.push({
          radius,
          angle: Math.random() * Math.PI * 2,
          speed,
          size,
          x: center.x,
          y: center.y
        });
      }
    }

    function drawBackground() {
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "rgba(15,23,42,0.96)");
      g.addColorStop(1, "rgba(37,99,235,0.96)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    }

    function updateCenter(dt) {
      const targetX = pointer.active ? pointer.x : width / 2;
      const targetY = pointer.active ? pointer.y : height / 2;
      const lerpFactor = 0.004 * dt;
      const f = Math.min(lerpFactor, 0.25);
      center.x += (targetX - center.x) * f;
      center.y += (targetY - center.y) * f;
    }

    function updateOrbits(dt) {
      const dtSec = dt / 1000;
      orbits.forEach((o, index) => {
        let speedBoost = 1;
        if (pointer.active) {
          const dx = center.x - pointer.x;
          const dy = center.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - dist / (Math.min(width, height) * 0.9));
          speedBoost += influence * 0.6 * ((index % 2 === 0) ? 1 : -1);
        }
        o.angle += o.speed * speedBoost * dtSec;
        o.x = center.x + Math.cos(o.angle) * o.radius;
        o.y = center.y + Math.sin(o.angle) * o.radius;
      });
    }

    function drawOrbits() {
      ctx.save();
      ctx.strokeStyle = "rgba(148,163,184,0.35)";
      ctx.lineWidth = 1;
      orbits.forEach((o) => {
        ctx.beginPath();
        ctx.arc(center.x, center.y, o.radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.restore();
    }

    function drawBodies() {
      const starRadius = Math.min(width, height) * 0.04;
      const g = ctx.createRadialGradient(
        center.x - starRadius * 0.3,
        center.y - starRadius * 0.4,
        starRadius * 0.2,
        center.x,
        center.y,
        starRadius
      );
      g.addColorStop(0, "#f9fafb");
      g.addColorStop(1, "#fde68a");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(center.x, center.y, starRadius, 0, Math.PI * 2);
      ctx.fill();

      const glow = ctx.createRadialGradient(
        center.x,
        center.y,
        starRadius,
        center.x,
        center.y,
        starRadius * 3
      );
      glow.addColorStop(0, "rgba(251,191,36,0.35)");
      glow.addColorStop(1, "rgba(15,23,42,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(center.x, center.y, starRadius * 3, 0, Math.PI * 2);
      ctx.fill();

      orbits.forEach((o, index) => {
        const r = o.size;
        const pg = ctx.createRadialGradient(
          o.x - r * 0.3,
          o.y - r * 0.3,
          r * 0.3,
          o.x,
          o.y,
          r
        );

        if (index % 3 === 0) {
          pg.addColorStop(0, "#e5e7eb");
          pg.addColorStop(1, "#93c5fd");
        } else if (index % 3 === 1) {
          pg.addColorStop(0, "#fee2e2");
          pg.addColorStop(1, "#fb7185");
        } else {
          pg.addColorStop(0, "#dcfce7");
          pg.addColorStop(1, "#22c55e");
        }

        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(o.x, o.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawPointerAura() {
      if (!pointer.active) return;
      const radius = Math.min(width, height) * 0.18;
      const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius);
      g.addColorStop(0, "rgba(191,219,254,0.25)");
      g.addColorStop(1, "rgba(15,23,42,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function handlePointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastTime = performance.now();
    function loop(now) {
      const dt = Math.min(40, now - lastTime);
      lastTime = now;

      drawBackground();
      updateCenter(dt);
      updateOrbits(dt);
      drawOrbits();
      drawBodies();
      drawPointerAura();

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // Inicializar idioma y resto
  setLanguage(currentLang);
  handleScroll();
  initMiniGame();
});
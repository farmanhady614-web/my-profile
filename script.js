/* ================================================================
   PORTOFOLIO — SCRIPT.JS
   ================================================================ */

'use strict';

/* ================================================================
   ✏️ EDIT: DATA PROJECT — ubah data di bawah ini sesuai project Anda
   ================================================================
   Setiap objek dalam array adalah 1 project.
   Salin & tempel blok {} untuk menambah project baru.

   Field yang tersedia:
   - name       : Nama project
   - desc       : Deskripsi singkat project
   - tags       : Array teknologi yang digunakan
   - demo       : URL demo live (kosongkan "" jika tidak ada)
   - github     : URL repositori GitHub (kosongkan "" jika tidak ada)
   - screenshots: Array path gambar, misal "assets/projects/p1-1.jpg"
                  Bisa 1–6 gambar per project.
                  Jika path tidak valid, akan ditampilkan placeholder.
================================================================ */
const PROJECTS_DATA = [
  {
    name: 'E-Commerce Platform',
    desc: 'Aplikasi apotek online fullstack dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
    tags: ['Native', 'MySQL', 'JavaScript', 'CSS'],
    demo: '',
    github: '',
    screenshots: [
      'assets/projects/projects1/login.jpg',
      'assets/projects/projects1/dashboard.jpg',
      'assets/projects/projects1/laporan.jpg',
      'assets/projects/projects1/produk.jpg',
      'assets/projects/projects1/kasir.jpg',
      'assets/projects/projects1/customer.jpg',
    ]
  },
  {
    name: 'Task Management App',
    desc: 'Aplikasi manajemen guru dengan fitur drag-and-drop, absensi, dan rekap nilai.',
    tags: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
    demo: '',
    github: '',
    screenshots: [
      'assets/projects/project2-1.jpg',
      'assets/projects/project2-2.jpg',
      'assets/projects/project2-3.jpg',
      'assets/projects/project2-4.jpg',
    ]
  },
  {
    name: 'Landing Page',
    desc: 'Tool berbasis web untuk membuat landing page profesional secara instan dengan berbagai tema.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
    demo: '',
    github: 'https://farmanhady614-web.github.io/barber-shop/',
    screenshots: [
      'assets/projects/projects3/1.png',
      'assets/projects/projects3/2.png',
      'assets/projects/projects3/3.png',
    ]
  },
  {
    name: 'Point of Sale System',
    desc: 'Dashboard visualisasi data bisnis real-time dengan berbagai jenis grafik,laporan ekspor dan dilengkapi sistem kasir.',
    tags: ['Node.js', 'Express', 'MySQL', 'UI/UX Design'],
    demo: '',
    github: '',
    screenshots: [
      'assets/projects/projects4/home.jpg',
      'assets/projects/projects4/login.jpg',
      'assets/projects/projects4/dashboard.jpg',
      'assets/projects/projects4/menu.jpg',
      'assets/projects/projects4/transaksi.jpg',
      'assets/projects/projects4/setting.jpg',
      'assets/projects/projects4/kasir.jpg',
    ]
  },
];

/* ================================================================
   ✏️ EDIT: Typed role text — teks yang diketik di hero section
================================================================ */
const TYPED_ROLES = [
  'Fullstack Developer',
  'UI/UX Designer',
  'Problem Solver',
];


/* ================================================================
   INTERNAL LOGIC — tidak perlu diubah kecuali Anda ingin kustomisasi
================================================================ */

/* ── 1. THEME TOGGLE ─────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement;

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  htmlEl.setAttribute('data-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

initTheme();


/* ── 2. NAVBAR: scroll & active link ────────────────────────── */
const navbar    = document.getElementById('navbar');
const navLinks  = document.querySelectorAll('.nav-link');
const sections  = document.querySelectorAll('section[id]');
const hamburger = document.getElementById('hamburger');
const navLinksList = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}, { passive: true });

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
  });
});


/* ── 3. TYPED ANIMATION (Hero) ──────────────────────────────── */
(function typedInit() {
  const el     = document.getElementById('typedRole');
  if (!el) return;

  let roleIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  const SPEED_TYPE  = 80;
  const SPEED_DEL   = 45;
  const PAUSE_AFTER = 1800;
  const PAUSE_EMPTY = 500;

  function tick() {
    const word = TYPED_ROLES[roleIdx];
    if (!deleting) {
      el.textContent = word.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    } else {
      el.textContent = word.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % TYPED_ROLES.length;
        setTimeout(tick, PAUSE_EMPTY);
        return;
      }
      setTimeout(tick, SPEED_DEL);
    }
  }
  setTimeout(tick, 1200);
})();


/* ── 4. SCROLL REVEAL ───────────────────────────────────────── */
(function revealInit() {
  const targets = document.querySelectorAll(
    '.section-header, .about-grid, .skill-card, .project-card, .contact-grid, .footer-content'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();


/* ── 5. SKILLS BAR ANIMATION ────────────────────────────────── */
(function skillBarInit() {
  const skillCards = document.querySelectorAll('.skill-card');
  const observer   = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute('data-level') || '0';
        const fill  = entry.target.querySelector('.skill-fill');
        if (fill) {
          setTimeout(() => { fill.style.width = level + '%'; }, 200);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach(card => observer.observe(card));
})();


/* ── 6. PROJECT CARDS ───────────────────────────────────────── */
function createProjectCard(project, index) {
  const card    = document.createElement('div');
  card.className = 'project-card reveal';
  card.setAttribute('data-index', index);

  /* — Screenshot slider — */
  const shots = project.screenshots && project.screenshots.length
    ? project.screenshots
    : [''];                           // at least 1 placeholder

  let trackHTML = '';
  shots.forEach((src, i) => {
    if (src) {
      trackHTML += `<img src="${src}" alt="${project.name} screenshot ${i + 1}" loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="slider-placeholder" style="display:none">screenshot ${i + 1}</div>`;
    } else {
      trackHTML += `<div class="slider-placeholder">screenshot ${i + 1}</div>`;
    }
  });

  let dotsHTML = '';
  shots.forEach((_, i) => {
    dotsHTML += `<span class="dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></span>`;
  });

  /* — Tech tags — */
  const tagsHTML = (project.tags || [])
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  /* — Action buttons — */
  let actionsHTML = '';
  if (project.demo) {
    actionsHTML += `<a href="${project.demo}" target="_blank" class="proj-btn primary">Demo ↗</a>`;
  }
  if (project.github) {
    actionsHTML += `<a href="${project.github}" target="_blank" class="proj-btn">GitHub</a>`;
  }
  actionsHTML += `<button class="proj-btn detail" data-modal="${index}">Detail</button>`;

  card.innerHTML = `
    <div class="project-slider">
      <div class="slider-track">${trackHTML}</div>
      ${shots.length > 1 ? `
        <button class="slider-btn prev" aria-label="Previous">‹</button>
        <button class="slider-btn next" aria-label="Next">›</button>
        <div class="slider-dots">${dotsHTML}</div>
      ` : ''}
    </div>
    <div class="project-body">
      <h3 class="project-name">${project.name}</h3>
      <p class="project-desc">${project.desc}</p>
      <div class="project-tags">${tagsHTML}</div>
      <div class="project-actions">${actionsHTML}</div>
    </div>
  `;

  /* — Slider logic — */
  const track  = card.querySelector('.slider-track');
  const dots   = card.querySelectorAll('.dot');
  const btnPrev = card.querySelector('.slider-btn.prev');
  const btnNext = card.querySelector('.slider-btn.next');

  let currentSlide = 0;

  function goTo(n) {
    currentSlide = (n + shots.length) % shots.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  if (btnPrev) btnPrev.addEventListener('click', () => goTo(currentSlide - 1));
  if (btnNext) btnNext.addEventListener('click', () => goTo(currentSlide + 1));
  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.getAttribute('data-dot'))));
  });

  /* — 3D hover on card — */
  card.addEventListener('mousemove', e => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `
      perspective(800px)
      rotateX(${-dy * 5}deg)
      rotateY(${dx * 6}deg)
      translateY(-8px)
    `;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.6s ease';
    setTimeout(() => { card.style.transition = ''; }, 600);
  });

  /* — Modal trigger — */
  const detailBtn = card.querySelector('[data-modal]');
  if (detailBtn) {
    detailBtn.addEventListener('click', () => openModal(index));
  }

  return card;
}

/* Render all project cards */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS_DATA.forEach((project, i) => {
    grid.appendChild(createProjectCard(project, i));
  });
  // Re-attach scroll reveal for project cards
  document.querySelectorAll('.project-card.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  });
}


/* ── 7. PROJECT MODAL ───────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalInner   = document.getElementById('modalInner');
const modalClose   = document.getElementById('modalClose');

function openModal(index) {
  const project = PROJECTS_DATA[index];
  if (!project) return;

  const tagsHTML = (project.tags || [])
    .map(t => `<span class="tag">${t}</span>`).join('');

  let galleryHTML = '';
  (project.screenshots || []).forEach((src, i) => {
    if (src) {
      galleryHTML += `
        <img src="${src}" alt="${project.name} ${i + 1}" loading="lazy"
          onerror="this.outerHTML='<div class=\\'gallery-placeholder\\'>screenshot ${i + 1}</div>'">`;
    } else {
      galleryHTML += `<div class="gallery-placeholder">screenshot ${i + 1}</div>`;
    }
  });

  let linksHTML = '';
  if (project.demo) linksHTML += `<a href="${project.demo}" target="_blank" class="btn btn-primary">Live Demo ↗</a>`;
  if (project.github) linksHTML += `<a href="${project.github}" target="_blank" class="btn btn-outline">GitHub →</a>`;

  modalInner.innerHTML = `
    <h2>${project.name}</h2>
    <p class="modal-desc">${project.desc}</p>
    <div class="project-tags">${tagsHTML}</div>
    <div class="modal-gallery">${galleryHTML}</div>
    ${linksHTML ? `<div class="modal-links">${linksHTML}</div>` : ''}
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


/* ── 8. CONTACT FORM ────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');


function showNote(msg, type) {
  formNote.textContent  = msg;
  formNote.className    = 'form-note ' + type;
}

/* ── 9. FOOTER YEAR ─────────────────────────────────────────── */
const footerYear = document.getElementById('footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();


/* ── 10. SMOOTH CURSOR PARALLAX (desktop only) ──────────────── */
(function parallaxInit() {
  if (window.innerWidth < 768) return;

  const cube    = document.querySelector('.floating-cube');
  const blob1   = document.querySelector('.blob-1');
  const blob2   = document.querySelector('.blob-2');

  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    if (cube) {
      cube.style.transform = `
        translateY(calc(-50% + ${y * 18}px))
        translateX(${x * 14}px)
      `;
    }
    if (blob1) {
      blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    }
    if (blob2) {
      blob2.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
    }
  }, { passive: true });
})();


/* ── INIT ──────────────────────────────────────────────────── */
renderProjects();

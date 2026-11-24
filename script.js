/* ================================================================
   PORTOFOLIO — SCRIPT.JS
   ================================================================ */
'use strict';

/* ================================================================
   ✏️ EDIT: DATA PROJECT — ubah data di bawah ini sesuai project Anda
   ================================================================
   Field yang tersedia untuk setiap project:
   - name        : Nama project
   - category    : Label kecil di atas judul (jenis project)
   - desc        : Deskripsi SINGKAT (tampil di kartu, 1–2 kalimat)
   - longDesc    : Deskripsi LENGKAP (tampil di jendela Detail)
   - features    : Daftar fitur utama (tampil di jendela Detail)
   - tags        : Teknologi yang dipakai
   - demo        : URL demo live ('' jika tidak ada)
   - github      : URL repositori ('' jika tidak ada)
   - screenshots : Daftar gambar. Boleh string path saja, atau
                   { src: 'path', caption: 'Keterangan gambar' }
                   Kosongkan [] jika belum ada screenshot.
================================================================ */
const PROJECTS_DATA = [
  {
    name: 'Sistem Informasi Manajemen Apotek Peresak Farma',
    category: 'Web App · Apotek & Kasir (POS)',
    desc: 'Aplikasi pengelolaan apotek lengkap: stok obat, kasir, supplier, hingga laporan penjualan, dengan hak akses terpisah untuk admin, apoteker, kasir, dan customer.',
    longDesc: 'Sistem ini membantu apotek mengelola operasional harian dalam satu aplikasi web. Admin dapat memantau penjualan, stok, dan obat yang mendekati kedaluwarsa dari dashboard. Kasir memproses transaksi dengan cepat, sementara apoteker dan customer memiliki halaman sendiri untuk konsultasi dan berbelanja obat. Seluruh data tersimpan di database MySQL dan dapat dicetak atau diekspor sebagai laporan.',
    features: [
      'Dashboard ringkasan: penjualan hari ini, stok menipis, obat mendekati expired, dan grafik penjualan',
      'Manajemen data obat, kategori, supplier, dan persediaan (stok masuk & keluar)',
      'Kasir dengan pencarian nama/kode/barcode, keranjang, diskon, dan pajak',
      '4 peran pengguna: Admin, Apoteker, Kasir, dan Customer',
      'Halaman customer: belanja obat, konsultasi apoteker, dan membership dengan poin',
      'Laporan penjualan, pendapatan, stok, obat expired, dan obat terlaris (cetak & ekspor Excel)',
      'Pengaturan informasi toko, pajak, dan logo',
    ],
    tags: ['PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://apotekperesak.my.id/',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects1/login.png',     caption: 'Halaman login multi-peran' },
      { src: 'assets/projects/projects1/dashboard.png', caption: 'Dashboard admin' },
      { src: 'assets/projects/projects1/produk.png',    caption: 'Data obat' },
      { src: 'assets/projects/projects1/kasir.png',     caption: 'Halaman kasir' },
      { src: 'assets/projects/projects1/laporan.png',   caption: 'Menu laporan' },
      { src: 'assets/projects/projects1/customer.png',  caption: 'Beranda customer' },
      { src: 'assets/projects/projects1/setting.png',   caption: 'Pengaturan toko' },
    ],
  },
  {
    name: 'SIAS — Sistem Informasi Akademik Sekolah',
    category: 'Web App · Akademik Sekolah',
    desc: 'Aplikasi untuk mengelola data siswa, kelas, absensi, dan nilai, lengkap dengan laporan, impor data dari Excel/Word, serta mode terang dan gelap.',
    longDesc: 'SIAS dibuat untuk memudahkan sekolah mencatat dan memantau kegiatan akademik secara digital. Guru dapat menginput absensi dan nilai, wali kelas memantau siswanya, dan kepala sekolah melihat ringkasan serta grafik dari dashboard. Data siswa bisa diimpor sekaligus dari file Excel atau Word, dan laporan dapat diunduh dalam format Excel maupun PDF.',
    features: [
      'Dashboard dengan statistik dan grafik tren absensi 6 bulan terakhir',
      'Data siswa, guru, kelas, mata pelajaran, dan tahun ajaran',
      'Absensi per kelas dan mata pelajaran, dilengkapi rekap dan riwayat',
      'Penilaian siswa dan laporan nilai',
      'Impor data massal dari file Excel dan Word',
      'Ekspor laporan siswa, absensi, dan nilai ke Excel / PDF',
      '4 peran: Admin, Kepala Sekolah, Wali Kelas, dan Guru, plus log aktivitas pengguna',
      'Mode terang/gelap dan tampilan responsif',
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
    demo: '',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects2/login.png',     caption: 'Halaman login' },
      { src: 'assets/projects/projects2/dashboard.png', caption: 'Dashboard (mode terang)' },
      { src: 'assets/projects/projects2/absen.png',     caption: 'Input absensi (mode gelap)' },
      { src: 'assets/projects/projects2/siswa.png',     caption: 'Data siswa' },
      { src: 'assets/projects/projects2/kelas.png',     caption: 'Data kelas' },
      { src: 'assets/projects/projects2/laporan.png',   caption: 'Laporan & ekspor' },
      { src: 'assets/projects/projects2/user.png',      caption: 'Manajemen pengguna' },
      { src: 'assets/projects/projects2/import.png',    caption: 'Impor data Excel / Word' },
    ],
  },
  {
    name: 'Landing Page Barbershop',
    category: 'Website · Landing Page',
    desc: 'Landing page barbershop bergaya gelap-emas dengan animasi halus, daftar layanan dan harga, serta formulir reservasi yang terhubung ke WhatsApp.',
    longDesc: 'Website promosi untuk barbershop yang dirancang agar pengunjung langsung paham layanan yang ditawarkan dan mudah melakukan booking. Tampilannya premium dengan tipografi serif, aksen emas, dan elemen visual animasi 3D pada bagian hero. Pengunjung dapat melihat layanan, profil, harga, lalu mengisi formulir reservasi yang dikonfirmasi lewat WhatsApp.',
    features: [
      'Hero dengan animasi dan tombol booking yang jelas',
      'Bagian layanan, tentang kami, galeri, dan daftar harga',
      'Formulir reservasi: nama, nomor WhatsApp, layanan, dan tanggal',
      'Informasi alamat, jam operasional, WhatsApp, dan Instagram',
      'Tampilan responsif dengan efek visual Three.js',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
    demo: 'https://farmanhady614-web.github.io/barber-shop/',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects3/1.png', caption: 'Hero & ajakan booking' },
      { src: 'assets/projects/projects3/2.png', caption: 'Tentang barbershop' },
      { src: 'assets/projects/projects3/3.png', caption: 'Formulir reservasi & kontak' },
    ],
  },
  {
    name: 'Brewline POS System',
    category: 'Web App · Kasir Kafe (POS)',
    desc: 'Sistem kasir digital untuk kafe: kelola menu, catat transaksi, dan pantau pendapatan lewat dashboard bernuansa gelap yang elegan.',
    longDesc: 'Brewline POS dibuat untuk membantu pemilik kafe menjalankan bisnis dengan lebih praktis dan terstruktur. Kasir dapat memilih menu berdasarkan kategori dan memproses pembayaran dengan cepat, sedangkan pemilik dapat memantau pendapatan harian, metode pembayaran, dan riwayat transaksi. Antarmukanya modern dengan nuansa kopi yang hangat dan mendukung peran admin serta kasir.',
    features: [
      'Dashboard: total pendapatan, jumlah order, rata-rata order, dan grafik pendapatan harian',
      'Kasir POS dengan menu bergambar, kategori, keranjang, diskon, dan pajak',
      'Manajemen menu dan kategori lengkap dengan stok',
      'Riwayat transaksi dengan filter status, pembayaran, dan tanggal',
      'Metode pembayaran: tunai, kartu, QRIS, dan transfer',
      'Laporan, manajemen pengguna (Admin & Kasir), serta pengaturan identitas toko dan struk',
    ],
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'UI/UX Design'],
    demo: '',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects4/home.jpg',      caption: 'Halaman utama' },
      { src: 'assets/projects/projects4/login.jpg',     caption: 'Halaman login' },
      { src: 'assets/projects/projects4/dashboard.jpg', caption: 'Dashboard pendapatan' },
      { src: 'assets/projects/projects4/kasir.jpg',     caption: 'Kasir POS' },
      { src: 'assets/projects/projects4/menu.jpg',      caption: 'Manajemen menu' },
      { src: 'assets/projects/projects4/transaksi.jpg', caption: 'Riwayat transaksi' },
      { src: 'assets/projects/projects4/setting.jpg',   caption: 'Pengaturan toko' },
    ],
  },
  {
    name: 'PixelCraft Studio',
    category: 'Website · Company Profile',
    desc: 'Website profil studio digital kreatif yang memperkenalkan layanan web, desain UI/UX, video, dan branding kepada calon klien secara profesional.',
    longDesc: 'PixelCraft Studio adalah website company profile untuk studio digital kreatif. Halamannya dirancang agar calon klien cepat memahami siapa studio ini dan layanan apa yang ditawarkan, mulai dari pengembangan website hingga branding. Tampilannya modern dengan gradasi warna, partikel animasi pada hero, dan mode terang/gelap.',
    features: [
      'Halaman Home, About, Services, Portfolio, dan Contact',
      '6 layanan: Fullstack Web Development, UI/UX Design, Video Editing, Product Advertising, Content Creation, dan Branding',
      'Animasi partikel dan efek visual pada bagian hero',
      'Tombol "Hire Me" untuk mendorong calon klien menghubungi',
      'Mode terang/gelap dan tampilan responsif',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
    demo: 'https://pixelcraft-studio-kappa.vercel.app/',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects5/home.png',  caption: 'Hero studio' },
      { src: 'assets/projects/projects5/about.png', caption: 'Tentang studio' },
      { src: 'assets/projects/projects5/servis.png', caption: 'Layanan' },
    ],
  },
  {
    name: 'RAB Pro System',
    category: 'Web App · Konstruksi (RAB)',
    desc: 'Aplikasi untuk menyusun Rencana Anggaran Biaya proyek konstruksi: hitung biaya per pekerjaan, analisis harga satuan (AHSP), pantau progres, dan ekspor ke Excel/PDF.',
    longDesc: 'RAB Pro System membantu kontraktor dan estimator menyusun Rencana Anggaran Biaya dengan lebih cepat dan rapi. Setiap proyek memiliki rincian pekerjaan lengkap dengan volume, harga material, upah, dan alat, yang kemudian direkap otomatis. Aplikasi juga menyediakan database material, analisis harga satuan pekerjaan (AHSP), serta pemantauan progres rencana versus realisasi. Hasil akhirnya dapat diunduh dalam format Excel dan PDF.',
    features: [
      'Dashboard: jumlah proyek, total nilai RAB, nilai RAB per bulan, dan komposisi biaya',
      'Data proyek dan pembuatan RAB per item pekerjaan, termasuk overhead/PPN',
      'Rekapitulasi RAB otomatis per kategori pekerjaan',
      'Database material, upah tenaga, dan peralatan (bisa impor dari Excel)',
      'Analisis Harga Satuan Pekerjaan (AHSP)',
      'Laporan progres: rencana vs realisasi, deviasi, dan kurva S',
      'Ekspor laporan ke Excel (.xlsx) dan PDF',
      'Manajemen pengguna 5 peran dan log aktivitas',
    ],
    tags: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'ExcelJS', 'PDFKit'],
    demo: '',
    github: '',
    screenshots: [
      { src: 'assets/projects/projects6/01.png', caption: 'Login' },
      { src: 'assets/projects/projects6/02.png', caption: 'Dashboard' },
      { src: 'assets/projects/projects6/03.png', caption: 'Data proyek' },
      { src: 'assets/projects/projects6/04.png', caption: 'Buat RAB' },
      { src: 'assets/projects/projects6/05.png', caption: 'Rekapitulasi RAB' },
      { src: 'assets/projects/projects6/06.png', caption: 'Database material' },
      { src: 'assets/projects/projects6/07.png', caption: 'Analisis Harga Satuan (AHSP)' },
      { src: 'assets/projects/projects6/08.png', caption: 'Laporan progres proyek' },
      { src: 'assets/projects/projects6/09.png', caption: 'Ekspor Excel / PDF' },
      { src: 'assets/projects/projects6/10.png', caption: 'Manajemen pengguna' },
    ],
  },
  {
    name: 'Website Desa',
    category: 'Website · Pemerintahan Desa',
    desc: 'Website resmi desa untuk menyajikan profil, informasi, dan layanan desa kepada warga secara online.',
    longDesc: 'Website desa yang dirancang untuk menjadi pusat informasi bagi warga: profil desa, berita atau pengumuman, dan layanan desa. Dibangun dengan arsitektur fullstack agar data mudah dikelola dan diperbarui oleh pengelola desa.',
    features: [],
    tags: ['Node.js', 'Express.js', 'React.js', 'MySQL'],
    demo: '',
    github: '',
    screenshots: [], // ← tambahkan screenshot di sini jika sudah ada
  },
  {
    name: 'Website Pengajuan Surat Desa',
    category: 'Web App · Layanan Desa',
    desc: 'Layanan online untuk mengajukan surat keterangan desa, sehingga warga tidak perlu datang langsung ke kantor desa.',
    longDesc: 'Aplikasi ini memudahkan warga mengajukan surat administrasi desa secara online, lalu perangkat desa memproses dan menerbitkannya dalam bentuk dokumen yang siap dicetak atau diunduh. Proses menjadi lebih cepat, tercatat rapi, dan mengurangi antrean di kantor desa.',
    features: [],
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    demo: '',
    github: '',
    screenshots: [], // ← tambahkan screenshot di sini jika sudah ada
  },
];

/* ✏️ EDIT: Teks yang diketik di hero */
const TYPED_ROLES = ['Fullstack Developer', 'UI/UX Designer', 'Problem Solver'];


/* ================================================================
   HELPERS
================================================================ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shotsOf = p => (p.screenshots || []).map((s, i) =>
  typeof s === 'string' ? { src: s, caption: `${p.name} — gambar ${i + 1}` } : { caption: `${p.name} — gambar ${i + 1}`, ...s });

const ICON = {
  prev:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  next:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  zoom:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>',
};

/* Kunci scroll body (hitung berapa lapisan yang membukanya) */
let lockCount = 0;
const lockScroll = () => { if (lockCount++ === 0) document.body.classList.add('no-scroll'); };
const unlockScroll = () => { if (--lockCount <= 0) { lockCount = 0; document.body.classList.remove('no-scroll'); } };

/* Jebak fokus keyboard di dalam container */
function trapFocus(container, e) {
  if (e.key !== 'Tab') return;
  const f = $$('button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])', container)
    .filter(el => el.offsetParent !== null || el === document.activeElement);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}


/* ================================================================
   1. THEME TOGGLE — terang/gelap, ikut sistem, transisi lingkaran
================================================================ */
const htmlEl = document.documentElement;
const themeToggle = $('#themeToggle');
const metaTheme = $('meta[name="theme-color"]');
const THEME_KEY = 'portfolio-theme';
const THEME_COLORS = { dark: '#0a0a0f', light: '#f6f4ef' };

const storedTheme = () => { try { return localStorage.getItem(THEME_KEY); } catch { return null; } };
const systemTheme = () => (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function paintTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  if (metaTheme) metaTheme.setAttribute('content', THEME_COLORS[theme]);
  themeToggle?.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap');
  themeToggle?.setAttribute('aria-pressed', String(theme === 'light'));
}

function setTheme(next, origin) {
  const apply = () => paintTheme(next);
  if (document.startViewTransition && !reduceMotion.matches && origin) {
    const { x, y } = origin;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(apply);
    t.ready.then(() => {
      htmlEl.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
  } else {
    htmlEl.classList.add('theme-anim');
    apply();
    setTimeout(() => htmlEl.classList.remove('theme-anim'), 600);
  }
}

paintTheme(htmlEl.getAttribute('data-theme') || storedTheme() || systemTheme());

themeToggle?.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem(THEME_KEY, next); } catch {}
  const r = themeToggle.getBoundingClientRect();
  setTheme(next, { x: r.left + r.width / 2, y: r.top + r.height / 2 });
});

// Ikuti perubahan tema sistem selama pengguna belum memilih manual
window.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', () => {
  if (!storedTheme()) setTheme(systemTheme());
});


/* ================================================================
   2. NAVBAR — scroll state, scroll spy, menu mobile, progress bar
================================================================ */
const navbar       = $('#navbar');
const navLinks     = $$('.nav-link');
const sections     = $$('section[id]');
const hamburger    = $('#hamburger');
const navList      = $('#navLinks');
const navBackdrop  = $('#navBackdrop');
const progressBar  = $('#scrollProgress');
const mqMobile     = window.matchMedia('(max-width: 768px)');

function setMenu(open) {
  hamburger.classList.toggle('open', open);
  navList.classList.toggle('open', open);
  navBackdrop.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  document.body.classList.toggle('no-scroll', open || lockCount > 0);
}
hamburger.addEventListener('click', () => setMenu(!navList.classList.contains('open')));
navBackdrop.addEventListener('click', () => setMenu(false));
navLinks.forEach(l => l.addEventListener('click', () => setMenu(false)));
mqMobile.addEventListener?.('change', e => { if (!e.matches) setMenu(false); });

let lastY = 0, ticking = false;
function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 30);
  // Sembunyikan navbar saat scroll turun jauh (mobile), tampil saat naik
  navbar.classList.toggle('hide', mqMobile.matches && y > lastY + 6 && y > 400 && !navList.classList.contains('open'));
  if (y < lastY - 4 || y < 400) navbar.classList.remove('hide');
  lastY = y;

  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;

  let current = sections[0]?.id;
  sections.forEach(s => { if (y >= s.offsetTop - innerHeight * 0.35) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();


/* ================================================================
   3. TYPED ANIMATION (hero)
================================================================ */
(function typedInit() {
  const el = $('#typedRole');
  if (!el) return;
  if (reduceMotion.matches) { el.textContent = TYPED_ROLES[0]; return; }
  let roleIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    const word = TYPED_ROLES[roleIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) { deleting = true; return setTimeout(tick, 1800); }
      setTimeout(tick, 75);
    } else {
      el.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % TYPED_ROLES.length; return setTimeout(tick, 450); }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 1200);
})();


/* ================================================================
   4. SCROLL REVEAL (satu observer, stagger otomatis)
================================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('revealed');
    revealObserver.unobserve(el);
    // Setelah selesai, lepas class reveal agar tidak bentrok dengan hover/tilt
    setTimeout(() => el.classList.remove('reveal', 'revealed', 'reveal-left', 'reveal-right'), 1400 + (parseInt(el.style.getPropertyValue('--d')) || 0));
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

function observeReveal(selector, { stagger = 70, cols = 0, cls = '' } = {}) {
  $$(selector).forEach((el, i) => {
    if (el.classList.contains('revealed') || !el.isConnected) return;
    el.classList.add('reveal');
    if (cls) el.classList.add(cls);
    const idx = cols ? i % cols : i;
    el.style.setProperty('--d', Math.min(idx * stagger, 420) + 'ms');
    revealObserver.observe(el);
  });
}
observeReveal('.section-header');
observeReveal('.about-photo-wrapper', { cls: 'reveal-left' });
observeReveal('.about-info', { cls: 'reveal-right' });
observeReveal('.skills-intro, .projects-intro');
observeReveal('.skill-card', { stagger: 55, cols: 6 });
observeReveal('.contact-info', { cls: 'reveal-left' });
observeReveal('.contact-form-wrapper', { cls: 'reveal-right' });
observeReveal('.footer-content');


/* ================================================================
   5. SKILL BARS + COUNT-UP STATISTIK
================================================================ */
(function skillBarInit() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      const level = Number(card.dataset.level) || 0;
      card.style.setProperty('--lv', level / 100);
      setTimeout(() => card.classList.add('filled'), 150);
      const pct = $('.skill-pct', card);
      if (pct) countTo(pct, level, 1100, '%');
      obs.unobserve(card);
    });
  }, { threshold: 0.4 });
  $$('.skill-card').forEach(c => obs.observe(c));
})();

function countTo(el, to, dur = 1200, suffix = '') {
  if (reduceMotion.matches) { el.textContent = to + suffix; return; }
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
(function statsInit() {
  $$('.stat-num').forEach(el => {
    const m = el.textContent.trim().match(/^(\d+)(.*)$/);
    if (!m) return;
    el.textContent = '0' + m[2];
    setTimeout(() => countTo(el, Number(m[1]), 1400, m[2]), 1300);
  });
})();


/* ================================================================
   6. LIGHTBOX — klik gambar → langsung diperbesar
      • animasi "terbang" dari thumbnail (FLIP)
      • zoom (scroll / pinch / double-tap / tombol), geser (drag)
      • navigasi: tombol, panah keyboard, swipe, thumbnail
================================================================ */
const LB = (() => {
  const root = $('#lightbox');
  const img = $('.lb-img', root), pan = $('.lb-pan', root), stage = $('.lb-stage', root);
  const counter = $('.lb-counter', root), title = $('.lb-title', root), caption = $('.lb-caption', root);
  const thumbs = $('.lb-thumbs', root);
  const btnPrev = $('.lb-nav.prev', root), btnNext = $('.lb-nav.next', root);
  const btnClose = $('.lb-close', root), btnIn = $('.lb-zoom-in', root), btnOut = $('.lb-zoom-out', root);

  let items = [], idx = 0, opts = {}, isOpen = false, lastFocus = null, token = 0, closing = false;
  let z = { s: 1, x: 0, y: 0 };
  const MAX = 5;

  /* ---------- zoom & pan ---------- */
  function clampPan() {
    if (z.s <= 1) { z.x = z.y = 0; return; }
    const lx = Math.max(0, (img.offsetWidth * z.s - stage.clientWidth) / 2);
    const ly = Math.max(0, (img.offsetHeight * z.s - stage.clientHeight) / 2);
    z.x = Math.max(-lx, Math.min(lx, z.x));
    z.y = Math.max(-ly, Math.min(ly, z.y));
  }
  function applyZoom(smooth) {
    clampPan();
    pan.style.transition = smooth ? `transform .38s ${EASE}` : 'none';
    pan.style.transform = `translate3d(${z.x}px, ${z.y}px, 0) scale(${z.s})`;
    root.classList.toggle('zoomed', z.s > 1.01);
    btnOut.disabled = z.s <= 1.01;
    btnIn.disabled = z.s >= MAX - 0.01;
  }
  function zoomAt(ns, cx, cy, smooth = true) {
    ns = Math.max(1, Math.min(MAX, ns));
    const r = stage.getBoundingClientRect();
    const px = cx - (r.left + r.width / 2), py = cy - (r.top + r.height / 2);
    const k = ns / z.s;
    z.x = px - k * (px - z.x);
    z.y = py - k * (py - z.y);
    z.s = ns;
    applyZoom(smooth);
  }
  function resetZoom(smooth = false) { z = { s: 1, x: 0, y: 0 }; applyZoom(smooth); }
  const center = () => { const r = stage.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

  /* ---------- tampilkan gambar ---------- */
  function renderThumbs() {
    thumbs.innerHTML = '';
    thumbs.hidden = items.length < 2;
    items.forEach((it, i) => {
      const b = document.createElement('button');
      b.className = 'lb-thumb'; b.type = 'button';
      b.setAttribute('aria-label', `Lihat gambar ${i + 1}`);
      b.innerHTML = `<img src="${esc(it.src)}" alt="" loading="lazy" decoding="async">`;
      b.addEventListener('click', () => go(i));
      thumbs.appendChild(b);
    });
  }
  function markThumb() {
    $$('.lb-thumb', thumbs).forEach((t, i) => {
      t.classList.toggle('active', i === idx);
      if (i === idx) t.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    });
  }
  const preload = i => { if (items[i]) { const im = new Image(); im.src = items[i].src; } };

  async function show(i, dir = 0, flipFrom = null) {
    const my = ++token;
    idx = (i + items.length) % items.length;
    const it = items[idx];
    resetZoom(false);
    counter.textContent = `${idx + 1} / ${items.length}`;
    title.textContent = opts.title || '';
    caption.textContent = it.caption || '';
    btnPrev.disabled = btnNext.disabled = items.length < 2;
    markThumb();
    img.alt = it.caption || '';
    img.src = it.src;
    try { await img.decode(); } catch {}
    if (my !== token) return;
    preload(idx + 1); preload(idx - 1);
    opts.onChange?.(idx);

    if (reduceMotion.matches) return;
    if (flipFrom) {
      const t = img.getBoundingClientRect();
      const s = flipFrom.width / t.width;
      const dx = flipFrom.left + flipFrom.width / 2 - (t.left + t.width / 2);
      const dy = flipFrom.top + flipFrom.height / 2 - (t.top + t.height / 2);
      img.animate(
        [{ transform: `translate(${dx}px, ${dy}px) scale(${s})`, borderRadius: '14px' }, { transform: 'none', borderRadius: '10px' }],
        { duration: 560, easing: EASE }
      );
    } else if (dir) {
      img.animate(
        [{ transform: `translateX(${dir * 70}px) scale(.96)`, opacity: 0 }, { transform: 'none', opacity: 1 }],
        { duration: 420, easing: EASE }
      );
    } else {
      img.animate([{ opacity: 0, transform: 'scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 300, easing: EASE });
    }
  }
  const go = (i, dir) => {
    if (items.length < 2 || !isOpen) return;
    const d = dir ?? (i > idx ? 1 : -1);
    show(i, d);
  };
  const next = () => go(idx + 1, 1);
  const prev = () => go(idx - 1, -1);

  /* ---------- buka / tutup ---------- */
  function open(list, start, options = {}) {
    if (!list.length || isOpen) return;
    items = list; opts = options; isOpen = true; closing = false;
    lastFocus = document.activeElement;
    renderThumbs();
    lockScroll();
    root.classList.add('open');
    root.setAttribute('aria-hidden', 'false');
    const from = opts.origin?.(start)?.getBoundingClientRect();
    show(start, 0, from && from.width ? from : null);
    setTimeout(() => btnClose.focus({ preventScroll: true }), 50);
  }

  function close() {
    if (!isOpen || closing) return;
    closing = true;
    const target = opts.origin?.(idx);
    const r = target?.getBoundingClientRect();
    const visible = r && r.width && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
    resetZoom(false);
    if (!reduceMotion.matches) {
      if (visible) {
        const t = img.getBoundingClientRect();
        const s = r.width / t.width;
        const dx = r.left + r.width / 2 - (t.left + t.width / 2);
        const dy = r.top + r.height / 2 - (t.top + t.height / 2);
        img.animate([{ transform: 'none' }, { transform: `translate(${dx}px, ${dy}px) scale(${s})` }], { duration: 440, easing: EASE, fill: 'forwards' });
      } else {
        img.animate([{ transform: 'none', opacity: 1 }, { transform: 'scale(.9)', opacity: 0 }], { duration: 300, easing: EASE, fill: 'forwards' });
      }
    }
    setTimeout(() => root.classList.remove('open'), reduceMotion.matches ? 0 : 260);
    setTimeout(() => {
      img.getAnimations().forEach(a => a.cancel());
      img.removeAttribute('src');
      root.setAttribute('aria-hidden', 'true');
      unlockScroll();
      isOpen = false; closing = false;
      lastFocus?.focus?.({ preventScroll: true });
    }, reduceMotion.matches ? 0 : 480);
  }

  /* ---------- kontrol ---------- */
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnClose.addEventListener('click', close);
  btnIn.addEventListener('click', () => zoomAt(z.s * 1.6, ...center()));
  btnOut.addEventListener('click', () => zoomAt(z.s / 1.6, ...center()));
  $('.lb-backdrop', root).addEventListener('click', close);

  document.addEventListener('keydown', e => {
    if (!isOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); close(); }
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.key === '+' || e.key === '=') zoomAt(z.s * 1.4, ...center());
    else if (e.key === '-') zoomAt(z.s / 1.4, ...center());
    else if (e.key === '0') resetZoom(true);
    else trapFocus(root, e);
  }, true);

  stage.addEventListener('wheel', e => {
    if (!isOpen) return;
    e.preventDefault();
    zoomAt(z.s * Math.exp(-e.deltaY * 0.0022), e.clientX, e.clientY, false);
  }, { passive: false });

  /* Pointer: drag untuk geser, pinch untuk zoom, swipe untuk navigasi, double-tap untuk zoom */
  const ptrs = new Map();
  let start = null, pinch = null, lastTap = { t: 0, x: 0, y: 0 }, swipeDX = 0;

  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    stage.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 1) {
      start = { x: e.clientX, y: e.clientY, t: performance.now(), zx: z.x, zy: z.y, moved: false, onImg: e.target === img };
      swipeDX = 0;
    } else if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: z.s };
      start = null;
    }
  });

  stage.addEventListener('pointermove', e => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2 && pinch) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt(pinch.s * d / pinch.d, (a.x + b.x) / 2, (a.y + b.y) / 2, false);
      return;
    }
    if (!start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) start.moved = true;
    if (z.s > 1.01) {
      root.classList.add('panning');
      z.x = start.zx + dx; z.y = start.zy + dy;
      applyZoom(false);
    } else if (start.moved && Math.abs(dx) > Math.abs(dy)) {
      swipeDX = dx; // umpan balik geser saat zoom 1x
      pan.style.transition = 'none';
      pan.style.transform = `translate3d(${dx * 0.6}px, 0, 0)`;
    }
  });

  function endPointer(e) {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.delete(e.pointerId);
    root.classList.remove('panning');
    if (ptrs.size < 2) pinch = null;
    if (!start || ptrs.size) return;
    const dt = performance.now() - start.t;
    const s = start; start = null;

    if (z.s <= 1.01 && Math.abs(swipeDX) > 0) {
      if (Math.abs(swipeDX) > 70 && items.length > 1) { applyZoom(false); swipeDX < 0 ? next() : prev(); }
      else applyZoom(true);
      swipeDX = 0;
      return;
    }
    if (!s.moved && dt < 350) {
      // tap: klik area gelap menutup, double-tap men-zoom
      const now = performance.now();
      if (!s.onImg && z.s <= 1.01) return close();
      if (now - lastTap.t < 320 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 40) {
        z.s > 1.01 ? resetZoom(true) : zoomAt(2.6, e.clientX, e.clientY);
        lastTap.t = 0;
      } else lastTap = { t: now, x: e.clientX, y: e.clientY };
    }
  }
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);
  img.addEventListener('dragstart', e => e.preventDefault());
  window.addEventListener('resize', () => { if (isOpen) applyZoom(false); });

  return { open, close, get isOpen() { return isOpen; } };
})();


/* ================================================================
   7. KARTU PROJECT
================================================================ */
function createProjectCard(project, index) {
  const shots = shotsOf(project);
  const card = document.createElement('article');
  card.className = 'project-card';
  card.dataset.index = index;

  const trackHTML = shots.map((s, i) => `
    <button type="button" class="shot" data-i="${i}" aria-label="Perbesar gambar: ${esc(s.caption)}">
      <img src="${esc(s.src)}" alt="${esc(s.caption)}" width="1920" height="880" decoding="async"
           ${i === 0 ? '' : 'loading="lazy"'} draggable="false">
      <span class="shot-label">${esc(s.caption)}</span>
      <span class="shot-zoom" aria-hidden="true">${ICON.zoom}</span>
    </button>`).join('');

  const dotsHTML = shots.map((_, i) => `<button type="button" class="dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Gambar ${i + 1}"></button>`).join('');

  const MAX_TAGS = 4;
  const tags = project.tags || [];
  const tagsHTML = tags.slice(0, MAX_TAGS).map(t => `<span class="tag">${esc(t)}</span>`).join('')
    + (tags.length > MAX_TAGS ? `<span class="tag more">+${tags.length - MAX_TAGS}</span>` : '');

  let actionsHTML = '';
  if (project.demo)   actionsHTML += `<a href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer" class="proj-btn primary">Demo ↗</a>`;
  if (project.github) actionsHTML += `<a href="${esc(project.github)}" target="_blank" rel="noopener noreferrer" class="proj-btn">GitHub</a>`;
  actionsHTML += `<button type="button" class="proj-btn detail">Lihat Detail</button>`;

  card.innerHTML = `
    <div class="project-slider">
      ${shots.length
        ? `<div class="slider-track">${trackHTML}</div>
           ${shots.length > 1 ? `
             <span class="slider-count" aria-hidden="true">1 / ${shots.length}</span>
             <button type="button" class="slider-btn prev" aria-label="Gambar sebelumnya">${ICON.prev}</button>
             <button type="button" class="slider-btn next" aria-label="Gambar berikutnya">${ICON.next}</button>
             <div class="slider-dots">${dotsHTML}</div>` : ''}`
        : `<div class="slider-empty">Screenshot segera hadir</div>`}
    </div>
    <div class="project-body">
      <span class="project-cat">${esc(project.category || 'Project')}</span>
      <h3 class="project-name">${esc(project.name)}</h3>
      <p class="project-desc">${esc(project.desc)}</p>
      <div class="project-tags">${tagsHTML}</div>
      <div class="project-actions">${actionsHTML}</div>
    </div>`;

  /* — Slider — */
  const track = $('.slider-track', card);
  let current = 0;
  if (track) {
    const dots = $$('.dot', card), count = $('.slider-count', card);
    const slides = $$('.shot', card);
    const setPos = (extra = 0) => { track.style.transform = `translate3d(calc(${-current * 100}% + ${extra}px), 0, 0)`; };

    const goTo = (n, instant = false) => {
      current = (n + shots.length) % shots.length;
      if (instant) track.classList.add('dragging');
      setPos();
      if (instant) { track.offsetWidth; track.classList.remove('dragging'); }
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      if (count) count.textContent = `${current + 1} / ${shots.length}`;
      [current, current + 1].forEach(i => { const im = $('img', slides[i % slides.length]); if (im) im.loading = 'eager'; });
    };
    $('.slider-btn.prev', card)?.addEventListener('click', () => goTo(current - 1));
    $('.slider-btn.next', card)?.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // Gambar yang gagal dimuat → placeholder, tidak bisa di-zoom
    slides.forEach(s => $('img', s).addEventListener('error', () => {
      s.classList.add('broken'); s.disabled = true; s.textContent = 'Gambar tidak ditemukan';
    }));

    // Swipe di layar sentuh / drag mouse
    let sx = 0, sy = 0, drag = false, moved = false, locked = false, pid = null;
    const slider = $('.project-slider', card);
    slider.addEventListener('pointerdown', e => {
      if (e.target.closest('.slider-btn, .dot') || shots.length < 2) return;
      sx = e.clientX; sy = e.clientY; drag = true; moved = false; locked = false; pid = e.pointerId;
    });
    slider.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== pid) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!locked && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { locked = true; slider.setPointerCapture(pid); track.classList.add('dragging'); }
      if (!locked) return;
      moved = true;
      const edge = (current === 0 && dx > 0) || (current === shots.length - 1 && dx < 0) ? 0.35 : 1;
      setPos(dx * edge);
    });
    const endDrag = e => {
      if (!drag || e.pointerId !== pid) return;
      drag = false; track.classList.remove('dragging');
      const dx = e.clientX - sx;
      if (locked && Math.abs(dx) > slider.clientWidth * 0.18) goTo(current + (dx < 0 ? 1 : -1)); else setPos();
      if (moved) setTimeout(() => { moved = false; }, 0);
    };
    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointercancel', endDrag);

    // Klik gambar → lightbox
    slides.forEach((s, i) => s.addEventListener('click', e => {
      if (moved) { e.preventDefault(); return; }
      openLightbox(project, i, {
        origin: n => $('img', slides[n]),
        onChange: n => { if (n !== current) goTo(n, true); },
      });
    }));
  }

  /* — Tilt 3D + sorotan kursor (hanya perangkat dengan mouse) — */
  if (canHover.matches && !reduceMotion.matches) {
    let raf = 0;
    card.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.classList.add('tilting');
        card.style.setProperty('--ry', ((px - 0.5) * 7).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((0.5 - py) * 5).toFixed(2) + 'deg');
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      });
    });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      card.classList.remove('tilting');
      card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg');
    });
  }

  $('.proj-btn.detail', card).addEventListener('click', e => openModal(index, e.currentTarget));
  return card;
}

function openLightbox(project, start, opts = {}) {
  const items = shotsOf(project).filter(s => s.src);
  LB.open(items, start, { title: project.name, ...opts });
}

function renderProjects() {
  const grid = $('#projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS_DATA.forEach((p, i) => grid.appendChild(createProjectCard(p, i)));
  observeReveal('.project-card', { stagger: 90, cols: 3 });
}


/* ================================================================
   8. MODAL DETAIL PROJECT
================================================================ */
const modalOverlay = $('#modalOverlay');
const modalEl      = $('#projectModal');
const modalInner   = $('#modalInner');
const modalClose   = $('#modalClose');
let modalOpen = false, modalTrigger = null, modalCloseTimer = 0;

function openModal(index, trigger) {
  const p = PROJECTS_DATA[index];
  if (!p || modalOpen) return;
  clearTimeout(modalCloseTimer);
  const shots = shotsOf(p);
  let n = 0; const step = () => `style="--i:${n++}"`;

  const tagsHTML = (p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
  const featuresHTML = (p.features || []).length
    ? `<h3 class="modal-h" ${step()}>Fitur Utama</h3><ul class="feature-list" ${step()}>${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : '';
  const galleryHTML = shots.length
    ? `<h3 class="modal-h" ${step()}>Tampilan Aplikasi · ${shots.length} gambar</h3>
       <div class="modal-gallery" ${step()}>${shots.map((s, i) => `
         <button type="button" class="gal-item" data-i="${i}" data-caption="${esc(s.caption)}" aria-label="Perbesar: ${esc(s.caption)}">
           <img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy" decoding="async" draggable="false">
         </button>`).join('')}</div>`
    : `<h3 class="modal-h" ${step()}>Tampilan Aplikasi</h3><div class="gal-empty" ${step()}>Screenshot project ini akan segera ditambahkan.</div>`;

  let links = '';
  if (p.demo)   links += `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Buka Demo <span class="btn-icon">↗</span></a>`;
  if (p.github) links += `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub <span class="btn-icon">→</span></a>`;

  modalInner.innerHTML = `
    <div class="modal-cat" ${step()}>${esc(p.category || 'Project')}</div>
    <h2 id="modalTitle" ${step()}>${esc(p.name)}</h2>
    <p class="modal-desc" ${step()}>${esc(p.longDesc || p.desc)}</p>
    <div class="project-tags" ${step()}>${tagsHTML}</div>
    ${featuresHTML}
    ${galleryHTML}
    ${links ? `<div class="modal-links" ${step()}>${links}</div>` : ''}`;

  const gals = $$('.gal-item', modalInner);
  gals.forEach((g, i) => {
    $('img', g).addEventListener('error', () => { g.classList.add('broken'); g.disabled = true; g.textContent = 'Gambar tidak ditemukan'; });
    g.addEventListener('click', () => openLightbox(p, i, {
      origin: k => $('img', gals[k]),
      onChange: k => gals[k]?.scrollIntoView({ block: 'nearest', behavior: 'auto' }),
    }));
  });

  modalTrigger = trigger || document.activeElement;
  modalEl.scrollTop = 0;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  lockScroll();
  modalOpen = true;
  setTimeout(() => modalClose.focus({ preventScroll: true }), 60);
}

function closeModal() {
  if (!modalOpen) return;
  modalOpen = false;
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  unlockScroll();
  modalTrigger?.focus?.({ preventScroll: true });
  modalCloseTimer = setTimeout(() => { modalInner.innerHTML = ''; }, 450);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => {
  if (LB.isOpen) return;
  if (e.key === 'Escape') { if (modalOpen) closeModal(); else setMenu(false); }
  else if (modalOpen) trapFocus(modalOverlay, e);
});


/* ================================================================
   9. FORM KONTAK (kirim → buka WhatsApp dengan pesan terisi)
================================================================ */
(function contactInit() {
  const form = $('#contactForm'), note = $('#formNote');
  if (!form) return;
  const show = (msg, type) => { note.textContent = msg; note.className = 'form-note ' + type; };

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const v = n => form.elements[n]?.value.trim() || '';
    const text = [
      'Halo Farman, saya ingin menghubungi Anda lewat portofolio.',
      '',
      `Nama: ${v('nama')}`,
      `Email: ${v('email')}`,
      v('subjek') ? `Subjek: ${v('subjek')}` : '',
      '',
      'Pesan:',
      v('pesan'),
    ].filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n');

    const url = `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(text)}`;
    show('Membuka WhatsApp…', 'success');
    // Dipanggil langsung dari klik pengguna agar tidak diblokir popup blocker
    const win = window.open(url, '_blank', 'noopener');
    if (!win) location.href = url;
    setTimeout(() => { form.reset(); show('', ''); }, 2500);
  });
})();


/* ================================================================
   10. FOOTER, PARALLAX HERO & INIT
================================================================ */
const footerYear = $('#footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();

(function parallaxInit() {
  if (!canHover.matches || reduceMotion.matches) return;
  const cube = $('.floating-cube'), b1 = $('.blob-1'), b2 = $('.blob-2');
  let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
  const loop = () => {
    cx += (tx - cx) * 0.07; cy += (ty - cy) * 0.07;
    if (cube) cube.style.transform = `translate3d(${cx * 22}px, ${cy * 22}px, 0)`;
    if (b1) b1.style.translate = `${cx * 40}px ${cy * 40}px`;
    if (b2) b2.style.translate = `${-cx * 28}px ${-cy * 28}px`;
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) requestAnimationFrame(loop); else running = false;
  };
  window.addEventListener('pointermove', e => {
    if (window.scrollY > innerHeight) return;
    tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5;
    if (!running) { running = true; requestAnimationFrame(loop); }
  }, { passive: true });
})();

renderProjects();

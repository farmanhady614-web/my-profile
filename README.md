# Portofolio — Panduan Edit

## Struktur File
```
portfolio/
├── index.html   ← konten & struktur halaman
├── style.css    ← styling, tema terang/gelap, responsif
├── script.js    ← data project + semua interaksi
└── assets/
    ├── img/profile1.png
    └── projects/projects1 … projects6/  (screenshot)
```
Buka `index.html` dengan Live Server (VS Code) agar semua berjalan normal.

## Edit data project (`script.js` → `PROJECTS_DATA`)
```js
{
  name: 'Nama Project',
  category: 'Web App · Jenis Project',
  desc: 'Deskripsi singkat 1–2 kalimat (tampil di kartu).',
  longDesc: 'Deskripsi lengkap (tampil di jendela Detail).',
  features: ['Fitur 1', 'Fitur 2'],
  tags: ['Node.js', 'MySQL'],
  demo: 'https://…',   // '' jika tidak ada
  github: '',
  screenshots: [
    { src: 'assets/projects/projects7/01.png', caption: 'Keterangan gambar' },
  ],                    // [] jika belum ada screenshot
}
```

## Fitur UI
- **Tema terang/gelap**: mengikuti pengaturan HP/laptop saat pertama dibuka, bisa diganti lewat tombol (pilihan tersimpan).
- **Klik gambar project** → langsung terbuka layar penuh. Zoom: scroll / cubit / klik dua kali / tombol +−. Pindah gambar: tombol, panah keyboard, swipe, atau thumbnail. Tutup: Esc, tombol ✕, atau klik area gelap.
- Animasi otomatis dikurangi untuk pengguna yang mengaktifkan "reduce motion".

## Form kontak
Tombol kirim membuka WhatsApp dengan pesan yang sudah terisi (nama, email, subjek, pesan). Nomor tujuan ada di atribut `data-wa` pada `<form id="contactForm">` di `index.html` (format 62…, tanpa +).

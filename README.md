# 📦 Packnesia — Custom Packaging Solutions for F&B Brands

[![Vite](https://img.shields.io/badge/Vite-6.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-EE5D26)](#)

Website resmi dan katalog interaktif untuk **Packnesia**, vendor dan produsen kemasan makanan & minuman (*food-grade packaging*) terpercaya di Indonesia. Didesain secara presisi dengan arsitektur modern, performa tinggi, dan optimasi **Google Page 1 SEO**.

---

## 🌟 Fitur Utama

- 🎨 **Modern Reference UI Design**: Skema warna khas Packnesia (`#EE5D26` Orange & `#0E1D33` Navy), tipografi Plus Jakarta Sans, dan layout interaktif responsive mobile/desktop.
- 💰 **6 Dedicated Product Money Pages (SSG)**: Halaman statis pre-rendered untuk `/produk/food-box/`, `/produk/paper-cup/`, `/produk/coffee-packaging/`, `/produk/paper-bag/`, `/produk/cake-box/`, dan `/produk/custom-box/` lengkap dengan tabel spesifikasi, MOQ, dan tombol WhatsApp pre-filled.
- ⭐ **Schema.org Rich Snippets**: Schema `AggregateRating` (4.9/5 dari 1.248+ ulasan klien), `Product`, `Review`, `FAQPage`, dan `LocalBusiness` terverifikasi untuk memunculkan bintang emas di SERP Google.
- ⚡ **Next-Gen WebP & Core Web Vitals**: Penghematan bobot visual 39% (Hero banner terkompresi 57.6%), CLS 0.00 (tanpa layout shifting), dan LCP < 1.2s dengan eager/lazy loading bertingkat.
- 📍 **Local SEO Indonesia & Topic Cluster**: Section jangkauan pengiriman nusantara melayani Jabodetabek, Surabaya, Bandung, Semarang, Medan, Bali, Makassar dengan integrasi ekspedisi kargo (JNE Trucking, Indah Logistik, Dakota Cargo, Deliveree, Lalamove).
- ✍️ **Admin Blog CMS**: Panel admin in-app untuk menulis, mengedit, dan mempublikasikan artikel edukasi kemasan dengan Markdown toolbar dan generator SSG otomatis.
- 🗺️ **Deterministik XML Sitemap & Robots.txt**: Peta situs lengkap 16 URL resmi sesuai standar `sitemaps.org` siap diajukan ke Google Search Console.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3 + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Static Site Generation (SSG)**: Node.js Custom Pre-rendering Scripts (`scripts/build-static-products.js`, `scripts/build-static-articles.js`, `scripts/build-sitemap.js`)
- **Deployment Ready**: Vercel (`vercel.json`), Netlify (`netlify.toml`), Cloudflare Pages (`public/_headers`)

---

## 🚀 Memulai (Local Development)

### 1. Prasyarat
- Node.js v18 atau v20 LTS
- npm atau pnpm

### 2. Instalasi & Menjalankan Dev Server
```bash
# Clone repositori
git clone https://github.com/studiosigma/packnesia.git
cd packnesia

# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev
```
Buka browser di `http://localhost:5173`.

### 3. Build Produksi & SSG
```bash
# Mengompilasi React SPA, meregenerasi halaman statis produk, artikel blog, dan sitemap XML
npm run build

# Pratinjau hasil build produksi secara lokal
npm run preview
```

---

## 📁 Struktur Direktori

```text
packnesia/
├── public/                 # Aset statis publik
│   ├── images/             # Gambar WebP teroptimasi & logo
│   ├── blog/               # Pre-rendered blog pages (SSG)
│   ├── produk/             # Pre-rendered product Money Pages (SSG)
│   ├── robots.txt          # Aturan perayapan bot mesin pencari
│   ├── sitemap.xml         # XML Sitemap untuk Google Search Console
│   └── _headers            # Security & Caching headers
├── scripts/                # Script SSG Generator
│   ├── build-static-articles.js
│   ├── build-static-products.js
│   └── build-sitemap.js
├── src/                    # Source code frontend React
│   ├── components/         # Navbar, Hero, Products, Solutions, Coverage, dsb
│   ├── data/               # Data produk, portofolio, dan blog artikel
│   ├── App.jsx             # Root layout aplikasi
│   └── main.jsx            # Entry point React
├── index.html              # HTML shell dengan meta tags & JSON-LD Schemas
├── netlify.toml            # Konfigurasi deployment Netlify
├── vercel.json             # Konfigurasi deployment Vercel
├── tailwind.config.js      # Konfigurasi theme & warna Packnesia
└── vite.config.js          # Konfigurasi bundler Vite
```

---

## 🚢 Deployment ke Internet

### Vercel
```bash
npx vercel --prod
```

### Netlify
Upload folder `dist` secara manual di [app.netlify.com](https://app.netlify.com) atau hubungkan repositori GitHub ini.

---

## 📄 Lisensi

Hak Cipta &copy; 2026 **Packnesia - Custom Packaging Solutions**. Seluruh hak cipta dilindungi undang-undang.

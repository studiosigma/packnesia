import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import products data from file
const productsModulePath = path.join(rootDir, 'src', 'data', 'productsData.js');
const rawProductsFile = fs.readFileSync(productsModulePath, 'utf-8');

// Parse products by evaluating or using structured definition
import { products } from '../src/data/productsData.js';

// Load blog articles for Topic Cluster Internal Linking
const articlesJsonPath = path.join(rootDir, 'src', 'data', 'blogArticles.json');
const allBlogArticles = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf-8'));

const productRelatedArticlesMap = {
  'food-box': ['panduan-kemasan-foodgrade-kuliner', 'perbedaan-kraft-vs-ivory-biaya-cetak'],
  'paper-cup': ['tips-desain-paper-cup-kopi-instagrammable', 'panduan-kemasan-foodgrade-kuliner'],
  'coffee-packaging': ['tips-desain-paper-cup-kopi-instagrammable', 'panduan-kemasan-foodgrade-kuliner'],
  'paper-bag': ['perbedaan-kraft-vs-ivory-biaya-cetak', 'tips-desain-paper-cup-kopi-instagrammable'],
  'cake-box': ['perbedaan-kraft-vs-ivory-biaya-cetak', 'panduan-kemasan-foodgrade-kuliner'],
  'custom-box': ['perbedaan-kraft-vs-ivory-biaya-cetak', 'panduan-kemasan-foodgrade-kuliner']
};

function getRelatedArticlesHtml(productId) {
  const slugs = productRelatedArticlesMap[productId] || ['panduan-kemasan-foodgrade-kuliner'];
  const matched = allBlogArticles.filter(a => slugs.includes(a.slug));
  return matched.map(art => `
    <a href="/blog/${art.slug}/" class="p-4 rounded-2xl bg-white border border-orange-100 hover:border-brand-orange hover:shadow-md transition-all flex items-center gap-4 group">
      <div class="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <img src="${art.coverImage}" alt="${art.title}" loading="lazy" decoding="async" width="64" height="64" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div>
        <span class="text-[10px] font-bold uppercase text-brand-orange tracking-wider block">${art.category}</span>
        <h3 class="font-extrabold text-sm text-[#0E1D33] group-hover:text-brand-orange transition-colors line-clamp-2">${art.title}</h3>
        <span class="text-[11px] text-gray-400 mt-1 block">${art.readTime || '4 menit baca'} &bull; Baca Panduan &rarr;</span>
      </div>
    </a>
  `).join('');
}

console.log(`Building static Money Pages for ${products.length} product categories...`);

function getSeoTitle(product) {
  const titles = {
    'food-box': 'Cetak Food Box Murah & Custom Lunch Box Foodgrade Anti Minyak — Packnesia',
    'paper-cup': 'Cetak Paper Cup Kopi Custom & Gelas Minuman Tahan Panas — Packnesia',
    'coffee-packaging': 'Cetak Standing Pouch Kopi dengan Valve Aroma & Zipper — Packnesia',
    'paper-bag': 'Cetak Paper Bag Kraft Murah & Tas Belanja Takeaway Makanan — Packnesia',
    'cake-box': 'Dus Kue & Custom Cake Box Handle dengan Jendela Mika — Packnesia',
    'custom-box': 'Pabrik Custom Box, Hardbox Mewah & Corrugated Mailer Box — Packnesia'
  };
  return titles[product.id] || `Cetak ${product.title} Custom Foodgrade — Packnesia`;
}

function getSeoDescription(product) {
  return `Pabrik dan vendor cetak ${product.title} custom foodgrade berkualitas tinggi untuk brand F&B di Indonesia. Mulai dari ${product.moq}, pengerjaan ${product.leadTime}, free 3D mockup, dan kirim ke seluruh Indonesia.`;
}

function generateProductHtml(product) {
  const canonicalUrl = `https://packnesia.com/produk/${product.id}/`;
  const seoTitle = getSeoTitle(product);
  const seoDesc = getSeoDescription(product);
  const coverUrl = `https://packnesia.com${product.image}`;

  const sizesTableHtml = product.sizes.map(s => `
    <tr class="border-b border-gray-100 hover:bg-orange-50/40 transition-colors">
      <td class="py-3 px-4 font-bold text-sm text-[#0E1D33]">${s.name}</td>
      <td class="py-3 px-4 text-sm text-gray-600 font-mono">${s.dim}</td>
      <td class="py-3 px-4 text-center">
        ${s.popular ? '<span class="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#EE5D26] text-xs font-bold uppercase">Paling Laris</span>' : '<span class="text-xs text-gray-400">Tersedia</span>'}
      </td>
    </tr>
  `).join('');

  const materialsHtml = product.materials.map(m => `
    <li class="flex items-start gap-2.5 text-sm text-gray-700">
      <span class="w-2 h-2 rounded-full bg-[#EE5D26] mt-2 flex-shrink-0"></span>
      <span class="font-medium">${m}</span>
    </li>
  `).join('');

  const finishingHtml = product.finishing.map(f => `
    <span class="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-200/60">
      ${f}
    </span>
  `).join('');

  const popularForHtml = product.popularFor.map(p => `
    <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60 flex items-center gap-1.5">
      <span>✓</span>
      <span>${p}</span>
    </span>
  `).join('');

  const waMessage = encodeURIComponent(
    `Halo Packnesia, saya tertarik dengan produk ${product.title}.\n- Minat: ${product.title}\n- Halaman Produk: ${canonicalUrl}\nMohon info katalog lengkap, sampel, dan penawaran harganya ya!`
  );

  return `<!doctype html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary SEO Meta Tags (Money Page) -->
    <title>${seoTitle}</title>
    <meta name="title" content="${seoTitle}" />
    <meta name="description" content="${seoDesc}" />
    <meta name="keywords" content="${product.title}, cetak ${product.title}, kemasan ${product.title}, cetak ${product.title} jakarta, cetak ${product.title} surabaya, cetak ${product.title} bandung, cetak ${product.title} semarang, cetak ${product.title} medan, custom packaging f&b indonesia, packnesia" />
    <meta name="author" content="Packnesia" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / WhatsApp Preview -->
    <meta property="og:type" content="product" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${seoTitle}" />
    <meta property="og:description" content="${seoDesc}" />
    <meta property="og:image" content="${coverUrl}" />
    <meta property="og:site_name" content="Packnesia" />
    <meta property="og:locale" content="id_ID" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoTitle}" />
    <meta name="twitter:description" content="${seoDesc}" />
    <meta name="twitter:image" content="${coverUrl}" />

    <!-- Favicon & Tailwind -->
    <link rel="icon" type="image/png" href="/images/packnesia-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                orange: '#EE5D26',
                'orange-hover': '#DC4F19',
                navy: '#0E1D33',
                'navy-light': '#142540'
              }
            },
            fontFamily: {
              sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            }
          }
        }
      }
    </script>

    <!-- Schema.org Product Structured Data with AggregateRating for Google SERP -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Custom ${product.title} Packnesia",
      "image": "${coverUrl}",
      "description": "${seoDesc}",
      "brand": {
        "@type": "Brand",
        "name": "Packnesia"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Packnesia Custom Packaging Solutions",
        "url": "https://packnesia.com",
        "areaServed": ["Indonesia", "Jakarta", "Surabaya", "Bandung", "Semarang", "Medan", "Bali", "Makassar"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "320"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "IDR",
        "price": "${product.startPrice.replace(/[^0-9]/g, '')}",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "${canonicalUrl}"
      }
    }
    </script>
  </head>
  <body class="bg-[#FAF9F7] text-[#0E1D33] font-sans antialiased selection:bg-brand-orange selection:text-white">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-8">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <img src="/images/packnesia-logo-dark.webp" alt="Packnesia" width="160" height="32" class="h-8 w-auto" />
        </a>
        <div class="flex items-center gap-4 text-sm font-semibold">
          <a href="/produk/" class="text-brand-orange font-bold">Semua Produk</a>
          <a href="/blog/" class="text-gray-700 hover:text-brand-orange transition-colors hidden sm:inline">Blog Edukasi</a>
          <a href="https://wa.me/6287892251216?text=${waMessage}" target="_blank" class="px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange-hover transition-all active:scale-95">
            Minta Penawaran Harga &rarr;
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
        <a href="/" class="hover:text-brand-orange">Beranda</a>
        <span>&rsaquo;</span>
        <a href="/produk/" class="hover:text-brand-orange">Katalog Produk</a>
        <span>&rsaquo;</span>
        <span class="text-gray-800 font-bold truncate">${product.title}</span>
      </nav>

      <!-- Hero Product Section (2 Columns) -->
      <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <!-- Product Image Preview -->
        <div class="lg:col-span-5 flex items-center justify-center p-6 bg-orange-50/40 rounded-2xl border border-orange-100">
          <div class="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center">
            <img src="${product.image}" alt="${product.title} Packnesia" loading="eager" fetchpriority="high" decoding="async" width="320" height="320" class="w-full h-full object-contain filter drop-shadow-md" />
            <div class="absolute top-0 right-0 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-emerald-700 border border-emerald-200 shadow-xs">
              ✓ Food-Grade Certified
            </div>
          </div>
        </div>

        <!-- Product Summary Details -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-extrabold uppercase tracking-wider inline-block">
                ${product.category}
              </span>
              <span class="text-xs text-amber-500 font-bold flex items-center gap-1 ml-2">
                <span>★★★★★</span>
                <span class="text-gray-800">4.9 (320+ Review)</span>
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0E1D33] tracking-tight mt-2">
              Custom ${product.title}
            </h1>
            <p class="mt-3 text-base text-gray-600 leading-relaxed font-normal">
              ${product.shortDesc}
            </p>

            <!-- Price & Key Specs Cards -->
            <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div class="p-3.5 bg-orange-50/50 rounded-2xl border border-orange-200/60">
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Harga Mulai</span>
                <span class="text-lg font-black text-brand-orange">${product.startPrice}</span>
                <span class="text-[11px] text-gray-500 block">/ pcs</span>
              </div>
              <div class="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Min. Order (MOQ)</span>
                <span class="text-lg font-black text-[#0E1D33]">${product.moq}</span>
                <span class="text-[11px] text-gray-500 block">Ramah UMKM</span>
              </div>
              <div class="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 col-span-2 sm:col-span-1">
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Lead Time</span>
                <span class="text-base font-extrabold text-emerald-700">${product.leadTime}</span>
                <span class="text-[11px] text-gray-500 block">Produksi Cepat</span>
              </div>
            </div>

            <!-- Popular For Badges -->
            <div class="mt-6">
              <span class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Ideal Digunakan Untuk:</span>
              <div class="flex flex-wrap gap-2">
                ${popularForHtml}
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <a href="https://wa.me/6287892251216?text=${waMessage}" target="_blank" class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all">
              <span>Chat WhatsApp & Dapatkan Sampel</span>
              <span>&rarr;</span>
            </a>
            <a href="/#products-section" class="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs text-center transition-colors">
              Lihat Kategori Lain
            </a>
          </div>
        </div>
      </div>

      <!-- Specification Sections Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <!-- Sizes Table (7 Cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">Daftar Ukuran</span>
              <h2 class="text-xl font-extrabold text-[#0E1D33]">Pilihan Dimensi Standar & Custom</h2>
            </div>
          </div>
          <p class="text-xs text-gray-500 mb-4">Bisa cetak custom dimensi khusus sesuai bentuk wadah makanan brand Anda.</p>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th class="py-2.5 px-4 font-bold">Nama Ukuran</th>
                  <th class="py-2.5 px-4 font-bold">Dimensi (P x L x T)</th>
                  <th class="py-2.5 px-4 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                ${sizesTableHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Materials & Finishing (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">Pilihan Bahan</span>
            <h2 class="text-lg font-extrabold text-[#0E1D33] mb-4">Material Foodgrade Berkualitas</h2>
            <ul class="space-y-2.5">
              ${materialsHtml}
            </ul>
          </div>

          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">Teknik Cetak</span>
            <h2 class="text-lg font-extrabold text-[#0E1D33] mb-4">Opsi Finishing Premium</h2>
            <div class="flex flex-wrap gap-2">
              ${finishingHtml}
            </div>
          </div>
        </div>
      </div>

      <!-- Volume Discount Tier Banner -->
      <div class="bg-[#0E1D33] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">Tier Harga Grosir</span>
          <h3 class="text-2xl font-extrabold text-white">Makin Besar Volume, Makin Hemat HPP Anda</h3>
          <p class="text-sm text-gray-300 mt-1 max-w-lg">
            Dapatkan diskon pabrik bertingkat untuk pemesanan 5.000, 10.000, hingga 50.000+ pcs per bulan dengan garansi keseragaman warna dan bahan.
          </p>
        </div>
        <a href="https://wa.me/6287892251216?text=${encodeURIComponent(`Halo Packnesia, saya ingin simulasi harga grosir untuk produk ${product.title}`)}" target="_blank" class="px-7 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-orange-glow whitespace-nowrap active:scale-95 transition-all">
          Minta Simulasi Harga Grosir &rarr;
        </a>
      </div>

      <!-- Indonesian Logistics & Local Cities Coverage (Local SEO) -->
      <div class="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">Pengiriman Seluruh Indonesia</span>
            <h2 class="text-xl font-extrabold text-[#0E1D33]">Vendor Cetak ${product.title} untuk Kota Anda</h2>
          </div>
          <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            ✓ Kargo Cepat & Bergaransi
          </span>
        </div>
        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
          Kami memproduksi dan mengirimkan <strong>Custom ${product.title}</strong> ke seluruh kota di Indonesia: <strong>Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Semarang, Solo, Yogyakarta, Surabaya, Malang, Denpasar (Bali), Medan, Palembang, Pekanbaru, Makassar, Banjarmasin</strong>, dan sekitarnya melalui mitra kargo terpercaya (JNE Trucking, Indah Logistik, Dakota Cargo, Deliveree, Lalamove).
        </p>
        <div class="flex flex-wrap gap-2 text-[11px] text-gray-600">
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Jabodetabek: Same-day / Kargo Darat</span>
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Jawa Timur & Surabaya: 1 - 2 Hari</span>
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Jawa Barat & Bandung: 1 Hari</span>
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Bali & Denpasar: 2 - 3 Hari</span>
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Sumatera & Medan: 2 - 4 Hari</span>
          <span class="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg font-medium">Sulawesi & Makassar: 3 - 5 Hari</span>
        </div>
      </div>

      <!-- Related Educational Guides (Topic Cluster Internal Linking) -->
      <div class="mt-8 bg-[#FAF7F2]/80 rounded-3xl p-6 sm:p-8 border border-orange-100">
        <div class="flex items-center justify-between mb-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">Topic Cluster & Edukasi</span>
            <h2 class="text-xl font-extrabold text-[#0E1D33]">Panduan Ahli Seputar ${product.title}</h2>
          </div>
          <a href="/blog/" class="text-xs font-bold text-brand-orange hover:underline">Lihat Semua Artikel &rarr;</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${getRelatedArticlesHtml(product.id)}
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#0B1728] text-white py-8 border-t border-gray-800 text-center text-xs text-gray-400">
      <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>&copy; ${new Date().getFullYear()} Packnesia. All rights reserved.</div>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-white">Beranda</a>
          <a href="/produk/" class="hover:text-white">Katalog Produk</a>
          <a href="/blog/" class="hover:text-white">Blog</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

// Generate Catalog Hub /produk/index.html
function generateProductIndexHtml(allProducts) {
  const cardsHtml = allProducts.map(p => `
    <article class="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between p-6 group">
      <div>
        <div class="aspect-square w-full rounded-2xl overflow-hidden bg-orange-50/30 p-4 flex items-center justify-center mb-4">
          <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" width="280" height="280" class="w-full h-full object-contain group-hover:scale-105 transition-transform" />
        </div>
        <span class="text-[10px] font-extrabold uppercase text-brand-orange tracking-wider block mb-1">${p.category}</span>
        <h2 class="text-xl font-extrabold text-[#0E1D33] group-hover:text-brand-orange transition-colors">
          <a href="/produk/${p.id}/">${p.title}</a>
        </h2>
        <p class="text-xs text-gray-500 mt-2 line-clamp-2">${p.shortDesc}</p>
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-800">
          <span>Mulai ${p.startPrice}</span>
          <span class="text-gray-400">MOQ: ${p.moq}</span>
        </div>
      </div>
      <div class="mt-6">
        <a href="/produk/${p.id}/" class="w-full py-2.5 rounded-full bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-800 text-xs font-bold flex items-center justify-center gap-1 transition-all">
          <span>Lihat Spesifikasi & Ukuran</span>
          <span>&rarr;</span>
        </a>
      </div>
    </article>
  `).join('');

  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Katalog Kemasan Makanan & Minuman Custom Foodgrade — Packnesia</title>
    <meta name="description" content="Pilihan lengkap kemasan custom foodgrade untuk F&B: Food box, paper cup kopi, standing pouch valve, paper bag takeaway, cake box, dan custom hardbox berstandar FDA." />
    <link rel="canonical" href="https://packnesia.com/produk/" />
    <link rel="icon" type="image/png" href="/images/packnesia-icon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                orange: '#EE5D26',
                'orange-hover': '#DC4F19',
                navy: '#0E1D33'
              }
            },
            fontFamily: {
              sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            }
          }
        }
      }
    </script>
  </head>
  <body class="bg-[#FAF9F7] text-[#0E1D33] font-sans antialiased">
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-8">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <img src="/images/packnesia-logo-dark.webp" alt="Packnesia" width="160" height="32" class="h-8 w-auto" />
        </a>
        <div class="flex items-center gap-4 text-sm font-semibold">
          <a href="/" class="text-gray-700 hover:text-brand-orange">Beranda</a>
          <a href="/produk/" class="text-brand-orange font-bold">Katalog Produk</a>
          <a href="/blog/" class="text-gray-700 hover:text-brand-orange">Blog</a>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">Katalog Resmi Packnesia</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0E1D33]">Kemasan Custom Siap Cetak untuk Brand Anda</h1>
        <p class="mt-3 text-sm text-gray-500">Pilihan terlengkap bahan foodgrade anti-bocor, insulasi tahan panas, dan finishing mewah dengan harga langsung dari pabrik.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cardsHtml}
      </div>

      <!-- Indonesian Cities Coverage note on catalog hub -->
      <div class="mt-12 p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase text-brand-orange block">Pengiriman Seluruh Nusantara</span>
          <h3 class="text-base font-extrabold text-[#0E1D33]">Melayani Pemesanan Kemasan dari Seluruh Kota di Indonesia</h3>
          <p class="text-xs text-gray-500 mt-0.5">Jabodetabek, Surabaya, Bandung, Semarang, Medan, Bali, Makassar, Palembang, dan sekitarnya.</p>
        </div>
        <a href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20tanya%20ongkos%20kirim%20katalog%20kemasan%20ke%20kota%20saya" target="_blank" class="px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover whitespace-nowrap transition-all">
          Cek Ongkir Kargo &rarr;
        </a>
      </div>
    </main>

    <footer class="bg-[#0B1728] text-white py-8 border-t border-gray-800 text-center text-xs text-gray-400">
      &copy; ${new Date().getFullYear()} Packnesia. All rights reserved.
    </footer>
  </body>
</html>`;
}

// Execute static generation
const targets = [
  path.join(rootDir, 'public', 'produk'),
  path.join(rootDir, 'dist', 'produk')
];

for (const targetBase of targets) {
  fs.mkdirSync(targetBase, { recursive: true });

  // Generate Hub index.html
  fs.writeFileSync(path.join(targetBase, 'index.html'), generateProductIndexHtml(products), 'utf-8');

  // Generate each product Money Page
  for (const prod of products) {
    const prodDir = path.join(targetBase, prod.id);
    fs.mkdirSync(prodDir, { recursive: true });
    fs.writeFileSync(path.join(prodDir, 'index.html'), generateProductHtml(prod), 'utf-8');
    console.log(`  Generated: ${targetBase.replace(rootDir, '')}/${prod.id}/index.html`);
  }
}

console.log('All static product money pages successfully generated!');


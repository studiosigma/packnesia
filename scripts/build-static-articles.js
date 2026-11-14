import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const SITE_URL = process.env.SITE_URL || 'https://packnesia.vercel.app';

const articlesJsonPath = path.join(rootDir, 'src', 'data', 'blogArticles.json');
const rawData = fs.readFileSync(articlesJsonPath, 'utf-8');
const articles = JSON.parse(rawData);

console.log(`Building static HTML pages for ${articles.length} articles...`);

// Helper to convert Markdown subset to HTML
function markdownToHtml(md) {
  if (!md) return '';
  const lines = md.split('\n');
  let html = '';
  let inList = false;

  const parseInline = (str) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#EE5D26] font-bold hover:underline transition-colors">$1</a>');
  };

  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
      if (inList) { html += '</ul>\n'; inList = false; }
      continue;
    }

    if (trimmed.startsWith('### ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      html += `<h3 class="text-xl font-bold text-[#0E1D33] mt-6 mb-3">${trimmed.replace('### ', '')}</h3>\n`;
    } else if (trimmed.startsWith('## ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      html += `<h2 class="text-2xl sm:text-3xl font-extrabold text-[#0E1D33] mt-8 mb-4 pb-2 border-b border-gray-100">${trimmed.replace('## ', '')}</h2>\n`;
    } else if (trimmed.startsWith('> ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      const quoteText = parseInline(trimmed.replace('> ', ''));
      html += `<blockquote class="p-4 rounded-2xl bg-orange-50/80 border-l-4 border-[#EE5D26] text-gray-800 my-4 text-base italic leading-relaxed">${quoteText}</blockquote>\n`;
    } else if (trimmed.startsWith('- ')) {
      if (!inList) { html += '<ul class="my-4 space-y-2">\n'; inList = true; }
      const item = parseInline(trimmed.replace('- ', ''));
      html += `<li class="flex items-start gap-2 text-gray-700 text-base leading-relaxed"><span class="w-1.5 h-1.5 rounded-full bg-[#EE5D26] mt-2.5 flex-shrink-0"></span><span>${item}</span></li>\n`;
    } else {
      if (inList) { html += '</ul>\n'; inList = false; }
      const formatted = parseInline(trimmed);
      html += `<p class="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">${formatted}</p>\n`;
    }
  }

  if (inList) { html += '</ul>\n'; }
  return html;
}

// Generate single article HTML
function generateArticleHtml(art) {
  const contentHtml = markdownToHtml(art.content);
  const canonicalUrl = `${SITE_URL}/blog/${art.slug}/`;
  const coverUrl = art.coverImage.startsWith('http') ? art.coverImage : `${SITE_URL}${art.coverImage}`;

  return `<!doctype html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary SEO Meta Tags -->
    <title>${art.title} — Packnesia Blog</title>
    <meta name="title" content="${art.title} — Packnesia Blog" />
    <meta name="description" content="${art.excerpt}" />
    <meta name="keywords" content="${art.tags ? art.tags.join(', ') : ''}, custom packaging, packnesia" />
    <meta name="author" content="${art.author || 'Packnesia'}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / WhatsApp Preview -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${art.title}" />
    <meta property="og:description" content="${art.excerpt}" />
    <meta property="og:image" content="${coverUrl}" />
    <meta property="og:site_name" content="Packnesia" />
    <meta property="og:locale" content="id_ID" />
    <meta property="article:published_time" content="${art.date}" />
    <meta property="article:author" content="${art.author || 'Packnesia'}" />
    <meta property="article:section" content="${art.category}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${art.title}" />
    <meta name="twitter:description" content="${art.excerpt}" />
    <meta name="twitter:image" content="${coverUrl}" />

    <!-- Favicon & Styling -->
    <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
    <link rel="apple-touch-icon" href="/images/packnesia-icon.webp" />
    <link rel="preload" as="font" type="font/woff2" href="/fonts/plus-jakarta-sans-latin.woff2" crossorigin />
    <style>@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:400 800;font-display:swap;src:url('/fonts/plus-jakarta-sans-latin.woff2') format('woff2');}</style>
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

    <!-- Schema.org BlogPosting Structured Data for Google Rich Snippets -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${canonicalUrl}"
      },
      "headline": "${art.title.replace(/"/g, '\\"')}",
      "description": "${art.excerpt.replace(/"/g, '\\"')}",
      "image": "${coverUrl}",
      "author": {
        "@type": "Organization",
        "name": "${art.author || 'Packnesia'}",
        "url": "${SITE_URL}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Packnesia",
        "logo": {
          "@type": "ImageObject",
          "url": "${SITE_URL}/images/packnesia-logo-dark.webp"
        }
      },
      "datePublished": "${art.date}",
      "dateModified": "${art.date}"
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
          <a href="/#products-section" class="text-gray-700 hover:text-brand-orange transition-colors hidden sm:inline">Katalog Produk</a>
          <a href="/blog/" class="text-brand-orange font-bold">Blog & Edukasi</a>
          <a href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20membaca%20artikel%20${encodeURIComponent(art.title)}" target="_blank" class="px-4 py-2 rounded-full bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange-hover transition-all">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </header>

    <!-- Main Article Body -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
        <a href="/" class="hover:text-brand-orange">Beranda</a>
        <span>&rsaquo;</span>
        <a href="/blog/" class="hover:text-brand-orange">Blog</a>
        <span>&rsaquo;</span>
        <span class="text-gray-800 font-semibold truncate max-w-xs sm:max-w-md">${art.title}</span>
      </nav>

      <!-- Category & Title -->
      <div class="mb-6">
        <span class="inline-block px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-extrabold uppercase tracking-wider mb-3">
          ${art.category}
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1D33] tracking-tight leading-[1.15]">
          ${art.title}
        </h1>
        <div class="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium">
          <span>Oleh: <strong class="text-gray-800">${art.author || 'Tim Packnesia'}</strong></span>
          <span>•</span>
          <span>${art.date}</span>
          <span>•</span>
          <span>${art.readTime || '4 menit baca'}</span>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-8 bg-gray-100">
        <img src="${art.coverImage}" alt="${art.title}" loading="eager" fetchpriority="high" decoding="async" width="800" height="450" class="w-full h-full object-cover" />
      </div>

      <!-- Excerpt Box -->
      ${art.excerpt ? `
      <div class="p-5 rounded-2xl bg-orange-50 border-l-4 border-brand-orange mb-8 text-base text-gray-700 italic font-medium leading-relaxed">
        "${art.excerpt}"
      </div>` : ''}

      <!-- Article Content (Raw Pre-Rendered HTML for Googlebot) -->
      <article class="prose prose-lg max-w-none mb-12">
        ${contentHtml}
      </article>

      <!-- Tags & Share -->
      <div class="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-2">
          ${art.tags ? art.tags.map(t => `<span class="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold">#${t}</span>`).join('') : ''}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-500">Bagikan:</span>
          <a href="https://wa.me/?text=${encodeURIComponent(art.title + ' ' + canonicalUrl)}" target="_blank" class="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold flex items-center gap-1 shadow-xs hover:opacity-90">
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Related Product Solutions (Topic Cluster Internal Linking) -->
      <div class="mt-8 p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
        <span class="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-1">Katalog Produk Terkait</span>
        <h3 class="text-lg font-extrabold text-[#0E1D33] mb-4">Pilihan Kemasan Sesuai Panduan Ini:</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold">
          <a href="/produk/food-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Food Box Foodgrade</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/paper-cup/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Paper Cup Minuman</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/coffee-packaging/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Pouch Kopi Valve</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/paper-bag/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Paper Bag Kraft</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/cake-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Cake Box Bakery</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/plastic-cup/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Plastic Cup Minuman</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/paper-bowl/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Paper Bowl Berkuah</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/fastfood-pizza-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Box Pizza & Fast Food</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/martabak-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Dus Martabak PE</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/packaging-sticker/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Stiker Label Waterproof</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/perfume-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Box Parfum Luxury</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/souvenir-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Box Souvenir & Gable</span>
            <span>&rarr;</span>
          </a>
          <a href="/produk/custom-box/" class="p-3 bg-white rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-between">
            <span>Custom Box & Hardbox</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- Consultation CTA Banner -->
      <div class="mt-12 p-8 rounded-3xl bg-[#0E1D33] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
            Solusi Kemasan F&B Anda
          </span>
          <h3 class="text-2xl font-extrabold text-white">
            Wujudkan Kemasan Berkualitas untuk Brand Anda
          </h3>
          <p class="text-sm text-gray-300 mt-1 max-w-md">
            Konsultasikan ukuran, dieline 3D mockup gratis, dan dapatkan penawaran harga pabrik langsung.
          </p>
        </div>
        <a href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20tertarik%20konsultasi%20kemasan%20setelah%20membaca%20artikel%20${encodeURIComponent(art.title)}" target="_blank" class="px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-orange-glow whitespace-nowrap transition-all active:scale-95">
          Chat WhatsApp Sekarang &rarr;
        </a>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#0B1728] text-white py-8 border-t border-gray-800 text-center text-xs text-gray-400">
      <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>&copy; ${new Date().getFullYear()} Packnesia. All rights reserved.</div>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-white">Beranda</a>
          <a href="/blog/" class="hover:text-white">Blog</a>
          <a href="/#faq-section" class="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

// Generate Blog Hub Index HTML
function generateBlogIndexHtml(allArticles) {
  const cardsHtml = allArticles.map(art => `
    <article class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
      <div>
        <a href="/blog/${art.slug}/" class="block aspect-[16/10] overflow-hidden bg-gray-100 relative group">
          <img src="${art.coverImage}" alt="${art.title}" loading="lazy" decoding="async" width="400" height="250" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-brand-orange text-[10px] font-extrabold uppercase shadow-sm">
            ${art.category}
          </span>
        </a>
        <div class="p-6">
          <div class="text-xs text-gray-400 mb-2">${art.date} • ${art.readTime || '4 menit'}</div>
          <h2 class="font-extrabold text-lg text-[#0E1D33] hover:text-brand-orange transition-colors line-clamp-2">
            <a href="/blog/${art.slug}/">${art.title}</a>
          </h2>
          <p class="mt-2 text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed">
            ${art.excerpt}
          </p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-0">
        <a href="/blog/${art.slug}/" class="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
          Baca Selengkapnya &rarr;
        </a>
      </div>
    </article>
  `).join('');

  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog & Wawasan Kemasan F&B — Packnesia</title>
    <meta name="description" content="Kumpulan artikel, tips desain kemasan, panduan material foodgrade, dan strategi branding kemasan makanan dan minuman untuk pelaku bisnis F&B di Indonesia." />
    <link rel="canonical" href="${SITE_URL}/blog/" />
    <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
    <link rel="apple-touch-icon" href="/images/packnesia-icon.webp" />
    <link rel="preload" as="font" type="font/woff2" href="/fonts/plus-jakarta-sans-latin.woff2" crossorigin />
    <style>@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:400 800;font-display:swap;src:url('/fonts/plus-jakarta-sans-latin.woff2') format('woff2');}</style>
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
          <a href="/#products-section" class="text-gray-700 hover:text-brand-orange">Produk</a>
          <a href="/blog/" class="text-brand-orange font-bold">Blog</a>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">Packnesia Blog</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0E1D33]">Wawasan & Edukasi Kemasan F&B</h1>
        <p class="mt-3 text-sm text-gray-500">Kumpulan panduan praktis material foodgrade, tips desain packaging yang estetik, dan strategi meningkatkan penjualan lewat kemasan.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cardsHtml}
      </div>
    </main>

    <footer class="bg-[#0B1728] text-white py-8 border-t border-gray-800 text-center text-xs text-gray-400">
      &copy; ${new Date().getFullYear()} Packnesia. All rights reserved.
    </footer>
  </body>
</html>`;
}

// Execute static generation
// Target both public/blog/ (for Vite dev/preview server) and dist/blog/
const targets = [
  path.join(rootDir, 'public', 'blog'),
  path.join(rootDir, 'dist', 'blog')
];

for (const targetBase of targets) {
  fs.mkdirSync(targetBase, { recursive: true });

  // Generate Hub index.html
  fs.writeFileSync(path.join(targetBase, 'index.html'), generateBlogIndexHtml(articles), 'utf-8');

  // Generate each article HTML
  for (const art of articles) {
    const artDir = path.join(targetBase, art.slug);
    fs.mkdirSync(artDir, { recursive: true });
    fs.writeFileSync(path.join(artDir, 'index.html'), generateArticleHtml(art), 'utf-8');
    console.log(`  Generated: ${targetBase.replace(rootDir, '')}/${art.slug}/index.html`);
  }
}

console.log('All static blog pages successfully generated!');


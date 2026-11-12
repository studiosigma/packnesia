import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const SITE_URL = process.env.SITE_URL || 'https://packnesia.vercel.app';

// Import data
import { products } from '../src/data/productsData.js';
const articlesJsonPath = path.join(rootDir, 'src', 'data', 'blogArticles.json');
const articles = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf-8'));

export function generateSitemap() {
  const today = new Date().toISOString().slice(0, 10);

  const productUrls = products.map(p => `  <url>
    <loc>${SITE_URL}/produk/${p.id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');

  const articleUrls = articles.map(a => `  <url>
    <loc>${SITE_URL}/blog/${a.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Product Catalog Hub -->
  <url>
    <loc>${SITE_URL}/produk/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Product Money Pages -->
${productUrls}

  <!-- Blog Hub -->
  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Educational Blog Articles (Topic Cluster) -->
${articleUrls}

  <!-- Local SEO & Strategic Landing Sections -->
  <url>
    <loc>${SITE_URL}/#transformation-section</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#coverage-section</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#products-section</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#solutions-section</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#faq-section</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const targets = [
    path.join(rootDir, 'public', 'sitemap.xml'),
    path.join(rootDir, 'dist', 'sitemap.xml')
  ];

  targets.forEach(tgt => {
    try {
      const dir = path.dirname(tgt);
      if (fs.existsSync(dir)) {
        fs.writeFileSync(tgt, sitemapXml, 'utf-8');
        console.log(`Generated valid XML sitemap at: ${tgt}`);
      }
    } catch (e) {
      console.warn(`Could not write sitemap to ${tgt}:`, e.message);
    }
  });
}

// Run directly if invoked via node scripts/build-sitemap.js
generateSitemap();


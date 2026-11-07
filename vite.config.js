import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

function staticBlogApiPlugin() {
  const handleApi = (req, res, next) => {
    if (req.url === '/api/save-article' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => { body += chunk; });
      req.on('end', () => {
        try {
          const article = JSON.parse(body);
          const articlesPath = path.resolve(__dirname, 'src/data/blogArticles.json');
          const current = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
          const idx = current.findIndex((a) => a.id === article.id || (a.slug && a.slug === article.slug));

          let updated;
          if (idx >= 0) {
            updated = [...current];
            updated[idx] = { ...current[idx], ...article, updatedAt: new Date().toISOString() };
          } else {
            const newArt = {
              ...article,
              id: article.id || `art-${Date.now()}`,
              date: article.date || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
              createdAt: new Date().toISOString()
            };
            updated = [newArt, ...current];
          }

          fs.writeFileSync(articlesPath, JSON.stringify(updated, null, 2), 'utf-8');

          // Trigger build-static-articles script
          exec('node scripts/build-static-articles.js', (err) => {
            if (err) console.error('Error rebuilding static articles:', err);
            else console.log('Static articles successfully regenerated via API!');
          });

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, articles: updated }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }
    next();
  };

  return {
    name: 'static-blog-api',
    configureServer(server) {
      server.middlewares.use(handleApi);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleApi);
    }
  };
}

export default defineConfig({
  plugins: [react(), staticBlogApiPlugin()],
  server: {
    port: 3000,
    host: true
  }
});

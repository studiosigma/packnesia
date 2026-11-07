// Initial Seed Articles for Packnesia Blog from JSON store
import initialArticles from './blogArticles.json';

export const defaultArticles = initialArticles;

const STORAGE_KEY = 'packnesia_articles_v1';

// Get all articles (from localStorage if available, otherwise default)
export function getSavedArticles() {
  if (typeof window === 'undefined') return defaultArticles;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
      return defaultArticles;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultArticles;
  } catch (err) {
    console.error('Error reading articles from storage:', err);
    return defaultArticles;
  }
}

// Save or Update an article
export function saveArticle(article) {
  const current = getSavedArticles();
  const existsIdx = current.findIndex((a) => a.id === article.id);

  let updated;
  if (existsIdx >= 0) {
    // Update existing
    updated = [...current];
    updated[existsIdx] = { ...current[existsIdx], ...article, updatedAt: new Date().toISOString() };
  } else {
    // Insert new at the beginning
    const newArt = {
      ...article,
      id: article.id || `article-${Date.now()}`,
      date: article.date || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      createdAt: new Date().toISOString()
    };
    updated = [newArt, ...current];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

// Delete an article by id
export function deleteArticle(articleId) {
  const current = getSavedArticles();
  const filtered = current.filter((a) => a.id !== articleId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return filtered;
}

// Reset articles to default
export function resetArticlesToDefault() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
  return defaultArticles;
}


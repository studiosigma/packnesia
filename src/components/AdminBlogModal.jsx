import React, { useState, useEffect } from 'react';
import {
  X, Plus, Edit3, Trash2, Eye, Save, Sparkles, CheckCircle2,
  FileText, Image as ImageIcon, Tag, Folder, User, Clock, ArrowLeft,
  RotateCcw, Download, HelpCircle, Layers, ExternalLink
} from 'lucide-react';
import { getSavedArticles, saveArticle, deleteArticle, resetArticlesToDefault } from '../data/blogData';

export default function AdminBlogModal({ isOpen, onClose, onArticleSaved, onPreviewArticle }) {
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'editor'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [savedAlert, setSavedAlert] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    slug: '',
    category: 'Edukasi Bahan',
    coverImage: '/images/hero-packaging.webp',
    excerpt: '',
    content: '',
    author: 'Tim Packnesia',
    tags: '',
    readTime: '4 menit baca'
  });

  const [editorMode, setEditorMode] = useState('write'); // 'write' or 'preview'

  // Preset Cover Images from Packnesia assets
  const presetCovers = [
    { label: 'Hero Kemasan', url: '/images/hero-packaging.webp' },
    { label: 'Latte Cup Coffee', url: '/images/solutions-latte.webp' },
    { label: 'Food Box Burger', url: '/images/prod-food-box.webp' },
    { label: 'Paper Cup Takeaway', url: '/images/prod-paper-cup.webp' },
    { label: 'Coffee Pouch Valve', url: '/images/prod-coffee-bag.webp' },
    { label: 'Paper Bag Kraft', url: '/images/prod-paper-bag.webp' },
    { label: 'Dus Kue Bakery', url: '/images/prod-cake-box.webp' },
    { label: 'Custom Hardbox', url: '/images/prod-custom-box.webp' },
  ];

  const categories = ['Semua', 'Edukasi Bahan', 'Tips & Trik', 'Panduan Bisnis', 'Tren Desain', 'Studi Kasus'];

  useEffect(() => {
    if (isOpen) {
      loadArticles();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const loadArticles = () => {
    setArticles(getSavedArticles());
  };

  // Auto-generate slug from title
  const handleTitleChange = (val) => {
    const generatedSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: prev.id ? prev.slug : generatedSlug
    }));
  };

  // Quick insertion helpers for editor
  const insertFormatting = (prefix, suffix = '') => {
    const textarea = document.getElementById('article-content-textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selected = text.substring(start, end) || 'Teks contoh';

    const replacement = `${prefix}${selected}${suffix}`;
    const newContent = text.substring(0, start) + replacement + text.substring(end);

    setFormData({ ...formData, content: newContent });

    // Auto-calculate read time: ~200 words per minute
    const words = newContent.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    setFormData((prev) => ({
      ...prev,
      content: newContent,
      readTime: `${minutes} menit baca`
    }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 50);
  };

  const insertTemplate = () => {
    const template = `## Pendahuluan

Tuliskan latar belakang mengapa topik ini penting bagi pemilik bisnis F&B...

### 1. Poin Utama Pertama
Jelaskan solusi atau tips praktis secara terperinci:
- **Kelebihan utama**: Berikan alasan kuat
- **Contoh penerapan**: Bagaimana brand sukses menggunakannya

### 2. Poin Utama Kedua
Ulas aspek teknis pemilihan bahan kertas atau teknik cetak yang tepat...

### Kesimpulan & Rekomendasi
Ringkas pesan utama dan ajak pembaca berkonsultasi mengenai kebutuhan kemasan mereka bersama tim Packnesia.`;

    setFormData((prev) => ({
      ...prev,
      content: prev.content ? `${prev.content}\n\n${template}` : template,
      readTime: '4 menit baca'
    }));
  };

  const handleStartNew = () => {
    setFormData({
      id: '',
      title: '',
      slug: '',
      category: 'Tips & Trik',
      coverImage: '/images/hero-packaging.webp',
      excerpt: '',
      content: '',
      author: 'Tim Packnesia',
      tags: 'Kemasan, F&B, Branding',
      readTime: '3 menit baca'
    });
    setEditorMode('write');
    setActiveTab('editor');
  };

  const handleEdit = (art) => {
    setFormData({
      id: art.id,
      title: art.title,
      slug: art.slug || art.id,
      category: art.category || 'Tips & Trik',
      coverImage: art.coverImage || '/images/hero-packaging.webp',
      excerpt: art.excerpt || '',
      content: art.content || '',
      author: art.author || 'Tim Packnesia',
      tags: Array.isArray(art.tags) ? art.tags.join(', ') : (art.tags || ''),
      readTime: art.readTime || '4 menit baca'
    });
    setEditorMode('write');
    setActiveTab('editor');
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Yakin ingin menghapus artikel "${title}"?`)) {
      const updated = deleteArticle(id);
      setArticles(updated);
      if (onArticleSaved) onArticleSaved();
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Judul artikel wajib diisi!');
      return;
    }

    const tagList = formData.tags
      ? formData.tags.split(',').map((t) => t.trim().replace(/^#/, '')).filter(Boolean)
      : ['Kemasan'];

    const articleToSave = {
      ...formData,
      tags: tagList,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };

    saveArticle(articleToSave);

    // Sync to backend file system & auto-generate static HTML page
    fetch('/api/save-article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articleToSave)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Saved to static project files & generated HTML page:', data);
      })
      .catch((err) => {
        console.warn('Running in standalone mode:', err);
      });

    loadArticles();
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);

    if (onArticleSaved) onArticleSaved();
    setActiveTab('list');
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(articles, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `packnesia_articles_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleResetDefaults = () => {
    if (window.confirm('Kembalikan artikel ke default template Packnesia? Artikel buatan sendiri akan ditimpa.')) {
      const defs = resetArticlesToDefault();
      setArticles(defs);
      if (onArticleSaved) onArticleSaved();
    }
  };

  const filteredArticles = articles.filter((a) => {
    const matchQ =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (a.excerpt && a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchCat = selectedCategory === 'Semua' || a.category === selectedCategory;
    return matchQ && matchCat;
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh] my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0E1D33] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-orange-glow">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg">Packnesia CMS — Portal Artikel & Blog</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Admin Active
                </span>
              </div>
              <p className="text-xs text-gray-300">Kelola dan publikasikan artikel edukasi untuk meningkatkan SEO dan konversi</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Saved Alert Toast */}
        {savedAlert && (
          <div className="bg-emerald-600 text-white px-6 py-2.5 text-xs font-bold flex items-center justify-between animate-in slide-in-from-top">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Artikel berhasil disimpan dan langsung tayang di website!</span>
            </span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-2.5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'list'
                  ? 'bg-white text-[#0E1D33] shadow-sm border border-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-brand-orange" />
              <span>Semua Artikel ({articles.length})</span>
            </button>

            <button
              onClick={handleStartNew}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'editor'
                  ? 'bg-brand-orange text-white shadow-orange-glow'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{formData.id ? 'Edit Artikel' : 'Tulis Artikel Baru'}</span>
            </button>
          </div>

          {/* Backup / Tool actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              title="Download backup data artikel (JSON)"
              className="p-1.5 text-xs text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup</span>
            </button>
            <button
              onClick={handleResetDefaults}
              title="Kembalikan ke artikel bawaan"
              className="p-1.5 text-xs text-gray-500 hover:text-gray-800 bg-white border border-gray-200 rounded-lg flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ARTICLE LIST */}
        {activeTab === 'list' && (
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <input
                type="text"
                placeholder="Cari artikel berdasarkan judul atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange"
              />

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0E1D33] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Table / Cards */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
                <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <h4 className="font-bold text-gray-700 text-sm">Belum ada artikel ditemukan</h4>
                <p className="text-xs text-gray-400 mt-1">Mulai tulis artikel baru untuk meningkatkan traffic website Anda.</p>
                <button
                  onClick={handleStartNew}
                  className="mt-4 px-4 py-2 rounded-full bg-brand-orange text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tulis Artikel Pertama</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    className="p-4 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-20 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                        <img
                          src={art.coverImage || '/images/hero-packaging.webp'}
                          alt={art.title}
                          loading="lazy"
                          decoding="async"
                          width="80"
                          height="64"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-orange-100 text-brand-orange text-[10px] font-bold uppercase">
                            {art.category}
                          </span>
                          <span className="text-xs text-gray-400">{art.date}</span>
                          <span className="text-xs text-gray-400">• {art.readTime}</span>
                        </div>
                        <h4 className="font-bold text-sm text-[#0E1D33] group-hover:text-brand-orange transition-colors truncate max-w-xl">
                          {art.title}
                        </h4>
                        <p className="text-xs text-gray-500 truncate max-w-xl mt-0.5">
                          {art.excerpt || 'Klik edit untuk melengkapi ringkasan artikel...'}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5 self-end sm:self-auto flex-shrink-0">
                      <button
                        onClick={() => onPreviewArticle && onPreviewArticle(art)}
                        title="Lihat Pratinjau Tampilan"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(art)}
                        title="Edit Artikel"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(art.id, art.title)}
                        title="Hapus Artikel"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ARTICLE COMPOSER / EDITOR */}
        {activeTab === 'editor' && (
          <form onSubmit={handleSave} className="flex-1 flex flex-col overflow-hidden">
            {/* Editor Toolbar Header */}
            <div className="px-6 py-2.5 bg-gray-50/80 border-b border-gray-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Daftar Artikel</span>
                </button>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-bold text-gray-700">
                  {formData.id ? 'Mode Edit Artikel' : 'Tulis Artikel Baru'}
                </span>
              </div>

              {/* Mode Toggle: Tulis vs Pratinjau */}
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 p-0.5 rounded-lg flex items-center text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setEditorMode('write')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      editorMode === 'write' ? 'bg-white text-[#0E1D33] shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorMode('preview')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      editorMode === 'preview' ? 'bg-white text-[#0E1D33] shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Pratinjau
                  </button>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-orange-glow active:scale-95 transition-all cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan & Publikasikan</span>
                </button>
              </div>
            </div>

            {/* Editor Scrollable Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-5">
              {editorMode === 'write' ? (
                <>
                  {/* Title & Slug */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Judul Artikel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 5 Tips Memilih Kemasan Makanan Foodgrade untuk Bisnis Kuliner"
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-base text-[#0E1D33] focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Kategori</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold focus:outline-none focus:border-brand-orange bg-white"
                        >
                          <option value="Edukasi Bahan">Edukasi Bahan</option>
                          <option value="Tips & Trik">Tips & Trik</option>
                          <option value="Panduan Bisnis">Panduan Bisnis</option>
                          <option value="Tren Desain">Tren Desain</option>
                          <option value="Studi Kasus">Studi Kasus</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Penulis</label>
                        <input
                          type="text"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-orange"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Slug URL (SEO)</label>
                        <input
                          type="text"
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-mono text-gray-600 focus:outline-none focus:border-brand-orange"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cover Image Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center justify-between">
                      <span>Cover Image (Foto Utama Artikel)</span>
                      <span className="text-[11px] text-gray-400 font-normal">Pilih foto preset di bawah atau ketik link</span>
                    </label>

                    {/* Presets Gallery */}
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-2.5">
                      {presetCovers.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, coverImage: item.url })}
                          className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer ${
                            formData.coverImage === item.url ? 'border-brand-orange ring-2 ring-orange-200' : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <img src={item.url} alt={item.label} className="w-full h-full object-cover rounded-lg" />
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="URL Gambar Kustom (misal: /images/hero-packaging.webp atau https://...)"
                      value={formData.coverImage}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-600 focus:outline-none focus:border-brand-orange font-mono"
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1 flex items-center justify-between">
                      <span>Ringkasan Singkat (Excerpt / Meta Deskripsi)</span>
                      <span className="text-[11px] text-gray-400 font-normal">Tampil pada kartu artikel dan hasil pencarian Google</span>
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Tuliskan 1-2 kalimat ringkasan yang menarik minat pembaca..."
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-brand-orange leading-relaxed"
                    />
                  </div>

                  {/* Content Editor with Quick Toolbar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Konten Artikel (Format Markdown)
                      </label>

                      {/* Quick Formatting Buttons */}
                      <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                        <button
                          type="button"
                          onClick={() => insertFormatting('## ')}
                          className="px-2 py-0.5 text-xs font-extrabold bg-white hover:bg-orange-50 text-gray-800 rounded shadow-xs"
                          title="Heading 2"
                        >
                          H2
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('### ')}
                          className="px-2 py-0.5 text-xs font-extrabold bg-white hover:bg-orange-50 text-gray-800 rounded shadow-xs"
                          title="Heading 3"
                        >
                          H3
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('**', '**')}
                          className="px-2 py-0.5 text-xs font-bold bg-white hover:bg-orange-50 text-gray-800 rounded shadow-xs"
                          title="Tebal (Bold)"
                        >
                          B
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('*', '*')}
                          className="px-2 py-0.5 text-xs italic font-bold bg-white hover:bg-orange-50 text-gray-800 rounded shadow-xs"
                          title="Miring (Italic)"
                        >
                          I
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('- ')}
                          className="px-2 py-0.5 text-xs font-bold bg-white hover:bg-orange-50 text-gray-800 rounded shadow-xs"
                          title="Bullet List"
                        >
                          • List
                        </button>
                        <button
                          type="button"
                          onClick={insertTemplate}
                          className="px-2 py-0.5 text-xs font-bold bg-orange-100 text-brand-orange hover:bg-orange-200 rounded shadow-xs flex items-center gap-1"
                          title="Sisipkan Template Artikel"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Template</span>
                        </button>
                      </div>
                    </div>

                    <textarea
                      id="article-content-textarea"
                      rows="12"
                      required
                      placeholder="Tulis isi artikel di sini. Gunakan ## untuk Sub-judul, - untuk poin-poin..."
                      value={formData.content}
                      onChange={(e) => {
                        const val = e.target.value;
                        const words = val.split(/\s+/).filter(Boolean).length;
                        const mins = Math.max(1, Math.ceil(words / 180));
                        setFormData({
                          ...formData,
                          content: val,
                          readTime: `${mins} menit baca`
                        });
                      }}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm font-mono text-gray-800 focus:outline-none focus:border-brand-orange leading-relaxed"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">
                      Tag Artikel (pisahkan dengan koma)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Food Box, Kertas Kraft, UMKM Kuliner, Tips"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </>
              ) : (
                /* PREVIEW MODE */
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <span className="px-2.5 py-1 rounded-md bg-brand-orange text-white text-[10px] font-bold uppercase">
                    {formData.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#0E1D33] mt-2 mb-2">
                    {formData.title || 'Judul Artikel Anda'}
                  </h2>
                  <div className="text-xs text-gray-500 mb-4 flex items-center gap-3">
                    <span>Oleh: {formData.author}</span>
                    <span>• {formData.readTime}</span>
                  </div>

                  {formData.coverImage && (
                    <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-5">
                      <img src={formData.coverImage} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {formData.excerpt && (
                    <div className="p-3 bg-orange-50 rounded-xl border-l-4 border-brand-orange text-xs text-gray-700 italic mb-4">
                      "{formData.excerpt}"
                    </div>
                  )}

                  <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed font-sans">
                    {formData.content || 'Isi artikel masih kosong...'}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Actions */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Estimasi waktu baca: <span className="font-bold text-gray-800">{formData.readTime}</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-orange-glow active:scale-95 transition-all cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan & Tayangkan Artikel</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


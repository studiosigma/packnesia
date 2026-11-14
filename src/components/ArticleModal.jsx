import React, { useEffect, useState } from 'react';
import { X, Clock, Calendar, User, Tag, Share2, MessageCircle, Copy, Check, ArrowRight } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenConsultation }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}/#blog-section` : '';
  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(`*${article.title}*\nBaca selengkapnya di Packnesia Blog: ${currentUrl}`)}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simple Markdown renderer for headings, lists, bold text, and paragraphs
  const renderFormattedContent = (content) => {
    if (!content) return null;
    const lines = content.split('\n');

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-4" />;
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-lg font-bold text-[#0E1D33] mt-5 mb-2">
            {trimmed.replace('### ', '')}
          </h4>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-extrabold text-[#0E1D33] mt-7 mb-3 pb-2 border-b border-gray-100">
            {trimmed.replace('## ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('> ')) {
        const quoteContent = trimmed.replace('> ', '');
        return (
          <blockquote key={idx} className="p-4 rounded-2xl bg-orange-50/80 border-l-4 border-brand-orange text-gray-800 my-4 text-sm sm:text-base italic leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInline(quoteContent) }} />
          </blockquote>
        );
      }
      if (trimmed.startsWith('- ')) {
        const itemContent = trimmed.replace('- ', '');
        return (
          <li key={idx} className="ml-5 list-disc text-sm sm:text-base text-gray-700 my-1 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInline(itemContent) }} />
          </li>
        );
      }
      return (
        <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
          <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        </p>
      );
    });
  };

  const formatInline = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs text-brand-orange font-mono">$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-orange font-bold hover:underline">$1</a>');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-end sm:items-start justify-center p-0 sm:p-6 sm:pt-16 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-10 h-1 rounded-full bg-white/80 shadow-xs pointer-events-none" />

        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup artikel"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-gray-700 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full flex-shrink-0 bg-gray-100 overflow-hidden">
          <img
            src={article.coverImage || '/images/hero-packaging.webp'}
            alt={article.title}
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 text-white">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 inline-block shadow">
              {article.category}
            </span>
            <h1 className="text-lg sm:text-3xl md:text-4xl font-extrabold text-white leading-tight line-clamp-2 sm:line-clamp-none">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="px-5 sm:px-8 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0 flex flex-wrap items-center justify-between gap-2.5 text-xs text-gray-500 font-medium">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-orange" />
              <span>{article.author || 'Tim Packnesia'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.readTime || '4 menit baca'}</span>
            </span>
          </div>

          {/* Social Share Actions */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-semibold mr-1">Bagikan:</span>
            <a
              href={waShareUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-[#25D366] text-white hover:opacity-90 transition-opacity flex items-center justify-center"
              title="Bagikan ke WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={handleCopy}
              className="w-9 h-9 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer flex items-center justify-center"
              title="Salin Tautan"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain flex-1">
          {/* Excerpt Lead */}
          {article.excerpt && (
            <div className="p-4 rounded-2xl bg-orange-50/60 border-l-4 border-brand-orange mb-6 text-sm text-gray-700 font-medium leading-relaxed italic">
              "{article.excerpt}"
            </div>
          )}

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none">
            {renderFormattedContent(article.content)}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              {article.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Call-to-Action Box inside article */}
          <div className="mt-8 p-6 rounded-3xl bg-[#0E1D33] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                Kebutuhan Kemasan Bisnis Anda
              </span>
              <h4 className="text-lg font-extrabold text-white">
                Siap Wujudkan Kemasan Custom untuk Brand Anda?
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Konsultasikan ide desain, ukuran, dan pemilihan bahan bersama kami tanpa biaya.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-orange-glow whitespace-nowrap active:scale-95 transition-all cursor-pointer"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { Star, CheckCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { reviews, ratingStats } from '../data/reviewsData';

export default function TestimonialsSection({ onOpenConsultation }) {
  return (
    <section id="reviews-section" className="section-lazy py-12 md:py-20 bg-gradient-to-b from-white via-[#FAF9F7] to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Big Star Rating Overview */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Ulasan Klien Terverifikasi
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
              Dipercaya Lebih dari 1.000+ Pemilik Bisnis F&B
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xl">
              Lihat pengalaman nyata para pengusaha kedai kopi, bakery, resto, dan UMKM kuliner di seluruh Indonesia yang meningkatkan nilai jual brand mereka bersama Packnesia.
            </p>
          </div>

          {/* Golden Stars Score Card */}
          <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-gray-200/80 shadow-sm flex-shrink-0">
            <div className="text-center pr-4 border-r border-gray-100">
              <div className="text-3xl sm:text-4xl font-black text-[#0E1D33] leading-none">
                {ratingStats.average}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                Skor Rating
              </div>
            </div>

            <div>
              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-gray-800">
                {ratingStats.totalReviews.toLocaleString('id-ID')} Ulasan Terverifikasi
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{ratingStats.satisfactionRate} Tingkat Kepuasan Pelanggan</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonials Cards: Horizontal snap carousel on mobile, grid on md/lg */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 no-scrollbar scroll-smooth">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="w-[84%] flex-shrink-0 snap-start md:w-auto bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200/60">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Terverifikasi</span>
                    </span>
                  )}
                </div>

                {/* Comment Text with Quotation Accent */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-5 relative">
                  "{rev.comment}"
                </p>

                {/* Product Used Tag */}
                <div className="mb-5 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Produk yang Dipesan:
                  </span>
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-orange-50 text-brand-orange text-xs font-semibold">
                    {rev.productUsed}
                  </span>
                </div>
              </div>

              {/* Client Profile Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#0E1D33] truncate">
                    {rev.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 truncate">
                    {rev.role}, <strong className="text-gray-700">{rev.brand}</strong> ({rev.city})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Bar & CTA */}
        <div className="mt-10 p-6 rounded-3xl bg-[#0E1D33] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Ingin Brand F&B Anda Tampil Seistimewa Mereka?
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">
                Konsultasikan ide desain kemasan Anda dan dapatkan sampel gratis sebelum produksi massal.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-orange-glow whitespace-nowrap active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Mulai Konsultasi Gratis</span>
          </button>
        </div>

      </div>
    </section>
  );
}


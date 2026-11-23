import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../data/reviewsData';

export default function TestimonialsSection() {
  return (
    <section id="reviews-section" className="section-lazy py-12 md:py-20 bg-[#FAF9F7] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Testimoni Pelanggan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pengalaman Klien di Industri F&amp;B
          </h2>
          <p className="mt-2.5 text-sm text-gray-500">
            Cerita pelaku usaha kopi, bakery, dan restoran yang menggunakan kemasan produksi Packnesia untuk operasional harian maupun hampers.
          </p>
        </div>

        {/* 4 Testimonials Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 no-scrollbar scroll-smooth">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="w-[84%] flex-shrink-0 snap-start md:w-auto bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-gray-500 mb-4">
                  Item: <span className="text-[#0E1D33]">{rev.productUsed}</span>
                </p>

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
                    <h3 className="font-bold text-xs sm:text-sm text-[#0E1D33] truncate">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 truncate">
                      {rev.role}, <strong className="text-gray-700 font-semibold">{rev.brand}</strong> • {rev.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


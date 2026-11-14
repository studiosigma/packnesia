import React, { useState } from 'react';
import { Sparkles, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Zap, Tag } from 'lucide-react';

export default function BundlingSection({ onOpenConsultation }) {
  const [activeMobileIdx, setActiveMobileIdx] = useState(1);

  const mobileTabLabels = [
    '☕ Coffee',
    '🍔 Resto (Terlaris)',
    '🎂 Bakery',
  ];

  const bundles = [
    {
      id: 'coffee-pack',
      title: 'Coffee Shop Starter Pack',
      subtitle: 'Paket terlengkap untuk kedai kopi, roastery, & cafe modern.',
      image: '/images/portfolio-good-coffee.webp',
      badge: 'Terlaris #1 Kafe & Roastery',
      badgeColor: 'bg-amber-500',
      price: 'Rp 3.490.000',
      originalPrice: 'Rp 4.250.000',
      saveAmount: 'Hemat Rp 760.000',
      items: [
        '1.000 pcs Paper Cup 8 oz / 12 oz (Single / Double Wall)',
        '1.000 pcs Lid Tutup Cup Foodgrade (Flat / Dome / Sippy)',
        '500 pcs Standing Pouch Kopi + Degassing Valve Swiss',
        '500 pcs Brown Kraft Paper Bag Takeaway Tebal (Tali Putar)'
      ],
      bonus: 'Gratis 3D Digital Mockup & Setting Dieline Desain',
      popular: false,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Coffee Shop Starter Pack* (Rp 3.490.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    },
    {
      id: 'resto-pack',
      title: 'Resto & Delivery Pack',
      subtitle: 'Solusi kemasan takeaway anti-bocor untuk resto & cloud kitchen.',
      image: '/images/portfolio-urban-bites.webp',
      badge: 'Paling Populer Restoran F&B',
      badgeColor: 'bg-brand-orange',
      price: 'Rp 2.890.000',
      originalPrice: 'Rp 3.600.000',
      saveAmount: 'Hemat Rp 710.000',
      items: [
        '1.000 pcs Lunch Box / Food Box M (Kraft / Ivory Anti Minyak)',
        '500 pcs Paper Bag Kraft Base Lebar (Muat 2-3 Box Nasi)',
        '1.000 pcs Stiker Segel Kemasan (Quality & Hygiene Seal)',
        '500 pcs Sleeve / Belly Band Custom Promosi Brand'
      ],
      bonus: 'Gratis Lapisan Foodgrade PE Coating Anti Kuah & Minyak',
      popular: true,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Resto & Delivery Pack* (Rp 2.890.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    },
    {
      id: 'bakery-pack',
      title: 'Bakery & Cake Artisan Pack',
      subtitle: 'Kemasan estetik mewah untuk toko kue, donat, & hampers.',
      image: '/images/portfolio-sweet-moments.webp',
      badge: 'Spesial Toko Kue & Hampers',
      badgeColor: 'bg-rose-500',
      price: 'Rp 3.950.000',
      originalPrice: 'Rp 4.800.000',
      saveAmount: 'Hemat Rp 850.000',
      items: [
        '500 pcs Cake Box Kotak (20x20 / 22x22 cm) Jendela Bening',
        '500 pcs Donut / Pastry Box Lipat Otomatis (isi 6 atau 12)',
        '500 pcs Paper Bag Eksklusif dengan Pegangan Tali Katun',
        '500 pcs Hangtag & Thank You Card Brand Anda'
      ],
      bonus: 'Gratis Finishing Hot Stamping Gold/Silver Foil di Box Utama',
      popular: false,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Bakery & Cake Artisan Pack* (Rp 3.950.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    }
  ];

  return (
    <section id="bundling-section" className="section-lazy py-12 md:py-20 bg-[#F8FAFC] border-y border-slate-200/60 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Paket Bundling Hemat F&B</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Solusi Paket Kemasan Lengkap Siap Buka Usaha
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal max-w-2xl mx-auto">
            Hemat biaya hingga 25% dengan paket kemasan serasi satu brand. Bebas repot, satu pabrik, dan gratis 3D mockup sebelum cetak masal.
          </p>
        </div>

        {/* Mobile & Tablet Segmented Switcher */}
        <div className="lg:hidden mb-6">
          <div
            role="tablist"
            aria-label="Pilih paket bundling UMKM"
            className="grid grid-cols-3 gap-1.5 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-xs"
          >
            {bundles.map((bundle, idx) => {
              const isActive = activeMobileIdx === idx;
              return (
                <button
                  key={bundle.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveMobileIdx(idx)}
                  className={`min-h-[44px] px-2 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center text-center leading-tight ${
                    isActive
                      ? 'bg-[#0E1D33] text-white shadow-sm'
                      : 'text-gray-600 hover:text-[#0E1D33] hover:bg-gray-50'
                  }`}
                >
                  {mobileTabLabels[idx] || bundle.badge || `Paket ${idx + 1}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Bundling Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {bundles.map((bundle, idx) => {
            const waUrl = `https://wa.me/6287892251216?text=${encodeURIComponent(bundle.waMessage)}`;

            return (
              <div
                key={bundle.id}
                className={`rounded-3xl p-6 sm:p-7 flex-col justify-between transition-all duration-300 relative bg-white ${
                  activeMobileIdx === idx ? 'flex' : 'hidden lg:flex'
                } ${
                  bundle.popular
                    ? 'border-2 border-brand-orange shadow-2xl mt-2 lg:mt-0 lg:-translate-y-2.5'
                    : 'border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {bundle.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-orange-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Rekomendasi Utama</span>
                  </div>
                )}

                <div>
                  {/* Category Pill & Save Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${bundle.badgeColor}`}>
                      {bundle.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      {bundle.saveAmount}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden bg-gray-50 mb-5 relative group border border-gray-100">
                    <img
                      src={bundle.image}
                      alt={bundle.title}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="176"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                      <span className="text-white text-xs font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Kualitas Cetak Pabrik</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-[#0E1D33] leading-tight">
                    {bundle.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                    {bundle.subtitle}
                  </p>

                  {/* Price Block */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange">
                      {bundle.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {bundle.originalPrice}
                    </span>
                  </div>

                  {/* Package Checklist Items */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Rincian Paket Lengkap:
                    </div>
                    {bundle.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Tag */}
                  <div className="mt-4 p-3 rounded-xl bg-orange-50/80 border border-orange-200/60 flex items-start gap-2 text-xs text-orange-950 font-medium">
                    <Zap className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span><strong className="text-brand-orange font-bold">Bonus:</strong> {bundle.bonus}</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
                      bundle.popular
                        ? 'bg-[#25D366] hover:bg-[#20BE5A] text-white shadow-emerald-500/20'
                        : 'bg-[#0E1D33] hover:bg-brand-orange text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pesan Paket via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Bundle Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Butuh Kombinasi Kemasan Berbeda?
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0E1D33] mt-0.5">
              Konsultasikan Paket Custom Khusus Brand Anda
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
              Punya menu khusus (misal: rice bowl berkuah, kopi botol, atau hampers hari raya)? Tim spesialis Packnesia siap menyusunkan paket bundling dieline khusus dengan penawaran harga grosir terbaik.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-orange-glow whitespace-nowrap active:scale-95 transition-all cursor-pointer flex-shrink-0"
          >
            Susun Paket Custom Gratis &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}


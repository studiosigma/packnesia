import React, { useState } from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export default function BundlingSection({ onOpenConsultation }) {
  const [activeMobileIdx, setActiveMobileIdx] = useState(1);

  const mobileTabLabels = [
    'Kedai Kopi',
    'Resto (Favorit)',
    'Toko Kue',
  ];

  const bundles = [
    {
      id: 'coffee-pack',
      title: 'Paket Pemula Kedai Kopi',
      subtitle: 'Paket lengkap untuk kedai kopi, roastery, & kafe modern.',
      image: '/images/portfolio-good-coffee.webp',
      tag: 'Kafe & Roastery',
      price: 'Rp 3.490.000',
      originalPrice: 'Rp 4.250.000',
      saveAmount: 'Hemat Rp 760.000',
      items: [
        '1.000 pcs Paper Cup 8 oz / 12 oz (Single / Double Wall)',
        '1.000 pcs Tutup Cup Foodgrade (Datar / Cembung / Sippy)',
        '500 pcs Standing Pouch Kopi + Katup Aroma Swiss',
        '500 pcs Paper Bag Brown Kraft Takeaway Tebal'
      ],
      bonus: 'Termasuk 3D Digital Mockup & Setting Pola Dieline Desain',
      popular: false,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Pemula Kedai Kopi* (Rp 3.490.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    },
    {
      id: 'resto-pack',
      title: 'Paket Resto & Pesan Antar',
      subtitle: 'Solusi kemasan takeaway anti-bocor untuk resto & cloud kitchen.',
      image: '/images/portfolio-urban-bites.webp',
      tag: 'Paling Banyak Dipilih',
      price: 'Rp 2.890.000',
      originalPrice: 'Rp 3.600.000',
      saveAmount: 'Hemat Rp 710.000',
      items: [
        '1.000 pcs Lunch Box / Food Box M (Kraft / Ivory Anti Minyak)',
        '500 pcs Paper Bag Kraft Alas Lebar (Muat 2-3 Box Nasi)',
        '1.000 pcs Stiker Segel Kemasan (Segel Higienis)',
        '500 pcs Sleeve / Sabuk Box Custom Promosi Brand'
      ],
      bonus: 'Sudah termasuk lapisan PE Coating Foodgrade anti minyak',
      popular: true,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Resto & Pesan Antar* (Rp 2.890.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    },
    {
      id: 'bakery-pack',
      title: 'Paket Toko Kue & Hampers',
      subtitle: 'Kemasan rapi dan elegan untuk toko kue, donat, & bingkisan.',
      image: '/images/portfolio-sweet-moments.webp',
      tag: 'Toko Kue & Hampers',
      price: 'Rp 3.950.000',
      originalPrice: 'Rp 4.800.000',
      saveAmount: 'Hemat Rp 850.000',
      items: [
        '500 pcs Cake Box Kotak (20x20 / 22x22 cm) Jendela Bening',
        '500 pcs Dus Donat / Pastry Lipat Otomatis (isi 6 atau 12)',
        '500 pcs Paper Bag Eksklusif Tali Katun',
        '500 pcs Hangtag & Kartu Ucapan Terima Kasih Brand Anda'
      ],
      bonus: 'Termasuk finishing Hot Stamping Foil Emas/Perak di box utama',
      popular: false,
      waMessage: 'Halo Packnesia, saya tertarik pesan *Paket Toko Kue & Hampers* (Rp 3.950.000). Mohon info detail spesifikasi dan jadwal konsultasi desainnya ya.'
    }
  ];

  return (
    <section id="bundling-section" className="section-lazy py-12 md:py-20 bg-[#F8F9FA] border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Paket Bundling Usaha
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Paket Kemasan Lengkap Siap Buka Usaha
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal">
            Lebih hemat hingga 25% dengan satu set kemasan serasi untuk operasional harian bisnis kuliner Anda.
          </p>
        </div>

        {/* Mobile & Tablet Segmented Switcher */}
        <div className="lg:hidden mb-6">
          <div
            role="tablist"
            aria-label="Pilih paket bundling UMKM"
            className="grid grid-cols-3 gap-1.5 p-1 bg-white border border-gray-200 rounded-xl"
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
                  className={`min-h-[42px] px-2 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center text-center leading-tight ${
                    isActive
                      ? 'bg-[#0E1D33] text-white'
                      : 'text-gray-600 hover:text-[#0E1D33]'
                  }`}
                >
                  {mobileTabLabels[idx] || bundle.tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Bundling Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {bundles.map((bundle, idx) => {
            const waUrl = `https://wa.me/6287892251216?text=${encodeURIComponent(bundle.waMessage)}`;

            return (
              <div
                key={bundle.id}
                className={`rounded-2xl p-6 flex-col justify-between bg-white ${
                  activeMobileIdx === idx ? 'flex' : 'hidden lg:flex'
                } ${
                  bundle.popular
                    ? 'border-2 border-[#0E1D33] shadow-lg'
                    : 'border border-gray-200 shadow-xs'
                }`}
              >
                <div>
                  {/* Category Header Label */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${bundle.popular ? 'text-brand-orange' : 'text-gray-500'}`}>
                      {bundle.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {bundle.saveAmount}
                    </span>
                  </div>

                  {/* Clean Thumbnail Image */}
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100 mb-5 border border-gray-100">
                    <img
                      src={bundle.image}
                      alt={bundle.title}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="176"
                      className="w-full h-full object-cover"
                    />
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
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0E1D33]">
                      {bundle.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {bundle.originalPrice}
                    </span>
                  </div>

                  {/* Package Checklist Items */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Rincian Paket:
                    </div>
                    {bundle.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Included Note */}
                  <p className="mt-4 pt-3 border-t border-dashed border-gray-200 text-xs text-gray-600">
                    <strong className="text-[#0E1D33]">Catatan:</strong> {bundle.bonus}
                  </p>
                </div>

                {/* CTA Action */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors ${
                      bundle.popular
                        ? 'bg-brand-orange hover:bg-brand-orange-hover text-white'
                        : 'bg-[#0E1D33] hover:bg-[#1A2E4F] text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan Paket via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


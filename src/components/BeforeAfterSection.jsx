import React, { useState, useRef } from 'react';
import { Sparkles, TrendingUp, Instagram, Star, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

export default function BeforeAfterSection({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const caseStudies = [
    {
      id: 'coffee-cup',
      category: 'Coffee Shop & Cafe',
      client: 'GOOD COFFEE',
      location: 'Jakarta Selatan',
      title: 'Transformasi Gelas Kopi Takeaway: Dari Plastik Polos ke Signature Double-Wall Cup',
      beforeImg: '/images/before-coffee-cup.webp',
      afterImg: '/images/portfolio-good-coffee.webp',
      beforeStats: {
        price: 'Rp 18.000',
        perception: 'Kopi Pinggir Jalan / Biasa',
        socialShares: 'Hampir tidak pernah di-tag di Instagram',
        cons: ['Gelas cepat dingin & berembun basah', 'Tidak ada identitas brand yang diingat', 'Tampak generik di aplikasi online']
      },
      afterStats: {
        price: 'Rp 34.000',
        perception: 'Specialty Artisan Cafe Premium',
        socialShares: 'Rata-rata 25+ mention IG Story per hari',
        pros: ['Insulasi double-wall nyaman digenggam', 'Warna CMYK kontras tinggi & fotogenik', 'Pelanggan bangga membawa gelas di jalan']
      },
      impactHighlight: '+42% Kenaikan Omzet Takeaway & 3.5x Lipat Postingan Medsos'
    },
    {
      id: 'food-box',
      category: 'Fast Casual Dining',
      client: 'URBAN BITES',
      location: 'Bandung',
      title: 'Upgrade Dus Makanan Takeaway: Dari Styrofoam Polos ke Eco Brown Kraft Food Box',
      beforeImg: '/images/before-food-box.webp',
      afterImg: '/images/portfolio-urban-bites.webp',
      beforeStats: {
        price: 'Rp 25.000',
        perception: 'Warung Makan Biasa / Cepat Saji Standar',
        socialShares: 'Jarang difoto karena kemasan berminyak',
        cons: ['Makanan jadi lembek akibat uap panas', 'Bahan tidak ramah lingkungan', 'Bocor minyak tembus ke kantong kresek']
      },
      afterStats: {
        price: 'Rp 48.000',
        perception: 'Modern Gourmet Fast Casual Dining',
        socialShares: 'Viral review di TikTok & Food Vlogger',
        pros: ['Ventilasi uap menjaga kerenyahan makanan', 'Lapisan PE foodgrade 100% anti-bocor minyak', 'Kesan eco-friendly meningkatkan loyalitas']
      },
      impactHighlight: '+38% Repeat Order di GoFood/GrabFood & Rating Naik Jadi 4.9 Bintang'
    },
    {
      id: 'cake-box',
      category: 'Artisan Bakery & Pastry',
      client: 'SWEET MOMENTS',
      location: 'Surabaya',
      title: 'Evolusi Kotak Kue & Hampers: Dari Kardus Kusam ke Dus Pastel Mika Berhandle',
      beforeImg: '/images/before-cake-box.webp',
      afterImg: '/images/portfolio-sweet-moments.webp',
      beforeStats: {
        price: 'Rp 45.000',
        perception: 'Kue Rumahan Tanpa Standar Higienis',
        socialShares: 'Pelanggan harus buka dus dulu baru foto kue',
        cons: ['Kue tidak kelihatan dari luar', 'Perlu kantong kresek tambahan yang licin', 'Mudah penyok saat dibawa kurir motor']
      },
      afterStats: {
        price: 'Rp 95.000',
        perception: 'Luxury Hampers & Gift Box Premium',
        socialShares: 'Langsung jadi kado ulang tahun & hantaran',
        pros: ['High-clarity window mika memperlihatkan estetik kue', 'Integrated handle kokoh tanpa perlu plastik', 'Ivory foodgrade tahan kelembaban kulkas']
      },
      impactHighlight: '+110% Kenaikan Nilai Jual Menu & Laris Manis Jadi Hampers Hari Raya'
    }
  ];

  const current = caseStudies[activeTab];

  // Drag interaction handler
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  const waTransformMessage = encodeURIComponent(
    `Halo Packnesia, saya tertarik dengan transformasi kemasan untuk bisnis ${current.category} seperti studi kasus ${current.client}. Boleh konsultasi desain dan estimasi harganya?`
  );

  return (
    <section id="transformation-section" className="py-16 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              Kemasan Menentukan Penjualan
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Lihat Transformasi Nyata Brand Bersama Packnesia
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
            Geser slider di bawah ini untuk melihat perbandingan langsung antara kemasan polos biasa dengan kemasan custom Packnesia yang terbukti melipatgandakan persepsi harga dan omzet resto.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
                activeTab === idx
                  ? 'bg-[#0E1D33] text-white shadow-md scale-102'
                  : 'bg-[#F6F7F9] text-gray-600 hover:bg-gray-200/70 border border-gray-200/70'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === idx ? 'bg-brand-orange animate-pulse' : 'bg-gray-400'}`} />
              <span>{cs.category}</span>
              <span className="text-[11px] opacity-70">({cs.client})</span>
            </button>
          ))}
        </div>

        {/* Main Transformation Card */}
        <div className="bg-[#FAF9F7] rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Before/After Split Slider (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Slider Container */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative aspect-square sm:aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-4 border-white select-none cursor-ew-resize bg-gray-100 group"
            >
              {/* 1. AFTER Image (Base Layer - Right / Full) */}
              <div className="absolute inset-0 w-full h-full bg-orange-50/40">
                <img
                  src={current.afterImg}
                  alt={`${current.client} Kemasan Custom Packnesia (Sesudah)`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover pointer-events-none"
                />
                {/* After Pill Badge */}
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-1.5 z-10">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>Sesudah (Packnesia)</span>
                </div>
              </div>

              {/* 2. BEFORE Image (Clipped Overlay - Left Side) */}
              <div
                className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={current.beforeImg}
                    alt={`${current.client} Kemasan Standar (Sebelum)`}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                    className="absolute top-0 left-0 w-full h-full object-cover max-w-none pointer-events-none filter grayscale contrast-90"
                    style={{
                      width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                      maxWidth: 'none'
                    }}
                  />
                  {/* Before Pill Badge */}
                  <div className="absolute top-4 left-4 bg-[#0E1D33]/90 text-gray-200 text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-white/20 z-10">
                    <span>Sebelum (Polos)</span>
                  </div>
                </div>
              </div>

              {/* 3. Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0E1D33] text-white border-2 border-white shadow-xl flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                  <span className="text-[10px] tracking-tighter">&larr;&rarr;</span>
                </div>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-medium pointer-events-none z-10 flex items-center gap-1">
                <span>Geser ke kiri / kanan</span>
              </div>
            </div>

            {/* Accessible Range Input slider for keyboard & screen readers */}
            <div className="w-full max-w-md mt-4 flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Sebelum</span>
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Before after comparison slider"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <span className="text-[11px] font-bold text-brand-orange uppercase">Sesudah</span>
            </div>
          </div>

          {/* Right Column: Key Transformation Metrics & Insights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Client Tag & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-orange-100 text-brand-orange text-xs font-black uppercase">
                  {current.client}
                </span>
                <span className="text-xs text-gray-500 font-medium">{current.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E1D33] tracking-tight leading-snug">
                {current.title}
              </h3>

              {/* Price Perception Comparison Card */}
              <div className="mt-5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Harga Jual Menu Sebelum</span>
                  <span className="text-base sm:text-lg font-black text-gray-400 line-through">{current.beforeStats.price}</span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">{current.beforeStats.perception}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200">
                  <span className="text-[10px] font-bold uppercase text-brand-orange block">Harga Jual Menu Sesudah</span>
                  <span className="text-base sm:text-lg font-black text-brand-orange">{current.afterStats.price}</span>
                  <span className="text-[11px] text-gray-700 font-semibold block mt-0.5">{current.afterStats.perception}</span>
                </div>
              </div>

              {/* Before vs After Bullet Contrast */}
              <div className="mt-5 space-y-2.5 text-xs sm:text-sm">
                <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-red-900">
                  <span className="font-bold block mb-1">Kelemahan Kemasan Polos Sebelumnya:</span>
                  <ul className="space-y-1 list-disc ml-4 text-red-800 text-xs">
                    {current.beforeStats.cons.map((con, idx) => (
                      <li key={idx}>{con}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-emerald-900">
                  <span className="font-bold block mb-1">Keunggulan Setelah Cetak Packnesia:</span>
                  <ul className="space-y-1 list-disc ml-4 text-emerald-800 text-xs">
                    {current.afterStats.pros.map((pro, idx) => (
                      <li key={idx}>{pro}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlight Impact Badge */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#0E1D33] text-white flex items-center gap-3 shadow-md">
                <TrendingUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-xs font-bold leading-relaxed">
                  {current.impactHighlight}
                </span>
              </div>
            </div>

            {/* Consultation Action CTA */}
            <div className="mt-6 pt-5 border-t border-gray-200/80 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-orange-glow transition-all active:scale-95 cursor-pointer"
              >
                <span>Upgrade Kemasan Brand Anda</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6281234567890?text=${waTransformMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Chat WhatsApp untuk Konsultasi Desain"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { Check, Minus, ArrowRight, MessageCircle } from 'lucide-react';

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
      title: 'Dari Plastik Polos ke Double-Wall Custom Paper Cup',
      beforeImg: '/images/before-coffee-cup.webp',
      afterImg: '/images/portfolio-good-coffee.webp',
      beforeStats: {
        price: 'Rp 18.000',
        perception: 'Kopi Takeaway Standar',
        cons: ['Gelas cepat dingin & berembun basah', 'Tidak ada identitas brand yang diingat', 'Tampak generik di aplikasi pesan-antar']
      },
      afterStats: {
        price: 'Rp 34.000',
        perception: 'Specialty Artisan Cafe',
        pros: ['Insulasi double-wall nyaman digenggam', 'Cetak CMYK kontras tinggi & presisi', 'Meningkatkan daya tarik foto pelanggan']
      },
      impactHighlight: 'Membantu menaikkan persepsi nilai produk hingga hampir 2x lipat dan mendorong repeat order takeaway.'
    },
    {
      id: 'food-box',
      category: 'Fast Casual Dining',
      client: 'URBAN BITES',
      location: 'Bandung',
      title: 'Dari Kemasan Polos ke Eco Brown Kraft Food Box',
      beforeImg: '/images/before-food-box.webp',
      afterImg: '/images/portfolio-urban-bites.webp',
      beforeStats: {
        price: 'Rp 25.000',
        perception: 'Porsi Makan Standar',
        cons: ['Makanan cepat lembek akibat uap panas', 'Bahan kurang tahan minyak berlebih', 'Kurang rapi saat pengiriman kurir']
      },
      afterStats: {
        price: 'Rp 48.000',
        perception: 'Modern Fast Casual',
        pros: ['Ventilasi uap menjaga tekstur makanan', 'Lapisan PE foodgrade tahan minyak', 'Tampilan bersih meningkatkan rating delivery']
      },
      impactHighlight: 'Kemasan anti-rembes menjaga keutuhan hidangan hingga sampai ke tangan pelanggan.'
    },
    {
      id: 'cake-box',
      category: 'Artisan Bakery & Pastry',
      client: 'SWEET MOMENTS',
      location: 'Surabaya',
      title: 'Dari Kardus Kusam ke Dus Kue Berhandle & Window',
      beforeImg: '/images/before-cake-box.webp',
      afterImg: '/images/portfolio-sweet-moments.webp',
      beforeStats: {
        price: 'Rp 45.000',
        perception: 'Kemasan Rumahan Polos',
        cons: ['Kue tidak terlihat sebelum dus dibuka', 'Perlu kantong plastik tambahan saat dibawa', 'Struktur tipis mudah penyok di jalan']
      },
      afterStats: {
        price: 'Rp 95.000',
        perception: 'Gift & Hampers Bakery',
        pros: ['Window mika bening menampilkan kue', 'Gagang jinjing menyatu tanpa kantong tambahan', 'Ivory 350gsm kokoh & higienis']
      },
      impactHighlight: 'Memudahkan pelanggan membawa pulang langsung sebagai hampers dan kado siap kirim.'
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
    <section id="transformation-section" className="section-lazy py-12 md:py-20 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Perbandingan Sebelum &amp; Sesudah
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Dampak Kemasan Custom untuk Brand Anda
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
            Geser pembanding berikut untuk melihat perbedaan kemasan polos biasa dengan kemasan cetak custom Packnesia.
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
              className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#0E1D33] text-white'
                  : 'bg-[#F6F7F9] text-gray-600 hover:bg-gray-200 border border-gray-200/80'
              }`}
            >
              <span>{cs.category}</span>
              <span className="text-[11px] opacity-75">({cs.client})</span>
            </button>
          ))}
        </div>

        {/* Main Transformation Card */}
        <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-8 lg:p-10 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
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
              className="relative aspect-square sm:aspect-[4/3] w-full max-w-lg rounded-xl overflow-hidden shadow-md border-2 border-white select-none touch-pan-y cursor-ew-resize bg-gray-100 group"
            >
              {/* 1. AFTER Image (Base Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={current.afterImg}
                  alt={`${current.client} Kemasan Custom Packnesia (Sesudah)`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <span className="absolute top-3.5 right-3.5 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm z-10">
                  Sesudah — Custom
                </span>
              </div>

              {/* 2. BEFORE Image (Overlay) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={current.beforeImg}
                  alt={`${current.client} Kemasan Standar (Sebelum)`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover pointer-events-none filter grayscale contrast-90"
                />
                <span className="absolute top-3.5 left-3.5 bg-[#0E1D33] text-gray-100 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm z-10">
                  Sebelum — Polos
                </span>
              </div>

              {/* 3. Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0E1D33] text-white border-2 border-white shadow-md flex items-center justify-center font-bold text-xs">
                  <span className="text-[10px] tracking-tighter">&larr;&rarr;</span>
                </div>
              </div>
            </div>

            {/* Accessible Range Input */}
            <div className="w-full max-w-md mt-4 flex items-center gap-3 min-h-[40px]">
              <span className="text-[11px] font-bold text-gray-500 uppercase">Polos</span>
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Before after comparison slider"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <span className="text-[11px] font-bold text-brand-orange uppercase">Custom</span>
            </div>
          </div>

          {/* Right Column: Clean Editorial Comparison (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <span className="text-brand-orange">{current.client}</span>
                <span>•</span>
                <span>{current.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E1D33] tracking-tight leading-snug">
                {current.title}
              </h3>

              {/* Clean Side-by-Side Specs Table */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-gray-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Kemasan Polos
                  </span>
                  <div className="mt-1 text-base font-bold text-gray-400 line-through">
                    {current.beforeStats.price}
                  </div>
                  <div className="text-xs font-medium text-gray-500 mb-3">
                    {current.beforeStats.perception}
                  </div>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-2.5 text-xs text-gray-500">
                    {current.beforeStats.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Minus className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 border-t-2 border-t-brand-orange">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                    Custom Packnesia
                  </span>
                  <div className="mt-1 text-base font-extrabold text-[#0E1D33]">
                    {current.afterStats.price}
                  </div>
                  <div className="text-xs font-semibold text-gray-700 mb-3">
                    {current.afterStats.perception}
                  </div>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-2.5 text-xs text-gray-700">
                    {current.afterStats.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Restrained editorial summary note */}
              <p className="mt-4 pl-3 border-l-2 border-brand-orange text-xs text-gray-600 leading-relaxed">
                {current.impactHighlight}
              </p>
            </div>

            {/* Consultation Action CTA */}
            <div className="mt-6 pt-5 border-t border-gray-200/80 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Konsultasikan Kemasan Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6287892251216?text=${waTransformMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gray-300 bg-white hover:border-[#25D366] hover:text-[#25D366] text-gray-700 text-xs font-semibold transition-colors cursor-pointer"
                title="Chat WhatsApp untuk Konsultasi Desain"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Harga</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

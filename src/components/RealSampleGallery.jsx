import React, { useState, useEffect } from 'react';
import { Check, MessageCircle, Eye, X, ArrowRight } from 'lucide-react';

export default function RealSampleGallery({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSample, setSelectedSample] = useState(null);

  useEffect(() => {
    if (!selectedSample) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedSample(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedSample]);

  const samples = [
    {
      id: 'sample-foodbox',
      category: 'food',
      title: 'Kraft Food Box Lunch M',
      subtitle: 'Ketahanan ekstra untuk makanan berminyak & berkuah hangat.',
      image: '/images/sample-kraft-foodbox.webp',
      badge: 'Anti Rembes Minyak',
      material: 'Kraft Paper 325 gsm + PE Foodgrade Coating',
      finishing: 'Offset CMYK 4 Warna + Dieline Kunci Otomatis',
      specs: [
        'Lapisan PE Foodgrade tahan suhu panas hingga 100°C',
        'Kuncian interlocking tanpa lem kimia berbahaya',
        'Sertifikasi Halal & Food-Grade aman bersentuhan langsung dengan makanan',
        'Telah diuji rembes selama 4 jam dengan rendang & kuah baso'
      ]
    },
    {
      id: 'sample-cup',
      category: 'cup',
      title: 'Double Wall Paper Cup 12 oz',
      subtitle: 'Insulasi ganda nyaman dipegang tanpa perlu paper sleeve.',
      image: '/images/sample-kraft-cup.webp',
      badge: 'Insulated Double Wall',
      material: 'Cupstock Foodgrade 280 gsm + Outer Kraft 250 gsm',
      finishing: 'Full Wrap CMYK High Definition + Matte Soft Touch',
      specs: [
        'Dinding ganda mengisolasi panas, genggaman tetap sejuk',
        'Bibir cup digulung presisi, anti bocor saat dipasang lid tutup',
        'Warna cetak tajam 360 derajat tidak luntur terkena uap panas',
        'Cocok untuk standar kafe specialty coffee & artisan latte'
      ]
    },
    {
      id: 'sample-pouch',
      category: 'coffee',
      title: 'Standing Pouch Kopi + Valve',
      subtitle: 'Proteksi aroma kopi segar dengan degassing valve Swiss made.',
      image: '/images/sample-coffee-pouch.webp',
      badge: 'Degassing Valve Swiss',
      material: 'Kraft Brown + Pure Aluminum Foil Multi-Barrier',
      finishing: 'Swiss Degassing Valve + Pocket Zipper Kedap Udara',
      specs: [
        'One-way valve Swiss Made membuang gas CO2 tanpa memasukkan oksigen',
        'Multi-barrier aluminium foil menjaga aroma kopi tahan hingga 12 bulan',
        'Pocket zipper kokoh yang bisa dibuka-tutup ratusan kali',
        'Dasar pouch berdiri tegak kokoh saat dipajang di rak display'
      ]
    },
    {
      id: 'sample-cakebox',
      category: 'bakery',
      title: 'Cake Box Window Mika Bening',
      subtitle: 'Menampilkan keindahan kue tart & pastry dengan jendela bening kristal.',
      image: '/images/portfolio-sweet-moments.webp',
      badge: 'High-Clarity Window',
      material: 'Ivory Paper Putih Murni 350 gsm (Extra Rigid)',
      finishing: 'PET High-Clarity Window + Integrated Carry Handle',
      specs: [
        'Jendela mika bening tidak berembun dan tahan goresan',
        'Gagang jinjing menyatu dengan box, kuat angkat kue hingga 2.5 kg',
        'Kertas ivory putih murni memberi kesan bersih, mewah, dan higienis',
        'Perakitan cepat kurang dari 5 detik dengan pola lipat otomatis'
      ]
    },
    {
      id: 'sample-bag',
      category: 'bag',
      title: 'Paper Bag Kraft Takeaway Tebal',
      subtitle: 'Dasar ekstra lebar menampung 2-3 lunch box bertingkat.',
      image: '/images/sample-kraft-bag.webp',
      badge: 'Kuat Beban s/d 5 Kg',
      material: 'Recycled Brown Kraft 150 gsm Heavy Duty',
      finishing: 'Twisted Paper Handle + Alas Karton Duplex Penguat',
      specs: [
        'Dasar lipatan bawah diperkuat karton penguat anti-jebol',
        'Tali pegangan dipasang dengan perekat industri super rekat',
        '100% biodegradable dan ramah lingkungan tanpa plastik',
        'Bisa dicetak logo brand di 2 sisi depan dan samping'
      ]
    },
    {
      id: 'sample-custombox',
      category: 'custom',
      title: 'Custom Box Hampers + Foil Gold',
      subtitle: 'Kotak bingkisan kaku mewah dengan sentuhan foil emas berkilau.',
      image: '/images/sample-custom-hampers.webp',
      badge: 'Hot Stamping Foil Gold',
      material: 'Greyboard 2.5mm Lapis Fancy Paper + Corrugated E-Flute',
      finishing: 'Foil Gold Hot Stamping + Kuncian Pita Satin',
      specs: [
        'Struktur kaku anti penyok saat dikirim kurir ekspedisi ke luar kota',
        'Aksen foil emas berkilau memberi kesan eksklusif & mahal',
        'Tersedia sekat busa / partisi custom untuk toples kue & botol',
        'Pilihan favorit brand premium untuk hampers Idul Fitri & Natal'
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'Semua Hasil Cetak' },
    { id: 'coffee', label: 'Kemasan Kopi' },
    { id: 'cup', label: 'Paper Cup' },
    { id: 'food', label: 'Food Box' },
    { id: 'bakery', label: 'Cake Box' },
    { id: 'bag', label: 'Paper Bag' },
    { id: 'custom', label: 'Custom Box' }
  ];

  const filteredSamples = activeTab === 'all'
    ? samples
    : samples.filter((s) => s.category === activeTab || s.id.includes(activeTab));

  return (
    <section id="samples-section" className="section-lazy py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Spesifikasi &amp; Kualitas Bahan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Galeri Hasil Cetak &amp; Detail Bahan Pabrik
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal">
            Detail gramatur kertas foodgrade, ketajaman warna cetak CMYK, serta kekuatan lipatan dieline produksi Packnesia.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#0E1D33] text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Showcase Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 no-scrollbar scroll-smooth">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="w-[82%] flex-shrink-0 snap-start sm:w-auto bg-white rounded-xl overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Clean Image Container without overlay badge clutter */}
                <div
                  onClick={() => setSelectedSample(sample)}
                  className="w-full h-52 sm:h-56 bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={sample.image}
                    alt={sample.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="224"
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-gray-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Detail Spesifikasi</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                    {sample.badge}
                  </span>
                  <h3 className="font-extrabold text-lg text-[#0E1D33]">
                    {sample.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    {sample.subtitle}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 pt-3.5 border-t border-gray-100 space-y-2">
                    {sample.specs.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-[11px] text-gray-500 truncate">
                    <strong className="text-[#0E1D33]">Bahan:</strong> {sample.material}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <button
                  onClick={() => setSelectedSample(sample)}
                  className="w-full py-2.5 px-4 rounded-lg border border-gray-200 hover:border-[#0E1D33] text-[#0E1D33] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Lihat Detail Bahan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Free Sample Strip (No glow blobs or floating pills) */}
        <div className="mt-12 rounded-2xl bg-[#F8F9FA] p-6 sm:p-8 border border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0E1D33]">
              Ingin Mengecek Ketebalan Bahan Secara Langsung Sebelum Cetak Massal?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Kami dapat mengirimkan paket sampel fisik gratis ke lokasi usaha Anda di seluruh Indonesia untuk pengujian ketahanan bahan dan hasil cetak.
            </p>
          </div>

          <a
            href={`https://wa.me/6287892251216?text=${encodeURIComponent('Halo Packnesia, saya tertarik mendapatkan *Kotak Sampel Kemasan Fisik Gratis* untuk brand F&B saya. Mohon info syarat dan formulir pengirimannya ya. Terima kasih!')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0E1D33] hover:bg-brand-orange text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Minta Kotak Sampel via WA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detail Sample Modal / Bottom Sheet */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="relative bg-white rounded-t-2xl sm:rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8 max-h-[92vh] sm:max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Pull Handle */}
            <div className="pt-2.5 pb-1 sm:hidden bg-gray-50 flex justify-center">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-64 bg-gray-100 flex-shrink-0">
              <img
                src={selectedSample.image}
                alt={selectedSample.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedSample(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup detail"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                  {selectedSample.badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#0E1D33]">
                  {selectedSample.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {selectedSample.subtitle}
                </p>
              </div>

              {/* Material & Finishing Spec Table */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/70 space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-gray-200/60">
                  <span className="text-gray-500 font-semibold">Material Bahan:</span>
                  <span className="text-[#0E1D33] font-bold text-right">{selectedSample.material}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500 font-semibold">Teknik Cetak:</span>
                  <span className="text-[#0E1D33] font-bold text-right">{selectedSample.finishing}</span>
                </div>
              </div>

              {/* Full Specs List */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Keunggulan Teknis Produksi:
                </div>
                <div className="space-y-2">
                  {selectedSample.specs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-3">
                <a
                  href={`https://wa.me/6287892251216?text=${encodeURIComponent(`Halo Packnesia, saya tertarik membuat kemasan dengan spesifikasi seperti *${selectedSample.title}* (${selectedSample.material}). Mohon penawaran harga dan konsultasi desainnya ya.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Minta Penawaran Serupa via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


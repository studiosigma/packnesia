import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, RefreshCw, Coffee, Croissant, UtensilsCrossed, Package, Cookie } from 'lucide-react';

export default function AdvisorModal({ isOpen, onClose, initialSolution = '' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    businessTypeId: '',
    primaryItem: '',
    volume: '',
    priority: '',
  });

  useEffect(() => {
    if (!isOpen) return;
    if (initialSolution) {
      const lower = initialSolution.toLowerCase();
      if (lower.includes('kopi') || lower.includes('cafe') || lower.includes('kafe')) {
        setFormData((prev) => ({ ...prev, businessType: 'Kedai Kopi & Kafe', businessTypeId: 'coffee' }));
        setStep(2);
      } else if (lower.includes('roti') || lower.includes('kue') || lower.includes('pastry') || lower.includes('bakery')) {
        setFormData((prev) => ({ ...prev, businessType: 'Toko Roti & Kue', businessTypeId: 'bakery' }));
        setStep(2);
      } else if (lower.includes('resto') || lower.includes('kitchen') || lower.includes('antar')) {
        setFormData((prev) => ({ ...prev, businessType: 'Resto & Makanan Siap Saji', businessTypeId: 'fastfood' }));
        setStep(2);
      } else if (lower.includes('umkm') || lower.includes('snack') || lower.includes('kuliner')) {
        setFormData((prev) => ({ ...prev, businessType: 'Snack & Makanan Kering', businessTypeId: 'snack' }));
        setStep(2);
      } else if (lower.includes('ramah lingkungan') || lower.includes('eco')) {
        setFormData((prev) => ({ ...prev, priority: 'Ramah Lingkungan & Biodegradable' }));
        setStep(1);
      }
    } else {
      setStep(1);
    }
  }, [isOpen, initialSolution]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const businessTypes = [
    { id: 'coffee', label: 'Kedai Kopi & Kafe', icon: Coffee, desc: 'Minuman kopi, teh, boba, & pastry' },
    { id: 'bakery', label: 'Toko Roti & Kue', icon: Croissant, desc: 'Roti, kue tart, donat, & dessert' },
    { id: 'fastfood', label: 'Resto & Makanan Siap Saji', icon: UtensilsCrossed, desc: 'Burger, fried chicken, rice bowl' },
    { id: 'catering', label: 'Catering & Nasi Kotak', icon: Package, desc: 'Nasi kotak, hampers prasmanan' },
    { id: 'snack', label: 'Snack & Makanan Kering', icon: Cookie, desc: 'Keripik, cookies, biji kopi kemasan' },
  ];

  const primaryItems = [
    { id: 'cups', label: 'Paper Cup & Sleeve', sub: 'Cup Dinding Tunggal / Ganda' },
    { id: 'boxes', label: 'Food Box & Lunch Box', sub: 'Kraft / Ivory Anti Minyak' },
    { id: 'bags', label: 'Paper Bag & Tas Belanja', sub: 'Tas jinjing takeaway kuat' },
    { id: 'pouches', label: 'Standing Pouch + Katup Aroma', sub: 'Penyimpan biji kopi & snack' },
    { id: 'custom', label: 'Paket Branding Lengkap', sub: 'Paket lengkap seluruh kebutuhan kemasan' },
  ];

  const volumes = [
    { id: '500-1000', label: '500 - 1.000 pcs', note: 'Cocok untuk start-up / testing pasar' },
    { id: '1000-5000', label: '1.000 - 5.000 pcs', note: 'Paling populer untuk kedai kopi & bakery' },
    { id: '5000-20000', label: '5.000 - 20.000 pcs', note: 'Skala berkembang, diskon volume besar' },
    { id: '20000+', label: '20.000+ pcs / bulan', note: 'Harga pabrik tier terbaik' },
  ];

  const priorities = [
    { id: 'eco', label: 'Ramah Lingkungan & Biodegradable', desc: 'Bahan kraft tersertifikasi daur ulang ramah alam' },
    { id: 'leakproof', label: 'Anti Bocor & Tahan Minyak/Panas', desc: 'Lapisan PE foodgrade ketat untuk makanan berkuah/berminyak' },
    { id: 'luxury', label: 'Tampilan Brand Mewah & Menonjol', desc: 'Finishing foil emas, emboss, & laminasi soft-touch' },
    { id: 'budget', label: 'Efisiensi Biaya / Hemat Anggaran', desc: 'Harga per pcs paling efisien untuk margin maksimal' },
  ];

  const getRecommendation = () => {
    let recoTitle = 'Paket Kemasan Rekomendasi Packnesia';
    let recoItems = ['Paper Cup Double Wall', 'Kraft Food Box Lunch M', 'Brown Kraft Bag'];
    let recoMaterial = 'Kraft Paper Foodgrade 290gsm + Laminasi PE';
    let estPrice = 'Mulai Rp 750 - Rp 1.450 / pcs';

    if (formData.businessTypeId === 'coffee') {
      recoTitle = 'Paket Pertumbuhan Kedai Kopi & Kafe';
      recoItems = ['Double Wall Hot Cup 8oz & Cold Cup 12oz', 'Selongsong Cup Kraft', 'Paper Bag Kraft Muat 2 Cup'];
      recoMaterial = 'Cupstock Foodgrade Berlapis Ganda';
      estPrice = 'Rp 650 - Rp 1.100 / pcs';
    } else if (formData.businessTypeId === 'bakery') {
      recoTitle = 'Paket Kemasan Toko Roti & Kue';
      recoItems = ['Dus Kue Handle Praktis', 'Window Cake Box 22x22', 'Paper Bag Kraft Alas Lebar'];
      recoMaterial = 'Ivory Foodgrade 350gsm + Mika Bening Anti Embun';
      estPrice = 'Rp 1.400 - Rp 2.800 / pcs';
    } else if (formData.businessTypeId === 'fastfood') {
      recoTitle = 'Paket Kemasan Resto & Layanan Antar';
      recoItems = ['Burger Box E-flute / Kraft', 'Lunch Box Lapis PE Anti Rembes', 'Paper Bag Takeaway Tebal'];
      recoMaterial = 'Kraft 325gsm Anti Minyak & Tahan Panas';
      estPrice = 'Rp 850 - Rp 1.650 / pcs';
    }

    return { recoTitle, recoItems, recoMaterial, estPrice };
  };

  const reco = getRecommendation();

  const handleFinishWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Packnesia, saya baru saja menggunakan *Kalkulator Rekomendasi Kemasan* di website!\n\n` +
      `*Hasil Rekomendasi:*\n` +
      `• Jenis Bisnis: ${formData.businessType || '-'}\n` +
      `• Kemasan Utama: ${formData.primaryItem || '-'}\n` +
      `• Estimasi Volume: ${formData.volume || '-'}\n` +
      `• Prioritas Utama: ${formData.priority || '-'}\n` +
      `• Paket: ${reco.recoTitle}\n\n` +
      `Mohon info simulasi harga resmi dan sampel kemasannya ya. Terima kasih!`
    );
    window.open(`https://wa.me/6287892251216?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8 max-h-[92vh] sm:max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Indicator */}
        <div className="pt-2.5 pb-1 sm:hidden bg-[#0E1D33] flex justify-center">
          <div className="w-12 h-1.5 bg-white/30 rounded-full" />
        </div>

        {/* Modal Top Bar */}
        <div className="bg-[#0E1D33] text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-2">
              <img src="/images/packnesia-icon.webp" alt="Packnesia" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Rekomendasi Kemasan
              </h3>
              <p className="text-xs text-gray-300">Temukan rekomendasi spesifikasi &amp; material terbaik untuk produk Anda</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup rekomendasi"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1.5 flex-shrink-0">
          <div
            className="bg-brand-orange h-1.5 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain flex-1">
          {/* STEP 1: Business Type */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Langkah 1 dari 4</span>
                <h4 className="text-xl font-extrabold text-[#0E1D33] mt-1">Apa bidang bisnis F&B Anda?</h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {businessTypes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setFormData({ ...formData, businessType: item.label, businessTypeId: item.id });
                        setStep(2);
                      }}
                      className={`p-3.5 rounded-xl border text-left flex items-center gap-3.5 transition-all cursor-pointer ${
                        formData.businessType === item.label
                          ? 'border-brand-orange bg-orange-50/60 shadow-xs'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="p-2.5 bg-gray-100 rounded-xl text-[#0E1D33] flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="font-bold text-sm text-[#0E1D33]">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Primary Item */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Langkah 2 dari 4</span>
                <h4 className="text-xl font-extrabold text-[#0E1D33] mt-1">Kemasan apa yang paling Anda butuhkan?</h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {primaryItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, primaryItem: item.label });
                      setStep(3);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      formData.primaryItem === item.label
                        ? 'border-brand-orange bg-orange-50/60 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0E1D33]">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.sub}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Volume */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Langkah 3 dari 4</span>
                <h4 className="text-xl font-extrabold text-[#0E1D33] mt-1">Berapa perkiraan kebutuhan per order?</h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {volumes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, volume: item.label });
                      setStep(4);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      formData.volume === item.label
                        ? 'border-brand-orange bg-orange-50/60 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0E1D33]">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.note}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Priority */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Langkah 4 dari 4</span>
                <h4 className="text-xl font-extrabold text-[#0E1D33] mt-1">Apa fokus terpenting Anda?</h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {priorities.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, priority: item.label });
                      setStep(5);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      formData.priority === item.label
                        ? 'border-brand-orange bg-orange-50/60 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#0E1D33]">{item.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Final Recommendation */}
          {step === 5 && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-[#0E1D33]/5 text-[#0E1D33] mb-2">
                  <CheckCircle2 className="w-7 h-7 text-brand-orange" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#0E1D33]">{reco.recoTitle}</h4>
                <p className="text-xs text-gray-500 mt-1">Disesuaikan khusus untuk kebutuhan {formData.businessType || 'bisnis Anda'}</p>
              </div>

              <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-orange-100 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-orange-200/50">
                  <span className="text-xs text-gray-500 font-medium">Bahan yang Disarankan</span>
                  <span className="text-xs font-bold text-gray-800">{reco.recoMaterial}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-orange-200/50">
                  <span className="text-xs text-gray-500 font-medium">Estimasi Harga Pabrik</span>
                  <span className="text-sm font-extrabold text-brand-orange">{reco.estPrice}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block mb-1.5">Item Termasuk:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {reco.recoItems.map((it, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-semibold bg-white px-2.5 py-1 rounded-lg border border-orange-200/70 text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleFinishWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Klaim Rekomendasi & Dapatkan Sampel Gratis</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-xs text-gray-500 hover:text-gray-800 py-1 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Hitung Ulang Spesifikasi</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Back Button for earlier steps */}
        {step > 1 && step < 5 && (
          <div className="px-6 pb-5 pt-0 flex justify-start">
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import AdvisorBotIcon from './AdvisorBotIcon';

export default function AdvisorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    primaryItem: '',
    volume: '',
    priority: '',
  });

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
    { id: 'coffee', label: 'Coffee Shop & Cafe', icon: '☕', desc: 'Minuman kopi, teh, boba, & pastry' },
    { id: 'bakery', label: 'Bakery & Cake Shop', icon: '🥐', desc: 'Roti, kue tart, donat, & dessert' },
    { id: 'fastfood', label: 'Resto & Fast Food', icon: '🍔', desc: 'Burger, fried chicken, rice bowl' },
    { id: 'catering', label: 'Catering & Bento Box', icon: '🍱', desc: 'Nasi kotak, hampers prasmanan' },
    { id: 'snack', label: 'Snack & Dry Food', icon: '🍪', desc: 'Keripik, cookies, biji kopi kemasan' },
  ];

  const primaryItems = [
    { id: 'cups', label: 'Paper Cup & Sleeve', sub: 'Single / Double Wall Cup' },
    { id: 'boxes', label: 'Food Box & Lunch Box', sub: 'Kraft / Ivory Anti Minyak' },
    { id: 'bags', label: 'Paper Bag & Shopping Bag', sub: 'Tas jinjing takeaway kuat' },
    { id: 'pouches', label: 'Standing Pouch + Valve', sub: 'Penyimpan biji kopi & snack' },
    { id: 'custom', label: 'Full Branding Package', sub: 'Paket lengkap semua kemasan' },
  ];

  const volumes = [
    { id: '500-1000', label: '500 - 1.000 pcs', note: 'Cocok untuk start-up / testing pasar' },
    { id: '1000-5000', label: '1.000 - 5.000 pcs', note: 'Paling populer untuk kedai kopi & bakery' },
    { id: '5000-20000', label: '5.000 - 20.000 pcs', note: 'Skala berkembang, diskon volume besar' },
    { id: '20000+', label: '20.000+ pcs / bulan', note: 'Harga pabrik tier terbaik' },
  ];

  const priorities = [
    { id: 'eco', label: 'Eco-Friendly & Biodegradable', desc: 'Bahan kraft tersertifikasi daur ulang ramah alam' },
    { id: 'leakproof', label: 'Anti Bocor & Tahan Minyak/Panas', desc: 'Lapisan PE foodgrade ketat untuk makanan berkuah/berminyak' },
    { id: 'luxury', label: 'Estetika Brand Mewah & Eye-Catching', desc: 'Finishing foil emas, emboss, & laminasi soft-touch' },
    { id: 'budget', label: 'Efisiensi Biaya / Budget Friendly', desc: 'Harga per pcs termurah untuk margin maksimal' },
  ];

  const getRecommendation = () => {
    let recoTitle = 'Paket Kemasan Rekomendasi Packnesia';
    let recoItems = ['Paper Cup Double Wall', 'Kraft Food Box Lunch M', 'Brown Kraft Bag'];
    let recoMaterial = 'Kraft Paper Foodgrade 290gsm + PE Coating';
    let estPrice = 'Mulai Rp 750 - Rp 1.450 / pcs';

    if (formData.businessType === 'coffee') {
      recoTitle = 'Coffee Shop Starter & Growth Pack';
      recoItems = ['Double Wall Hot Cup 8oz & Cold Cup 12oz', 'Paper Cup Sleeve Kraft', 'Takeaway Bag Kraft 2 Cup'];
      recoMaterial = 'Double Wall Insulated Foodgrade Cupstock';
      estPrice = 'Rp 650 - Rp 1.100 / pcs';
    } else if (formData.businessType === 'bakery') {
      recoTitle = 'Artisan Bakery & Pastry Suite';
      recoItems = ['Dus Kue Handle Praktis', 'Window Cake Box 22x22', 'Wide Bottom Kraft Bag'];
      recoMaterial = 'Ivory Foodgrade 350gsm + Mika Bening Anti Embun';
      estPrice = 'Rp 1.400 - Rp 2.800 / pcs';
    } else if (formData.businessType === 'fastfood') {
      recoTitle = 'Fast Casual Food & Delivery Pack';
      recoItems = ['Burger Box E-flute / Kraft', 'Lunch Box PE Coated Anti Rembes', 'Heavy-Duty Delivery Bag'];
      recoMaterial = 'Kraft 325gsm Anti Minyak & Tahan Microwave';
      estPrice = 'Rp 850 - Rp 1.650 / pcs';
    }

    return { recoTitle, recoItems, recoMaterial, estPrice };
  };

  const reco = getRecommendation();

  const handleFinishWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Packnesia, saya baru saja menggunakan *Packaging Advisor* di website!\n\n` +
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
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center p-1">
              <AdvisorBotIcon className="w-full h-full" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Packaging Advisor</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-extrabold uppercase">
                  AI Smart Match
                </span>
              </h3>
              <p className="text-xs text-gray-300">Temukan rekomendasi kemasan terbaik untuk bisnis Anda</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup advisor"
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
                {businessTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, businessType: item.label });
                      setStep(2);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3.5 transition-all cursor-pointer ${
                      formData.businessType === item.label
                        ? 'border-brand-orange bg-orange-50/60 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl p-2 bg-white rounded-xl shadow-xs border border-gray-100">{item.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-[#0E1D33]">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </button>
                ))}
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
                <div className="inline-flex p-3 rounded-2xl bg-orange-100 text-brand-orange mb-2">
                  <Sparkles className="w-7 h-7" />
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
                  <span>Ulangi Kuis Advisor</span>
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


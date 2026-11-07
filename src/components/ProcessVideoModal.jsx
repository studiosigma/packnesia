import React, { useEffect } from 'react';
import { X, CheckCircle2, Play, Sparkles, ShieldCheck, Truck, Layers, ArrowRight } from 'lucide-react';

export default function ProcessVideoModal({ isOpen, onClose, onOpenConsultation }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Pemilihan Bahan',
      desc: 'Diskusikan tipe makanan/minuman Anda, ukuran produk, serta kebutuhan material (kraft, ivory, PE tahan minyak).'
    },
    {
      num: '02',
      title: 'Free Dieline & 3D Mockup Digital',
      desc: 'Tim desainer kami menyiapkan pola potong (dieline) dan simulasi visual 3D kemasan sebelum dicetak.'
    },
    {
      num: '03',
      title: 'Sample Proofing & Approval',
      desc: 'Kami membuat sampel fisik untuk mengecek kecocokan ukuran, lipatan, dan ketajaman warna.'
    },
    {
      num: '04',
      title: 'Cetak Massal & Quality Control',
      desc: 'Produksi menggunakan mesin cetak Heidelberg otomatis berstandar food-safety tinggi.'
    },
    {
      num: '05',
      title: 'Pengemasan Rapi & Pengiriman',
      desc: 'Karton tebal berlapis plastik kedap air dikirim langsung ke lokasi bisnis Anda di seluruh Indonesia.'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Video Preview / Header */}
        <div className="relative aspect-video w-full bg-[#0E1D33] overflow-hidden flex items-center justify-center">
          <img
            src="/images/hero-packaging.webp"
            alt="Packnesia Manufacturing Process"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D33] via-transparent to-black/30" />
          
          {/* Simulated Play Feature */}
          <div className="relative z-10 text-center p-4">
            <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-3 shadow-orange-glow animate-pulse">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Behind the Scenes: Pabrik Kemasan Packnesia
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Dari Lembaran Kertas Foodgrade Hingga Kemasan Branded Bernilai Tinggi
            </p>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="p-6 sm:p-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-4">
            Alur Pengerjaan dari Konsep Hingga Jadi
          </h4>

          <div className="space-y-4">
            {steps.map((st) => (
              <div key={st.num} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-orange-50/40 transition-colors border border-transparent hover:border-orange-100">
                <span className="text-lg font-black text-brand-orange w-8 flex-shrink-0">
                  {st.num}
                </span>
                <div>
                  <h5 className="font-extrabold text-sm text-[#0E1D33]">{st.title}</h5>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Rata-rata waktu pengerjaan: <span className="font-bold text-gray-800">7 - 12 Hari Kerja</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-orange-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>Mulai Pesanan Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


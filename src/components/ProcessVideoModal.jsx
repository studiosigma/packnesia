import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProcessVideoModal({ isOpen, onClose, onOpenConsultation }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Pemilihan Bahan',
      desc: 'Diskusikan tipe makanan/minuman Anda, ukuran produk, serta kebutuhan material (kraft, ivory, PE tahan minyak).'
    },
    {
      num: '02',
      title: 'Dieline & 3D Mockup Digital',
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
      desc: 'Produksi menggunakan mesin cetak offset otomatis berstandar food-safety.'
    },
    {
      num: '05',
      title: 'Pengemasan Rapi & Pengiriman',
      desc: 'Karton tebal berlapis plastik kedap air dikirim langsung ke lokasi bisnis Anda di seluruh Indonesia.'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-10 h-1 rounded-full bg-white/80 pointer-events-none" />

        <button
          onClick={onClose}
          aria-label="Tutup modal proses"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-gray-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Clean Header Banner (No fake unclickable play button) */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-[#0E1D33] overflow-hidden flex items-end">
          <img
            src="/images/hero-packaging.webp"
            alt="Packnesia Manufacturing Process"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D33] via-[#0E1D33]/40 to-transparent" />

          <div className="relative z-10 p-5 sm:p-8 text-left">
            <img src="/images/packnesia-logo-light.webp" alt="Packnesia" className="h-5 w-auto mb-3 object-contain" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Alur Produksi Pabrik Kemasan Packnesia
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Dari lembaran kertas foodgrade hingga kemasan siap kirim ke outlet Anda.
            </p>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain flex-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
            Tahapan Pengerjaan
          </h4>

          <div className="space-y-3">
            {steps.map((st) => (
              <div key={st.num} className="flex items-start gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                <span className="text-base font-black text-brand-orange w-7 flex-shrink-0 pt-0.5">
                  {st.num}
                </span>
                <div>
                  <h5 className="font-bold text-sm text-[#0E1D33]">{st.title}</h5>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Estimasi produksi: <span className="font-bold text-[#0E1D33]">7 - 12 Hari Kerja</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Mulai Konsultasi Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


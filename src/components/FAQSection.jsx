import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const faqsList = [
  {
    q: 'Berapa Minimum Order Quantity (MOQ) cetak kemasan di Packnesia?',
    a: 'MOQ di Packnesia sangat ramah bagi pelaku UMKM maupun brand berkembang. Anda bisa mulai memesan dari 500 pcs untuk Food Box, Paper Bag, dan Standing Pouch Kopi; 1.000 pcs untuk Paper Cup; serta 300 pcs untuk Custom Hardbox/Mailer Box eksklusif.'
  },
  {
    q: 'Apakah semua bahan kemasan Packnesia aman dan bersertifikasi Foodgrade?',
    a: 'Ya, 100% bahan kemasan makanan kami menggunakan kertas standar foodgrade tersertifikasi FDA dan FSC. Kertas dilapisi pelindung PE anti-bocor dan anti-minyak yang tahan terhadap kuah panas, saus, maupun kelembapan microwave.'
  },
  {
    q: 'Bagaimana jika brand saya belum memiliki desain atau pola dieline kemasan?',
    a: 'Tim desainer spesialis Packnesia siap membantu Anda! Kami menyediakan layanan pembuatan pola potong (dieline) presisi dan simulasi visual 3D Mockup kemasan secara GRATIS. Anda cukup mengirimkan logo brand dan ukuran wadah produk Anda.'
  },
  {
    q: 'Berapa lama estimasi waktu produksi cetak kemasan?',
    a: 'Waktu produksi standar berkisar antara 7 hingga 12 hari kerja setelah persetujuan sampel atau approval desain final. Untuk kebutuhan mendesak (event/grand opening), silakan hubungi tim kami untuk opsi layanan prioritas express.'
  },
  {
    q: 'Apakah Packnesia melayani pengiriman ke luar pulau di seluruh Indonesia?',
    a: 'Tentu saja! Kami rutin mengirim pesanan kemasan ke berbagai kota di Jawa, Sumatra, Bali, Kalimantan, Sulawesi, hingga Papua menggunakan ekspedisi kargo darat, laut, dan udara dengan tarif hemat dan jaminan asuransi pengiriman.'
  },
  {
    q: 'Bisakah saya melihat dan memegang sampel fisik sebelum cetak massal?',
    a: 'Bisa. Kami menyediakan layanan Proofing Sample fisik untuk memastikan ketebalan gramatur kertas, keakuratan lipatan, dan ketajaman warna cetak sesuai dengan ekspektasi Anda sebelum mesin cetak massal dijalankan.'
  }
];

export default function FAQSection({ onOpenConsultation }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              FAQ & Informasi
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            Segala hal yang perlu Anda ketahui mengenai pemesanan, bahan foodgrade, waktu pengerjaan, dan pengiriman kemasan di Packnesia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-orange-200 bg-orange-50/20 shadow-sm'
                    : 'border-gray-200/80 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0E1D33] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-brand-orange text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-orange-100/60 animate-in fade-in duration-150">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F6F7F9] border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0E1D33]">Punya pertanyaan spesifik tentang ukuran produk Anda?</h4>
              <p className="text-xs text-gray-500">Konsultasikan gratis langsung dengan tim packaging specialist kami.</p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E1D33] hover:bg-brand-orange text-white text-xs font-bold transition-all shadow cursor-pointer whitespace-nowrap"
          >
            <span>Tanya Tim Kami</span>
          </button>
        </div>

      </div>
    </section>
  );
}


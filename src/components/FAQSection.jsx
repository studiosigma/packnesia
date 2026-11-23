import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="section-lazy py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Tanya Jawab Order
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-2.5 text-sm text-gray-500 max-w-xl mx-auto">
            Informasi seputar jumlah minimal pemesanan, standar bahan foodgrade, waktu produksi, dan pengiriman.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-[#0E1D33]/30 bg-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0E1D33]">
                    {item.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0E1D33] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


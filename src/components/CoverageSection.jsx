import React, { useState } from 'react';
import { Truck, ShieldCheck, MapPin, PackageCheck, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

export default function CoverageSection({ onOpenConsultation }) {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const regions = [
    {
      name: 'Jabodetabek',
      tag: 'Pengiriman Express / Same Day',
      cities: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara', 'Bogor', 'Depok', 'Tangerang', 'Bekasi']
    },
    {
      name: 'Jawa Barat & Banten',
      tag: '1 - 2 Hari Kargo',
      cities: ['Bandung', 'Cirebon', 'Karawang', 'Serang', 'Cimahi', 'Tasikmalaya', 'Sukabumi']
    },
    {
      name: 'Jawa Tengah & D.I. Yogyakarta',
      tag: '1 - 2 Hari Kargo',
      cities: ['Semarang', 'Yogyakarta', 'Solo / Surakarta', 'Magelang', 'Purwokerto', 'Tegal', 'Pekalongan']
    },
    {
      name: 'Jawa Timur',
      tag: '1 - 2 Hari Kargo',
      cities: ['Surabaya', 'Malang', 'Sidoarjo', 'Gresik', 'Kediri', 'Jember', 'Banyuwangi', 'Madiun']
    },
    {
      name: 'Bali & Nusa Tenggara',
      tag: '2 - 3 Hari Kargo',
      cities: ['Denpasar', 'Badung (Kuta/Canggu)', 'Gianyar (Ubud)', 'Singaraja', 'Mataram (Lombok)', 'Kupang']
    },
    {
      name: 'Sumatera',
      tag: '2 - 4 Hari Kargo',
      cities: ['Medan', 'Palembang', 'Pekanbaru', 'Batam', 'Bandar Lampung', 'Padang', 'Jambi', 'Banda Aceh']
    },
    {
      name: 'Kalimantan',
      tag: '3 - 5 Hari Kargo',
      cities: ['Banjarmasin', 'Balikpapan', 'Samarinda', 'Pontianak', 'Palangkaraya', 'Tarakan']
    },
    {
      name: 'Sulawesi & Indonesia Timur',
      tag: '3 - 5 Hari Kargo',
      cities: ['Makassar', 'Manado', 'Kendari', 'Palu', 'Gorontalo', 'Ambon', 'Jayapura']
    }
  ];

  const logistics = [
    'JNE Trucking (JTR)',
    'SiCepat Gokil Kargo',
    'Indah Logistik Kargo',
    'Dakota Cargo',
    'Baraka Sarana Tama',
    'Deliveree Kargo',
    'Lalamove Armada Besar'
  ];

  const waCoverageMessage = encodeURIComponent(
    'Halo Packnesia, saya ingin cek estimasi biaya kirim kargo kemasan ke kota saya. Mohon info pilihan ekspedisi dan tarif termurahnya ya!'
  );

  return (
    <section id="coverage-section" className="section-lazy py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
            Jangkauan Pengiriman Nasional
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pengiriman Kargo ke Seluruh Indonesia
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
            Bermitra dengan layanan logistik kargo resmi untuk menjaga pesanan box dan cup Anda tetap aman dengan tarif kirim paling ekonomis.
          </p>
        </div>

        {/* 3 Key Logistics Value Props (Uniform Neutral Architectural Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="p-5 sm:p-6 rounded-xl bg-[#F8F9FA] border border-gray-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#0E1D33] flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Tarif Kargo Partai Besar</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Ongkir mulai Rp 1.500/kg via kargo darat, laut, maupun udara sesuai rute kota tujuan Anda.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-[#F8F9FA] border border-gray-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#0E1D33] flex items-center justify-center flex-shrink-0">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Packing Berlapis &amp; Aman</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Setiap karton dilapisi plastik tahan lembab dan pengikatan strapping agar kemasan tidak penyok di perjalanan.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-[#F8F9FA] border border-gray-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#0E1D33] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Garansi Kualitas Pengiriman</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Dilengkapi proteksi pengiriman untuk mengganti bagian barang apabila terjadi kerusakan selama proses kirim.
              </p>
            </div>
          </div>
        </div>

        {/* Major Cities Coverage Grid */}
        <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-gray-200/80 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0E1D33] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Kota &amp; Wilayah Layanan Utama</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Rute pengiriman kargo rutin setiap minggu dari pusat produksi kami.
              </p>
            </div>
            <a
              href={`https://wa.me/6287892251216?text=${waCoverageMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E1D33] hover:bg-brand-orange text-white text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cek Ongkir Kota Anda</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 border border-gray-200/80 flex-col justify-between ${
                  idx >= 4 && !showAllMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <div>
                  <h4 className="font-extrabold text-sm text-[#0E1D33] leading-snug">{reg.name}</h4>
                  <span className="text-[11px] font-semibold text-brand-orange block mt-0.5">
                    {reg.tag}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {reg.cities.join(' • ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {regions.length > 4 && (
            <div className="sm:hidden mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllMobile((prev) => !prev)}
                aria-expanded={showAllMobile}
                className="w-full min-h-[44px] px-5 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#0E1D33] hover:bg-gray-50 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>
                  {showAllMobile
                    ? 'Tampilkan Lebih Ringkas (4 Wilayah Utama)'
                    : `Lihat Semua ${regions.length} Wilayah Pengiriman`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-brand-orange transition-transform duration-200 ${
                    showAllMobile ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* Clean Logistics Partner Line */}
        <div className="text-center text-xs text-gray-500">
          <span className="font-bold text-[#0E1D33] mr-2">Mitra Ekspedisi:</span>
          <span>{logistics.join(' • ')}</span>
        </div>

      </div>
    </section>
  );
}


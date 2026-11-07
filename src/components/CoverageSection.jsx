import React from 'react';
import { Truck, ShieldCheck, MapPin, PackageCheck, ArrowRight, MessageCircle } from 'lucide-react';

export default function CoverageSection({ onOpenConsultation }) {
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
    <section id="coverage-section" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              Jangkauan Pengiriman Seluruh Indonesia
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1D33] tracking-tight">
            Pabrik Kemasan Terpercaya untuk Brand F&B di Seluruh Nusantara
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
            Dari Sabang sampai Merauke, Packnesia bermitra dengan ekspedisi kargo resmi untuk memastikan pesanan box, cup, dan packaging Anda sampai tepat waktu, aman, dengan ongkos kirim paling ekonomis.
          </p>
        </div>

        {/* 3 Key Logistics Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-[#FAF9F7] border border-gray-200/70 hover:border-orange-200 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Tarif Kargo Hemat Partai Besar</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Ongkir mulai dari Rp 1.500/kg via kargo darat, laut, dan udara. Kami bantu carikan opsi logistik termurah sesuai volume box Anda.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F7] border border-gray-200/70 hover:border-orange-200 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Packing Berlapis & Anti-Penyok</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Setiap karton dibungkus plastik tahan lembab (*moisture-barrier*), strapping kuat, dan opsi packing kayu untuk pengiriman antar pulau.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F7] border border-gray-200/70 hover:border-orange-200 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0E1D33]">Garansi Penggantian 100%</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Asuransi pengiriman terjamin. Jika terdapat kerusakan fisik atau basah saat barang diterima, tim kami siap mengganti atau cetak ulang.
              </p>
            </div>
          </div>
        </div>

        {/* Major Cities Coverage Grid (Local SEO Keyword Anchors) */}
        <div className="bg-[#FAF7F2]/60 rounded-3xl p-6 sm:p-10 border border-orange-100/80 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E1D33] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Kota & Wilayah Layanan Utama</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Jaringan distribusi kemasan aktif dengan rute pengiriman rutin setiap minggu.
              </p>
            </div>
            <a
              href={`https://wa.me/6281234567890?text=${waCoverageMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Cek Ongkir Kota Anda</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-extrabold text-sm text-[#0E1D33]">{reg.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-brand-orange">
                      {reg.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {reg.cities.map((city, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded-md bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-brand-orange text-[11px] font-medium border border-gray-200/60 transition-colors"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Cargo Logos / Badges Banner */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Mitra Ekspedisi Kargo:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {logistics.map((log, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-white text-gray-700 text-xs font-bold border border-gray-200 shadow-xs"
              >
                {log}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


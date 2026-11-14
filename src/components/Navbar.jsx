import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, Phone, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenConsultation, onOpenSearch, onSelectProduct, onSelectSolution }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [infoDropdown, setInfoDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { name: 'Food Box & Paper Bowl', desc: 'Lunch box, bowl sup, & martabak', id: 'food-box' },
    { name: 'Plastic & Paper Cup', desc: 'Cup PP/PET kristal & paper cup', id: 'plastic-cup' },
    { name: 'Box Pizza & Fast Food', desc: 'Dus pizza E-flute, burger & toast', id: 'fastfood-pizza-box' },
    { name: 'Cake & Donut Box', desc: 'Dus donat isi 6/12, brownies & tart', id: 'cake-box' },
    { name: 'Stiker Label Kemasan', desc: 'Stiker vinyl waterproof & segel', id: 'packaging-sticker' },
    { name: 'Coffee Packaging', desc: 'Pouch standing valve aroma Swiss', id: 'coffee-packaging' },
    { name: 'Paper Bag Takeaway', desc: 'Tas kraft belanja & alas lebar', id: 'paper-bag' },
    { name: 'Box Parfum & Souvenir', desc: 'Softbox foil emas & hardbox mewah', id: 'perfume-box' },
  ];

  const solutionLinks = [
    { name: 'Coffee Shop & Cafe', icon: '☕', desc: 'Solusi lengkap cup, pouch, & sleeve' },
    { name: 'Bakery & Pastry', icon: '🥐', desc: 'Dus kue cantik dengan jendela & handle' },
    { name: 'Fast Food & Delivery', icon: '🍔', desc: 'Box tahan minyak & paper bag kuat' },
    { name: 'Eco-Friendly / Sustainable', icon: '🌱', desc: 'Bahan daur ulang bersertifikasi FSC' },
  ];

  const infoLinks = [
    { name: 'Hasil Cetak', href: '#samples-section', desc: 'Galeri bukti foto & kualitas produksi asli' },
    { name: 'Transformasi Kemasan', href: '#transformation-section', desc: 'Perbandingan kemasan polos vs custom brand' },
    { name: 'Jangkauan Pengiriman', href: '#coverage-section', desc: 'Armada kargo ke seluruh kota di Indonesia' },
    { name: 'FAQ & Info Order', href: '#faq-section', desc: 'Pertanyaan seputar MOQ, sampel & bahan' },
    { name: 'About Us', href: '#why-section', desc: 'Keunggulan & standar kualitas Packnesia' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links (Single-row 6 items) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[14.5px] font-medium text-[#1E293B]">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-brand-orange py-2 transition-colors cursor-pointer whitespace-nowrap"
                onClick={() => {
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {productsDropdown && (
                <div className="absolute top-full -left-6 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5">
                    {productLinks.map((item) => (
                      <a
                        key={item.id}
                        href={`/produk/${item.id}/`}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                            e.preventDefault();
                            setProductsDropdown(false);
                            if (onSelectProduct) onSelectProduct(item.id);
                          }
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50/70 transition-colors flex flex-col group/item"
                      >
                        <span className="font-semibold text-gray-900 group-hover/item:text-brand-orange text-sm flex items-center justify-between">
                          {item.name}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-brand-orange" />
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">{item.desc}</span>
                      </a>
                    ))}
                    <div className="pt-2 mt-1 border-t border-gray-100">
                      <a
                        href="/produk/"
                        className="w-full p-2 text-center text-xs font-bold text-brand-orange hover:bg-orange-50 rounded-lg block transition-colors"
                      >
                        Buka Katalog Lengkap Semua Produk &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsDropdown(true)}
              onMouseLeave={() => setSolutionsDropdown(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-brand-orange py-2 transition-colors cursor-pointer whitespace-nowrap"
                onClick={() => {
                  const el = document.getElementById('solutions-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`} />
              </button>

              {solutionsDropdown && (
                <div className="absolute top-full -left-10 pt-2 w-80 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5">
                    {solutionLinks.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSolutionsDropdown(false);
                          if (onSelectSolution) onSelectSolution(item.name);
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50/70 transition-colors flex items-start gap-3 group/item"
                      >
                        <span className="text-xl p-1 bg-gray-50 rounded-lg group-hover/item:bg-white">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover/item:text-brand-orange text-sm">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#portfolio-section"
              className="hover:text-brand-orange transition-colors whitespace-nowrap"
            >
              Portfolio
            </a>

            <a
              href="#bundling-section"
              className="hover:text-brand-orange transition-colors whitespace-nowrap"
            >
              Paket Usaha
            </a>

            <a
              href="#blog-section"
              className="hover:text-brand-orange transition-colors whitespace-nowrap"
            >
              Blog
            </a>

            {/* Info & Panduan Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setInfoDropdown(true)}
              onMouseLeave={() => setInfoDropdown(false)}
            >
              <button
                type="button"
                aria-expanded={infoDropdown}
                className="flex items-center gap-1 hover:text-brand-orange py-2 transition-colors cursor-pointer whitespace-nowrap"
                onClick={() => setInfoDropdown((prev) => !prev)}
              >
                <span>Lainnya</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${infoDropdown ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`} />
              </button>

              {infoDropdown && (
                <div className="absolute top-full -right-6 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5">
                    {infoLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setInfoDropdown(false)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50/70 transition-colors flex flex-col group/item"
                      >
                        <span className="font-semibold text-gray-900 group-hover/item:text-brand-orange text-sm flex items-center justify-between">
                          {item.name}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-brand-orange" />
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Cari Produk"
              className="p-2 text-gray-600 hover:text-brand-orange hover:bg-orange-50/60 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Consultation CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-[14px] font-semibold tracking-wide shadow-orange-glow hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-gray-700 hover:text-brand-orange rounded-lg"
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-gray-700 hover:text-brand-orange rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (z-[60] sits above fixed z-50 header) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <Logo variant="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Tutup menu"
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav aria-label="Menu Mobile" className="py-4 space-y-1">
                <div className="font-bold text-[11px] uppercase tracking-wider text-gray-400 px-2 pb-1">Katalog & Layanan</div>

                <a
                  href="#products-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] px-2 flex items-center justify-between text-[15px] font-bold text-[#0E1D33] hover:text-brand-orange rounded-xl hover:bg-orange-50/50 transition-colors"
                >
                  <span>Produk Kemasan (13 Kategori)</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>

                <div className="ml-2 pl-3 py-1 space-y-0.5 border-l-2 border-orange-100">
                  {productLinks.slice(0, 5).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onSelectProduct) onSelectProduct(p.id);
                      }}
                      className="w-full min-h-[40px] px-2 flex items-center text-sm text-gray-600 hover:text-brand-orange rounded-lg hover:bg-orange-50/40 text-left transition-colors"
                    >
                      • {p.name}
                    </button>
                  ))}
                  <a
                    href="/produk/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[40px] px-2 flex items-center text-xs font-bold text-brand-orange hover:underline"
                  >
                    Buka Semua Katalog &rarr;
                  </a>
                </div>

                {[
                  { label: 'Solusi Industri', href: '#solutions-section' },
                  { label: 'Portfolio Brand', href: '#portfolio-section' },
                  { label: 'Transformasi Before/After', href: '#transformation-section' },
                  { label: 'Paket Bundling Usaha', href: '#bundling-section' },
                  { label: 'Galeri Hasil Cetak', href: '#samples-section' },
                  { label: 'Blog & Edukasi', href: '#blog-section' },
                  { label: 'FAQ & Info Order', href: '#faq-section' },
                  { label: 'Tentang Packnesia', href: '#why-section' },
                  { label: 'Jangkauan Pengiriman', href: '#coverage-section' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] px-2 flex items-center text-[15px] font-semibold text-gray-800 hover:text-brand-orange rounded-xl hover:bg-orange-50/50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 bg-brand-orange text-white rounded-full font-semibold shadow-orange-glow active:scale-95 transition-transform"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20ingin%20konsultasi%20custom%20packaging%20untuk%20brand%20saya"
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 text-emerald-700 rounded-full font-semibold border border-emerald-200 active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Langsung</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


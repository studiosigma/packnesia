import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    whatsapp: '',
    product: 'Food Box',
    quantity: '1.000 - 5.000 pcs',
    designStatus: 'Sudah ada desain (Siap Cetak)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = encodeURIComponent(
      `*FORM KONSULTASI PACKNESIA*\n\n` +
      `• Nama: ${formData.name}\n` +
      `• Nama Brand: ${formData.brandName}\n` +
      `• WhatsApp: ${formData.whatsapp}\n` +
      `• Minat Produk: ${formData.product}\n` +
      `• Estimasi Volume: ${formData.quantity}\n` +
      `• Status Desain: ${formData.designStatus}\n` +
      `• Catatan Tambahan: ${formData.notes || '-'}\n\n` +
      `Halo tim Packnesia, mohon jadwalkan konsultasi dan info estimasi harganya ya!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/6287892251216?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-gray-100 my-0 sm:my-8 max-h-[92vh] sm:max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="pt-2.5 pb-1 sm:hidden bg-[#0E1D33] flex justify-center">
          <div className="w-12 h-1.5 bg-white/30 rounded-full" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0E1D33] to-[#1A2E4F] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>100% Free Consultation</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Konsultasi Kemasan Brand Anda
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Dapatkan saran pemilihan bahan foodgrade dan penawaran harga terbaik langsung dari tim ahli Packnesia.
          </p>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-[#0E1D33]">Terima Kasih, {formData.name}!</h4>
            <p className="text-sm text-gray-600">
              Tim spesialis kami siap menghubungi Anda di nomor WhatsApp <span className="font-bold text-gray-900">{formData.whatsapp}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-md cursor-pointer"
            >
              Kembali ke Beranda
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto overscroll-contain flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Brand / Usaha</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Kopi Pagi Hari"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Nomor WhatsApp Aktif</label>
              <input
                type="tel"
                required
                placeholder="0812xxxxxxx"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Produk Kemasan</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange bg-white"
                >
                  <option value="Food Box">Food Box</option>
                  <option value="Paper Cup">Paper Cup (Kopi & Minuman)</option>
                  <option value="Plastic Cup">Plastic Cup (PP/PET/Injection)</option>
                  <option value="Paper Bowl">Paper Bowl (Sup & Seblak)</option>
                  <option value="Box Fast Food & Pizza">Box Fast Food & Pizza</option>
                  <option value="Dus Martabak">Dus Martabak Anti-Rembes</option>
                  <option value="Cake Box">Cake Box & Dus Donat</option>
                  <option value="Stiker Label Kemasan">Stiker Label Kemasan Vinyl</option>
                  <option value="Coffee Packaging">Coffee Packaging Pouch</option>
                  <option value="Paper Bag">Paper Bag Takeaway</option>
                  <option value="Box Parfum">Box Parfum & Kosmetik</option>
                  <option value="Box Souvenir & Hampers">Box Souvenir & Hampers</option>
                  <option value="Custom Box">Custom Box / Hardbox</option>
                  <option value="Paket Lengkap">Paket Lengkap Branding</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Estimasi Kebutuhan</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange bg-white"
                >
                  <option value="500 - 1.000 pcs">500 - 1.000 pcs</option>
                  <option value="1.000 - 5.000 pcs">1.000 - 5.000 pcs</option>
                  <option value="5.000 - 20.000 pcs">5.000 - 20.000 pcs</option>
                  <option value="20.000+ pcs">20.000+ pcs</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Kesiapan Desain</label>
              <select
                value={formData.designStatus}
                onChange={(e) => setFormData({ ...formData, designStatus: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange bg-white"
              >
                <option value="Sudah ada desain (Siap Cetak)">Sudah ada desain (Siap Cetak)</option>
                <option value="Punya logo, butuh bantuan mockup kemasan">Punya logo, butuh mockup kemasan (Gratis)</option>
                <option value="Belum ada desain sama sekali">Belum ada desain sama sekali</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
              <textarea
                rows="2"
                placeholder="Misal: untuk packaging rice bowl hangat, anti rembes kuah..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-brand-orange resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-orange-glow transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim & Mulai Konsultasi Gratis</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


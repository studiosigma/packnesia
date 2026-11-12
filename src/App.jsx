import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import SolutionsSection from './components/SolutionsSection';
import PortfolioSection from './components/PortfolioSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import BundlingSection from './components/BundlingSection';
import RealSampleGallery from './components/RealSampleGallery';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import WhyPacknesiaSection from './components/WhyPacknesiaSection';
import CoverageSection from './components/CoverageSection';
import Footer from './components/Footer';

// Modals
import ProductModal from './components/ProductModal';
import AdvisorModal from './components/AdvisorModal';
import PortfolioModal from './components/PortfolioModal';
import ConsultationModal from './components/ConsultationModal';
import ProcessVideoModal from './components/ProcessVideoModal';
import SearchModal from './components/SearchModal';
import ArticleModal from './components/ArticleModal';
import AdminBlogModal from './components/AdminBlogModal';

// Blog Data persistence
import { getSavedArticles } from './data/blogData';

// Floating WhatsApp & Mobile Navigation
import { MessageCircle } from 'lucide-react';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isProcessVideoOpen, setIsProcessVideoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Blog / Article states
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isAdminBlogOpen, setIsAdminBlogOpen] = useState(false);

  const loadAllArticles = () => {
    setArticles(getSavedArticles());
  };

  useEffect(() => {
    loadAllArticles();

    const params = new URLSearchParams(window.location.search);
    const modal = params.get('modal');
    const id = params.get('id');
    const adminParam = params.get('admin');
    const articleSlug = params.get('article');

    if (modal === 'product') {
      setSelectedProductId(id || 'food-box');
    } else if (modal === 'advisor') {
      setIsAdvisorOpen(true);
    } else if (modal === 'consultation') {
      setIsConsultationOpen(true);
    } else if (modal === 'video') {
      setIsProcessVideoOpen(true);
    } else if (modal === 'portfolio') {
      setSelectedPortfolioId(id || 'good-coffee');
    } else if (modal === 'admin' || adminParam === 'true') {
      setIsAdminBlogOpen(true);
    }

    if (articleSlug) {
      const all = getSavedArticles();
      const found = all.find((a) => a.slug === articleSlug || a.id === articleSlug);
      if (found) setSelectedArticle(found);
    }
  }, []);

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleSelectPortfolio = (portfolioId) => {
    setSelectedPortfolioId(portfolioId);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectSolution = (solutionName) => {
    setIsAdvisorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0E1D33] flex flex-col selection:bg-brand-orange selection:text-white pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectProduct={handleSelectProduct}
        onSelectSolution={handleSelectSolution}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onWatchProcess={() => setIsProcessVideoOpen(true)}
        />

        {/* Products Section */}
        <ProductsSection onSelectProduct={handleSelectProduct} />

        {/* Solutions Section */}
        <SolutionsSection
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          onSelectSolution={handleSelectSolution}
        />

        {/* Portfolio Section */}
        <PortfolioSection
          onSelectPortfolio={handleSelectPortfolio}
          onViewAll={() => {
            const el = document.getElementById('portfolio-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Before vs After Packaging Transformation Slider */}
        <BeforeAfterSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* F&B Business Bundling Packages (AOV Booster) */}
        <BundlingSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Real Factory Printing Samples & Quality Proof Gallery */}
        <RealSampleGallery onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Client Reviews & Rating Section (SEO Social Proof) */}
        <TestimonialsSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Public Blog Section */}
        <BlogSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* SEO FAQ Section */}
        <FAQSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Why Packnesia & CTA Section */}
        <WhyPacknesiaSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Local SEO & Indonesian Coverage Section */}
        <CoverageSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button (Desktop & Tablet) */}
      <a
        href="https://wa.me/6287892251216?text=Halo%20Packnesia,%20saya%20tertarik%20untuk%20konsultasi%20custom%20packaging%20untuk%20bisnis%20saya"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Konsultasi via WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-orange rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-orange rounded-full border-2 border-white" />
      </a>

      {/* Mobile Sticky Bottom Quick-Bar (Mobile Ergonomics) */}
      <MobileBottomBar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Interactive Modals */}
      <ProductModal
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      <AdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
      />

      <PortfolioModal
        itemId={selectedPortfolioId}
        onClose={() => setSelectedPortfolioId(null)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ProcessVideoModal
        isOpen={isProcessVideoOpen}
        onClose={() => setIsProcessVideoOpen(false)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      {/* Reader Modal for Visitors */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Admin Blog Composer & Management CMS Modal */}
      <AdminBlogModal
        isOpen={isAdminBlogOpen}
        onClose={() => setIsAdminBlogOpen(false)}
        onArticleSaved={loadAllArticles}
        onPreviewArticle={(art) => setSelectedArticle(art)}
      />
    </div>
  );
}

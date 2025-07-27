import React from 'react';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import SitemapModal from './components/SitemapModal';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <ContactSection />
      <Footer />
      <CookieBanner />
      <SitemapModal />
    </div>
  );
}

export default App;
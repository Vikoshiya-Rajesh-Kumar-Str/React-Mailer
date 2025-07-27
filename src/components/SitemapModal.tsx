import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SitemapModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleSitemapClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.textContent?.trim() === 'Sitemap' || target.classList.contains('sitemap-trigger')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleSitemapClick);
    return () => document.removeEventListener('click', handleSitemapClick);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-blue-600 text-white border-none rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-700 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-4 text-blue-900 pr-12">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3934.673996545211!2d77.94844614298984!3d9.537025820039736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753178988985!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default SitemapModal;
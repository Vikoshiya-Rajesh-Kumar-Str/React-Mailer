import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGOhiHSeLm0MQ/company-logo_200_200/B56ZgSAwFQG0AM-/0/1752648844461?e=1756339200&v=beta&t=aXcC6wSVTxvVla6LltFx0IZyObGtJN4V-B8SLzYltqQ" 
                alt="Vikoshiya Technologies logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                href="/webpage.html" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                VIKOSHIYA TECHNOLOGIES
              </a>
              <a 
                href="/webpage.html#services" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a 
                href="/webpage.html#about" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="/blog.html" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/webpage.html" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            VIKOSHIYA TECHNOLOGIES
          </a>
          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            Services
          </a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            About
          </a>
          <a href="/blog.html" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
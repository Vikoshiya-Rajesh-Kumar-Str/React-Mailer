import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGOhiHSeLm0MQ/company-logo_200_200/B56ZgSAwFQG0AM-/0/1752648844461?e=1756339200&v=beta&t=aXcC6wSVTxvVla6LltFx0IZyObGtJN4V-B8SLzYltqQ"
              alt="Vikoshiya Technologies logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Vikoshiya Technologies delivers innovative, reliable IT solutions and services to help your business grow and succeed in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/webpage.html#services" className="hover:underline text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/webpage.html#about" className="hover:underline text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/blog.html" className="hover:underline text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact.html" className="hover:underline text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Main Street, Suite 400, Cityville, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@vikoshiya.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 Vikoshiya Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy.html" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms.html" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200 sitemap-trigger">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
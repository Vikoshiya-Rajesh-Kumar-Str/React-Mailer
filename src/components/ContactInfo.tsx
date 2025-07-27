import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-center text-lg md:text-xl gap-6">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Our Office</h3>
      
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors duration-200">
        <MapPin className="w-7 h-7 text-blue-700 flex-shrink-0" />
        <span>123 Main Street, Suite 400, Cityville, Country</span>
      </div>
      
      <div className="my-4">
        <iframe
          className="w-full h-48 border-none rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3934.673996545211!2d77.94844614298984!3d9.537025820039736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753178988985!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors duration-200">
        <Phone className="w-7 h-7 text-blue-700 flex-shrink-0" />
        <a href="tel:+1234567890" className="hover:underline">
          +1 (234) 567-890
        </a>
      </div>
      
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors duration-200">
        <Mail className="w-7 h-7 text-blue-700 flex-shrink-0" />
        <a href="mailto:info@vikoshiya.com" className="hover:underline">
          info@vikoshiya.com
        </a>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-900">Follow Us</h4>
        <div className="flex gap-5">
          <a
            href="https://facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            aria-label="Facebook"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            aria-label="Twitter"
          >
            <Twitter className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
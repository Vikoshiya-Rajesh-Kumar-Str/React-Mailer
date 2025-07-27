import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
        <div className="flex flex-col lg:flex-row gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
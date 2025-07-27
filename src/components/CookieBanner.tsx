import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleOptOut = () => {
    localStorage.setItem('cookieConsent', 'optout');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white text-gray-900 p-5 flex flex-col sm:flex-row justify-center items-center z-50 gap-4 shadow-2xl border-t border-gray-200">
      <span className="max-w-lg text-center sm:text-left text-sm sm:text-base">
        This website uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.
      </span>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="bg-blue-600 text-white border-none py-2 px-6 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition-colors duration-200"
        >
          Accept
        </button>
        <button
          onClick={handleOptOut}
          className="bg-white text-gray-700 border border-gray-300 py-2 px-6 rounded-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        >
          Opt Out
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
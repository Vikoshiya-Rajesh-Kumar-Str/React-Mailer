import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 flex justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-20 flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-600 mb-8">We've received your message and will get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 transform hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-20 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl bg-gray-50 transition-all duration-300 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl bg-gray-50 transition-all duration-300 outline-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl min-h-[120px] bg-gray-50 transition-all duration-300 outline-none resize-vertical"
            />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
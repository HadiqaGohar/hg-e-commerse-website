'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear previous messages
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Here you would typically send the form data to your backend
      console.log({ name, email, message });
      
      // Simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess('Message sent successfully!');

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('There was a problem sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#CDFAD5] h-[600px] '>
      <div className="max-w-md mx-auto p-6 bg-[#CDFAD5] border-2 border-[#185519] rounded-lg ">
        <h2 className="text-3xl font-semibold mb-5 text-center mt-10">Contact Us</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4"><strong>{success}</strong></p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700" htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={`w-full bg-[#185519] text-white p-2 rounded-md hover:bg-[#185519] transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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

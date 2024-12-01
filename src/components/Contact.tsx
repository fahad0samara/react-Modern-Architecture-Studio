import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4" />
                <span>contact@archiform.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4" />
                <span>123 Design Street, Architecture City, AC 12345</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white focus:outline-none text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white focus:outline-none text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white focus:outline-none text-white"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
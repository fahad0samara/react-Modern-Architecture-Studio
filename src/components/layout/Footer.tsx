import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">ARCHIFORM</span>
            </div>
            <p className="text-gray-400">
              Creating innovative spaces that inspire and endure.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Architectural Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Interior Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Urban Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Landscape Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Design Street</li>
              <li>Architecture City, AC 12345</li>
              <li>contact@archiform.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARCHIFORM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
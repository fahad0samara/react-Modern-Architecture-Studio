import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-bold text-gray-900">ARCHIFORM</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-gray-600 transition-colors">Home</a>
            <a href="#projects" className="text-gray-900 hover:text-gray-600 transition-colors">Projects</a>
            <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors">About</a>
            <a href="#services" className="text-gray-900 hover:text-gray-600 transition-colors">Services</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#projects" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Projects</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="flex flex-col items-end space-y-4">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-lg shadow-lg p-4 mb-4"
                >
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>

              <motion.a
                href="#home"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-900 p-3 rounded-full shadow-lg text-white hover:bg-gray-800 transition-colors"
              >
                <ChevronUp className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
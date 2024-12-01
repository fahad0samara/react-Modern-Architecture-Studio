import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <a
        href="#projects"
        className="flex flex-col items-center text-white hover:text-gray-300 transition-colors"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="h-6 w-6 transform rotate-90" />
        </motion.div>
      </a>
    </motion.div>
  );
}
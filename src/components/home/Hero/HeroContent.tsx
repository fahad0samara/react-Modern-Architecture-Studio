import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function HeroContent() {
  return (
    <div className="text-white max-w-3xl">
      <motion.h1
        variants={fadeIn}
        className="text-5xl md:text-6xl font-bold leading-tight mb-6"
      >
        Creating Spaces That Inspire
      </motion.h1>
      <motion.p
        variants={fadeIn}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 text-gray-200"
      >
        Award-winning architectural design studio crafting innovative and sustainable spaces for tomorrow.
      </motion.p>
      <motion.div
        variants={fadeIn}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          View Our Work
          <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center px-6 py-3 border-2 border-transparent bg-white text-lg font-medium rounded-md text-gray-900 hover:bg-gray-100 transition-all duration-300"
        >
          Get in Touch
          <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}
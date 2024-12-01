import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
      >
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
      </motion.div>

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
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';
import { ScrollIndicator } from './ScrollIndicator';

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
        <HeroBackground />
      </div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
      >
        <HeroContent />
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function ParallaxSection({ image, title, subtitle }: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="relative h-[50vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      
      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center text-center text-white"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
}
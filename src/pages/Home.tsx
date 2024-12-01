import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import ParallaxSection from '@/components/ParallaxSection';
import {
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  ContactSection
} from '@/components/home/Sections';
import {
  Awards,
  Process,
  Newsletter,
  BlogSection,
  FAQ,
  VirtualTour,
  Careers,
  ProjectTimeline
} from '@/components/features';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <Hero />
      
      <ParallaxSection
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
        title="Innovative Design Solutions"
        subtitle="Creating spaces that inspire and transform"
      />
      
      <motion.div variants={fadeInUp}>
        <ProjectsSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <VirtualTour />
      </motion.div>
      
      <ParallaxSection
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        title="Sustainable Architecture"
        subtitle="Building for a better tomorrow"
      />
      
      <motion.div variants={fadeInUp}>
        <ServicesSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Process />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProjectTimeline />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Awards />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <BlogSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Careers />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <FAQ />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <TestimonialsSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Newsletter />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <ContactSection />
      </motion.div>
    </motion.main>
  );
}
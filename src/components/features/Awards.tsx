import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const awards = [
  {
    icon: Trophy,
    year: "2023",
    title: "Best Sustainable Design",
    organization: "World Architecture Festival"
  },
  {
    icon: Award,
    year: "2023",
    title: "Innovation in Architecture",
    organization: "International Design Awards"
  },
  {
    icon: Shield,
    year: "2022",
    title: "Excellence in Urban Planning",
    organization: "Urban Development Institute"
  },
  {
    icon: Star,
    year: "2022",
    title: "Green Building Leadership",
    organization: "Sustainable Architecture Council"
  }
];

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading institutions in architecture and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <award.icon className="h-12 w-12 mx-auto mb-4 text-gray-900" />
              <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 mb-4">
                {award.year}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
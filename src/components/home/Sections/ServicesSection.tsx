import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, PenTool, Building, TreePine } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    description: "Innovative and functional designs that blend aesthetics with practicality."
  },
  {
    icon: PenTool,
    title: "Interior Planning",
    description: "Thoughtful interior spaces that enhance the user experience."
  },
  {
    icon: Building,
    title: "Urban Planning",
    description: "Sustainable urban solutions that create vibrant communities."
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Harmonious integration of architecture with natural surroundings."
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your vision and needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-gray-900 mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
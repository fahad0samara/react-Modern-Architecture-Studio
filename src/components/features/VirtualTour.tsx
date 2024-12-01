import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const tourSpots = [
  {
    id: 1,
    title: "Modern Office Complex",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    description: "Experience our award-winning commercial space design"
  },
  {
    id: 2,
    title: "Luxury Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    description: "Tour our latest residential project featuring sustainable design"
  },
  {
    id: 3,
    title: "Cultural Center",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
    description: "Explore our innovative approach to public spaces"
  }
];

const VirtualTour = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Virtual Tours</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our architectural projects through immersive virtual tours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourSpots.map((spot, index) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{spot.title}</h3>
                <p className="text-gray-300 mb-4">{spot.description}</p>
                <button className="inline-flex items-center text-white">
                  <Eye className="h-5 w-5 mr-2" />
                  Start Tour
                  <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 border border-white rounded-md text-white font-medium hover:bg-white/10 transition-colors">
            View All Virtual Tours
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTour;
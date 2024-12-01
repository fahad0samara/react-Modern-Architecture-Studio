import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "CEO, Urban Development Corp",
    content: "ARCHIFORM transformed our vision into reality. Their innovative approach to sustainable design exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Property Developer",
    content: "Working with ARCHIFORM was a game-changer. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Museum Director",
    content: "The team's creative vision brought our cultural space to life. They perfectly balanced aesthetics with functionality.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
              <div className="mb-4">
        
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
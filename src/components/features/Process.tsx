import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Layout, MessageSquare, Settings, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    icon: Lightbulb,
    title: "Initial Consultation",
    description: "We begin with understanding your vision, requirements, and project goals."
  },
  {
    icon: PenTool,
    title: "Concept Design",
    description: "Our team develops initial design concepts and preliminary sketches."
  },
  {
    icon: Layout,
    title: "Design Development",
    description: "Detailed plans are created with material selections and specifications."
  },
  {
    icon: MessageSquare,
    title: "Client Review",
    description: "We present the designs and incorporate your feedback and revisions."
  },
  {
    icon: Settings,
    title: "Technical Documentation",
    description: "Complete construction documents and technical specifications are prepared."
  },
  {
    icon: CheckCircle,
    title: "Project Delivery",
    description: "We oversee the construction process to ensure quality execution."
  }
];

const Process = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to bringing your architectural vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-900 rounded-full p-3 mr-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
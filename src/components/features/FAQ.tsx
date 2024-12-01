import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: "What is your design process?",
    answer: "Our design process begins with an initial consultation to understand your vision and requirements. We then move through concept development, detailed design, and technical documentation phases, maintaining close collaboration throughout."
  },
  {
    question: "How do you handle project budgets?",
    answer: "We work closely with clients to establish clear budgets early in the process and provide regular updates. Our team is experienced in value engineering and can suggest alternatives to maintain design quality within budget constraints."
  },
  {
    question: "What sustainable practices do you implement?",
    answer: "We integrate sustainable practices through energy-efficient design, environmentally friendly materials, and innovative technologies. Each project considers environmental impact and long-term sustainability."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A typical residential project might take 6-12 months from concept to completion, while larger commercial projects can take 18-24 months or more."
  },
  {
    question: "Do you handle all necessary permits and approvals?",
    answer: "Yes, we manage all aspects of the permitting process, including zoning requirements, building permits, and other necessary approvals. Our team has extensive experience navigating local regulations."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-600" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
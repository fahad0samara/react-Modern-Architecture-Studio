import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock, MapPin, ArrowRight } from 'lucide-react';

const positions = [
  {
    id: 1,
    title: "Senior Architect",
    type: "Full-time",
    location: "New York, NY",
    experience: "5+ years",
    description: "Lead architectural projects and mentor junior team members."
  },
  {
    id: 2,
    title: "Interior Designer",
    type: "Full-time",
    location: "Los Angeles, CA",
    experience: "3+ years",
    description: "Create innovative interior design solutions for high-end projects."
  },
  {
    id: 3,
    title: "Project Manager",
    type: "Full-time",
    location: "Chicago, IL",
    experience: "4+ years",
    description: "Oversee project execution and client relationships."
  }
];

export default function Careers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build your career with us and help shape the future of architecture.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {positions.map((position) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-md">
            <GraduationCap className="h-12 w-12 mx-auto text-gray-900 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Career Program</h3>
            <p className="text-gray-600 mb-6">
              We're committed to nurturing the next generation of architectural talent. Our internship and graduate programs provide hands-on experience and mentorship.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
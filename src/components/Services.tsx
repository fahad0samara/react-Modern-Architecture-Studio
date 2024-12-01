import React from 'react';
import { Compass, PenTool, Building, TreePine } from 'lucide-react';

const services = [
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Architectural Design",
    description: "Innovative and functional designs that blend aesthetics with practicality."
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Interior Planning",
    description: "Thoughtful interior spaces that enhance the user experience."
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Urban Planning",
    description: "Sustainable urban solutions that create vibrant communities."
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Landscape Design",
    description: "Harmonious integration of architecture with natural surroundings."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your vision and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-gray-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
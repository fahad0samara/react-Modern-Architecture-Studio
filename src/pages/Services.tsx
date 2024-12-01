import React from 'react';
import { Compass, PenTool, Building, TreePine, Users, Ruler, Lightbulb, Cog } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Architectural Design',
    description: 'Innovative and functional designs that blend aesthetics with practicality.',
    features: ['Custom Design Solutions', 'Space Planning', 'Concept Development'],
  },
  {
    icon: PenTool,
    title: 'Interior Planning',
    description: 'Thoughtful interior spaces that enhance the user experience.',
    features: ['Space Optimization', 'Material Selection', 'Lighting Design'],
  },
  {
    icon: Building,
    title: 'Urban Planning',
    description: 'Sustainable urban solutions that create vibrant communities.',
    features: ['Master Planning', 'Urban Design', 'Development Strategy'],
  },
  {
    icon: TreePine,
    title: 'Landscape Design',
    description: 'Harmonious integration of architecture with natural surroundings.',
    features: ['Sustainable Gardens', 'Outdoor Spaces', 'Environmental Planning'],
  },
  {
    icon: Users,
    title: 'Project Management',
    description: 'Comprehensive oversight of architectural projects from concept to completion.',
    features: ['Timeline Management', 'Budget Control', 'Quality Assurance'],
  },
  {
    icon: Ruler,
    title: 'Technical Documentation',
    description: 'Detailed technical drawings and documentation for construction.',
    features: ['Construction Documents', 'Technical Specifications', 'Building Codes'],
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Design',
    description: 'Eco-friendly solutions that minimize environmental impact.',
    features: ['Energy Efficiency', 'Green Materials', 'LEED Certification'],
  },
  {
    icon: Cog,
    title: 'Building Information Modeling',
    description: 'Advanced 3D modeling and information management.',
    features: ['3D Visualization', 'Clash Detection', 'Data Management'],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your vision and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
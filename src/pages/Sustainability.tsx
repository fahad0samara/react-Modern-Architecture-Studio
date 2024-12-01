import React from 'react';
import { Leaf, Recycle, Sun, Wind } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: 'Green Building Materials',
    description: 'We prioritize sustainable and locally sourced materials in all our projects.',
  },
  {
    icon: Sun,
    title: 'Energy Efficiency',
    description: 'Our designs maximize natural light and incorporate renewable energy solutions.',
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    description: 'We implement circular design principles to minimize waste and promote recycling.',
  },
  {
    icon: Wind,
    title: 'Natural Ventilation',
    description: 'Smart design that reduces reliance on mechanical ventilation systems.',
  },
];

export default function Sustainability() {
  return (
    <div className="pt-20">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
          alt="Sustainable architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Sustainability</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to the Environment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in creating sustainable architecture that minimizes environmental impact while maximizing comfort and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <initiative.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sustainable Approach</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                At ARCHIFORM, sustainability isn't just a buzzword—it's a fundamental principle that guides every project we undertake. We integrate environmental consciousness into every phase of our design process.
              </p>
              <p className="text-gray-600">
                Our team stays at the forefront of sustainable building practices, constantly researching and implementing innovative solutions that reduce environmental impact while creating beautiful, functional spaces.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
                alt="Sustainable building"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
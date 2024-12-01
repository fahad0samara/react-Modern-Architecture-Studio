import React from 'react';
import { Award, Users, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '25+' },
  { icon: Users, label: 'Team Members', value: '50+' },
  { icon: Clock, label: 'Projects Completed', value: '500+' },
  { icon: Globe, label: 'Countries Served', value: '20+' },
];

export default function About() {
  return (
    <div className="pt-20">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Architecture office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1998, ARCHIFORM has been at the forefront of architectural innovation,
              creating spaces that inspire and transform communities around the world.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of passionate architects and designers brings together decades of experience
              with fresh perspectives to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600">
              We believe in sustainable design practices and creating spaces that harmoniously
              blend with their environment while meeting the needs of those who use them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-gray-900" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
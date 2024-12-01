import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Principal Architect',
    bio: 'Award-winning architect with 15+ years of experience in sustainable design.',
    linkedin: '#',
    email: 'sarah@archiform.com',
  },
  {
    name: 'Michael Chen',
    role: 'Design Director',
    bio: 'Specializes in urban planning and contemporary architectural design.',
    linkedin: '#',
    email: 'michael@archiform.com',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Interior Design Lead',
    bio: 'Creates stunning interior spaces that complement architectural design.',
    linkedin: '#',
    email: 'emma@archiform.com',
  },
  {
    name: 'David Kim',
    role: 'Project Manager',
    bio: 'Ensures project delivery excellence and client satisfaction.',
    linkedin: '#',
    email: 'david@archiform.com',
  },
];

export default function Team() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who bring our architectural visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
           
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
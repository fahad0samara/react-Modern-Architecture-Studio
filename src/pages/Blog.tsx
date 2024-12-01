import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring innovative approaches to eco-friendly building design and construction.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    author: 'Sarah Johnson',
    date: '2024-02-15',
    category: 'Sustainability',
  },
  {
    id: 2,
    title: 'Urban Planning Trends for 2024',
    excerpt: 'New developments in city design that prioritize community and sustainability.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    author: 'Michael Chen',
    date: '2024-02-10',
    category: 'Urban Design',
  },
  {
    id: 3,
    title: 'Integrating Technology in Modern Homes',
    excerpt: 'How smart home technology is shaping residential architecture.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    author: 'Emma Rodriguez',
    date: '2024-02-05',
    category: 'Technology',
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and perspectives on architecture, design, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="flex items-center text-gray-900 font-medium hover:text-gray-600">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
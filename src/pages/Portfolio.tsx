import React from 'react';
import { Filter, ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Sustainable'];

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Waterfront Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    year: '2023',
  },
  {
    id: 2,
    title: 'Urban Innovation Center',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    year: '2022',
  },
  {
    id: 3,
    title: 'Contemporary Art Museum',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80',
    year: '2023',
  },
  {
    id: 4,
    title: 'Eco-Friendly Office Complex',
    category: 'Sustainable',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80',
    year: '2022',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = portfolioItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of architectural projects that showcase our expertise and innovation.
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <Filter className="h-5 w-5 text-gray-500 mr-3" />
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <p className="text-sm mb-2">{item.category} · {item.year}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <button className="flex items-center text-sm hover:underline">
                    View Project <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
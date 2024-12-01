import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

const categories: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'sustainable', label: 'Sustainable' },
];

const locations: FilterOption[] = [
  { id: 'all', label: 'All Locations' },
  { id: 'north-america', label: 'North America' },
  { id: 'europe', label: 'Europe' },
  { id: 'asia', label: 'Asia' },
];

const years: FilterOption[] = [
  { id: 'all', label: 'All Years' },
  { id: '2024', label: '2024' },
  { id: '2023', label: '2023' },
  { id: '2022', label: '2022' },
];

interface ProjectFiltersProps {
  onFilterChange: (filters: {
    category: string;
    location: string;
    year: string;
  }) => void;
}

export default function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [year, setYear] = useState('all');
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (
    type: 'category' | 'location' | 'year',
    value: string
  ) => {
    const newFilters = {
      category,
      location,
      year,
      [type]: value,
    };

    if (type === 'category') setCategory(value);
    if (type === 'location') setLocation(value);
    if (type === 'year') setYear(value);

    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    setCategory('all');
    setLocation('all');
    setYear('all');
    onFilterChange({ category: 'all', location: 'all', year: 'all' });
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <Filter className="h-5 w-5 mr-2" />
          <span className="font-medium">Filters</span>
        </button>

        {(category !== 'all' || location !== 'all' || year !== 'all') && (
          <button
            onClick={resetFilters}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <X className="h-4 w-4 mr-1" />
            <span className="text-sm">Reset Filters</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleFilterChange('category', cat.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        category === cat.id
                          ? 'bg-gray-900 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Location</h3>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => handleFilterChange('location', loc.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        location === loc.id
                          ? 'bg-gray-900 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Year</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map((y) => (
                    <button
                      key={y.id}
                      onClick={() => handleFilterChange('year', y.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        year === y.id
                          ? 'bg-gray-900 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {y.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
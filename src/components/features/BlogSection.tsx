import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring innovative approaches to eco-friendly building design and the impact of climate-conscious architecture.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80",
    author: "Sarah Johnson",
    date: "2024-02-15",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Integrating Smart Technology in Modern Homes",
    excerpt: "How IoT and smart home technologies are reshaping residential architecture and improving living spaces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    author: "Michael Chen",
    date: "2024-02-10",
    category: "Technology",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Urban Planning Trends for 2024",
    excerpt: "Analyzing the latest trends in urban development and their impact on community living.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
    author: "Emma Rodriguez",
    date: "2024-02-05",
    category: "Urban Design",
    readTime: "6 min read"
  }
];

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our thoughts on architecture, design, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 border border-gray-900 rounded-md text-gray-900 font-medium hover:bg-gray-50 transition-colors">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
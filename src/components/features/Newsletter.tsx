import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 max-w-md">
              Stay updated with our latest projects, industry insights, and architectural innovations.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 w-full sm:w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-green-400"
              >
                Thank you for subscribing!
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-red-400"
              >
                Please enter a valid email address.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
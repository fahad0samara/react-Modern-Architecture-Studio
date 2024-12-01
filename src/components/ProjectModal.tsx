import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Ruler, Building } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
  location: string;
  completion: string;
  area: string;
  client: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-64 sm:h-96">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Completion</p>
                    <p className="font-medium">{project.completion}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-medium">{project.area}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h4 className="text-xl font-bold mb-4">Project Overview</h4>
                <p className="text-gray-600 mb-6">{project.details}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
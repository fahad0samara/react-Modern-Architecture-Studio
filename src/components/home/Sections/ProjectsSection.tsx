import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Plus } from 'lucide-react';
import ProjectModal from '@/components/ProjectModal';

const projects = [
  {
    id: 1,
    title: "Azure Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
    description: "Modern office complex with sustainable design",
    details: "A 40-story commercial tower featuring state-of-the-art sustainable technologies.",
    location: "Downtown Metropolitan",
    completion: "2023",
    area: "75,000 sqm",
    client: "Azure Development Corp"
  },
  {
    id: 2,
    title: "Harmony Gardens",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    description: "Luxury residential development with integrated green spaces",
    details: "A sustainable residential complex with 200 luxury apartments.",
    location: "Suburban Heights",
    completion: "2023",
    area: "45,000 sqm",
    client: "Green Living Developments"
  }
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of innovative architectural designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-white mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
                <div className="mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white mr-2">View Details</span>
                  <Plus className="h-4 w-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
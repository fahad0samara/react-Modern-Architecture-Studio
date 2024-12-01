import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Scene } from './3d/Scene';
import { ModelSelector } from './3d/ModelSelector';
import LoadingSpinner from '../LoadingSpinner';

// Using simple cube model URLs that are known to work
const models = [
  {
    id: 1,
    name: "Modern Office Building",
    url: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF/Box.gltf"
  },
  {
    id: 2,
    name: "Residential Complex",
    url: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF/Box.gltf"
  }
];

export default function ModelViewer() {
  const [activeModel, setActiveModel] = useState(models[0]);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Models</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our architectural designs in 3D. Rotate and zoom to examine details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg overflow-hidden" style={{ height: '500px' }}>
            <Suspense fallback={<LoadingSpinner />}>
              <Scene modelUrl={activeModel.url} />
            </Suspense>
          </div>

          <div>
            <ModelSelector
              models={models}
              activeModel={activeModel}
              onSelect={setActiveModel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
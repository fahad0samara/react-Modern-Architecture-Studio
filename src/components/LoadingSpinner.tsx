import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
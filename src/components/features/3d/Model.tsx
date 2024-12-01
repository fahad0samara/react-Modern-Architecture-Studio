import React, { useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps {
  url: string;
}

export function Model({ url }: ModelProps) {
  const [error, setError] = useState<string | null>(null);
  const gltf = useLoader(GLTFLoader, url, undefined, (error) => {
    console.error('Error loading model:', error);
    setError('Failed to load 3D model');
  });

  if (error) {
    return null;
  }

  return <primitive object={gltf.scene} />;
}
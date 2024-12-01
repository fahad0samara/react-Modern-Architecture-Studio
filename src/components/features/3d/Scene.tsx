import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';

interface SceneProps {
  modelUrl: string;
}

export function Scene({ modelUrl }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
}
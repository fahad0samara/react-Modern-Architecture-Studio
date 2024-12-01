import React from 'react';

export function HeroBackground() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
        alt="Modern architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
}
import { useState, useEffect } from 'react';

export const useImagePreload = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
  }, [imageSrc]);

  return isLoaded;
};
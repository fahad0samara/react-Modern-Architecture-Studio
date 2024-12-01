import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        if (isElementVisible && freezeOnceVisible) {
          frozen.current = true;
          setIsVisible(true);
          observer.unobserve(element);
          return;
        }
        setIsVisible(isElementVisible);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [elementRef, isVisible] as const;
};
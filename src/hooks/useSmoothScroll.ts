import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '@/utils/scroll';

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  delay?: number;
}

/**
 * Hook to handle smooth scrolling to elements
 * @param options - Configuration options for smooth scrolling
 * @returns Object with scroll functions
 */
export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { offset = 80, duration = 800, delay = 100 } = options;
  const location = useLocation();

  // Handle hash in URL when page loads or location changes
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the DOM is fully loaded
      const timer = setTimeout(() => {
        const id = location.hash.substring(1);
        scrollToElement(id, offset, duration);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [location, offset, duration, delay]);

  // Function to scroll to an element by ID
  const scrollTo = useCallback((elementId: string, customOffset?: number) => {
    scrollToElement(
      elementId, 
      customOffset !== undefined ? customOffset : offset, 
      duration
    );
  }, [offset, duration]);

  return { scrollTo };
};

export default useSmoothScroll;

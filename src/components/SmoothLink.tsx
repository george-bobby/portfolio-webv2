import { ReactNode } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { scrollToElement } from '@/utils/scroll';

interface SmoothLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: ReactNode;
  offset?: number;
  duration?: number;
}

const SmoothLink = ({ 
  to, 
  children, 
  offset = 80, // Default offset to account for fixed header
  duration = 800,
  ...props 
}: SmoothLinkProps) => {
  const location = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's an anchor link
    if (to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.substring(1);
      scrollToElement(targetId, offset, duration);
      return;
    }
    
    // Check if it's an internal link with an anchor
    if (to.includes('#') && !to.startsWith('http')) {
      const [path, hash] = to.split('#');
      
      // If we're already on the correct page, just scroll to the element
      if (location.pathname === path || (path === '/' && location.pathname === '/')) {
        e.preventDefault();
        scrollToElement(hash, offset, duration);
      }
    }
  };
  
  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothLink;

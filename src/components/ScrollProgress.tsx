
import { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

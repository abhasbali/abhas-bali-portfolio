
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '💌' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Dynamic particle effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse transition-all duration-300"
            style={{
              left: `${typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth) * 100 : 50}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div 
            className="absolute w-0.5 h-0.5 bg-pink-400 rounded-full opacity-40 animate-pulse transition-all duration-300"
            style={{
              left: `${typeof window !== 'undefined' ? ((mousePosition.x / window.innerWidth) * 100) + 10 : 60}%`,
              top: '30%',
              animationDelay: '150ms'
            }}
          />
          <div 
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-40 animate-pulse transition-all duration-300"
            style={{
              left: `${typeof window !== 'undefined' ? ((mousePosition.x / window.innerWidth) * 100) - 10 : 40}%`,
              top: '70%',
              animationDelay: '300ms'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center h-16">
            {/* Enhanced Logo - Now on the left side of centered nav */}
            <div className="absolute left-4 flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="group relative flex items-center space-x-2 text-2xl font-bold transition-all duration-300 hover:scale-110"
              >
                <div className="relative">
                  <Code2 className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 group-hover:rotate-12" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  AB
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </div>

            {/* Enhanced Desktop Navigation - Now centered */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:scale-105 animate-fade-in ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base group-hover:animate-bounce">{item.icon}</span>
                      <span className="relative">
                        {item.label}
                        {activeSection === item.id && (
                          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                        )}
                      </span>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 rounded-full transition-all duration-300 -z-10" />
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Mobile menu button - Now on the right */}
            <div className="absolute right-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group p-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <div className="relative z-10">
                  {isOpen ? (
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu size={24} className="group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20 animate-slide-in">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center space-x-3 px-4 py-3 text-left font-medium transition-all duration-300 rounded-xl hover:scale-105 animate-fade-in ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="text-xl group-hover:animate-bounce">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

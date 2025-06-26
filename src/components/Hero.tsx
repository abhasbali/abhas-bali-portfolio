
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Full-Stack Developer & ML Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 animate-pulse">
            <img 
              src="/lovable-uploads/d8a73c47-6d7e-447b-b150-3bd212aedbf1.png" 
              alt="Abhas Bali"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-ping" />
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
          Abhas Bali
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-2 h-12 flex items-center justify-center">
          <span className="font-mono">{text}</span>
          {isTyping && <span className="animate-pulse">|</span>}
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          3rd-year B.Tech student at SRM Institute of Science & Technology, passionate about building innovative solutions with Machine Learning and Web Development.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button
            size="lg"
            variant="outline"
            className="group bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/abhasbali" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:abhasmlb@gmail.com">
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Email
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Resume
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

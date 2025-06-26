
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-50 transition-all duration-1000">
      <ScrollProgress />
      <Navigation activeSection={activeSection} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

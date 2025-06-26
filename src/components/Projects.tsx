
import { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'DAA Portfolio Website',
      description: 'A beautiful developer portfolio demonstrating mastery in Design and Analysis of Algorithms with a minimal and sleek UI.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Algorithm Design', 'Portfolio', 'React', 'UI/UX'],
      category: 'portfolio',
      github: 'https://github.com/abhasbali',
      live: 'https://abhas-daa-portfolio.vercel.app',
    },
    {
      title: 'Crack Detection AI',
      description: 'An AI-powered system for detecting cracks in infrastructure using deep learning models. Focus on practical research deployment with a clean, academic-style UI.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      tags: ['AI', 'Deep Learning', 'Computer Vision', 'Research'],
      category: 'ai',
      github: 'https://github.com/abhasbali',
      live: 'https://crack-detection-ai.vercel.app',
    },
    {
      title: 'Zentry Clone (Security Dashboard)',
      description: 'A functional clone of the Zentry security dashboard with admin controls, modern layout, and smart data visualization.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['Dashboard', 'Security', 'Data Viz', 'Admin Panel'],
      category: 'dashboard',
      github: 'https://github.com/abhasbali',
      live: 'https://abhas-zentry-clone.vercel.app',
    },
    {
      title: 'SaaS Student Newsletter Platform',
      description: 'A Software as a Service (SaaS) platform that helps student content creators publish newsletters, analyze audience engagement, and monetize reach.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['SaaS', 'Newsletter', 'Analytics', 'Monetization'],
      category: 'saas',
      github: 'https://github.com/abhasbali',
      live: 'https://saa-s-student.vercel.app',
    },
    {
      title: 'NFT Marketplace',
      description: 'A full-stack NFT Marketplace with a gamified interface, minting functionality, dynamic filtering, and user dashboard. Styled for a next-gen crypto audience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['NFT', 'Blockchain', 'Web3', 'Marketplace'],
      category: 'web3',
      github: 'https://github.com/abhasbali',
      live: 'https://lovable.dev/projects/4cf2d132-c623-4eb1-b98d-9264bb02e248',
    },
    {
      title: 'AI Teacher Assistant',
      description: 'An AI-powered teaching assistant that helps generate lessons, quizzes, and explanations dynamically. Perfect for educators and edtech platforms.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tags: ['AI', 'Education', 'Teaching', 'EdTech'],
      category: 'ai',
      github: 'https://github.com/abhasbali',
      live: 'https://ai-teacher-steel.vercel.app',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'saas', label: 'SaaS' },
    { id: 'web3', label: 'Web3' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="group/btn bg-white/10 border-white/20 hover:bg-white/20 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group/btn bg-white/10 border-white/20 hover:bg-white/20 flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

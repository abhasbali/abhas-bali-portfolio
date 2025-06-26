
import { Code, Database, Brain, Trophy } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building modern web applications with React, Node.js, and cutting-edge technologies',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing intelligent systems with Python, TensorFlow, and computer vision',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Designing scalable APIs and database systems with MongoDB and PostgreSQL',
    },
    {
      icon: Trophy,
      title: 'Competitive Programming',
      description: 'Strong foundation in DSA with consistent hackathon rankings',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer and machine learning enthusiast currently pursuing my B.Tech at SRM Institute of Science & Technology. With a strong foundation in both frontend and backend technologies, I love creating innovative solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech began with a curiosity for how things work, which evolved into building complete applications from scratch. I've ranked consistently in hackathons and have hands-on experience with modern technologies including React, Node.js, Python, and machine learning frameworks.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['React', 'Node.js', 'Python', 'Machine Learning', 'Java', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200 hover:scale-105 transition-transform cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <highlight.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

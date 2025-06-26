
import { useState, useEffect, useRef } from 'react';
import { RadialChart } from './charts/RadialChart';
import { AnimatedBarChart } from './charts/AnimatedBarChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  color: string;
  projects?: string[];
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  overallScore: number;
}

export const SkillsChart = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      title: 'Frontend Development',
      icon: '📦',
      overallScore: 90,
      skills: [
        { 
          name: 'React', 
          level: 90, 
          color: 'from-blue-500 to-cyan-500',
          projects: ['E-commerce Platform', 'SaaS Dashboard', 'Portfolio Site']
        },
        { 
          name: 'Tailwind CSS', 
          level: 95, 
          color: 'from-teal-500 to-green-500',
          projects: ['Modern UI Components', 'Responsive Layouts']
        },
        { 
          name: 'JavaScript', 
          level: 85, 
          color: 'from-yellow-500 to-orange-500',
          projects: ['Interactive Features', 'API Integrations']
        },
        { 
          name: 'TypeScript', 
          level: 80, 
          color: 'from-blue-600 to-purple-600',
          projects: ['Type-safe Applications', 'Enterprise Projects']
        },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: '🛠',
      overallScore: 78,
      skills: [
        { 
          name: 'Node.js', 
          level: 85, 
          color: 'from-green-500 to-emerald-500',
          projects: ['REST APIs', 'Real-time Chat Apps']
        },
        { 
          name: 'Express.js', 
          level: 80, 
          color: 'from-gray-500 to-slate-500',
          projects: ['Web Servers', 'API Middleware']
        },
        { 
          name: 'Firebase', 
          level: 70, 
          color: 'from-orange-500 to-red-500',
          projects: ['Authentication Systems', 'Real-time Database']
        },
      ],
    },
    programming: {
      title: 'Programming Languages',
      icon: '💻',
      overallScore: 85,
      skills: [
        { 
          name: 'Python', 
          level: 90, 
          color: 'from-yellow-500 to-green-500',
          projects: ['Data Analysis', 'ML Models', 'Automation Scripts']
        },
        { 
          name: 'Java', 
          level: 85, 
          color: 'from-red-500 to-orange-500',
          projects: ['Enterprise Applications', 'Object-Oriented Design']
        },
        { 
          name: 'C++', 
          level: 80, 
          color: 'from-blue-500 to-purple-500',
          projects: ['System Programming', 'Algorithm Optimization']
        },
      ],
    },
    ml: {
      title: 'Machine Learning & AI',
      icon: '🤖',
      overallScore: 80,
      skills: [
        { 
          name: 'Computer Vision', 
          level: 85, 
          color: 'from-green-500 to-blue-500',
          projects: ['Image Recognition', 'Object Detection']
        },
        { 
          name: 'Model Deployment', 
          level: 80, 
          color: 'from-purple-500 to-pink-500',
          projects: ['Cloud ML Services', 'API Endpoints']
        },
        { 
          name: 'Scikit-learn / TensorFlow', 
          level: 75, 
          color: 'from-orange-500 to-red-500',
          projects: ['Predictive Models', 'Neural Networks']
        },
      ],
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto">
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2">
          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white hover:bg-white/10"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(skillCategories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Radial Progress Chart */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    {category.title}
                  </h3>
                  <RadialChart
                    value={category.overallScore}
                    size={200}
                    strokeWidth={12}
                    isVisible={isVisible}
                  />
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-white">{category.overallScore}%</div>
                    <div className="text-sm text-gray-400">Overall Proficiency</div>
                  </div>
                </div>
              </div>

              {/* Animated Bar Chart */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-bold text-white mb-6">Individual Skills</h3>
                  <AnimatedBarChart
                    skills={category.skills}
                    isVisible={isVisible}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

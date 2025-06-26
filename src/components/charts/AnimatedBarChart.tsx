
import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
  projects?: string[];
}

interface AnimatedBarChartProps {
  skills: Skill[];
  isVisible: boolean;
}

export const AnimatedBarChart = ({ skills, isVisible }: AnimatedBarChartProps) => {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevels(skills.map(skill => skill.level));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skills]);

  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="relative group"
          onMouseEnter={() => setHoveredSkill(index)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
              {skill.name}
            </span>
            <span className="text-sm text-gray-400 font-mono">
              {animatedLevels[index]}%
            </span>
          </div>
          
          <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
              style={{ 
                width: `${animatedLevels[index]}%`,
                animationDelay: `${index * 200}ms`
              }}
            />
            
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50" />
          </div>

          {/* Tooltip */}
          {hoveredSkill === index && skill.projects && (
            <div className="absolute top-full left-0 mt-2 p-3 bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl z-10 min-w-[200px]">
              <div className="text-sm text-white font-medium mb-2">Projects:</div>
              <div className="space-y-1">
                {skill.projects.map((project, pIndex) => (
                  <div key={pIndex} className="text-xs text-gray-300 flex items-center">
                    <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                    {project}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

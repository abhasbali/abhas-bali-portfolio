
import { SkillsChart } from './SkillsChart';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        {/* Interactive Skills Chart */}
        <SkillsChart />

        {/* Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">10th</div>
            <div className="text-gray-300">CAD 2.0 Hackathon</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">8+</div>
            <div className="text-gray-300">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">5</div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Certifications = () => {
  const certifications = [
    {
      title: 'Machine Learning by Andrew Ng',
      issuer: 'Coursera',
      date: '2023',
      description: 'Comprehensive course covering ML algorithms, neural networks, and practical applications.',
      icon: '🧠',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://coursera.org/share/ec77e3fa1581ecf68388901c8d546d20',
    },
    {
      title: 'Full-Stack Web Development Bootcamp',
      issuer: 'Angela Yu',
      date: '2023',
      description: 'Complete web development course covering frontend and backend technologies.',
      icon: '🌐',
      color: 'from-green-500 to-emerald-500',
      link: 'https://www.udemy.com/certificate/UC-9564defe-dea5-4e9f-8f23-9e92c10ed16b/',
    },
    {
      title: 'Data Structures and Algorithms Specialization',
      issuer: 'UC San Diego',
      date: '2023',
      description: 'Advanced algorithms and data structures for competitive programming.',
      icon: '🔍',
      color: 'from-purple-500 to-violet-500',
      link: 'https://coursera.org/share/609a99ddb747ecb5d69d662a837e7bd2',
    },
    {
      title: 'Java Programming',
      issuer: 'NPTEL',
      date: '2022',
      description: 'Object-oriented programming concepts and Java application development.',
      icon: '☕',
      color: 'from-orange-500 to-red-500',
      link: '#',
    },
    {
      title: 'Python Programming',
      issuer: 'Angela Yu',
      date: '2022',
      description: 'Python fundamentals and advanced concepts for data science and web development.',
      icon: '🐍',
      color: 'from-yellow-500 to-orange-500',
      link: 'https://www.udemy.com/certificate/UC-c0981b5a-c003-4ad2-8cdc-27646f809950/',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <Award className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="group/btn bg-white/10 border-white/20 hover:bg-white/20 w-full"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 border-dashed">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Add New Certification</h3>
            <p className="text-gray-400 mb-4">Upload your latest certifications to keep your profile updated</p>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 hover:bg-white/20"
            >
              Upload Certificate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

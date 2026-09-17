import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-500 flex flex-col justify-between group"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
          {edu.duration}
        </span>
        <span className="bg-red-500/10 text-red-400 text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-red-500/20">
          {edu.badge}
        </span>
      </div>

      <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight group-hover:text-red-400 transition-colors">
        {edu.degree}
      </h3>
      
      <p className="text-white/70 text-sm font-medium mb-6">
        {edu.institution}
      </p>
    </div>

    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
      <span className="text-white/40 text-xs font-mono uppercase tracking-wider">Academic Score</span>
      <span className="text-white font-mono font-bold text-sm bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[#ff2a2a]">
        {edu.score}
      </span>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top transitioning from red Internships section */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Academic milestones building a strong theoretical foundation in computer science and technology.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

import { technicalSkills } from '../data/portfolioData';

const SkillItem = ({ name }) => (
  <div className="group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-300">
    <span className="text-white/90 text-sm font-semibold tracking-wide group-hover/item:text-white transition-colors">
      {name}
    </span>
    <span className="w-2 h-2 rounded-full bg-red-500/70 group-hover/item:bg-red-400 group-hover/item:scale-125 group-hover/item:shadow-[0_0_10px_#ff2a2a] transition-all" />
  </div>
);

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-white text-lg font-black tracking-tight mb-5 pb-2.5 border-b border-white/10 uppercase flex items-center justify-between">
        <span>{category.title}</span>
        <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full">
          {category.skills.length} Skills
        </span>
      </h3>
      <div className="flex flex-col gap-2">
        {category.skills.map((skillName) => (
          <SkillItem key={skillName} name={skillName} />
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;

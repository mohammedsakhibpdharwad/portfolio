import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <div 
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/25 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between group h-full"
  >
    <div className="mb-5">
      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 select-none">
          {cert.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-1 group-hover:text-white transition-colors">
            {cert.name}
          </h3>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
            {cert.issuer}
          </p>
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Verified
      </span>

      <a 
        href={cert.verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-black hover:text-white hover:border-white/30 border border-transparent transition-all duration-300 shadow-sm group/btn"
        aria-label={`Verify certificate for ${cert.name}`}
      >
        <span>Verify Certificate</span>
        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section id="certifications" className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top (transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/90 font-mono font-bold mb-4 shadow-sm bg-black/20 backdrop-blur-sm uppercase tracking-widest">
            7 Verified Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            7 industry-recognized credentials validating expertise in Cloud AI, Database Optimization, Full-Stack Architecture, and Software Engineering.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.featured.map((cert, index) => {
            const isLastOdd = index === certificates.featured.length - 1;
            return (
              <div 
                key={cert.name}
                className={isLastOdd ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              >
                <CertificateCard 
                  cert={cert} 
                  aosDelay={String(((index % 3) + 1) * 100)} 
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative stars (matching About section) */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;

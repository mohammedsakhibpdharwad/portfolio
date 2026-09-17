import stackImage from '../assets/about/mohammedsakhib-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <defs>
        <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        fill="url(#pyGrad1)"
        d="M63.5 12c-27.5 0-25.8 11.9-25.8 11.9l.1 12.3h26.2v3.7H27.5C12.8 39.9 12 51.5 12 51.5s-.8 13.8 0 25.8c.8 12.1 9.4 12.1 9.4 12.1h8.2v-11.5c0-13.8 11.5-13.1 11.5-13.1h26.2c11.1 0 10.7-10.2 10.7-10.2V23.9s1.2-11.9-24.5-11.9zm-13.9 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
      />
      <path
        fill="url(#pyGrad2)"
        d="M64.5 116c27.5 0 25.8-11.9 25.8-11.9l-.1-12.3H64v-3.7h36.5c14.7 0 15.5-11.6 15.5-11.6s.8-13.8 0-25.8c-.8-12.1-9.4-12.1-9.4-12.1h-8.2v11.5c0 13.8-11.5 13.1-11.5 13.1H50.7c-11.1 0-10.7 10.2-10.7 10.2v40.8s-1.2 11.9 24.5 11.9zm13.9-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
      />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Python</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="5.5" fill="none" transform="translate(14, 14)">
        <ellipse cx="50" cy="50" rx="15" ry="46" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="46" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="46" transform="rotate(150 50 50)" />
        <circle cx="50" cy="50" r="8" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">React.js</span>
  </div>
);

const FastApiIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="56" fill="#05998b" />
      <path
        d="M60 28L40 70h20l-4 30 28-44H64l4-28z"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">FastAPI & AI</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Mohammedsakhib P Dharwad — Full-Stack & AI/ML Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Mini badge footer info */}
              <div className="mt-3 px-1 text-center">
                <p className="text-white text-xs font-black uppercase tracking-wider">Mohammedsakhib P Dharwad</p>
                <p className="text-white/60 text-[10px] font-mono tracking-widest uppercase">IST Undergraduate</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FastApiIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

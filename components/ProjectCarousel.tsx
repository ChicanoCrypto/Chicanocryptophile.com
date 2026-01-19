
import React, { useRef } from 'react';
import { PROJECTS } from '../constants';

const ProjectCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">
              Proven <span className="text-cyan-400 underline underline-offset-[10px] decoration-4 decoration-cyan-500/30">Node_Deployments</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed">
              Full-stack infrastructure and frontend interfaces for the world's most innovative Web3 ecosystems.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button onClick={() => scroll('left')} className="w-14 h-14 glass rounded-sm flex items-center justify-center hover:bg-white text-white hover:text-black transition-all group">
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="w-14 h-14 glass rounded-sm flex items-center justify-center hover:bg-white text-white hover:text-black transition-all group">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-10 pb-16 no-scrollbar"
        >
          {PROJECTS.map((project) => {
            const isDrew = project.id.startsWith('drew');
            return (
              <div 
                key={project.id}
                className="min-w-[320px] md:min-w-[500px] snap-center group"
              >
                <div className={`relative overflow-hidden glass rounded-sm border ${isDrew ? 'border-yellow-500/20' : 'border-white/5'} hover:border-cyan-400/50 transition-all duration-500 group-hover:-translate-y-2`}>
                  <div className="h-72 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-black uppercase tracking-widest ${isDrew ? 'text-yellow-400' : 'text-cyan-400'} bg-black/80 px-3 py-1 border ${isDrew ? 'border-yellow-400/20' : 'border-cyan-400/20'} backdrop-blur-md`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-3xl font-black tracking-tight ${isDrew ? 'group-hover:text-yellow-400' : 'group-hover:text-cyan-400'} transition-colors uppercase italic`}>{project.title}</h3>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed line-clamp-3 font-medium">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{project.role}</span>
                      <button className={`${isDrew ? 'text-yellow-400' : 'text-cyan-400'} font-black text-xs uppercase tracking-widest flex items-center group-hover:gap-4 transition-all gap-2`}>
                        VIEW_SOURCE <span>//_</span>
                      </button>
                    </div>
                  </div>
                  {isDrew && <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-sm animate-pulse">FEATURED</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

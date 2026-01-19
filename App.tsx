
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsGrid from './components/SkillsGrid';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-cyan-500/30 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Statistics Strip - Full Width */}
        <div className="border-y border-white/5 bg-slate-950/50 py-16">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic tracking-tighter">6+</div>
              <div className="text-[10px] text-cyan-400/60 uppercase font-black tracking-[0.4em]">Years_Dev</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic tracking-tighter">10+</div>
              <div className="text-[10px] text-cyan-400/60 uppercase font-black tracking-[0.4em]">Smart_Audit</div>
            </div>
            {/* <div className="space-y-2">
              <div className="text-5xl font-black text-white italic tracking-tighter">$2B+</div>
              <div className="text-[10px] text-cyan-400/60 uppercase font-black tracking-[0.4em]">TVL_Managed</div>
            </div> */}
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic tracking-tighter">50+</div>
              <div className="text-[10px] text-cyan-400/60 uppercase font-black tracking-[0.4em]">Web Project</div>
            </div>
          </div>
        </div>

        <ProjectCarousel />
        <SkillsGrid />
        <ContactForm />
      </main>

      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white text-black font-black flex items-center justify-center text-xs">CC</div>
                <span className="text-lg font-black tracking-widest italic">CHICANO CRYPTOPHILE</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm text-center md:text-left font-medium">
                Designing institutional-grade infrastructure for the next billion users. Built with obsidian energy and digital precision.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex space-x-12 text-[10px] font-black tracking-[0.4em] text-slate-500">
                <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Network_Status</a>
                <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Docs</a>
                <a href="#" className="hover:text-cyan-400 transition-colors uppercase italic">Mainnet_V2.5</a>
              </div>
              <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} SECURED_CORE. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <div className="lg:hidden fixed bottom-10 left-10 right-10 z-[200]">
        <a href="#contact" className="w-full flex items-center justify-center py-5 bg-cyan-400 text-black font-black uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(0,242,255,0.3)] border border-white/10">
          INITIALIZE_MISSION
        </a>
      </div>
    </div>
  );
};

export default App;

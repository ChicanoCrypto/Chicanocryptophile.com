
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3 glass border-b border-cyan-500/20 shadow-[0_0_30px_rgba(0,242,255,0.1)]' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Fancy Neural Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-[3px] border-cyan-500/20 rounded-xl animate-orbit opacity-50" />
            <div className="absolute inset-0 border border-cyan-500/40 rounded-xl animate-pulse" />
            <div className="absolute inset-2 border-[2px] border-magenta-500/20 rounded-full animate-orbit [animation-direction:reverse] opacity-50" />
            
            {/* Core */}
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-800 rounded-sm flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] relative z-10 group-hover:rotate-12 transition-all group-hover:scale-110">
              <span className="text-sm tracking-tighter">C</span>
              <span className="text-sm tracking-tighter">C</span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white/40 blur-[2px] animate-pulse" />
            </div>
          </div>
          <div className="ml-4 flex flex-col">
            <span className="text-xl font-black tracking-widest leading-none group-hover:text-cyan-400 transition-colors">CHICANO</span>
            <span className="text-[10px] font-bold text-slate-500 tracking-[0.4em] leading-none mt-1.5 uppercase">Full_Stack_Arch</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-black tracking-[0.2em]">
          <a href="#about" className="hover:text-cyan-400 transition-colors relative group">
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors relative group">
            PROJECTS
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors relative group">
            STACK
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="px-6 py-2.5 bg-white text-black font-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all rounded-sm uppercase tracking-widest">
            TERMINAL_INIT
          </a>
        </nav>

        <button className="lg:hidden text-2xl text-cyan-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

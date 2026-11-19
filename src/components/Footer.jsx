import React from 'react';
import { ArrowUp, Heart, Sparkles, Layers } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-dark-950 py-16 text-canvas-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/[0.06]">
          
          {/* Logo & Statement */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                {profileData.name}
              </span>
              <span className="text-white/20">—</span>
              <span className="text-xs font-mono text-accent-cyan">
                {profileData.role}
              </span>
            </div>
            <p className="text-xs text-canvas-dim max-w-md">
              "{profileData.tagline}" • Designed with care for the university iOS Core Team Graphics Department application.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6">
            <a href="#gallery" className="text-xs font-mono text-canvas-muted hover:text-white transition-colors">
              Works
            </a>
            <a href="#about" className="text-xs font-mono text-canvas-muted hover:text-white transition-colors">
              About
            </a>
            <a href="#tools" className="text-xs font-mono text-canvas-muted hover:text-white transition-colors">
              Tools
            </a>
            <a href="#contact" className="text-xs font-mono text-canvas-muted hover:text-white transition-colors">
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-white transition-all hover:-translate-y-0.5"
              type="button"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-canvas-dim">
          <p>
            &copy; {new Date().getFullYear()} {profileData.name}. All project concepts &amp; visual designs created for portfolio presentation.
          </p>
          <div className="flex items-center gap-2">
            <span>React + Vite</span>
            <span>•</span>
            <span>Lucide Icons</span>
            <span>•</span>
            <span>Editorial Dark Theme</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

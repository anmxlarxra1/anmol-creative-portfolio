import React from 'react';
import { 
  ArrowDown, 
  Sparkles, 
  Layers, 
  Palette, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Radial soft purple/cyan glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-accent-coral/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Target Status Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
            </span>
            <span className="text-xs font-mono tracking-wide text-canvas-muted">
              {profileData.statusBadge}
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Main Editorial Typography Column */}
          <div className="lg:col-span-8 text-center md:text-left">
            
            {/* Expressive Designer Name */}
            <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-white">
              {profileData.name}
            </h1>

            {/* Title with Gradient Accent */}
            <div className="mt-4 sm:mt-5">
              <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-gradient-accent tracking-tight">
                {profileData.role}
              </p>
            </div>

            {/* Tagline */}
            <div className="mt-3">
              <p className="font-sans font-medium text-lg sm:text-xl md:text-2xl text-canvas-text italic opacity-95">
                "{profileData.tagline}"
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-canvas-muted leading-relaxed font-sans">
              {profileData.heroIntro}
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center md:justify-start gap-4">
              
              {/* Explore My Work Button */}
              <a
                href="#gallery"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide text-white bg-gradient-to-r from-accent-purple to-accent-violet hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-accent-purple/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* About Me Button */}
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide text-canvas-text bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
              >
                <span>About Me</span>
                <ArrowUpRight className="w-4 h-4 text-canvas-muted group-hover:text-white transition-colors" />
              </a>

            </div>

            {/* Social Links Placeholders */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <span className="text-xs font-mono uppercase tracking-wider text-canvas-dim">
                Connect:
              </span>
              
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-accent-cyan transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <a
                href={profileData.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-accent-coral transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

            </div>

          </div>

          {/* Right / Visual Artifact Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative p-6 sm:p-7 rounded-3xl glass-panel border border-white/[0.1] shadow-2xl overflow-hidden group">
                
                {/* Background lighting flare */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                
                {/* Header metadata inside preview */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-accent-cyan tracking-wider">
                    SPEC // PORTFOLIO 2026
                  </span>
                </div>

                {/* Creative Focus Highlights */}
                <div className="mt-5 space-y-3.5">
                  
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-accent-purple/15 text-accent-purple">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Event Posters &amp; Banners</p>
                        <p className="text-[11px] text-canvas-muted">Editorial layout &amp; typography</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-accent-purple px-2 py-0.5 rounded bg-accent-purple/10">
                      Canva
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-accent-cyan/15 text-accent-cyan">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Brand &amp; Logo Studies</p>
                        <p className="text-[11px] text-canvas-muted">Monograms, vectors &amp; grids</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10">
                      Figma
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-accent-coral/15 text-accent-coral">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">AI-Assisted Ideation</p>
                        <p className="text-[11px] text-canvas-muted">Rapid concept exploration</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-accent-coral px-2 py-0.5 rounded bg-accent-coral/10">
                      ChatGPT
                    </span>
                  </div>

                </div>

                {/* Team Mission Mini Quote */}
                <div className="mt-5 p-3.5 rounded-2xl bg-dark-900/80 border border-white/[0.05]">
                  <p className="text-xs text-canvas-muted italic leading-relaxed">
                    "Excited to craft visual assets for Apple platform creators and campus event initiatives."
                  </p>
                  <p className="mt-2 text-[10px] font-mono text-canvas-dim text-right">
                    — Candidate Statement
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

import React from 'react';
import { User, Sparkles, Heart, Compass, Lightbulb, Terminal, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const { about } = profileData;

  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/3 right-[-100px] w-96 h-96 bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-80px] w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Designer Mission Statement */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>DESIGNER PROFILE</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              {about.headline}
            </h2>

            {/* Quick applicant credential badge */}
            <div className="p-5 rounded-2xl glass-card border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Applicant Intent: iOS Core Team
                </span>
              </div>
              <p className="text-xs sm:text-sm text-canvas-muted leading-relaxed">
                Applying to the Graphics Department. Aiming to design standout promotional collateral, keynote presentation visuals, and community media for student developers.
              </p>
            </div>

            {/* Core Values / Creative Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-canvas-dim">
                Creative Mindset &amp; Focus
              </h3>
              
              <div className="space-y-2.5">
                {about.principles.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                  >
                    <p className="text-sm font-display font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>
                      {p.title}
                    </p>
                    <p className="text-xs text-canvas-muted mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Bio Prose & Learning Journey */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/[0.1] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-purple font-semibold">
                  Personal Background &amp; Intent
                </span>
                <span className="text-[11px] font-mono text-canvas-dim">
                  Honest • Authentic • Creative
                </span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-canvas-text text-sm sm:text-base leading-relaxed">
                {about.paragraphs.map((para, index) => (
                  <p key={index} className="text-canvas-muted">
                    {para}
                  </p>
                ))}
              </div>

              {/* Learning Roadmap Callout */}
              <div className="mt-6 p-5 rounded-2xl bg-dark-950/70 border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-accent-coral text-xs font-mono font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Current Learning Focus (No Artificial Claims)</span>
                </div>
                
                <p className="text-xs sm:text-sm text-canvas-muted leading-relaxed">
                  As an enthusiastic beginner, I do not claim decade-long agency tenure. Instead, I offer relentless curiosity, a sharp eye for visual balance, rapid iteration skills, and a genuine eagerness to collaborate with team leads to elevate the university team's visual identity.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white">
                    🎯 Master Canva Layouts &amp; Print Specs
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white">
                    🎨 Advance Figma Vector &amp; Auto-Layout
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white">
                    📱 Study Apple Human Interface Guidelines
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

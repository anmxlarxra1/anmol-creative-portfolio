import React from 'react';
import { Wrench, Sparkles, CheckCircle, Cpu, Layout, PenTool, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Tools() {
  const { tools } = profileData;

  const getToolIcon = (name) => {
    if (name.includes('Canva')) return <Layout className="w-5 h-5 text-accent-cyan" />;
    if (name.includes('Figma')) return <PenTool className="w-5 h-5 text-accent-purple" />;
    if (name.includes('ChatGPT') || name.includes('AI')) return <Cpu className="w-5 h-5 text-accent-coral" />;
    return <BookOpen className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="tools" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] bg-dark-900/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-coral/10 border border-accent-coral/20 text-accent-coral text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>TOOLKIT &amp; CAPABILITIES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Design Stack &amp; Creative Tools
          </h2>

          <p className="max-w-2xl text-canvas-muted text-sm sm:text-base leading-relaxed">
            Honest, transparent overview of my current software proficiency and learning trajectory.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                tool.highlight
                  ? 'border-white/[0.12] hover:border-accent-purple/50'
                  : 'border-white/[0.06]'
              }`}
            >
              <div>
                
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    {getToolIcon(tool.name)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-canvas-dim px-2 py-0.5 rounded bg-white/[0.03]">
                    {tool.category}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  {tool.name}
                </h3>

                {/* Proficiency Level Badge */}
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                  <span>{tool.level}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-canvas-muted leading-relaxed">
                  {tool.description}
                </p>

              </div>

              {/* Card Footer status */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-canvas-dim">
                <span>Status</span>
                <span className="text-canvas-muted">Ready for team tasks</span>
              </div>

            </div>
          ))}
        </div>

        {/* Honest University Note Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-accent-purple flex-shrink-0" />
            <p className="text-xs sm:text-sm text-canvas-muted">
              <strong className="text-white">Note for Selection Committee:</strong> All skill proficiencies represent genuine personal exploration and student coursework practice.
            </p>
          </div>
          <span className="text-xs font-mono text-accent-purple font-medium whitespace-nowrap">
            Self-Taught &amp; Highly Coachable
          </span>
        </div>

      </div>

    </section>
  );
}

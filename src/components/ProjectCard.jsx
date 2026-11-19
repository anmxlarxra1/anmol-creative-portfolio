import React, { useState } from 'react';
import { Eye, Sparkles, Layers, ImageOff, ArrowUpRight, Compass } from 'lucide-react';
import { normalizeImagePath } from '../utils/imageHelper';

export default function ProjectCard({ project, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categoryNames = {
    posters: 'Posters & Banners',
    branding: 'Branding & Logos',
    social: 'Social Media',
    uiux: 'UI/UX Design',
  };

  const categoryTag = categoryNames[project.category] || project.category;
  const imageSrc = normalizeImagePath(project.image);

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-purple/10 flex flex-col h-full border border-white/[0.08] hover:border-white/[0.2]"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-dark-900">
        
        {/* Badges Top Left: Featured & Concept */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 items-center">
          {project.featured && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-mono font-medium shadow-lg shadow-amber-500/10">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Featured</span>
            </div>
          )}

          {project.isConcept && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] font-mono font-medium shadow-lg shadow-cyan-500/10">
              <Compass className="w-3 h-3 text-cyan-400" />
              <span>Concept</span>
            </div>
          )}
        </div>

        {/* Year Tag Top Right */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-dark-950/70 backdrop-blur-md border border-white/[0.1] text-canvas-muted text-[11px] font-mono">
          {project.year || '2026'}
        </div>

        {/* Actual Image (JPG, PNG, WebP, SVG) or Graceful Fallback */}
        {!imgError && imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Graceful Missing Image Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-dark-900 via-dark-850 to-dark-800 border-b border-white/[0.05]">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-3 text-accent-purple">
              <Layers className="w-6 h-6" />
            </div>
            <p className="font-display font-bold text-sm text-canvas-text">{project.title}</p>
            <span className="text-[11px] font-mono text-accent-cyan mt-1">{categoryTag}</span>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-canvas-dim font-mono">
              <ImageOff className="w-3 h-3" />
              <span>Drop image in public/images/</span>
            </div>
          </div>
        )}

        {/* Hover Overlay with "View Project" prompt */}
        <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-dark-950 font-display font-bold text-xs uppercase tracking-wider shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Project</span>
          </span>
        </div>

      </div>

      {/* Card Content Footer */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-dark-900/40">
        
        <div>
          {/* Category Pill */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent-purple font-semibold">
              {categoryTag}
            </span>
            <ArrowUpRight className="w-4 h-4 text-canvas-dim group-hover:text-white transition-colors" />
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-lg text-white group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs sm:text-sm text-canvas-muted line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tools and View CTA */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          
          {/* Tools Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools && project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-canvas-muted"
              >
                {tool}
              </span>
            ))}
            {project.tools && project.tools.length > 3 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.04] text-canvas-dim">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Text CTA */}
          <span className="text-xs font-mono font-medium text-canvas-muted group-hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap">
            View Details
          </span>

        </div>

      </div>
    </article>
  );
}

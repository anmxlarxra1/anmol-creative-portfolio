import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Copy, 
  Sparkles, 
  Palette, 
  Type, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Calendar,
  ExternalLink,
  ImageOff
} from 'lucide-react';
import { normalizeImagePath } from '../utils/imageHelper';

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
  hasMultipleProjects = false
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState(null);
  const [modalImgError, setModalImgError] = useState(false);

  // Normalize image list and resolve paths
  const rawImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || ''];

  const imageList = rawImages.map(normalizeImagePath).filter(Boolean);

  // Reset active image index and error state when project changes
  useEffect(() => {
    setActiveImageIndex(0);
    setModalImgError(false);
  }, [project]);

  // Handle escape key and arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  // Copy hex code to clipboard
  const handleCopyColor = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  const categoryLabels = {
    posters: 'Posters & Banners',
    branding: 'Branding & Logos',
    social: 'Social Media Designs',
    uiux: 'UI/UX Designs',
  };

  const currentImage = imageList[activeImageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fade-in">
      
      {/* Dark Blur Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-dark-950/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-dark-900 border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden z-10"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-dark-950/60 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-purple font-semibold">
              {categoryLabels[project.category] || project.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-canvas-dim">
              ID #{project.id}
            </span>
            
            {/* Featured Badge */}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                <Sparkles className="w-2.5 h-2.5" /> Featured
              </span>
            )}

            {/* AI-Assisted Badge */}
            {project.aiAssisted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                <Sparkles className="w-2.5 h-2.5 text-purple-400" /> AI-Assisted Concept
              </span>
            )}

            {/* Concept Project Badge */}
            {project.isConcept && !project.aiAssisted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                <Compass className="w-2.5 h-2.5" /> Concept Design
              </span>
            )}
          </div>

          {/* Controls: Prev, Next & Close */}
          <div className="flex items-center gap-2">
            {hasMultipleProjects && (
              <div className="flex items-center gap-1 mr-2 border-r border-white/[0.1] pr-3">
                <button
                  onClick={onPrev}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-canvas-muted hover:text-white transition-colors"
                  title="Previous project (Left arrow)"
                  type="button"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={onNext}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-canvas-muted hover:text-white transition-colors"
                  title="Next project (Right arrow)"
                  type="button"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-canvas-muted hover:text-white transition-colors"
              aria-label="Close project modal (Esc)"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-grow px-6 py-6 sm:px-8 sm:py-8 space-y-8">
          
          {/* Main Title & Overview Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                {project.title}
              </h2>
              {project.aiAssisted ? (
                <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                  AI-Assisted Concept
                </span>
              ) : project.isConcept ? (
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  Concept Design Study
                </span>
              ) : (
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-canvas-dim">
                  Original Design
                </span>
              )}
            </div>
            <p className="text-base sm:text-lg text-canvas-muted leading-relaxed font-sans max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Large Design Preview Gallery (Supports JPG, PNG, WebP, SVG) */}
          <div className="space-y-4">
            <div className="relative w-full rounded-2xl overflow-hidden bg-dark-950 border border-white/[0.08] shadow-inner flex items-center justify-center min-h-[300px] max-h-[600px]">
              
              {!modalImgError && currentImage ? (
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={`${project.title} - View ${activeImageIndex + 1}`}
                  onError={() => setModalImgError(true)}
                  className="w-full h-auto max-h-[600px] object-contain rounded-2xl animate-fade-in"
                />
              ) : (
                <div className="py-16 px-6 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-accent-purple">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Design Preview Placeholder</h4>
                  <p className="text-xs text-canvas-muted font-mono max-w-sm">
                    Image path: {currentImage || 'No image defined'}
                  </p>
                  <p className="text-xs text-accent-cyan">
                    Supported formats: .jpg, .png, .webp, .svg (Save in public/images/)
                  </p>
                </div>
              )}

              {/* Slider Arrow Controls (if multi-image) */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-950/80 hover:bg-dark-950 text-white border border-white/[0.1] backdrop-blur-md shadow-xl transition-transform hover:scale-110"
                    type="button"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-950/80 hover:bg-dark-950 text-white border border-white/[0.1] backdrop-blur-md shadow-xl transition-transform hover:scale-110"
                    type="button"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

            </div>

            {/* Thumbnails row (if multiple images) */}
            {imageList.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {imageList.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setModalImgError(false);
                    }}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-dark-950 ${
                      activeImageIndex === idx
                        ? 'border-accent-purple ring-2 ring-accent-purple/30 scale-105'
                        : 'border-white/[0.1] opacity-60 hover:opacity-100'
                    }`}
                    type="button"
                  >
                    <img 
                      src={imgSrc} 
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-dark-950/80 text-[9px] font-mono text-white">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            
            {/* 1. Project Objective */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-accent-cyan">
                <Compass className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Project Objective
                </h4>
              </div>
              <p className="text-sm text-canvas-text leading-relaxed">
                {project.objective || "Designed to communicate key event details with high typographic contrast and brand clarity."}
              </p>
            </div>

            {/* 2. Creative Concept */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-accent-purple">
                <Sparkles className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Creative Concept
                </h4>
              </div>
              <p className="text-sm text-canvas-text leading-relaxed">
                {project.concept || "Exploration of negative space, cybernetic lighting hues, and modern editorial alignments."}
              </p>
            </div>

          </div>

          {/* Design Specs: Palette & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 3. Color Palette Swatches */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400">
                  <Palette className="w-4 h-4" />
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Color Palette (Click to Copy)
                  </h4>
                </div>
                {copiedHex && (
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 animate-fade-in">
                    <Check className="w-3 h-3" /> Copied {copiedHex}!
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {(project.palette && project.palette.length > 0
                  ? project.palette
                  : ['#08080a', '#8b5cf6', '#06b6d4', '#f4f4f7']
                ).map((hex, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopyColor(hex)}
                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-950 border border-white/[0.1] hover:border-white/[0.3] transition-all duration-200"
                    type="button"
                    title={`Click to copy ${hex}`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="font-mono text-xs text-canvas-muted group-hover:text-white uppercase">
                      {hex}
                    </span>
                    <Copy className="w-3 h-3 text-canvas-dim group-hover:text-canvas-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Typography */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Type className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Typography Specimen
                </h4>
              </div>
              <p className="text-sm font-display font-medium text-white">
                {project.typography || "Syne Display + Space Mono & Plus Jakarta Sans"}
              </p>
              <p className="text-xs text-canvas-dim font-mono">
                Engineered for maximum legibility on digital screens and physical prints.
              </p>
            </div>

          </div>

          {/* Design Process & Final Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 5. Design Process */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Layers className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Design Process
                </h4>
              </div>
              <p className="text-sm text-canvas-muted leading-relaxed">
                {project.process || "Iterated initial rough wireframes, refined typographical rhythm, balanced negative space, and finalized high-resolution exports."}
              </p>
            </div>

            {/* 6. Final Outcome */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-rose-400">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Final Outcome &amp; Takeaway
                </h4>
              </div>
              <p className="text-sm text-canvas-muted leading-relaxed">
                {project.outcome || "Delivered a clean, versatile design asset that achieved high visual resonance and strengthened design workflow confidence."}
              </p>
            </div>

          </div>

          {/* Metadata Footer: Tools Used & Year */}
          <div className="p-5 rounded-2xl bg-dark-950/70 border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-canvas-dim uppercase">Tools Used:</span>
              <div className="flex flex-wrap gap-2">
                {project.tools && project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] text-accent-cyan"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-canvas-dim">
              <Calendar className="w-3.5 h-3.5" />
              <span>Created: {project.year || '2026'}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

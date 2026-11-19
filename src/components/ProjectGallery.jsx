import React, { useState, useMemo } from 'react';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects, CATEGORIES } from '../data/projects';
import { Sparkles, Grid, SlidersHorizontal, Image } from 'lucide-react';

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute category counts dynamically from projects data
  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = projects.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Handle modal navigation (Prev / Next within current filtered list)
  const handleNextProject = () => {
    if (!selectedProject || filteredProjects.length <= 1) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject || filteredProjects.length <= 1) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 scroll-mt-20">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-purple/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono">
            <Grid className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Selected Creative Works
          </h2>

          <p className="max-w-2xl text-canvas-muted text-sm sm:text-base leading-relaxed">
            A curated collection of event posters, brand identities, social media visual assets, and mobile UI concepts.
          </p>

        </div>

        {/* Filter Bar */}
        <div className="mb-12">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          /* Empty State if filter yields 0 */
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3 glass-panel rounded-3xl border border-white/[0.08]">
            <Image className="w-12 h-12 text-canvas-dim" />
            <h3 className="font-display font-bold text-lg text-white">No projects found in this category</h3>
            <p className="text-sm text-canvas-muted">Try selecting "All Works" to view the complete catalog.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-3 px-4 py-2 rounded-xl bg-accent-purple text-white text-xs font-mono font-medium"
              type="button"
            >
              Reset Category Filter
            </button>
          </div>
        )}

        {/* Quick hint for the reviewer */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-canvas-dim inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Click any project card to inspect the objective, color palette, typography and design process.</span>
          </p>
        </div>

      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
          hasMultipleProjects={filteredProjects.length > 1}
        />
      )}

    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ProjectItem, ProjectStatus } from '../types';
import { X, Compass, Layers, Calendar, Landmark, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'brand' | 'video' | 'lab'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Modern category grouping
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return project.category.toLowerCase().includes('web') || project.tags.includes('React');
    if (activeFilter === 'brand') return project.category.toLowerCase().includes('brand');
    if (activeFilter === 'video') return project.category.toLowerCase().includes('video') || project.category.toLowerCase().includes('content');
    if (activeFilter === 'lab') return project.category.toLowerCase().includes('lab') || project.status === 'coming-soon';
    return true;
  });

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'in-progress':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'coming-soon':
        return 'text-[#00BFFF] bg-blue-500/10 border-blue-500/20';
    }
  };

  const getStatusText = (status: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'Bêta Active';
      case 'coming-soon':
        return 'Concept Lab';
    }
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[var(--bg-app)]">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block with scroll trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 mb-16 max-w-3xl"
        >
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
            GALERIE DE RÉALISATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[var(--text-app)] tracking-tight leading-tight">
            Projets phares alliant ingénierie moderne et esthétique d'exception.
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base font-sans leading-relaxed font-light">
            Nous privilégions l’excellence technique pure, le code sur mesure hautement optimisé et les identités visuelles cinématographiques. Découvrez nos études de cas.
          </p>
        </motion.div>

        {/* Filter Navigation with micro scaling */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[var(--border-subtle)] pb-6">
          {(
            [
              { label: 'Tous nos projets', filter: 'all' },
              { label: 'Applications Web', filter: 'web' },
              { label: 'Identité & Design', filter: 'brand' },
              { label: 'Films & Récit Vidéo', filter: 'video' },
              { label: 'Lab de Recherche', filter: 'lab' },
            ] as const
          ).map((item) => (
            <motion.button
              key={item.filter}
              id={`filter-btn-${item.filter}`}
              onClick={() => setActiveFilter(item.filter)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeFilter === item.filter
                  ? 'bg-[var(--text-app)] text-[var(--bg-app)] font-semibold'
                  : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-app)] hover:bg-[var(--border-subtle)]'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div 
          id="portfolio-projects-grid"
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                {/* Photo frame container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-6 group-hover:border-brand-blue/30 group-hover:shadow-[0_15px_30px_rgba(0,191,255,0.1)] transition-all duration-300">
                  {/* Outer glow aura on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 z-10" />
                  
                  {/* 🌟 [ZONE D'AJOUT PHOTO DE PROJET] Les images des projets proviennent de src/data.ts. Vous pouvez configurer ou remplacer l'adresse de l'image directement là-bas */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Status Glass Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded border font-semibold ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Tech stack badge list preview */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="bg-black/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-gray-200 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-col space-y-2 px-1">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-[var(--text-app)] group-hover:text-[#00BFFF] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs sm:text-sm font-sans leading-relaxed line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informational CTA for scaling */}
        {filteredProjects.length === 0 && (
          <div id="no-portfolio-state" className="text-center py-24 border border-dashed border-[var(--border-strong)] rounded-2xl">
            <Layers className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-4 opacity-50" />
            <p className="text-sm font-mono text-[var(--text-muted)]">Aucun projet ne correspond actuellement à cette catégorie.</p>
          </div>
        )}
      </div>

      {/* Case Study Full Briefing Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div id="case-study-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass curtain backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-app)] shadow-2xl z-20 scrollbar-thin"
            >
              {/* Image banner section */}
              <div className="relative h-[25vh] sm:h-[35vh] w-full">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/30" />
                
                {/* Close Button */}
                <motion.button
                  id="close-case-study-modal"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, backgroundColor: '#00BFFF', color: '#000' }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                  aria-label="Fermer l'étude de cas"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Slogan details overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest rounded border font-medium ${getStatusColor(selectedProject.status)} mb-3 inline-block bg-black/60 backdrop-blur-md`}>
                    {getStatusText(selectedProject.status)}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                    {selectedProject.title}
                  </h4>
                </div>
              </div>

              {/* Detailed Core Grid Section */}
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Right block: Context details */}
                <div className="lg:col-span-8 flex flex-col space-y-8">
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#00BFFF]">
                      Présentation générale
                    </h5>
                    <p className="text-[#E5E7EB] font-sans text-sm sm:text-base leading-relaxed font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {selectedProject.challenge && (
                    <div className="p-5 rounded-2xl bg-black/30 border border-white/5 space-y-2">
                      <h6 className="text-[11px] font-mono uppercase tracking-widest text-[#FF7070] font-semibold">
                        Le Défi Majeur
                      </h6>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="p-5 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 space-y-2">
                      <h6 className="text-[11px] font-mono uppercase tracking-widest text-[#00BFFF] font-semibold flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Notre Solution Appliquée</span>
                      </h6>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                        {selectedProject.solution}
                      </p>
                    </div>
                  )}
                </div>

                {/* Left block: Metadata metrics & Client Info */}
                <div className="lg:col-span-4 flex flex-col space-y-6">
                  {/* Project facts card */}
                  <div className="p-6 rounded-2xl bg-black/60 border border-white/5 flex flex-col space-y-4">
                    <div className="flex items-center space-x-2.5 pb-3 border-b border-white/5">
                      <Calendar className="w-4.5 h-4.5 text-gray-500" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">Date du projet</div>
                        <div className="text-xs font-semibold mt-1">{selectedProject.year}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 pb-3 border-b border-white/5">
                      <Landmark className="w-4.5 h-4.5 text-gray-500" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">Partenaire Client</div>
                        <div className="text-xs font-semibold mt-1">{selectedProject.clientName}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 pb-3">
                      <Compass className="w-4.5 h-4.5 text-gray-500" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none font-medium">Secteur Principal</div>
                        <div className="text-xs font-semibold mt-1">{selectedProject.category}</div>
                      </div>
                    </div>
                  </div>

                  {/* Scope of engagement list */}
                  <div className="space-y-3">
                    <h6 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">Périmètre d’Intervention</h6>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.scope.map((tag, idx) => (
                        <span key={idx} className="bg-[#1C1C1C] border border-white/5 text-[10px] text-gray-300 px-3 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="space-y-3">
                    <h6 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">Technologies</h6>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-[9px] font-mono px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Section Action Banner */}
              <div className="p-8 border-t border-white/5 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-sans text-gray-400">
                  Échangeons sur une stratégie technique similaire adaptée à vos besoins.
                </span>
                <motion.button
                  id="modal-cta-button"
                  whileHover={{ scale: 1.05, backgroundColor: '#00BFFF' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedProject(null);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer text-center w-full sm:w-auto"
                >
                  Initier la discussion
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

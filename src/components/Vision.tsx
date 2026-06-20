/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, Trophy, Flame, Globe } from 'lucide-react';

export default function Vision() {
  const roadmapPhases = [
    {
      step: '01',
      title: 'Exécution Locale Irréprochable',
      description: 'Établir une confiance client indéfectible. Nous nous concentrons sur des temps de chargement records, des grilles de logos géométriques impeccables, et une cinématographie à couper le souffle, faisant de chaque client une référence mondiale.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Leadership Continental',
      description: 'Devenir le partenaire technologique et créatif privilégié des startups d’élite, des acteurs innovants et des exportateurs de premier plan à travers le continent africain.',
      icon: Trophy,
    },
    {
      step: '03',
      title: 'Impact Cinématographique Global',
      description: 'Déployer notre savoir-faire auprès d’entreprises internationales à la recherche de récits de marques soignés et d’architectures cloud performantes pour affirmer leur suprématie.',
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const phaseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="vision" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-[15%] w-[1px] bg-white/[0.02] latent pointer-events-none" />
      <div className="absolute inset-y-0 right-[15%] w-[1px] bg-white/[0.02] latent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Visual Header Section with scroll fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 sm:mb-24 space-y-4"
        >
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
            NOTRE VISION STRATÉGIQUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Débuter humblement. Exécuter à la perfection. Bâtir un héritage.
          </h2>
        </motion.div>

        {/* Dynamic Horizontal split split-story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-20">
          {/* Main Manifesto with Scroll Left Trigger */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-6 text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
              <p>
                Nous pensons que le modèle des agences numériques classiques est obsolète. Elles grandissent trop vite, embauchent des profils passifs pour servir d’intermédiaires, et traitent les projets de leurs clients comme de simples tâches standardisées. Cette dilution de l’attention fragilise et ralentit les applications livrées.
              </p>
              <p className="text-white font-normal border-l-2 border-[#00BFFF] pl-6 italic">
                « Notre trajectoire ne vise pas le nombre d’employés maximal. Elle est optimisée pour un prestige exceptionnel, un artisanat méticuleux et une vélocité de livraison client. »
              </p>
              <p>
                En concevant des architectures logicielles sur mesure et en produisant des récits visuels cinématographiques de prestige, nous développons des systèmes à haute conversion. Nous bâtissons notre réputation avant de vouloir croître. C’est le niveau Apex.
              </p>
            </div>
          </motion.div>

          {/* Africa & International Ambition Box with Scroll Right Trigger */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <motion.div 
              whileHover={{ scale: 1.015, borderColor: 'rgba(0, 191, 255, 0.2)' }}
              className="h-full p-8 rounded-2xl bg-brand-gray border border-white/5 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl group-hover:bg-brand-blue/10 transition-colors pointer-events-none duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#00BFFF]">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">
                  Notre ambition à long terme
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Notre feuille de route est limpide : devenir un studio numérique de premier plan, reconnu internationalement pour notre rigueur d’ingénierie logicielle et notre identité créative conceptuelle profonde. Nous voulons d’ailleurs démontrer que des solutions techniques de niveau mondial peuvent être intégralement façonnées à leur source originelle.
                </p>
              </div>

              {/* Status Ticker */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>STATUT GÉNÉRAL :</span>
                <span className="text-[#00BFFF] font-semibold uppercase animate-pulse">● PHASE 01 EN EXÉCUTION</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Roadmap Chronology Grid list with Stagger animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5"
        >
          {roadmapPhases.map((phase, index) => {
            const PhaseIcon = phase.icon;
            return (
              <motion.div
                key={index}
                id={`roadmap-phase-${index}`}
                variants={phaseVariants}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02, 
                  borderColor: 'rgba(0, 191, 255, 0.2)',
                  boxShadow: '0 15px 30px -10px rgba(0, 191, 255, 0.08)' 
                }}
                className="flex flex-col space-y-4 p-6 rounded-xl bg-black border border-white/5 hover:bg-brand-gray/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  {/* Phase Counter */}
                  <span className="text-3xl font-display font-extrabold text-white/15 group-hover:text-white/35 transition-colors">
                    {phase.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-gray border border-white/10 flex items-center justify-center text-[#00BFFF] group-hover:bg-brand-blue group-hover:text-black transition-colors duration-300">
                    <PhaseIcon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-display font-medium text-white group-hover:text-[#00BFFF] transition-colors">
                  {phase.title}
                </h4>

                <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
                  {phase.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

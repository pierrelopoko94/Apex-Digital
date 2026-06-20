/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Eye,
      title: 'Détail Obsessionnel',
      desc: 'Nous inspectons méticuleusement chaque alignement de pixel, ligne de code et image de rendu animée.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiance Absolue',
      desc: 'Pas de jargon opaque ni de fausses promesses. Uniquement de l’honnêteté et des résultats tangibles.',
    },
    {
      icon: Award,
      title: 'L’Artisanat d’Abord',
      desc: 'Nous limitons volontairement nos dossiers actifs afin de livrer des créations sur mesure remarquables.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[var(--bg-app)] overflow-hidden">
      {/* Decorative linear light beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Visual Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
                QUI SOMMES-NOUS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[var(--text-app)] tracking-tight leading-tight">
                L’artisanat d’exception plutôt que la dilution industrielle.
              </h2>
            </div>

            {/* Custom elegant trust metric card representing high attention to detail */}
            <motion.div 
              whileHover={{ scale: 1.015, borderColor: 'rgba(0, 191, 255, 0.2)' }}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] relative overflow-hidden group transition-all duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full filter blur-xl group-hover:bg-brand-blue/10 transition-colors duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col space-y-6">
                <div className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Notre philosophie d'engagement
                </div>
                
                {/* Visual state indicators or clean metrics */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl font-display font-bold text-brand-blue leading-none">100%</span>
                    <div>
                      <h4 className="text-sm font-sans font-medium text-[var(--text-app)]">Écrit à la main</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1 font-light leading-relaxed">
                        Chaque ligne de code est rédigée de zéro en TypeScript et React pour s'adapter à vos objectifs précis, assurant une fluidité et une sécurité optimales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-3xl font-display font-bold text-brand-blue leading-none">150ms</span>
                    <div>
                      <h4 className="text-sm font-sans font-medium text-[var(--text-app)]">Vitesse extrême</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1 font-light leading-relaxed">
                        Nous concevons des architectures légères et performantes pour offrir une réactivité parfaite et maximiser vos taux de conversion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-3xl font-display font-bold text-brand-blue leading-none">Zéro</span>
                    <div>
                      <h4 className="text-sm font-sans font-medium text-[var(--text-app)]">Intermédiaires oisifs</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1 font-light leading-relaxed">
                        Vous collaborez directement avec Peter et Sélenge, sans déperdition de qualité ni jargon bureaucratique.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-sans leading-relaxed font-light">
                  Nous privilégions une clientèle restreinte avec qui nous tissons des liens de confiance durables. Nos livraisons sont impeccables et soignées.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Copy & Narrative Highlight List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-12"
          >
            <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed font-light">
              <p>
                <strong className="text-[var(--text-app)] font-medium">Apex Digital</strong> est un studio de création numérique axé sur la clarté technique, l’innovation esthétique et l’impact commercial réel de vos projets. Notre structure repose sur une vision simple : les œuvres numériques marquantes naissent d’équipes expertes engagées et transparentes, et non de processus standardisés impersonnels.
              </p>
              <p>
                En gardant notre équipe agile, nous éliminons les lenteurs opérationnelles et les silos de communication. Cela autorise une minutie de fabrication, une propreté de code irréprochable et un niveau d'exigence graphique élevé. Épaulé par notre studio, votre entreprise affirme durablement son autorité.
              </p>
            </div>

            {/* Highlights Grid with Staggered Framer Motion cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    id={`about-highlight-${idx}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={idx}
                    whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(0, 191, 255, 0.3)', boxShadow: '0 10px 30px -10px rgba(0, 191, 255, 0.15)' }}
                    className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 group cursor-pointer shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-card-inner)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[#00BFFF] group-hover:bg-[#00BFFF] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-medium text-[var(--text-app)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-sans leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

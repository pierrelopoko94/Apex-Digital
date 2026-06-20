/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../data';
import { Code, Video, Briefcase, Star } from 'lucide-react';

export default function Team() {
  const getIcon = (roleId: string) => {
    switch (roleId) {
      case 'peter':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'selenge':
        return <Video className="w-5 h-5 text-[#00BFFF]" />;
      default:
        return <Briefcase className="w-5 h-5 text-amber-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="team" className="relative py-24 sm:py-32 bg-black overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 glow-orb pointer-events-none select-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block with scroll transition */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-4 mb-16 sm:mb-24 max-w-3xl"
        >
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
            LES SPÉCIALISTES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Une collaboration directe avec des artisans du numérique.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed font-light">
            Nous supprimons les intermédiaires commerciaux. Nos clients communiquent et conçoivent directement avec l’expert technique gérant les fichiers créatifs ou son infrastructure applicative. Rencontrez nos trois associés.
          </p>
        </motion.div>

        {/* Profile Card grid with stagger container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.id}
              id={`team-card-${member.id}`}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                borderColor: 'rgba(0, 191, 255, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(0, 191, 255, 0.1)'
              }}
              className="p-8 rounded-2xl bg-brand-gray border border-white/5 transition-all duration-300 relative group flex flex-col justify-between cursor-pointer"
            >
              {/* Profile Image & Upper details */}
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black border border-white/5 mb-6">
                  {/* Subtle black overlay on the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
                  
                  {/* 🌟 [ZONE D'AJOUT PHOTO DE L'ÉQUIPE] La photo est lue depuis src/data.ts. Vous pouvez aussi la modifier directement ci-dessous si nécessaire */}
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-104 group-hover:brightness-100 transition-all duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Icon badge floating at bottom right corner of photo overlay */}
                  <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center transition-colors group-hover:border-brand-blue/40">
                    {getIcon(member.id)}
                  </div>
                </div>

                {/* Name & role description */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2.5">
                    <h3 className="text-2xl font-display font-medium text-white">
                      {member.name}
                    </h3>
                    <Star className="w-4 h-4 text-brand-blue shrink-0 animate-pulse" />
                  </div>
                  <p className="text-xs font-mono text-[#00BFFF] uppercase tracking-widest font-semibold">
                    {member.role}
                  </p>
                </div>

                {/* Biography */}
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed mb-6 font-light">
                  {member.bio}
                </p>
              </div>

              {/* Skills chips & Quotes */}
              <div className="pt-6 border-t border-white/5 space-y-5">
                {/* Specific signature quote by team member */}
                <div className="italic text-xs text-gray-400 pl-4 border-l-2 border-brand-blue leading-relaxed font-light">
                  « {member.signatureQuote} »
                </div>

                {/* Active Skill Pills */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-gray-500 tracking-widest font-semibold">Expertises Majeures</div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.keySkills.map((skill, idx) => (
                      <span key={idx} className="bg-black/50 border border-white/5 text-[10px] text-gray-300 px-2.5 py-1 rounded-md font-light hover:text-white hover:border-[#00BFFF]/20 transition-all font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

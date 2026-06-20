/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Code, Compass, Video, TrendingUp, Plus, Minus } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Compass,
  Video,
  TrendingUp,
};

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setSelectedServiceId(selectedServiceId === id ? null : id);
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
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[var(--bg-app)] overflow-hidden bg-grid-pattern">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 left-[30%] w-[500px] h-[500px] bg-brand-blue/5 glow-orb pointer-events-none select-none rounded-full" />
      <div className="absolute bottom-1/4 right-[2%] w-[400px] h-[400px] bg-blue-600/5 glow-orb pointer-events-none select-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block with Scroll-linked fade */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 space-y-6 md:space-y-0"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
              NOS COMPÉTENCES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[var(--text-app)] tracking-tight leading-tight">
              Un ensemble de savoir-faire pour votre suprématie numérique.
            </h2>
          </div>
        </motion.div>

        {/* Luxury Staggered Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            const isOpen = selectedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.015, 
                  borderColor: 'rgba(0, 191, 255, 0.3)',
                  boxShadow: '0 20px 45px -15px rgba(0, 191, 255, 0.12)' 
                }}
                layout="position"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`p-8 md:p-10 rounded-2xl bg-[var(--bg-card)]/90 border transition-all duration-300 relative group overflow-hidden cursor-pointer shadow-sm ${
                  isOpen
                    ? 'border-brand-blue shadow-lg shadow-brand-blue/5'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                {/* Visual hover-glow background accent */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl group-hover:bg-brand-blue/8 transition-colors pointer-events-none duration-500" />
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Card Upper Metadata row */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-subtle)] flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-black transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center space-x-3.5">
                        <span className="text-[10px] font-mono py-1 px-2.5 rounded-full bg-[var(--bg-card-inner)] text-[var(--text-muted)] uppercase tracking-widest leading-none border border-[var(--border-subtle)]">
                          {service.badgeText}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl font-display font-medium text-[var(--text-app)] tracking-tight mb-4 flex items-center justify-between">
                      <span>{service.title}</span>
                      <span className="text-xs font-mono text-brand-blue hidden group-hover:inline-block tracking-widest uppercase transition-all">
                        Explorer →
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-muted)] font-sans leading-relaxed mb-6 text-sm md:text-base font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable toolkit trigger */}
                  <div className="mt-4 pt-6 border-t border-[var(--border-subtle)] flex flex-col space-y-4">
                    <button
                      id={`service-toolkit-toggle-${service.id}`}
                      onClick={() => toggleService(service.id)}
                      className="flex items-center justify-between text-xs font-mono text-[var(--text-app)] opacity-90 hover:opacity-100 transition-all cursor-pointer w-full text-left"
                    >
                      <span className="tracking-widest uppercase font-semibold">
                        {isOpen ? 'Masquer les spécificités' : 'Découvrir nos livrables clés'}
                      </span>
                      <div className="p-1 rounded bg-[var(--bg-card-inner)] text-[#00BFFF]">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`service-specs-drawer-${service.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, bIdx) => (
                              <div key={bIdx} className="flex items-start space-x-2 text-xs text-[var(--text-muted)] leading-normal font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Dedicated micro-metric */}
                          {service.metric && (
                            <div className="mt-4 px-4 py-3 rounded bg-[var(--bg-card-inner)] border border-[var(--border-subtle)] flex justify-between items-center text-xs">
                              <span className="font-mono text-[var(--text-muted)] uppercase tracking-widest">Niveau Garanti :</span>
                              <span className="font-mono text-brand-blue font-semibold">{service.metric}</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

const morphingKeywords = ["Créer.", "Innover.", "Transformer.", "Propulser."];

export default function Hero({ onScrollTo }: HeroProps) {
  const [typedSlogan, setTypedSlogan] = useState('');
  const sloganTarget = "Cooncevoir des experiences numeriques";
  
  // Typing state
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedSlogan((prev) => prev + sloganTarget.charAt(index));
      index++;
      if (index >= sloganTarget.length) {
        clearInterval(interval);
      }
    }, 55); // fast typing feel
    return () => clearInterval(interval);
  }, []);

  // Morphing state
  const [keywordIndex, setKeywordIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % morphingKeywords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Parallax hook
  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 800], [0, 120]);
  const orb2Y = useTransform(scrollY, [0, 800], [0, -100]);
  const orb3Y = useTransform(scrollY, [0, 800], [0, 60]);
  const cardOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden animated-gradient-hero bg-grid-pattern"
    >
      {/* Background Soft Parallax Glow Orbs */}
      <motion.div 
        id="glow-orb-top-right"
        style={{ y: orb1Y }}
        className="absolute top-1/4 right-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-blue/15 glow-orb select-none pointer-events-none" 
      />
      <motion.div 
        id="glow-orb-bottom-left"
        style={{ y: orb2Y }}
        className="absolute bottom-1/4 left-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 glow-orb select-none pointer-events-none" 
      />
      <motion.div 
        id="glow-orb-center"
        style={{ y: orb3Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-400/5 glow-orb select-none pointer-events-none"
      />

      {/* Hero Content Grid */}
      <motion.div 
        style={{ opacity: cardOpacity }}
        className="max-w-7xl mx-auto px-6 w-full relative z-10 py-16 md:py-24 flex flex-col items-center text-center"
      >


        {/* Brand Main Title */}
        <motion.h2
          id="hero-company-name"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs md:text-sm font-mono font-bold tracking-[0.5em] text-brand-blue uppercase mb-3"
        >
          CONSTRUCTION & BRANDING
        </motion.h2>

        {/* Premium Slogan with Typewriter Effect */}
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-[var(--text-app)] max-w-5xl leading-[1.05] mb-8 min-h-[3.3em] md:min-h-[2.2em] flex flex-wrap justify-center items-center">
          <span className="typewriter-caret pr-2 inline-block text-[var(--text-app)]">
            {typedSlogan}
          </span>
          <span className="text-gradient-blue text-[#00BFFF] inline-block font-bold">
            qui élèvent les marques.
          </span>
        </div>

        {/* Morphing Word Showcase Under Slogan */}
        <div id="hero-morphing-story" className="flex items-center justify-center space-x-2 mb-8 text-xs sm:text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-card)]/40 border border-[var(--border-subtle)] backdrop-blur px-4 py-2 rounded-full shadow-sm">
          <span className="uppercase tracking-widest text-[10px] text-gray-500">Nos Expertises :</span>
          <div className="relative h-5 w-28 overflow-hidden text-left inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywordIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute left-0 text-[#00BFFF] font-bold tracking-wider uppercase text-xs sm:text-sm"
              >
                {morphingKeywords[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtext */}
        <motion.p
          id="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--text-muted)] font-sans max-w-3xl leading-relaxed mb-12 font-light"
        >
          Nous concevons des sites internet d’exception, des identités de marque singulières et des récits audiovisuels à fort impact pour les entreprises en pleine croissance.
        </motion.p>

        {/* CTA Buttons with high-end premium animations */}
        <motion.div
          id="hero-cta-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            id="hero-cta-start"
            onClick={() => onScrollTo('contact')}
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0, 191, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--text-app)] text-[var(--bg-app)] font-semibold tracking-wide transition-all duration-300 transform shadow-md flex items-center justify-center space-x-3 group cursor-pointer border border-[var(--border-strong)]"
          >
            <span>Démarrer un projet</span>
            <ArrowRight className="w-4.5 h-4.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            id="hero-cta-portfolio"
            onClick={() => onScrollTo('portfolio')}
            whileHover={{ scale: 1.03, backgroundColor: 'var(--border-subtle)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-app)] font-medium tracking-wide transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer shadow-sm"
          >
            <span>Voir nos réalisations</span>
          </motion.button>
        </motion.div>

        {/* Minimal Scroll Ticker */}
        <motion.div
          id="hero-scroll-reminder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => onScrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer group hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
            Explorer l'univers Apex
          </span>
          <div className="w-5 h-8 rounded-full border border-[var(--border-strong)] flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-2 rounded-full bg-brand-blue"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Wave/Grid Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-app)] to-transparent pointer-events-none" />
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronUp } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer id="footer" className="relative bg-brand-dark/95 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Upper Subtle Radial Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Links row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onScrollTo('hero')}>
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 15 L12 85 L32 85 L50 49 L50 15 Z" fill="#FFFFFF" />
                  <path d="M50 15 L88 85 L68 85 L50 49 L50 15 Z" fill="#00BFFF" />
                  <path d="M50 55 L35 78 L45 78 L50 70 L55 70 L55 78 L65 78 Z" fill="#00BFFF" opacity="0.85" />
                </svg>
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-[0.25em] text-white">APEX</span>
                <div className="text-[8px] font-mono tracking-[0.45em] text-[#00BFFF] uppercase leading-none">DIGITAL</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Nous aidons les entreprises d’exception et les leaders de demain à marquer les esprits de façon moderne et pérenne. Exécution haute fidélité, code sur mesure et récits d’impact.
            </p>

          </div>

          {/* Quick Nav columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00BFFF] font-semibold">PLAN DU SITE</h4>
            <div className="flex flex-col space-y-2.5 text-xs text-gray-400">
              <button onClick={() => onScrollTo('about')} className="hover:text-white transition-colors text-left cursor-pointer">À propos</button>
              <button onClick={() => onScrollTo('services')} className="hover:text-white transition-colors text-left cursor-pointer">Nos services</button>
              <button onClick={() => onScrollTo('portfolio')} className="hover:text-white transition-colors text-left cursor-pointer">Réalisations</button>
              <button onClick={() => onScrollTo('team')} className="hover:text-white transition-colors text-left cursor-pointer">L'équipe</button>
              <button onClick={() => onScrollTo('vision')} className="hover:text-white transition-colors text-left cursor-pointer">Notre vision</button>
            </div>
          </div>

          {/* Hub offices metadata column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">BUREAUX CRÉATIFS</h4>
            <div className="space-y-4.5 text-xs text-brand-light-blue font-mono">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-normal leading-tight">Afrique Centrale</div>
                <div className="text-[#00BFFF] leading-relaxed mt-0.5 animate-pulse">Kinshasa, RDC // Afritech Lab</div>
              </div>

              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-normal leading-tight">Partenaire</div>
                <div className="text-white opacity-80 leading-relaxed mt-0.5 font-semibold">afri-tech</div>
              </div>
            </div>
          </div>

          {/* Global Reach credentials column */}
          <div className="md:col-span-2 flex flex-col justify-end">
            {/* Back to top button */}
            <button
              id="footer-back-to-top"
              onClick={() => onScrollTo('hero')}
              className="py-2.5 px-3.5 rounded bg-brand-gray hover:bg-brand-blue hover:text-black border border-white/5 transition-all text-xs font-mono text-gray-300 flex items-center justify-between cursor-pointer w-full"
            >
              <span>RETOUR EN HAUT</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 font-mono">
          <div>
            &copy; {new Date().getFullYear()} APEX DIGITAL. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" onClick={(e) => { e.preventDefault(); onScrollTo('about'); }} className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <span className="text-white/10">|</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onScrollTo('contact'); }} className="hover:text-white transition-colors">Conditions d’Engagement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

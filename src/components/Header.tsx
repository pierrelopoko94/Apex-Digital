/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Header({ onScrollTo, activeSection, theme, setTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'À propos', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Équipe', id: 'team' },
    { label: 'Notre Vision', id: 'vision' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--border-subtle)] py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          id="logo-container"
          onClick={() => handleNavClick('hero')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-3 cursor-pointer group"
          title="Agence Apex Digital"
        >
          {/* Stunning SVG Apex Logo matching the prompt illustration exactly */}
          <div className="relative w-9 h-9">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform group-hover:rotate-2 transition-transform duration-300"
            >
              {/* Left Leg of Triangular "A" */}
              <path
                d="M50 15 L12 85 L32 85 L50 49 L50 15 Z"
                fill="currentColor"
                className="text-[var(--text-app)] transition-colors duration-300"
              />
              {/* Right Leg in Glowing Electric Light Blue */}
              <path
                d="M50 15 L88 85 L68 85 L50 49 L50 15 Z"
                fill="#00BFFF"
              />
              {/* Inner floating chevron pointing to the Apex */}
              <path
                d="M50 55 L35 78 L45 78 L50 70 L55 70 L55 78 L65 78 Z"
                fill="#00BFFF"
                opacity="0.85"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-display text-lg font-bold tracking-[0.25em] text-[var(--text-app)] transition-colors duration-300">
                APEX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            </div>
            <div className="text-[9px] font-mono tracking-[0.45em] text-[#00BFFF] uppercase font-semibold leading-none">
              DIGITAL
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                activeSection === item.id ? 'text-[var(--text-app)] font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-app)]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue shadow-[0_0_8px_#00BFFF]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Subtle Sun/Moon theme switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 ml-1 rounded-full bg-[var(--border-subtle)] hover:bg-[var(--border-strong)] text-[var(--text-app)] border border-[var(--border-subtle)] transition-all cursor-pointer flex items-center justify-center"
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <motion.button
            id="header-cta-button"
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.03, backgroundColor: '#00BFFF', color: '#000', boxShadow: '0 0 15px rgba(0, 191, 255, 0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full bg-[var(--text-app)] text-[var(--bg-app)] font-semibold text-sm transition-all flex items-center space-x-2 group cursor-pointer border border-[var(--border-strong)]"
          >
            <span>Démarrer un projet</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Mobile controls (right-side container) */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Theme switcher on mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-[var(--border-subtle)] hover:bg-[var(--border-strong)] text-[var(--text-app)] border border-[var(--border-subtle)] transition-all cursor-pointer flex items-center justify-center"
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-app)] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[var(--bg-app)] border-b border-[var(--border-subtle)] backdrop-blur-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 text-base font-medium tracking-wide border-b border-[var(--border-subtle)] transition-colors ${
                    activeSection === item.id ? 'text-brand-blue font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-app)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                id="mobile-header-cta"
                onClick={() => handleNavClick('contact')}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 py-3 rounded-xl bg-brand-blue text-black font-bold text-center block cursor-pointer transition-colors hover:bg-sky-400"
              >
                Créons ensemble quelque chose d'exceptionnel
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

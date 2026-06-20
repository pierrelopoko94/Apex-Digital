/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('apex-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('apex-theme', theme);
    // Also toggle class on documentElement for custom tailwind overrides if any
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Smooth scroll helper
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Cursor following ambient spotlight to replicate elite dark tech agencies
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section Observer to automatically update active Header link on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'portfolio', 'team', 'vision', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="apex-agency-workspace" 
      className={`min-h-screen relative transition-colors duration-500 bg-[var(--bg-app)] text-[var(--text-app)] selection:bg-brand-blue selection:text-black ${theme}`}
    >
      
      {/* Dynamic Cursor Glowing Beam (Only applies to desktop screens) */}
      <div
        id="desktop-spotlight"
        className="hidden lg:block fixed pointer-events-none z-30 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 filter blur-[90px]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          backgroundColor: theme === 'dark' ? 'rgba(0, 191, 255, 0.035)' : 'rgba(0, 191, 255, 0.015)'
        }}
      />

      {/* Header element */}
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} theme={theme} setTheme={setTheme} />

      {/* Core Main Layout */}
      <main id="prime-content-canvas" className="relative">
        <Hero onScrollTo={handleScrollTo} />
        
        <div id="about-section-container" className="relative">
          <About />
        </div>

        <div id="services-section-container" className="relative">
          <Services />
        </div>

        <div id="portfolio-section-container" className="relative">
          <Portfolio />
        </div>

        <div id="team-section-container" className="relative font-sans">
          <Team />
        </div>

        <div id="vision-section-container" className="relative">
          <Vision />
        </div>

        <div id="contact-section-container" className="relative">
          <Contact />
        </div>
      </main>

      {/* Footer element */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}


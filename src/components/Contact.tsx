/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, HelpCircle, User, Mail, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'web-dev',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const projectTypes = [
    { value: 'web-dev', label: 'Développement Web' },
    { value: 'branding', label: 'Branding & Identité' },
    { value: 'video', label: 'Production Vidéo' },
    { value: 'strategy', label: 'Stratégie Digitale' },
    { value: 'consult', label: 'Conseil & Architecture' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Reset form variables
        setFormData({
          name: '',
          email: '',
          projectType: 'web-dev',
          message: '',
        });
        
        // Auto dismiss success state after 10 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 10000);
      } else {
        setSubmissionError(data.error || 'Désolé, une erreur est survenue lors de l’envoi de votre proposition.');
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setSubmissionError('Impossible d’atteindre le serveur. Veuillez vérifier votre connexion et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden bg-grid-pattern">
      {/* Background Soft Glow Orbs */}
      <div className="absolute bottom-0 right-[15%] w-[40vw] h-[40vw] rounded-full bg-brand-blue/10 glow-orb pointer-events-none select-none" />
      <div className="absolute top-1/3 left-[2%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 glow-orb pointer-events-none select-none" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-[25%] w-[1px] bg-white/[0.01]" />
      <div className="absolute inset-y-0 right-[25%] w-[1px] bg-white/[0.01]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Action Callout with Scroll Fade In */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
                INITIER LA CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
                Discutons de votre projet.
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed font-light">
              Nous avons hâte de découvrir vos ambitions, de cadrer vos besoins métier et de concevoir une présence visuelle d’exception pour vos projets. Remplissez notre formulaire, un associé vous répondra directement sous 24 heures.
            </p>

            {/* Quick contact facts cards */}
            <motion.div 
              whileHover={{ scale: 1.01, borderColor: 'rgba(0,191,255,0.2)' }}
              className="p-6 rounded-2xl bg-brand-gray border border-white/5 space-y-4 transition-all duration-300"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00BFFF] font-semibold">
                Notre démarche d’engagement
              </h3>
              
              <ul className="space-y-3.5 text-xs text-gray-400 font-sans font-light">
                <li className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 animate-pulse" />
                  <span>Réponse sur mesure directement par Peter ou Sélenge</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 animate-pulse" />
                  <span>Modèle d’estimation transparent et planification personnalisée</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 animate-pulse" />
                  <span>Période de suivi et de maintenance après-vente d’exception</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Form with Scroll Fade In */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-gray border border-white/10 relative overflow-hidden">
              {/* Submission visual success layout */}
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    id="contact-success-state"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                       <h3 className="text-2xl font-display font-medium text-white">
                        Formulaire de projet reçu !
                      </h3>
                      <p className="text-sm text-gray-400 font-sans max-w-md mx-auto leading-relaxed font-light">
                        Merci d'avoir contacté Apex Digital. Un associé de notre studio a été immédiatement notifié et commence à étudier vos éléments. Nous revenons vers vous très rapidement.
                      </p>
                    </div>

                    <button
                      id="reset-contact-button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Envoyer un autre projet
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    id="contact-form"
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                   >
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-gray-500" />
                        <span>Comment devons-nous vous appeler ?</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Pierre Lopoko"
                        className="w-full bg-black/60 border border-white/5 focus:border-[#00BFFF]/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-blue/40 transition-all font-sans font-light"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center space-x-1.5">
                        <Mail className="w-3.5 h-3.5 text-gray-500" />
                        <span>Adresse e-mail professionnelle</span>
                      </label>
                      <input
                        type="type"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: contact@entreprise.fr"
                        className="w-full bg-black/60 border border-white/5 focus:border-[#00BFFF]/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-blue/40 transition-all font-sans font-light"
                      />
                    </div>

                    {/* Project type select layout - Luxury chips style */}
                    <div className="space-y-3.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center space-x-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gray-500" />
                        <span>Quel est le domaine principal ?</span>
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {projectTypes.map((type) => (
                          <motion.button
                            type="button"
                            key={type.value}
                            id={`contact-type-selector-${type.value}`}
                            onClick={() => handleTypeSelect(type.value)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-3 rounded-xl border text-xs font-mono text-left uppercase tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                              formData.projectType === type.value
                                ? 'bg-brand-blue/10 border-brand-blue text-brand-blue font-semibold'
                                : 'bg-black/40 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <span>{type.label}</span>
                            {formData.projectType === type.value && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#00BFFF]" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Message description block */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center space-x-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
                        <span>Description de vos objectifs et exigences</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Présentez l'objectif de votre entreprise, vos défis créatifs, et comment nous pouvons vous aider à asseoir votre autorité numérique..."
                        className="w-full bg-black/60 border border-white/5 focus:border-[#00BFFF]/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-blue/40 transition-all font-sans resize-none leading-relaxed font-light"
                      />
                    </div>

                    {/* Submit action */}
                    {submissionError && (
                      <motion.div
                        id="contact-submission-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 leading-relaxed"
                      >
                        {submissionError}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      id="submit-contact"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, backgroundColor: '#00BFFF', color: '#000', boxShadow: '0 0 25px rgba(0, 191, 255, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Lancer le projet</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

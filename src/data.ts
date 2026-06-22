/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, TeamMember, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Développement Web',
    description: 'Nous concevons et développons des applications web haut de gamme et des sites internet sur mesure, mariant une esthétique épurée à une ingénierie full-stack de pointe.',
    benefits: [
      'Solutions sur mesure en React & TypeScript',
      'Optimisation absolue des performances (Lighthouse)',
      'Intégration d’architectures serveurs sécurisées',
      'Interactions et transitions fluides et réactives'
    ],
    iconName: 'Code',
    badgeText: 'Moteur Technologique',
    metric: 'Temps de réponse inférieur à 150ms'
  },
  {
    id: 'branding',
    title: 'Image de Marque & Identité',
    description: 'Nous façonnons des directions visuelles singulières, des logotypes vectoriels précis, des palettes typographiques élégantes et des chartes graphiques de très haut standing.',
    benefits: [
      'Chartes graphiques et univers visuels exclusifs',
      'Systèmes de logos géométriques sur mesure',
      'Associations de caractères et palettes à fort contraste',
      'Lignes de conduite de marque omnicanales'
    ],
    iconName: 'Compass',
    badgeText: 'ADN Créatif',
    metric: 'Géométrie 100% sur mesure'
  },
  {
    id: 'video',
    title: 'Production Vidéo',
    description: 'Nous réalisons des campagnes promotionnelles cinématiques à fort impact, des récits forts pour les réseaux sociaux et des documentaires de marque captivants.',
    benefits: [
      'Écriture de scripts & direction artistique complète',
      'Montage et étalonnage de haute précision',
      'Format de publicité commerciale multi-supports',
      'Narration immersive à forte résonance émotionnelle'
    ],
    iconName: 'Video',
    badgeText: 'Cinéma & Récit Visuel',
    metric: 'Fidélité 4K Ultra-Haute Définition'
  },
  {
    id: 'strategy',
    title: 'Stratégie Digitale',
    description: 'Nous pilotons des plans de croissance robustes, concevons des écosystèmes de communication modernes et optimisons votre autorité organique sur le web.',
    benefits: [
      'Cartographie de visibilité organique ciblée',
      'Audit technique des flux de communication',
      'Matrices de positionnement de proposition de valeur',
      'Optimisation des entonnoirs de conversion'
    ],
    iconName: 'TrendingUp',
    badgeText: 'Plan de Conversion',
    metric: 'Croissance pilotée par les données'
  }
];

export const PROJECTS: ProjectItem[] = [

   {
  id: 'clement',
  title: 'Stratége',
  category: 'Stratégie & Partenariats',
  description: 'Responsable du développement stratégique et des partenariats au sein d’Apex Digital, Clément contribue à la croissance de l’agence à travers les relations professionnelles et les opportunités de collaboration.',
  imageUrl: '/Image-personne/Clement-taff.jpg',
  tags: ['Stratégie', 'Partenariats', 'Communication', 'Développement', 'Networking'],
  clientName: 'Apex Digital',
  year: '2026',
  status: 'completed',
  scope: [
    'Développement de partenariats',
    'Gestion des relations professionnelles',
    'Identification d’opportunités de croissance',
    'Communication stratégique',
    'Networking et représentation de l’agence'
  ],
  longDescription: 'Clément joue un rôle clé dans le développement d’Apex Digital en assurant la création et le maintien de partenariats stratégiques. Grâce à ses compétences en communication et en relation humaine, il facilite les échanges entre l’agence et ses partenaires, tout en contribuant à l’expansion du réseau professionnel.',
  challenge: 'Créer et maintenir des relations solides dans un environnement compétitif tout en identifiant des opportunités de croissance durables pour l’agence.',
  solution: 'Mise en place d’une approche structurée de networking, d’une communication efficace et d’une stratégie de partenariat orientée sur la confiance et la collaboration à long terme.'
},
   {
  id: 'quota-easy',
  title: 'Quota Easy',
  category: 'Application de Gestion Financière',
  description: 'Une plateforme moderne conçue pour simplifier la gestion des cotisations, des quotas et le suivi des opérations financières en temps réel.',
  imageUrl: '/Image-personne/Quota-Easy.png',
  tags: ['Kotlin', 'Android', 'Firebase', 'Gestion Financière', 'Tableau de Bord'],
  clientName: 'Projet Personnel',
  year: '2026',
  status: 'completed',
  scope: [
    'Gestion des cotisations',
    'Suivi des transactions',
    'Tableau de bord analytique',
    'Gestion des utilisateurs',
    'Notifications en temps réel',
    'Rapports financiers'
  ],
  longDescription: 'Quota Easy est une application développée pour moderniser la gestion des cotisations et des opérations financières. La plateforme permet aux responsables de suivre facilement les paiements, de consulter les statistiques importantes et de générer des rapports utiles à la prise de décision. Grâce à une interface intuitive et moderne, les utilisateurs peuvent accéder à leurs informations rapidement depuis leur smartphone.',
  challenge: 'Réduire les erreurs de gestion manuelle et offrir un suivi fiable des opérations dans un environnement où les outils numériques sont encore peu utilisés.',
  solution: 'Mise en place d’une application mobile sécurisée avec synchronisation des données, tableau de bord interactif, gestion des rôles utilisateurs et génération automatique de rapports pour améliorer la transparence et l’efficacité.',
  impact: 'Faciliter la gestion financière et améliorer la transparence des opérations pour les organisations, associations et entreprises.',

 },
{
  id: 'urban-photography',
  title: 'Urban Photography Session',
  category: 'Photographie Artistique',
  description: 'Série de photos artistiques capturant des émotions humaines dans un environnement urbain moderne.',
  imageUrl: '/Image-personne/Selenge-Oeuvre.jpg',
  tags: ['Photographie', 'Portrait', 'Urban', 'Lightroom', 'Créatif'],
  clientName: 'Projet Personnel',
  year: '2026',
  status: 'completed',
  scope: [
    'Shooting portrait professionnel',
    'Retouche photo avancée',
    'Direction artistique',
    'Composition visuelle',
    'Éclairage naturel et urbain'
  ],
  longDescription: 'Ce projet explore l’expression humaine dans un cadre urbain moderne à travers une série de portraits artistiques. L’objectif est de capturer des émotions authentiques tout en mettant en valeur l’esthétique de la ville.',
  challenge: 'Créer des images expressives tout en maintenant une cohérence visuelle dans des environnements urbains variés.',
  solution: 'Utilisation d’un éclairage naturel maîtrisé, d’une direction artistique précise et d’un travail de post-production sur Lightroom et Photoshop.'
  },
{
  id: 'numbers-challenge',
  title: 'Numbers Challenge',
  category: 'Jeu Mobile Interactif',
  description: 'Une application de divertissement où les joueurs sélectionnent des nombres qui révèlent des défis, actions ou questions à réaliser, créant une expérience amusante et imprévisible.',
  imageUrl: '/Image-personne/Commencer.png',
  tags: ['Kotlin', 'Android', 'Jeu Mobile', 'Défis', 'Multijoueur'],
  clientName: 'Projet Personnel',
  year: '2026',
  status: 'in-progress',
  scope: [
    'Système de défis aléatoires',
    'Mode multijoueur local',
    'Personnalisation des défis',
    'Gestion des niveaux',
    'Statistiques des joueurs',
    'Interface moderne et intuitive'
  ],
  longDescription: 'Numbers Challenge est un jeu mobile conçu pour offrir des moments de divertissement entre amis, en famille ou lors d’événements. Chaque nombre sélectionné correspond à une action, une question ou un défi à accomplir. L’objectif est de créer une expérience dynamique, amusante et imprévisible grâce à une grande variété de contenus et de scénarios.',
  challenge: 'Créer un système de génération de défis suffisamment varié pour maintenir l’intérêt des joueurs sur le long terme tout en garantissant une expérience fluide et équitable.',
  solution: 'Développement d’un moteur intelligent de sélection de défis, d’un système de progression personnalisé et d’une interface optimisée permettant une expérience utilisateur simple, rapide et engageante.'
},
{
  id: 'nature-portrait-session',
  title: 'Nature Portrait Session',
  category: 'Photographie Portrait',
  description: 'Série de portraits artistiques réalisés en milieu naturel, mettant en valeur la connexion entre l’humain et l’environnement.',
  imageUrl: '/Image-personne/Selenge-Oeuvre03.jpg',
  tags: ['Photographie', 'Portrait', 'Nature', 'Créatif', 'Lumière naturelle'],
  clientName: 'Projet Personnel',
  year: '2026',
  status: 'completed',
  scope: [
    'Shooting en extérieur',
    'Direction de modèle',
    'Composition artistique',
    'Gestion de la lumière naturelle',
    'Retouche colorimétrique'
  ],
  longDescription: 'Ce projet explore l’harmonie entre l’humain et la nature à travers une série de portraits réalisés en extérieur. L’objectif est de capturer des moments authentiques dans un cadre naturel et esthétique.',
  challenge: 'Travailler avec des conditions de lumière variables tout en maintenant une cohérence artistique.',
  solution: 'Utilisation de lumière naturelle contrôlée, sélection de décors naturels et post-production pour harmoniser les couleurs et l’ambiance visuelle.'
}

];

export const TEAM: TeamMember[] = [
  {
    id: 'peter',
    name: 'Peter',
    role: 'Développeur Web Full-stack & Architecte de Solutions',
    bio: 'Peter conçoit des infrastructures numériques hautement sécurisées et des applications web à haute performance. Il est expert dans la mise en place d\'architectures Cloud agiles, l\'optimisation des temps de chargement et le respect rigoureux des standards de sécurité du code.',
    // 🌟 [ZONE D'AJOUT PHOTO DE PETER] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/peter.jpg)
    imageUrl: '/Image-personne/peter.jpg',
    keySkills: ['React / Next.js', 'TypeScript & ESM', 'Node.js / Express Dev', 'Architecture AWS / Cloud', 'Optimisation Tailwind CSS'],
    signatureQuote: 'Un excellent logiciel n\'est pas seulement écrit. Il est architecturé pour fonctionner en toute sécurité, charger instantanément et soulager la charge cognitive de l\'utilisateur.'
  },
  {
    id: 'selenge',
    name: 'Selenge',
    role: 'Directeur Artistique & Récit Visuel',
    bio: 'Selenge dirige la production vidéo cinématographique, le montage haute fidélité et la création d\'identités graphiques puissantes. Elle aide les marques à transformer leur histoire et leurs valeurs fondamentales en contenus audiovisuels créateurs d\'émotions.',
    // 🌟 [ZONE D'AJOUT PHOTO DE SÉLENGE] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/selenge.jpg)
    imageUrl: '/Image-personne/Selenge-present.jpg',
    keySkills: ['Réalisation Cinématographique', 'Production & Montage Vidéo', 'Design d\'Identités Graphiques', 'Planification de Campagnes Récit', 'Scénarisation Professionnelle'],
    signatureQuote: 'Les utilisateurs n\'achètent pas de simples produits, ils se connectent à une intention authentique. L\'émotion humaine reste la passerelle numérique absolue.'
  },
  {
    id: 'clement',
    name: 'Clement',
    role: 'Stratège de Croissance & Partenariats',
    bio: 'il gère l\'acquisition clients et l\'alignement entre investissements technologiques et retours sur investissement. il veille à ce que chacune de nos créations visuelles serve directement les objectifs commerciaux de nos partenaires.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/responsable.jpg)
    imageUrl: '/src/Image-personne/Clement-present.jpg',
    keySkills: ['Conseil d\'Affaires international', 'Cartographie de ROI Digital', 'Négociation & Cadrage Projet', 'Positionnement Stratégique', 'Stratégies d\'Acquisition de Partenaires'],
    signatureQuote: 'Nous alignons la recherche esthétique avec les indicateurs business stratégiques. Le design n\'est premium que s\'il génère une valeur client mesurable.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Directeur de l’Innovation',
    company: 'Aura Capital',
    quote: 'Apex Digital fonctionne comme un studio d’élite. Ils ont conçu notre portail partenaires dans des délais serrés avec une exigence visuelle et de sécurité sans compromis.',
    category: 'Développement Web',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Amina Kivu',
    role: 'Directrice Générale',
    company: 'Kivu Organic Farms',
    quote: 'Leur travail sur l\'identité de notre marque a totalement transformé notre image. Nous avons pu signer avec des épiceries fines à Berlin et New York directement après notre lancement.',
    category: 'Branding & Stratégie',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  }
];

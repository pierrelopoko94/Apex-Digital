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
    id: 'aura-fintech',
    title: 'Écosystème FinTech Aura Premium',
    category: 'Développement Web & Stratégie',
    description: 'Un portail et tableau de bord hautement sécurisé pour les investisseurs privés, axé sur la clarté des données, les statistiques en temps réel et les micro-animations.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse (URL ou chemin local comme /src/assets/photo.jpg) par votre propre photo de projet
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind', 'Motion', 'Noyau Sécurisé'],
    clientName: 'Aura Capital',
    year: '2025',
    status: 'completed',
    scope: ['Ingénierie React Full-stack', 'Moteur de Visualisation de Données', 'Sécurisation des Accès', 'Interface Homme-Machine Interactive'],
    longDescription: 'Aura Capital nécessitait une interface établissant immédiatement une confiance absolue auprès de ses investisseurs de premier plan. Nous avons développé une application web récompensée, intégrant des mises à jour de registres en temps réel et un chiffrement côté client performant. Le résultat est un portail de gestion d\'exception, intuitif et fluide.',
    challenge: 'Intégrer de multiples flux de données financières en temps réel sans jamais ralentir le navigateur ni compromettre les cookies de session hautement sécurisés.',
    solution: 'Conception d\'un gestionnaire d\'état orienté événements et optimisation des modules de graphiques de rendu via des stratégies de mémoïsation avancées.'
  },
  {
    id: 'kivu-coffee',
    title: 'Identité Visuelle Café Exotique Kivu',
    category: 'Image de Marque & Stratégie digitale',
    description: 'Identité de marque complète, design d\'emballages exclusifs et page web de lancement haut de gamme pour un exportateur de café biologique d\'Afrique de l\'Est.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre propre photo de produit ou logo de marque
    imageUrl: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1200&auto=format&fit=crop',
    tags: ['Image de Marque', 'Géométrie Vectorielle', 'Design Packaging', 'Présence Web'],
    clientName: 'Kivu Farms',
    year: '2025',
    status: 'completed',
    scope: ['Conception de Logotype Sur Mesure', 'Sélection Typographique & Chromatique', 'Finition de Conditionnement Premium', 'Stratégie de Lancement E-commerce'],
    longDescription: 'Kivu Farms souhaitait mettre en avant l\'authenticité de sa production sur sols volcaniques d\'altitude et son engagement éthique. Nous avons développé une identity graphique géométrique moderne inspirée des reliefs volcaniques et de la structure du grain de café. Associé à un site web épuré, ce travail leur a permis de s\'introduire auprès des plus grands distributeurs d\'Europe.',
    challenge: 'Exprimer un patrimoine culturel fort à travers une esthétique ultra-moderne séduisant des acheteurs internationaux exigeants, en évitant les clichés.',
    solution: 'Création d\'un motif géométrique épuré mimant la forme d\'un apex volcanique, associé à une typographie technique monospacée indiquant précisément les paramètres d\'altitude.'
  },
  {
    id: 'heritage-doc',
    title: 'Campagne de Récit Patrimonial',
    category: 'Production Vidéo & Contenu',
    description: 'Une campagne cinématographique immersive suivant des artisans préservant des techniques architecturales séculaires, ayant généré une portée organique exceptionnelle.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre photo ou extrait vidéo
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    tags: ['Film Cinématique', 'Production Complète', 'Design Sonore', 'Portée Organique'],
    clientName: 'Guilde du Patrimoine',
    year: '2026',
    status: 'completed',
    scope: ['Rédaction du Scénario & Réalisation', 'Directeur de la Photographie 4K', 'Mixage Sonore Spatial', 'Lancement de Campagne d\'Engagement'],
    longDescription: 'La Guilde du Patrimoine souhaitait augmenter ses dons directs de 40%. Nous avons réalisé un film documentaire de marque centré sur de magnifiques plans de travail de l\'argile et du bois. Grâce à des éclairages naturels somptueux et un sound design texturé (bruits d\'ateliers), la vidéo a suscité un élan de générosité international.',
    challenge: 'Filmer dans des ateliers bruyants avec une lumière naturelle extrêmement restreinte tout en conservant une image d\'une netteté absolue.',
    solution: 'Utilisation de capteurs de pointe pour basse luminosité, micros directionnels isolant les gestes des artisans et étalonnage chaleureux inspiré du cinéma argentique.'
  },
  {
    id: 'eclat-commerce',
    title: 'Boutique Virtuelle Éclat Paris',
    category: 'Développement Web & Image de Marque',
    description: 'Une plateforme de commerce immersif exploitant des modélisations 3D fluides et des modules d\'achat instantanés ultra-simplifiés.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre visuel e-commerce ou mode
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebGL Immersif', 'Rendu 3D Interactif', 'Parcours d\'Achat Élite', 'Animations Fluides'],
    clientName: 'Éclat Paris',
    year: '2026',
    status: 'in-progress',
    scope: ['Développement Web3D / WebGL', 'Identité Numérique de Luxe', 'Interfaces Transactionnelles Intuitives'],
    longDescription: 'Éclat se prépare à bousculer la présentation de sa collection haute couture avec une expérience d\'achat contemplative en cours de développement. Nous concevons une interface théâtrale à grande échelle pour une navigation immersive unique sur ordinateur.',
    challenge: 'Garantir un rendu visuel somptueux en 3D interactive sans engendrer de surchauffe matérielle ou d\'instabilité de mise en page sur mobile.',
    solution: 'Préchargement asynchrone des maillages 3D via des scripts d\'arrière-plan et isolation matérielle des couches d\'animation graphique GPU.'
  },
  {
    id: 'metronome-labs',
    title: 'Afritech Labs (Tech Lab)',
    category: 'Laboratoire Technologique Afritech',
    description: 'Un pôle expérimental et technologique pour incuber et matérialiser les innovations logicielles de pointe en Afrique Centrale.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre visuel du laboratoire d'innovation
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Afritech', 'R&D', 'TypeScript Lab', 'Infrastructures Cloud RDC'],
    clientName: 'Afritech',
    year: '2026',
    status: 'coming-soon',
    scope: ['Moteur de Traitement Vectoriel', 'Routage Réseau Haut Performance', 'Changement Échelle Cloud'],
    longDescription: 'Le Tech Lab d\'Afritech est un espace créatif et technique dédié à repousser les frontières logicielles d\'Afrique Centrale. Nous y testons des architectures sans serveur hautement résilientes et des designs cinématiques novateurs.',
    challenge: 'Fournir un temps d\'accès réduit au travers de réseaux à bande passante variable sur le territoire congolais.',
    solution: 'Optimisation asynchrone poussée, mise en cache périphérique (CDN) agressive et compression optimale des fichiers multimédias.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'peter',
    name: 'Peter',
    role: 'Développeur Web Full-stack & Architecte de Solutions',
    bio: 'Peter conçoit des infrastructures numériques hautement sécurisées et des applications web à haute performance. Il est expert dans la mise en place d\'architectures Cloud agiles, l\'optimisation des temps de chargement et le respect rigoureux des standards de sécurité du code.',
    // 🌟 [ZONE D'AJOUT PHOTO DE PETER] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/peter.jpg)
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    keySkills: ['React / Next.js', 'TypeScript & ESM', 'Node.js / Express Dev', 'Architecture AWS / Cloud', 'Optimisation Tailwind CSS'],
    signatureQuote: 'Un excellent logiciel n\'est pas seulement écrit. Il est architecturé pour fonctionner en toute sécurité, charger instantanément et soulager la charge cognitive de l\'utilisateur.'
  },
  {
    id: 'selenge',
    name: 'Sélenge',
    role: 'Directrice Artistique & Récit Visuel',
    bio: 'Sélenge dirige la production vidéo cinématographique, le montage haute fidélité et la création d\'identités graphiques puissantes. Elle aide les marques à transformer leur histoire et leurs valeurs fondamentales en contenus audiovisuels créateurs d\'émotions.',
    // 🌟 [ZONE D'AJOUT PHOTO DE SÉLENGE] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/selenge.jpg)
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    keySkills: ['Réalisation Cinématographique', 'Production & Montage Vidéo', 'Design d\'Identités Graphiques', 'Planification de Campagnes Récit', 'Scénarisation Professionnelle'],
    signatureQuote: 'Les utilisateurs n\'achètent pas de simples produits, ils se connectent à une intention authentique. L\'émotion humaine reste la passerelle numérique absolue.'
  },
  {
    id: 'business-lead',
    name: 'Responsable Clientèle',
    role: 'Stratège de Croissance & Partenariats',
    bio: 'Elle gère l\'acquisition clients et l\'alignement entre investissements technologiques et retours sur investissement. Elle veille à ce que chacune de nos créations visuelles serve directement les objectifs commerciaux de nos partenaires.',
    // 🌟 [ZONE D'AJOUT PHOTO] Remplacez cette adresse par votre propre photo de portrait (par ex. /src/assets/responsable.jpg)
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
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

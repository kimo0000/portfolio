// ============================================================================
//  TOUT LE CONTENU DU PORTFOLIO EST ICI.
//  Modifiez ce fichier pour changer vos informations, textes et projets.
//  Chaque texte existe en français (fr) et en anglais (en).
// ============================================================================

export type Lang = 'fr' | 'en';
export type Text = Record<Lang, string>;

// --- Vos informations ---------------------------------------------------------
export const profile = {
  name: 'Karim', // nom affiché (volontairement court)
  handle: 'karim', // utilisé dans l'invite du terminal : karim@portfolio
  email: 'touatikarim1985@gmail.com', // seul moyen de contact affiché
  location: { fr: 'Tunisie · disponible à distance', en: 'Tunisia · available remotely' } as Text,
  available: true,
};

// --- Textes de l'interface ------------------------------------------------------
export const ui = {
  nav: {
    services: { fr: 'services', en: 'services' },
    projects: { fr: 'projets', en: 'projects' },
    process: { fr: 'méthode', en: 'process' },
    about: { fr: 'à-propos', en: 'about' },
    contact: { fr: 'contact', en: 'contact' },
  },
  hero: {
    role: { fr: 'Développeur web full-stack', en: 'Full-stack web developer' },
    lines: {
      fr: ['Applications web sur mesure', 'Tableaux de bord & outils de gestion', 'Sécurité intégrée dès le départ'],
      en: ['Custom web applications', 'Dashboards & management tools', 'Security built in from day one'],
    },
    lead: {
      fr: "Je conçois des applications sûres et modernes pour les entreprises et les administrations, de la maquette à la mise en ligne.",
      en: 'I build secure, modern applications for businesses and public offices, from mockup to launch.',
    },
    status: { fr: 'disponible pour de nouveaux projets', en: 'available for new projects' },
    cta1: { fr: 'Demander un devis', en: 'Get a quote' },
    cta2: { fr: 'Voir les projets', en: 'See projects' },
  },
  sections: {
    services: { cmd: 'ls ./services', fr: 'Ce que je peux construire pour vous', en: 'What I can build for you' },
    projects: { cmd: 'ls ./projets', fr: 'Des projets réels, avec leur interface', en: 'Real projects, with their interface' },
    process: { cmd: 'cat methode.md', fr: 'Du premier échange à la mise en ligne', en: 'From first call to launch' },
    stack: { cmd: 'cat stack.json', fr: 'Technologies', en: 'Tech stack' },
    about: { cmd: 'cat a-propos.md', fr: 'Un développeur qui pense produit et sécurité', en: 'A developer who thinks product and security' },
    contact: { cmd: './contact.sh', fr: 'Travaillons ensemble ?', en: "Let's work together?" },
  },
  projects: {
    code: { fr: 'code', en: 'code' },
    demo: { fr: 'démo en ligne', en: 'live demo' },
    confidential: { fr: 'Confidentiel', en: 'Confidential' },
    confidentialNote: {
      fr: 'Application en production chez un client : le code et les captures d’écran restent privés. Présentation possible sur demande.',
      en: 'In production at a client: source code and screenshots are private. A walkthrough is available on request.',
    },
    featured: { fr: 'projet phare', en: 'featured' },
  },
  about: {
    body: {
      fr: "Développeur full-stack JavaScript basé en Tunisie, je crée des applications utilisées au quotidien par de vraies équipes. J'aime les interfaces soignées, le code lisible et les applications qui ne tombent pas en panne. Chaque projet est livré documenté, testé et sécurisé.",
      en: "Full-stack JavaScript developer based in Tunisia, I build apps that real teams use every day. I care about polished interfaces, readable code and apps that just work. Every project ships documented, tested and secured.",
    },
    points: [
      { fr: 'Sécurité intégrée dès le départ', en: 'Security built in from day one' },
      { fr: 'Interfaces FR / EN / AR (RTL)', en: 'FR / EN / AR interfaces (RTL)' },
      { fr: 'Code documenté et facile à reprendre', en: 'Documented, maintainable code' },
      { fr: 'Suivi et maintenance après livraison', en: 'Support after delivery' },
    ],
  },
  contact: {
    lead: {
      fr: 'Vous avez un projet ? Décrivez-le en quelques lignes par e-mail : je vous réponds sous 48 h avec une première estimation, sans engagement.',
      en: "Have a project in mind? Describe it in a few lines by email: I'll reply within 48 hours with a free, no-commitment estimate.",
    },
    write: { fr: 'Écrire avec Gmail', en: 'Write with Gmail' },
    outlook: { fr: 'Outlook', en: 'Outlook' },
    or: { fr: 'ou avec', en: 'or with' },
    copy: { fr: 'copier', en: 'copy' },
    copied: { fr: 'copié ✓', en: 'copied ✓' },
    subject: { fr: 'Demande de devis — portfolio', en: 'Quote request — portfolio' },
    body: {
      fr: 'Bonjour Karim,\n\nMon projet :\n\nType (site, application, tableau de bord…) :\nBudget estimé :\nDélai souhaité :\n\nMerci !',
      en: 'Hi Karim,\n\nMy project:\n\nType (website, app, dashboard…):\nEstimated budget:\nDesired timeline:\n\nThanks!',
    },
  },
  footer: { rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' } },
} as const;

// --- Services ---------------------------------------------------------------------
export const services: { file: string; title: Text; text: Text; items: Record<Lang, string[]> }[] = [
  {
    file: 'applications-web/',
    title: { fr: 'Applications web sur mesure', en: 'Custom web applications' },
    text: { fr: 'Un outil pensé pour votre métier, accessible depuis n’importe quel poste.', en: 'A tool built around your workflow, accessible from any computer.' },
    items: { fr: ['comptes et rôles', 'recherche avancée', 'export et impression'], en: ['accounts & roles', 'advanced search', 'export & print'] },
  },
  {
    file: 'tableaux-de-bord/',
    title: { fr: 'Tableaux de bord & gestion', en: 'Dashboards & management' },
    text: { fr: 'Vos chiffres clés en un coup d’œil, mis à jour en temps réel.', en: 'Your key figures at a glance, updated in real time.' },
    items: { fr: ['graphiques clairs', 'suivi d’activité', 'archivage de documents'], en: ['clear charts', 'activity tracking', 'document archiving'] },
  },
  {
    file: 'securite/',
    title: { fr: 'Sécurité & audit', en: 'Security & audit' },
    text: { fr: 'Je vérifie et corrige les failles d’une application existante.', en: 'I review and fix vulnerabilities in existing apps.' },
    items: { fr: ['rapport des failles', 'corrections testées', 'bonnes pratiques'], en: ['vulnerability report', 'tested fixes', 'best practices'] },
  },
  {
    file: 'mise-en-ligne/',
    title: { fr: 'Mise en ligne & maintenance', en: 'Deployment & maintenance' },
    text: { fr: 'Hébergement, sauvegardes, mises à jour : vous n’avez rien à gérer.', en: 'Hosting, backups, updates: nothing for you to manage.' },
    items: { fr: ['hébergement', 'sauvegardes', 'évolutions'], en: ['hosting', 'backups', 'new features'] },
  },
];

// --- Projets (dans l'ordre d'affichage) ------------------------------------------
export type Project = {
  id: string;
  name: string;
  featured?: boolean;
  confidential?: boolean; // ni capture, ni lien vers le code
  tagline: Text;
  text: Text;
  highlights: Record<Lang, string[]>;
  tags: string[];
  repo?: string;
  demo?: string;
  image?: string; // capture d'écran dans public/projects/
};

export const projects: Project[] = [
  {
    id: 'archiva',
    name: 'Archiva',
    featured: true,
    confidential: true,
    tagline: { fr: 'Système d’archivage numérique sécurisé', en: 'Secure digital archiving system' },
    text: {
      fr: 'Application d’archivage de documents déployée dans un bureau administratif : archivage, recherche instantanée et partage sur le réseau local, avec une interface en arabe.',
      en: 'Document archiving app deployed in an administrative office: archiving, instant search and sharing over the local network, with an Arabic interface.',
    },
    highlights: {
      fr: ['sessions sécurisées, déconnexion à distance', '4 niveaux de confidentialité', 'journal d’audit complet', '40 tests de sécurité automatisés'],
      en: ['secure sessions, remote logout', '4 confidentiality levels', 'full audit log', '40 automated security tests'],
    },
    tags: ['React 19', 'Express 5', 'MongoDB', 'Helmet', 'RTL'],
  },
  {
    id: 'nexus',
    name: 'Nexus',
    tagline: { fr: 'Messagerie chiffrée avec appels vidéo', en: 'Encrypted messenger with video calls' },
    text: {
      fr: 'Application de messagerie type WhatsApp / Telegram : chiffrement de bout en bout, appels vidéo et audio, groupes privés et partage de fichiers avec aperçu.',
      en: 'WhatsApp / Telegram-style messenger: end-to-end encryption, video and audio calls, private groups and file sharing with previews.',
    },
    highlights: {
      fr: ['chiffrement de bout en bout', 'appels vidéo WebRTC', 'groupes avec rôles admin', 'aperçu PDF, Word, Excel'],
      en: ['end-to-end encryption', 'WebRTC video calls', 'groups with admin roles', 'PDF, Word, Excel previews'],
    },
    tags: ['React', 'Node', 'MongoDB', 'Socket.io', 'WebRTC', 'Cloudinary'],
    repo: 'https://github.com/kimo0000/chat-app-fullstack-Nexus-MERN',
    demo: 'https://chat-app-fullstack-nexus-mern.vercel.app',
    image: '/projects/nexus.jpg',
  },
  {
    id: 'dashboard',
    name: 'Admin Dashboard',
    tagline: { fr: 'Tableau de bord pour PME', en: 'SME admin dashboard' },
    text: {
      fr: 'Statistiques, graphiques interactifs, transactions, calendrier et gestion d’équipe.',
      en: 'Stats, interactive charts, transactions, calendar and team management.',
    },
    highlights: { fr: ['graphiques interactifs', 'export de rapport'], en: ['interactive charts', 'report export'] },
    tags: ['React', 'Vite', 'MUI', 'Firebase Hosting'],
    repo: 'https://github.com/kimo0000/dashbord-admin',
    demo: 'https://dashbord-admin-react.web.app',
    image: '/projects/dashboard.jpg',
  },
  {
    id: 'social',
    name: 'Social App',
    tagline: { fr: 'Réseau social avec chat en temps réel', en: 'Social network with real-time chat' },
    text: {
      fr: 'Inscription, publications, profils et messagerie instantanée grâce à Socket.io.',
      en: 'Sign-up, posts, profiles and instant messaging powered by Socket.io.',
    },
    highlights: { fr: ['chat en temps réel', 'upload d’images'], en: ['real-time chat', 'image uploads'] },
    tags: ['MongoDB', 'Express', 'React', 'Node', 'Socket.io'],
    repo: 'https://github.com/kimo0000/social_mern',
    demo: 'https://social-mern-front.vercel.app',
    image: '/projects/social.jpg',
  },
  {
    id: 'shop',
    name: 'E-commerce',
    tagline: { fr: 'Clone Amazon avec paiement Stripe', en: 'Amazon clone with Stripe payments' },
    text: {
      fr: 'Catalogue, panier, authentification et paiement sécurisé par carte.',
      en: 'Catalog, cart, authentication and secure card payments.',
    },
    highlights: { fr: ['paiement Stripe', 'authentification Firebase'], en: ['Stripe checkout', 'Firebase auth'] },
    tags: ['React', 'Firebase', 'Stripe'],
    repo: 'https://github.com/kimo0000/amazon_clone-with-react-firebase-stripe',
    image: '/projects/shop.jpg',
  },
];

// --- Méthode de travail -------------------------------------------------------------
export const steps: { title: Text; text: Text }[] = [
  { title: { fr: 'Échange', en: 'Discovery' }, text: { fr: 'On discute de votre besoin, de vos utilisateurs et de vos contraintes.', en: 'We discuss your needs, users and constraints.' } },
  { title: { fr: 'Maquette & devis', en: 'Mockup & quote' }, text: { fr: 'Vous voyez l’application avant qu’elle existe, avec un prix fixe.', en: 'You see the app before it exists, with a fixed price.' } },
  { title: { fr: 'Développement', en: 'Development' }, text: { fr: 'Des versions à tester régulièrement pour ajuster au fil de l’eau.', en: 'Regular test versions so we can adjust along the way.' } },
  { title: { fr: 'Mise en ligne & suivi', en: 'Launch & support' }, text: { fr: 'Installation, formation de votre équipe et maintenance.', en: 'Deployment, team training and maintenance.' } },
];

// --- Technologies ---------------------------------------------------------------------
export const stack: Record<string, string[]> = {
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'REST API', 'Socket.io', 'WebRTC'],
  data: ['MongoDB', 'Mongoose', 'Firebase'],
  ops: ['Helmet', 'bcrypt', 'Stripe', 'Vercel', 'Git'],
};

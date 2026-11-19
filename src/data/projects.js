/**
 * ==============================================================================
 * ANMOL — PORTFOLIO PROJECT REPOSITORY
 * ==============================================================================
 * 
 * 🖼️ WHERE TO PLACE YOUR IMAGES:
 * Place all your image files directly into the:
 *   👉 public/images/
 * directory.
 * 
 * 📁 SUPPORTED IMAGE FORMATS:
 * - JPG / JPEG (.jpg, .jpeg)
 * - PNG (.png) — with or without transparency
 * - WebP (.webp) — recommended for optimal web loading
 * - SVG (.svg) — razor sharp vectors
 * 
 * 💡 PATH SHORTCUTS:
 * You can write:
 *   image: "my-poster.png"             (automatically finds /images/my-poster.png)
 *   image: "/images/my-poster.jpg"
 *   image: "https://..."               (external links work too)
 * 
 * 🏷️ "isConcept" BADGE:
 * - Set `isConcept: false` for your actual real designs (no concept badge).
 * - Set `isConcept: true` if the project is a self-initiated concept/study.
 * ==============================================================================
 */

export const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'posters', label: 'Posters & Banners' },
  { id: 'branding', label: 'Branding & Logos' },
  { id: 'social', label: 'Social Media Designs' },
  { id: 'uiux', label: 'UI/UX Designs' },
];

export const projects = [
  // ============================================================================
  // ANMOL'S ORIGINAL DESIGNS (FROM MY-DESIGNS)
  // ============================================================================
  {
    id: 1,
    title: "AI Hackathon Poster",
    category: "posters",
    description: "A Swiss-inspired high-impact promotional poster for an AI innovation sprint with structured typographic hierarchy and warm editorial tones.",
    image: "/images/ai-hackathon-poster.png",
    images: [
      "/images/ai-hackathon-poster.png"
    ],
    tools: ["Figma", "Canva"],
    year: "2026",
    featured: true,
    isConcept: false,
    objective: "Design a compelling event announcement poster to capture student attention and drive hackathon registrations across physical and digital boards.",
    concept: "Swiss International Typographic Style with disciplined asymmetric grid balance, bold geometric typography, and warm terracotta contrast.",
    palette: ["#a35430", "#f6f2ed", "#d6cdc6", "#1a1918"],
    typography: "Neue Haas Grotesk / Swiss Display + Plus Jakarta Sans",
    process: "Drafted grid structures exploring negative space, balanced text hierarchy with dates and prize info, and fine-tuned editorial alignments.",
    outcome: "A distinctive poster that stands out in print and on digital displays, combining technical clarity with creative sophistication."
  },
  {
    id: 2,
    title: "iOS Recruitment Poster",
    category: "posters",
    description: "A clean, Swiss-style recruitment poster designed for the university iOS Core Team featuring classic typographic structure and Apple blue accents.",
    image: "/images/ios-recruitment-poster.png",
    images: [
      "/images/ios-recruitment-poster.png"
    ],
    tools: ["Figma", "Canva"],
    year: "2026",
    featured: true,
    isConcept: false,
    objective: "Recruit passionate student developers, UI/UX creatives, and graphic designers for the campus iOS Core Team.",
    concept: "Disciplined Swiss modernist layout utilizing high-contrast typographic scales, cobalt blue accents, and generous negative space.",
    palette: ["#33509a", "#eeebea", "#18181b", "#ffffff"],
    typography: "Swiss Sans-Serif + Plus Jakarta Sans",
    process: "Researched International Typographic Style posters. Structured recruitment criteria, lab tracks, and scan-to-apply prompts into a modular grid.",
    outcome: "A timeless, professional recruitment piece communicating high technical standards and design craft."
  },
  {
    id: 3,
    title: "NOVA Brand Identity",
    category: "branding",
    description: "A Swiss minimalist brand identity system exploring logomark construction, typography rules, stationery, and warm editorial palettes.",
    image: "/images/nova-brand-identity.png",
    images: [
      "/images/nova-brand-identity.png"
    ],
    tools: ["Figma", "Canva"],
    year: "2026",
    featured: true,
    isConcept: false,
    objective: "Create an elegant, cohesive visual identity system with high scalability across digital media and physical stationery.",
    concept: "Understated luxury and mathematical grid order, pairing warm earthy umber tones with minimalist geometric symbols.",
    palette: ["#7d533d", "#f6f0ea", "#ccc2b9", "#1c1917"],
    typography: "Syne / Modern Serif + Clean Geometric Sans",
    process: "Explored abstract brand mark iterations in Figma, defined clear space ratios, and developed identity collateral applications.",
    outcome: "A comprehensive brand book showcase featuring letterheads, business cards, color architecture, and emblem rules."
  },
  {
    id: 4,
    title: "AI Tools Carousel",
    category: "social",
    description: "An editorial educational social carousel series curated for students, spotlighting essential AI tools for productivity and creative workflows.",
    image: "/images/ai-tools-carousel.png",
    images: [
      "/images/ai-tools-carousel.png"
    ],
    tools: ["Canva", "ChatGPT"],
    year: "2026",
    featured: true,
    isConcept: false,
    objective: "Provide actionable, high-value productivity content for student peers to boost engagement across social feeds.",
    concept: "Editorial publication aesthetic with warm copper accents, deep charcoal contrast, and clean categorized tool cards.",
    palette: ["#9b6d52", "#100f0e", "#f6f0e9", "#c7bdb5"],
    typography: "Plus Jakarta Sans Bold + Space Mono",
    process: "Curated top AI tools, drafted bite-sized summaries with ChatGPT, and designed structured, swipe-friendly slide layouts.",
    outcome: "A polished social media package engineered for saveability, shareability, and rapid content consumption."
  },
  {
    id: 5,
    title: "CampusConnect UI Concept",
    category: "uiux",
    description: "A comprehensive mobile application case study and interface concept tailored for university student collaboration, schedules, and club updates.",
    image: "/images/campusconnect-ui-concept.png",
    images: [
      "/images/campusconnect-ui-concept.png"
    ],
    tools: ["Figma"],
    year: "2026",
    featured: true,
    isConcept: false,
    objective: "Streamline campus life by consolidating event discovery, core team notices, and peer collaboration into an intuitive mobile UI.",
    concept: "Apple Human Interface Guidelines (HIG) compliance with crisp card modules, dynamic status chips, and accessible blue/slate contrast.",
    palette: ["#3e4e74", "#f7f9fd", "#bfc3ce", "#0f172a"],
    typography: "SF Pro Style / Plus Jakarta Sans",
    process: "Mapped user flow for campus students, designed interactive component library in Figma, and created multi-screen presentation layout.",
    outcome: "A mature, end-to-end UI design case study demonstrating deep appreciation for layout ergonomics, readability, and visual hierarchy."
  },

  // ============================================================================
  // ADDITIONAL CONCEPT & EXPLORATION PROJECTS
  // ============================================================================
  {
    id: 6,
    title: "Bean & Brew — Artisan Coffee Identity",
    category: "branding",
    description: "Contemporary cafe identity concept featuring warm earthy tones, bespoke badge emblems, and minimalist drink menus.",
    image: "/images/bean-brew.svg",
    images: [
      "/images/bean-brew.svg"
    ],
    tools: ["Canva", "Figma"],
    year: "2026",
    featured: false,
    isConcept: true,
    objective: "Design a warm, welcoming brand identity for an on-campus artisanal coffee kiosk concept.",
    concept: "Rustic meets modern: organic terracotta and roasted amber tones paired with minimalist circular crest badges and kraft paper textures.",
    palette: ["#14110e", "#d97706", "#f59e0b", "#fef3c7"],
    typography: "Playfair Display + Plus Jakarta Sans",
    process: "Created circular badge abstractions representing a roasted coffee bean. Tested typography pairings for readability in dim cafe lighting and generated cup mockups.",
    outcome: "Cohesive visual identity package comprising branded cup sleeves, tabletop tent cards, and a clean single-sheet menu."
  },
  {
    id: 7,
    title: "Design Different — Typographic Series",
    category: "posters",
    description: "Expressive typographic poster series inspiring students to apply for creative and design lead roles.",
    image: "/images/recruitment-poster.svg",
    images: [
      "/images/recruitment-poster.svg"
    ],
    tools: ["Canva", "ChatGPT"],
    year: "2026",
    featured: false,
    isConcept: true,
    objective: "Attract talented student illustrators, visual designers, and video editors to join the university core team.",
    concept: "Kinetic oversized typography colliding with high-voltage crimson accents to spark creative ambition and challenge conventional design.",
    palette: ["#0a0508", "#fb7185", "#f43f5e", "#ffffff"],
    typography: "Syne Black & Italic + Space Mono",
    process: "Brainstormed rebellious, empowering design slogans with AI assistance. Experimented with letter spacing, diagonal alignments, and QR code placement.",
    outcome: "Helped achieve record application turnouts by delivering a bold visual tone distinct from generic campus flyers."
  },
  {
    id: 8,
    title: "Design Bytes — Educational Carousel",
    category: "social",
    description: "Bite-sized educational carousel graphic templates highlighting typography pairings, color theory, and UI tips.",
    image: "/images/design-bytes.svg",
    images: [
      "/images/design-bytes.svg"
    ],
    tools: ["Canva", "Figma"],
    year: "2026",
    featured: false,
    isConcept: true,
    objective: "Share valuable design fundamentals with student peers through visual, easy-to-digest micro-content.",
    concept: "Editorial comparison cards highlighting 'Good vs Bad' dark mode contrast principles with crisp annotation tags.",
    palette: ["#0a0a14", "#6366f1", "#10b981", "#ef4444", "#f4f4f7"],
    typography: "Syne + Plus Jakarta Sans + Space Mono",
    process: "Researched WCAG AA contrast standards. Converted complex technical guidelines into intuitive side-by-side visual cards.",
    outcome: "Created a recurring educational format that positions the creator as an engaged, thoughtful design practitioner."
  },
  {
    id: 9,
    title: "Pulse — Ambient Audio Player UI",
    category: "uiux",
    description: "Minimalist mobile audio player interface exploring dynamic album art glow extraction and gesture-based playback.",
    image: "/images/pulse-audio.svg",
    images: [
      "/images/pulse-audio.svg"
    ],
    tools: ["Figma"],
    year: "2026",
    featured: false,
    isConcept: true,
    objective: "Explore creative music player user interfaces prioritizing immersive mood, ambient lighting, and haptic minimalism.",
    concept: "Dynamic aura glow reflecting the primary hues of the album artwork, paired with an animated waveform progress bar.",
    palette: ["#05060a", "#ec4899", "#8b5cf6", "#f9fafb"],
    typography: "Plus Jakarta Sans + Space Mono",
    process: "Crafted vector audio scrubbers, tested dynamic contrast against blurred background overlays, and explored intuitive thumb gesture zones.",
    outcome: "A futuristic audio concept demonstrating creative UI exploration and attention to atmospheric visual fidelity."
  }
];

export default projects;

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
 * 🏷️ BADGES:
 * - `featured: true` -> Displays the golden "Featured" badge
 * - `aiAssisted: true` -> Displays the purple "AI-Assisted" concept badge
 * - `isConcept: true` -> Displays the cyan "Concept" design badge
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
  {
    id: 1,
    title: "AI Hackathon Poster",
    category: "posters",
    description: "A Swiss-inspired high-impact promotional poster for an AI innovation sprint with structured typographic hierarchy and warm editorial tones.",
    image: "/images/ai-hackathon-poster.png",
    images: [
      "/images/ai-hackathon-poster.png"
    ],
    tools: ["ChatGPT", "Figma", "Canva"],
    year: "2026",
    featured: true,
    aiAssisted: true,
    isConcept: true,
    objective: "Design a compelling event announcement poster to capture student attention and drive hackathon registrations across physical and digital boards.",
    concept: "Swiss International Typographic Style with disciplined asymmetric grid balance, bold geometric typography, and warm terracotta contrast.",
    palette: ["#a35430", "#f6f2ed", "#d6cdc6", "#1a1918"],
    typography: "Neue Haas Grotesk / Swiss Display + Plus Jakarta Sans",
    process: "Brainstormed headline copy with ChatGPT, drafted grid structures exploring negative space in Figma, balanced text hierarchy with dates and prize info, and fine-tuned editorial alignments in Canva.",
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
    aiAssisted: false,
    isConcept: true,
    objective: "Recruit passionate student developers, UI/UX creatives, and graphic designers for the campus iOS Core Team.",
    concept: "Disciplined Swiss modernist layout utilizing high-contrast typographic scales, cobalt blue accents, and generous negative space.",
    palette: ["#33509a", "#eeebea", "#18181b", "#ffffff"],
    typography: "Swiss Sans-Serif + Plus Jakarta Sans",
    process: "Researched International Typographic Style posters. Structured recruitment criteria, lab tracks, and scan-to-apply prompts into a modular grid in Figma and Canva.",
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
    aiAssisted: false,
    isConcept: true,
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
    tools: ["ChatGPT", "Canva"],
    year: "2026",
    featured: true,
    aiAssisted: true,
    isConcept: true,
    objective: "Provide actionable, high-value productivity content for student peers to boost engagement across social feeds.",
    concept: "Editorial publication aesthetic with warm copper accents, deep charcoal contrast, and clean categorized tool cards.",
    palette: ["#9b6d52", "#100f0e", "#f6f0e9", "#c7bdb5"],
    typography: "Plus Jakarta Sans Bold + Space Mono",
    process: "Curated top AI tools, drafted bite-sized summaries with ChatGPT, and designed structured, swipe-friendly slide layouts in Canva.",
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
    aiAssisted: false,
    isConcept: true,
    objective: "Streamline campus life by consolidating event discovery, core team notices, and peer collaboration into an intuitive mobile UI.",
    concept: "Apple Human Interface Guidelines (HIG) compliance with crisp card modules, dynamic status chips, and accessible blue/slate contrast.",
    palette: ["#3e4e74", "#f7f9fd", "#bfc3ce", "#0f172a"],
    typography: "SF Pro Style / Plus Jakarta Sans",
    process: "Mapped user flow for campus students, designed interactive component library in Figma, and created multi-screen presentation layout.",
    outcome: "A mature, end-to-end UI design case study demonstrating deep appreciation for layout ergonomics, readability, and visual hierarchy."
  }
];

export default projects;

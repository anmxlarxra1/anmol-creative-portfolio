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
 * - Set `isConcept: true` if the project is a self-initiated concept/study.
 * - Set `isConcept: false` (or omit it) when it is a real design created by you!
 * 
 * 🚀 QUICK COPY-PASTE TEMPLATE FOR A NEW PROJECT:
 * {
 *   id: 10,
 *   title: "Your Project Title",
 *   category: "posters",               // "posters" | "branding" | "social" | "uiux"
 *   description: "A short 1-2 sentence summary of this design.",
 *   image: "your-file.png",            // placed in public/images/
 *   images: [                          // optional: multiple images for slider
 *     "your-file.png",
 *     "your-file-detail.png"
 *   ],
 *   tools: ["Canva", "Figma"],
 *   year: "2026",
 *   featured: true,                    // true to show glowing featured badge
 *   isConcept: false,                  // false = Real work, true = Concept design
 *   objective: "The goal or purpose of this design piece.",
 *   concept: "The visual style, color choices, and creative direction.",
 *   palette: ["#08080a", "#8b5cf6", "#06b6d4", "#f4f4f7"],
 *   typography: "Syne 800 + Plus Jakarta Sans",
 *   process: "How you built it: sketch, layout in Canva/Figma, revisions.",
 *   outcome: "Where it was posted/printed or what was achieved."
 * }
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
    title: "AI Hackathon 2026",
    category: "posters",
    description: "A futuristic AI hackathon poster concept combining cybernetic typography, neon gradient lighting, and structured event metadata.",
    image: "/images/ai-hackathon.svg",
    images: [
      "/images/ai-hackathon.svg",
      "/images/ai-hackathon-detail.svg"
    ],
    tools: ["ChatGPT", "Canva"],
    year: "2026",
    featured: true,
    isConcept: true,
    objective: "Design a high-impact, university-wide promotional poster to drive registrations for the 48-hour student AI hackathon.",
    concept: "Electric violet and cyan neon luminescence emerging from deep obsidian space, symbolizing autonomous machine intelligence breaking into human reality.",
    palette: ["#08080a", "#8b5cf6", "#06b6d4", "#f4f4f7"],
    typography: "Syne 800 (Editorial Display) + Space Mono (Metadata)",
    process: "Used ChatGPT to brainstorm high-energy headline hooks ('INTELLIGENCE UNBOUND'). Designed grid structure in Canva, balancing typography hierarchy with event dates and prize badges.",
    outcome: "Generated widespread student buzz with an editorial visual aesthetic that stands out on campus noticeboards and digital Discord channels."
  },
  {
    id: 2,
    title: "iOS Core Team Dev Summit",
    category: "posters",
    description: "Official keynote promotional banner celebrating Swift innovation, Apple ecosystem craft, and student app creators.",
    image: "/images/ios-summit.svg",
    images: [
      "/images/ios-summit.svg"
    ],
    tools: ["Figma", "Canva"],
    year: "2026",
    featured: true,
    isConcept: true,
    objective: "Create an Apple-inspired announcement poster for the campus iOS Core Team recruitment and tech orientation.",
    concept: "Sleek Cupertino-grade frosted glass materials, Swift orange-to-magenta fiery gradient, and disciplined typographic hierarchy.",
    palette: ["#050508", "#ff7a00", "#ff0055", "#0071e3", "#ffffff"],
    typography: "Syne Black + Plus Jakarta Sans + SF-inspired geometry",
    process: "Iterated wireframes in Figma exploring negative space and glassmorphism. Refined gradient lighting in Canva, then tested readability on mobile display mockups.",
    outcome: "Delivered a refined, Apple-worthy event poster communicating the high standards and excitement of the university iOS Core Team."
  },
  {
    id: 3,
    title: "SwiftHub — Club Companion App UI",
    category: "uiux",
    description: "Clean 3-screen mobile onboarding and member hub experience for the university iOS Core Team student portal.",
    image: "/images/swifthub-ui.svg",
    images: [
      "/images/swifthub-ui.svg",
      "/images/swifthub-screens.svg"
    ],
    tools: ["Figma", "ChatGPT"],
    year: "2026",
    featured: true,
    isConcept: true,
    objective: "Design an intuitive, iOS Human Interface Guidelines-compliant mobile experience for onboarding new campus iOS club recruits.",
    concept: "Deep OLED dark mode, fluid blur surfaces, dynamic island status badges, and large tactile tap targets tailored for iOS 18.",
    palette: ["#07080c", "#0071e3", "#38bdf8", "#10b981", "#f8fafc"],
    typography: "SF Pro Display Aesthetic / Plus Jakarta Sans",
    process: "Mapped user journey for new recruits joining the club. Crafted reusable component cards, verified 44pt touch boundaries, and drafted interactive Figma prototype states.",
    outcome: "A functional, high-fidelity UI design demonstrating keen appreciation for Apple design standards, information hierarchy, and UI ergonomics."
  },
  {
    id: 4,
    title: "Apex Creative Lab — Visual Identity",
    category: "branding",
    description: "Minimalist brand identity and geometric monogram exploration for a student-led multimedia design collective.",
    image: "/images/apex-branding.svg",
    images: [
      "/images/apex-branding.svg",
      "/images/apex-guidelines.svg"
    ],
    tools: ["Figma", "Canva"],
    year: "2026",
    featured: true,
    isConcept: true,
    objective: "Establish a unified, scalable monogram and visual identity system for a multidisciplinary student design lab.",
    concept: "A geometric fusion of the uppercase 'A' and an upward delta compass arrow, representing creative momentum and forward elevation.",
    palette: ["#0b0b0f", "#7c3aed", "#a78bfa", "#f8fafc"],
    typography: "Syne ExtraBold (Logomark) + Space Mono (Collateral)",
    process: "Hand-sketched 20+ logo thumbnails on paper. Vectorized the top geometric mark in Figma, defined exclusion perimeter zones, and rendered merchandise applications.",
    outcome: "A versatile vector identity system that scales flawlessly from 16px favicon badges to full-scale event backdrops."
  },
  {
    id: 5,
    title: "TechFest '26 — Speaker Spotlight",
    category: "social",
    description: "Instagram 4:5 carousel templates designed for announcing keynote tech speakers and workshop mentors.",
    image: "/images/techfest-social.svg",
    images: [
      "/images/techfest-social.svg"
    ],
    tools: ["Canva", "ChatGPT"],
    year: "2026",
    featured: false,
    isConcept: true,
    objective: "Produce engaging, reusable social announcement templates to spotlight guest industry tech leads and alumni speakers.",
    concept: "Editorial magazine aesthetics featuring high-contrast duotone frames, electric blue badges, and distinct swipe call-to-actions.",
    palette: ["#090a12", "#13192e", "#38bdf8", "#818cf8", "#ffffff"],
    typography: "Syne 800 + Plus Jakarta Sans + Space Mono",
    process: "Used ChatGPT to structure speaker bio bullet points into snackable slide formats. Built modular Canva templates with drag-and-drop photo frames for rapid publishing.",
    outcome: "Allowed the media team to publish 12 speaker cards in under 30 minutes, maintaining impeccable brand consistency across feeds."
  },
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
    title: "Design Different — Core Team Recruitment",
    category: "posters",
    description: "Expressive typographic recruitment poster series inspiring students to apply for creative roles.",
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

# ANMOL — Creative Graphic Designer Portfolio

A premium, editorial-style creative portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** for **Anmol**, an aspiring visual designer applying for the Graphics Department of a university iOS Core Team.

Designed with an obsidian dark theme, off-white typography, cybernetic accent luminescence, asymmetric layouts, interactive modal deep-dives, and a centralized, zero-fuss project data architecture.

---

## ⚡ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
graphicweb/
├── public/
│   └── images/              <-- 🖼️ Put your graphic designs, posters, and icons here!
│       ├── ai-hackathon.svg
│       ├── ios-summit.svg
│       ├── apex-branding.svg
│       ├── swifthub-ui.svg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header with navigation and mobile menu
│   │   ├── Hero.jsx            # Editorial introduction, CTA buttons, status badge
│   │   ├── ProjectGallery.jsx  # Responsive grid gallery with filter orchestration
│   │   ├── ProjectCard.jsx     # Individual card with image fallback, badges, hover preview
│   │   ├── ProjectModal.jsx    # Inspection drawer: color swatches, typography, process notes
│   │   ├── CategoryFilter.jsx  # Interactive pills with live project counts
│   │   ├── About.jsx           # Honest student applicant profile and design mindset
│   │   ├── Tools.jsx           # Editable software skills (Canva, Figma, ChatGPT, etc.)
│   │   ├── Contact.jsx         # Email with copy-to-clipboard, social links, quick message form
│   │   └── Footer.jsx          # Copyright, quick links, smooth back-to-top button
│   ├── data/
│   │   ├── projects.js         # 🌟 Centralized project database (EDIT THIS TO MANAGE WORK)
│   │   └── profile.js          # 👤 Personal bio, tools, social links configuration
│   ├── styles/
│   │   └── global.css          # Tailwind base, dark scrollbars, glass utilities
│   ├── App.jsx                 # Main layout structure
│   └── main.jsx                # React root entry point
├── index.html                  # SEO metadata, Google Fonts (Syne, Plus Jakarta Sans, Mono)
├── tailwind.config.js          # Dark theme palette, custom font families, animations
├── vite.config.js              # Vite config configured with relative base for GitHub Pages
└── package.json
```

---

## 🎨 How to Manage Projects (`src/data/projects.js`)

All projects are managed in a single file: `src/data/projects.js`. You never need to edit JSX components to add, remove, or modify your portfolio pieces!

### 1. Adding a New Poster or Design

#### Step 1: Copy your image into `public/images/`
Save your poster or design image (JPG, PNG, WebP, or SVG) into the `public/images/` folder:
```
public/images/spring-fest-2026.png
```

#### Step 2: Add an object to `src/data/projects.js`
Open `src/data/projects.js` and add your new project object to the `projects` array:

```javascript
{
  id: 10,
  title: "Spring Campus Fest 2026",
  category: "posters",               // "posters" | "branding" | "social" | "uiux"
  description: "A neon typographic poster promoting the annual university spring festival.",
  image: "/images/spring-fest-2026.png",
  images: [
    "/images/spring-fest-2026.png",
    "/images/spring-fest-detail.png" // Optional: add more images for slider!
  ],
  tools: ["Canva", "Figma"],
  year: "2026",
  featured: true,                     // Set true to show glowing featured badge
  objective: "Create an energetic campus festival poster to boost ticket reservations.",
  concept: "Dynamic diagonal typography layered over chromatic aberration gradients.",
  palette: ["#09090b", "#f43f5e", "#8b5cf6", "#ffffff"],
  typography: "Syne 800 + Space Mono",
  process: "Brainstormed headline copy with ChatGPT, drafted layouts in Canva, and refined colors in Figma.",
  outcome: "Printed 100+ physical posters and published across university social media channels."
}
```

The portfolio will **automatically**:
- Display the project in the gallery.
- Update the category counters (e.g. `Posters & Banners (4)`).
- Populate the detailed inspection modal with your objective, color palette, typography specimen, and process.

---

### 2. Supported Categories

Use one of these exact values in the `category` field:
- `"posters"` — Posters & Banners
- `"branding"` — Branding & Logos
- `"social"` — Social Media Designs
- `"uiux"` — UI/UX Designs

---

### 3. Adding Multiple Images to a Project

If you have multiple versions, mockups, or detail shots for a single project:
1. Put all images in `public/images/`.
2. List them in the `images` array:
```javascript
images: [
  "/images/swifthub-ui.svg",
  "/images/swifthub-screens.svg",
  "/images/swifthub-mockup.png"
]
```
The modal will automatically render a **gallery slider** with previous/next navigation buttons and interactive thumbnail previews.

---

### 4. Marking a Project as Featured

Set `featured: true` on any project object:
```javascript
featured: true
```
This adds a glowing amber badge (`★ Featured Project`) to the card and modal.

---

### 5. Removing or Hiding Projects

Simply delete the project object from the `projects` array in `src/data/projects.js` or comment it out (`/* ... */`). The layout adjusts automatically with zero broken columns or gaps.

---

### 6. Graceful Handling of Missing Images

If an image file is not found or fails to load:
- The website **will not show a broken image icon**.
- An elegant fallback card displays with the project title, category tag, and geometric layout specs.

---

## 👤 Editing Personal Info & Socials (`src/data/profile.js`)

Edit `src/data/profile.js` to change:
- Your name, title, and tagline
- Status badge (e.g. `"Applying for iOS Core Team • Graphics Department"`)
- Introduction text
- Tools & proficiency ratings
- Email, Instagram, LinkedIn, and GitHub links

```javascript
export const profileData = {
  name: "ANMOL",
  role: "Visual Designer & Creative Enthusiast",
  tagline: "Turning ideas into visual experiences.",
  contact: {
    email: "anmol.creative.design@gmail.com",
    instagram: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username"
  }
  // ...
};
```

---

## 🚀 Deploying to GitHub Pages

The project is already pre-configured for GitHub Pages deployment (`base: './'` in `vite.config.js`).

### Option A: Automatic Deployment with GitHub Actions (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. On GitHub, go to your repository **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. Create a file `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repository
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build project
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
5. Commit and push: GitHub will automatically build and publish your site at `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`.

### Option B: Quick Manual Deploy using `gh-pages`

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add a deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 🏆 Key Design Highlights

- **Bespoke Editorial Aesthetics**: Built with high-fashion and creative tech agency typography (Syne + Plus Jakarta Sans + Space Mono).
- **Apple iOS Core Team Alignment**: Features realistic student projects including an Apple WWDC-inspired dev summit banner, iOS 18 SwiftUI mobile member hub concept, and dark mode WCAG AA contrast guides.
- **Micro-Interactions**: One-click color palette hex copy with confirmation toasts, smooth keyboard navigation (`Esc`, `←`, `→`), dynamic category pills with live project counts, and animated ambient glows.
- **Zero AI-Generic Feel**: Craft, intentionality, asymmetric balance, and transparent student-friendly proficiency tags.

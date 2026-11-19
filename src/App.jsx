import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-canvas-text flex flex-col selection:bg-accent-purple/30 selection:text-white">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Filterable Project Gallery */}
        <ProjectGallery />

        {/* Authentic About Section */}
        <About />

        {/* Tools & Learning Progress */}
        <Tools />

        {/* Contact & Social Inquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

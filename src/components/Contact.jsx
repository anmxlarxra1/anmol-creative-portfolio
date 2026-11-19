import React, { useState } from 'react';
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const { contact, name } = profileData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instant form submission feedback
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-accent-purple/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's Build Something Memorable
          </h2>

          <p className="max-w-2xl text-canvas-muted text-sm sm:text-base leading-relaxed">
            Interested in discussing iOS Core Team design initiatives, campus event branding, or creative collaborations? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Copy-to-Clipboard */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.1] space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                  Direct Inquiries
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>

              <div>
                <p className="text-xs text-canvas-dim font-mono">Email Address:</p>
                <p className="mt-1 font-display font-bold text-lg sm:text-xl text-white break-all">
                  {contact.email}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${contact.email}?subject=Design%20Collaboration%20Inquiry`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple hover:bg-accent-violet text-white text-xs font-mono font-semibold transition-all shadow-lg shadow-accent-purple/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Mail</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-canvas-muted hover:text-white text-xs font-mono transition-colors"
                  type="button"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Social Links List */}
            <div className="p-7 rounded-3xl glass-card border border-white/[0.08] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-canvas-dim">
                Social Profiles &amp; Repositories
              </h3>

              <div className="space-y-3">
                
                {/* Instagram */}
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors">
                        Instagram
                      </p>
                      <p className="text-xs text-canvas-dim font-mono">Visual experiments &amp; drafts</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-canvas-dim group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-xs text-canvas-dim font-mono">Academic &amp; project updates</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-canvas-dim group-hover:text-white transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        GitHub
                      </p>
                      <p className="text-xs text-canvas-dim font-mono">Portfolio source &amp; web projects</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-canvas-dim group-hover:text-white transition-colors" />
                </a>

              </div>

            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/[0.1] shadow-2xl relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="font-display font-bold text-xl text-white">
                  Send a Quick Note
                </h3>
                <p className="text-xs sm:text-sm text-canvas-muted">
                  Leave a message or feedback on any design project in the gallery.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-canvas-muted max-w-md mx-auto">
                    Thank you for reaching out. Anmol will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors"
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/[0.08] focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple text-sm text-white placeholder-canvas-dim transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@university.edu"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/[0.08] focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple text-sm text-white placeholder-canvas-dim transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="iOS Core Team Interview / Design Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/[0.08] focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple text-sm text-white placeholder-canvas-dim transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Anmol, we reviewed your graphic design portfolio..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/[0.08] focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple text-sm text-white placeholder-canvas-dim transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-violet hover:from-purple-500 hover:to-indigo-500 text-white font-display font-bold text-sm tracking-wide shadow-xl shadow-accent-purple/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anmol</span>
                  </button>

                  <p className="text-[11px] font-mono text-canvas-dim text-center pt-1">
                    Directly connected to: {contact.email}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

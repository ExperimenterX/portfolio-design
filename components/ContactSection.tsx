'use client';

import { useState } from 'react';
import { PERSONAL_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle2, AlertCircle, Bot } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenAiChat: () => void;
}

export default function ContactSection({ onOpenAiChat }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry regarding Software Engineering role',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMsg({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', subject: 'Inquiry regarding Software Engineering role', message: '' });
      } else {
        setStatusMsg({ type: 'error', text: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Error connecting to server. Please email shankar.bhavani.in@gmail.com directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-white/5 pb-6">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact & Professional Profiles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info & Socials Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#161616] border border-white/5 p-8 rounded-2xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">
                Let&apos;s connect and build something exceptional together.
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you&apos;re looking for a Full Stack Software Engineer, AI/ML Specialist, or technical collaborator, feel free to drop a message or reach out across any profile below.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 text-sm text-gray-300 hover:text-white group transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500">Email Address</p>
                    <p className="font-medium">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 text-sm text-gray-300 hover:text-white group transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500">Phone</p>
                    <p className="font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-sm text-gray-300">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500">Current Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* External Profiles */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  External Profiles & References:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-indigo-400" />
                    <span>GitHub / ExperimenterX</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.originalPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                    <span>Original Portfolio</span>
                  </a>
                </div>
              </div>

              {/* AI Chat Prompt Box */}
              <div className="pt-4 border-t border-white/5 bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-indigo-300">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span>Have instant questions for Shankar?</span>
                </div>
                <button
                  onClick={onOpenAiChat}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow"
                >
                  Ask AI Now
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Right Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#1A1A1A] border border-white/10 p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Shankar, I'm reaching out regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Status message */}
                {statusMsg && (
                  <div
                    className={`p-4 rounded-xl text-xs font-medium flex items-center gap-2 ${
                      statusMsg.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-300 border border-red-500/20'
                    }`}
                  >
                    {statusMsg.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{statusMsg.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data';
import { Bot, Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAiChat: () => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenAiChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'biography', label: 'Biography' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('biography')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
            SB
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block group-hover:text-indigo-400 transition-colors">
              {PERSONAL_INFO.preferredName}
            </span>
            <span className="text-xs text-gray-400 font-mono hidden sm:block">
              Full Stack & AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-all py-1 px-2 relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* AI Assistant Pill */}
          <button
            onClick={onOpenAiChat}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/60 transition-all shadow-sm"
          >
            <Bot className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Ask AI Assistant</span>
          </button>

          {/* Github / LinkedIn Quick Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#161616] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#161616] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenAiChat}
            className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            title="Ask AI"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#161616] text-gray-300 hover:text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 mt-2 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-600/20 text-indigo-400 font-bold border border-indigo-500/30'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#161616] text-gray-300 border border-white/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#161616] text-gray-300 border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => {
                onOpenAiChat();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

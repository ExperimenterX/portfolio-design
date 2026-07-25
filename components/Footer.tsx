'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left copyright & info */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-semibold text-white">
            Shankar Bhavani <span className="text-gray-500 font-normal">| Full Stack & AI Software Engineer</span>
          </p>
          <p className="text-xs text-gray-500 font-mono">
            Designed &amp; Developed by Shankar Bhavani © {new Date().getFullYear()} · UIC Master&apos;s CS
          </p>
        </div>

        {/* Social & External Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={PERSONAL_INFO.originalPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            ORIGINAL PORTFOLIO
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all ml-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

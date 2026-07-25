'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { ArrowRight, Bot, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenAiChat: () => void;
}

export default function Hero({ onNavigate, onOpenAiChat }: HeroProps) {
  return (
    <section id="biography" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Bio Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Full Stack & AI Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Chicago, IL (UIC M.S. CS)
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Building performant web <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                architectures with purpose.
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAiChat}
                className="px-6 py-3 bg-[#161616] hover:bg-white/10 text-gray-200 hover:text-white rounded-xl font-semibold text-sm border border-white/10 transition-all flex items-center gap-2 shadow-sm"
              >
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>Ask Shankar&apos;s AI</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Quick Profile Social Badges */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>github.com/ExperimenterX</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>linkedin.com/in/shankar-bhavani</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Card / Stats Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Terminal Style Card */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-500">shankar-bhavani ~ bio.config.ts</span>
                </div>
                <Terminal className="w-4 h-4 text-indigo-400" />
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-2 text-gray-300 leading-relaxed">
                <p><span className="text-purple-400">const</span> engineer = &#123;</p>
                <p className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">&quot;{PERSONAL_INFO.name}&quot;</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">education</span>: <span className="text-emerald-300">&quot;M.S. Computer Science @ UIC&quot;</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">priorExperience</span>: <span className="text-emerald-300">&quot;Senior Software Engineer @ Bosch&quot;</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">coreSpecialties</span>: [</p>
                <p className="pl-8 text-amber-300">&quot;Agentic AI & RAG Pipelines&quot;,</p>
                <p className="pl-8 text-amber-300">&quot;Model Context Protocol (MCP)&quot;,</p>
                <p className="pl-8 text-amber-300">&quot;Golang & Node.js Microservices&quot;,</p>
                <p className="pl-8 text-amber-300">&quot;Next.js & React Architectures&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-indigo-300">status</span>: <span className="text-emerald-300">&quot;Open to Opportunities&quot;</span></p>
                <p>&#125;;</p>
              </div>

              {/* Quick AI Trigger Banner inside terminal */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Powered by Gemini AI Engine</span>
                </div>
                <button
                  onClick={onOpenAiChat}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4"
                >
                  Prompt Bio AI →
                </button>
              </div>
            </div>

            {/* Impact Metric Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] border border-white/5 p-4 rounded-xl hover:border-indigo-500/30 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/data';
import { ExternalLink, Github, Sparkles, Filter, CheckCircle2, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / GenAI', 'Systems & Backend'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-6">
          <div>
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
              Engineering & AI Implementations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects Showcase
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-[#161616] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 hover:border-indigo-500/50 p-6 sm:p-7 rounded-2xl transition-all shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-indigo-400 font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                    {project.period} · {project.category}
                  </span>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title="View Code on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-400/80 mb-3">
                  {project.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Pills & Detail Trigger */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Inspect Architecture Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                    {activeModalProject.category} · {activeModalProject.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-400 mt-1">
                    Role: {activeModalProject.role}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Key Technical Accomplishments:
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                    Technology Stack & Libraries:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl text-xs font-semibold transition-all"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

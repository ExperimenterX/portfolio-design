'use client';

import { SKILL_CATEGORIES } from '@/lib/data';
import { Code, Cpu, Layers, Cloud, Sparkles, Check, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-indigo-400" />;
      default: return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-white/5 pb-6">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            Technical Stack & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Core Capabilities
          </h2>
        </div>

        {/* Featured Top Badge Stack */}
        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
              Core Tech Matrix
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "TypeScript", "Golang", "Gen AI (LLMs)", "RAG & Vector DBs",
              "Model Context Protocol (MCP)", "LangChain / LangGraph", "React & Next.js",
              "Node.js", "PostgreSQL", "Redis", "Supabase", "Docker", "AWS", "REST APIs", "OAuth2"
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-xs font-mono font-medium hover:bg-indigo-500/20 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 p-6 sm:p-8 rounded-2xl transition-all shadow-xl hover:border-indigo-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className={`font-mono font-medium ${skill.highlight ? 'text-indigo-300 font-bold' : 'text-gray-300'}`}>
                        {skill.name} {skill.highlight && <span className="text-indigo-400 ml-1">★</span>}
                      </span>
                      <span className="text-gray-500 font-mono">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-400'
                            : 'bg-indigo-500/60'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

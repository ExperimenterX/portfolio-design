'use client';

import { useState } from 'react';
import { EXPERIENCES, EDUCATION_DATA } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-6">
          <div>
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
              Career Journey & Academic Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Experience & Education
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-[#161616] border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#161616] border border-white/5 hover:border-indigo-500/40 p-6 sm:p-8 rounded-2xl transition-all shadow-xl group relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-gray-300 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 self-start">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-500 mr-2">Technologies:</span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#161616] border border-white/5 hover:border-indigo-500/40 p-8 rounded-2xl transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="p-3 bg-indigo-600/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-400 font-semibold text-sm mb-4">
                    {edu.institution} — {edu.location}
                  </p>

                  <div className="space-y-2 mt-6">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-emerald-400">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>POS Scholarship for Graduate Studies Recipient</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

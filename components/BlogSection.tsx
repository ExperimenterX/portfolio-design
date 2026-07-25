'use client';

import { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { Clock, Tag, ArrowUpRight, X, BookOpen, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 relative bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-white/5 pb-6">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            Technical Insights & Thought Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Articles & Engineering Notes
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActivePost(post)}
              className="bg-[#161616] border border-white/5 hover:border-indigo-500/50 p-6 rounded-2xl transition-all shadow-xl flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-indigo-400 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  <span>{post.date}</span>
                </p>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Article
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Post Reader */}
        <AnimatePresence>
          {activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-10 max-w-3xl w-full relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-indigo-400">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                      {activePost.category}
                    </span>
                    <span>{activePost.date}</span>
                    <span>·</span>
                    <span>{activePost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white pt-2">
                    {activePost.title}
                  </h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {activePost.content}
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {activePost.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Done Reading
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

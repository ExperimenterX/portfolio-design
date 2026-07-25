'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AiAssistantDrawer from '@/components/AiAssistantDrawer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('biography');
  const [aiChatOpen, setAiChatOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F9FAFB] font-sans flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAiChat={() => setAiChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onNavigate={handleNavigate}
          onOpenAiChat={() => setAiChatOpen(true)}
        />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <SkillsSection />
        <BlogSection />
        <ContactSection onOpenAiChat={() => setAiChatOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Chat Drawer */}
      <AiAssistantDrawer
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
      />
    </div>
  );
}

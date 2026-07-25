import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shankar Bhavani | Full Stack & AI Software Engineer',
  description: 'Personal portfolio of Shankar Bhavani - M.S. CS student at UIC, former Senior Software Engineer at Bosch, specializing in AI Agents, RAG, MCP, Next.js, Golang & cloud systems.',
  keywords: ['Shankar Bhavani', 'Bhavani Shankar', 'Full Stack Engineer', 'AI Engineer', 'UIC', 'Bosch', 'RAG', 'MCP', 'Next.js', 'Golang'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0A0A] text-[#F9FAFB] antialiased selection:bg-indigo-500/30 selection:text-indigo-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


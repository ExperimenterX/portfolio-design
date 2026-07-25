import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from "@/lib/data";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "Hello! I am Shankar Bhavani's AI Assistant. Currently, the GEMINI_API_KEY environment variable is not configured, but feel free to browse Shankar's resume, experience, skills, and projects listed on this page!" },
        { status: 200 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // System instruction containing all authentic background about Shankar Bhavani
    const systemInstruction = `
You are the AI Assistant for Shankar Bhavani (Bhavani Shankar), a Full Stack & AI Software Engineer pursuing an M.S. in Computer Science at University of Illinois Chicago (UIC) and former Senior Software Engineer at Bosch.

Your job is to answer questions from recruiters, hiring managers, and portfolio visitors warmly, concisely, and accurately based on Shankar's authentic profile.

Shankar's Profile Summary:
- Name: ${PERSONAL_INFO.name} (${PERSONAL_INFO.preferredName})
- Title: ${PERSONAL_INFO.title}
- Location: ${PERSONAL_INFO.location}
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}

Education:
${EDUCATION_DATA.map(e => `- ${e.degree} at ${e.institution} (${e.period}). Coursework: ${e.coursework.join(', ')}`).join('\n')}

Professional Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}, ${e.location})\n  * ${e.bulletPoints.join('\n  * ')}`).join('\n\n')}

Featured Projects:
${PROJECTS.map(p => `- ${p.title} (${p.period}): ${p.description}\n  Tech: ${p.tech.join(', ')}\n  Highlights: ${p.highlights.join(' | ')}`).join('\n')}

Skills & Expertise:
${SKILL_CATEGORIES.map(s => `- ${s.category}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

Achievements & Honors:
${ACHIEVEMENTS.map(a => `- ${a}`).join('\n')}

Instructions:
1. Always speak in a friendly, professional tone representing Shankar.
2. Be direct and clear. Highlight concrete metrics (e.g. 15% latency reduction at Bosch, 85% test time reduction, POS Scholarship recipient).
3. If asked about availability, Shankar is open to Full Stack, AI/ML Engineering, and Software Development roles.
`;

    // Convert last messages for Gemini
    const lastUserMsg = messages[messages.length - 1]?.content || "Hello";
    
    // Format conversation history
    const contents = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 800,
      }
    });

    return NextResponse.json({ reply: response.text || "Thank you for asking! How else can I assist you regarding Shankar's background?" });
  } catch (error: any) {
    console.error("Gemini API error in /api/chat:", error);
    return NextResponse.json(
      { reply: "Thank you for reaching out! I encountered a temporary issue processing that response, but please feel free to check out Shankar's resume sections below or send a direct message via the contact form." },
      { status: 200 }
    );
  }
}

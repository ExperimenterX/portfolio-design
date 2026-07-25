export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  tech: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI / GenAI' | 'Full Stack' | 'Systems & Backend';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'Graduate Assistant' | 'Internship' | 'Full-Time';
  description: string;
  bulletPoints: string[];
  skillsUsed: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Bhavani Shankar",
  preferredName: "Shankar Bhavani",
  title: "Full Stack & AI Software Engineer",
  subTitle: "Master's Student in Computer Science @ UIC | Ex-Senior Software Engineer @ Bosch",
  location: "Chicago, Illinois, USA",
  email: "shankar.bhavani.in@gmail.com",
  phone: "+1 (872) 899-2342",
  github: "https://github.com/ExperimenterX",
  linkedin: "https://www.linkedin.com/in/shankar-bhavani/",
  originalPortfolio: "https://shankarbhavani-fs.github.io/",
  bio: "Full Stack Software Engineer with expertise in Generative AI, RAG, Model Context Protocol (MCP), agentic workflows, and high-throughput backend services. Currently pursuing a Master's in Computer Science at UIC with a GPA-honored Graduate Assistant role, building campus production systems.",
  heroText: "Building performant web architectures & agentic AI systems with purpose.",
  tagline: "Specializing in Multi-Agent AI Workflows, Next.js, Golang, Python & Cloud Platforms",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Production Users Impacted", value: "30k+" },
    { label: "Test Time Reduction", value: "85%" },
    { label: "API Latency Boost", value: "30%" },
  ]
};

export const EDUCATION_DATA: Education[] = [
  {
    institution: "University of Illinois Chicago",
    location: "Chicago, Illinois",
    degree: "Master’s in Computer Science, College of Engineering",
    period: "Aug 2024 – May 2026",
    coursework: [
      "Responsible AI",
      "Natural Language Processing (NLP)",
      "Information Retrieval",
      "Secure Web Development",
      "Advanced Software Engineering"
    ]
  },
  {
    institution: "Bangalore Institute of Technology",
    location: "Bangalore, India",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Aug 2016 – July 2020",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Design"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "uic-ga",
    company: "University of Illinois Chicago",
    location: "Chicago, IL",
    role: "Graduate Assistant – Full Stack Developer",
    period: "May 2025 – Present",
    type: "Graduate Assistant",
    description: "Architecting and maintaining production web applications for the College of Engineering.",
    bulletPoints: [
      "Developed and maintained production web applications for the College of Engineering to manage hiring requests and campus employment processes, using React, Node.js, and MySQL within an MVC-based RBAC architecture.",
      "Built and optimized portals supporting the Guaranteed Paid Internship Program (GPIP), streamlining student-employer workflows and improving system efficiency with tools like phpMyAdmin and RESTful API integrations."
    ],
    skillsUsed: ["React", "Node.js", "MySQL", "RBAC", "REST APIs", "PHP", "TypeScript"]
  },
  {
    id: "rexroth",
    company: "Rexroth",
    location: "Hoffman Estates, IL",
    role: "Graduate Summer Intern",
    period: "June 2025 – August 2025",
    type: "Internship",
    description: "Engineered automation software tools and AI-driven decision systems for industrial SDKs.",
    bulletPoints: [
      "Engineered Python applications integrating with Rexroth EAL SDK, enabling efficient automation and building decision-supporting tools.",
      "Evaluated expert-system and AI-assisted automation approaches, translating operational requirements into rule-based workflows and reusable automation components."
    ],
    skillsUsed: ["Python", "Rexroth EAL SDK", "AI Automation", "Expert Systems", "Workflow Design"]
  },
  {
    id: "bosch-senior",
    company: "Bosch Global Software Technologies",
    location: "Bangalore, India",
    role: "Senior Software Engineer",
    period: "December 2023 – August 2024",
    type: "Full-Time",
    description: "Led backend task manager microservices and high-throughput Linux OS systems.",
    bulletPoints: [
      "Implemented and deployed task manager services for a Linux-based OS using Golang, reducing task processing time by 15% and increasing overall system performance by 4 seconds.",
      "Streamlined CI/CD processes utilizing Jenkins and Azure Pipelines.",
      "Designed and optimized SQL-driven REST APIs using Golang, incorporating caching mechanisms and OAuth2 for secure authentication, resulting in a 30% boost in data handling efficiency."
    ],
    skillsUsed: ["Golang", "Linux OS", "SQL", "Redis Caching", "OAuth2", "Jenkins", "Azure Pipelines", "REST APIs"]
  },
  {
    id: "bosch-software",
    company: "Bosch Global Software Technologies",
    location: "Bangalore, India",
    role: "Software Engineer",
    period: "April 2021 – December 2023",
    type: "Full-Time",
    description: "Built test orchestration frameworks and desktop applications for global engineering teams.",
    bulletPoints: [
      "Built a rule-driven validation and workflow orchestration framework that reduced end-to-end manual testing from four days to five hours while improving repeatability and failure diagnosis.",
      "Architected a cross-platform application for Windows and Linux, utilizing Electron and Snap packages, resulting in 30+ active users and improved system performance."
    ],
    skillsUsed: ["Electron", "JavaScript", "Python", "Linux / Windows Snap", "CI/CD", "Workflow Engine"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sync-ai",
    title: "SyncAI – Student Assistant",
    period: "March 2025",
    role: "Lead AI Engineer & Full Stack Developer",
    tech: ["Next.js", "AWS", "Supabase", "Python", "OpenAI", "Multi-Agent RAG", "Guardrails"],
    description: "An AI-powered student assistant utilizing RAG, multi-agent workflows, LLM orchestration, and contextual reasoning to integrate schedules, study sessions, wellness data, and productivity insights.",
    highlights: [
      "Developed multi-agent orchestration for context-aware study scheduling and task decomposition.",
      "Integrated AWS & OpenAI with multi-stage RAG, guardrails, context ranking, and prompting strategies for accurate contextual responses."
    ],
    githubUrl: "https://github.com/ExperimenterX",
    category: "AI / GenAI",
    featured: true
  },
  {
    id: "persona-rag",
    title: "PersonaRAG",
    period: "August 2024",
    role: "Creator & AI Developer",
    tech: ["Python", "RAG", "OpenAI", "LangChain", "MCP", "Vector DB", "Metadata Search"],
    description: "Pioneered a dynamic application with a personalized RAG pipeline, embedding-based recall, and Model Context Protocol (MCP) integration.",
    highlights: [
      "Pioneered embedding-based recall and MCP protocol integration to personalize LLM responses according to individual user knowledge graphs.",
      "Implemented a scalable retrieval architecture featuring vector search, metadata filtering, custom text chunking, and automated data ingestion."
    ],
    githubUrl: "https://github.com/ExperimenterX",
    category: "AI / GenAI",
    featured: true
  },
  {
    id: "reason-hop",
    title: "ReasonHop",
    period: "May 2025",
    role: "AI Research & Developer",
    tech: ["Python", "Colab", "LoRA Fine-Tuning", "Knowledge Graphs", "RAG Optimization"],
    description: "Advanced RAG evaluation and context optimization platform using fine-tuned models and Knowledge Graph structures for cloud inference.",
    highlights: [
      "Evaluated RAG architectures with model optimization and LoRA fine-tuning.",
      "Constructed Knowledge Graphs to derive efficient, less context-heavy prompts for inference execution in cloud environments."
    ],
    githubUrl: "https://github.com/ExperimenterX",
    category: "AI / GenAI",
    featured: true
  },
  {
    id: "hyperflow-task-manager",
    title: "Linux Task Manager & Microservices Engine",
    period: "2024",
    role: "Senior Backend Architect",
    tech: ["Golang", "Linux OS", "PostgreSQL", "Redis", "OAuth2", "Docker"],
    description: "High-concurrency task management microservices deployed on Linux OS for critical automation workflows.",
    highlights: [
      "Reduced system task execution latency by 15% across Linux OS processes.",
      "Achieved 30% speedup in data handling with Redis caching and SQL optimization."
    ],
    githubUrl: "https://github.com/ExperimenterX",
    category: "Systems & Backend",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code",
    skills: [
      { name: "Python", level: 95, highlight: true },
      { name: "TypeScript / JS", level: 90, highlight: true },
      { name: "Golang", level: 85, highlight: true },
      { name: "SQL", level: 90 },
      { name: "C / C++", level: 75 }
    ]
  },
  {
    category: "AI & Machine Learning",
    iconName: "Cpu",
    skills: [
      { name: "Generative AI & LLMs", level: 95, highlight: true },
      { name: "RAG & Vector Search", level: 95, highlight: true },
      { name: "MCP (Model Context Protocol)", level: 90, highlight: true },
      { name: "AI Agents & LangChain / LangGraph", level: 90, highlight: true },
      { name: "Prompt & Context Engineering", level: 95 },
      { name: "LLM Guardrails & Memory", level: 85 }
    ]
  },
  {
    category: "Frameworks & Databases",
    iconName: "Layers",
    skills: [
      { name: "React & Next.js", level: 90, highlight: true },
      { name: "Node.js & Express", level: 88 },
      { name: "PostgreSQL & MySQL", level: 88, highlight: true },
      { name: "Redis Caching", level: 85 },
      { name: "Supabase & Vector DB", level: 90 },
      { name: "Electron", level: 80 }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    iconName: "Cloud",
    skills: [
      { name: "Docker & Containerization", level: 90, highlight: true },
      { name: "AWS & GCP", level: 85 },
      { name: "GitHub Actions & Jenkins", level: 88 },
      { name: "Terraform & Azure DevOps", level: 80 },
      { name: "REST APIs, WebSockets & OAuth2", level: 92, highlight: true }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "mcp-guide",
    slug: "mastering-mcp-agentic-workflows",
    title: "Mastering Model Context Protocol (MCP) in Agentic AI Workflows",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    category: "AI & Systems",
    summary: "How the Model Context Protocol unlocks secure tool interoperability, context ranking, and agentic reasoning for LLM applications.",
    tags: ["MCP", "LLM", "AI Agents", "Python", "RAG"],
    content: `
Model Context Protocol (MCP) has quickly emerged as the gold standard for connecting Large Language Models to real-world data sources and software environments securely.

### Why MCP Matters for AI Developers
Traditional tool calling often leads to monolithic, tightly coupled API integrations. With MCP, developers can isolate capabilities into protocol servers:
1. **Dynamic Tool Discovery:** Agents inspect server capabilities at runtime.
2. **Context Standardization:** Structured prompt attachments, vector indices, and database search results flow through a unified schema.
3. **Security Boundaries:** Permissions and authentication remain decoupled from model execution.

### Implementing MCP in PersonaRAG
When building *PersonaRAG*, I used MCP to allow the LLM to dynamically retrieve user knowledge graphs and personalized memory embeddings without cluttering prompt windows. By injecting context ranking guardrails, response relevancy increased by 40%.
    `
  },
  {
    id: "rag-guardrails",
    slug: "building-multi-stage-rag-pipelines",
    title: "Building Multi-Stage RAG Pipelines with Guardrails & Context Ranking",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "Generative AI",
    summary: "A practical guide to multi-stage vector retrieval, metadata filtering, and hallucination reduction using guardrails in Next.js & Python.",
    tags: ["RAG", "Vector Search", "Python", "Supabase", "Guardrails"],
    content: `
Retrieval-Augmented Generation (RAG) is simple to prototype, but scaling to production requires solving context chunking, precision recall, and hallucination control.

### The Key Pillars of Modern RAG:
* **Hybrid Search:** Combining dense vector embeddings (cosine similarity) with BM25 sparse keyword matching.
* **Context Reranking:** Using lightweight cross-encoder models to rank top-k documents before feeding them to the generation prompt.
* **Input/Output Guardrails:** Verifying response relevancy against input facts to eliminate fabricated assertions.

In *SyncAI*, integrating multi-stage guardrails reduced irrelevant context by 60%, drastically cutting down token usage and API latency.
    `
  },
  {
    id: "golang-microservices",
    slug: "optimizing-golang-linux-task-managers",
    title: "Optimizing Golang REST APIs and Task Managers for High Concurrency",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    category: "Backend & Systems",
    summary: "Lessons learned from building low-latency Linux OS task manager services at Bosch, achieving 30% performance boosts with Redis and SQL optimizations.",
    tags: ["Golang", "Linux", "Redis", "REST API", "SQL"],
    content: `
When building Linux-based system utilities, efficiency isn't optional. At Bosch, optimizing task scheduling microservices required deep inspection of database connection pooling and memory consumption.

### Architectural Highlights:
1. **Goroutine Task Pools:** Bounding worker goroutines prevented CPU throttling during burst task creation.
2. **Redis Cache-Aside Pattern:** Frequently requested OS state models were cached with short TTLs.
3. **Prepared SQL Statements:** Eliminating repetitive query parsing boosted overall throughput by 30%.
    `
  }
];

export const ACHIEVEMENTS = [
  "POS Scholarship for Graduate Studies: Awarded to 100 recipients supporting Master's in Computer Science at UIC.",
  "Certified in MCP, RAG, Docker, Go, Azure DevOps, JavaScript, REST APIs, and GCP.",
  "Reduced Bosch end-to-end testing cycles from 4 days down to 5 hours with automated rule engines.",
  "Architected cross-platform Electron/Snap software serving 30+ active enterprise engineering users."
];

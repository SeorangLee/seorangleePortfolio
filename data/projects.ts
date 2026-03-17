export interface Project {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "TaskFlow",
    tagline: "Project management for lean teams",
    description:
      "Built a real-time project management tool to replace overcomplicated tools like Jira for small teams. Includes kanban boards, time tracking, and WebSocket-based live collaboration. Reduced team coordination overhead by keeping the UI out of the way.",
    techStack: ["Next.js", "Django", "PostgreSQL", "WebSocket", "Tailwind CSS"],
    githubUrl: "https://github.com/sierralee/taskflow",
    liveUrl: "https://taskflow.demo",
  },
  {
    title: "InvoiceKit",
    tagline: "Invoicing platform for independent contractors",
    description:
      "End-to-end invoicing SaaS with recurring billing, PDF generation, and Stripe integration. Designed for freelancers who need a tool that just works — no configuration, no bloat. Handles the entire billing lifecycle from draft to paid.",
    techStack: ["Next.js", "Django REST", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/sierralee/invoicekit",
    liveUrl: "https://invoicekit.demo",
  },
  {
    title: "NotesAI",
    tagline: "AI-powered knowledge base",
    description:
      "An intelligent note-taking app that automatically structures and summarizes long-form content. Users import articles, PDFs, or raw text and get organized, searchable summaries in seconds — powered by the OpenAI API with a clean Next.js frontend.",
    techStack: ["Next.js", "Python", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/sierralee/notesai",
    liveUrl: "https://notesai.demo",
  },
];

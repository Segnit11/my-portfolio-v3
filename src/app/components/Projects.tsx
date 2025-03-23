"use client";

import { FaGlobe, FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  image?: string;
  website?: string;
  source?: string;
}

const projects: Project[] = [
  {
    title: "Chat Collect",
    dates: "Jan 2024 – Feb 2024",
    description:
      "Built a SaaS to collect emails from OpenAI GPT users. Great for audience building & monetizing GPT usage.",
    tags: [
      "Next.js", "Typescript", "PostgreSQL", "Prisma",
      "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"
    ],
    website: "https://chatcollect.vercel.app",
  },
  {
    title: "Magic UI",
    dates: "June 2023 – Present",
    description:
      "Designed, developed and sold animated UI components for developers.",
    tags: [
      "Next.js", "Typescript", "PostgreSQL", "Prisma",
      "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"
    ],
    website: "https://magicui.dev",
    source: "https://github.com/yourname/magic-ui",
  },
  {
    title: "llm.report",
    dates: "April 2023 – Sep 2023",
    description:
      "Open-source logging & analytics for OpenAI: analyze usage, costs, and optimize prompts.",
    tags: [
      "Next.js", "Typescript", "PostgreSQL", "Prisma",
      "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"
    ],
    website: "https://llm.report",
    source: "https://github.com/yourname/llm.report",
  },
  {
    title: "Automatic Chat",
    dates: "April 2023 – Mar 2024",
    description:
      "AI customer support chatbot that replies to support tickets using GPT.",
    tags: [
      "Next.js", "Typescript", "PostgreSQL", "Prisma",
      "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"
    ],
    website: "https://automaticchat.ai",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-xl font-bold mb-6">projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
            )}

            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-xs text-gray-500">{project.dates}</p>

            <p className="mt-2 text-sm text-gray-700">{project.description}</p>

            <div className="flex flex-wrap gap-1 mt-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-4 text-xs">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 border rounded-full hover:bg-gray-100 transition"
                >
                  <FaGlobe className="text-sm" /> Website
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 border rounded-full hover:bg-gray-100 transition"
                >
                  <FaGithub className="text-sm" /> Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

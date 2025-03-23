"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional: icons for toggle

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Software Engineer Fellow",
      company: "Headstarter",
      image: "/headstarter.svg",
      duration: "Jul 2024 - Sep 2024",
      summary: "Led the development of 7+ AI apps, reaching 700+ users using Next.js, OpenAI, and AWS.",
      bullets: [
        "Developed 7+ AI applications using Next.js, TypeScript, OpenAI, Pinecone, Stripe, Whisper, Clerk, and Firebase.",
        "Cumulative user base of 700+ active users & average engagement rate of 64.5%.",
        "Led a team of 4 in the development and deployment of projects using Vercel and AWS.",
        "Applied LLM methods such as RAG and utilized CRUD operations and MVC design patterns to improve application functionality.",
      ],
      projects: ["rizzgpt", "talkaroo", "ai voice assistant", "applyEZ", "FlashAI", "pantrypal", "portfolio"],
    },
    {
      role: "Software Engineer Intern",
      company: "UC Davis Health",
      image: "/ucdhealth.svg",
      duration: "Jul 2024 - Sep 2024",
      summary: "Built VB.NET software for tumor dye detection — improved speed and accuracy significantly.",
      bullets: [
        "Developed microscopy software in VB.net/C# for tumor dye detection.",
        "250% increase in detection rate, 600% clarity boost.",
        "Optimized software performance with refined algorithms. 150% faster runtime.",
        "Created a calibration tool for accurate surgical adjustments improving accuracy.",
        "Automated DUET image renaming using PowerShell. Saved 10+ hours and ensured confidentiality.",
      ],
      projects: ["youtube video"],
    },
    {
      role: "Product Manager",
      company: "LLD POOL & SPA Company",
      image: "/lld.svg",
      duration: "Dec 2021 - Jan 2024",
      summary: "Redesigned flagship e-commerce site and led a cross-functional team of 5.",
      bullets: [
        "Spearheaded a successful redesign of linhlinhdan.com, the company's flagship e-commerce platform.",
        "Led a team of 5, including content writers, developers, UI/UX designers, and marketers.",
        "Worked closely with the CEO to develop a product roadmap, prioritize features, and manage the product backlog.",
      ],
      projects: ["linhlinhdan.com"],
    },
    {
      role: "Founder",
      company: "Public Class APCS",
      image: "/apcs.svg",
      duration: "Jul 2024 - Sep 2024",
      summary: "Built a personalized AP CS tutoring program and raised student test performance.",
      bullets: [
        "Designed a comprehensive educational curriculum for AP Computer Science A and Principles courses.",
        "Provided personalized tutoring in programming basics, data structures, algorithms, and problem-solving.",
        "Achieved significant improvement in students' understanding and performance in AP Computer Science courses.",
      ],
      projects: ["apcsa", "apcsp"],
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-xl font-bold mb-4">experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="border-b pb-4">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-400">{exp.duration}</p>
                  <p className="text-sm mt-1">{exp.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {exp.projects.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-gray-400 pr-2">
                {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {/* Expandable detailed bullets */}
            {openIndex === i && (
              <ul className="mt-4 list-disc pl-6 text-sm text-gray-700 space-y-1">
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const experiences = [
    {
      role: "Software Engineer Fellow",
      company: "Headstarter",
      image: "/headstarter.svg",
      duration: "Jul 2024 - Sep 2024",
      summary:
        "Led the development of 7+ AI apps, reaching 700+ users using Next.js, OpenAI, and AWS.",
      bullets: [
        "Developed 7+ AI applications using Next.js, TypeScript, OpenAI, Pinecone, Stripe, Whisper, Clerk, and Firebase.",
        "Cumulative user base of 700+ active users & average engagement rate of 64.5%.",
        "Led a team of 4 in the development and deployment of projects using Vercel and AWS.",
        "Applied LLM methods such as RAG and utilized CRUD operations and MVC design patterns to improve application functionality.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "OpenAI",
        "AWS",
        "Firebase",
        "Pinecone",
        "Stripe",
        "Whisper",
        "Clerk",
      ],
      projects: [
        { name: "rizzgpt", url: "https://rizzgpt.thaianle.com" },
        { name: "talkaroo", url: "https://talkaroo-lac.vercel.app/" },
        { name: "applyEZ", url: "https://applyez-waitlist.vercel.app/" },
        { name: "FlashAI", url: "https://flashai.thaianle.com" },
        { name: "pantrypal", url: "https://pantry-pal-eta.vercel.app/" },
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "UC Davis Health",
      image: "/ucdhealth.svg",
      duration: "Jul 2024 - Sep 2024",
      summary:
        "Built VB.NET software for tumor dye detection — improved speed and accuracy significantly.",
      bullets: [
        "Developed microscopy software in VB.net/C# for tumor dye detection.",
        "250% increase in detection rate, 600% clarity boost.",
        "Optimized software performance with refined algorithms. 150% faster runtime.",
        "Created a calibration tool for accurate surgical adjustments improving accuracy.",
        "Automated DUET image renaming using PowerShell. Saved 10+ hours and ensured confidentiality.",
      ],
      tech: ["VB.NET", "C#", "PowerShell"],
      projects: [{ name: "youtube video", url: "https://www.youtube.com/watch?v=mrX9GUh_ES8&feature=youtu.be" }],
    },
    {
      role: "Product Manager",
      company: "LLD POOL & SPA Company",
      image: "/lld.svg",
      duration: "Dec 2021 - Jan 2024",
      summary:
        "Redesigned flagship e-commerce site and led a cross-functional team of 5.",
      bullets: [
        "Spearheaded a successful redesign of linhlinhdan.com, the company's flagship e-commerce platform.",
        "Led a team of 5, including content writers, developers, UI/UX designers, and marketers.",
        "Worked closely with the CEO to develop a product roadmap, prioritize features, and manage the product backlog.",
      ],
      tech: ["Adobe", "Product Management"],
      projects: [{ name: "linhlinhdan.com", url: "https://linhlinhdan.com" }],
    },
    {
      role: "Founder",
      company: "public class APCS{}",
      image: "/apcs.png",
      duration: "Aug 2021 - May 2022",
      summary:
        "Designed and taught personalized APCSA and APCSP courses, guiding three students to score 4 or higher on their AP exams.",
      bullets: [
        "Designed a comprehensive educational curriculum for AP Computer Science A and Principles courses.",
        "Provided personalized tutoring in programming basics, data structures, algorithms, and problem-solving.",
        "Achieved significant improvement in students' understanding and performance in AP Computer Science courses.",
      ],
      tech: ["Java"],
      projects: [
        {
          name: "APCSA",
          url: "https://drive.google.com/drive/folders/1XJ-H3vIF-TrgJWGewUAqEFj6bvA64GKi",
        },
        {
          name: "APCSP",
          url: "https://drive.google.com/drive/folders/1aozieTdWLkdw1g-RcM1jEmitWnDqroa9",
        },
      ],
    },
  ];

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(i)) {
        newSet.delete(i); // close
      } else {
        newSet.add(i); // open
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="mb-6">
      <h2 className="text-xl font-bold mb-4">experience</h2>
      <div>
        {experiences.map((exp, i) => {
          const isOpen = openSet.has(i);

          return (
            <div
              key={i}
              className="border-b border-gray-300 pb-4 transition-all duration-300 animate-fadeIn "
            >
              <button
                onClick={() => toggle(i)}
                className="group w-full text-left flex flex-col sm:flex-row sm:justify-between mt-2"
              >
                <div className="flex space-x-4 items-start">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 rounded-full object-cover mt-1"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{exp.role}</h3>
                      <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity animate-bounce">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    <p className="text-sm mt-1">{exp.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.tech.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 pl-14 sm:pl-0 mt-2 sm:mt-0">
                  {exp.duration}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {exp.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="mt-2 text-sm flex flex-wrap gap-2">
                  {exp.projects.map((proj, idx) => (
                    <a
                      key={idx}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors"
                    >
                      {proj.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

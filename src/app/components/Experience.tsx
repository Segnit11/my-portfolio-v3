"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Seeds of Success",
      image: "/seed-of-success-pic.png",
      duration: "Dec 2024 – Current",
      summary:
        "Building AI-powered systems to enhance chatbot accessibility for mental health and educational support.",
      bullets: [
        "Develop AI-driven NLP models with TensorFlow and spaCy for Project CARLA, boosting chatbot accuracy by 40% and supporting 2,000+ students with mental health, basic needs, and higher education resources.",
        "Implemented automated web scraping pipelines with Puppeteer, extracting and aggregating 10,000+ school data points, enhancing chatbot accuracy by 35%.",
        "Developing and integrating RESTful APIs with Express.js and MongoDB to manage student data while building React dashboards."
      ],
      tech: [
        "React", "Python", "Express.js", "TensorFlow", "spaCy", "Puppeteer", "MongoDB", "OpenAI"
      ],
      projects: [
        { name: "Project CARLA", url: "http://seedsofsuccess.us/" }
      ]
    },
    {
      role: "Automation Systems Programmer Intern",
      company: "Marvin Windows",
      image: "/marvin-automation.png",
      duration: "May 2024 – Dec 2024",
      summary:
        "Engineered control system tools and data pipelines to optimize production flow and reduce material waste.",
      bullets: [
        "Developed 5 GUI interfaces with Ignition and Python, enhancing system control and reducing errors by 15%.",
        "Optimized MS SQL Server queries using stored procedures, improving work efficiency by 30%.",
        "Designed and implemented a recut feature that verifies if parts are cut correctly and redirects them for proper cutting, saving over $100,000 annually in material waste."
      ],
      tech: ["Ignition", "Python", "MS SQL Server"],
      projects: [
        { name: "Recut System"},
        { name: "GUI Control Interfaces"}
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Marvin Windows",
      image: "/marvin-swe.png",
      duration: "May 2023 – April 2024",
      summary:
        "Built full-stack production tools that streamlined operations and improved daily reporting efficiency.",
      bullets: [
        "Created an end-of-shift reporting tool that reduced report generation time by 40% and improved data accuracy, providing supervisors with daily summaries via email.",
        "Collaborated with Design and Product teams to develop a machine metrics tool using APIs, C#, SQL, Azure, and React to track and display machine status on production line TV boards, improving operational efficiency by 45%."
      ],
      tech: ["React", "JavaScript", "C#", "SQL", "Git", "Azure"],
      projects: [
        { name: "Shift Report Tool"},
        { name: "Machine Metrics Tool"}
      ]
    },
    {
      role: "Computer Science Tutor",
      company: "Concordia College",
      image: "/concordia-college-pic.png",
      duration: "Jan 2025 – Current",
      summary:
        "Tutoring foundational and intermediate computer science courses, supporting students with programming and algorithm concepts.",
      bullets: [
        "Provided academic support for CS100 (Intro to Computer Science) and CS200 (Fundamental Structures and Algorithms).",
        "Assisted students in understanding programming logic, data structures, recursion, and algorithmic thinking.",
        "Held one-on-one and group tutoring sessions to reinforce lecture content and support coursework success."
      ],
      tech: ["Python", "Java", "Algorithms", "Data Structures"],
      projects: []
    },
    {
      role: "Project Manager",
      company: "Computer Science Society",
      image: "/cssociety-logo.png",
      duration: "Aug 2024 – Mar 2025",
      summary:
        "Led web development and community engagement efforts for Concordia's Computer Science Society.",
      bullets: [
        "Led the development and launch of the club’s website, implementing a CI/CD pipeline for seamless deployment.",
        "Organized tri-college hackathons that engaged 15–20 students from neighboring institutions.",
        "Mentored fellow students on resume building, job applications, and strategies for entering the tech industry."
      ],
      tech: ["CI/CD", "Web Development", "Leadership", "Mentorship"],
      projects: [
        {
          name: "CSS Website",
          url: "https://css-website-staging.vercel.app/"
        }
      ]
    },
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
        // { name: "rizzgpt", url: "https://rizzgpt.thaianle.com" },
        // { name: "talkaroo", url: "https://talkaroo-lac.vercel.app/" },
        // { name: "applyEZ", url: "https://applyez-waitlist.vercel.app/" },
        // { name: "FlashAI", url: "https://flashai.thaianle.com" },
        // { name: "pantrypal", url: "https://pantry-pal-eta.vercel.app/" },
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Concordia College",
      image: "/concordia-college-pic.png",
      duration: "Oct 2023 – Feb 2024",
      summary:
        "Supported academic technology development and enhancements, focusing on Concordia's Moodle learning platform.",
      bullets: [
        "Developed and maintained Moodle pages using HTML, CSS, and PHP to improve student and faculty user experience.",
        "Implemented backend features using MySQL for dynamic content and database-driven functionality.",
        "Collaborated with IT and academic departments to enhance educational tools and ensure cross-platform consistency."
      ],
      tech: ["HTML", "CSS", "PHP", "MySQL", "Moodle"],
      projects: [
        {
          name: "Moodle Enhancements",
          url: "https://www.concordiacollege.edu/"
        }
      ]
    },
    {
      role: "Resident Assistant",
      company: "Concordia College",
      image: "/concordia-college-pic.png",
      duration: "Aug 2022 – May 2023",
      summary:
        "Demonstrated leadership and community engagement while supporting a diverse group of students in a residential setting.",
      bullets: [
        "Fostered a positive campus community by organizing inclusive and engaging events, promoting cultural awareness and diversity.",
        "Mentored ethnically diverse students, serving as a dependable leader and role model throughout the academic year.",
        "Handled administrative responsibilities, emergency responses, rounds, and event planning with professionalism and time management."
      ],
      tech: [],
      projects: []
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
                className="group w-full text-left flex flex-col mt-2"
              >
                {/* Top row: logo + info left, duration right */}
                <div className="flex items-start justify-between w-full">
                  {/* Left: Logo + Company/Role */}
                  <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <Image
                      src={exp.image}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain bg-white p-1 rounded-md"
                    />
                    {/* Text: Company + Role */}
                    <div>
                      <div className="flex flex-row">
                        <p className="font-semibold">{exp.company}</p>
                        <span className="ml-1 mt-1 text-black font-bold">
                          {isOpen ? (
                            <ChevronUp size={20} strokeWidth={3.5} />
                          ) : (
                            <ChevronDown size={20} strokeWidth={3.5} />
                          )}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">{exp.role}</p>
                    </div>
                  </div>

                  {/* Right: Duration */}
                  <div className="text-sm text-gray-500 whitespace-nowrap mt-1">
                    {exp.duration}
                  </div>
                </div>

                {/* Summary + Tags */}
                <p className="text-sm mt-2">{exp.summary}</p>

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
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {exp.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="mt-2 text-sm flex flex-wrap gap-2">
                {exp.projects.map((proj, idx) => (
                  "url" in proj && proj.url ? (
                    <a
                      key={idx}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors"
                    >
                      {proj.name}
                    </a>
                  ) : (
                    <span key={idx} className="text-gray-500">{proj.name}</span>
                  )
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

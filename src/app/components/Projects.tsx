"use client";

import { FaGlobe, FaGithub, FaYoutube } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  website?: string;
  source?: string;
  backend_source?: string;
  frontend_source?: string;
  demo?: string;
}
const projects: Project[] = [
  {
    title: "Customer Churn Prediction Model",
    dates: "Feb 2025 - Current",
    description: `
    Built a machine learning system using Python, scikit-learn, and TensorFlow to predict customer churn of a Bank, reducing potential churn by 15% in Q1. Processed 5,000 customer records with R and Pandas and improved model accuracy by 15% through hyperparameter tuning.
    `,
    tags: ["React","Python", "scikit-learn", "TensorFlow", "R", "Pandas", "ML", "Gemini", "Firebase"],
    video: "/churn-prediction-demo.mp4",
    website: "",
    source: "https://github.com/Segnit11/ChurnPrediction.git"
  },
  {
    title: "Pokédex Web App",
    dates: "Nov 2024 – Feb 2025",
    description: `
Built a Pokedex app with Spring Boot API and Next.js frontend, reducing latency by 40%. Used PostgreSQL, Dockerized backend, and automated deployment with GitLab CI/CD. Secured interactions with Clerk.js authentication.
`,
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "TailwindCSS",
      "Java",
      "SpringBoot",
      "Docker",
      "PostgreSQL",
    ],
    video: "/pokemon-web.mp4",
    website: "",
    frontend_source: "https://github.com/Segnit11/pokedex-frontend",
    backend_source: "https://github.com/Segnit11/Backend_Pokedex",
  },
  {
    title: "GNAC Scheduling Optimization Tool",
    dates: "Sep 2024 – Dec 2024",
    description: `
    Transformed soccer match scheduling for the Great Northeast Athletic Conference using linear programming in R with lpSolve. Reduced conflicts by 60% and achieved 95% scheduling accuracy across 100+ games. Trained 10+ users to implement and manage the optimized system.
    `,
    tags: ["R", "lpSolve", "Linear Programming", "Optimization", "Scheduling"],
    image: "/gnac.png",
    source: "https://github.com/Segnit11/Great-Northeast-Athletic-Conference-Scheduling-Optimization-Tool"
  },
  {
    title: "Keypad-Controlled Lock System",
    dates: "Sep 2024 – Dec 2024",
    description: `
    Created during an independent study on PIC microcontrollers. Built a keypad-controlled locking system using a PIC18F4620, stepper motor, and speaker for sound feedback. Programmed with C, assembly, and MATLAB to control hardware and implement secure access logic.
    `,
    tags: [
      "PIC18F4620",
      "C",
      "Assembly",
      "MATLAB",
      "Stepper Motor",
      "Embedded Systems"
    ],
    video: "/keypad-controlled-lock-system.mp4",
    source: "https://github.com/Segnit11/PIC10F200.git",
  },
  {
    title: "The Chefs Laundry Android Game",
    dates: "Jan 2024 – April 2024",
    description: `
     Driven by a passion for cooking, I developed a restaurant management Android game that challenges players’ food prep, time management, and decision-making skills.`,
    tags: ["Android Studio", "Kotlin", "XML", "Gradle"],
    video: "/chef_laundry.mp4",
    source: "https://github.com/Segnit11/The-Chefs-Laundry-Android-Mobile-App.git",
  },
  {
    title: "Newroz Kebab Restaurant Website",
    dates: "Sep 2023 - Dec 2023",
    description: `
    Team-based project (~65 hours) to build a responsive website for a local restaurant. Increased online engagement by attracting 50+ new customers monthly and reduced order processing time by 30%. Included a reservation system with admin controls, user login, and email notifications.
    `,
    tags: [
      "PHP",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    video: "/nrk.mp4",
    source: "https://github.com/Segnit11/NewRoz_Kebab_Website"
  },
  {
    title: "CSS Website",
    dates: "Aug 2023 - Sep 2023",
    description:
      "Led the launch of the Computer Science Society’s website, implementing a CI/CD pipeline for seamless and automated deployment.",
    tags: ["React", "Next.js", "Chakra UI", "Email JS", "MySQL"],
    video: "/css-website.mp4",
    website: "https://css-website-staging.vercel.app/",
    source: "https://github.com/Segnit11/Computer-Science-Society-Website",
  },
  {
    title: "Interactive Physics Quiz App",
    dates: "Sep 2021 – Dec 2021",
    description:
      "A Windows App that simulates a creative quiz using Java and an interactive GUI on NetBeans by utilizing Adobe Photo-shop with an aim to make learning physics more interactive and engaging for middle school students.",
    tags: ["Java", "NetBeans", "JFrame", "Swing GUI"],
    video: "/interactive_physics.mp4",
    source: "https://github.com/Segnit11/Interactive-Physics.git",
  }
];


export default function Projects() {
  return (
    <>

      <section id="projects">
        <h2 className="text-xl font-bold mb-6">projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-xl w-full h-40 object-cover"
                />
              )}
              {project.video && (
                <video
                  src={project.video}
                  width={600}
                  height={400}
                  className="rounded-t-xl w-full h-40 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
          <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-xs text-gray-500">{project.dates}</p>

              <p className="mt-2 text-sm text-gray-700">
                {project.description}
              </p>

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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 border rounded-full hover:bg-gray-100 transition"
                  >
                    <FaYoutube className="text-sm" /> Demo
                  </a>
                )}
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
                {project.frontend_source && (
                  <a
                    href={project.frontend_source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 border rounded-full hover:bg-gray-100 transition"
                  >
                    <FaGithub className="text-sm" /> Front-End
                  </a>
                )}
                {project.backend_source && (
                  <a
                    href={project.backend_source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 border rounded-full hover:bg-gray-100 transition"
                  >
                    <FaGithub className="text-sm" /> Back-End
                  </a>
                )}
              </div>
            </div>
            </div>
          ))}
        </div>
        </section>
    </>
  );
}

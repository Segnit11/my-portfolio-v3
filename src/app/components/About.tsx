import {
  FileText,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

const socials = [
  {
    name: "Resume",
    href: "https://docs.google.com/document/d/1HCMRKr9WyCysn1jdBtLdbvLx37t0bKJo/edit?usp=sharing&ouid=112665485906936868172&rtpof=true&sd=true",
    icon: <FileText size={32} className="group-hover:text-blue-500 transition-colors duration-300" />,
  },
  {
    name: "Email",
    href: "mailto:stulujr@cord.edu",
    icon: <Mail size={32} className="group-hover:text-red-400 transition-colors duration-300" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/segnitulu",
    icon: <Linkedin size={32} className="group-hover:text-blue-600 transition-colors duration-300" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/segnit11",
    icon: <Github size={32} className="group-hover:text-black dark:group-hover:text-black transition-colors duration-300" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/babyst47/",
    icon: <Instagram size={32} className="group-hover:text-pink-500 transition-colors duration-300" />,
  },
];

export default function About() {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-xl font-bold text-foreground">about me</h2>

      {/* about me */}
      <p className="text-sm mt-2 text-muted">
      - My name is Segni Tulu and I am an aspiring software and machine learning engineer
      </p>

      {/* Education */}
      <p className="text-sm mt-2 text-muted">
       - Currently pursuing a <b>(B.A) in Computer Science</b> with minors in <b>Mathematics</b> and{" "}
        <b>Data Analytics</b> at Concordia College
      </p>

      {/* Involvement */}
      <p className="text-sm mt-2 text-muted">
       - If am not coding I love to working out, playing soccer, and recently I am enjoying during 3D-Modeling
      </p>

      {/* Socials */}
      <div className="mt-8 flex flex-wrap gap-10">
        {socials.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-0.5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="p-4 rounded-full border border-gray-300 dark:border-white/20 group-hover:animate-bounceOnce">
              {icon}
            </div>
            <span className="text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function TechStack() {
    const techStack = [
      "C/C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "HTML/CSS",
      "Node.js", "Express.js", "React.js", "Next.js", "Svelte", "SvelteKit", "Django", "Git", "Docker", "SSH",
      "SQLite", "MongoDB", "Firebase"
    ];
  
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold">tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-2 ">
          {techStack.map((tech, index) => (
            <span key={index} className="px-4 py-1 bg-black text-white rounded-full hover:bg-[#e5372c] cursor-pointer">
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
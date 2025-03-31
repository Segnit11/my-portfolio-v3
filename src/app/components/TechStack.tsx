export default function TechStack() {
    const techStack = [
      "C/C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "HTML/CSS",
      "Node.js", "Express.js", "React Native", "React.js", "Next.js", "Svelte", "SvelteKit",
      "Django", "Git", "Docker", "SSH", "SQLite", "MongoDB", "Firebase"
    ];
  
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold">tech stack</h2>
        <div className="text-sm mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full cursor-pointer transition duration- ease-in-out hover:bg-gray hover:opacity-80"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
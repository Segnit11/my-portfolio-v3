export default function TechStack() {
  const techStack = {
    Languages: [
      "C/C++", "C#", "Python", "JavaScript", "Java", "Kotlin", "SQL", "HTML/CSS"
    ],
    "Frameworks & Libraries": [
      "Next.js", "React.js", "Angular", "Spring Boot", "Django", "Flask"
    ],
    "Databases & Cloud": [
      "PostgreSQL", "MS SQL", "MongoDB", "Firebase", "AWS", "Azure"
    ],
    "Tools & DevOps": [
      "Node.js", "Docker", "Git", "GitHub", "GitLab CI/CD", "Postman", "Jira", "Confluence"
    ]
  };

  const colorMap = {
    // Languages
    "C/C++": "hover:bg-gray-300",
    C: "hover:bg-gray-200",
    "C#": "hover:bg-purple-300",
    Python: "hover:bg-yellow-200",
    Java: "hover:bg-red-200",
    JavaScript: "hover:bg-yellow-100",
    TypeScript: "hover:bg-blue-100",
    Kotlin: "hover:bg-pink-200",
    SQL: "hover:bg-indigo-200",
    HTML5: "hover:bg-orange-200",
    CSS: "hover:bg-blue-100",
    "HTML/CSS": "hover:bg-pink-100",
  
    // Frameworks & Libraries
    "React.js": "hover:bg-blue-200",
    React: "hover:bg-blue-200",
    "React Native": "hover:bg-green-200",
    "Next.js": "hover:bg-black hover:text-white",
    Angular: "hover:bg-red-100",
    "Spring Boot": "hover:bg-green-100",
    Svelte: "hover:bg-orange-200",
    SvelteKit: "hover:bg-red-100",
    "Express.js": "hover:bg-green-100",
    Django: "hover:bg-gray-200",
    Hono: "hover:bg-purple-200",
  
    // Tools, Cloud & Databases
    "Node.js": "hover:bg-green-200",
    Git: "hover:bg-orange-300",
    GitHub: "hover:bg-gray-300",
    "GitLab CI/CD": "hover:bg-orange-200",
    Docker: "hover:bg-blue-200",
    SSH: "hover:bg-gray-400",
    Gradle: "hover:bg-green-100",
    Postman: "hover:bg-orange-100",
    Jira: "hover:bg-blue-100",
    Confluence: "hover:bg-blue-50",
  
    // Databases & Cloud
    PostgreSQL: "hover:bg-blue-300",
    "PostgreSql": "hover:bg-blue-300",
    "MS SQL": "hover:bg-blue-100",
    SQLite: "hover:bg-indigo-200",
    MongoDB: "hover:bg-green-300",
    Firebase: "hover:bg-yellow-300",
    AWS: "hover:bg-orange-300",
    Azure: "hover:bg-blue-400",
    "Drizzle ORM": "hover:bg-lime-200",
    R2: "hover:bg-cyan-200",
    "Android Studio": "hover:bg-lime-200"
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold">tech stack</h2>
      <div className="mt-4 space-y-6">
        {Object.entries(techStack).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-gray-700">{category}</h3>
            <div className="text-sm mt-2 flex flex-wrap gap-2">
              {items.map((tech, index) => (
                <span
                  key={index}
                  className={`bg-gray-100 text-xs text-gray-800 px-3 py-1 rounded-full cursor-pointer transition duration-300 ease-in-out ${colorMap[tech as keyof typeof colorMap] || "hover:bg-gray-200"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

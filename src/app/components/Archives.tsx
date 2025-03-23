import { FaGlobe, FaGithub } from "react-icons/fa";

interface ArchiveItem {
  title: string;
  tags: string[];
  website?: string;
  source?: string;
}

const archives: ArchiveItem[] = [
  {
    title: "what’s your favorite food?",
    tags: ["OpenAI", "Chatbot", "LLM"],
    website: "https://example.com",
    source: "https://github.com/example/chatbot",
  },
  {
    title: "what’s your favorite food?",
    tags: ["Next.js", "Typescript"],
  },
  {
    title: "what’s your favorite food?",
    tags: ["Stripe", "TailwindCSS"],
    source: "https://github.com/example/checkout",
  },
];

export default function Archive() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold mb-2">archives</h2>
      <ul className="divide-y border-t border-gray-200 text-sm">
        {archives.map((item, index) => (
          <li key={index} className="py-3 flex flex-col gap-1">
            <span className="font-medium">{item.title}</span>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-1 text-xs text-blue-500">
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <FaGlobe className="text-[12px]" /> Website
                </a>
              )}
              {item.source && (
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <FaGithub className="text-[12px]" /> Source
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

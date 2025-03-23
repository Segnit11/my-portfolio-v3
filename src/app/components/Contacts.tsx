import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacts" className="mb-16">
      <h2 className="text-xl font-bold mb-4">contact</h2>
      <p className="text-sm text-gray-600 mb-4">
        Feel free to reach out — I’d love to connect, collaborate, or just say hi 👋
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500" />
          <a href="mailto:youremail@example.com" className="text-blue-500 underline">
            youremail@example.com
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaLinkedin className="text-gray-500" />
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            linkedin.com/in/yourlinkedin
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub className="text-gray-500" />
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/yourgithub
          </a>
        </li>
      </ul>
    </section>
  );
}

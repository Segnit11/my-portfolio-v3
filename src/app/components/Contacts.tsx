"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <section id="contacts" className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-4">contact</h2>
      <p className="text-sm text-gray-600 mb-4">
        Feel free to reach out — I’d love to connect, collaborate, or just say hi 👋
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500 text-xl" />
          <a href="mailto:thaianle.work@gmail.com" className="text-blue-500 underline">
            stulujr@cord.edu
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaLinkedin className="text-gray-500 text-xl" />
          <a
            href="https://www.linkedin.com/in/segnitulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://www.linkedin.com/in/segnitulu/
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub className="text-gray-500 text-xl" />
          <a
            href="http://github.com/Segnit11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            http://github.com/Segnit11
          </a>
        </li>
      </ul>
    </section>
    </>
  );
}

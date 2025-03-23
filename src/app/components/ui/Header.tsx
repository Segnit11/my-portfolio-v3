"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <span className="w-28 text-xl font-bold">:-)</span>
      {/* Navigation */}
      <nav className="flex space-x-8">
        <button
          onClick={() => scrollToSection("about")}
          className=" w-28 px-4 py-0.5 rounded-full bg-black text-white hover:bg-grey-900"
        >
          about
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className=" w-28 px-4 py-0.5 rounded-full bg-white border border-black"
        >
          experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="w-28 px-4 py-0.5 rounded-full bg-white border border-black"
        >
          projects
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          className="w-28 px-4 py-0.5 rounded-full bg-white border border-black"
        >
          contacts
        </button>
      </nav>
      {/* Playground Button */}
      <Link
        href="/playground"
        className="w-28 px-4 py-0.5 rounded-full bg-[#e5372c] text-white"
      >
        playground
      </Link>{" "}
    </header>
  );
};

export default Header;

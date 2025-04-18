"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const navItems = ["about", "experience", "projects", "contacts"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -50;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i];
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollY >= offsetTop - 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-6 py-4">
      {/* Left: Image Logo */}
      <div className="absolute left-6">
        <Image
          src="/segni-pic2.jpg"
          alt="Segni Tulu"
          width={70}
          height={70}
          className="rounded-full object-cover border border-gray-300 shadow-sm"
        />
      </div>


      {/* Center: Nav */}
      <nav className="hidden sm:flex space-x-4">
        {navItems.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`w-28 px-4 py-0.5 rounded-full border duration-300
              ${
                activeSection === id
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }
              hover:opacity-90 hover:ring-2 hover:ring-offset-2 hover:ring-[#e5372c] transition
            `}
          >
            {id}
          </button>
        ))}
      </nav>
    </section>
  );
};

export default Header;

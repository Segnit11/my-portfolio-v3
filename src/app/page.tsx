"use client";

import Hero from "@/app/components/Hero";
import Header from "./components/ui/Header";
import Chat from "./components/ui/Chat";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Archive from "./components/Archives";
import Contact from "./components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <Chat />

      {/* Main Content Wrapper */}
      <div className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 w-full">
        {/* Responsive max width container */}
        <div className="w-full max-w-4xl">
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
        </div>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/components/Hero";
import Header from "./components/ui/Header";
import Chat from "./components/ui/Chat";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Archive from "./components/Archives";
import Contact from "./components/Contacts";
import AvatarLoad from "./components/ui/AvatarLoad";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 1000 - elapsed); 

      setTimeout(() => {
        setIsLoaded(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // LOADING SCREEN
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black  text-xl transition-opacity duration-700">
        <p className="mb-4 font-bold">
        Thai An Le

        </p>
        <div className="text-sm text-center text-light mb-4 px-6 py-3 border rounded-full  max-w-xl">
          loading
        </div>
        <AvatarLoad />
        <p className="text-base mt-4 animate-pulse text-gray-700 animate-pulse">
          just a sec...
        </p>
      </div>
    );
  }

  if (!hasEntered) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black text-xl transition-opacity duration-700">
              <p className="mb-4 font-bold">
        Thai An Le

        </p>
        <div className="text-sm text-center text-light mb-4 px-6 py-3 border rounded-full  max-w-xl">
          hey there, welcome to my portfolio, really glad you&lsquo;re here.
          Feel free to take a look through my work and experiences. :-)
        </div>
        <AvatarLoad />
        <button
          onClick={() => setHasEntered(true)}
          className="mt-6 px-6 py-2 text-sm rounded-full border font-medium shadow  hover:opacity-90 hover:ring-2 hover:ring-offset-2 hover:ring-[#e5372c] transition"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <>
    <div className=" origin-top">

      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Chat />
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 w-full">
          <div className="w-full max-w-xl">
  
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

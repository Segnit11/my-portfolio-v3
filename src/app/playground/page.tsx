"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DinoGame() {
  const [isJumping, setIsJumping] = useState(false);
  const [cactusLeft, setCactusLeft] = useState(600);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const dinoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && !isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);

  useEffect(() => {
    if (isGameOver) return;

    const moveCactus = setInterval(() => {
      setCactusLeft((prev) => {
        if (prev < -60) {
          setScore((s) => s + 1);
          return 600;
        }
        return prev - 5;
      });
    }, 30);

    return () => clearInterval(moveCactus);
  }, [isGameOver]);

  // Collision Detection
  useEffect(() => {
    const checkCollision = setInterval(() => {
      const dinoBottom = isJumping ? 100 : 0;
      if (cactusLeft > 40 && cactusLeft < 80 && dinoBottom < 40) {
        setIsGameOver(true);
      }
    }, 50);

    return () => clearInterval(checkCollision);
  }, [cactusLeft, isJumping]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#f9fde6] to-white flex items-end justify-center overflow-hidden">
      {/* Score */}
      <div className="absolute top-6 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">
        Score: {score}
      </div>

      {/* Game Over Message */}
      {isGameOver && (
        <div className="absolute top-1/3 w-full text-center text-4xl font-bold text-[#e5372c] drop-shadow-lg">
          💀 Game Over
        </div>
      )}

      {/* Dino (Avatar) */}
      <div
        ref={dinoRef}
        className={`absolute left-12 bottom-2 w-14 h-14 rounded-full transition-transform duration-200 ${
          isJumping ? "animate-jump" : ""
        }`}
      >
        <Image
          src="/avatar.png" // place avatar.png in /public
          alt="Avatar Dino"
          width={56}
          height={56}
          className="rounded-full border shadow-md"
        />
      </div>

      {/* Cactus */}
      <div
        className="absolute bottom-2 w-8 h-16 bg-green-500 rounded-sm"
        style={{ left: cactusLeft }}
      />

      {/* Ground Line */}
      <div className="absolute bottom-0 w-full h-2 bg-black" />
    </div>
  );
}

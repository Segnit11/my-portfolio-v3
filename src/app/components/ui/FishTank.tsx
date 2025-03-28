"use client";

import { useEffect, useRef, useState } from "react";


const fishImages = ["/4.png", "/2.png", "/3.png", "/5.png"];
const FISH_SIZE = 128;
const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 550;

type Fish = {
  top: number;
  left: number;
  vx: number;
  vy: number;
};

// Define default spawn points
const defaultFishes: Fish[] = [
  { top: 50, left: 100, vx: 1, vy: 1 },
  { top: 200, left: 300, vx: -1, vy: 1 },
  { top: 100, left: 500, vx: 1, vy: -1 },
  { top: 300, left: 200, vx: -1, vy: -1 },
];

export default function FishTank() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fishes, setFishes] = useState<Fish[]>(defaultFishes);

  useEffect(() => {
    const moveFishes = () => {
      setFishes((prev) => {
        const updated = [...prev];

        for (let i = 0; i < updated.length; i++) {
          const fish = updated[i];
          fish.top += fish.vy * 3;
          fish.left += fish.vx * 3;

          // Wall collision
          if (fish.top < 0 || fish.top > CONTAINER_HEIGHT - FISH_SIZE) fish.vy *= -1;
          if (fish.left < 0 || fish.left > CONTAINER_WIDTH - 2* FISH_SIZE) fish.vx *= -1;

          // Fish-to-fish collision
          for (let j = i + 1; j < updated.length; j++) {
            const other = updated[j];
            const dx = fish.left - other.left;
            const dy = fish.top - other.top;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < FISH_SIZE) {
              const tempVx = fish.vx;
              const tempVy = fish.vy;
              fish.vx = other.vx;
              fish.vy = other.vy;
              other.vx = tempVx;
              other.vy = tempVy;

              // Push apart
              const overlap = FISH_SIZE - distance;
              const angle = Math.atan2(dy, dx);
              const pushX = (Math.cos(angle) * overlap) / 2;
              const pushY = (Math.sin(angle) * overlap) / 2;

              fish.left += pushX;
              fish.top += pushY;
              other.left -= pushX;
              other.top -= pushY;
            }
          }
        }

        return [...updated];
      });
    };

    const interval = setInterval(moveFishes, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl bg-gray-100 rounded-3xl shadow-inner overflow-hidden"
        style={{ width: CONTAINER_WIDTH, height: CONTAINER_HEIGHT }}
      >
        {fishes.map((fish, i) => (
          <img
            key={i}
            src={fishImages[i]}
            alt={`fish-${i}`}
            className="absolute w-32 h-32 pointer-events-none animate-spin "
            style={{
              top: fish.top,
              left: fish.left,
            }}
          />
        ))}
      </div>
    </div>
  );
}

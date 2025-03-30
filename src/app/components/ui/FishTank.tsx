"use client";

import { useEffect, useRef, useState } from "react";

const fishImages = ["/4.png", "/2.png", "/3.png", "/5.png"];

type Fish = {
  top: number;
  left: number;
  vx: number;
  vy: number;
};

export default function FishTank() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fishes, setFishes] = useState<Fish[]>([]);
  const [dimensions, setDimensions] = useState({
    width: 570,
    height: 550,
    fishSize: 128,
  });

  useEffect(() => {
    // Adjust tank and fish size on smaller screens
    const isMobile = window.innerWidth <= 640; // Tailwind sm: breakpoint
    setDimensions({
      width: isMobile ? 285 : 570,
      height: isMobile ? 275 : 550,
      fishSize: isMobile ? 64 : 128,
    });

    // Initialize fish based on new tank size
    const initialFishes: Fish[] = [
      { top: 50, left: 100, vx: 1, vy: 1 },
      { top: 100, left: 200, vx: -1, vy: 1 },
      { top: 80, left: 220, vx: 1, vy: -1 },
      { top: 120, left: 140, vx: -1, vy: -1 },
    ];
    setFishes(initialFishes);
  }, []);

  useEffect(() => {
    const moveFishes = () => {
      setFishes((prev) => {
        const updated = [...prev];

        for (let i = 0; i < updated.length; i++) {
          const fish = updated[i];
          fish.top += fish.vy * 3;
          fish.left += fish.vx * 3;

          // Wall collision
          if (fish.top < 0 || fish.top > dimensions.height - dimensions.fishSize) fish.vy *= -1;
          if (fish.left < 0 || fish.left > dimensions.width - dimensions.fishSize) fish.vx *= -1;

          // Fish-to-fish collision
          for (let j = i + 1; j < updated.length; j++) {
            const other = updated[j];
            const dx = fish.left - other.left;
            const dy = fish.top - other.top;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < dimensions.fishSize) {
              const tempVx = fish.vx;
              const tempVy = fish.vy;
              fish.vx = other.vx;
              fish.vy = other.vy;
              other.vx = tempVx;
              other.vy = tempVy;

              const overlap = dimensions.fishSize - distance;
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
  }, [dimensions]);

  return (
    <div className="mt-12 w-full flex justify-center px-4 sm:px-0">
      <div
        ref={containerRef}
        className="relative bg-gray-100 rounded-3xl shadow-inner overflow-hidden"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {fishes.map((fish, i) => (
          <img
            key={i}
            src={fishImages[i % fishImages.length]}
            alt={`fish-${i}`}
            className="absolute pointer-events-none rounded-full animate-[spin_8s_linear_infinite]"
            style={{
              width: dimensions.fishSize,
              height: dimensions.fishSize,
              top: fish.top,
              left: fish.left,
            }}
          />
        ))}
      </div>
    </div>
  );
}

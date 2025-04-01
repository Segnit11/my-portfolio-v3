import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Avatar = () => {
    const [smilePos, setSmilePos] = useState({ x: 0, y: 0 });
    const [facePos, setFacePos] = useState({ x: 0, y: 0 });
    const lastMouseMove = useRef(0);
    const step = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isIntroDone = useRef(false);
    useEffect(() => {
      const steps = [
        { x: -13, y: 10, duration: 500 }, // Look Left + Down
        { x: -25, y: -10, duration: 500 }, // Look Left + Up
        { x: 13, y: 10, duration: 500 },  // Look Right + Down
        { x: 25, y: -10, duration: 500 },  // Look Right + Down
        { x: 0, y: 0, duration: 500 },    // Look Center
      ];
    
      let animationFrame: number;
      let currentStep = 0;
      let startTime = performance.now();
    
      const runSmoothIntro = (timestamp: number) => {
        const { x: targetX, y: targetY, duration } = steps[currentStep];
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); 
    
        const prevX = currentStep === 0 ? 0 : steps[currentStep - 1].x;
        const prevY = currentStep === 0 ? 0 : steps[currentStep - 1].y;
    
        // Easing with a bounce/wiggle
        const easeOut = Math.sin((progress * Math.PI) / 2); 
        const wiggle = Math.sin(progress * Math.PI * 3) * 2 * (1 - progress); 
        const x = prevX + (targetX - prevX) * easeOut + wiggle;
        const y = prevY + (targetY - prevY) * easeOut;
    
        setSmilePos({ x, y });
        setFacePos({ x: x * 0.5, y: y * 0.5 });
    
        if (progress < 1) {
          animationFrame = requestAnimationFrame(runSmoothIntro);
        } else {
          currentStep += 1;
          if (currentStep < steps.length) {
            startTime = performance.now();
            animationFrame = requestAnimationFrame(runSmoothIntro);
          } else {
            isIntroDone.current = true;
          }
        }
      };
    
      animationFrame = requestAnimationFrame(runSmoothIntro);
    
      return () => cancelAnimationFrame(animationFrame);
    }, []);
    
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isIntroDone.current) return;

      
        setSmilePos({
          x: (event.clientX - window.innerWidth / 2) * 0.02,
          y: (event.clientY - window.innerHeight / 2) * 0.02,
        });
        setFacePos({
            x: (event.clientX - window.innerWidth / 2) * 0.010,
            y: (event.clientY - window.innerHeight / 2) * 0.010,
          });
      };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Avatar Image */}

        <Image src="/body.png" alt="Avatar" width={128} height={128} className="rounded-full bg-gray-100" />
        <div className="absolute bottom-[-2] transform" style={{ transform: `translate(${facePos.x}px, ${facePos.y}px)` }}>
            <Image src="/face.png" alt="Smile" width={128} height={128} />
        </div>
        <div className="absolute bottom-[-2] transform" style={{ transform: `translate(${smilePos.x}px, ${smilePos.y}px)` }}>
            <Image src="/smile.png" alt="Smile" width={128} height={128} />
        </div>


    </div>
  );
};

export default Avatar;

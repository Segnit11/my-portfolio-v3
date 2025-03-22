import { useEffect, useState } from 'react';
import Image from 'next/image';

const Avatar = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [smilePos, setSmilePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
      setSmilePos({ x: (event.clientX - window.innerWidth / 2) * 0.01, y: (event.clientY - window.innerHeight / 2) * 0.01});
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Avatar Image */}

        <Image src="/avatar.png" alt="Avatar" width={128} height={128} className="rounded-full" />
        <div className="absolute bottom-[-4] transform" style={{ transform: `translate(${smilePos.x}px, ${smilePos.y}px)` }}>
          <Image src="/smile.png" alt="Smile" width={128} height={128} />
        </div>

    </div>
  );
};

export default Avatar;

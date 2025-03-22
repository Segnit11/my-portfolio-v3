import { useEffect, useState } from 'react';
import Image from 'next/image';

const Avatar = () => {
  const [smilePos, setSmilePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
        setSmilePos({
          x: (event.clientX - window.innerWidth / 2) * 0.02,
          y: (event.clientY - window.innerHeight / 2) * 0.02,
        });
      };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Avatar Image */}

        <Image src="/avatar.png" alt="Avatar" width={128} height={128} className="rounded-full" />
        <div className="absolute transform" style={{ transform: `translate(${smilePos.x}px, ${smilePos.y}px)` }}>
          <Image src="/smile.png" alt="Smile" width={128} height={128} />
        </div>

    </div>
  );
};

export default Avatar;

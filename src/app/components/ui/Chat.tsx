import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Avatar Button with Animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none transition-transform transform hover:scale-105 p-1 rounded-full"
        animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
      >
        <motion.p 
          className="px-4 py-0.5 rounded-full bg-white border border-black"
          initial={{ opacity: 1, scale: 1 }}
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          an ai (beta)
        </motion.p>
        <Image src="/avatar.png" alt="Chat Avatar" width={50} height={50} className="rounded-full shadow-lg" />
      </motion.button>

      {/* Chat Box with Animation */}
      <motion.div
        className="absolute bottom-16 right-0 w-120 bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-bold">an ai (beta):</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hello there. I am An’s second brain. I inherit his personality to an extent. You can ask me about my work, or just talk to me about your day. :-)
        </p>
        
        <div className="flex flex-col space-y-2">
          <button className="px-3 py-2 border rounded text-sm">what’s your favorite dish?</button>
          <button className="px-3 py-2 border rounded text-sm">let me talk to human an</button>
        </div>
        <div className="mt-4 text-xs text-gray-400">ask me :-)</div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-500">rather talk to human An?</span>
          <span className="text-blue-500 underline cursor-pointer">mail</span>
          <span className="text-blue-500 underline cursor-pointer">linkedin</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
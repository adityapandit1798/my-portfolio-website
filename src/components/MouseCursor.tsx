import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-full h-full bg-blue-500 rounded-full opacity-20 blur-xl" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full" />
    </motion.div>
  );
};
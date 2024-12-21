import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2" />
      </div>
    </motion.div>
  );
};
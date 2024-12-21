import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timeline } from './timeline/Timeline';
import { workExperience } from '../data/workExperience';

export const WorkExperience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">My professional journey in cloud and DevOps</p>
        </motion.div>
        
        <Timeline experiences={workExperience} />
      </div>
    </section>
  );
};
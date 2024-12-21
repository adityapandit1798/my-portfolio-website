import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';
import type { WorkExperience } from '../../types/experience';

interface TimelineItemProps {
  experience: WorkExperience;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 z-10" />
      
      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-semibold">{experience.company}</span>
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {experience.location}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mb-4">
            <Calendar size={16} />
            <span>{experience.duration}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
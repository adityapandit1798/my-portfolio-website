import React from 'react';
import { TimelineItem } from './TimelineItem';
import type { WorkExperience } from '../../types/experience';

interface TimelineProps {
  experiences: WorkExperience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
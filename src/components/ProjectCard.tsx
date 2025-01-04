import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  url: string;
  publicUrl: string;
  createdTime: string;
  lastEditedTime: string;
  cover?: string | null; // Optional cover image
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Default cover image if not available
  const defaultCoverImage = "https://example.com/default-cover.jpg"; // Replace with your actual default image URL

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Cover Image */}
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.cover || defaultCoverImage})`,
        }}
      />
      
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        
        {/* Timestamps */}
        <p className="text-sm text-gray-600 mb-2">
          Created: {new Date(project.createdTime).toLocaleDateString()} | Last Edited:{" "}
          {new Date(project.lastEditedTime).toLocaleDateString()}
        </p>
        
        {/* Project Link */}
        <a
          href={project.publicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  url: string;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            Close
          </button>
        </div>
        <div className="mt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Open Project in Notion
          </a>
        </div>
      </motion.div>
    </div>
  );
};

type Project = {
  id: string;
  title: string;
  url: string;
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
    onClick={onClick}
  >
    <h3 className="text-lg font-bold">{project.title}</h3>
  </div>
);

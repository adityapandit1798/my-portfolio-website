import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type Project = {
  id: string;
  title: string;
  url: string;
};

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const notionProjects = ["d8a97970915744d3aff8327570c333c1"]; // Add more IDs
        const promises = notionProjects.map(async (id) => {
          const response = await fetch(`http://localhost:5000/notion/${id}`);
          const data = await response.json();
          return {
            id: data.id,
            title: data.properties.title.title[0].plain_text,
            url: data.public_url,
          };
        });
        const projectData: Project[] = await Promise.all(promises);
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching Notion API data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

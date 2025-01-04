import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type Project = {
  id: string;
  title: string;
  url: string;
  createdTime: string;
  lastEditedTime: string;
  cover?: string | null; // Optional cover image
  publicUrl: string;
};

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const notionProjects = ["11ad7f271fc980bbb0bff4d86b0f498d","d8a97970915744d3aff8327570c333c1", 
           "140d7f271fc98040b5c6c11ebe947f7e", "8af9cb8a042e4ac898e4b621622aec33","135d7f271fc9805e9575d1d380cbb517",
            "1131c8b86f674188b7a713c0c210c524", "505b8337498e4620942e6487926b190a", "115d7f271fc9804bb9c7e54bf60581e5",
             "15fd7f271fc980c288caf8a38325ffb1", "160d7f271fc98045a9f4f2a947d4837e", "166ef4c8aac5434b80d815411ebd6ca7",
              "b8b9bb4e24324842a347148fb5bb7500", "93772e4c602142668a25da48e0a58d3e", "ebffe71a6f2e44aa8f85bf1baa2a34b6",
               "5fc9558fcb5f4b97aa72c0f7a538216e", ]; // Add more Notion page IDs as needed
        const promises = notionProjects.map(async (id) => {
          const response = await fetch("http://localhost:8080/notion-api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              endpoint: `/pages/${id}`, // Send the page ID to the server
            }),
          });

          const data = await response.json();
          return {
            id: data.id,
            title: data.properties.title.title[0].plain_text,
            url: data.url,
            publicUrl: data.public_url,
            createdTime: data.created_time,
            lastEditedTime: data.last_edited_time,
            cover: data.cover?.external?.url || null, // Use the cover image URL or null if not available
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type Project = {
  id: string;
  title: string;
  url: string;
  createdTime: string;
  lastEditedTime: string;
  cover?: string | null;
  publicUrl: string;
};

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Full Notion page IDs
        const notionProjectsFull = [
          "224d7f271fc980178163d3f9c8be9f10",
          "229d7f271fc980ca9cedc74c90799400",
          "170d7f271fc980c7bbd3f5c50e7f84ed",
          "ebffe71a6f2e44aa8f85bf1baa2a34b6",
          "175d7f271fc980bab9b2c0b9ada966a1",
          "175d7f271fc9807e8fb6fd24ae01ef3f",
          "140d7f271fc98040b5c6c11ebe947f7e",
          "11ad7f271fc980bbb0bff4d86b0f498d",
          "135d7f271fc9805e9575d1d380cbb517",
          "171d7f271fc9808ab23dc1c87d3b409c",
          "1f69cfb7d6a4489ba9b51b20675d30b8",
        ];

        // Map of special suffixes you used in filenames (optional)
        const suffixMap: Record<string, string> = {
          "175d7f27": "-a",  // example: notion-175d7f27-a.json
          // add other mappings if needed
        };

        const promises = notionProjectsFull.map(async (fullId) => {
          const shortId = fullId.slice(0, 8);
          const suffix = suffixMap[shortId] || "";
          const filename = `${import.meta.env.BASE_URL}data/notion-${shortId}${suffix}.json`;

          try {
            const response = await fetch(filename);

            if (!response.ok) {
              console.warn(`Failed to load local file for project ID: ${fullId}`);
              return null;
            }

            const data = await response.json();

            const title = data.properties?.title?.title?.[0]?.plain_text || "Untitled";

            // Cast returned object as Project to fix TS errors
            return {
              id: data.id || fullId,
              title,
              url: data.url || "",
              publicUrl: data.public_url || "",
              createdTime: data.created_time || "",
              lastEditedTime: data.last_edited_time || "",
              cover: data.cover?.external?.url || null,
            } as Project;
          } catch (err) {
            console.error(`Error loading local file for project ID ${fullId}:`, err);
            return null;
          }
        });

        const resolved = await Promise.all(promises);

        // Type guard to remove nulls
        function isProject(project: Project | null): project is Project {
          return project !== null;
        }

        const validProjects = resolved.filter(isProject);

        setProjects(validProjects);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

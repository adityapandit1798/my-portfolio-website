// ../data/howToDos.ts
import { BookOpen } from 'lucide-react';

export interface Note {
  title: string;
  description: string;
  url: string;
  category: string;
}

export const notes: Note[] = [
  {
    title: "Kubernetes Best Practices",
    description:
      "A comprehensive guide to Kubernetes deployment strategies and best practices",
    url: "https://your-notion-url-1.com",
    category: "Kubernetes",
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Step-by-step guide to setting up a robust CI/CD pipeline",
    url: "https://your-notion-url-2.com",
    category: "DevOps",
  },
  // Add more notes here if needed
];

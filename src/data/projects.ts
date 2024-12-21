export interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Authentication Server",
    description: "Developed a Docker-based authentication server with SSO, MFA, and LDAP integration.",
    details: "Created an authentication server using Authelia, featuring SSO, MFA (Google Auth, Face ID, fingerprint), and LDAP integration. Integrated the server with applications like Portainer and Proxmox, with domain protection capabilities.",
    image: "https://personal-files-aditya1798.s3.ap-south-1.amazonaws.com/portfolio-site-data/images/download.png",
    tags: ["Docker", "Authelia", "SSO", "MFA", "LDAP", "Security"],
    github: "https://github.com/adityapandit1798/Authentication-server"
  },
  {
    id: 2,
    title: "End-to-End CI/CD Implementation",
    description: "Implemented a Java-based CI/CD pipeline using Jenkins for automated deployment.",
    details: "Built a CI/CD pipeline for a Java-based application using Jenkins declarative pipelines. Implemented stages like static code analysis, security scanning, and deployment strategies for efficient delivery.",
    image: "https://personal-files-aditya1798.s3.ap-south-1.amazonaws.com/portfolio-site-data/images/jenkins.png",
    tags: ["CI/CD", "Jenkins", "Java", "Automation", "Security"],
    github: "https://github.com/adityapandit1798/CI-CD-Pipeline"
  },
  {
    id: 3,
    title: "Lightweight Java-based Web Server",
    description: "Developed a lightweight, production-ready Java web server.",
    details: "Created a lightweight Java-based web server designed for static sites and small-scale applications. The server offers faster load times and lower resource usage compared to traditional web servers like Tomcat and Nginx.",
    image: "https://personal-files-aditya1798.s3.ap-south-1.amazonaws.com/portfolio-site-data/images/web-server.png",
    tags: ["Java", "Web Server", "Lightweight", "Static Sites"],
    github: "https://github.com/adityapandit1798/Light-webserver"
  },
  {
    id: 4,
    title: "Drowsy Face Detection using Machine Learning",
    description: "Developed a machine learning-based system for detecting drowsy faces.",
    details: "Trained a machine learning model to detect drowsy faces using images of different expressions. Deployed the system on a Raspberry Pi 4, enabling real-time face expression analysis.",
    image: "https://personal-files-aditya1798.s3.ap-south-1.amazonaws.com/portfolio-site-data/images/machine-learning.jpeg",
    tags: ["Machine Learning", "Raspberry Pi", "Face Detection", "Python"],
    github: "https://github.com/adityapandit1798/Drowsy-face-detection"
  }
];

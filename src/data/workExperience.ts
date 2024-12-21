import { WorkExperience } from '../types/experience';

export const workExperience: WorkExperience[] = [
  {
    company: "Innspark Solutions",
    role: "Cloud Engineer",
    location: "Pune",
    duration: "Aug 2024 - Present",
    responsibilities: [
      "Deployed on-prem servers using Proxmox for Groupware solutions (email, calendar)",
      "Implemented monitoring and logging for real-time system insights",
      "Developed authentication server using Authelia (SSO, MFA, Face ID, fingerprint)"
    ]
  },
  {
    company: "JAWK Softwares",
    role: "Software Engineer",
    location: "Pune",
    duration: "Feb 2022 - Jul 2024",
    responsibilities: [
      "Managed AWS services (EC2, ELB), automated builds with Jenkins CI/CD pipeline",
      "Optimized server performance with Docker and Kubernetes for AI tasks (LLaMA 3)",
      "Automated infrastructure deployment with Terraform",
      "Developed native Android/iOS apps with Cordova, integrating ML-based barcode scanning and speech-to-text"
    ]
  },
  {
    company: "Rays Tech",
    role: "Intern",
    location: "Pune",
    duration: "Sep 2022 - Feb 2022",
    responsibilities: [
      "Developed student information system with Java MVC, MySQL, and JDBC",
      "Integrated front-end with Tomcat server for displaying student data"
    ]
  }
];
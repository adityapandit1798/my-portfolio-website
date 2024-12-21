// ../data/skills.ts
import { FaAws, FaDocker, FaGithub, FaLinux, FaDatabase,  FaJava, FaAndroid, FaApple } from 'react-icons/fa';
import { DiJenkins, DiGit } from 'react-icons/di'; // DiGit for Git
import { SiTerraform, SiJenkins, SiDocker, SiKubernetes, SiGithub, SiSonarqube, SiProxmox } from 'react-icons/si'; // Correctly using Si for Terraform, Kubernetes, Docker, etc.

export const skills = [
  {
    title: "Cloud Skills",
    description: "AWS (EC2, S3, IAM, VPC, RDS, Load Balancers, AWS EKS)",
    icon: FaAws,
    subSkills: [
      { name: "AWS EC2", icon: FaAws },
      { name: "AWS S3", icon: FaAws },
      { name: "AWS IAM", icon: FaAws },
      { name: "AWS VPC", icon: FaAws },
      { name: "AWS RDS", icon: FaAws },
      { name: "AWS EKS", icon: FaAws },
    ],
  },
  {
    title: "DevOps Tools",
    description: "Terraform, Jenkins, Docker, Kubernetes, Git, SVN (Tortoise), Nexus, SonarQube, Proxmox",
    icon: SiTerraform, // Updated to SiTerraform
    subSkills: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Git", icon: DiGit },
      { name: "SVN", icon: DiGit }, // SVN is not available, use Git icon
      { name: "Nexus", icon: FaGithub }, // Nexus icon not available, using GitHub icon as a placeholder
      { name: "SonarQube", icon: SiSonarqube },
      { name: "Proxmox", icon: SiProxmox },
    ],
  },
  {
    title: "Operating Systems",
    description: "Linux (general user management, troubleshooting, networking), Windows, macOS",
    icon: FaLinux,
    subSkills: [
      { name: "Linux", icon: FaLinux },
      { name: "Windows", icon: FaDatabase }, // Using Database icon for Windows as a placeholder
      { name: "macOS", icon: FaApple },
    ],
  },
  {
    title: "Networking Concepts",
    description: "TCP/IP, general networking principles",
    icon: FaDatabase,
    subSkills: [
      { name: "TCP/IP", icon: FaDatabase },
      { name: "Networking Principles", icon: FaDatabase },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cordova architecture (Android and iOS native apps)",
    icon: FaAndroid,
    subSkills: [
      { name: "Cordova", icon: SiDocker }, // Using Docker icon for Cordova
    ],
  },
  {
    title: "Programming Languages",
    description: "SQL, JavaScript (ES6), Knockout.js",
    icon: FaJava,
    subSkills: [
      { name: "SQL", icon: FaDatabase },
      { name: "JavaScript", icon: FaJava },
      { name: "Knockout.js", icon: FaDatabase },
    ],
  },
];

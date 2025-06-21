import React from 'react';
import { 
  Cloud, 
  Server, 
  Database, 
  GitBranch, 
  Shield, 
  Monitor, 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  User,
  Code,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Calendar,
  ExternalLink
} from 'lucide-react';

const Overlay: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-container">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Aditya Pandit
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Section 1 - Hero/Home */}
      <section id="home" className="h-screen flex items-center justify-start pl-20 pt-20">
        <div className="max-w-2xl">
          <div className="text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Aditya Pandit</span>
          </div>
          <div className="text-2xl text-gray-300 mb-8">
            Cloud Engineer
          </div>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Amazon Certified Solutions Architect with 3+ years of experience in managing cloud infrastructure. 
            Skilled in infrastructure automation, CI/CD pipeline implementation, and monitoring. 
            Experienced in virtualization, containerization, and Linux administration.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - About */}
      <section id="about" className="h-screen flex items-center justify-end pr-20 pt-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center">
            <User className="w-8 h-8 mr-3 text-blue-400" />
            About Me
          </h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a passionate Cloud Engineer based in Pune, India, with over 3 years of experience 
              in designing and managing scalable cloud infrastructure solutions.
            </p>
            <p className="leading-relaxed">
              My expertise spans across AWS cloud services, infrastructure automation using Terraform, 
              containerization with Docker and Kubernetes, and implementing robust CI/CD pipelines. 
              I have a proven track record of optimizing cloud costs and improving system reliability.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-400" />
                <span>AWS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-green-400" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Full Stack DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Skills & Technologies */}
      <section id="skills" className="h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl w-full px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory 
              title="Cloud Platforms"
              icon={<Cloud className="w-8 h-8" />}
              skills={["AWS (EC2, S3, IAM, VPC, RDS, EKS)", "Load Balancer, Auto Scaling", "Proxmox VE"]}
              color="blue"
            />
            <SkillCategory 
              title="DevOps Tools"
              icon={<GitBranch className="w-8 h-8" />}
              skills={["Jenkins", "Terraform", "Git, GitHub, SVN", "SonarQube", "Nexus"]}
              color="green"
            />
            <SkillCategory 
              title="Containerization"
              icon={<Database className="w-8 h-8" />}
              skills={["Docker", "Kubernetes (K8s)", "LXC"]}
              color="purple"
            />
            <SkillCategory 
              title="Monitoring"
              icon={<Monitor className="w-8 h-8" />}
              skills={["Prometheus", "Grafana", "InfluxDB", "VictoriaMetrics"]}
              color="orange"
            />
            <SkillCategory 
              title="Programming"
              icon={<Code className="w-8 h-8" />}
              skills={["Python", "Bash", "SQL", "DynamoDB"]}
              color="red"
            />
            <SkillCategory 
              title="Operating Systems"
              icon={<Server className="w-8 h-8" />}
              skills={["Ubuntu", "CentOS", "Linux Administration", "Networking & Troubleshooting"]}
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Professional Experience - Horizontal Scroll */}
      <section id="experience" className="h-screen flex flex-col justify-center pt-20">
        <div className="max-w-7xl w-full mx-auto px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Professional Experience
          </h2>
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-8 min-w-max">
              <ExperienceCard 
                title="Cloud Engineer"
                company="Innspark Solutions"
                period="Aug 2024 - Present"
                location="Pune, India"
                achievements={[
                  "Built and deployed HA applications on AWS using EC2, EKS, and S3",
                  "Configured VPCs, IAM roles, and Load Balancers",
                  "Developed reusable Terraform modules",
                  "Implemented AWS cost optimization (20% monthly savings)"
                ]}
                color="blue"
              />
              
              <ExperienceCard 
                title="Software Engineer"
                company="JAWK Softwares"
                period="Mar 2022 - Jul 2024"
                location="Pune, India"
                achievements={[
                  "Hands-on with AWS migration and infrastructure setup",
                  "Built custom VPC with NAT and Internet Gateway",
                  "Launched EC2 instances in segmented subnets",
                  "Developed cross-platform mobile app using Apache Cordova"
                ]}
                color="green"
              />

              <ExperienceCard 
                title="Junior Developer"
                company="Tech Startup"
                period="Jan 2021 - Feb 2022"
                location="Remote"
                achievements={[
                  "Learned cloud fundamentals and Linux administration",
                  "Assisted in basic infrastructure setup",
                  "Gained experience with version control systems",
                  "Participated in agile development processes"
                ]}
                color="purple"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-gray-400 text-sm">← Scroll horizontally to view all experiences →</div>
          </div>
        </div>
      </section>

      {/* Section 5 - Projects */}
      <section id="projects" className="h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl w-full px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Hybrid Cloud Infrastructure"
              description="Integrated on-premise Proxmox clusters with AWS, achieving 99.9% uptime for seamless data transfers"
              tech={["AWS", "Proxmox VE", "VPC", "Direct Connect"]}
              duration="Oct 2023 - Present"
              color="blue"
              icon={<Cloud className="w-8 h-8" />}
              image="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
              notionUrl=""
            />
            <ProjectCard 
              title="Infrastructure Automation"
              description="Built reusable Terraform modules reducing manual configuration by 70% across multiple environments"
              tech={["Terraform", "AWS", "Jenkins", "Python"]}
              duration="Jul 2023 - Sep 2023"
              color="green"
              icon={<GitBranch className="w-8 h-8" />}
              image="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400"
              notionUrl=""
            />
            <ProjectCard 
              title="Innspark Cloud Platform"
              description="Deployed HA applications on AWS using EKS, implemented cost optimization saving 20% monthly"
              tech={["AWS EKS", "Docker", "S3", "Load Balancer"]}
              duration="Aug 2024 - Present"
              color="purple"
              icon={<Database className="w-8 h-8" />}
              image="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
              notionUrl=""
            />
            <ProjectCard 
              title="Resource Optimization Scheduler"
              description="Developed Python-based intelligent scheduler for dynamic Proxmox node selection using live metrics"
              tech={["Python", "Proxmox", "Monitoring", "Automation"]}
              duration="Oct 2023 - Present"
              color="orange"
              icon={<Shield className="w-8 h-8" />}
              image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
              notionUrl=""
            />
          </div>
        </div>
      </section>

      {/* Section 6 - Contact */}
      <section id="contact" className="h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl w-full px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities and cloud infrastructure challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Phone className="w-8 h-8" />}
              title="Phone"
              value="+91-7028979193"
              color="blue"
            />
            <ContactCard 
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              value="pandit.aditya1798@gmail.com"
              color="green"
            />
            <ContactCard 
              icon={<MapPin className="w-8 h-8" />}
              title="Location"
              value="Pune, India"
              color="purple"
            />
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors mr-4">
              Download Resume
            </button>
            <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors">
              View LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo';
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, color }) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-500/10 text-blue-400',
    green: 'border-green-500 bg-green-500/10 text-green-400',
    purple: 'border-purple-500 bg-purple-500/10 text-purple-400',
    orange: 'border-orange-500 bg-orange-500/10 text-orange-400',
    red: 'border-red-500 bg-red-500/10 text-red-400',
    indigo: 'border-indigo-500 bg-indigo-500/10 text-indigo-400',
  };

  return (
    <div className={`border-2 ${colorClasses[color]} rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 text-sm">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  color: 'blue' | 'green' | 'purple';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements,
  color
}) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-500/10',
    green: 'border-green-500 bg-green-500/10',
    purple: 'border-purple-500 bg-purple-500/10',
  };

  return (
    <div className={`min-w-[400px] border-2 ${colorClasses[color]} rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <Calendar className="w-5 h-5 text-blue-400" />
      </div>
      <div className="text-blue-400 font-semibold mb-1">{company}</div>
      <div className="text-gray-400 text-sm mb-1">{period}</div>
      <div className="text-gray-400 text-sm mb-4">{location}</div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300 text-sm">
            • {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  duration: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  icon: React.ReactNode;
  image: string;
  notionUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  duration, 
  color, 
  icon,
  image,
  notionUrl
}) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-500/10 text-blue-400',
    green: 'border-green-500 bg-green-500/10 text-green-400',
    purple: 'border-purple-500 bg-purple-500/10 text-purple-400',
    orange: 'border-orange-500 bg-orange-500/10 text-orange-400',
  };

  const handleClick = () => {
    if (notionUrl) {
      window.open(notionUrl, '_blank');
    }
  };

  return (
    <div 
      className={`border-2 ${colorClasses[color]} rounded-xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-gray-400 text-sm mb-3">{duration}</div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: 'blue' | 'green' | 'purple';
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, color }) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-500/10 text-blue-400',
    green: 'border-green-500 bg-green-500/10 text-green-400',
    purple: 'border-purple-500 bg-purple-500/10 text-purple-400',
  };

  return (
    <div className={`border-2 ${colorClasses[color]} rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
      <div className="flex flex-col items-center space-y-3">
        {icon}
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-center">{value}</p>
      </div>
    </div>
  );
};

export default Overlay;
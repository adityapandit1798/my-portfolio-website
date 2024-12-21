import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a target='_blank'
        href="https://github.com/adityapandit1798"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={24} />
      </a>
      <a target='_blank'
        href="https://www.linkedin.com/in/aditya-pandit98/"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={24} />
      </a>
      <a target='_blank'
        href="mailto:pandit.aditya1798@gmail.com"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Email Contact"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};
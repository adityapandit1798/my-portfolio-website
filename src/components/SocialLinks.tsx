import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
  <a 
    target='_blank'
    href="https://github.com/adityapandit1798"
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
    aria-label="GitHub Profile"
  >
    GitHub Profile
    <Github size={24} className="ml-2" />
  </a>
  <a 
    target='_blank'
    href="https://www.linkedin.com/in/aditya-pandit98/"
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
    aria-label="LinkedIn Profile"
  >
    LinkedIn Profile
    <Linkedin size={24} className="ml-2" />
  </a>
  <a 
    target='_blank'
    href="mailto:pandit.aditya1798@gmail.com"
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
    aria-label="Email Contact"
  >
    Email Contact
    <Mail size={24} className="ml-2" />
  </a>
</div>

  );
};
import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Github, Linkedin, Mail } from 'lucide-react';
import { MouseCursor } from './components/MouseCursor';
import { Hero3D } from './components/Hero3D';
import { Navbar } from './components/Navbar';
import darkModeImage from './images/darkmode1.jpg'; // Import dark mode image
import lightModeImage from './images/light-mode.jpg'; // Import light mode image

function App() {
  // Step 1: Define state to track if the theme is dark or light.
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    // Get the home element and apply the initial background image
    const homeElement = document.querySelector('#home');
    if (homeElement instanceof HTMLElement) {
      homeElement.style.transition = 'background-image 1s ease-in-out'; // Add smooth transition
      homeElement.style.backgroundImage = `url(${isDark ? darkModeImage : lightModeImage})`; // Apply the background
    }
  }, []);
  // Step 2: Toggle the theme and background image.
  const toggleTheme = () => {
    // Toggle theme state
    setIsDark(prevState => !prevState);

    // Toggle the 'dark' class on the root element
    document.documentElement.classList.toggle('dark');

    // Select the #home element and toggle the background image
    const homeElement = document.querySelector('#home');
    
    // Add a null check to avoid accessing properties of a null value
    if (homeElement instanceof HTMLElement) {
      homeElement.style.transition = 'background-image 1s ease-in-out'; // Add smooth transition

      // Toggle the background image based on the theme
      if (isDark) {
        // If the current theme is dark, set to light background
        homeElement.style.backgroundImage = `url(${lightModeImage})`;
      } else {
        // If the current theme is light, set to dark background
        homeElement.style.backgroundImage = `url(${darkModeImage})`;
      }
    }
  };


  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
      <MouseCursor />
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Aditya Pandit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Building scalable and secure cloud solutions
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <Hero3D />
        </div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a DevOps Engineer passionate about building and optimizing the next generation of cloud infrastructure. With expertise in containerization, CI/CD, and cloud platforms, I help teams deliver software faster and more reliably.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Cloud className="mb-2" size={24} />
                  <h3 className="font-semibold mb-1">Cloud Platforms</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AWS, GCP, Azure</p>
                </div>
                {/* Add more skill boxes here */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* More sections to be added */}
    </div>
  );
}

export default App;
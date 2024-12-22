import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Github, Linkedin, Mail } from 'lucide-react';
import { MouseCursor } from './components/MouseCursor';
import { Hero3D } from './components/Hero3D';
import { Navbar } from './components/Navbar';
import car1 from './images/car1.jpg'; 
import car2 from './images/car2.jpg'; 
import car3 from './images/car3.jpg'; 
import mac0 from './images/mac0.jpg'; 
import mac1 from './images/mac1.jpg'; 
import mac2 from './images/mac2.jpg'; 
import mac3 from './images/mac3.jpg'; 
import window4 from './images/window4.jpg'; 
import window1 from './images/window1.jpg'; 
import window2 from './images/window2.jpg'; 
import window3 from './images/window3.jpg'; 
import { AboutSection } from './components/AboutSection';
import { WorkExperience } from './components/WorkExperience';
import { ProjectsSection } from './components/ProjectsSection';
import { NotionNotes } from './components/NotionNotes';
import { ScrollIndicator } from './components/ScrollIndicator';
import { SocialLinks } from './components/SocialLinks';
import catImage from './images/cat.jpg'; // Make sure to add a cat image in your images folder

function App() {
  const backgroundImages = [car1, car2, car3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); 

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  useEffect(() => {
    // Get the home element and apply the background image
    const homeElement = document.querySelector('#home');
    if (homeElement instanceof HTMLElement) {
      homeElement.style.transition = 'background-image 1s ease-in-out'; // Smooth transition
      homeElement.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`; // Apply the background
    }
  }, [currentImageIndex]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
      <MouseCursor />
      <Navbar toggleTheme={toggleTheme} isDark={false} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-5">
              Hi! I'm Aditya Pandit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              3+ years experience | Devops Engineer | AWS Certified Solutions Architect
            </p>
            {/* Floating Cat Image and Text */}
            <div className="absolute bottom-6 right-6 text-center flex flex-col items-center space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Hire me (please)</p>
              <img src={catImage} alt="Cat" className="w-16 h-16 rounded-full shadow-lg" />
            </div>
            <SocialLinks />
          </motion.div>
          <Hero3D />
        </div>
        <ScrollIndicator />
      </section>

      {/* Other sections */}
      <AboutSection />
      <ProjectsSection />
      <WorkExperience />
      <NotionNotes />
    </div>
  );
}

export default App;

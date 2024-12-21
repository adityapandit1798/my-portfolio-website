import { motion } from 'framer-motion';
import { skills } from '../data/skills'; // Import updated skills from the data file

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm a DevOps Engineer passionate about building and optimizing cloud infrastructure.
              With expertise in containerization, CI/CD, and cloud platforms, I help teams deliver
              software faster and more reliably.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <skill.icon size={40} className="text-blue-500 mb-3" />
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

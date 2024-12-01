import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import ThemeToggle from "./ThemeToggle";

const WebPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NM
              </span>

              <div className="flex items-center gap-4">
                <ThemeToggle />

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.div
          className="pt-32 pb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src="assets/Profilepicture1.jpg"
                  alt="Ndaedzo Austin Mukhuba"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ndaedzo Austin Mukhuba
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | Aspiring Solutions Architect
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 bg-white dark:bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a dedicated and passionate Full Stack Developer with a deep
              expertise in modern web technologies and cloud architecture. My
              skill set spans the entire development lifecycle, from designing
              intuitive and user-friendly front-end interfaces to building
              robust and scalable back-end systems. With a strong foundation in
              programming and an eye for detail, I specialize in crafting
              efficient, high-performance solutions that address real-world
              challenges. My experience with cloud platforms enables me to
              architect systems that are not only scalable but also optimized
              for reliability and cost-effectiveness. I thrive on leveraging the
              latest tools and technologies to deliver innovative solutions that
              drive meaningful impact. Whether it's developing dynamic web
              applications, integrating complex APIs, or optimizing existing
              systems, I am committed to delivering quality and value in every
              project I undertake.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <MyProjects />
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 bg-white dark:bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/ndaedxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ndaedzo-mukhuba-71759033b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ndaemukhuba@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} Ndaedzo Austin Mukhuba. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WebPortfolio;

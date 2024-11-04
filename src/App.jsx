import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Menu, 
  X 
} from 'lucide-react';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const handleDownload = () => {
    // Buat link untuk download
    const link = document.createElement('a');
    link.href = '/resume/Resume_FaizalNugraha.pdf';
    link.download = 'Resume_MFaizalNugraha.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Muhamad Faizal Nugraha
            </motion.h1>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-4 py-2 ${activeSection === section ? 'text-blue-600' : 'text-gray-600'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-0"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-9 gradient-text">
              Software Engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Transforming Complex Challenges into Elegant Solutions
            </p>
            <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center hover:bg-blue-700"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Dedicated Fullstack Developer with over 3 years of progressive experience in IT industry, 
              starting from internship roles to current position as a Fullstack Developer. 
              Proven track record in developing and maintaining various enterprise systems including Order Management Systems (OMS), 
              Service Assurance Systems, and enterprise applications. Demonstrated leadership and teaching abilities through experience 
              as a Laboratory Assistant for Object-Oriented Programming and Database Programming. Strong expertise in full-stack development, 
              system integration, and technical support, with a passion for creating efficient and scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            {[
              { Icon: Github, link: "https://github.com/faizalnugraha1" },
              { Icon: Linkedin, link: "https://id.linkedin.com/in/faizal-nugraha-7a282a216" },
              { Icon: Mail, link: "mailto:nugraha.faizal7@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Muhamad Faizal Nugraha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
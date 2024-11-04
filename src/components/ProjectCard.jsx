import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, X } from 'lucide-react';

// Komponen Modal untuk menampilkan gambar full-size
const ImageModal = ({ isOpen, image, title, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative max-w-4xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="bg-white rounded-lg p-4">
            <img
              src={image}
              alt={title}
              className="w-auto h-auto object-contain"
              style={{
                maxHeight: 'calc(90vh - 6rem)',
                maxWidth: '100%',
                margin: '0 auto',
                display: 'block'
              }}
            />
            <p className="text-gray-800 text-center mt-4 text-lg font-medium">{title}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Komponen ProjectCard utama
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const ProjectIcon = project.icon || Code;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Image Container */}
        <div 
          className="relative w-full aspect-video cursor-pointer group"
          onClick={() => setIsImageModalOpen(true)}
        >
          <img
            src={project.image || '/api/placeholder/800/600'}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
          >
            <div className="text-white text-sm font-medium flex items-center gap-2">
              <ExternalLink size={16} />
              View full image
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          {/* Project Icon */}
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <ProjectIcon size={24} />
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          
          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index} className="line-clamp-2">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links - Only show if there are links available */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="mt-4 flex justify-end gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  title="View Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  title="View on GitHub"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        image={project.image}
        title={project.title}
        onClose={() => setIsImageModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
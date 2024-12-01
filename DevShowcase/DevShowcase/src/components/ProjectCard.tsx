import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  description, 
  githubLink, 
  demoLink,
  tags = []
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-end">
          <a 
            href={githubLink} 
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href={demoLink} 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
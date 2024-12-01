import { Code2, Layout, Database, Github, Terminal, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "TypeScript", "Tailwind CSS", "React Native", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["ASP.Net Core", "Django", "Flask"]
  },

  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["SSMS", "PostgreSQL", "MongoDB", "Oracle", "MySQLWorkbench"  ]
  },
  {
    category: "DevOps",
    icon: <Github className="w-6 h-6" />,
    items: ["Git", "Docker", "Azure"]
  },
  {
    category: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["VS Code", "Figma", "Postman",  "Visual Studio", ]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "Python", "C", "C++", "C#", "Java", "HTML", "CSS"]
  },
  {
    category: "Security",
    icon: <Shield className="w-6 h-6" />,
    items: ["OAuth", "JWT", "HTTPS", "Web Security"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Skills & Technologies</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
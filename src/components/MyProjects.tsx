import { useState } from 'react'
import ProjectCard from './ProjectCard'

type ProjectCategory = 'all' | 'react' | 'native' | 'aspnet' | 'django' | 'python' | 'blockchain'

const projects = [
  {
    id: 1,
    category: 'django',
    title: 'Secure File Transfer System',
    description: 'A secure file transfer application with end-to-end encryption, user authentication, and progress tracking for safe file sharing.',
    image: 'https://picsum.photos/400/240',
    githubLink: 'https://github.com/ndaedxo/Secure-File-Transfer-System.git',
    demoLink: '#',
    tags: ['Django', 'Python', 'Tailwind CSS', 'Alpine.js', 'Cryptography']
  },
  {
    id: 2,
    category: 'react',
    title: 'SalesPulse',
    description: 'Modern sales analytics dashboard providing comprehensive insights into sales performance, customer analysis, and team metrics.',
    image: 'https://picsum.photos/400/241',
    githubLink: 'https://github.com/ndaedxo/Web-Based-Sales-Analytics-Dashboard',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'HeadlessUI']
  },
  {
    id: 3,
    category: 'react',
    title: 'WeatherView',
    description: 'Real-time weather application providing current conditions and forecasts for cities worldwide with a modern, responsive interface.',
    image: 'https://picsum.photos/400/242',
    githubLink: 'https://github.com/ndaedxo/Weather-Forecast-App',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API']
  },
  {
    id: 4,
    category: 'django',
    title: 'ThriftStore',
    description: 'Full-stack e-commerce platform with features like product browsing, cart management, and secure payment processing.',
    image: 'https://picsum.photos/400/243',
    githubLink: 'https://github.com/ndaedxo/E-commerce-Web-App-2',
    demoLink: '#',
    tags: ['Django', 'React', 'PostgreSQL', 'RESTful API']
  },
  {
    id: 5,
    category: 'react',
    title: 'HabitForge',
    description: 'Modern habit tracking application helping users build and maintain positive habits through an engaging interface.',
    image: 'https://picsum.photos/400/244',
    githubLink: 'https://github.com/ndaedxo/habit-tracking-application',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage']
  },
  {
    id: 6,
    category: 'aspnet',
    title: 'Contract Monthly Claim System',
    description: 'Web-based platform streamlining claim management for lecturers and HR personnel with real-time notifications.',
    image: 'https://picsum.photos/400/245',
    githubLink: 'https://github.com/ndaedxo/Contract-Monthly-Claim-System-CMCS-',
    demoLink: '#',
    tags: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'SignalR']
  },
  {
    id: 7,
    category: 'blockchain',
    title: 'DIDBlockchain',
    description: 'Decentralized identity verification system using blockchain technology with Proof of Stake consensus mechanism.',
    image: 'https://picsum.photos/400/246',
    githubLink: 'https://github.com/ndaedxo/Blockchain',
    demoLink: '#',
    tags: ['Django', 'Blockchain', 'PoS', 'Python']
  },
  {
    id: 8,
    category: 'python',
    title: 'Simple Firewall',
    description: 'Python-based firewall application for blocking specific IP addresses and ports with real-time traffic monitoring.',
    image: 'https://picsum.photos/400/247',
    githubLink: 'https://github.com/ndaedxo/FirewallApp.git',
    demoLink: '#',
    tags: ['Python', 'Tkinter', 'Scapy', 'Network Security']
  },
  {
    id: 9,
    category: 'blockchain',
    title: 'DigiVerifyMe',
    description: 'Comprehensive identity verification platform using blockchain, zero-knowledge proofs, and decentralized key management.',
    image: 'https://picsum.photos/400/248',
    githubLink: 'https://github.com/ndaedxo/Decentralized-Identification-System',
    demoLink: '#',
    tags: ['Django', 'Blockchain', 'ZKP', 'PostgreSQL']
  },

  {
    id: 10,
    category: 'react',
    title: 'E-commerce Web App',
    description: 'A full-stack e-commerce web application built with React.js, Django, and PostgreSQL.',
    image: 'https://picsum.photos/400/240',
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 11,
    category: 'native',
    title: 'Budget Tracker App',
    description: 'A mobile app to track your expenses and manage your budget, developed using React Native.',
    image: 'https://picsum.photos/400/241',
    githubLink: '#',
    demoLink: '#',
  },
]

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">My Projects</h2>
      
      <div className="mb-6">
        <ul className="flex flex-wrap gap-4">
          {['all', 'react', 'native', 'aspnet', 'django', 'python', 'blockchain'].map((category) => (
            <li key={category}>
              <button 
                onClick={() => setActiveCategory(category as ProjectCategory)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'text-blue-500 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} Projects
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default MyProjects

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  link: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for business analytics and performance monitoring.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Angular", "D3.js", "Node.js", "MongoDB"],
      category: "frontend",
      link: "#"
    },
    {
      id: 3,
      title: "Content Management System",
      description: "Custom CMS solution for managing digital content with user roles and workflow capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"],
      category: "fullstack",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "API Integration Service",
      description: "Backend service that connects and manages data from multiple third-party APIs.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["Node.js", "Express", "Redis", "MongoDB"],
      category: "backend",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Progressive Web App",
      description: "Mobile-first web application with offline capabilities and app-like experience.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Workbox", "IndexedDB", "PWA"],
      category: "frontend",
      link: "#"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Scalable messaging platform with real-time communication features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
      category: "fullstack",
      link: "#",
      github: "#"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-1/2 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">Our Work</span>
          </div>
          <h2 className="section-heading mx-auto">Featured Projects</h2>
          <p className="mt-6 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            Explore our portfolio of web development projects showcasing our expertise across diverse domains.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-triaid-green text-triaid-dark font-medium'
                  : 'bg-triaid-gray/30 hover:bg-triaid-gray/50 text-triaid-light/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-triaid-gray/20 rounded-lg overflow-hidden card-hover border border-triaid-gray/40"
              style={{
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-triaid-dark/90 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end">
                  <div className="p-4 flex gap-3">
                    <a 
                      href={project.link} 
                      className="w-10 h-10 rounded-full bg-triaid-green/90 flex items-center justify-center text-triaid-dark hover:bg-triaid-green transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="w-10 h-10 rounded-full bg-triaid-gray/80 flex items-center justify-center text-triaid-light hover:bg-triaid-gray transition-colors"
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-triaid-dark/80 backdrop-blur-sm rounded-full text-xs text-triaid-light border border-triaid-gray/30">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-triaid-light/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-triaid-green/10 text-triaid-green rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

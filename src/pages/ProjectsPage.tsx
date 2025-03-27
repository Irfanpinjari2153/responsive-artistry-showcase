
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

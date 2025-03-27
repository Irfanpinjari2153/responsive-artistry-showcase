
import React from 'react';
import { Code2, Database, Globe, Server, Braces, Layers } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-triaid-gray/30 backdrop-blur-sm p-6 rounded-lg border border-triaid-gray/50 card-hover"
      style={{
        opacity: 0,
        animation: 'fade-in 0.5s ease-out forwards',
        animationDelay: `${delay}ms`
      }}
    >
      <div className="w-14 h-14 mb-5 bg-triaid-green/10 rounded-lg flex items-center justify-center text-triaid-green">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-triaid-light/70">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={30} />,
      title: "Web Development",
      description: "Custom websites with responsive design, optimized for performance and SEO to enhance your digital presence."
    },
    {
      icon: <Code2 size={30} />,
      title: "Web App Development",
      description: "Interactive and dynamic web applications with scalable architecture to meet your business requirements."
    },
    {
      icon: <Database size={30} />,
      title: "MEAN Stack",
      description: "End-to-end JavaScript solutions using MongoDB, Express.js, Angular, and Node.js for seamless application development."
    },
    {
      icon: <Braces size={30} />,
      title: "MERN Stack",
      description: "Modern web applications built with MongoDB, Express.js, React, and Node.js offering robust and scalable solutions."
    },
    {
      icon: <Layers size={30} />,
      title: "Frontend Development",
      description: "Intuitive user interfaces with cutting-edge frameworks and libraries that provide exceptional user experiences."
    },
    {
      icon: <Server size={30} />,
      title: "Backend Development",
      description: "Secure, efficient, and scalable server-side applications with RESTful APIs and database integration."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">What We Offer</span>
          </div>
          <h2 className="section-heading mx-auto">Our Services</h2>
          <p className="mt-6 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            We deliver comprehensive web development solutions that help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-triaid-gray/30 backdrop-blur-sm p-8 rounded-lg border border-triaid-gray/50 max-w-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-triaid-light/70 mb-6">
              We specialize in tailoring our development services to meet your specific business needs and objectives.
            </p>
            <button className="btn-primary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

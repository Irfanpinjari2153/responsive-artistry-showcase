
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Code, Users, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: "Irfan",
      role: "Co-Founder & Head of Growth and Product",
      image: "/placeholder.svg",
      icon: <Rocket className="h-5 w-5 text-triaid-green" />,
      description: "Leading our product strategy and business growth initiatives with over 10 years of experience in scaling digital products."
    },
    {
      name: "Sherya",
      role: "Co-Founder & Head of Brand",
      image: "/placeholder.svg",
      icon: <Star className="h-5 w-5 text-triaid-green" />,
      description: "Driving our brand identity and creative direction with expertise in digital marketing and user experience design."
    },
    {
      name: "Dev",
      role: "Co-Founder & Tech Lead",
      image: "/placeholder.svg",
      icon: <Code className="h-5 w-5 text-triaid-green" />,
      description: "Architecting our technical solutions with deep expertise in full-stack development and system architecture."
    },
    {
      name: "Kasif",
      role: "Co-Founder & Tech Lead",
      image: "/placeholder.svg",
      icon: <Code className="h-5 w-5 text-triaid-green" />,
      description: "Spearheading our backend infrastructure and DevOps practices with specialization in cloud technologies."
    }
  ];

  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <h1 className="section-heading mb-12">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-triaid-green">Our Story</h2>
            <p className="text-triaid-light/80">
              TRIAIDDEV was founded with a vision to deliver cutting-edge digital solutions that transform businesses. Our team of passionate developers, designers, and strategists work together to create exceptional web experiences that drive growth and innovation.
            </p>
            <p className="text-triaid-light/80">
              With years of experience in both frontend and backend technologies, we've helped numerous clients across various industries build their digital presence and streamline their operations through custom web applications.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-triaid-green">Our Approach</h2>
            <p className="text-triaid-light/80">
              We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. Our development process is transparent, iterative, and focused on delivering value at every stage.
            </p>
            <p className="text-triaid-light/80">
              Using modern technologies like MEAN and MERN stacks, we build scalable, secure, and performant applications that are designed to evolve with your business needs.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-triaid-green mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-triaid-light/80">We constantly explore new technologies and approaches to deliver innovative solutions.</p>
            </div>
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-triaid-light/80">We are committed to excellence in every aspect of our work, from code to client communication.</p>
            </div>
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-triaid-light/80">We maintain open and honest communication with our clients throughout the project lifecycle.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-24">
          <h2 className="section-heading mb-12">Our Team</h2>
          <p className="text-triaid-light/80 max-w-3xl mb-12">
            Meet the founding team behind TRIAIDDEV. With diverse expertise across product development, 
            branding, and technology, our leadership is committed to delivering exceptional solutions for our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-triaid-dark-light border-triaid-gray/20 overflow-hidden hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
                <div className="h-48 bg-triaid-gray/20 relative overflow-hidden flex items-center justify-center">
                  <Avatar className="h-32 w-32 border-4 border-triaid-green/20">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback className="bg-triaid-dark text-triaid-green text-2xl">
                      {founder.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {founder.icon}
                    <h3 className="font-bold text-xl">{founder.name}</h3>
                  </div>
                  <p className="text-sm text-triaid-green mb-4">{founder.role}</p>
                  <p className="text-sm text-triaid-light/70">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

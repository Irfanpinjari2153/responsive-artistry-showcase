
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
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
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

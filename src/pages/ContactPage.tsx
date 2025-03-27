
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

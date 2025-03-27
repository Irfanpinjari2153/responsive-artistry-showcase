
import React from 'react';
import Logo from './Logo';
import { Linkedin, Twitter, Github, Facebook, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Web Development",
    "Web App Development",
    "MEAN Stack",
    "MERN Stack",
    "Frontend Development",
    "Backend Development"
  ];
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-triaid-gray/10 pt-16 pb-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-triaid-green/30 to-transparent"></div>
      
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Logo className="mb-6" />
            <p className="text-triaid-light/70 mb-6">
              We specialize in creating innovative digital solutions that help businesses grow and succeed in the modern web landscape.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-triaid-gray/30 flex items-center justify-center text-triaid-light/80 hover:bg-triaid-green hover:text-triaid-dark transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-triaid-light/70 hover:text-triaid-green transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-triaid-green" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-triaid-light/70 hover:text-triaid-green transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-triaid-green" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <p className="text-triaid-light/70 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-triaid-green rounded-md flex items-center justify-center text-triaid-dark"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 mt-8 border-t border-triaid-gray/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-triaid-light/60 text-sm">
              &copy; {currentYear} TRIAIDDEV. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

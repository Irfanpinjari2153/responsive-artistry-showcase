
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-triaid-green/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        {/* Quick Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-triaid-gray/20 border border-triaid-gray/40 rounded-lg p-6 flex flex-col items-center text-center hover:bg-triaid-gray/30 transition-colors animate-fade-in">
            <div className="w-12 h-12 bg-triaid-green/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-triaid-green" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-triaid-light/70 mb-3">We'll respond within 24 hours</p>
            <a href="mailto:hello@triaiddev.com" className="text-triaid-green hover:underline">hello@triaiddev.com</a>
          </div>
          
          <div className="bg-triaid-gray/20 border border-triaid-gray/40 rounded-lg p-6 flex flex-col items-center text-center hover:bg-triaid-gray/30 transition-colors animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 bg-triaid-green/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-triaid-green" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-triaid-light/70 mb-3">Available Mon-Fri, 9am-6pm</p>
            <a href="tel:+15555555555" className="text-triaid-green hover:underline">+1 (555) 555-5555</a>
          </div>
          
          <div className="bg-triaid-gray/20 border border-triaid-gray/40 rounded-lg p-6 flex flex-col items-center text-center hover:bg-triaid-gray/30 transition-colors animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 bg-triaid-green/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-triaid-green" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-triaid-light/70 mb-3">Our office location</p>
            <address className="text-triaid-green not-italic">
              123 Tech Park, Suite 456<br />
              San Francisco, CA 94107
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

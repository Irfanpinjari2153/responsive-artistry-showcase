
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Here you would actually submit the form to your backend
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">Get in Touch</span>
          </div>
          <h2 className="section-heading mx-auto">Contact Us</h2>
          <p className="mt-6 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            Have a project in mind? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-triaid-gray/20 p-8 rounded-lg border border-triaid-gray/40 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-triaid-light/70 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-triaid-light/70 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-triaid-light/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-triaid-light/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-triaid-green text-triaid-dark font-bold rounded-md transition-all duration-300 hover:bg-triaid-green-dark flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-triaid-dark border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-triaid-green/10 rounded-lg flex items-center justify-center text-triaid-green mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:contact@triaiddev.com" className="text-triaid-light/70 hover:text-triaid-green transition-colors">
                      contact@triaiddev.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-triaid-green/10 rounded-lg flex items-center justify-center text-triaid-green mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-triaid-light/70 hover:text-triaid-green transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-triaid-green/10 rounded-lg flex items-center justify-center text-triaid-green mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-triaid-light/70">
                      123 Tech Boulevard<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-triaid-gray/20 p-6 rounded-lg border border-triaid-gray/40 animate-fade-in">
              <h3 className="text-lg font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-triaid-light/70 mb-4">
                Schedule a free consultation to discuss your project requirements.
              </p>
              <a href="#" className="inline-flex items-center text-triaid-green hover:underline gap-1 font-medium">
                <span>Book a consultation</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

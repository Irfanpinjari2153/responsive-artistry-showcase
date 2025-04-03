
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Cloud } from 'lucide-react';

const CloudOpsDevOpsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="CloudOps/DevOps"
          description="Streamlined infrastructure management, CI/CD pipelines, and cloud-native solutions for optimal application deployment."
          icon={<Cloud size={40} />}
          features={[
            "Infrastructure as Code (IaC)",
            "CI/CD pipeline implementation",
            "Container orchestration with Kubernetes",
            "Cloud cost optimization",
            "Automated scaling and load balancing",
            "Monitoring and logging solutions",
            "Disaster recovery planning"
          ]}
          benefits={[
            "Reduced time-to-market for applications",
            "Lower operational costs through automation",
            "Improved system reliability and uptime",
            "Enhanced security and compliance",
            "Scalable infrastructure that grows with your business",
            "Consistent deployment processes",
            "Faster recovery from failures"
          ]}
          process={[
            {
              step: "Infrastructure Assessment",
              description: "Evaluating your current infrastructure and identifying optimization opportunities."
            },
            {
              step: "DevOps Strategy",
              description: "Developing a tailored DevOps roadmap aligned with your business objectives."
            },
            {
              step: "Tool Selection",
              description: "Selecting the right combination of tools and platforms for your needs."
            },
            {
              step: "CI/CD Implementation",
              description: "Setting up automated pipelines for continuous integration and deployment."
            },
            {
              step: "Infrastructure Automation",
              description: "Implementing Infrastructure as Code for consistent provisioning."
            },
            {
              step: "Monitoring Setup",
              description: "Establishing comprehensive monitoring and alerting systems."
            },
            {
              step: "Knowledge Transfer",
              description: "Training your team on best practices and operational procedures."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CloudOpsDevOpsPage;

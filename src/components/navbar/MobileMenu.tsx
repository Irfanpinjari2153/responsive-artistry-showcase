
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, User, UserPlus, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface MobileMenuProps {
  menuOpen: boolean;
  navItems: Array<{ name: string; path: string; id: string }>;
  isHomePage: boolean;
  handleNavClick: (sectionId: string) => void;
  handleLogout: () => void;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  navItems,
  isHomePage,
  handleNavClick,
  handleLogout,
  setMenuOpen
}) => {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState('Services');
  
  // Service categories and their items
  const menuCategories = [
    {
      name: 'Services',
      items: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Web App Development', path: '/services/web-app-development' },
        { name: 'MEAN Stack', path: '/services/mean-stack' },
        { name: 'MERN Stack', path: '/services/mern-stack' },
        { name: 'Frontend', path: '/services/frontend' },
        { name: 'Backend', path: '/services/backend' },
        { name: 'CloudOps/DevOps', path: '/services/cloudops-devops' },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Documentation', path: '/resources/documentation' },
        { name: 'Tutorials', path: '/resources/tutorials' },
        { name: 'Blog', path: '/resources/blog' },
      ]
    },
    {
      name: 'Company',
      items: [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Projects', path: '/projects' },
      ]
    }
  ];

  return (
    <div 
      className={`fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col transition-all duration-500 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img 
            src="/lovable-uploads/4a6c77aa-5fd3-4192-9997-8725e2336bdb.png" 
            alt="Logo" 
            className="h-8" 
          />
        </Link>
        <button 
          onClick={() => setMenuOpen(false)}
          className="text-white p-2"
        >
          <X size={24} />
        </button>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex w-full border-b border-white/10">
        {menuCategories.map((category) => (
          <button
            key={category.name}
            className={`flex-1 py-4 px-2 text-center ${
              activeTab === category.name 
                ? 'bg-blue-500 text-white' 
                : 'bg-black text-white/70'
            }`}
            onClick={() => setActiveTab(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {menuCategories
          .filter(category => category.name === activeTab)
          .map((category) => (
            <div key={category.name} className="p-4">
              {category.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-5 px-4 text-white text-xl border-b border-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
      </div>
      
      {/* Authentication Links */}
      <div className="border-t border-white/10 p-4">
        {isAuthenticated ? (
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-white">
              <User size={20} />
              <span>{user?.name}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-white"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <Link 
              to="/login"
              className="flex items-center gap-2 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
            <Link 
              to="/signup"
              className="btn-primary flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <UserPlus size={20} />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

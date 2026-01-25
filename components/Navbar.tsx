import React from 'react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: Tab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 right-8 z-50 flex items-center gap-4">
      {/* Avatar Circle */}
      <div className="w-12 h-12 rounded-full border-2 border-theme-red/50 overflow-hidden shadow-[0_0_15px_rgba(255,77,77,0.3)] bg-black">
        <img 
          src="https://picsum.photos/id/64/200/200" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nav Pills */}
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${activeTab === item.id 
                ? 'bg-theme-red text-white shadow-[0_0_15px_rgba(255,77,77,0.5)]' 
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
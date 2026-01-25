import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { Tab } from '../types';

interface HomeProps {
    setTab: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ setTab }) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    // simple view counter logic using local storage
    const storedViews = localStorage.getItem('portfolio_views');
    let currentViews = storedViews ? parseInt(storedViews, 10) : 0;
    
    // Increment view count for this session/load (simulating live views)
    currentViews += 1;
    
    localStorage.setItem('portfolio_views', currentViews.toString());
    setViews(currentViews);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4">
      
      {/* Main Avatar */}
      <div className="relative group mb-8">
        <div className="absolute inset-0 bg-theme-red rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-theme-red/20 overflow-hidden relative z-10 shadow-2xl">
          <img 
            src="https://picsum.photos/id/64/500/500" 
            alt="ChroDev Avatar" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Available Badge */}
      <div className="flex items-center gap-2 bg-black/50 border border-theme-red/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-white font-medium text-sm">Available</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center tracking-tight">
        Hello I'm <span className="text-theme-red">ChroDev</span>
      </h1>

      {/* View Counter */}
      <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-6 py-2 rounded-full mb-10">
        <Eye className="w-5 h-5 text-gray-400" />
        <span className="text-white font-semibold">{views.toLocaleString()} Views</span>
      </div>

      {/* Contact CTA */}
      <button 
        onClick={() => setTab('contact')}
        className="group relative px-10 py-4 bg-theme-red rounded-full text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,77,77,0.4)] hover:shadow-[0_0_50px_rgba(255,77,77,0.6)]"
      >
        <span className="relative z-10">( Contact! )</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>

    </div>
  );
};

export default Home;
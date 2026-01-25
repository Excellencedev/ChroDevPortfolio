import React, { useState } from 'react';
import { Tab } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-theme-dark text-white relative font-sans selection:bg-theme-red selection:text-white overflow-x-hidden">
      <Background />
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {activeTab === 'home' && <Home setTab={setActiveTab} />}
        {activeTab === 'work' && <Work />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default App;
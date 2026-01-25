import React from 'react';
import { Gamepad2, Box, Sword } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      
      <div className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-4">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-16 text-center">
          Contact <span className="text-theme-red">Information</span>
        </h2>

        {/* Cards Container */}
        <div className="w-full max-w-3xl flex flex-col gap-6 mb-24">
          
          {/* Discord Card */}
          <div className="w-full bg-theme-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex items-center gap-8 hover:border-theme-red/30 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-theme-red/50 group-hover:shadow-[0_0_15px_rgba(255,77,77,0.2)] transition-all">
              <Gamepad2 className="w-8 h-8 text-theme-red" />
            </div>
            <div className="flex flex-col">
              <span className="text-theme-red font-bold text-sm tracking-widest mb-1">DISCORD</span>
              <span className="text-2xl md:text-3xl font-bold text-white">proezxd</span>
            </div>
          </div>

          {/* Specialization Card */}
          <div className="w-full bg-theme-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex items-center gap-8 hover:border-theme-red/30 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-theme-red/50 group-hover:shadow-[0_0_15px_rgba(255,77,77,0.2)] transition-all">
              <Box className="w-8 h-8 text-theme-red" />
            </div>
            <div className="flex flex-col">
              <span className="text-theme-red font-bold text-sm tracking-widest mb-1">SPECIALIZATION</span>
              <span className="text-2xl md:text-3xl font-bold text-white">Roblox 3D Modeling</span>
            </div>
          </div>

          {/* Services Card */}
          <div className="w-full bg-theme-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex items-center gap-8 hover:border-theme-red/30 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-theme-red/50 group-hover:shadow-[0_0_15px_rgba(255,77,77,0.2)] transition-all">
              <Sword className="w-8 h-8 text-theme-red" />
            </div>
            <div className="flex flex-col">
              <span className="text-theme-red font-bold text-sm tracking-widest mb-1">SERVICES</span>
              <span className="text-2xl md:text-3xl font-bold text-white">Custom Weapons, UGCs, Assets</span>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mb-16">
           <h3 className="text-3xl font-bold text-white mb-6">Ready to bring your ideas to life?</h3>
           <a 
             href="https://discord.com/users/1266592426370531432"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.6)] transition-all duration-300 transform hover:scale-105 inline-block"
           >
             Contact me on Discord
           </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <p className="text-gray-400 text-sm">
          &copy; 2026 <span className="text-theme-red">ChroDev</span>. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          frontend & backend by mineogo.<span className="text-theme-red mx-1">•</span>Roblox Modeler<span className="text-theme-red mx-1">•</span>3D Artist
        </p>
      </footer>

    </div>
  );
};

export default Contact;
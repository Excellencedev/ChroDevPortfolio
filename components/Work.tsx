import React, { useState, Suspense } from 'react';
import { Project } from '../types';
import { X, Loader2 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';

const projects: Project[] = [
  { id: 1, title: 'Crystal Greatsword', category: 'Weapons', imageUrl: 'https://picsum.photos/id/1/600/600' },
  { id: 2, title: 'Void Reaver', category: 'Weapons', imageUrl: 'https://picsum.photos/id/2/600/600' },
  { id: 3, title: 'Iron Pickaxe', category: 'Pickaxes', imageUrl: 'https://picsum.photos/id/3/600/600' },
  { id: 4, title: 'Golden Scythe', category: 'Weapons', imageUrl: 'https://picsum.photos/id/4/600/600' },
  { id: 5, title: 'Forest Axe', category: 'Assets', imageUrl: 'https://picsum.photos/id/5/600/600' },
  { id: 6, title: 'Cyber Hammer', category: 'Weapons', imageUrl: 'https://picsum.photos/id/6/600/600' },
];

// Placeholder 3D Model Component
// In a real scenario, you would replace this with:
// const { scene } = useGLTF(url);
// return <primitive object={scene} />;
const PlaceholderModel = ({ color = "#ff4d4d" }) => {
  return (
    <Sphere args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.2} 
        metalness={0.8} 
      />
    </Sphere>
  );
};

const Work: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Weapons' | 'Pickaxes'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-20 relative z-10 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-5xl font-bold mb-12 text-center">
        My <span className="text-theme-red">Works</span>
      </h2>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        {(['All', 'Weapons', 'Pickaxes'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-8 py-2.5 rounded-full font-semibold border transition-all duration-300
              ${filter === cat 
                ? 'bg-theme-red border-theme-red text-white shadow-[0_0_20px_rgba(255,77,77,0.4)]' 
                : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tip */}
      <p className="text-gray-500 italic mb-12 text-sm">
        <span className="text-theme-red font-bold">Tip:</span> Click on a project to view the 3D asset.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-square bg-theme-card rounded-3xl border border-white/5 overflow-hidden hover:border-theme-red/50 transition-colors duration-300 cursor-pointer"
          >
             {/* Fake 3D Environment Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>
            
            {/* Image (Thumbnail) */}
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0" 
            />

            {/* Hover overlay content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <h3 className="text-xl font-bold text-white">{project.title}</h3>
               <p className="text-theme-red text-sm font-medium">{project.category}</p>
            </div>

            {/* Central Glow on hover */}
            <div className="absolute inset-0 bg-theme-red/0 group-hover:bg-theme-red/5 transition-colors duration-300 z-10"></div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl bg-black border border-theme-red rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,77,77,0.2)] flex flex-col">
            
            {/* Header */}
            <div className="bg-[#ff4d4d] p-4 flex justify-center items-center relative z-20">
              <div className="text-center">
                 <h3 className="text-black text-xl font-extrabold">{selectedProject.title}</h3>
                 <p className="text-black/80 text-sm font-bold">{selectedProject.category}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-white transition-colors"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* 3D Viewport Area */}
            <div className="relative h-[60vh] w-full bg-[#050505]">
               <Suspense fallback={
                 <div className="absolute inset-0 flex items-center justify-center text-theme-red">
                   <Loader2 className="animate-spin w-8 h-8" />
                   <span className="ml-2">Loading Asset...</span>
                 </div>
               }>
                 <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    
                    {/* 
                      This Stage component gives a nice studio lighting setup automatically.
                      Replace <PlaceholderModel /> with your GLTF component.
                    */}
                    <Stage environment="city" intensity={0.6}>
                       <PlaceholderModel />
                    </Stage>

                    {/* Controls for 360 rotation and auto-rotation */}
                    <OrbitControls 
                      autoRotate 
                      autoRotateSpeed={4} 
                      enableZoom={true} 
                      makeDefault 
                      minPolarAngle={0} 
                      maxPolarAngle={Math.PI / 1.75}
                    />
                 </Canvas>
               </Suspense>

               <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                 <span className="text-gray-500 text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                   Drag to rotate • Scroll to zoom
                 </span>
               </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Work;
import React, { useMemo } from 'react';
import { ThemeColor } from '../types';

interface TreeProps {
  theme: ThemeColor;
  lightsOn: boolean;
  scale?: number;
  className?: string;
}

const Tree: React.FC<TreeProps> = ({ theme, lightsOn, scale = 1, className = '' }) => {
  
  // Theme configuration
  const themeStyles = useMemo(() => {
    switch (theme) {
      case ThemeColor.Frozen:
        return {
          leaves: 'from-slate-700 to-cyan-900',
          ornament1: 'bg-cyan-200', // Ice blue
          ornament2: 'bg-white',    // Snow
          ornament3: 'bg-blue-600', // Deep ocean
          lightColor: 'bg-blue-300',
          glow: 'shadow-[0_0_15px_rgba(147,197,253,0.8)]',
          starColor: '#CAF0F8'
        };
      case ThemeColor.Candy:
        return {
          leaves: 'from-emerald-400 to-teal-700',
          ornament1: 'bg-pink-400',   // Bubblegum
          ornament2: 'bg-yellow-300', // Lemon
          ornament3: 'bg-purple-400', // Grape
          lightColor: 'bg-fuchsia-300',
          glow: 'shadow-[0_0_15px_rgba(240,171,252,0.8)]',
          starColor: '#FF69B4'
        };
      case ThemeColor.Classic:
      default:
        return {
          leaves: 'from-green-600 to-green-900',
          ornament1: 'bg-red-600',    // Classic Red
          ornament2: 'bg-amber-400',  // Gold
          ornament3: 'bg-slate-200',  // Silver
          lightColor: 'bg-yellow-200',
          glow: 'shadow-[0_0_15px_rgba(253,224,71,0.8)]',
          starColor: '#FFD700'
        };
    }
  }, [theme]);

  // Generate positions for lights and ornaments statically
  const decorations = useMemo(() => {
    // 3 Layers of the tree with increased counts and dimensions
    const layers = [
      { width: 140, height: 110, y: 0, z: 30, count: 16 },
      { width: 200, height: 130, y: 70, z: 20, count: 24 },
      { width: 260, height: 150, y: 150, z: 10, count: 32 },
    ];

    return layers.map((layer, layerIdx) => {
        const layerDecor = [];
        for(let i = 0; i < layer.count; i++) {
            // Distribute items nicely within the triangle
            const localY = Math.random() * (layer.height * 0.8) + (layer.height * 0.15); 
            const widthAtY = layer.width * (localY / layer.height);
            const x = (Math.random() - 0.5) * widthAtY * 0.85; 
            
            const isLight = Math.random() > 0.6; // 40% lights, 60% ornaments
            const type = isLight ? 'light' : 'ornament';
            
            const ornamentVariant = Math.floor(Math.random() * 3) + 1;
            const shape = Math.random() > 0.85 ? 'diamond' : 'circle';
            const size = Math.random() * 6 + 10;
            const animationDelay = Math.random() * 2;
            
            layerDecor.push({ 
                x, 
                y: localY, 
                type, 
                ornamentVariant, 
                shape, 
                size, 
                animationDelay, 
                id: `${layerIdx}-${i}` 
            });
        }
        return { ...layer, items: layerDecor };
    });
  }, []);

  const getOrnamentClass = (variant: number) => {
      if (variant === 1) return themeStyles.ornament1;
      if (variant === 2) return themeStyles.ornament2;
      return themeStyles.ornament3;
  };

  return (
    <div 
        className={`relative flex flex-col items-center justify-center ${className}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
    >
      
      {/* Star */}
      <div className={`z-50 relative -mb-8 transition-all duration-700 ${lightsOn ? 'opacity-100 scale-110 drop-shadow-[0_0_25px_rgba(255,255,0,0.9)]' : 'opacity-80 scale-100'}`}>
        <svg width="70" height="70" viewBox="0 0 24 24" fill={themeStyles.starColor} className="animate-pulse">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
      </div>

      {/* Tree Layers */}
      <div className="relative flex flex-col items-center">
        {decorations.map((layer, idx) => (
          <div 
            key={idx}
            className={`relative flex justify-center items-end -mt-12`}
            style={{ zIndex: layer.z }}
          >
             {/* The Green Triangle Body */}
             <div 
                className="relative"
                style={{ 
                    width: `${layer.width}px`, 
                    height: `${layer.height}px`,
                }}
             >
                <div className={`absolute inset-0 w-full h-full clip-triangle bg-gradient-to-b ${themeStyles.leaves}`}
                     style={{
                         clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                     }}
                >
                     {/* Texture/Shine */}
                     <div className="absolute inset-0 bg-white opacity-10 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                     <div className="absolute inset-0 bg-black opacity-10 bg-[radial-gradient(circle_at_50%_100%,_var(--tw-gradient-stops))] from-black/50 to-transparent"></div>
                </div>

                {/* Decorations on this layer */}
                {layer.items.map((item) => (
                    <div
                        key={item.id}
                        className={`absolute transition-all duration-500`}
                        style={{
                            left: `calc(50% + ${item.x}px)`,
                            top: `${item.y}px`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 40
                        }}
                    >
                        {item.type === 'ornament' ? (
                            <div 
                                className={`
                                    shadow-sm ${getOrnamentClass(item.ornamentVariant)} shadow-black/30 flex items-center justify-center
                                    ${item.shape === 'diamond' ? 'rotate-45 rounded-sm' : 'rounded-full'}
                                `}
                                style={{
                                    width: `${item.size}px`,
                                    height: `${item.size}px`,
                                }}
                            >
                                {/* Reflection dot */}
                                <div className={`w-[30%] h-[30%] bg-white opacity-60 rounded-full ${item.shape === 'diamond' ? '-rotate-45' : ''}`}></div>
                            </div>
                        ) : (
                            <div 
                                className={`w-2 h-2 rounded-full transition-all duration-300
                                    ${lightsOn ? `${themeStyles.lightColor} ${themeStyles.glow} animate-twinkle` : 'bg-gray-600 opacity-50'}
                                `}
                                style={{ animationDelay: `${item.animationDelay}s` }}
                            />
                        )}
                    </div>
                ))}
             </div>
          </div>
        ))}
        
        {/* Trunk */}
        <div className="w-20 h-28 bg-gradient-to-b from-amber-800 to-amber-950 -mt-4 rounded-b-xl shadow-2xl relative z-0 flex justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_5px,#000_5px,#000_6px)]"></div>
        </div>

        {/* Tree Skirt / Shadow */}
        <div className="w-72 h-8 bg-black opacity-40 blur-xl rounded-[100%] absolute -bottom-4 z-[-1]"></div>
      </div>
      
      <style>{`
        .clip-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1.2); }
            50% { opacity: 0.3; transform: scale(0.8); }
        }
        .animate-twinkle {
            animation: twinkle 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Tree;
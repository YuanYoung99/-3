import React from 'react';
import Tree from './Tree';
import { ThemeColor } from '../types';

interface SceneProps {
  lightsOn: boolean;
  theme: ThemeColor;
}

// --- Character Components ---

const Pontipines = () => (
  <div className="group relative flex flex-col items-center">
      <div className="absolute -top-6 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
        The Pontipines
      </div>
      <div className="flex gap-[2px] items-end filter drop-shadow-sm">
        {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-3 h-6 bg-red-600 rounded-t-full relative flex justify-center">
            {/* Face */}
            <div className="absolute top-1 w-1.5 h-1.5 bg-pink-200 rounded-full"></div>
            {/* Body detail */}
            <div className="absolute bottom-1 w-full h-1 bg-red-800 opacity-20"></div>
        </div>
        ))}
    </div>
  </div>
);

const Character = ({ type, className = '', style = {} }: { type: string, className?: string, style?: React.CSSProperties }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`} style={style}>
      {/* Label on hover */}
      <div className="absolute -top-6 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
        {type}
      </div>

      {type === 'Igglepiggle' && (
        <div className="group relative">
          {/* Head */}
          <div className="w-14 h-16 bg-blue-400 rounded-full relative z-20 shadow-sm border border-blue-300/30">
             <div className="absolute top-5 left-3 w-1.5 h-1.5 bg-black/80 rounded-full"></div>
             <div className="absolute top-5 right-3 w-1.5 h-1.5 bg-black/80 rounded-full"></div>
             <div className="absolute top-9 left-5 w-4 h-2 border-b-2 border-black/50 rounded-full"></div>
             {/* Hair */}
             <div className="absolute -top-3 left-6 w-3 h-5 bg-red-400 -rotate-12 rounded-sm"></div>
          </div>
          {/* Body */}
          <div className="w-20 h-24 bg-blue-500 rounded-3xl -mt-2 relative z-10 flex justify-center">
             {/* Red Blanket */}
             <div className="absolute top-6 -right-6 w-12 h-28 bg-red-500 rotate-12 rounded-lg shadow-md origin-top hover:rotate-[15deg] transition-transform cursor-pointer"></div>
          </div>
          {/* Legs */}
          <div className="flex gap-2 -mt-2 ml-1">
            <div className="w-6 h-10 bg-blue-500 rounded-b-full"></div>
            <div className="w-6 h-10 bg-blue-500 rounded-b-full"></div>
          </div>
        </div>
      )}

      {type === 'Upsy Daisy' && (
        <div className="group relative">
           {/* Hair */}
           <div className="absolute -top-5 w-24 h-24 flex items-center justify-center animate-spin-slow">
              {[...Array(7)].map((_, i) => (
                  <div key={i} className="absolute w-3 h-6 bg-yellow-400 rounded-full origin-bottom border border-orange-500/20" style={{ transform: `rotate(${i * 51}deg) translateY(-14px)` }}></div>
              ))}
           </div>
           {/* Head */}
           <div className="w-14 h-14 bg-[#5c3a21] rounded-full relative z-20 border-2 border-yellow-300 box-content"></div>
           {/* Body */}
           <div className="w-16 h-20 bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-400 rounded-t-3xl -mt-1 relative z-10">
               <div className="absolute top-4 w-full flex justify-center gap-2">
                   <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
               </div>
               {/* Skirt */}
               <div className="absolute bottom-0 w-full h-8 bg-yellow-300 rounded-b-xl border-t border-orange-400"></div>
           </div>
           {/* Legs */}
           <div className="flex gap-2 ml-2">
               <div className="w-4 h-10 bg-pink-400 border-r border-black/10"></div>
               <div className="w-4 h-10 bg-orange-400 border-l border-black/10"></div>
           </div>
        </div>
      )}

      {type === 'Makka Pakka' && (
        <div className="group relative scale-90">
            {/* Head */}
            <div className="w-14 h-14 bg-[#ebdcc1] rounded-2xl relative z-20 flex justify-center shadow-inner">
                 <div className="absolute -top-2 w-4 h-4 bg-[#ebdcc1] rounded-full"></div>
                 <div className="absolute -top-1 -left-2 w-4 h-4 bg-[#ebdcc1] rounded-full"></div>
                 <div className="absolute -top-1 -right-2 w-4 h-4 bg-[#ebdcc1] rounded-full"></div>
                 <div className="absolute top-6 flex gap-4 opacity-70">
                     <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                     <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                 </div>
            </div>
            {/* Body */}
            <div className="w-20 h-22 bg-[#ebdcc1] rounded-3xl -mt-1 relative z-10 shadow-sm flex items-center justify-center flex-col gap-2 pt-2">
                 <div className="w-8 h-8 rounded-full border-2 border-[#dcc5a1]"></div>
            </div>
             {/* Legs */}
             <div className="flex gap-2 -mt-1 ml-1">
                <div className="w-7 h-8 bg-[#ebdcc1] rounded-b-xl"></div>
                <div className="w-7 h-8 bg-[#ebdcc1] rounded-b-xl"></div>
            </div>
        </div>
      )}

      {type === 'Haahoo' && (
        <div className="group relative animate-bounce" style={{ animationDuration: '6s' }}>
             <div className="w-32 h-32 bg-yellow-300/60 rounded-full opacity-80 blur-[2px] shadow-[0_0_30px_rgba(253,224,71,0.4)] flex items-center justify-center border-4 border-yellow-100/30">
                 <div className="text-6xl opacity-40 font-bold text-yellow-600">X</div>
             </div>
        </div>
      )}
    </div>
  );
};

// --- Decor Components ---

const Fireplace = () => (
    <div className="relative w-64 h-52 bg-stone-800 rounded-t-lg flex flex-col items-center shadow-2xl">
        {/* Mantle */}
        <div className="w-72 h-6 bg-[#3d2b1f] rounded-sm absolute -top-6 shadow-lg z-20 flex items-end justify-center">
            {/* Garland */}
            <div className="absolute -bottom-4 w-full flex justify-center">
                <div className="w-[110%] h-8 bg-green-800 rounded-b-full flex items-center justify-around px-2 shadow-md relative">
                    <div className="w-full h-full border-b-4 border-green-900/50 absolute top-0 rounded-b-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm z-10"></div>
                    <div className="w-3 h-3 bg-gold-400 rounded-full bg-yellow-400 shadow-sm z-10"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm z-10"></div>
                    <div className="w-3 h-3 bg-gold-400 rounded-full bg-yellow-400 shadow-sm z-10"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm z-10"></div>
                </div>
            </div>
        </div>
        
        {/* Bricks */}
        <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_12px)]"></div>
        
        {/* Firebox */}
        <div className="absolute bottom-0 w-40 h-32 bg-black rounded-t-full overflow-hidden flex justify-center items-end border-4 border-stone-700">
            <div className="absolute w-28 h-28 bg-orange-600 blur-2xl animate-pulse opacity-50"></div>
            <div className="w-6 h-16 bg-yellow-500 blur-md rounded-full animate-bounce delay-100"></div>
            <div className="w-6 h-20 bg-red-500 blur-md rounded-full animate-bounce delay-200"></div>
            <div className="w-6 h-14 bg-orange-400 blur-md rounded-full animate-bounce"></div>
            {/* Logs */}
            <div className="absolute bottom-4 w-28 h-6 bg-amber-900 rounded-full rotate-2"></div>
            <div className="absolute bottom-4 w-28 h-6 bg-amber-900 rounded-full -rotate-3"></div>
        </div>

        {/* Stockings */}
        <div className="absolute -top-4 left-6 w-8 h-14 bg-red-700 rounded-b-full border-t-8 border-white shadow-lg z-30 rotate-3"></div>
        <div className="absolute -top-4 right-16 w-8 h-14 bg-green-700 rounded-b-full border-t-8 border-white shadow-lg z-30 -rotate-2"></div>
        <div className="absolute -top-4 right-6 w-8 h-14 bg-blue-700 rounded-b-full border-t-8 border-white shadow-lg z-30 rotate-1"></div>
    </div>
);

const Wreath = () => (
    <div className="w-32 h-32 rounded-full border-[16px] border-green-800 bg-transparent shadow-xl relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[2px] border-green-600/50 border-dashed"></div>
        {/* Bow */}
        <div className="absolute bottom-0 w-8 h-8 bg-red-600 rounded-sm rotate-45 z-10 shadow-md"></div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-red-600">
             <div className="w-full h-full bg-red-700 clip-ribbon"></div>
        </div>
        {/* Berries */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-6 left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
    </div>
);

const Gift = ({ color, size = 'w-12 h-12', rotate = '0deg', ribbon = 'bg-yellow-400' }: { color: string, size?: string, rotate?: string, ribbon?: string }) => (
    <div className={`relative ${size} ${color} shadow-lg rounded-sm transition-transform hover:scale-105`} style={{ transform: `rotate(${rotate})` }}>
        <div className={`absolute inset-x-0 top-1/2 h-2 ${ribbon} -translate-y-1/2 opacity-90`}></div>
        <div className={`absolute inset-y-0 left-1/2 w-2 ${ribbon} -translate-x-1/2 opacity-90`}></div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-inherit rounded-full"></div>
    </div>
);

const PinkyPonk = () => (
    <div className="absolute top-16 right-[10%] animate-float z-20 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-48 h-28 bg-emerald-600/90 rounded-[50%] relative shadow-2xl border-2 border-pink-400 flex items-center justify-center">
             <div className="absolute top-4 left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
             <div className="absolute top-10 left-20 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-75"></div>
             <div className="absolute bottom-6 right-12 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-150"></div>
             
             {/* Fins */}
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-pink-300/50 rounded-full animate-spin-slow"></div>
             <div className="absolute -right-4 w-6 h-12 bg-emerald-700 rounded-r-full border-l border-pink-400"></div>

             {/* Basket */}
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-6 bg-amber-900 rounded-sm flex items-center justify-center">
                <div className="w-10 h-1 bg-black/30"></div>
             </div>
        </div>
        <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(1deg); }
                50% { transform: translateY(-15px) rotate(-1deg); }
            }
            .animate-float { animation: float 8s ease-in-out infinite; }
        `}</style>
    </div>
);

const NinkyNonk = () => (
    <div className="absolute bottom-[2%] z-50 animate-drive scale-90">
        <div className="flex gap-1 items-end filter drop-shadow-2xl">
             {/* Engine */}
             <div className="w-16 h-12 bg-red-600 rounded-t-2xl relative border-b-4 border-gray-800">
                <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute -top-4 left-2 w-4 h-8 bg-red-600"></div> 
                <div className="w-3 h-3 bg-white absolute top-4 left-2 rounded-full"></div>
             </div>
             {/* Green Carriage */}
             <div className="w-14 h-16 bg-green-600 rounded-t-full border-2 border-yellow-400 border-b-4 border-gray-800 relative overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-300 rounded-full"></div>
             </div>
             {/* Tiny House */}
             <div className="w-10 h-10 bg-yellow-500 rounded-sm border-b-4 border-gray-800 relative">
                 <div className="absolute -top-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-red-500 left-1/2 -translate-x-1/2"></div>
             </div>
             {/* Blue Carriage */}
             <div className="w-12 h-18 bg-blue-500 rounded-t-xl border-b-4 border-gray-800 relative">
                 <div className="absolute top-2 w-full h-2 bg-white/30"></div>
             </div>
        </div>
        <style>{`
            @keyframes drive {
                0% { transform: translateX(-200px); }
                100% { transform: translateX(120vw); }
            }
            .animate-drive { animation: drive 25s linear infinite; }
        `}</style>
    </div>
);

const Scene: React.FC<SceneProps> = ({ lightsOn, theme }) => {
  return (
    <div className="relative w-full h-[800px] md:h-[700px] overflow-hidden rounded-3xl shadow-2xl border-8 border-slate-900 bg-slate-900 group">
        
        {/* Room Background */}
        <div className="absolute inset-0 z-0 flex flex-col">
            {/* Wall */}
            <div className="h-[60%] w-full bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] relative">
                 {/* Window with snowy view */}
                 <div className="absolute top-12 left-10 w-32 h-48 bg-[#0f172a] border-8 border-stone-300 rounded-t-full overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
                      <div className="absolute top-4 right-8 w-12 h-12 bg-yellow-100 rounded-full blur-[2px] opacity-80"></div>
                      <div className="absolute bottom-0 w-full h-10 bg-white rounded-t-md opacity-20"></div> {/* Snow on sill */}
                      <div className="absolute top-1/2 w-full h-2 bg-stone-300 z-20"></div>
                      <div className="absolute left-1/2 h-full w-2 bg-stone-300 z-20"></div>
                 </div>
                 
                 {/* Wreath on Wall */}
                 <div className="absolute top-12 left-1/2 -translate-x-1/2 shadow-2xl">
                    <Wreath />
                 </div>

                 {/* Family Portrait */}
                 <div className="absolute top-16 right-16 w-28 h-36 bg-amber-900 p-2 shadow-xl transform rotate-3 border border-amber-800">
                      <div className="w-full h-full bg-[#fce7f3] flex flex-col items-center justify-center text-center p-1 overflow-hidden">
                          <div className="flex gap-1 mb-1">
                              <div className="w-2 h-4 bg-blue-400 rounded-full"></div>
                              <div className="w-2 h-4 bg-pink-400 rounded-full"></div>
                          </div>
                          <p className="text-[6px] text-amber-900 font-serif leading-tight">In The Night Garden</p>
                      </div>
                 </div>
            </div>
            
            {/* Floor */}
            <div className="h-[40%] w-full bg-[#4a3b32] relative overflow-hidden perspective-[500px]">
                 {/* Floorboards texture */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,#00000030_40px,#00000030_42px)] opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
            </div>
        </div>

        {/* --- SCENE CONTENT LAYERED --- */}

        {/* 1. Background Elements */}
        
        {/* Fireplace (Back Center) */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 z-10">
             <Fireplace />
        </div>

        {/* Floating Haahoos */}
        <div className="absolute top-[20%] right-[25%] z-0 scale-75 opacity-60">
             <Character type="Haahoo" />
        </div>
        <div className="absolute top-[25%] left-[25%] z-0 scale-50 opacity-40 animation-delay-2000">
             <Character type="Haahoo" />
        </div>
        
        {/* Pinky Ponk Airship */}
        <PinkyPonk />

        {/* 2. Middle Elements (Rug, Sofa, Trees) */}

        {/* Large Rug */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-red-900/80 rounded-[50%] blur-sm z-10 border-4 border-yellow-500/30 shadow-inner"></div>

        {/* Main Tree (Left) */}
        <div className="absolute bottom-[15%] left-2 md:left-10 z-20">
             <Tree theme={theme} lightsOn={lightsOn} scale={1.3} className="origin-bottom drop-shadow-2xl" />
        </div>
        
        {/* Small Tree (Right) */}
        <div className="absolute bottom-[20%] right-6 md:right-16 z-20">
             <Tree theme={theme} lightsOn={lightsOn} scale={0.8} className="origin-bottom drop-shadow-xl filter brightness-110" />
        </div>

        {/* Sofa (Center) */}
        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 z-20 w-80 h-40 group-hover:scale-[1.01] transition-transform duration-500">
             <div className="w-full h-full relative flex items-end">
                 {/* Backrest */}
                 <div className="absolute -top-12 left-0 w-full h-24 bg-red-800 rounded-t-3xl shadow-lg border-b border-red-900">
                    {/* Buttons */}
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-900 rounded-full shadow-inner opacity-50"></div>
                    <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-red-900 rounded-full shadow-inner opacity-50"></div>
                 </div>
                 {/* Base */}
                 <div className="w-full h-20 bg-red-700 rounded-b-xl shadow-xl flex relative">
                     {/* Cushions */}
                     <div className="w-1/2 h-24 -mt-4 bg-red-600 m-1 rounded-lg shadow-inner border border-red-500/20"></div>
                     <div className="w-1/2 h-24 -mt-4 bg-red-600 m-1 rounded-lg shadow-inner border border-red-500/20"></div>
                     
                     {/* Arms */}
                     <div className="absolute -left-6 bottom-0 w-10 h-28 bg-red-800 rounded-t-full shadow-lg"></div>
                     <div className="absolute -right-6 bottom-0 w-10 h-28 bg-red-800 rounded-t-full shadow-lg"></div>
                 </div>
             </div>
        </div>

        {/* 3. Characters & Foregound */}
        
        {/* Upsy Daisy - Sitting on Sofa Left */}
        <div className="absolute bottom-[28%] left-[42%] z-30 scale-90">
             <Character type="Upsy Daisy" />
        </div>

        {/* Igglepiggle - Sitting on Sofa Right */}
        <div className="absolute bottom-[29%] left-[53%] z-30 scale-95">
             <Character type="Igglepiggle" />
        </div>

        {/* Makka Pakka - Floor Left */}
        <div className="absolute bottom-[15%] left-[30%] z-40">
             <Character type="Makka Pakka" />
        </div>

        {/* Pontipines - On the Mantelpiece/Fireplace area, represented as sitting on the sofa arm or a table? 
            Let's put them on the floor on the right side, looking at the gifts */}
        <div className="absolute bottom-[18%] right-[28%] z-40">
            <Pontipines />
        </div>

        {/* MASSIVE Gift Pile - Center Floor */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-50 flex items-end justify-center">
            <div className="relative w-64 h-32 flex justify-center items-end">
                {/* Back row */}
                <div className="absolute bottom-10 -left-4"><Gift color="bg-purple-600" size="w-16 h-16" rotate="-5deg" /></div>
                <div className="absolute bottom-12 left-10"><Gift color="bg-blue-600" size="w-20 h-20" /></div>
                <div className="absolute bottom-8 right-6"><Gift color="bg-green-600" size="w-18 h-18" rotate="5deg" ribbon="bg-red-500" /></div>
                
                {/* Front row */}
                <div className="absolute bottom-0 -left-10"><Gift color="bg-red-600" size="w-14 h-14" rotate="-10deg" /></div>
                <div className="absolute bottom-0 left-4 z-10"><Gift color="bg-yellow-500" size="w-12 h-12" ribbon="bg-red-500" /></div>
                <div className="absolute bottom-0 right-14"><Gift color="bg-pink-500" size="w-16 h-10" rotate="0deg" /></div>
                <div className="absolute bottom-0 -right-8"><Gift color="bg-teal-500" size="w-14 h-14" rotate="10deg" ribbon="bg-white" /></div>

                {/* Top scatter */}
                <div className="absolute bottom-24 left-8 z-20"><Gift color="bg-orange-400" size="w-10 h-10" rotate="15deg" /></div>
            </div>
        </div>

        {/* Ninky Nonk - Passing in VERY front */}
        <NinkyNonk />

        {/* Atmosphere Overlay */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${lightsOn ? 'opacity-40' : 'opacity-70'}`}>
            <div className="w-full h-full bg-radial-gradient from-transparent via-transparent to-black"></div>
            {/* Warm glow from fireplace */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

    </div>
  );
};

export default Scene;
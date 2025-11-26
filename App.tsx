import React, { useState } from 'react';
import Scene from './components/Scene';
import Snowfall from './components/Snowfall';
import { ThemeColor, GreetingState } from './types';
import { generateChristmasGreeting } from './services/geminiService';

const App: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(true);
  const [theme, setTheme] = useState<ThemeColor>(ThemeColor.Classic);
  const [name, setName] = useState('');
  const [greetingState, setGreetingState] = useState<GreetingState>({
    text: '',
    loading: false,
    error: null,
  });

  const handleGenerateGreeting = async () => {
    if (!name.trim()) return;

    setGreetingState({ text: '', loading: true, error: null });
    try {
      const tone = theme === ThemeColor.Frozen ? 'magical and icy' : 
                   theme === ThemeColor.Candy ? 'playful and sweet' : 'warm and cozy';
      
      const greeting = await generateChristmasGreeting(name, tone);
      setGreetingState({ text: greeting, loading: false, error: null });
    } catch (e) {
      setGreetingState({ text: '', loading: false, error: "Oops! The elves are busy. Try again." });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans selection:bg-pink-500 selection:text-white pb-10">
      <Snowfall />

      <div className="relative z-10 container mx-auto px-4 pt-6 flex flex-col items-center max-w-6xl">
        
        {/* Header */}
        <header className="text-center mb-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]">
               In the Night Garden Christmas
            </h1>
            <p className="text-slate-400 text-sm">A festive gathering with friends</p>
          </div>
          
          <div className="flex gap-2">
             <button 
                onClick={() => setLightsOn(!lightsOn)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${lightsOn ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.6)]' : 'bg-slate-700 text-slate-300'}`}
             >
                {lightsOn ? 'Lights ON' : 'Lights OFF'}
             </button>
             <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeColor)}
                className="bg-slate-800 border border-slate-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
             >
                <option value={ThemeColor.Classic}>Classic Theme</option>
                <option value={ThemeColor.Frozen}>Frozen Theme</option>
                <option value={ThemeColor.Candy}>Candy Theme</option>
             </select>
          </div>
        </header>

        {/* Main Scene */}
        <Scene lightsOn={lightsOn} theme={theme} />

        {/* Greeting Section (Below Scene) */}
        <div className="w-full max-w-2xl mt-8 bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-6 items-center shadow-2xl">
            <div className="flex-1 w-full">
                <label className="text-xs uppercase tracking-wider text-slate-400 mb-2 block">Send a Greeting from the Garden</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Your Name..." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 bg-black/40 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerateGreeting()}
                    />
                    <button
                        onClick={handleGenerateGreeting}
                        disabled={greetingState.loading || !name.trim()}
                        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold px-6 py-2 rounded-lg disabled:opacity-50 transition-all shadow-lg"
                    >
                        {greetingState.loading ? '...' : 'Generate'}
                    </button>
                </div>
            </div>
            
            {/* Result Display */}
            <div className="flex-1 w-full min-h-[80px] flex items-center justify-center border-l border-white/10 pl-6 border-t md:border-t-0 pt-4 md:pt-0">
                 {greetingState.text ? (
                     <div className="text-center animate-fade-in">
                        <p className="text-yellow-100 font-serif italic text-lg leading-snug">"{greetingState.text}"</p>
                        <span className="text-xs text-slate-400 mt-1 block">- The Garden Babies</span>
                     </div>
                 ) : (
                     <p className="text-slate-500 text-sm italic">Enter your name to receive a magical message...</p>
                 )}
                 {greetingState.error && <p className="text-red-400 text-sm">{greetingState.error}</p>}
            </div>
        </div>

      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
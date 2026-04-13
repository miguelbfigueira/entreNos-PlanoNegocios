import React, { useState } from 'react';
import { Music, X, Minus } from 'lucide-react';

export const BackgroundMusic = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-[100] transition-all duration-300 ${isMinimized ? 'w-auto' : 'w-[350px] max-w-[calc(100vw-3rem)]'}`}>
      {!isMinimized ? (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="p-4 bg-gradient-to-r from-brand-teal/10 to-brand-pink/10 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-brand-dark text-sm mb-1 flex items-center gap-2">
                <Music size={14} className="text-brand-teal" />
                Banda Sonora
              </h3>
              <p className="text-xs text-brand-dark/80 leading-relaxed">
                Veja o Plano de negócios do Entre Nós enquanto ouve a nossa playlist
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1.5 hover:bg-white/60 rounded-full transition-colors text-brand-dark/60 hover:text-brand-dark"
                title="Minimizar"
              >
                <Minus size={14} />
              </button>
              <button 
                onClick={() => setIsClosed(true)}
                className="p-1.5 hover:bg-white/60 rounded-full transition-colors text-brand-dark/60 hover:text-brand-pink"
                title="Fechar"
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <div className="p-2 bg-white">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/4FJmXdQCbVLf2LLRpEX1Oj?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={false} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 pr-5 rounded-full shadow-2xl border border-gray-200 transition-all hover:shadow-brand-teal/20 hover:scale-105 group animate-in zoom-in fade-in duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-teal text-white shadow-md group-hover:bg-brand-pink transition-colors">
            <Music size={20} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-brand-dark leading-none">Banda Sonora</span>
            <span className="text-[10px] text-brand-dark/60 mt-1">Ouvir Playlist</span>
          </div>
        </button>
      )}
    </div>
  );
};

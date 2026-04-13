import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Search, Loader2, Sparkles } from 'lucide-react';

// Import raw source code to provide dynamic context to the AI
import appRaw from '../App.tsx?raw';
import execRaw from './ExecutiveSummary.tsx?raw';
import finRaw from './Financials.tsx?raw';
import landRaw from './LandscapeChart.tsx?raw';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const AISearch = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const siteContext = `
        App.tsx:
        ${appRaw}
        
        ExecutiveSummary.tsx:
        ${execRaw}
        
        Financials.tsx:
        ${finRaw}
        
        LandscapeChart.tsx:
        ${landRaw}
      `;

      const prompt = `You are an AI assistant for investors looking at the "Entre Nós" business plan website. 
      Answer the following question from an investor in Portuguese, keeping it professional, concise, and persuasive.
      
      CRITICAL RULE: You MUST ONLY use the information provided in the "Site Source Code" below. The source code contains all the text and data currently on the website. If the answer to the user's question cannot be found or inferred from the "Site Source Code", you MUST reply that you don't have that information. Do NOT use external knowledge.
      
      Site Source Code:
      ${siteContext}
      
      Question: ${query}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setAnswer(response.text || 'Não foi possível gerar uma resposta. Tente novamente.');
    } catch (error) {
      console.error('Error generating AI response:', error);
      setAnswer('Ocorreu um erro ao processar a sua pergunta. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-light/50 rounded-3xl p-8 border border-brand-teal/20 shadow-sm mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-brand-teal/10 p-2 rounded-lg text-brand-teal">
          <Sparkles size={24} />
        </div>
        <h3 className="text-2xl font-bold text-brand-dark">Pergunte à IA sobre o nosso Plano</h3>
      </div>
      
      <form onSubmit={handleSearch} className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: Qual é a principal vantagem competitiva do Entre Nós?"
          className="w-full pl-5 pr-14 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-lg bg-white shadow-sm transition-all"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-teal text-white rounded-xl hover:bg-brand-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Search size={24} />}
        </button>
      </form>

      {answer && (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink shrink-0 mt-1">
              <Sparkles size={20} />
            </div>
            <div className="prose prose-brand text-brand-dark/80 leading-relaxed">
              {answer.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-2 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

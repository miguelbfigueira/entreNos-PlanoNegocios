import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUp, ArrowDown, ArrowLeft } from 'lucide-react';

const nodes = [
  // Quadrante Superior Esquerdo (Alta Credibilidade, Baixa Interação)
  { id: '1', name: 'Contraceção.pt', x: 25, y: 85, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm' },
  { id: '2', name: 'ILGA.pt', x: 40, y: 78, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm' },
  { id: '3', name: 'globalpartnershipforum.com', x: 15, y: 70, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-xs' },
  { id: '4', name: 'goaskalice.columbia.edu', x: 35, y: 62, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-xs' },
  { id: '5', name: 'scarleteen.com', x: 20, y: 55, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm' },
  { id: '6', name: 'iwannaknow.org', x: 45, y: 52, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm' },
  { id: '7', name: 'Sexualidade em Linha', x: 15, y: 92, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm font-bold' },
  { id: '8', name: 'O dispositivo 3.1.', x: 35, y: 95, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-sm font-bold' },

  // Quadrante Superior Direito (Alta Credibilidade, Alta Interação)
  { id: '9', name: 'Cuida-te +', x: 75, y: 88, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-2xl font-black' },
  { id: '10', name: 'APF', x: 60, y: 80, category: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', size: 'text-lg font-bold' },
  { id: '11', name: 'Clue / Natural Cycles', x: 85, y: 75, category: 'Apps de Saúde', color: 'bg-[#735099]', size: 'text-lg font-bold' },
  { id: '12', name: 'ChatGPT+', x: 70, y: 60, category: 'Assistentes Digitais', color: 'bg-[#E9608B]', size: 'text-xl font-black' },

  // Quadrante Inferior Direito (Baixa Credibilidade, Alta Interação)
  { id: '13', name: 'TikTok+', x: 85, y: 30, category: 'Redes Sociais', color: 'bg-[#281cb0]', size: 'text-2xl font-black' },
  { id: '14', name: 'Instagram', x: 65, y: 20, category: 'Redes Sociais', color: 'bg-[#281cb0]', size: 'text-lg font-bold' },
  { id: '15', name: 'Reddit+', x: 80, y: 15, category: 'Comunidades', color: 'bg-[#F59E0B]', size: 'text-xl font-black' },
];

const categories = [
  { name: 'Plataformas Educativas', color: 'bg-[#3EB4B3]', textColor: 'text-[#3EB4B3]' },
  { name: 'Apps de Saúde', color: 'bg-[#735099]', textColor: 'text-[#735099]' },
  { name: 'Assistentes Digitais', color: 'bg-[#E9608B]', textColor: 'text-[#E9608B]' },
  { name: 'Redes Sociais', color: 'bg-[#281cb0]', textColor: 'text-[#E9608B]' },
  { name: 'Comunidades', color: 'bg-[#F59E0B]', textColor: 'text-[#F59E0B]' },
];

export const LandscapeChart = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="w-full bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
      
      {/* Soft Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3EB4B3]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E9608B]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0f172a] relative z-10 tracking-tight">
        Landscape Digital
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-10 relative z-10">
        {/* Legend */}
        <div className="lg:w-1/4">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-6 rounded-3xl shadow-sm">
            <h4 className="text-gray-400 font-bold mb-5 text-xs uppercase tracking-widest">Categorias</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                  className={`flex items-center gap-3 w-full text-left p-2.5 rounded-xl transition-all duration-300 ${
                    activeCategory === cat.name ? 'bg-gray-50 shadow-inner' : 'hover:bg-gray-50'
                  } ${activeCategory && activeCategory !== cat.name ? 'opacity-40 grayscale' : 'opacity-100'}`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full shrink-0 ${cat.color} shadow-sm`} />
                  <span className={`text-sm font-semibold text-gray-700`}>{cat.name}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3 p-2 bg-gray-50 rounded-xl">
                <span className="text-xl font-black text-[#0f172a] leading-none">+</span>
                <span className="text-xs font-medium text-gray-600 leading-relaxed">Plataformas com maior adoção pelos jovens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="lg:w-3/4 h-[600px] relative bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          
          {/* Axes */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Y Axis Line */}
            <div className="absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform -translate-x-1/2 border-l border-dashed border-gray-300"></div>
            {/* X Axis Line */}
            <div className="absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2 border-t border-dashed border-gray-300"></div>
            
            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-white"></div>
          </div>

          {/* Axis Labels */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
            <span className="text-xs font-bold tracking-widest uppercase mb-1">Alta Credibilidade</span>
            <ArrowUp size={14} className="opacity-50" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
            <ArrowDown size={14} className="opacity-50 mb-1" />
            <span className="text-xs font-bold tracking-widest uppercase">Baixa Credibilidade</span>
          </div>
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500">
            <ArrowLeft size={14} className="opacity-50" />
            <span className="text-xs font-bold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Baixa Interação</span>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Alta Interação</span>
            <ArrowRight size={14} className="opacity-50" />
          </div>

          {/* Nodes */}
          <div className="absolute inset-12">
            {nodes.map((node) => {
              const isFaded = activeCategory && activeCategory !== node.category;
              const isHovered = hoveredNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${isFaded ? 'opacity-10 scale-90 blur-[1px]' : 'opacity-100 hover:scale-110 hover:z-50'}`}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${100 - node.y}%`,
                    zIndex: isHovered ? 50 : 10
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isFaded ? 0.1 : 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
                >
                  {/* Node Point & Text */}
                  <div className="relative flex flex-col items-center justify-center group">
                    <div className={`w-3 h-3 rounded-full ${node.color} shadow-md relative z-10 border-2 border-white transition-transform ${isHovered ? 'scale-150' : ''}`}></div>
                    
                    <div className={`mt-2 whitespace-nowrap text-[#0f172a] ${node.size} transition-all duration-300 ${isHovered ? 'drop-shadow-md font-black' : 'opacity-80'}`}>
                      {node.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

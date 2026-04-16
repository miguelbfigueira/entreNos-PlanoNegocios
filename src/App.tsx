import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MessageCircle, TrendingUp, Users, Target, Zap, 
  ShieldCheck, Smartphone, PieChart, ArrowRight, ChevronDown, 
  Menu, X, CheckCircle2, BarChart3, Globe, Rocket, Share2, Award,
  Activity, Pill, AlertTriangle, Lightbulb, Lock, Bot, Scale, BookOpen, ShieldAlert,
  ChevronLeft, ChevronRight, Eye, Server, Code, Cpu, Layout, Stethoscope, Accessibility, Home,
  Phone, Clock, Monitor, Cloud, ArrowLeft
} from 'lucide-react';
import { LandscapeChart } from './components/LandscapeChart';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { BackgroundMusic } from './components/BackgroundMusic';
import { Financials } from './components/Financials';

const NavLogo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 200 120" className="w-10 h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="leftBubble" d="M120,55 C120,82 93,105 60,105 C48,105 37,101 28,95 L5,110 L12,87 C4,78 0,67 0,55 C0,28 27,5 60,5 C93,5 120,28 120,55 Z" />
        <path id="rightBubble" d="M80,55 C80,28 107,5 140,5 C173,5 200,28 200,55 C200,67 196,78 188,87 L195,110 L172,95 C163,101 152,105 140,105 C107,105 80,82 80,55 Z" />
        <clipPath id="intersect">
          <use href="#leftBubble" />
        </clipPath>
      </defs>
      <use href="#leftBubble" fill="#E9608B" />
      <use href="#rightBubble" fill="#3EB4B3" />
      <use href="#rightBubble" fill="#735099" clipPath="url(#intersect)" />
      <path d="M100,68 L88,56 C82,50 82,41 88,36 C93,31 100,34 100,42 C100,34 107,31 112,36 C118,41 118,50 100,68 Z" fill="white" />
    </svg>
    <span className="text-brand-dark font-bold text-xl tracking-tight">Entre Nós</span>
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ChapterNavigation = ({ prev, next, setActiveChapter }: { prev?: {id: string, name: string}, next?: {id: string, name: string}, setActiveChapter: (id: string) => void }) => (
  <div className="mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200/50 pt-8">
    {prev ? (
      <button onClick={() => { setActiveChapter(prev.id); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-dark font-bold rounded-full border border-gray-200 hover:border-brand-teal hover:text-brand-teal transition-colors shadow-sm">
        <ArrowLeft size={20} /> Voltar para {prev.name}
      </button>
    ) : <div className="hidden sm:block"></div>}
    
    {next ? (
      <button onClick={() => { setActiveChapter(next.id); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-teal transition-colors shadow-lg">
        Continuar para {next.name} <ArrowRight size={20} />
      </button>
    ) : <div className="hidden sm:block"></div>}
  </div>
);

const StoryPopup = ({ onClose }: { onClose: () => void }) => {
  const [page, setPage] = useState(0);

  const pages = [
    { text: "Temos uma história para vos contar" },
    { text: "O João é um adolescente de 17 anos que pretende iniciar a sua vida sexual com o seu namorado Carlos." },
    { text: "O João tem muitas dúvidas sobre sexualidade e sabe que os TikToks que vê e o ChatGPT não são fontes confiáveis." },
    { text: "Além disso, o João não se quer expor." },
    { text: "A história do joão é a história de milhares de jovens e adolescentes em Portugal" },
    { text: "O João pensa que tem um problema, o que o João não sabe é que nós temos a solução." }
  ];

  const isLastPage = page === pages.length - 1;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-[2rem] overflow-hidden max-w-3xl w-full flex flex-col shadow-2xl relative min-h-[450px] md:min-h-[500px]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink via-purple-400 to-brand-pink"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col relative z-10">
          <button onClick={onClose} className="absolute top-6 right-6 text-brand-dark/40 hover:text-brand-dark transition-colors bg-gray-50 hover:bg-gray-100 rounded-full p-2">
            <X size={24} />
          </button>
          
          <div className="flex gap-2 mb-8 max-w-md mx-auto w-full mt-4">
            {pages.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i === page ? 'bg-brand-pink scale-y-110' : 'bg-gray-200'}`} />
            ))}
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center max-w-2xl mx-auto flex flex-col items-center"
              >
                <p className="font-bold text-brand-dark leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl">
                  {pages[page].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-12 pt-4">
            <button 
              onClick={() => setPage(Math.max(0, page - 1))}
              className={`p-3 rounded-full border border-brand-dark/10 hover:bg-gray-50 transition-colors ${page === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronLeft size={28} />
            </button>
            
            {isLastPage ? (
              <button 
                onClick={onClose}
                className="px-8 py-4 bg-gradient-brand text-white font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 text-lg"
              >
                Venha descobrir como pode você também ajudar o João <ArrowRight size={24} className="shrink-0" />
              </button>
            ) : (
              <button 
                onClick={() => setPage(Math.min(pages.length - 1, page + 1))}
                className="p-3 rounded-full bg-brand-dark text-white hover:bg-brand-dark/90 transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FlyerMockup = ({ type }: { type: number, key?: React.Key }) => {
  if (type === 1) return (
    <div className="w-64 aspect-[9/16] bg-[#FFF3D9] rounded-xl shadow-lg overflow-hidden relative flex-shrink-0 border border-black/10 flex flex-col items-center py-8 px-4">
      <div className="absolute inset-0 opacity-20 flex items-center justify-center"><Heart size={200} className="text-[#E9608B] fill-[#E9608B]" /></div>
      <div className="text-[10px] text-[#E9608B] font-bold tracking-widest mb-2 z-10">• DIA INTERNACIONAL •</div>
      <div className="text-4xl font-black text-[#E9608B] leading-none mb-2 text-center z-10">SAÚDE<br/>SEXUAL</div>
      <div className="text-[10px] text-[#E9608B] font-bold tracking-widest mb-8 z-10">• 4 SETEMBRO •</div>
      
      <div className="text-[8px] text-[#E9608B] font-bold mb-2 z-10">TODA A INFORMAÇÃO<br/>QUE PRECISAS</div>
      <div className="w-24 h-24 bg-white p-1.5 rounded-md shadow-sm z-10 mb-4">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgMTBoMzB2MzBIMTB6bTUwIDBoMzB2MzBINjB6TTEwIDYwaDMwdjMwSDEwem01MCAwaDEwdjEwSDYwem0yMCAwaDEwdjEwSDgwem0tMjAgMjBoMTB2MTBINjB6bTIwIDBoMTB2MTBMODAgODB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-cover opacity-90"></div>
      </div>
      <div className="bg-[#E9608B] text-white px-4 py-2 rounded-sm font-bold text-[10px] text-center z-10 shadow-md">JUNTA-TE A ESTA<br/>COMUNIDADE</div>
      
      <div className="mt-auto z-10 flex flex-col items-center">
        <div className="flex items-center gap-1 mb-2">
           <div className="w-4 h-3 bg-[#E9608B] rounded-l-full"></div>
           <div className="w-4 h-3 bg-[#3EB4B3] rounded-r-full"></div>
        </div>
        <div className="text-[8px] text-[#E9608B] font-bold">www.entrenos.pt</div>
      </div>
    </div>
  );

  if (type === 2) return (
    <div className="w-64 aspect-[9/16] bg-[#FFD6E8] rounded-xl shadow-lg overflow-hidden relative flex-shrink-0 border border-black/10 flex flex-col items-center py-8 px-4">
      <div className="text-[10px] text-[#D81B60] font-bold tracking-widest mb-1 z-10">4 SETEMBRO</div>
      <div className="text-[10px] text-[#D81B60] font-bold tracking-widest mb-2 z-10">DIA INTERNACIONAL</div>
      <div className="text-3xl font-black text-[#D81B60] leading-none mb-8 text-center z-10">SAÚDE<br/>SEXUAL</div>
      
      <div className="relative w-full flex justify-center items-center mb-8 z-10">
        <Heart size={120} className="text-white fill-white drop-shadow-md" />
        <div className="absolute flex gap-2">
          <div className="w-8 h-8 rounded-full border-4 border-[#3EB4B3]"></div>
          <div className="w-8 h-8 rounded-full border-4 border-[#E9608B]"></div>
        </div>
      </div>

      <div className="w-24 h-24 bg-white p-1.5 rounded-md shadow-sm z-10 mb-4">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgMTBoMzB2MzBIMTB6bTUwIDBoMzB2MzBINjB6TTEwIDYwaDMwdjMwSDEwem01MCAwaDEwdjEwSDYwem0yMCAwaDEwdjEwSDgwem0tMjAgMjBoMTB2MTBINjB6bTIwIDBoMTB2MTBMODAgODB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-cover opacity-90"></div>
      </div>
      <div className="bg-[#FF6B9E] text-white px-4 py-2 rounded-sm font-bold text-[10px] text-center z-10 shadow-md">JUNTA-TE A ESTA<br/>COMUNIDADE</div>
    </div>
  );

  if (type === 3) return (
    <div className="w-64 aspect-[9/16] bg-[#F3E8FF] rounded-xl shadow-lg overflow-hidden relative flex-shrink-0 border border-black/10 flex flex-col items-center py-12 px-4">
      <div className="absolute top-0 left-0 w-full h-32 bg-white/40 rounded-b-full -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white/40 rounded-t-full translate-y-16"></div>
      
      <div className="text-[12px] text-[#735099] font-bold tracking-widest mb-2 z-10">4 SETEMBRO</div>
      <div className="text-[14px] text-[#FF6B9E] font-bold tracking-widest mb-1 z-10 text-center">DIA INTERNACIONAL</div>
      <div className="text-4xl font-black text-[#D81B60] leading-none mb-12 text-center z-10">SAÚDE<br/>SEXUAL</div>
      
      <div className="w-24 h-24 bg-white p-1.5 rounded-md shadow-sm z-10 mb-4">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgMTBoMzB2MzBIMTB6bTUwIDBoMzB2MzBINjB6TTEwIDYwaDMwdjMwSDEwem01MCAwaDEwdjEwSDYwem0yMCAwaDEwdjEwSDgwem0tMjAgMjBoMTB2MTBINjB6bTIwIDBoMTB2MTBMODAgODB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-cover opacity-90"></div>
      </div>
      <div className="bg-[#A78BFA] text-white px-6 py-3 rounded-sm font-bold text-[10px] text-center z-10 shadow-md">JUNTA-TE A ESTA<br/>COMUNIDADE</div>
    </div>
  );

  return (
    <div className="w-64 aspect-[9/16] bg-white rounded-xl shadow-lg overflow-hidden relative flex-shrink-0 border border-black/10 flex flex-col items-center py-8 px-4">
      <div className="text-[10px] text-[#735099] font-bold tracking-widest mb-2 z-10">4 SETEMBRO</div>
      <div className="text-[12px] text-[#FF6B9E] font-bold tracking-widest mb-1 z-10 text-center">DIA INTERNACIONAL</div>
      <div className="text-4xl font-black text-[#D81B60] leading-none mb-6 text-center z-10">SAÚDE<br/>SEXUAL</div>
      
      <div className="relative w-full flex justify-center items-center mb-6 z-10">
        <Heart size={140} className="text-[#FF6B9E] fill-[#FF6B9E] drop-shadow-lg" />
      </div>

      <div className="w-24 h-24 bg-white p-1.5 rounded-md shadow-sm z-10 mb-4 border border-gray-100">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgMTBoMzB2MzBIMTB6bTUwIDBoMzB2MzBINjB6TTEwIDYwaDMwdjMwSDEwem01MCAwaDEwdjEwSDYwem0yMCAwaDEwdjEwSDgwem0tMjAgMjBoMTB2MTBINjB6bTIwIDBoMTB2MTBMODAgODB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-cover opacity-90"></div>
      </div>
      <div className="bg-[#A78BFA] text-white px-6 py-3 rounded-sm font-bold text-[10px] text-center z-10 shadow-md">JUNTA-TE A ESTA<br/>COMUNIDADE</div>
    </div>
  );
};

export default function App() {
  const [showStory, setShowStory] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('home');
  const [impactYears, setImpactYears] = useState(3);
  const [impactReduction, setImpactReduction] = useState(10);
  
  const annualSavings = (impactReduction / 100) * 5400000;
  const totalSavings = annualSavings * impactYears;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Início', icon: <Home size={20} />, description: 'Visão geral do projeto.' },
    { id: 'sumario', name: 'Sumário Executivo', icon: <BookOpen size={20} />, description: 'Resumo completo do plano de negócios.' },
    { id: 'mercado', name: 'Mercado', icon: <Globe size={20} />, description: 'Análise do mercado, segmentação e oportunidade identificada.' },
    { id: 'vantagens', name: 'Vantagens', icon: <Award size={20} />, description: 'Diferenciação, inovação e vantagens competitivas da solução.' },
    { id: 'produto', name: 'Produto', icon: <Smartphone size={20} />, description: 'Detalhes da plataforma, funcionalidades e experiência do utilizador.' },
    { id: 'vendas', name: 'Vendas', icon: <TrendingUp size={20} />, description: 'Estratégia B2G, modelo de negócio e impacto no SNS.' },
    { id: 'operacoes', name: 'Operações', icon: <Activity size={20} />, description: 'Roadmap de desenvolvimento, segurança e moderação.' },
    { id: 'equipa', name: 'Equipa', icon: <Users size={20} />, description: 'Conheça os fundadores e a equipa por trás do projeto.' },
    { id: 'financas', name: 'Finanças', icon: <BarChart3 size={20} />, description: 'Projeções financeiras, métricas e necessidades de investimento.' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink/30">
      <BackgroundMusic />
      <AnimatePresence>
        {showStory && <StoryPopup onClose={() => setShowStory(false)} />}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button onClick={() => setActiveChapter('home')} className="hover:opacity-80 transition-opacity"><NavLogo /></button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => { setActiveChapter(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className={`text-sm font-medium transition-colors ${activeChapter === link.id ? 'text-brand-pink' : 'text-brand-dark/80 hover:text-brand-pink'}`}
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => setActiveChapter('contacto')} className="px-5 py-2 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-brand-teal transition-colors shadow-md">
              Investir
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => { setActiveChapter(link.id); setMobileMenuOpen(false); window.scrollTo(0, 0); }} 
                className={`text-base font-medium text-left flex items-center gap-2 ${activeChapter === link.id ? 'text-brand-pink' : 'text-brand-dark hover:text-brand-pink'}`}
              >
                {link.icon} {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {activeChapter === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-4 lg:pt-48 lg:pb-8 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-pink/10 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
              <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-teal/20 text-brand-teal font-medium text-sm mb-8"
              >
                <TrendingUp size={16} /> Pitch Deck Interativo para Investidores
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 flex flex-col items-center gap-4"
              >
                <span>Plano de Negócio do Projeto</span>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 200 120" className="w-16 md:w-24 h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <path id="leftBubble" d="M120,55 C120,82 93,105 60,105 C48,105 37,101 28,95 L5,110 L12,87 C4,78 0,67 0,55 C0,28 27,5 60,5 C93,5 120,28 120,55 Z" />
                      <path id="rightBubble" d="M80,55 C80,28 107,5 140,5 C173,5 200,28 200,55 C200,67 196,78 188,87 L195,110 L172,95 C163,101 152,105 140,105 C107,105 80,82 80,55 Z" />
                      <clipPath id="intersect">
                        <use href="#leftBubble" />
                      </clipPath>
                    </defs>
                    <use href="#leftBubble" fill="#E9608B" />
                    <use href="#rightBubble" fill="#3EB4B3" />
                    <use href="#rightBubble" fill="#735099" clipPath="url(#intersect)" />
                    <path d="M100,68 L88,56 C82,50 82,41 88,36 C93,31 100,34 100,42 C100,34 107,31 112,36 C118,41 118,50 100,68 Z" fill="white" />
                  </svg>
                  <span className="text-gradient">Entre Nós</span>
                </div>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl mx-auto text-xl md:text-2xl text-brand-dark/70 mb-4 font-medium"
              >
                Transformamos a literacia em saúde sexual dos jovens em impacto real para a saúde pública.
              </motion.p>
              
            </div>
          </section>

      {/* Chapter Navigation Cards - Horizontal Layout */}
      <section className="pt-8 pb-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">O Nosso Caminho</h2>
              <p className="text-lg text-brand-dark/60">
                Explore o nosso plano de negócios, estruturado para demonstrar a viabilidade, o impacto e a sustentabilidade do projeto Entre Nós.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-6xl mx-auto">
            {/* Roadmap Line */}
            <div className="hidden md:block absolute top-8 md:top-10 lg:top-12 left-10 right-10 h-1 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-teal opacity-30 rounded-full"></div>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-4 md:gap-6 lg:gap-8 relative z-10">
              {navLinks.filter(link => link.id !== 'home').map((link, i) => (
                <FadeIn key={link.id} delay={i * 0.1} className="flex flex-col items-center group w-20 md:w-24 lg:w-28 shrink-0">
                  <button 
                    onClick={() => { setActiveChapter(link.id); window.scrollTo(0, 0); }}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-brand text-white flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-brand-pink/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border-4 border-white shrink-0"
                  >
                    <div className="absolute top-0 right-0 w-full h-full bg-white/10 rounded-full blur-xl transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="relative z-10 mb-1 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="text-white/80 font-black text-[10px] md:text-xs relative z-10">0{i + 1}</span>
                  </button>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm md:text-base font-bold text-brand-dark mb-1 group-hover:text-brand-teal transition-colors">{link.name}</h3>
                    <p className="text-[10px] md:text-xs text-brand-dark/60 leading-tight hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-48 left-1/2 -translate-x-1/2 mt-2 bg-white p-3 rounded-xl shadow-xl border border-gray-100 z-20 pointer-events-none">
                      {link.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Produto */}
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="group relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ffffff] to-[#f8f9fc] border border-brand-teal/20 p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-colors duration-500"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl group-hover:bg-brand-pink/10 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal mb-8 shadow-sm border border-brand-teal/10 group-hover:scale-110 transition-transform duration-500">
                    <Smartphone size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark mb-6 tracking-tight">Qual o produto?</h3>
                  <div className="text-brand-dark/80 leading-relaxed font-medium text-lg mb-6">
                    O <span className="text-brand-pink font-bold">Entre Nós</span> é uma plataforma digital inovadora que combina uma micro-comunidade online, educação em saúde sexual e afetos baseada em evidência científica e apoio contínuo 24/7.
                  </div>
                  <div className="mt-auto pt-6 border-t border-brand-dark/5 text-brand-dark/60 text-sm leading-relaxed space-y-4">
                    <p>Através do Entre Nós, os adolescentes e jovens têm acesso a informação validada através de conteúdos supervisionados por profissionais de saúde e a respostas em tempo real, asseguradas por um sistema de inteligência artificial com fact checking clínico ou por profissionais especializados.</p>
                    <p>A plataforma combina conteúdos validados cientificamente com ferramentas digitais interativas, permitindo uma aprendizagem segura, personalizada e adaptada ao contexto juvenil atual.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Cliente */}
            <FadeIn delay={0.2} className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-purple to-[#4c2b6f] border border-brand-purple/30 p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 text-white flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-pink/30 rounded-full blur-2xl group-hover:bg-brand-pink/40 transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <Globe size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Qual o principal cliente?</h3>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl mb-6 font-bold text-sm">
                    <span className="text-white">Modelo Inicial</span>
                    <span className="bg-brand-pink text-white px-2 py-0.5 rounded-md text-xs">B2G</span>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium">
                    Oferecemos uma solução digital integrada às entidades públicas, com a Direção Geral da Saúde identificada como cliente estratégico inicial, e potencial de escalabilidade para outros organismos do setor da saúde e educação.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-[#1a2538] via-brand-dark to-[#0f172a] border border-brand-teal/20 p-8 md:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 w-full mb-8">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-teal/10 to-brand-purple/10 outline-none rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-purple rounded-[1.5rem] flex items-center justify-center text-white mb-8 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                    <TrendingUp size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">Qual o investimento?</h3>
                  <p className="text-white/70 font-medium">
                    O modelo de receita assenta na comercialização da solução enquanto pacote integrado.
                  </p>
                </div>
                
                <div className="w-full md:w-2/3 flex flex-col md:border-l border-white/10 md:pl-12">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0"><CheckCircle2 size={24} strokeWidth={2}/></div>
                      <span className="font-bold text-sm text-white leading-tight">Licenciamento da plataforma</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-[#d1b3ff] shrink-0"><CheckCircle2 size={24} strokeWidth={2}/></div>
                      <span className="font-bold text-sm text-white leading-tight">Implementação personalizada</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0"><CheckCircle2 size={24} strokeWidth={2}/></div>
                      <span className="font-bold text-sm text-white leading-tight">Manutenção <br/>(2 anos)</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                    <p>
                      Esta abordagem garante não só sustentabilidade financeira recorrente, como também impacto direto em saúde pública, através da redução de custos associados a comportamentos de risco evitáveis.
                    </p>
                    <p>
                      O projeto prevê um investimento inicial estimado de <span className="text-white font-bold">127 622 euros</span>, com um Valor Atual Líquido (VAL) de <span className="text-brand-teal font-bold">99 650,73 euros</span>, considerando uma taxa de atualização de 10% e um preço de venda ao cliente de <span className="text-brand-pink font-bold">250 000 euros</span> por implementação.
                    </p>
                    <p>
                      Com base nestas premissas, estima-se um período de retorno do investimento (payback) de aproximadamente <span className="text-white font-bold">12 meses</span>, refletindo um modelo financeiramente atrativo e escalável no setor da saúde digital. As projeções apresentadas baseiam-se em pressupostos conservadores e consideram um cenário de implementação faseada junto do cliente institucional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      </>
      )}

      {/* Sumário Executivo */}
      {activeChapter === 'sumario' && (
      <section id="sumario" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sumário Executivo</h2>
            <p className="text-xl text-brand-dark/70 text-center max-w-3xl mx-auto mb-16">
              Nesta secção poderá ter acesso ao sumário executivo do plano de negócios do projeto Entre Nós.
            </p>
          </FadeIn>
          
          <ExecutiveSummary />

          <ChapterNavigation 
            prev={{ id: 'home', name: 'Início' }} 
            next={{ id: 'mercado', name: 'Análise de Mercado' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>
      )}

      {/* Análise de Mercado */}
      {activeChapter === 'mercado' && (
      <section id="mercado" className="py-20 bg-brand-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 mb-6 shadow-sm border border-white/50 relative">
                <BarChart3 size={40} className="text-brand-teal absolute" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-dark tracking-tight">Análise de Mercado</h2>
              <p className="text-xl text-brand-dark/70 font-medium">
                Segmentação e Contexto do Mercado
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
              <p className="text-brand-dark/80 text-lg leading-relaxed mb-8">
                O <strong>Entre Nós</strong> insere-se no mercado de informação e educação em saúde sexual e afetos, incluindo assim plataformas, apps e conteúdos online que fornecem informação, educação, suporte e recursos sobre sexualidade, prevenção de infeções sexualmente transmissíveis (IST), relações afetivas, e direitos reprodutivos.
              </p>
              <p className="text-brand-dark/80 text-lg leading-relaxed font-medium mb-8">
                A presente análise de mercado encontra-se estruturada em 2 análises:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-brand-teal/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold text-xl shrink-0">1</div>
                    <h4 className="text-xl font-bold text-brand-dark">Criação do Landscape Digital</h4>
                  </div>
                  <p className="text-brand-dark/80 leading-relaxed relative z-10">
                    Através da análise efetuada pela equipa através do trabalho de design thinking, bem como através do trabalho de investigação e de análise de mercado efetuado foi possível verificar a Landscape digital e construir assim um mapa de escala de credibilidade e Interação, através das opções de mercado disponíveis.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-xl shrink-0">2</div>
                    <h4 className="text-xl font-bold text-brand-dark">Principais Concorrentes</h4>
                  </div>
                  <p className="text-brand-dark/80 leading-relaxed relative z-10">
                    Identificação dos principais concorrentes do Projeto Entre Nós considerando a identitificação do público-alvo – Jovens portugueses entre os 14 e os 30 anos.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-16">
              <LandscapeChart />
              <div className="mt-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-brand-dark">Landscape Digital</h4>
                <p className="text-brand-dark/80 text-lg leading-relaxed mb-6">
                  Este mapa apresenta um landscape digital que cruza dois eixos fundamentais na análise de plataformas online relacionadas com saúde, sexualidade e juventude: o nível de credibilidade e o grau de interação. No eixo vertical, a credibilidade varia de baixa a alta; no eixo horizontal, a interação varia de reduzida a elevada.
                </p>
                <p className="text-brand-dark/80 text-lg leading-relaxed mb-6">
                  No quadrante correspondente à alta credibilidade e baixa interação surgem sobretudo plataformas educativas e institucionais, como websites académicos, fóruns científicos e páginas informativas (por exemplo, projetos universitários ou organizações de literacia em saúde), que disponibilizam conteúdos rigorosos e baseados na evidência, embora com menor envolvimento direto do utilizador. Por outro lado, no quadrante de alta interação mas menor credibilidade, situam-se sobretudo as redes sociais e comunidades digitais, como TikTok, Instagram ou Reddit. Estas plataformas são amplamente utilizadas pelos jovens e promovem elevados níveis de participação e partilha, mas apresentam riscos associados à desinformação, tornando necessária uma utilização crítica e informada.
                </p>
                <div className="bg-brand-pink/10 p-6 md:p-8 rounded-2xl border border-brand-pink/20 mt-8">
                  <p className="text-brand-dark font-medium text-lg leading-relaxed">
                    Em síntese, o mapa evidencia que o aumento da interação nem sempre corresponde a um aumento da credibilidade, o que reforça a necessidade de plataformas que integrem literacia digital e literacia em saúde num único ecossistema seguro.
                  </p>
                </div>
                
                {/* Scientific Citations */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <p className="text-[9px] text-brand-dark/40 leading-tight">
                    Lim, M. S. C., Vella, A. M., Sacks-Davis, R., & Hellard, M. E. (2014). Young people’s comfort receiving sexual health information via social media and other sources. Journal of Adolescent Health, 55(3), 334–339. <a href="https://doi.org/10.1016/j.jadohealth.2014.02.012" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-teal">https://doi.org/10.1016/j.jadohealth.2014.02.012</a>
                  </p>
                  <p className="text-[9px] text-brand-dark/40 leading-tight">
                    Widman, L., Nesi, J., Choukas-Bradley, S., & Prinstein, M. J. (2018). Technology-based interventions to reduce sexually transmitted infections and unintended pregnancy among youth. Journal of Adolescent Health, 62(6), 651–660. <a href="https://doi.org/10.1016/j.jadohealth.2018.02.007" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-teal">https://doi.org/10.1016/j.jadohealth.2018.02.007</a>
                  </p>
                  <p className="text-[9px] text-brand-dark/40 leading-tight">
                    Guse, K., Levine, D., Martins, S., Lira, A., Gaarde, J., Westmorland, W., & Gilliam, M. (2012). Interventions using new digital media to improve adolescent sexual health: A systematic review. Journal of Adolescent Health, 51(6), 535–543. <a href="https://doi.org/10.1016/j.jadohealth.2012.03.014" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-teal">https://doi.org/10.1016/j.jadohealth.2012.03.014</a>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark">Principais Concorrentes</h3>
              <p className="text-brand-dark/80 text-lg leading-relaxed mb-8">
                Atualmente, entre as opções disponíveis em Portugal para apoio destas temáticas é possível identificar duas plataformas de aconselhamento e informação:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sexualidade em Linha */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full">
                  <div className="mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm inline-block">
                    {/* Custom Logo Implementation */}
                    <div className="flex items-center gap-4">
                      {/* Logo Icon */}
                      <div className="relative text-[#e62429] w-16 h-16 shrink-0">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                          {/* Telephone handset */}
                          <path d="M20 35 C 30 20, 70 20, 80 35 L 70 45 C 60 35, 40 35, 30 45 Z" fill="#e62429" stroke="none" />
                          {/* Dome */}
                          <path d="M10 80 A 40 40 0 0 1 90 80" />
                          <line x1="5" y1="80" x2="95" y2="80" />
                          {/* Gender symbols combined */}
                          <circle cx="50" cy="60" r="12" />
                          <line x1="50" y1="72" x2="50" y2="95" />
                          <line x1="40" y1="85" x2="60" y2="85" />
                          <line x1="58" y1="52" x2="70" y2="40" />
                          <line x1="70" y1="40" x2="70" y2="50" />
                          <line x1="70" y1="40" x2="60" y2="40" />
                        </svg>
                      </div>
                      {/* Logo Text */}
                      <div className="flex flex-col">
                        <span className="text-[#e62429] font-serif text-xl leading-none tracking-tight font-bold">Sexualidade</span>
                        <span className="text-gray-500 font-serif text-lg leading-none ml-8 mb-1">em Linha</span>
                        <span className="text-[#e62429] font-serif text-2xl font-bold leading-none tracking-widest">800 222 003</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-dark/80 text-base leading-relaxed mb-8 flex-grow">
                    Consiste num serviço telefónico, anónimo e confidencial com uma equipa técnica constituída por psicólogas, disponível para qualquer esclarecimento ou informação na área da Saúde Sexual e Reprodutiva.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-brand-dark/70 flex items-center gap-3">
                        <Clock size={16} className="text-brand-teal" /> Dias úteis: 11h00 - 19h00
                      </p>
                      <p className="text-sm font-medium text-brand-dark/70 flex items-center gap-3">
                        <Clock size={16} className="text-brand-teal" /> Sábados: 10h00 - 17h00
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-100 mt-4">
                        <p className="text-sm font-medium text-red-600 flex items-start gap-2">
                          <AlertTriangle size={16} className="shrink-0 mt-0.5" /> 
                          <span>Em dias de tolerância de ponto decretados pelo Governo, a linha encontra-se encerrada.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* O dispositivo 3.1 */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">O dispositivo 3.1. Canal de Conversação</h4>
                  </div>
                  <p className="text-brand-dark/80 text-base leading-relaxed mb-8 flex-grow">
                    Uma ferramenta de comunicação, assegurada por profissionais de saúde, que informam e aconselham personalizadamente pessoas jovens, em tempo real ou com latência diminuta, a partir de informação fidedigna, baseada na evidência, nas áreas de intervenção do Programa.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-brand-dark/80 mb-4">
                      Neste dispositivo, as pessoas jovens encontram à sua disposição dois tipos de serviços que se complementam:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-base font-bold text-brand-dark mb-2">Canal Chat</p>
                        <p className="text-sm font-medium text-brand-dark/70 flex items-start gap-3">
                          <Clock size={16} className="text-brand-purple shrink-0 mt-0.5" /> 
                          <span>Dias úteis das 9h00 às 17h00 (respostas em tempo real).</span>
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-base font-bold text-brand-dark mb-2">Ferramenta Interativa</p>
                        <p className="text-sm font-medium text-brand-dark/70 flex items-start gap-3">
                          <Clock size={16} className="text-brand-purple shrink-0 mt-0.5" /> 
                          <span>"Coloca aqui as tuas dúvidas" - 24h por dia, todos os dias (tempo reduzido de latência).</span>
                        </p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-100 mt-4">
                        <p className="text-sm font-medium text-red-600 flex items-start gap-2">
                          <AlertTriangle size={16} className="shrink-0 mt-0.5" /> 
                          <span>Não permite a criação de um fórum de comunidade-online nem apresenta uma resposta por AI Fact-Checking com validação clinica</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-brand-light/50 p-6 md:p-8 rounded-2xl border border-brand-teal/20">
                <p className="text-brand-dark/80 font-medium text-lg leading-relaxed text-center">
                  Embora estas soluções desempenhem um papel relevante na educação e aconselhamento em saúde sexual, apresentam limitações comuns: funcionam de forma isolada, não promovem comunidade entre utilizadores, têm horários de acesso restritos e não integram de forma contínua conteúdos educativos, interação entre pares e apoio profissional num único espaço digital.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 bg-gradient-to-br from-brand-dark to-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-800 text-white relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Oportunidade de Mercado e Posicionamento</h3>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column: UVP & Positioning */}
                  <div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-brand-pink mb-4">Nenhuma solução atual combina:</h4>
                      <ul className="space-y-3">
                        {[
                          'Credibilidade científica',
                          'Uma comunidade online de partilha entre utilizadores',
                          'Apoio profissional',
                          'Conteúdo em língua portuguesa e com uma comunicação jovem e apelativa'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={20} />
                            <span className="text-white/90 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      O <strong>Entre Nós</strong> posiciona-se no segmento emergente de micro-comunidades para jovens. O projeto responde a um nicho ainda pouco explorado, combinando informação cientificamente validada, acesso a profissionais e mediação dos conteúdos de partilha, distinguindo-se da informação dispersa e frequentemente contraditória disponível nas redes sociais e motores de busca.
                    </p>
                    <p className="text-white/80 text-lg leading-relaxed font-medium text-brand-teal">
                      Isto posiciona o projeto Entre Nós como um player inovador e necessário no mercado de saúde digital.
                    </p>
                  </div>

                  {/* Right Column: Market Data & Validation */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="text-brand-pink" /> Crescimento do Setor
                      </h4>
                      <p className="text-white/70 text-base leading-relaxed mb-6">
                        O mercado global de Saúde Sexual e Reprodutiva Digital tem registado um crescimento significativo. Impulsionado pela generalização dos smartphones, aumento da alfabetização em saúde, necessidade de acesso rápido e discreto, e a popularização da telemedicina pós-COVID-19.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                          <div className="text-3xl font-black text-brand-teal mb-1">$15.4B</div>
                          <div className="text-xs text-white/60 uppercase tracking-wider">Projeção 2030</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                          <div className="text-3xl font-black text-brand-pink mb-1">13.1%</div>
                          <div className="text-xs text-white/60 uppercase tracking-wider">CAGR (2024-2030)</div>
                        </div>
                      </div>
                      <p className="text-[10px] text-white/40 mt-4 text-right leading-tight max-w-md ml-auto">
                        VIRTUE MARKET RESEARCH. Digital Sexual and Reproductive Health Market Report. [S.l.], 2025. Disponível em: <a href="https://virtuemarketresearch.com/news/digital-sexual-and-reproductive-health-market" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline transition-colors">https://virtuemarketresearch.com/news/digital-sexual-and-reproductive-health-market</a>. Acesso em: 6 mar. 2026.
                      </p>
                    </div>

                    <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-brand-teal mb-3 flex items-center gap-2">
                        <Users size={20} /> Comportamento do Público-Alvo
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        Estudos indicam que os jovens procuram frequentemente informação sobre sexualidade na internet devido à acessibilidade, anonimato e conveniência, sobretudo para temas estigmatizados. Portugal acompanha esta tendência, impulsionado pela digitalização da saúde (ex: SNS 24, CUF).
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-brand-teal/20">
                        <div className="flex -space-x-3 shrink-0">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-teal flex items-center justify-center">
                              <Users size={12} className="text-brand-teal" />
                            </div>
                          ))}
                        </div>
                        <p className="text-xs font-medium text-white/70">
                          <strong>Estudo de Design Thinking:</strong> A Equipa Entre Nós realizou Entrevistas a 10 jovens (16-27 anos) e 4 profissionais de saúde que validaram a necessidade de uma plataforma diferenciadora como o Entre Nós. Além disso, o Entre Nós foi desenhado considerando as necessidades que foram identificadas na realização das entrevistas.
                        </p>
                      </div>

                      {/* Interview Quotes */}
                      <div className="mt-6 grid gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                          <p className="text-sm italic text-white/90 mb-2">
                            “No Reddit aparecem lá perguntas que eu acho interessante e eu vejo a resposta das pessoas. Algo que me deixasse fazer perguntas de uma forma anónima.“
                          </p>
                          <p className="text-[10px] font-bold text-brand-pink uppercase tracking-widest text-right">
                            INÊS, 17 ANOS
                          </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                          <p className="text-sm italic text-white/90 mb-2">
                            “A maneira de eu estar um bocado mais seguro na tal rede social é ver boa moderação e saber que os valores da rede social estão alinhados com os meus. Muita gente anda muito a tentar irritar uns aos outros. E isto leva a que as pessoas fiquem mais fechadas... porque [a sexualidade] é uma coisa muito vulnerável”
                          </p>
                          <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest text-right">
                            DAVID, 25 ANOS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <ChapterNavigation 
            prev={{ id: 'sumario', name: 'Sumário Executivo' }} 
            next={{ id: 'vantagens', name: 'Vantagens Competitivas' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>
      )}

      {/* Vantagens Competitivas */}
      {activeChapter === 'vantagens' && (
      <section id="vantagens" className="py-32 bg-gradient-brand text-white relative overflow-hidden">
        {/* Animated Background Mesh & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] mix-blend-overlay"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
                <Zap size={16} /> O Nosso Diferencial
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white drop-shadow-sm">Vantagens Competitivas</h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-sm">
                Uma abordagem inovadora e segura à literacia em saúde sexual, desenhada para o público jovem e sustentada em rigor científico.
              </p>
            </div>
          </FadeIn>

          {/* The Market Gap Highlight - Bento Style */}
          <FadeIn delay={0.1}>
            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-pink rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative bg-white border border-white/20 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-2xl overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-purple/5 pointer-events-none"></div>
                
                <div className="shrink-0 text-center md:text-left relative z-10">
                  <div className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-teal via-brand-dark to-brand-purple drop-shadow-sm leading-none tracking-tighter">
                    49.7<span className="text-6xl md:text-8xl">%</span>
                  </div>
                  <div className="inline-block mt-6 px-4 py-2 rounded-full bg-brand-dark/5 border border-brand-dark/10 text-sm font-bold tracking-widest text-brand-dark uppercase">
                    Estudo Universitário (2025)
                  </div>
                  <p className="text-[9px] text-brand-dark/40 mt-4 max-w-[200px] leading-tight">
                    Pinho, L. G., et al. (2025). Health literacy and sexually transmitted infections risk behaviours in Portuguese university students: A cross-sectional study. Faculdade de Medicina da Universidade do Porto.
                  </p>
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-brand-dark">A Lacuna na Literacia em Saúde</h3>
                  <p className="text-brand-dark/70 leading-relaxed text-lg md:text-xl font-medium mb-6">
                    Num estudo realizado em 2025, verificou-se que metade dos estudantes universitários portugueses inquiridos apresentam níveis problemáticos de literacia em saúde sexual e reprodutiva. Têm dificuldades na compreensão, avaliação e utilização de informação fidedigna.
                  </p>
                  <div className="bg-brand-teal/10 p-6 rounded-2xl border-l-4 border-brand-teal mb-8">
                    <p className="text-brand-dark font-bold text-xl leading-relaxed">
                      O Entre Nós posiciona-se como a solução credível, combatendo a desinformação presente nas redes sociais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-md">
                Porquê que o Entre Nós é diferente?
              </h3>
            </div>
          </FadeIn>

          {/* Core Pillars - Bento Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Pillar 1 */}
            <FadeIn delay={0.2} className="h-full">
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-brand-pink/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/20 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 flex flex-col overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-pink/20 text-brand-pink shadow-lg relative z-10">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-brand-dark">Micro-Comunidade Digital</h3>
                  <p className="text-brand-dark/70 leading-relaxed flex-1 text-lg font-medium relative z-10">
                    Promove a interação entre pares e a aprendizagem coletiva, em contraste com atendimentos individuais. Reduz o isolamento, gera elevados níveis de engagement e aumenta a retenção.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 2 */}
            <FadeIn delay={0.3} className="h-full">
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-brand-teal/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/20 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 flex flex-col overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-teal/20 text-brand-teal shadow-lg relative z-10">
                    <Bot size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-brand-dark">Sistema Híbrido (IA + Humanos)</h3>
                  <p className="text-brand-dark/70 leading-relaxed flex-1 text-lg font-medium relative z-10">
                    A proposta de valor é reforçada pela integração de um sistema híbrido que combina inteligência artificial (<strong>AI Fact Check</strong>) com moderação por profissionais de saúde. Analisa automaticamente conteúdos, sinalizando desinformação, funcionando como um sistema de triagem que complementa e otimiza a intervenção humana.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 3 */}
            <FadeIn delay={0.4} className="h-full">
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-brand-purple/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/20 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 flex flex-col overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-purple/20 text-brand-purple shadow-lg relative z-10">
                    <Lock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-brand-dark">Anonimato Seguro</h3>
                  <p className="text-brand-dark/70 leading-relaxed flex-1 text-lg font-medium relative z-10">
                    Fóruns moderados onde os utilizadores interagem via avatares digitais. Um ambiente livre de estigmatização que potencia a abertura em temas sensíveis e o crescimento orgânico.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Riscos, Propriedade Intelectual e Sustentabilidade - Premium Bento */}
          <FadeIn delay={0.5}>
            <div className="relative group mb-32">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[3rem] blur-xl opacity-50"></div>
              <div className="relative bg-white border border-white/20 p-10 md:p-16 rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-pink/5 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-teal/5 rounded-full blur-[80px] -ml-40 -mb-40 pointer-events-none"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                  {/* Coluna 1: Estado Atual e Riscos */}
                  <div className="flex flex-col h-full">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-sm font-bold tracking-widest uppercase mb-8 self-start">
                      <AlertTriangle size={16} /> Estado Atual e Riscos
                    </div>
                    <p className="text-brand-dark/80 leading-relaxed mb-6 text-lg font-medium">
                      Apesar destas vantagens competitivas, o projeto encontra-se numa fase inicial de prototipagem, sujeita a limitações inerentes à validação do modelo, aos custos associados à moderação especializada e aos desafios do desenvolvimento tecnológico.
                    </p>
                    <p className="text-brand-dark/80 leading-relaxed mb-10 text-lg font-medium">
                      O projeto está consciente dos riscos estratégicos e operacionais que enfrenta, incluindo o eventual baixo interesse inicial do público jovem, resistência institucional, desafios técnicos na moderação por IA e o surgimento de novos concorrentes.
                    </p>
                    
                    <div className="mt-auto bg-slate-50 rounded-3xl p-8 border border-brand-dark/5">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-dark/40 mb-6">Estratégias de Mitigação</h4>
                      <ul className="grid gap-4">
                        {[
                          "Validação contínua com feedback dos utilizadores (Mitiga baixo interesse)",
                          "Reforço da moderação humana complementar à IA (Mitiga desafios técnicos)",
                          "Atribuição de selos de credibilidade a conteúdos validados (Mitiga desinformação)",
                          "Conformidade rigorosa com proteção de dados e ética (Mitiga riscos legais)",
                          "Parcerias estratégicas com instituições de saúde e ensino (Mitiga resistência institucional)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-brand-dark/80 text-base font-medium">
                            <div className="bg-brand-teal/20 p-1 rounded-full text-brand-teal shrink-0 mt-0.5">
                              <CheckCircle2 size={16} />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Coluna 2: PI e Sustentabilidade */}
                  <div className="flex flex-col gap-12">
                    {/* PI */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-brand-dark/5 hover:bg-white transition-colors duration-500 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-teal/10 p-3 rounded-2xl text-brand-teal">
                          <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark">Propriedade Intelectual</h3>
                      </div>
                      <p className="text-brand-dark/70 leading-relaxed text-lg font-medium">
                        O registo formal da marca e da propriedade intelectual encontra-se em fase de planeamento. Perspetiva-se o registo da marca, proteção de conteúdos originais via direitos de autor e a consolidação dos ativos tecnológicos (algoritmos e bases de dados) como know-how estratégico, dificultando a replicação por terceiros.
                      </p>
                    </div>

                    {/* Sustentabilidade */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-brand-dark/5 hover:bg-white transition-colors duration-500 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-purple/10 p-3 rounded-2xl text-brand-purple">
                          <Award size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark">Sustentabilidade da Vantagem</h3>
                      </div>
                      <p className="text-brand-dark/70 leading-relaxed text-lg font-medium">
                        A sustentabilidade da solução Entre Nós assenta no efeito de rede, através do qual o valor da comunidade cresce à medida que os utilizadores e o volume de conteúdos aumentam. Prevê-se a monetização futura através de parcerias institucionais, bem como expansão da plataforma para comunidades lusófonas, assegurando escala e um crescimento sustentável.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SWOT Analysis - Premium Bento Grid */}
          <FadeIn delay={0.6}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
                <Target size={16} /> Visão Estratégica
              </div>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Análise SWOT</h3>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                O posicionamento do projeto no mercado atual, avaliando fatores internos e externos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Strengths */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-teal/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/10 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-transparent opacity-50"></div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-2xl shadow-sm"><Zap size={32} /></div>
                    <h4 className="text-3xl font-bold text-brand-dark tracking-tight">Forças</h4>
                  </div>
                  <ul className="space-y-5 text-brand-dark/80">
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Micro-comunidade digital (interação e aprendizagem coletiva).</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Anonimato garantido via avatares (conforto na participação).</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">IA (AI Fact Check) + Moderação profissional (rigor científico).</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Conteúdos validados, estruturados e fidedignos.</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Formato adaptado aos jovens (curto, multimédia, acessível).</span></li>
                  </ul>
                </div>
              </div>

              {/* Weaknesses */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-pink/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/10 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-transparent opacity-50"></div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="bg-brand-pink/10 text-brand-pink p-4 rounded-2xl shadow-sm"><AlertTriangle size={32} /></div>
                    <h4 className="text-3xl font-bold text-brand-dark tracking-tight">Fraquezas</h4>
                  </div>
                  <ul className="space-y-5 text-brand-dark/80">
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Fase inicial de protótipo, sem validação completa.</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Marca não registada e IP em consolidação.</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Dependência inicial de profissionais para moderação.</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Recursos limitados para marketing neste estágio.</span></li>
                  </ul>
                </div>
              </div>

              {/* Opportunities */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-purple/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/10 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-transparent opacity-50"></div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="bg-brand-purple/10 text-brand-purple p-4 rounded-2xl shadow-sm"><Lightbulb size={32} /></div>
                    <h4 className="text-3xl font-bold text-brand-dark tracking-tight">Oportunidades</h4>
                  </div>
                  <ul className="space-y-5 text-brand-dark/80">
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Necessidade crescente de literacia (49.7% com dificuldades).</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Parcerias com escolas, universidades, ONGs e saúde.</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Escalabilidade digital com custos marginais baixos.</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Expansão para outros temas de bem-estar ou mercados.</span></li>
                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={22} /> <span className="leading-relaxed text-lg font-medium">Procura por plataformas seguras e moderadas (pós-pandemia).</span></li>
                  </ul>
                </div>
              </div>

              {/* Threats */}
              <div className="group relative">
                <div className="absolute inset-0 bg-orange-500/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-white/10 p-10 rounded-[2.5rem] h-full hover:bg-slate-50 transition-all duration-500 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="bg-orange-500/10 text-orange-500 p-4 rounded-2xl shadow-sm"><ShieldAlert size={32} /></div>
                    <h4 className="text-3xl font-bold text-brand-dark tracking-tight">Ameaças</h4>
                  </div>
                  <ul className="space-y-5 text-brand-dark/80">
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Concorrência indireta (motores de busca, redes sociais).</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Risco de desinformação gerada por utilizadores.</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Dependência da adesão jovem (barreira à confiança).</span></li>
                    <li className="flex gap-4 items-start"><div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-sm"></div> <span className="leading-relaxed text-lg font-medium">Mudanças na regulamentação de dados e proteção de menores.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <ChapterNavigation 
            prev={{ id: 'mercado', name: 'Análise de Mercado' }} 
            next={{ id: 'produto', name: 'O Produto' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>
      )}

      {/* Produto */}
      {activeChapter === 'produto' && (
      <section id="produto" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">O Produto</h2>
              <p className="text-2xl md:text-3xl text-brand-dark font-bold leading-tight">
                “O Entre Nós não se limita à disponibilização de uma plataforma digital. O Entre Nós constitui um ecossistema de confiança e literacia em saúde sexual.”
              </p>
            </div>
          </FadeIn>

          {/* 1. O que vamos vender? */}
          <div className="mb-24">
            <FadeIn>
              <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">O que vamos vender?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Users size={40} />
                  </div>
                  <h4 className="text-3xl font-black mb-4 text-brand-dark">Para o utilizador final <span className="text-brand-pink block text-xl mt-1">(jovens)</span></h4>
                  <p className="text-brand-dark/70 text-lg leading-relaxed relative z-10">Acesso gratuito a informação fidedigna, anonimato total e apoio direto de especialistas num ambiente seguro e sem julgamentos.</p>
                </div>
                <div className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="bg-gradient-to-br from-brand-teal to-brand-dark w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Target size={40} />
                  </div>
                  <h4 className="text-3xl font-black mb-4 text-brand-dark">Para os Clientes</h4>
                  <p className="text-brand-dark/70 text-lg leading-relaxed relative z-10">Dados analíticos (anonimizados) sobre as preocupações da juventude, um canal de intervenção direta para entidades de saúde e uma ferramenta de cumprimento de metas de saúde pública.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Product Showcase - Laptop Mockup */}
          <FadeIn delay={0.2}>
            <div className="relative max-w-5xl mx-auto mb-32">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 via-brand-purple/20 to-brand-teal/20 blur-[100px] opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Laptop Body */}
                <div className="relative bg-[#0a0a0a] rounded-t-[2.5rem] p-4 pb-0 border-x-[12px] border-t-[12px] border-[#1a1a1a] shadow-2xl">
                  {/* Screen Content */}
                  <div className="bg-white rounded-t-xl overflow-hidden h-[400px] md:h-[650px] relative group">
                    {/* Browser Header */}
                    <div className="absolute inset-x-0 top-0 h-8 bg-gray-100 flex items-center px-4 gap-2 z-30 border-b border-gray-200">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <div className="mx-auto bg-white px-4 py-1 rounded-md text-[11px] text-gray-400 border border-gray-200 w-80 flex items-center gap-2 overflow-hidden whitespace-nowrap">
                        <Lock size={10} /> entre-nos-community.netlify.app
                      </div>
                    </div>
                    
                    {/* Scrolling Content Simulation */}
                    <div className="pt-8 h-full overflow-hidden relative">
                      <div className="animate-auto-scroll w-full">
                        <iframe 
                          src="https://entre-nos-community.netlify.app/" 
                          className="w-full h-[3000px] border-none"
                          title="Entre Nós Preview"
                          loading="lazy"
                        />
                      </div>
                      {/* Overlay to prevent interaction during auto-scroll if desired, or just leave it */}
                      <div className="absolute inset-0 z-20 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="relative h-6 bg-[#1a1a1a] rounded-b-2xl mx-[-3%] shadow-2xl flex justify-center">
                  <div className="w-32 h-1.5 bg-[#0a0a0a] rounded-b-full"></div>
                </div>
              </div>
              
              <div className="text-center mt-12 relative z-20">
                <a 
                  href="https://entre-nos-community.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-dark text-white font-bold shadow-xl hover:bg-brand-teal transition-all transform hover:-translate-y-1 group"
                >
                  <Monitor size={20} className="text-brand-teal group-hover:text-white transition-colors" />
                  Clique aqui para abrir o link do protótipo do produto
                  <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="mt-4 text-brand-dark/40 font-medium italic">ENTRE NÓS - Espaço Seguro</p>
              </div>
            </div>
          </FadeIn>

          {/* 2. Decomposição do Produto */}
          <div className="mb-20">
            <FadeIn>
              <h3 className="text-3xl font-black mb-12 text-center text-brand-dark">Decomposição do Produto</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Módulo de Literacia", subtitle: "Biblioteca", desc: "Repositório de conteúdos multimédia validados cientificamente, organizados por temas de interesse.", icon: <BookOpen size={32} className="text-white" />, color: "from-gray-300 to-gray-400" },
                  { title: "Módulo Comunitário", subtitle: "Fórum Moderado", desc: "Espaço de partilha entre pares com um sistema de moderação híbrido (IA + Humano).", icon: <MessageCircle size={32} className="text-white" />, color: "from-gray-400 to-gray-500" },
                  { title: "Apoio Especializado", subtitle: "Canal Expert", desc: "Interface de comunicação direta e privada com profissionais de saúde, utilizando IA para triagem.", icon: <Stethoscope size={32} className="text-white" />, color: "from-brand-teal to-teal-500" },
                  { title: "Acessibilidade Universal", subtitle: "Inclusão", desc: "Widget integrado que permite adaptar a interface em tempo real para utilizadores com necessidades especiais.", icon: <Accessibility size={32} className="text-white" />, color: "from-brand-pink to-pink-500" },
                  { title: "Painel de Gestão", subtitle: "Segurança", desc: "Ferramentas de moderação avançada e análise de métricas para os administradores e parceiros institucionais.", icon: <ShieldCheck size={32} className="text-white" />, color: "from-brand-purple to-purple-500", className: "md:col-span-2 lg:col-span-2" }
                ].map((module, i) => (
                  <div key={i} className={`group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col ${module.className || ''}`}>
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${module.color}`}></div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                      {module.icon}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{module.subtitle}</div>
                    <h4 className="text-2xl font-bold mb-3 text-brand-dark">{module.title}</h4>
                    <p className="text-brand-dark/70 leading-relaxed flex-1">{module.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 3. Fases de Implementação e Comercialização */}
          <div className="mb-20">
            <FadeIn>
              <h3 className="text-3xl font-black mb-12 text-center text-brand-dark">Fases de Implementação e Comercialização</h3>
              <div className="relative max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-gray-100 rounded-full transform -translate-y-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    { title: "Prova de Conceito", desc: "Validação do algoritmo de moderação via IA (Gemini).", com: "Não", color: "bg-gray-300" },
                    { title: "Protótipo", desc: "Interface funcional (UI/UX) com navegação. Testes de usabilidade.", com: "Não", color: "bg-gray-400" },
                    { title: "MVP", desc: "Lançamento da Biblioteca, Fórum funcional e triagem básica.", com: "Pilotos B2G (Fase de entrada inicial)", color: "bg-brand-teal" },
                    { title: "Produto Completo", desc: "Integração total com SNS, app nativa e rede de especialistas.", com: "Pleno", color: "bg-brand-pink" },
                    { title: "Futuro", desc: "Gamificação, teleconsultas e expansão para mercados lusófonos.", com: "Expansão", color: "bg-brand-purple" }
                  ].map((fase, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                      <div className={`w-12 h-12 rounded-full ${fase.color} text-white flex items-center justify-center mb-6 shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform duration-300`}>
                        <span className="font-bold">{i + 1}</span>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow w-full h-full flex flex-col">
                        <h4 className="font-bold text-lg mb-3 text-brand-dark">{fase.title}</h4>
                        <p className="text-sm text-brand-dark/70 mb-4 flex-1">{fase.desc}</p>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${fase.com === 'Não' ? 'bg-gray-100 text-gray-500' : 'bg-brand-light text-brand-dark border border-brand-teal/20'}`}>
                          Comercializável: {fase.com}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-12 text-sm text-brand-dark/60 italic text-center max-w-3xl mx-auto bg-brand-light p-4 rounded-xl border border-brand-teal/10">
                A comercialização terá início na fase de MVP, através de parcerias com autarquias e instituições de ensino que pretendam oferecer este "espaço seguro" às suas comunidades locais como um projeto-piloto pago.
              </p>
            </FadeIn>
          </div>

          {/* 4. Metodologias, Tecnologias e Técnicas */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-bold mb-8 text-center">Metodologias, Tecnologias e Técnicas</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Metodologias */}
                <div className="bg-brand-light/30 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Layout className="text-brand-pink" />
                    <h4 className="text-lg font-bold">Metodologias</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-pink shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Agile (Scrum)</span>
                        <span className="text-sm text-brand-dark/70">Ciclos de desenvolvimento quinzenais (sprints) para permitir adaptações rápidas ao feedback dos jovens.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-pink shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">User-Centered Design (UCD)</span>
                        <span className="text-sm text-brand-dark/70">O design é focado na redução do estigma e na facilidade de uso, com testes constantes de acessibilidade.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Stack Tecnológica */}
                <div className="bg-brand-light/30 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-brand-teal" />
                    <h4 className="text-lg font-bold">Stack Tecnológica</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Frontend</span>
                        <span className="text-sm text-brand-dark/70">React 19 com TypeScript para uma interface robusta e tipagem segura.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Estilização</span>
                        <span className="text-sm text-brand-dark/70">Tailwind CSS para um design responsivo, moderno e de carregamento ultra-rápido.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Inteligência Artificial</span>
                        <span className="text-sm text-brand-dark/70">Integração com a API Google Gemini para moderação automática e assistência inteligente.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Segurança</span>
                        <span className="text-sm text-brand-dark/70">Protocolos de anonimização de dados e conformidade com o RGPD.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Técnicas Específicas */}
                <div className="bg-brand-light/30 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="text-brand-purple" />
                    <h4 className="text-lg font-bold">Técnicas Específicas</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-purple shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Hibridismo de Moderação</span>
                        <span className="text-sm text-brand-dark/70">Técnica que combina a velocidade da IA com a sensibilidade humana para detetar nuances culturais e gírias juvenis.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-brand-purple shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-semibold block">Design Inclusivo</span>
                        <span className="text-sm text-brand-dark/70">Utilização de técnicas de "Mobile-First" e otimização para redes de internet instáveis, garantindo que nenhum jovem é excluído.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <ChapterNavigation 
              prev={{ id: 'vantagens', name: 'Vantagens Competitivas' }} 
              next={{ id: 'vendas', name: 'Estratégia de Vendas' }} 
              setActiveChapter={setActiveChapter} 
            />
          </div>
        </div>
      </section>
      )}

      {/* Estratégia de Vendas */}
      {activeChapter === 'vendas' && (
      <section id="vendas" className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como iremos comercializar o Entre Nós?</h2>
              <p className="text-lg text-white/70 mb-8">O Entre Nós adota um modelo de negócio de entrada B2G (Business-to-Government) com Solução chave na mão, com venda institucional da plataforma digital a entidades públicas de saúde, identificando a Direção Geral de Saúde como principal cliente.</p>
            </div>
              
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 text-left shadow-2xl border-l-8 border-brand-teal transform hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-teal mb-4">Foco inicial em B2G: mercado de entrada estratégico</h3>
                  <p className="text-brand-dark/90 leading-relaxed mb-4">
                    O posicionamento inicial no modelo B2G resulta de dois fatores principais:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} /> <span><strong>1. Escalabilidade nacional rápida</strong>, permitindo implementação em larga escala através dos sistemas públicos de saúde e educação.</span></li>
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} /> <span><strong>2. Alinhamento com políticas públicas</strong>, dado que a literacia em saúde sexual constitui uma prioridade estratégica em saúde pública.</span></li>
                  </ul>
                  <p className="text-brand-dark/90 leading-relaxed mb-4">
                    Neste contexto, entidades públicas como a Direção-Geral da Saúde assumem-se como clientes estratégicos prioritários, assegurando uma fonte de receita estável com previsibilidade contratual.
                  </p>
                  <p className="text-brand-dark/90 leading-relaxed font-medium mt-auto">
                    Importa sublinhar que o modelo B2G não é exclusivo, mas sim o ponto de entrada estratégico, permitindo validação científica, credibilidade institucional e geração de impacto populacional.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 text-left shadow-2xl border-l-8 border-brand-purple transform hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-purple mb-4">Plataforma multi-stakeholder e não exclusiva ao Estado</h3>
                  <p className="text-brand-dark/90 leading-relaxed mb-4">
                    Embora o lançamento inicial esteja orientado para o setor público, a plataforma foi concebida desde a origem como uma solução modular e adaptável a múltiplos contextos institucionais, incluindo:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={20} /> <span><strong>Escolas e instituições de ensino</strong>, através de programas estruturados de educação sexual</span></li>
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={20} /> <span><strong>Hospitais e unidades de saúde</strong>, como ferramenta de apoio à consulta e educação do paciente</span></li>
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={20} /> <span><strong>Associações de doentes e ONG's</strong>, para apoio comunitário e programas educativos</span></li>
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={20} /> <span><strong>Clínicas privadas e seguradoras</strong>, através de programas de prevenção e literacia em saúde</span></li>
                    <li className="flex gap-3 text-brand-dark/90"><CheckCircle2 className="text-brand-purple shrink-0 mt-1" size={20} /> <span><strong>Empresas</strong>, no âmbito de programas de wellbeing e saúde ocupacional</span></li>
                  </ul>
                  <p className="text-brand-dark/90 leading-relaxed font-medium mt-auto">
                    Esta versatilidade transforma o Entre Nós numa solução multi-stakeholder, capaz de gerar valor em diferentes contextos institucionais utilizando o mesmo núcleo tecnológico.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 text-left shadow-2xl border-t-8 border-brand-pink mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Lógica de crescimento: modelo coerente e escalável</h3>
                <p className="text-brand-dark/80 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                  O crescimento do Entre Nós segue uma lógica estruturada em três fases distintas, garantindo uma expansão sustentável e de impacto crescente:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-brand-light/30 p-8 rounded-2xl border border-brand-teal/20 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center text-brand-teal font-bold text-xl mb-6 relative z-10">1</div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3 relative z-10">Fase 1 – Validação e impacto (B2G)</h4>
                    <p className="text-brand-dark/70 relative z-10">Venda da solução de Implementação para instituições públicas como a DGS.</p>
                  </div>
                  
                  <div className="bg-brand-light/30 p-8 rounded-2xl border border-brand-purple/20 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-12 h-12 bg-brand-purple/20 rounded-xl flex items-center justify-center text-brand-purple font-bold text-xl mb-6 relative z-10">2</div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3 relative z-10">Fase 2 – Diversificação (B2B / B2C)</h4>
                    <p className="text-brand-dark/70 relative z-10">Expansão e adaptação do modelo para hospitais privados, escolas, ONG's, seguradoras e empresas.</p>
                  </div>
                  
                  <div className="bg-brand-light/30 p-8 rounded-2xl border border-brand-pink/20 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-12 h-12 bg-brand-pink/20 rounded-xl flex items-center justify-center text-brand-pink font-bold text-xl mb-6 relative z-10">3</div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3 relative z-10">Fase 3 – Escala internacional</h4>
                    <p className="text-brand-dark/70 relative z-10">Adaptação da plataforma para outros países, com particular enfoque em mercados lusófonos e em novos contextos de saúde preventiva.</p>
                  </div>
                </div>
                
                <div className="bg-brand-dark/5 p-5 rounded-xl border border-brand-dark/10 flex items-start gap-4">
                  <div className="text-brand-pink shrink-0 mt-1"><AlertTriangle size={20} /></div>
                  <p className="text-brand-dark font-medium leading-relaxed">
                    O presente plano de negócio considera apenas a Fase 1 com desenvolvimento e implementação da plataforma Entre Nós e Venda para a Direção Geral de Saúde.
                  </p>
                </div>
              </div>
          </FadeIn>

          {/* Processo Comercial */}
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold mb-12 text-center">Processo Comercial</h3>
            <div className="relative max-w-5xl mx-auto mb-24">
              <div className="hidden md:block absolute top-8 left-10 right-10 h-1 bg-white/10 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: "Contacto", desc: "Apresentações à DGS e workshops de demonstração.", icon: <MessageCircle size={24}/> },
                  { step: "Oportunidade", desc: "Mostrar o impacto na saúde pública, bem como poupança para o SNS.", icon: <PieChart size={24}/> },
                  { step: "Proposta", desc: "Entrega de proposta com funcionalidades e custos.", icon: <Target size={24}/> },
                  { step: "Negociação", desc: "Ajustes e alinhamento com políticas públicas.", icon: <Users size={24}/> },
                  { step: "Concretização", desc: "Contrato formal e plano de implementação.", icon: <CheckCircle2 size={24}/> }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-teal text-brand-teal flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(62,180,179,0.2)] group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">{item.step}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Ecossistema */}
          <FadeIn delay={0.2}>
            <div className="bg-white text-brand-dark rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 text-center">Ecossistema de Implementação & Crescimento</h3>
              <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
                <div className="flex-1 w-full text-center p-6 bg-brand-light rounded-2xl border-2 border-brand-teal/20 hover:border-brand-teal transition-colors flex flex-col">
                  <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 text-brand-teal"><Globe size={32} /></div>
                  <h4 className="font-bold text-xl mb-2">Clientes (Pagadores)</h4>
                  <p className="text-sm text-brand-dark/70 font-medium mb-4">Fase 1: DGS (B2G)<br/>Fase 2: Hospitais, Clínicas, Indústria Farmacêutica (B2B)</p>
                  <p className="text-xs text-brand-dark/50 mt-auto">Compram a licença, customização e acesso a dados anonimizados.</p>
                </div>
                <div className="hidden md:flex items-center text-brand-teal"><ArrowRight size={32} /></div>
                <div className="flex-1 w-full text-center p-6 bg-brand-light rounded-2xl border-2 border-brand-purple/20 hover:border-brand-purple transition-colors flex flex-col">
                  <div className="w-16 h-16 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-4 text-brand-purple"><Users size={32} /></div>
                  <h4 className="font-bold text-xl mb-2">Equipa Entre Nós</h4>
                  <p className="text-sm text-brand-dark/70 font-medium mb-4">Contrato de implementação, operação e 2 anos de Manutenção</p>
                  <p className="text-xs text-brand-dark/50 mt-auto">Garante a segurança, moderação híbrida (IA + Humana) e evolução tecnológica.</p>
                </div>
                <div className="hidden md:flex items-center text-brand-purple"><ArrowRight size={32} /></div>
                <div className="flex-1 w-full text-center p-6 bg-brand-light rounded-2xl border-2 border-brand-pink/20 hover:border-brand-pink transition-colors flex flex-col">
                  <div className="w-16 h-16 mx-auto bg-brand-pink/10 rounded-full flex items-center justify-center mb-4 text-brand-pink"><Share2 size={32} /></div>
                  <h4 className="font-bold text-xl mb-2">Parceiros & Utilizadores</h4>
                  <p className="text-sm text-brand-dark/70 font-medium mb-4">ONGs, Escolas & Jovens</p>
                  <p className="text-xs text-brand-dark/50 mt-auto">Uma plataforma adaptável a diferentes parceiros e utilizadores.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* O Problema e o Impacto (ROI) */}
          <FadeIn delay={0.3}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Qual o real impacto para o Cliente?</h3>
              <p className="text-lg text-brand-teal font-medium">Vamos analisar apenas um dos determinantes – Impacto nas Interrupções Voluntárias da Gravidez.</p>
            </div>
          </FadeIn>

          <div className="bg-white text-brand-dark rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
            <p className="text-lg leading-relaxed mb-6">
              Com base em revisões sistemáticas internacionais, <strong>intervenções digitais de educação sexual demonstraram melhorias significativas</strong> em comportamentos preventivos, incluindo aumento do uso de contraceção e redução de comportamentos de risco. Estes resultados estão associados a melhorias mensuráveis na adoção de métodos contraceptivos e na prevenção da gravidez não planeada, <strong>permitindo estimar reduções plausíveis entre 5% e 15% nas gravidezes não planeadas, o que pode traduzir-se numa redução proporcional estimada entre 3% e 10% nas interrupções voluntárias da gravidez, considerando a relação direta entre gravidez não planeada e IVG.</strong>
            </p>
            <p className="text-[10px] text-brand-dark/50 leading-tight">
              Bearak, J., Popinchalk, A., Ganatra, B., Moller, A.-B., Tunçalp, Ö., Beavin, C., Kwok, L., & Alkema, L. (2020). Unintended pregnancy and abortion by income, region, and the legal status of abortion: Estimates from a comprehensive model for 1990–2019. The Lancet Global Health, 8(9), e1152–e1161. <a href="https://doi.org/10.1016/S2214-109X(20)30315-6" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-teal">https://doi.org/10.1016/S2214-109X(20)30315-6</a>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <FadeIn delay={0.4}>
                <div className="bg-gradient-brand border border-white/10 p-8 rounded-3xl hover:shadow-lg hover:shadow-brand-pink/20 transition-all text-white group">
                  <div className="text-white mb-4 group-hover:scale-110 transition-transform"><TrendingUp size={36} /></div>
                  <h3 className="text-xl font-bold mb-2">O Custo Atual (SNS)</h3>
                  <p className="text-4xl font-black mb-2">€5.4M<span className="text-lg font-normal text-white/80">/ano</span></p>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">Custo associado a ~17.800 Interrupções Voluntárias da Gravidez (aumento de 5.5% em 2024).</p>
                  <p className="text-[9px] text-white/40 leading-tight">
                    Diário de Notícias. (2025, June 5). Número de mulheres que efetuaram IVG sobe 5,5% para quase 18 mil em 2024. https://www.dn.pt/sociedade/n%C3%BAmero-de-mulheres-que-efetuaram-ivg-sobe-55-para-quase-18-mil-em-2024
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="bg-gradient-brand border border-white/10 p-8 rounded-3xl hover:shadow-lg hover:shadow-brand-pink/20 transition-all text-white group">
                  <div className="text-white mb-4 group-hover:scale-110 transition-transform"><ShieldCheck size={36} /></div>
                  <h3 className="text-xl font-bold mb-2">A Lacuna Educativa</h3>
                  <p className="text-4xl font-black mb-2">&lt; 33%</p>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">Dos adolescentes visita uma instituição de saúde para aconselhamento. Menos de 50% tem educação reprodutiva escolar.</p>
                  <p className="text-[9px] text-white/40 leading-tight">
                    Mendes N, Palma F, Serrano F. Sexual and reproductive health of Portuguese adolescents. Int J Adolesc Med Health. 2014;26(1):3-12. doi: 10.1515/ijamh-2012-0109. PMID: 24501151.)
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.6} className="h-full">
              <div className="bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 border border-brand-teal/30 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute -right-10 -bottom-10 opacity-5"><PieChart size={200} /></div>
                
                <h3 className="text-3xl font-bold mb-2 text-white">O Nosso Impacto</h3>
                <p className="text-brand-teal font-medium mb-4">Calculadora de Cenários de Poupança para o SNS</p>
                <p className="text-white/70 text-sm mb-8">
                  A literatura indica que intervenções digitais podem reduzir comportamentos de risco. Simule abaixo o impacto financeiro com base em diferentes cenários de adoção e eficácia.
                </p>
                
                <div className="space-y-8 mb-10 relative z-10">
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-white font-medium">Anos de Implementação</label>
                      <span className="text-brand-teal font-bold text-xl">{impactYears} {impactYears === 1 ? 'ano' : 'anos'}</span>
                    </div>
                    <input type="range" min="1" max="5" value={impactYears} onChange={(e) => setImpactYears(Number(e.target.value))} className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-white font-medium">Redução Estimada de IVGs</label>
                      <span className="text-brand-teal font-bold text-xl">{impactReduction}%</span>
                    </div>
                    <input type="range" min="1" max="20" value={impactReduction} onChange={(e) => setImpactReduction(Number(e.target.value))} className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                </div>

                <div className="bg-brand-dark/80 p-8 rounded-2xl border border-brand-teal/30 text-center relative z-10 backdrop-blur-sm">
                  <p className="text-white/80 text-sm mb-2 uppercase tracking-wider font-bold">Poupança Acumulada Estimada</p>
                  <p className="text-6xl font-black text-brand-teal mb-3 drop-shadow-lg">
                    €{(totalSavings / 1000000).toFixed(2)}M
                  </p>
                  <div className="inline-block bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-bold">
                    Poupança anual: €{(annualSavings / 1000).toFixed(0)}k
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Marketing */}
          <FadeIn delay={0.6} className="mt-20 border-t border-white/10 pt-16">
            <h3 className="text-3xl font-bold mb-12 text-center">Marketing e Sensibilização</h3>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
              {/* Left: Text Cards */}
              <div className="flex-1 grid gap-6 w-full">
                <div className="bg-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-brand-pink/20 text-brand-pink rounded-2xl flex items-center justify-center shrink-0"><Smartphone size={32}/></div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Campanhas Multicanal</h4>
                    <p className="text-white/70 leading-relaxed">Distribuição de flyers físicos em escolas e universidades, complementados por webinars e newsletters para parceiros educativos.</p>
                  </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-brand-teal/20 text-brand-teal rounded-2xl flex items-center justify-center shrink-0"><BarChart3 size={32}/></div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Demonstração de Impacto</h4>
                    <p className="text-white/70 leading-relaxed">Foco em dados reais de poupança no SNS e evidência científica de intervenções digitais na saúde sexual.</p>
                  </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-brand-purple/20 text-brand-purple rounded-2xl flex items-center justify-center shrink-0"><Rocket size={32}/></div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Parcerias Estratégicas</h4>
                    <p className="text-white/70 leading-relaxed">Alianças com ONGs e associações da juventude para amplificar o alcance e incentivar a adoção orgânica.</p>
                  </div>
                </div>
              </div>

              {/* Right: Large Flyer Roll */}
              <div className="w-full lg:w-[400px] shrink-0">
                <div className="relative w-full h-[600px] overflow-hidden rounded-3xl bg-brand-dark/50 border border-white/10 shadow-2xl group">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="absolute inset-x-0 top-0 flex flex-col items-center gap-8 px-4 py-8 animate-scroll-down group-hover:[animation-play-state:paused]">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((type, i) => (
                      <FlyerMockup key={i} type={type} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-16 border-t border-white/20 bg-white rounded-3xl shadow-2xl">
              <h3 className="text-2xl md:text-5xl font-black text-brand-dark px-4">
                “Uma estratégia focada no real impacto para o utilizador e para o cliente”
              </h3>
            </div>
          </FadeIn>

          <ChapterNavigation 
            prev={{ id: 'produto', name: 'O Produto' }} 
            next={{ id: 'operacoes', name: 'Operações' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>
      )}

      {/* Operações & Roadmap */}
      {activeChapter === 'operacoes' && (
      <section id="operacoes" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-center">Como Vamos Operar?</h2>
            <p className="text-xl text-brand-dark/70 font-medium leading-relaxed text-center max-w-4xl mx-auto mb-20">
              A operação da ENTRE NÓS baseia-se num modelo de Plataforma como Serviço (PaaS), onde a tecnologia serve de ponte entre a necessidade de informação dos jovens e a oferta de conhecimento de especialistas. Funcionamos através de uma infraestrutura 100% digital, escalável e segura, com processos rigorosos de moderação e validação de conteúdos.
            </p>
          </FadeIn>

          {/* Plano Cronológico e Milestones */}
          <div className="mb-20">
            <FadeIn delay={0.1}>
              <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">Plano Cronológico e Milestones</h3>
              <div className="relative max-w-6xl mx-auto">
                {/* Timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-br from-brand-pink via-brand-purple to-brand-teal -translate-x-1/2 hidden md:block"></div>

                {[
                  { month: "1-2", phase: "Refinamento e UX", milestone: "Finalização do protótipo de alta fidelidade e testes de usabilidade com grupos de jovens e profissionais de saúde.", color: "bg-brand-pink" },
                  { month: "3-4", phase: "Desenvolvimento MVP", milestone: "Implementação do motor de moderação por IA (Gemini), base de dados de literacia e fórum comunitário.", color: "bg-brand-teal" },
                  { month: "5", phase: "Lançamento Piloto", milestone: "Implementação em ambiente controlado (ex: uma escola secundária ou associação juvenil) para recolha de feedback real.", color: "bg-brand-purple" },
                  { month: "6", phase: "Go-to-Market (MVP)", milestone: "Lançamento oficial da plataforma e início da comercialização de licenças para autarquias e instituições.", color: "bg-[#FF8C42]" },
                  { month: "9", phase: "Full Feature Release", milestone: "Integração total do canal de especialistas com sistema de triagem inteligente e chat em tempo real.", color: "bg-brand-dark" },
                  { month: "12", phase: "Escalabilidade", milestone: "Análise de dados do primeiro ano e expansão para parcerias no ecossistema do SNS.", color: "bg-brand-teal" }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.15}>
                    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-light shadow-md flex items-center justify-center z-10 hidden md:flex">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      </div>
                      {/* Content */}
                      <div className={`w-full md:w-[45%] text-center ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'} bg-white p-8 rounded-3xl border border-gray-100 shadow-lg z-20 relative`}>
                        <div className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold mb-4 ${item.color}`}>Mês {item.month}</div>
                        <h3 className="text-2xl font-bold mb-3 text-brand-dark">{item.phase}</h3>
                        <p className="text-brand-dark/70 leading-relaxed">{item.milestone}</p>
                      </div>
                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block w-[45%]"></div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Recursos Necessários */}
          <div className="mb-20">
            <FadeIn delay={0.2}>
              <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">Recursos Necessários</h3>
              <div className="grid md:grid-cols-2 gap-16">
                {/* Recursos Virtuais */}
                <div className="bg-brand-light/50 p-10 rounded-[2.5rem] border border-brand-dark/5 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-brand-teal/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-brand-teal/20 text-brand-teal shadow-sm">
                      <Cloud size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-dark">Recursos Virtuais</h4>
                  </div>
                  <ul className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-teal shrink-0 mt-1" /> <span><strong className="text-brand-dark">Cloud Hosting:</strong> Servidores seguros (ex: Google Cloud ou AWS) com redundância e conformidade RGPD.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-teal shrink-0 mt-1" /> <span><strong className="text-brand-dark">Inteligência Artificial:</strong> API do Google Gemini para moderação de linguagem natural e apoio à triagem.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-teal shrink-0 mt-1" /> <span><strong className="text-brand-dark">Ferramentas de Desenvolvimento:</strong> GitHub para controlo de versão, VS Code e frameworks de testes.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-teal shrink-0 mt-1" /> <span><strong className="text-brand-dark">Segurança:</strong> Certificados SSL, sistemas de encriptação de ponta a ponta e firewalls de aplicação web.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-teal shrink-0 mt-1" /> <span><strong className="text-brand-dark">Marketing:</strong> Ferramentas de gestão de comunidade e análise de tráfego (Google Analytics).</span></li>
                  </ul>
                </div>

                {/* Recursos Físicos e Humanos */}
                <div className="bg-brand-light/50 p-10 rounded-[2.5rem] border border-brand-dark/5 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-brand-pink/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-brand-pink/20 text-brand-pink shadow-sm">
                      <Users size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-dark">Recursos Físicos e Humanos</h4>
                  </div>
                  <ul className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-pink shrink-0 mt-1" /> <span><strong className="text-brand-dark">Espaço de Trabalho:</strong> Escritório em regime de coworking ou remoto para a equipa nuclear.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-pink shrink-0 mt-1" /> <span><strong className="text-brand-dark">Hardware:</strong> Equipamentos de computação de alta performance para a equipa de desenvolvimento.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={24} className="text-brand-pink shrink-0 mt-1" /> <span><strong className="text-brand-dark">Equipa Especializada:</strong> Desenvolvedores Full-Stack, Designer de Produto (UX/UI), Gestor de Comunidade e um Conselho Consultivo de Saúde (médicos e psicólogos).</span></li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* WP Structure */}
          <div className="mb-20">
            <FadeIn delay={0.3}>
              <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">Estrutura de Work Packages (WP)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { wp: "WP1", title: "Gestão de Projeto e Coordenação", objective: "Garantir execução eficiente, controlo de qualidade, gestão de risco, cumprimento de prazos e gestão financeira", deliverables: "D1.1 Plano de Gestão do Projeto, D1.2 Análise Financeira, D1.3 Relatório Final de Projeto", milestones: "M1 (Jun 2026): Estrutura de governação implementada, M2 (Ago 2026): Avaliação intermédia de execução, M3 (Out 2026): Conclusão formal do projeto", color: "bg-brand-pink" },
                  { wp: "WP2", title: "Disseminação, Comunicação e Envolvimento", objective: "Garantir visibilidade, envolvimento de stakeholders e disseminação de resultados", deliverables: "D2.1 Plano de Comunicação e Disseminação, D2.2 Website do Projeto, D2.3 Kit de Comunicação", milestones: "M4 (Mai 2026): Estratégia de comunicação consolidada, M5 (Mar 2026): Website público ativo, M6 (Jun 2026): Rede de stakeholders estabelecida", color: "bg-brand-teal" },
                  { wp: "WP3", title: "Sustentabilidade e Evidência Científica", objective: "Assegurar robustez científica e conformidade legal", deliverables: "D3.1 Relatório de Conformidade Legal e Proteção de Dados", milestones: "M7 (Mai 2026): Conformidade regulatória assegurada", color: "bg-brand-purple" },
                  { wp: "WP4", title: "Definição de Requisitos e Design", objective: "Levantar necessidades, definir requisitos e criar protótipos", deliverables: "D4.1 Documento de Análise Funcional, D4.2 Protótipo de Design (Alta Fidelidade), D4.3 Documento de Requisitos Técnicos, D4.4 Plano de Testes", milestones: "M8 (Mai 2026): Requisitos funcionais validados, M9 (Jun 2026): Arquitetura técnica aprovada", color: "bg-[#FF8C42]" },
                  { wp: "WP5", title: "Implementação e Desenvolvimento Tecnológico", objective: "Desenvolver e implementar a solução", deliverables: "D5.1 Plataforma Entre Nós (Versão Alpha)", milestones: "M10 (Jul 2026): Conclusão do desenvolvimento, M11 (Set 2026): Plataforma funcional em ambiente de staging", color: "bg-brand-dark" },
                  { wp: "WP6", title: "Prova de Conceito e Validação do Piloto", objective: "Validar a solução em contexto real", deliverables: "D6.1 Relatório de Implementação Piloto", milestones: "M12 (Set 2026): Conclusão do piloto com utilizadores, M12 (Set 2026): Conclusão da prova de conceito", color: "bg-brand-teal" }
                ].map((wp, i) => (
                  <div key={i} className={`bg-white p-8 rounded-3xl h-full border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-full h-2 ${wp.color}`}></div>
                    <div className="flex items-center gap-4 mb-6 mt-2">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 ${wp.color} shadow-md`}>
                        <span className="text-xl font-bold">{wp.wp.replace('WP', '')}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-brand-dark leading-tight">{wp.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Objetivo</div>
                      <p className="text-brand-dark/80 text-sm leading-relaxed font-medium">{wp.objective}</p>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Deliverables</div>
                      <ul className="text-brand-dark/70 text-sm leading-relaxed space-y-1">
                        {wp.deliverables.split(', ').map((d, idx) => <li key={idx} className="flex items-start gap-2"><div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${wp.color}`}></div><span>{d}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Milestones</div>
                      <ul className="text-brand-dark/70 text-sm leading-relaxed space-y-2">
                        {wp.milestones.split(', ').map((m, idx) => {
                          const parts = m.split(':');
                          return (
                            <li key={idx} className="bg-brand-light/50 p-2 rounded-lg border border-gray-50">
                              <span className="font-bold text-brand-dark block text-xs">{parts[0]}</span>
                              <span className="block mt-0.5">{parts[1]}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Análise de Riscos e Gestão */}
          <div className="mb-20">
            <FadeIn delay={0.4}>
              <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">Análise de Riscos e Gestão</h3>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-dark text-white">
                        <th className="p-6 font-bold text-lg w-1/4">Risco Identificado</th>
                        <th className="p-6 font-bold text-lg w-1/6">Impacto</th>
                        <th className="p-6 font-bold text-lg">Estratégia de Gestão</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { risk: "Risco de inconformidade legal (ex. RGPD) e de falha de garantia de privacidade", impact: "Muito Alto", strategy: "Implementação de \"Privacy by Design\". Dados sensíveis são anonimizados e nunca vendidos a terceiros.", color: "text-red-500 bg-red-50" },
                        { risk: "Desinformação no Fórum", impact: "Alto", strategy: "Sistema de moderação híbrido: IA bloqueia termos ofensivos instantaneamente; moderadores humanos validam contextos complexos.", color: "text-orange-500 bg-orange-50" },
                        { risk: "Responsabilidade Legal", impact: "Alto", strategy: "Termos de uso claros especificando que a plataforma é de apoio e literacia, não substituindo consultas médicas de emergência.", color: "text-orange-500 bg-orange-50" },
                        { risk: "Dependência de Financiamento", impact: "Médio", strategy: "Diversificação de fontes de receita (B2B, B2G e subsídios europeus) para evitar dependência de um único cliente.", color: "text-yellow-600 bg-yellow-50" },
                        { risk: "Baixa Adoção Inicial", impact: "Médio", strategy: "Parcerias com criadores de conteúdo educativo alinhados com as necessidades das instituições que falem a linguagem dos jovens e parcerias com escolas.", color: "text-yellow-600 bg-yellow-50" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-brand-light/50 transition-colors">
                          <td className="p-6 font-bold text-brand-dark">{row.risk}</td>
                          <td className="p-6">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${row.color}`}>
                              {row.impact}
                            </span>
                          </td>
                          <td className="p-6 text-brand-dark/70 leading-relaxed">{row.strategy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Gestão de Riscos Operacionais */}
          <div className="mb-10">
            <FadeIn delay={0.5}>
              <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-brand-dark/40">Gestão de Riscos Operacionais</h3>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-teal text-white">
                        <th className="p-6 font-bold text-lg w-1/4">Risco</th>
                        <th className="p-6 font-bold text-lg w-1/4">Impacto</th>
                        <th className="p-6 font-bold text-lg">Mitigação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { risk: "Baixa adesão inicial", impact: "Redução de engagement e validação", mitigation: "Estratégias de comunicação segmentadas, testes com grupos piloto, embaixadores digitais" },
                        { risk: "Falhas técnicas na plataforma", impact: "Interrupção do serviço, perda de confiança", mitigation: "Infraestrutura redundante, monitorização contínua, QA rigoroso e testes de stress" },
                        { risk: "Problemas na moderação por IA", impact: "Disseminação de informação incorreta", mitigation: "Revisão humana complementar, protocolos de sinalização, atualização contínua do algoritmo" },
                        { risk: "Atrasos no cronograma", impact: "Impacto financeiro e operacional", mitigation: "Planeamento flexível, milestones mensuráveis, reuniões semanais de acompanhamento" },
                        { risk: "Conformidade legal e ética", impact: "Multas ou danos reputacionais", mitigation: "Consultoria jurídica, auditorias internas, protocolos de anonimato e privacidade" },
                        { risk: "Concorrência emergente", impact: "Perda de vantagem competitiva", mitigation: "Fortalecimento da marca, efeito de rede, proteção da propriedade intelectual" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-brand-light/50 transition-colors">
                          <td className="p-6 font-bold text-brand-dark">{row.risk}</td>
                          <td className="p-6 text-brand-dark/80 font-medium">{row.impact}</td>
                          <td className="p-6 text-brand-dark/70 leading-relaxed">{row.mitigation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-brand-dark/60 italic mt-8 max-w-3xl mx-auto">
                A nossa operação é desenhada para ser resiliente, priorizando sempre a segurança do utilizador e a integridade da informação, o que constitui a base do nosso valor de mercado.
              </p>
            </FadeIn>
          </div>

          <ChapterNavigation 
            prev={{ id: 'vendas', name: 'Estratégia de Vendas' }} 
            next={{ id: 'equipa', name: 'A Equipa' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>
      )}

      {/* Equipa */}
      {activeChapter === 'equipa' && (
      <>
      <section id="equipa" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa Equipa</h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                O projeto é desenvolvido por uma equipa multidisciplinar que combina competências nas áreas da engenharia biomédica, investigação científica, desenvolvimento tecnológico, experiência do utilizador e comunicação em saúde. A diversidade de competências permite assegurar simultaneamente o rigor científico, a qualidade tecnológica da plataforma e a capacidade de chegar ao público jovem de forma eficaz e responsável.
              </p>
              <p className="text-lg text-brand-dark/70 leading-relaxed mt-4">
                A motivação da equipa resulta da identificação de uma necessidade crescente de informação acessível, cientificamente rigorosa e adaptada às necessidades dos jovens no domínio da sexualidade, relações e afetos, contribuindo para uma maior literacia em saúde e para relações mais saudáveis.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Equipa Entre Nós" 
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Inês Lourenço", 
                role: "Gestora de Projeto", 
                desc: "Mestre em Engenharia Biomédica, com experiência consolidada em gestão de equipas, coordenação de projetos e desenvolvimento de parcerias estratégicas, incluindo projetos com dimensão internacional. No projeto, assume a gestão global e estratégica, garantindo a articulação entre as diferentes áreas da equipa e o desenvolvimento de parcerias relevantes.", 
                color: "bg-brand-pink" 
              },
              { 
                name: "Liliana Dinis", 
                role: "Responsável pela Revisão Científica", 
                desc: "Doutorada em Biomedicina, possui experiência consolidada em investigação biomédica, implementação de projetos científicos e gestão de estudos clínicos. No projeto, é responsável pela revisão técnica dos conteúdos e pela garantia da fidedignidade clínica e científica da informação disponibilizada na plataforma.", 
                color: "bg-brand-teal" 
              },
              { 
                name: "Sara Russo", 
                role: "Requisitos de Utilizador e Testes de Usabilidade", 
                desc: "Mestre em Engenharia Biomédica, com formação orientada para análise de sistemas, definição de requisitos e avaliação de soluções tecnológicas na área da saúde. No projeto, é responsável pela definição de requisitos de utilizador, planeamento e execução de testes de usabilidade e validação final da plataforma.", 
                color: "bg-brand-purple" 
              },
              { 
                name: "Miguel Figueira", 
                role: "Desenvolvimento Tecnológico e Arquitetura", 
                desc: "Licenciado em Engenharia Informática e especialista em Gestão de Sistemas de Informação, possui experiência significativa em gestão de desenvolvimento de software, análise técnica e definição de requisitos de sistemas digitais. No projeto, é responsável pelo levantamento de requisitos técnicos, design da interface e prototipagem funcional da plataforma.", 
                color: "bg-[#FF8C42]" 
              },
              { 
                name: "Andredina Cardoso", 
                role: "Disseminação, Marketing Digital e Comunidade", 
                desc: "Formação especializada em gestão de projetos em parceria, aliada a experiência na implementação de programas de saúde, colaboração com múltiplos stakeholders e dinamização de iniciativas associativas e comunitárias. No projeto, é responsável pela estratégia de disseminação, marketing digital e gestão da comunidade da plataforma.", 
                color: "bg-brand-dark" 
              }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-brand-light/30 p-8 rounded-3xl h-full border border-gray-100 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0 ${member.color}`}>
                      <span className="text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <div className={`text-sm font-bold uppercase tracking-wider mt-1 ${member.color.replace('bg-', 'text-')}`}>{member.role}</div>
                    </div>
                  </div>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 bg-brand-teal/10 p-8 rounded-3xl border border-brand-teal/20 text-center max-w-4xl mx-auto">
              <p className="text-lg text-brand-dark/80 font-medium leading-relaxed">
                A equipa conta ainda com o apoio de um Conselho Consultivo de Saúde, composto por médicos e psicólogos, garantindo acompanhamento contínuo e alinhamento ético e clínico.
              </p>
            </div>
          </FadeIn>

          <ChapterNavigation 
            prev={{ id: 'operacoes', name: 'Operações' }} 
            next={{ id: 'financas', name: 'Finanças' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </section>


      </>
      )}

      {/* Finanças */}
      {activeChapter === 'financas' && (
      <div className="bg-brand-light">
        <Financials />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <ChapterNavigation 
            prev={{ id: 'equipa', name: 'A Equipa' }} 
            next={{ id: 'home', name: 'Início' }} 
            setActiveChapter={setActiveChapter} 
          />
        </div>
      </div>
      )}

      {/* CTA / Footer */}
      <section id="contacto" className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <NavLogo />
            <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-10">Pronto para investir na mudança da literacia em saúde sexual e afetos em Portugal?</h2>
            <a href="mailto:entrenos.novaproject@gmail.com" className="inline-block px-8 py-4 rounded-full bg-white text-brand-dark font-bold text-lg hover:bg-brand-teal hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
              Agendar Reunião com os Founders
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-brand-dark border-t border-white/10 py-8 text-center text-white/50 text-sm">
        <p>&copy; 2026 Entre Nós. Confidencial - Apenas para Investidores.</p>
      </footer>
    </div>
  );
}

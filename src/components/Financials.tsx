import React, { useState } from 'react';
import { Users, Server, Calculator, TrendingUp, DollarSign, PieChart } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <div className={`animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both ${className}`} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

const hrCosts = [
  { role: 'Programador', cost: 30, fte: 1, hours: 800, total: 24000 },
  { role: 'Analista Funcional', cost: 35, fte: 1, hours: 320, total: 11200 },
  { role: 'Manager', cost: 45, fte: 0.8, hours: 768, total: 34560 },
  { role: 'Especialista de IA', cost: 50, fte: 0.4, hours: 128, total: 6400 },
  { role: 'Especialista de Comunicação e Marketing', cost: 30, fte: 0.4, hours: 384, total: 11520 },
  { role: 'Revisor Científico', cost: 40, fte: 0.4, hours: 256, total: 10240 },
];

const matCosts = [
  { item: 'Software Licença', cost: 5000, qty: 1, total: 5000 },
  { item: 'Infraestrutura', cost: 600, qty: 6, total: 3600 },
  { item: 'Despesas de representação', cost: 1000, qty: 1, total: 1000 },
  { item: 'Materiais Marketing', cost: 2500, qty: 1, total: 2500 },
  { item: 'Custos administrativos', cost: 1000, qty: 6, total: 6000 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(value);
};

export const Financials = () => {
  const [activeTab, setActiveTab] = useState<'hr' | 'mat'>('hr');
  const [discountRate, setDiscountRate] = useState<number>(10);

  const totalHR = hrCosts.reduce((acc, curr) => acc + curr.total, 0);
  const totalMat = matCosts.reduce((acc, curr) => acc + curr.total, 0);
  const totalCost = 116020;
  const margin = 0.10;
  const finalCost = 127622;

  // VAL Calculation
  const cf0 = -127622;
  const cf1 = 250000;
  const val = cf0 + (cf1 / Math.pow(1 + discountRate / 100, 1));

  return (
    <section id="financas" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-brand-teal to-brand-purple text-white shadow-lg mb-6">
              <Calculator size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-purple to-brand-teal">
              Orçamento e Finanças
            </h2>
            <p className="text-lg md:text-xl text-brand-dark/70 font-medium">
              Estrutura de custos detalhada para o desenvolvimento e lançamento do projeto.
            </p>
          </div>
        </FadeIn>

        {/* Análise de Investimento (VAL) */}
        <FadeIn delay={0.1}>
          <div className="mb-16 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-8">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">Valor Atual Liquido (VAL)</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Inputs & Cash Flows */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sm text-brand-dark/60 font-bold mb-1">Período 0 (Investimento)</div>
                    <div className="text-xl font-black text-brand-pink">{formatCurrency(cf0)}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sm text-brand-dark/60 font-bold mb-1">Valor de venda da Solução Chave-Na-Mão para o cliente principal</div>
                    <div className="text-xl font-black text-brand-teal">{formatCurrency(cf1)}</div>
                  </div>
                </div>

                <div className="bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/20">
                  <p className="text-sm text-brand-dark/70 mb-4 italic">Pode ajustar aqui a sua taxa de atualização e verificar o impacto no seu retorno</p>
                  <label className="flex justify-between text-sm font-bold text-brand-dark mb-4">
                    <span>Taxa de Actualização</span>
                    <span className="text-brand-teal text-lg">{discountRate}%</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    step="0.5"
                    value={discountRate} 
                    onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
                    className="w-full accent-brand-teal"
                  />
                  <div className="flex justify-between text-xs text-brand-dark/40 mt-2 font-medium">
                    <span>1%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-brand-dark to-brand-dark/90 rounded-2xl text-white shadow-xl h-full">
                <div className="text-white/60 font-bold uppercase tracking-wider mb-2 text-sm">Valor Atual Líquido (VAL)</div>
                <div className={`text-5xl font-black ${val >= 0 ? 'text-green-400' : 'text-brand-pink'}`}>
                  {formatCurrency(val)}
                </div>
                <div className="mt-4 text-sm text-center text-white/70">
                  {val >= 0 
                    ? "Projeto viável. O retorno supera o custo de capital." 
                    : "Projeto inviável com esta taxa de atualização."}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* TIR and Payback Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-brand-teal to-brand-dark p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Taxa Interna de Rendibilidade (TIR)</h3>
                </div>
                <div className="flex items-end gap-4 mb-4">
                  <div className="text-6xl font-black">95.9%</div>
                  <div className="text-brand-teal-light font-bold mb-2">Rentabilidade Estimada</div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  A TIR de 95,9% demonstra a elevada eficiência do capital investido. Mesmo com uma taxa de atualização de {discountRate}%, a margem de segurança é de {(95.9 - discountRate).toFixed(1)}%.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Payback Period</h3>
                </div>
                <div className="flex items-end gap-4 mb-4">
                  <div className="text-6xl font-black">12</div>
                  <div className="text-white/80 font-bold mb-2 text-xl uppercase tracking-widest">Meses</div>
                </div>
                <div className="inline-block bg-white/20 px-6 py-2 rounded-full font-black text-lg mb-4">
                  Payback em 12 meses
                </div>
                <p className="text-white/70 leading-relaxed">
                  Recuperação total do investimento inicial no primeiro ano de operação comercial, garantindo liquidez e sustentabilidade.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Detailed Breakdown */}
        <FadeIn delay={0.5}>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab('hr')}
                className={`flex-1 py-4 px-6 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'hr' ? 'bg-brand-teal/5 text-brand-teal border-b-2 border-brand-teal' : 'text-brand-dark/50 hover:bg-gray-50'
                }`}
              >
                <Users size={18} />
                Recursos Humanos ({formatCurrency(totalHR)})
              </button>
              <button
                onClick={() => setActiveTab('mat')}
                className={`flex-1 py-4 px-6 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'mat' ? 'bg-brand-purple/5 text-brand-purple border-b-2 border-brand-purple' : 'text-brand-dark/50 hover:bg-gray-50'
                }`}
              >
                <Server size={18} />
                Materiais e Operações ({formatCurrency(totalMat)})
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-x-auto">
              {activeTab === 'hr' && (
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase">Função</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Custo/Hora</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">FTE</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Horas</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Custo Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hrCosts.map((item, index) => (
                      <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                        <td className="py-4 px-4 font-medium text-brand-dark">{item.role}</td>
                        <td className="py-4 px-4 text-right text-brand-dark/70">{formatCurrency(item.cost)}</td>
                        <td className="py-4 px-4 text-right text-brand-dark/70">{item.fte}</td>
                        <td className="py-4 px-4 text-right text-brand-dark/70">{item.hours}h</td>
                        <td className="py-4 px-4 text-right font-bold text-brand-teal group-hover:text-brand-pink transition-colors">{formatCurrency(item.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'mat' && (
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase">Item</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Custo Unitário</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Qtd (FTE/Meses)</th>
                      <th className="py-3 px-4 text-sm font-bold text-brand-dark/60 uppercase text-right">Custo Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matCosts.map((item, index) => (
                      <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                        <td className="py-4 px-4 font-medium text-brand-dark">{item.item}</td>
                        <td className="py-4 px-4 text-right text-brand-dark/70">{formatCurrency(item.cost)}</td>
                        <td className="py-4 px-4 text-right text-brand-dark/70">{item.qty}</td>
                        <td className="py-4 px-4 text-right font-bold text-brand-purple group-hover:text-brand-pink transition-colors">{formatCurrency(item.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

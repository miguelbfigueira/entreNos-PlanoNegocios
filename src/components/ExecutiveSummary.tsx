import React from 'react';
import { BookOpen, Shield, Users, Target, Heart, Sparkles, MessageCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Logo = ({ className = "w-10 h-auto" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 200 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
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
  </div>
);

export const ExecutiveSummary = () => {
  return (
    <div className="space-y-24">
      {/* The Story */}
      <FadeIn>
        <div className="relative bg-gradient-to-br from-brand-pink/10 via-brand-purple/5 to-brand-teal/10 rounded-[3rem] p-8 md:p-16 overflow-hidden border border-white/50 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-brand"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-brand-pink mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed mb-6">
              Era uma vez o Carlos, um jovem de 17 anos que tinha uma pergunta simples — mas difícil de fazer em voz alta. Não era uma emergência médica, não queria marcar consulta, nem expor‑se a olhares ou julgamentos. Pegou no telemóvel e fez o que quase todos fazem: pesquisou na internet.
            </p>
            <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed mb-8">
              Encontrou artigos científicos difíceis de compreender, vídeos contraditórios no TikTok, comentários anónimos em fóruns e opiniões que se anulavam mutuamente. Informação havia muita. Confiança, quase nenhuma.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-brand-purple">
              E, mais uma vez, ficou sozinho com a dúvida.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* The Reality & Market Gap */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h3 className="text-3xl font-bold text-brand-dark mb-6">A Realidade Fragmentada</h3>
          <p className="text-lg text-brand-dark/80 mb-8 leading-relaxed">
            Esta história não é exceção. É a realidade quotidiana de milhares de jovens portugueses entre os 14 e os 30 anos, que procuram informação sobre sexualidade, afetos e relações em canais digitais porque estes oferecem anonimato, acessibilidade e conveniência. No entanto, o mercado atual apresenta‑se profundamente fragmentado:
          </p>
          <div className="space-y-4">
            {[
              { text: "A informação científica existe, mas é pouco interativa e distante da linguagem jovem.", icon: <BookOpen className="w-5 h-5" /> },
              { text: "O apoio profissional existe, mas é condicionado por barreiras de acesso.", icon: <Shield className="w-5 h-5" /> },
              { text: "A interação existe, mas frequentemente sem credibilidade.", icon: <MessageCircle className="w-5 h-5" /> },
              { text: "As apps existem, mas não educam.", icon: <AlertTriangle className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-brand-pink shrink-0 mt-1">{item.icon}</div>
                <p className="text-brand-dark font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-brand-dark text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl"></div>
            <AlertTriangle className="w-12 h-12 text-brand-pink mb-6" />
            <h4 className="text-2xl font-bold mb-4">O Impacto Real</h4>
            <p className="text-lg text-white/80 leading-relaxed">
              O resultado é uma lacuna crítica na literacia em saúde sexual, com impactos reais: aumento de infeções sexualmente transmissíveis, gravidezes não planeadas e custos evitáveis para o Serviço Nacional de Saúde.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* The Solution */}
      <FadeIn>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-brand"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <Logo className="w-12" />
                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">
                  A Solução: Entre Nós
                </h3>
              </div>
              <p className="text-xl text-brand-dark/80 mb-12 leading-relaxed">
                Foi neste espaço vazio — entre a informação e a confiança — que nasceu o Entre Nós. Uma plataforma digital que cria um ecossistema de confiança em saúde sexual e afetos, pensado de raiz para jovens. Não é apenas um site informativo, nem mais uma app. É um espaço seguro onde a ciência encontra a vivência real, e onde as perguntas difíceis podem finalmente ser feitas sem medo.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Conteúdos Validados", desc: "Cientificamente validados, em língua portuguesa e com linguagem acessível.", icon: <BookOpen /> },
                  { title: "Interação entre Pares", desc: "Promovendo aprendizagem coletiva e identificação com experiências semelhantes.", icon: <Users /> },
                  { title: "Anonimato Garantido", desc: "Através de avatares, reduzindo estigma e inibição.", icon: <Shield /> },
                  { title: "Apoio Profissional", desc: "Acesso a profissionais de saúde qualificados.", icon: <Heart /> },
                  { title: "Moderação Híbrida", desc: "Integra Inteligência Artificial (AI Fact Check) e validação humana, assegurando rigor e segurança.", icon: <Sparkles /> },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-gradient-to-br from-brand-pink/10 via-brand-purple/5 to-brand-teal/10 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-teal mb-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h4>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-teal rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-square w-full max-w-[320px] bg-white border border-gray-100 rounded-[2rem] p-10 flex items-center justify-center text-center shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-brand"></div>
                    <Sparkles className="absolute top-6 right-6 w-6 h-6 text-brand-pink/20" />
                    <p className="text-brand-dark font-bold text-xl leading-relaxed italic">
                      "Ao equilibrar credibilidade científica e elevada interação, o Entre Nós posiciona‑se num segmento emergente do mercado de saúde digital que, até agora, permanecia por ocupar."
                    </p>
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center gap-8">
              <div className="mt-6">
                <a 
                  href="https://entrenos-website.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <Sparkles size={20} />
                  Visite já o site do nosso projeto
                </a>
              </div>

              <div className="relative w-full max-w-[460px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
                {/* Tablet Camera */}
                <div className="absolute top-2 inset-x-0 flex justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                </div>
                
                {/* Tablet Screen Content (Iframe) */}
                <div className="flex-1 bg-white overflow-hidden relative rounded-[1.5rem]">
                  <div className="absolute top-0 left-0 w-full animate-phone-scroll" style={{ height: '2500px' }}>
                    <iframe 
                      src="https://entre-nos-community.netlify.app/" 
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                      title="Entre Nós App Preview"
                    />
                  </div>
                </div>
              </div>
              
              <a 
                href="https://entre-nos-community.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-brand-teal text-brand-teal font-bold rounded-full hover:bg-brand-teal hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Visite o protótipo <span className="font-black uppercase tracking-wider ml-1">“Entre Nós”</span> neste link
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Mission, Vision & Business Model */}
      <div className="grid md:grid-cols-3 gap-8">
        <FadeIn delay={0.1} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
          <Target className="w-10 h-10 text-brand-pink mb-6" />
          <h4 className="text-2xl font-bold text-brand-dark mb-4">Missão</h4>
          <p className="text-brand-dark/80 leading-relaxed">
            Promover a literacia em saúde sexual e afetos entre jovens, oferecendo informação fiável, acessível e segura.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
          <Lightbulb className="w-10 h-10 text-brand-teal mb-6" />
          <h4 className="text-2xl font-bold text-brand-dark mb-4">Visão</h4>
          <p className="text-brand-dark/80 leading-relaxed">
            Tornar o Entre Nós a principal referência digital em Portugal na promoção de relações saudáveis, prevenção em saúde sexual e combate à desinformação.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
          <Users className="w-10 h-10 text-brand-purple mb-6" />
          <h4 className="text-2xl font-bold text-brand-dark mb-4">Vantagem Competitiva</h4>
          <p className="text-brand-dark/80 leading-relaxed">
            Uma comunidade cujo valor cresce com cada utilizador, sustentada por confiança, validação científica e efeito de rede. Solução escalável, adaptável e sustentável.
          </p>
        </FadeIn>
      </div>

      {/* Business Model B2G */}
      <FadeIn>
        <div className="bg-gradient-to-r from-brand-dark to-brand-purple text-white rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h4 className="text-3xl font-bold mb-6">Modelo de Negócio B2G – Solução Chave-na-Mão</h4>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Com um investimento inicial estimado de 127 622 euros e um período de retorno financeiro previsto de 12 meses, o Entre Nós posiciona-se como uma oportunidade estratégica para gerar impacto social mensurável aliado a sustentabilidade financeira. O projeto adota um modelo B2G (Business-to-Government), baseado na comercialização institucional da plataforma a entidades públicas do setor da saúde, tendo a Direção-Geral da Saúde como cliente estratégico prioritário.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              Este modelo assegura receitas estáveis, previsibilidade contratual e elevado potencial de escala nacional e internacional (possível adaptação do modelo para países lusófonos). Enquanto solução digital integrada e chave-na-mão, o Entre Nós contribui para a melhoria da literacia em saúde sexual, promovendo a prevenção e reduzindo custos associados a situações evitáveis. Ao otimizar a utilização de recursos públicos e melhorar indicadores de saúde, o projeto gera valor económico e social sustentável, alinhado com as prioridades atuais dos sistemas de saúde e com oportunidades de financiamento público e institucional.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">B2G</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Impacto &<br/>Sustentabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Conclusion */}
      <FadeIn>
        <div className="text-center max-w-4xl mx-auto py-12">
          <p className="text-2xl text-brand-dark/80 mb-8 leading-relaxed">
            No final, o Entre Nós existe para mudar o desfecho da história inicial. Para que, da próxima vez que um jovem pegue no telemóvel à procura de respostas, não encontre silêncio, confusão ou medo — mas sim um lugar seguro que diga:
          </p>
          <div className="inline-block">
            <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-teal pb-2">
              “Podes perguntar, fica Entre Nós”
            </h3>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

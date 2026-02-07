import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Star, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Gift, 
  Sun, 
  CloudRain 
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-700">{question}</span>
        {isOpen ? <ChevronUp className="text-purple-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </p>
      )}
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  pet: string;
  text: string;
  stars: number;
  role?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, pet, text, stars, role = "Mãe do", image }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
    <div className="flex text-yellow-400 mb-3">
      {[...Array(stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
    </div>
    <p className="text-gray-600 italic mb-4 flex-grow">"{text}"</p>
    <div className="mt-auto flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold overflow-hidden relative shrink-0">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          name.charAt(0)
        )}
      </div>
      <div>
        <p className="font-bold text-gray-800 text-sm">{name}</p>
        <p className="text-xs text-purple-500 font-medium">{role} {pet}</p>
      </div>
    </div>
  </div>
);

const LandingPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar rolagem e mostrar a barra fixa
  useEffect(() => {
    const handleScroll = () => {
      // Ajustado para 50px para aparecer mais rápido no mobile
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = () => {
    window.open('https://pay.kiwify.com.br/tVM1G2F', '_blank');
  };

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-purple-100 selection:text-purple-900">

      {/* Custom Styles for Heartbeat Animation */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(22, 163, 74, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }
        .animate-heartbeat {
          animation: heartbeat 2s infinite;
        }
      `}</style>

      {/* BARRA DE AVISO (Urgency/Scarcity subtle) */}
      <div className="bg-purple-50 flex items-center justify-center py-3 px-4 shadow-sm relative z-50">
        <span className="text-xs md:text-sm font-bold text-purple-900 uppercase tracking-widest text-center">
          Acolhimento imediato para quem perdeu um PET
        </span>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-8 pb-16 px-4 md:pt-16 md:pb-24 overflow-visible">
        <div className="max-w-4xl mx-auto text-center relative z-[60]">

          {/* Container Mobile para Badge + Anjos */}
          <div className="flex items-center justify-center gap-2 mb-6 w-full">
            {/* Anjo Mobile Esquerdo */}
            <img 
              src="https://lh3.googleusercontent.com/d/1cf325XioKo38evfjwOui4WeZL5TLeXi1" 
              alt="Anjo Esquerdo"
              className="md:hidden w-[4.5rem] h-[4.5rem] object-contain mix-blend-multiply"
            />
            
            <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm md:text-base font-bold border border-green-100 shadow-sm">
              Para Trocar o LUTO por AMOR
            </div>

            {/* Anjo Mobile Direito */}
            <img 
              src="https://lh3.googleusercontent.com/d/1XZLV7iyuXmPe8Tdtf6Vh3mj7AGXi8aX4" 
              alt="Anjo Direito"
              className="md:hidden w-[4.5rem] h-[4.5rem] object-contain mix-blend-multiply"
            />
          </div>

          {/* Container Relativo para o Título e os Anjos (Desktop) */}
          <div className="relative w-full mx-auto">
            
            {/* Anjo Esquerdo - Desktop Only */}
            <img 
              src="https://lh3.googleusercontent.com/d/1cf325XioKo38evfjwOui4WeZL5TLeXi1" 
              alt="Anjo Esquerdo"
              referrerPolicy="no-referrer"
              className="hidden md:block absolute -left-12 lg:-left-32 -top-40 lg:-top-60 h-40 lg:h-56 w-auto object-contain mix-blend-multiply pointer-events-none"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.onerror = null;
                t.src = "https://placehold.co/150x200/purple/white?text=Anjo+Esq";
              }}
            />

            {/* Anjo Direito - Desktop Only */}
            <img 
              src="https://lh3.googleusercontent.com/d/1XZLV7iyuXmPe8Tdtf6Vh3mj7AGXi8aX4" 
              alt="Anjo Direito"
              referrerPolicy="no-referrer"
              className="hidden md:block absolute -right-12 lg:-right-32 -top-40 lg:-top-60 h-40 lg:h-56 w-auto object-contain mix-blend-multiply pointer-events-none"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.onerror = null;
                t.src = "https://placehold.co/150x200/purple/white?text=Anjo+Dir";
              }}
            />

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight relative z-10">
              Sua Dor é Real e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Tem Cura</span>: Descubra Como Transformar o Vazio do Luto em uma <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Conexão Eterna</span>.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
            Descubra como transformar a dor da perda, a culpa e o vazio silencioso em uma saudade serena em apenas 7 dias — entenda os sinais de que o seu filho de 4 Patas continua olhando por você
          </p>

          <div className="flex flex-col items-center justify-center gap-6 relative z-10">
            <button
              onClick={handleCheckout}
              className="animate-heartbeat w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-5 px-10 rounded-full shadow-xl shadow-green-200/50 flex items-center justify-center gap-2 border-b-4 border-green-800 active:border-b-0 active:translate-y-1 transition-all"
            >
              SIM, QUERO CURAR MEU CORAÇÃO
              <ArrowRight size={24} strokeWidth={3} />
            </button>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <ShieldCheck size={14} /> Compra 100% Segura e Acesso Imediato
            </span>
          </div>

          {/* MOCKUP IMAGE AREA */}
          <div className="mt-12 relative max-w-sm mx-auto md:max-w-lg">
            <div className="absolute inset-0 bg-purple-200 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            {/* Fallback visual if image fails or while loading */}
            <div className="relative z-10 transform hover:scale-105 transition-duration-500">
              {/* Replace src with actual path if available, utilizing alt text for context */}
              <img
                src="https://lh3.googleusercontent.com/d/1y7PZfKkSKpSjiUHIaB1Lc7l2bs8P3RGI"
                alt="Capa do Livro Digital ETERNO"
                referrerPolicy="no-referrer"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Try one more fallback if the direct link fails
                  if (target.src.includes('lh3.googleusercontent.com')) {
                      target.src = "https://placehold.co/600x800/7c3aed/ffffff?text=Capa+Indisponivel";
                  } else {
                      target.style.display = 'none';
                      if (target.nextSibling) {
                        (target.nextSibling as HTMLElement).style.display = 'flex';
                      }
                  }
                }}
              />
              <div className="hidden w-full aspect-[3/4] bg-gradient-to-br from-purple-100 to-white border border-gray-200 rounded-lg flex-col items-center justify-center p-6 shadow-2xl text-center">
                <BookOpen size={64} className="text-purple-300 mb-4" />
                <h3 className="text-2xl font-serif text-gray-800 font-bold">ETERNO</h3>
                <p className="text-sm text-gray-500 mt-2">O Guia Definitivo</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO DA DOR - EMPATIA PROFUNDA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <CloudRain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              "Como eu faço para diminuir o sofrimento?"
            </h2>
            <div className="w-24 h-1 bg-purple-300 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Você receberá um Protocolo de Recodificação Emocional que vai revelar o que os médicos não te contam: Quando você olhava para o seu pet, seu cérebro liberava a mesma química que uma mãe sente ao olhar para um bebê. Agora que ele partiu, seu cérebro entrou em colapso químico.
            </p>
            <p>
              A culpa, o "e se eu tivesse feito diferente", a dor no peito... tudo isso são sintomas físicos de um amor que perdeu seu endereço.
            </p>
            <p>
              Você não precisa de "tempo". O tempo não cura nada, ele só acumula poeira. Você precisa desse Protocolo para diminuir a DOR e manter o AMOR saudável e eterno.
            </p>
            <p>
              E então vem o pior de tudo: <strong>A Culpa.</strong>
            </p>
            <p className="bg-white p-6 rounded-lg border-l-4 border-purple-400 shadow-sm italic">
              "E se eu tivesse levado ao veterinário antes?"<br />
              "E se eu tivesse escolhido outro tratamento?"<br />
              "Será que ele sabia o quanto eu o amava na hora de partir?"
            </p>
            <p>
              As pessoas ao seu redor dizem "foi só um cachorro" ou "logo você arruma outro". Mas você sabe que não é verdade. <strong className="text-purple-700">Você não perdeu um animal. Você perdeu um filho.</strong>
            </p>
            <p>
              Essa dor é física, real e dilacerante. Mas eu preciso te dizer uma coisa: <strong>Você não precisa carregar esse peso sozinha para sempre.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DA SOLUÇÃO - O LIVRO */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">
                <Sun size={18} /> O Caminho da Cura
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                O Guia ETERNO é um ABRAÇO em forma de PALAVRAS
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                O guia <strong>ETERNO</strong> não é sobre esquecer. É sobre lembrar com amor, e não com dor. Desenvolvido com base na neurociência do luto e na espiritualidade acolhedora.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Validação Científica", desc: "Entenda por que seu cérebro processa essa perda exatamente como a perda de um parente próximo." },
                  { title: "O Fim da Culpa", desc: "Uma técnica poderosa de perdão para silenciar o 'E se...' e encontrar paz com suas decisões." },
                  { title: "Conexão Espiritual", desc: "Aprenda a identificar os sinais sutis de que ele continua cuidando de você (Sonhos, Sinais e a Ponte do Arco-Íris)." },
                  { title: "Rituais de Passagem", desc: "Como lidar com as cinzas, a coleira e os brinquedos sem sentir que está apagando a memória dele." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="text-green-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <img
                src="https://lh3.googleusercontent.com/d/1QHA7_d_13eWAFOd_-w9S8TIVVdSjwCQw"
                alt="Páginas internas do ETERNO"
                className="relative z-10 w-full drop-shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-125 active:scale-125 transition-all duration-500 cursor-zoom-in origin-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/600x800/EEE/999?text=Capa+3D+Eterno";
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE AUTORIDADE */}
      <section className="py-14 bg-purple-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-pink-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6">"Com Amor, Mariana Salles"</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full flex-shrink-0 border-4 border-white/20 overflow-hidden relative shadow-lg">
              <img 
                src="https://lh3.googleusercontent.com/d/1UghoZQda0jAkIEPCzXxBACm3iz5-beDD" 
                alt="Mariana Salles e Fred" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  t.src = "https://placehold.co/200x200/gray/white?text=Mariana+e+Fred";
                }}
              />
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-4">
                "Sou mãe do Fred e pesquisadora independente. Quando perdi meu cão, entrei num buraco negro que parecia sem fim. Nenhum livro de autoajuda falava a minha língua."
              </p>
              <p className="text-base font-light opacity-80">
                Escrevi este guia como o manual que eu gostaria de ter recebido no meu dia mais triste. De uma mãe de pet para outra, para te provar que o amor nunca morre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - DEPOIMENTOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Corações que encontraram a paz
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              stars={5}
              text="Eu achava que nunca mais ia sorrir. O conteúdo sobre o 'Reencontro Invisível' mudou minha vida. Senti o cheiro dele enquanto lia. Obrigada, Mariana."
              name="Carla Mendes"
              pet="Thor (Golden)"
              image="https://lh3.googleusercontent.com/d/1v-7HOL3w45nqURnrUqZRhLCMfxk9eBTl"
            />
            <TestimonialCard
              stars={5}
              text="A técnica do perdão foi um divisor de águas. Eu me culpava por ter optado pela eutanásia, mas o GUIA me mostrou que foi meu último ato de amor."
              name="Roberto Figueira"
              pet="Nina (Poodle)"
              role="Pai da"
              image="https://lh3.googleusercontent.com/d/1w67-LOsu5mHwVmZToefQ4UG6lmi9pwDW"
            />
            <TestimonialCard
              stars={5}
              text="Direto ao ponto, sem enrolação e com uma sensibilidade incrível. Depois que ele se foi, pela primeira vez em meses, dormi em paz."
              name="Ana Paula Souza"
              pet="Billy (SRD)"
              image="https://lh3.googleusercontent.com/d/1fRb8ZcqdQAm34kz1w2O6-LsZxvaFUJVW"
            />
          </div>
        </div>
      </section>

      {/* OFERTA IRRESISTÍVEL (STACK) */}
      <section id="oferta" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-2 border-purple-100 rounded-3xl p-6 md:p-10 shadow-xl bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-8 py-2 transform rotate-45 translate-x-10 translate-y-6 text-sm shadow-md">
              OFERTA
            </div>

            <div className="text-center mb-8">
              <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Acesso Completo + Bônus Exclusivos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                O Protocolo Eterno + 3 Presentes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-purple-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Protocolo Completo: ETERNO</h4>
                    <p className="text-sm text-gray-500">A Jornada de 7 Dias para Curar o Luto Pet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Bônus 1: Áudioneuroterapia</h4>
                    <p className="text-sm text-gray-500">Sessão de Emergência "O Último Abraço": para momentos de crise de choro aguda. Meditação Neurocientífica para Diminuir a Dor.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Bônus 2: Cards de Apoio Emocional</h4>
                    <p className="text-sm text-gray-500">Para vencer o Luto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Bônus 3: O Livro da Vida</h4>
                    <p className="text-sm text-gray-500">Páginas para você imprimir/preencher e jamais esquecer detalhes da lembrança do seu Pet</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center items-center text-center border border-gray-100">
                <p className="text-gray-400 line-through text-lg">De R$ 97,90</p>
                <div className="flex items-baseline gap-1 my-2">
                  <span className="text-sm font-bold text-gray-600">Por apenas</span>
                  <span className="text-5xl font-extrabold text-green-600">37,90</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Pagamento Único • Acesso Vitalício</p>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  SIM, QUERO O GUIA ETERNO
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* GARANTIA */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-purple-50 p-4 rounded-xl">
              <ShieldCheck className="w-10 h-10 text-purple-600" />
              <div className="text-center md:text-left">
                <h4 className="font-bold text-purple-900">Garantia Incondicional de 7 Dias</h4>
                <p className="text-sm text-purple-700">Se este guia não trouxer paz ao seu coração, eu devolvo 100% do seu dinheiro. Sem perguntas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-2">
            <MessageCircle className="text-purple-500" /> Dúvidas Frequentes
          </h2>
          <div className="space-y-2">
            <FAQItem
              question="Tenho medo de ler e ficar mais triste. O que faço?"
              answer="Essa é uma preocupação muito comum. O Guia Eterno foi escrito usando psicologia positiva e acolhimento. O objetivo não é tocar na ferida, mas sim limpá-la. Você vai sentir alívio e compreensão, não mais tristeza."
            />
            <FAQItem
              question="Serve para qualquer tipo de pet?"
              answer="Sim. Embora a autora fale da experiência com um cão, os princípios do luto, a culpa e a conexão espiritual são universais para quem ama gatos, pássaros ou qualquer filho de outra espécie."
            />
            <FAQItem
              question="O Guia é Religioso?"
              answer="O livro é espiritualista, mas não religioso. Ele respeita todas as crenças e foca na ideia universal de que o amor é uma energia que não pode ser destruída pela morte."
            />
            <FAQItem
              question="Como recebo o acesso?"
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar o Ebook e todos os bônus. Você pode ler no celular, tablet ou computador."
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">© 2026 Eterno Guia. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600 max-w-lg mx-auto">
            Este produto não substitui o parecer médico ou psicológico profissional. Se o luto estiver impedindo suas funções básicas de vida, procure ajuda especializada.
          </p>
          <p className="mt-8 text-xs font-mono text-gray-700">
            LP Validada pelo Protocolo de Conversão Suprema v2.5
          </p>
        </div>
      </footer>

      {/* REFINED STICKY CTA BAR */}
      <div
        className={`fixed bottom-0 left-0 w-full p-3 md:p-4 pb-safe z-[100] transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md border-t border-purple-200 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.1)]"></div>
        <div className="relative max-w-5xl mx-auto flex items-center justify-between gap-3 md:gap-4 px-1">
          
          <div className="flex flex-col shrink-0">
             {/* Title visible on mobile as well (small text), Desktop (larger) */}
             <span className="text-purple-900 font-extrabold text-[0.65rem] md:text-lg leading-none mb-0.5 md:mb-0">
               <span className="md:hidden">Protocolo Eterno™</span>
               <span className="hidden md:inline">Protocolo Eterno™</span>
             </span>
             {/* Desktop Subtitle */}
             <span className="hidden md:block text-xs text-gray-500 font-medium">Bônus Exclusivos Inclusos</span>
             
             {/* Price Block */}
             <div className="flex items-baseline gap-2 md:block md:text-right">
                <span className="text-[10px] md:text-xs text-gray-400 line-through">R$ 97,90</span>
                <span className="text-lg md:text-xl font-bold text-green-600 leading-none">R$ 37,90</span>
             </div>
          </div>

          <button
            onClick={handleCheckout}
            className="flex-grow md:flex-grow-0 w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 md:px-8 rounded-full shadow-lg shadow-green-200 flex items-center justify-center gap-2 text-sm md:text-lg transition-transform hover:scale-105 active:scale-95"
          >
            Quero Minha Paz <ArrowRight size={20} className="hidden sm:inline" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Portfolio Section — estilo Netflix: carrossel horizontal arrastável com setas.
 */
export default function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  const cases = [
    {
      title: "Transformação Digital de Varejo",
      category: "Transformação Digital",
      description:
        "Implementação de sistema ERP e automação de processos resultou em 40% de aumento de eficiência.",
      results: "+40% eficiência",
      company: "Empresa de Varejo",
      color: "from-blue-900 to-blue-700",
    },
    {
      title: "Reestruturação Organizacional",
      category: "Gestão",
      description:
        "Reorganização estrutural e realinhamento de processos aumentou produtividade em 35%.",
      results: "+35% produtividade",
      company: "Indústria Manufatureira",
      color: "from-slate-800 to-slate-600",
    },
    {
      title: "Expansão de Mercado",
      category: "Estratégia",
      description:
        "Planejamento estratégico para entrada em novo mercado com crescimento de 50% em receita.",
      results: "+50% crescimento",
      company: "Empresa de Serviços",
      color: "from-primary to-primary/70",
    },
    {
      title: "Otimização de Custos",
      category: "Operacional",
      description:
        "Análise profunda de custos operacionais resultou em redução de 25% sem comprometer qualidade.",
      results: "-25% custos",
      company: "Setor Financeiro",
      color: "from-accent/90 to-accent/60",
    },
    {
      title: "Treinamento de Equipes",
      category: "Desenvolvimento",
      description:
        "Programa completo de capacitação elevou o NPS interno em 60 pontos em apenas 3 meses.",
      results: "+60 NPS interno",
      company: "Rede de Farmácias",
      color: "from-teal-800 to-teal-600",
    },
    {
      title: "Abertura de Franquia",
      category: "Novos Negócios",
      description:
        "Estruturação completa do modelo de franquia com manual operacional e suporte ao franqueado.",
      results: "12 unidades abertas",
      company: "Rede Alimentícia",
      color: "from-stone-700 to-stone-500",
    },
  ];

  function scroll(dir: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.75;
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container">
        {/* Título */}
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
          }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
              Cases de Sucesso
            </h2>
            <p className="text-foreground/70 text-lg mt-2 max-w-xl">
              Projetos que transformaram empresas e geraram resultados mensuráveis.
            </p>
          </div>
          {/* Setas de navegação */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carrossel arrastável */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const track = trackRef.current;
            if (!track) return;
            track.style.cursor = "grabbing";
            const startX = e.pageX - track.offsetLeft;
            const scrollLeft = track.scrollLeft;
            const onMove = (ev: MouseEvent) => {
              const x = ev.pageX - track.offsetLeft;
              track.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              track.style.cursor = "grab";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {cases.map((item, index) => (
            <div
              key={index}
              className="snap-start flex-none w-72 md:w-80"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateX(0)" : "translateX(40px)",
                transition: `opacity 600ms ${ease} ${300 + index * 100}ms, transform 600ms ${ease} ${300 + index * 100}ms`,
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full group">
                {/* Header colorido */}
                <div className={`bg-gradient-to-br ${item.color} p-6 relative`}>
                  <Badge className="bg-white/20 text-white border-0 text-xs mb-3">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">{item.company}</p>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 bg-white">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-accent font-bold text-lg">{item.results}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Esconder scrollbar no webkit */}
    </section>
  );
}

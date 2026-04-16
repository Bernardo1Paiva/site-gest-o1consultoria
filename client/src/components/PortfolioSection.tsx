import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type React from "react";
import { useDirectionalAnimation, useScrollAnimation, getSlideClasses } from "@/hooks/useScrollAnimation";

/** Wrapper que aplica animação direcional por card individualmente */
function AnimatedCard({
  direction,
  delay,
  children,
}: {
  direction: "left" | "right" | "up";
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useDirectionalAnimation();
  const { className, style } = getSlideClasses(isVisible, direction, delay ?? 0);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/**
 * Portfolio Section Component
 * - Animações alternadas: esquerda/direita por card
 */
export default function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const cases = [
    {
      title: "Transformação Digital de Varejo",
      category: "Transformação Digital",
      description:
        "Implementação de sistema ERP e automação de processos resultou em 40% de aumento de eficiência.",
      results: "40% eficiência",
      company: "Empresa de Varejo",
    },
    {
      title: "Reestruturação Organizacional",
      category: "Gestão",
      description:
        "Reorganização estrutural e realinhamento de processos aumentou produtividade em 35%.",
      results: "35% produtividade",
      company: "Indústria Manufatureira",
    },
    {
      title: "Expansão de Mercado",
      category: "Estratégia",
      description:
        "Planejamento estratégico para entrada em novo mercado com crescimento de 50% em receita.",
      results: "50% crescimento",
      company: "Empresa de Serviços",
    },
    {
      title: "Otimização de Custos",
      category: "Operacional",
      description:
        "Análise profunda de custos operacionais resultou em redução de 25% sem comprometer qualidade.",
      results: "25% redução",
      company: "Setor Financeiro",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Título */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Cases de Sucesso
          </h2>
          <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram empresas e geraram
            resultados mensuráveis.
          </p>
        </div>

        {/* Cards com animação alternada */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const direction: "left" | "right" = index % 2 === 0 ? "left" : "right";

            return (
              <AnimatedCard key={index} direction={direction}>
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-border/50 bg-white group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {caseItem.category}
                    </Badge>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {caseItem.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {caseItem.company}
                  </p>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-accent font-semibold text-lg">
                      {caseItem.results}
                    </p>
                  </div>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

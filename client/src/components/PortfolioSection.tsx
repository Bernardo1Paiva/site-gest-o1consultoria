import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Portfolio Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Showcase de cases de sucesso
 * - Cards com informações de projeto
 * - Badges para categorias
 * - Animações ao scroll
 */

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

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
    <section
      id="portfolio"
      ref={ref}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container">
        <div className="text-center mb-16">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-wider transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Portfólio
          </span>
          <h2
            className={`text-3xl md:text-4xl font-display font-bold text-primary mt-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cases de Sucesso
          </h2>
          <p
            className={`text-foreground/70 text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conheça alguns dos projetos que transformaram empresas e geraram
            resultados mensuráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-white group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

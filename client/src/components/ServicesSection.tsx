import { Card } from "@/components/ui/card";
import {
  Briefcase,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  BookOpen,
  Layers,
  DollarSign,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Services Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Grid de cards com ícones
 * - Fundo com padrão geométrico
 * - Hover effects sutis
 * - Animações ao scroll
 */

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Briefcase,
      title: "Abertura de Novos Negócios",
      description:
        "Consultoria completa para planejamento, estruturação e lançamento de novos empreendimentos com viabilidade comprovada.",
    },
    {
      icon: Users,
      title: "Treinamento e Acompanhamento",
      description:
        "Programas de desenvolvimento para gerentes, vendedores e propagandistas com acompanhamento contínuo de resultados.",
    },
    {
      icon: BookOpen,
      title: "Desenvolvimento de Material de Treinamento",
      description:
        "Criação de conteúdo educacional personalizado e materiais de apoio para capacitação de equipes.",
    },
    {
      icon: Target,
      title: "Desenvolvimento de Planos de Marketing",
      description:
        "Estratégias de marketing personalizadas para aumentar visibilidade, atração de clientes e crescimento de vendas.",
    },
    {
      icon: Users,
      title: "Recrutamento e Seleção de Pessoal",
      description:
        "Processo completo de recrutamento, seleção e integração de talentos alinhados com cultura organizacional.",
    },
    {
      icon: BarChart3,
      title: "Plano de Cargos e Salários",
      description:
        "Estruturação de carreiras, definição de competências e política salarial competitiva e equitativa.",
    },
    {
      icon: Layers,
      title: "Manuais de Normas e Procedimentos",
      description:
        "Elaboração de documentação organizacional clara e padronizada para garantir consistência operacional.",
    },
    {
      icon: Zap,
      title: "Desenvolvimento e Reestruturação de Fluxos",
      description:
        "Otimização de processos de trabalho para aumentar eficiência, reduzir gargalos e melhorar produtividade.",
    },
    {
      icon: TrendingUp,
      title: "Implantação de Controles Gerenciais",
      description:
        "Implementação de sistemas de monitoramento, indicadores e controles para melhor gestão empresarial.",
    },
    {
      icon: DollarSign,
      title: "Programas de Minimização de Custos",
      description:
        "Análise detalhada de custos operacionais e implementação de programas para redução sem comprometer qualidade.",
    },
    {
      icon: Target,
      title: "Estratégias de Marketing",
      description:
        "Desenvolvimento de estratégias completas de marketing digital e tradicional para posicionamento de mercado.",
    },
    {
      icon: Briefcase,
      title: "Consultoria Estratégica Geral",
      description:
        "Orientação estratégica abrangente para crescimento, competitividade e sustentabilidade empresarial.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/services-bg-7xZrqpMksShdYSkbb6NSRA.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/95"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-wider transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Nossos Serviços
          </span>
          <h2
            className={`text-3xl md:text-4xl font-display font-bold text-primary mt-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Soluções Completas para Seu Negócio
          </h2>
          <p
            className={`text-foreground/70 text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Oferecemos uma gama abrangente de serviços de consultoria adaptados
            às necessidades específicas da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import {
  Briefcase,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";

/**
 * Services Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Grid de cards com ícones
 * - Fundo com padrão geométrico
 * - Hover effects sutis
 */

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: "Consultoria Estratégica",
      description:
        "Desenvolvimento de estratégias personalizadas para crescimento sustentável e competitivo.",
    },
    {
      icon: TrendingUp,
      title: "Transformação Digital",
      description:
        "Implementação de tecnologias e processos para modernizar sua operação.",
    },
    {
      icon: Users,
      title: "Gestão de Talentos",
      description:
        "Otimização de recursos humanos e desenvolvimento de equipes de alta performance.",
    },
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description:
        "Análise e melhoria de processos para maximizar produtividade e reduzir custos.",
    },
    {
      icon: BarChart3,
      title: "Análise Financeira",
      description:
        "Avaliação detalhada de saúde financeira e planejamento estratégico de investimentos.",
    },
    {
      icon: Target,
      title: "Planejamento de Negócios",
      description:
        "Estruturação de planos de negócios robustos e viáveis para novos empreendimentos.",
    },
  ];

  return (
    <section
      id="services"
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Soluções Completas para Seu Negócio
          </h2>
          <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
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
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white"
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

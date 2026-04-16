import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * About Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Layout assimétrico com imagem decorativa
 * - Tipografia hierárquica
 * - Pontos-chave com ícones
 */

export default function AboutSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const highlights = [
    "Mais de 15 anos de experiência em consultoria estratégica",
    "Equipe multidisciplinar de especialistas",
    "Metodologia comprovada e resultados mensuráveis",
    "Compromisso com a excelência e inovação",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`space-y-6 transition-all duration-900 ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDuration: "800ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
                Parceiros no Seu Sucesso
              </h2>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed">
              A Gestão 1 Consultoria, liderada por Alessandro Menezes Paiva, é uma empresa
              especializada em consultoria empresarial e desenvolvimento organizacional.
              Dedicamos nossa experiência a transformar desafios em oportunidades de
              crescimento. Com uma abordagem personalizada e estratégica, ajudamos
              empresas de todos os tamanhos a alcançar seus objetivos.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-start transition-all ${
                    leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{
                    transitionDuration: "700ms",
                    transitionDelay: leftVisible ? `${200 + index * 100}ms` : "0ms",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            ref={rightRef}
            className={`relative hidden md:block transition-all ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <div
              className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/about-pattern-XzK7k3knCs9aX7Hkd5k9sh.webp')`,
              }}
            ></div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

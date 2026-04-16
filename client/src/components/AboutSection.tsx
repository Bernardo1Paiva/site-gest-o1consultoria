import { CheckCircle2 } from "lucide-react";

/**
 * About Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Layout assimétrico com imagem decorativa
 * - Tipografia hierárquica
 * - Pontos-chave com ícones
 */

export default function AboutSection() {
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
          <div className="space-y-6">
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
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block">
            <div
              className="w-full aspect-square rounded-2xl bg-cover bg-center"
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

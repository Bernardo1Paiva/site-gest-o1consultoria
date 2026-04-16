import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Testimonials Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Depoimentos de clientes
 * - Avaliações com estrelas
 * - Fundo com padrão diagonal
 * - Animações ao scroll
 */

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "CEO, Empresa XYZ",
      text: "A Gestão 1 Consultoria transformou completamente nossa operação. Em 6 meses, vimos resultados extraordinários que superaram nossas expectativas.",
      rating: 5,
    },
    {
      name: "Marina Costa",
      company: "Diretora Financeira, ABC Ltda",
      text: "Profissionalismo, dedicação e resultados concretos. A equipe entendeu perfeitamente nossos desafios e entregou soluções práticas.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      company: "Presidente, Grupo Industrial",
      text: "Recomendo fortemente. A consultoria foi essencial para nossa expansão estratégica e crescimento de mercado.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/testimonials-bg-ayMEysgmwzuCFXLJhkhYut.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-wider transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Depoimentos
          </span>
          <h2
            className={`text-3xl md:text-4xl font-display font-bold text-primary mt-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            O que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 border-border/50 bg-white hover:shadow-lg transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-display font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

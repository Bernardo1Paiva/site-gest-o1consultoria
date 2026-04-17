import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Testimonials Section — fade-in surgindo escalonado ao scroll.
 */
export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

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
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/testimonials-bg-ayMEysgmwzuCFXLJhkhYut.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90" />

      <div className="container relative z-10">
        {/* Título */}
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
          }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            O que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Cards — surgem escalonados */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border/50 bg-white relative overflow-hidden"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
                transition: `opacity 700ms ${ease} ${index * 150}ms, transform 700ms ${ease} ${index * 150}ms`,
                boxShadow: cardsVisible
                  ? "0 10px 40px rgba(0,0,0,0.08)"
                  : "none",
              }}
            >
              {/* Aspas decorativas */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

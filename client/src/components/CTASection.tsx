import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * CTA Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Call-to-action proeminente
 * - Fundo com gradiente e elementos geométricos
 * - Botão destacado
 */

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/cta-background-KarXhbny8urJLgRtcSX2Xy.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white" ref={ref}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2
            className={`text-3xl md:text-5xl font-display font-bold leading-tight text-balance transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pronto para Transformar Seu Negócio?
          </h2>

          <p
            className={`text-lg md:text-xl text-white/90 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            Entre em contato conosco hoje e descubra como podemos ajudar sua
            empresa a alcançar novos patamares de sucesso.
          </p>

          <div
            className={`pt-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-transform duration-200 hover:scale-105 active:scale-95"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * CTA Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Call-to-action proeminente
 * - Fundo com gradiente e elementos geométricos
 * - Botão destacado
 */

export default function CTASection() {
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
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Pronto para Transformar Seu Negócio?
          </h2>

          <p className="text-lg md:text-xl text-white/90">
            Entre em contato conosco hoje e descubra como podemos ajudar sua
            empresa a alcançar novos patamares de sucesso.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base"
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

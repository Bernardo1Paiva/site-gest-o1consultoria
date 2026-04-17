import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Banner de fundo com imagem gerada (hero-banner)
 * - Texto em branco com boa legibilidade
 * - CTA proeminente
 * - Animação de entrada suave
 */

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663451284214/57RqwYnYQMuurh43x4q4y2/hero-banner-CEx54xYFyB6b4LsstgtDDD.webp')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Logo do escudo — animada, sem fundo, blend com o hero */}
          <div
            className="flex justify-center"
            style={{ animation: "fade-in-hero 1s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <img
              src="/logo-icon.png"
              alt="Gestão 1 Consultoria"
              className="h-24 md:h-32 w-auto object-contain"
              style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))" }}
            />
          </div>

          <h1
            className="text-4xl md:text-6xl font-display font-bold leading-tight text-balance"
            style={{ animation: "fade-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
          >
            Transforme seu Negócio com Consultoria Estratégica
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed"
            style={{ animation: "fade-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s both" }}
          >
            Na Gestão 1 Consultoria, oferecemos soluções inovadoras e
            estratégicas para impulsionar o crescimento, eficiência e
            desenvolvimento organizacional da sua empresa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            style={{ animation: "fade-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-transform duration-200 hover:scale-105 active:scale-95"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-base transition-transform duration-200 hover:scale-105 active:scale-95"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animation: "fade-in 0.9s cubic-bezier(0.22,1,0.36,1) 1s both" }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full h-4 bg-white/80 rounded-full"
            style={{ animation: "scroll-bounce 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

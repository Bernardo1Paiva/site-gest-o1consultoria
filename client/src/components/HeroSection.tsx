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
          <div className="flex justify-center animate-fade-in-hero">
            <img
              src="/logo-icon.png"
              alt="Gestão 1 Consultoria"
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.45)) brightness(1.08)" }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-balance animate-fade-in opacity-0 delay-150" style={{ animationFillMode: "forwards" }}>
            Transforme seu Negócio com Consultoria Estratégica
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in opacity-0 delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Na Gestão 1 Consultoria, oferecemos soluções inovadoras e
            estratégicas para impulsionar o crescimento, eficiência e
            desenvolvimento organizacional da sua empresa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in opacity-0 delay-400"
            style={{ animationFillMode: "forwards" }}
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
      <div className="absolute bottom-8 left-1/2 z-10" style={{ transform: "translateX(-50%)" }}>
        <div className="flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700" style={{ animationFillMode: "forwards" }}>
          <span className="text-white/60 text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-white/80 animate-[scroll-bounce_1.6s_ease-in-out_infinite]" style={{ borderRadius: "9999px" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

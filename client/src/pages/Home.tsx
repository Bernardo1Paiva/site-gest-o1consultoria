import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Home Page - Alessandro Consultorias
 * Design: Modernismo Corporativo Sofisticado
 *
 * Estrutura:
 * 1. Header - Navegação fixa
 * 2. Hero - Banner principal com CTA
 * 3. About - Apresentação da empresa
 * 4. Services - Grid de serviços
 * 5. Portfolio - Cases de sucesso
 * 6. Testimonials - Depoimentos de clientes
 * 7. CTA - Call-to-action proeminente
 * 8. Contact - Formulário e informações
 * 9. Footer - Rodapé com links
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

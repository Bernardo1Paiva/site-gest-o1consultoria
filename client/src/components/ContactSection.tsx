import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Contact Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Formulário de contato
 * - Informações de contato
 * - Links de redes sociais
 */

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio de formulário
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Mensagem enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alessandro.paiva@gestao1consultoria.com.br",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(21) 97980-1117",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Valença, RJ - Brasil (Serviços Remotos)",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
          }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Entre em Contato Conosco
          </h2>
          <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
            Estamos prontos para ouvir sobre seus desafios e propor soluções
            personalizadas.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center border-border/50 bg-white hover:shadow-lg transition-shadow"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 600ms ${ease} ${index * 120}ms, transform 600ms ${ease} ${index * 120}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">
                  {info.label}
                </h3>
                <p className="text-foreground/70 break-all">{info.value}</p>
              </Card>
            );
          })}
        </div>

        <div ref={formRef} className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card
            className="p-8 border-border/50 bg-white"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateX(0)" : "translateX(-40px)",
              transition: `opacity 800ms ${ease}, transform 800ms ${ease}`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>

          {/* Info */}
          <div
            className="space-y-8"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 800ms ${ease} 150ms, transform 800ms ${ease} 150ms`,
            }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Atendimento
              </h3>
              <p className="text-foreground/70 mb-2">
                <strong>Horário:</strong> Segunda a Sexta, 9h às 18h
              </p>
              <p className="text-foreground/70 mb-4">
                <strong>Localização:</strong> Valença, RJ
              </p>
              <p className="text-foreground/70">
                <strong>Serviços:</strong> Presenciais e Remotos
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/5521979801117?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%u00e7os%20da%20Gest%C3%A3o%201%20Consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                  title="Enviar no WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="mailto:alessandro.paiva@gestao1consultoria.com.br"
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                  title="Enviar email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

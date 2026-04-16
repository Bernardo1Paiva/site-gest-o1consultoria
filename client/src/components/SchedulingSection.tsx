import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Scheduling Section Component
 * Design: Modernismo Corporativo Sofisticado
 * - Formulário de agendamento
 * - Validação de dados
 * - Armazenamento em localStorage (demo)
 * - Animações ao scroll
 */

interface Agendamento {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  data: string;
  horario: string;
  mensagem: string;
  dataCriacao: string;
}

export default function SchedulingSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "consultoria-estrategica",
    data: "",
    horario: "09:00",
    mensagem: "",
  });

  const servicos = [
    { id: "consultoria-estrategica", nome: "Consultoria Estratégica" },
    { id: "treinamento", nome: "Treinamento" },
    { id: "recrutamento", nome: "Recrutamento e Seleção" },
    { id: "marketing", nome: "Plano de Marketing" },
    { id: "outro", nome: "Outro" },
  ];

  const horarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    if (
      !formData.nome ||
      !formData.email ||
      !formData.telefone ||
      !formData.data
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validar data (não pode ser no passado)
    const dataSelecionada = new Date(formData.data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataSelecionada < hoje) {
      toast.error("Por favor, selecione uma data futura.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Salvar em localStorage (para demo)
      const agendamentos = JSON.parse(
        localStorage.getItem("agendamentos") || "[]"
      );

      const novoAgendamento: Agendamento = {
        id: Date.now().toString(),
        ...formData,
        dataCriacao: new Date().toISOString(),
      };

      agendamentos.push(novoAgendamento);
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

      toast.success(
        "Agendamento realizado com sucesso! Entraremos em contato em breve."
      );

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        servico: "consultoria-estrategica",
        data: "",
        horario: "09:00",
        mensagem: "",
      });

      // Enviar para WhatsApp também
      const servicoNome =
        servicos.find((s) => s.id === formData.servico)?.nome ||
        formData.servico;
      const mensagemWhatsapp = encodeURIComponent(
        `Olá! Gostaria de agendar uma consultoria.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nServiço: ${servicoNome}\nData: ${formData.data}\nHorário: ${formData.horario}\n\nMensagem: ${formData.mensagem}`
      );

      // Abrir WhatsApp em nova aba
      window.open(
        `https://wa.me/5521979801117?text=${mensagemWhatsapp}`,
        "_blank"
      );
    } catch (error) {
      toast.error("Erro ao agendar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obter data mínima (hoje)
  const hoje = new Date().toISOString().split("T")[0];

  return (
    <section
      id="scheduling"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="container">
        <div className="text-center mb-16">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-wider transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Agende Agora
          </span>
          <h2
            className={`text-3xl md:text-4xl font-display font-bold text-primary mt-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sistema de Agendamento
          </h2>
          <p
            className={`text-foreground/70 text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Escolha a data e horário que melhor se adequa à sua agenda para uma
            consultoria personalizada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card
            className={`p-8 md:p-12 border-border/50 bg-white transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Linha 1: Nome e Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
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
              </div>

              {/* Linha 2: Telefone e Serviço */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="(21) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  >
                    {servicos.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Linha 3: Data e Horário */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Data Desejada *
                  </label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    min={hoje}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Horário Preferido
                  </label>
                  <select
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  >
                    {horarios.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem Adicional
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                ></textarea>
              </div>

              {/* Botão */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Após confirmar, você será redirecionado para o WhatsApp para
                finalizar o agendamento.
              </p>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center border-border/50 bg-white">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">
                Flexibilidade
              </h3>
              <p className="text-sm text-foreground/70">
                Escolha a data e horário que melhor se adequa à sua agenda
              </p>
            </Card>

            <Card className="p-6 text-center border-border/50 bg-white">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">
                Contato Direto
              </h3>
              <p className="text-sm text-foreground/70">
                Confirmação via WhatsApp com Alessandro
              </p>
            </Card>

            <Card className="p-6 text-center border-border/50 bg-white">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">
                Rápido
              </h3>
              <p className="text-sm text-foreground/70">
                Processo simples e sem complicações
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Button Component
 * Design: Modernismo Corporativo Sofisticado
 * - Botão flutuante no canto inferior direito
 * - Abre WhatsApp com mensagem pré-preenchida
 */

export default function WhatsAppButton() {
  const whatsappNumber = "5521979801117"; // Número do Alessandro
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Gestão 1 Consultoria."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      title="Enviar mensagem no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-accent text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}

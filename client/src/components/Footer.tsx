/**
 * Footer Component
 * Design: Modernismo Corporativo Sofisticado
 * - Fundo escuro com texto claro
 * - Links de navegação
 * - Copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Empresa: [
      { label: "Sobre Nós", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Contato", href: "#contact" },
    ],
    Legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-icon.png"
                alt="Gestão 1 Consultoria"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-display font-bold text-white text-lg leading-tight">Gestão 1</p>
                <p className="text-xs text-white/60 tracking-widest uppercase">Consultoria</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformando empresas através de consultoria estratégica,
              treinamento e desenvolvimento organizacional.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:alessandro.paiva@gestao1consultoria.com.br"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  alessandro.paiva@gestao1consultoria.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521979801117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (21) 97980-1117
                </a>
              </li>
              <li className="text-white/70">Valença, RJ - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              &copy; {currentYear} Gestão 1 Consultoria. Todos os direitos
              reservados.
            </p>
            <p>Desenvolvido com dedicação para sua excelência.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

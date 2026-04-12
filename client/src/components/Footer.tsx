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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-lg">AC</span>
              </div>
              <div>
                <h3 className="font-display font-bold">Alessandro</h3>
                <p className="text-xs text-white/70">Consultorias</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformando empresas através de consultoria estratégica e
              inovação.
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
                  href="mailto:contato@alessandroconsultorias.com.br"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  contato@alessandroconsultorias.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+551130000000"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (11) 3000-0000
                </a>
              </li>
              <li className="text-white/70">São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              &copy; {currentYear} Alessandro Consultorias. Todos os direitos
              reservados.
            </p>
            <p>Desenvolvido com dedicação para sua excelência.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

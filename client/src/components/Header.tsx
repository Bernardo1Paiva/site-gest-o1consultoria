import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component
 * Design: Modernismo Corporativo Sofisticado
 * - Navegação limpa com logo e menu
 * - Fundo branco com borda sutil
 * - Tipografia Poppins para destaque
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo-icon.png"
              alt="Gestão 1 Consultoria"
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            <span className="hidden sm:block font-display font-bold text-primary text-lg leading-tight">
              Gestão 1<br />
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Consultoria</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-medium"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicitar Consultoria
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-secondary/50 animate-nav-slide">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-medium w-full mt-2"
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Consultoria
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

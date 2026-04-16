import { useEffect, useRef, useState } from "react";
import type React from "react";

/**
 * Hook para animar elementos quando entram na viewport.
 * Usa threshold fixo para evitar re-criação do observer por mudança de referência.
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return { ref, isVisible };
}

/**
 * Hook idêntico ao useScrollAnimation, com threshold ligeiramente maior.
 * Separado para clareza semântica nos componentes de card.
 */
export function useDirectionalAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return { ref, isVisible };
}

/**
 * Retorna className e style para slide direcional ao entrar na viewport.
 * Usa `animation-fill-mode: both` para garantir estado inicial antes de animar.
 */
export function getSlideClasses(
  isVisible: boolean,
  direction: "left" | "right" | "up",
  delay = 0
): { className: string; style: React.CSSProperties } {
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

  const hiddenTranslate =
    direction === "left"
      ? "-translate-x-16"
      : direction === "right"
        ? "translate-x-16"
        : "translate-y-10";

  const className = `transition-all duration-[800ms] ${
    isVisible
      ? "opacity-100 translate-x-0 translate-y-0"
      : `opacity-0 ${hiddenTranslate}`
  }`;

  return {
    className,
    style: {
      transitionDelay: isVisible ? `${delay}ms` : "0ms",
      transitionTimingFunction: easing,
    },
  };
}

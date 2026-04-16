import { useEffect, useRef, useState } from "react";

/**
 * Hook para animar elementos quando entram na viewport
 * Uso: const { ref, isVisible } = useScrollAnimation();
 */

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Hook de animação com suporte a direção (left | right | up)
 * Uso: const { ref, isVisible } = useDirectionalAnimation();
 */
export function useDirectionalAnimation(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.12,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Retorna as classes Tailwind de transição baseado na direção e visibilidade.
 */
export function getSlideClasses(
  isVisible: boolean,
  direction: "left" | "right" | "up",
  delay = 0
): { className: string; style: React.CSSProperties } {
  const base = "transition-all duration-[800ms]";
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

  const hiddenTranslate =
    direction === "left"
      ? "-translate-x-16"
      : direction === "right"
      ? "translate-x-16"
      : "translate-y-10";

  const className = `${base} ${
    isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTranslate}`
  }`;

  return {
    className,
    style: {
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: easing,
    },
  };
}

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
        // Opcional: parar de observar após aparecer
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1, // Dispara quando 10% do elemento está visível
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

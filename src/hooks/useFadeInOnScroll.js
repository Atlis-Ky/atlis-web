import { useEffect, useRef } from "react";

/**
 * useFadeInOnScroll
 * Attaches an IntersectionObserver to a container ref.
 * Any child elements with the class `fade-in-item` will get
 * the `visible` class added when they scroll into view.
 */
const useFadeInOnScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".fade-in-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useFadeInOnScroll;

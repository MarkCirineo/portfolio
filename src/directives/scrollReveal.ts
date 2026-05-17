import type { ObjectDirective } from "vue";

interface ScrollRevealOptions {
    delay?: number;
}

const scrollRevealDirective: ObjectDirective<HTMLElement, ScrollRevealOptions> =
    {
        mounted(el, binding) {
            const delay = binding.value?.delay || 0;

            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            el.style.opacity = "1";
                            el.style.transform = "translateY(0)";
                            observer.unobserve(el);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(el);
            (el as any)._scrollRevealObserver = observer;
        },

        unmounted(el) {
            const observer = (el as any)._scrollRevealObserver;
            if (observer) {
                observer.disconnect();
                delete (el as any)._scrollRevealObserver;
            }
        },
    };

export default scrollRevealDirective;

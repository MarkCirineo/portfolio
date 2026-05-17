<template>
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1 class="hero-name">Mark Cirineo</h1>
            <p class="hero-title">Full-stack Web Developer</p>
            <div class="hero-buttons">
                <template v-for="button in buttons" :key="button.key">
                    <component
                        :is="button.link ? 'a' : 'span'"
                        :href="button.link ?? undefined"
                        target="_blank"
                        v-tooltip.bottom="{ content: button.tooltip, distance: 10 }"
                        @click="handleClick(button)"
                        class="hero-button"
                    >
                        <i :class="button.icon" class="hero-icon" />
                    </component>
                </template>
            </div>
        </div>
        <div v-if="!scrolled" class="hero-scroll-indicator">
            <div class="scroll-mouse">
                <div class="scroll-dot"></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { Button } from "@typings/hero";
import { useToastStore } from "@stores/toast";

export default defineComponent({
    name: "Hero",
    data() {
        return { scrolled: false };
    },
    computed: {
        buttons(): Button[] {
            return [
                { key: "Resume", tooltip: "Open Resume", icon: "fa-solid fa-file-lines", link: "/resume.pdf" },
                { key: "LinkedIn", tooltip: "LinkedIn", icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/mark-cirineo/" },
                { key: "Github", tooltip: "Github", icon: "fa-brands fa-github", link: "https://www.github.com/markcirineo" },
                {
                    key: "Email", tooltip: "Copy Email", icon: "fa-solid fa-envelope",
                    callback: async () => {
                        try {
                            await navigator.clipboard.writeText("markcirineo22@gmail.com");
                            this.createToast({ message: "Email copied to clipboard", duration: 4000 });
                        } catch (error) {
                            this.createToast({ message: "Failed to copy email", duration: 4000 });
                        }
                    },
                },
            ];
        },
    },
    beforeMount() { addEventListener("scroll", this.handleScroll); },
    beforeUnmount() { removeEventListener("scroll", this.handleScroll); },
    methods: {
        ...mapActions(useToastStore, ["createToast"]),
        handleClick(button: Button) { if (button.callback) button.callback(); },
        handleScroll() { this.scrolled = window.scrollY > 0; },
    },
});
</script>

<style scoped>
.hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

/* Ambient background glow */
.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        radial-gradient(ellipse 600px 400px at 85% 15%, rgba(52, 211, 128, 0.08), transparent),
        radial-gradient(ellipse 500px 350px at 10% 80%, rgba(99, 102, 241, 0.07), transparent),
        radial-gradient(ellipse 300px 300px at 60% 50%, rgba(52, 211, 128, 0.03), transparent);
}

/* Content */
.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    animation: fadeInUp 0.8s ease both;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Name with gradient shimmer */
.hero-name {
    font-family: var(--font-heading);
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -1.5px;
    background: linear-gradient(
        135deg,
        var(--color-accent) 0%,
        #a7f3d0 25%,
        var(--color-accent) 50%,
        #a7f3d0 75%,
        var(--color-accent) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 6s linear infinite;
}
@keyframes shimmer {
    to { background-position: 200% center; }
}

.hero-title {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--color-text-secondary);
    margin: var(--space-sm) 0 var(--space-lg);
    animation: fadeInUp 0.8s ease 0.2s both;
}

/* Buttons */
.hero-buttons {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    animation: fadeInUp 0.8s ease 0.4s both;
}
.hero-button {
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    border-radius: var(--radius-full);
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
    transition: all var(--transition-base);
}
.hero-button:hover {
    border-color: var(--color-accent);
    box-shadow: 0 0 20px rgba(52, 211, 128, 0.2);
    transform: translateY(-2px);
}
.hero-icon { font-size: 1.1rem; }

/* Scroll indicator */
.hero-scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInUp 0.8s ease 0.8s both;
}
.scroll-mouse {
    width: 24px; height: 38px;
    border: 2px solid var(--color-text-muted);
    border-radius: 12px;
    display: flex; justify-content: center;
    padding-top: 6px;
}
.scroll-dot {
    width: 4px; height: 8px;
    background: var(--color-text-muted);
    border-radius: var(--radius-full);
    animation: scrollPulse 1.8s ease-in-out infinite;
}
@keyframes scrollPulse {
    0%, 100% { opacity: 0; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(8px); }
}

@media (max-width: 640px) {
    .hero-name { font-size: 2.5rem; }
}
</style>

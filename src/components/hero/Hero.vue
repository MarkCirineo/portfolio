<template>
    <div class="hero">
        <div class="hero-name">Mark Cirineo</div>
        <div class="hero-title">Full-stack Web Developer</div>
        <div class="hero-buttons">
            <template v-for="button in buttons" :key="button.key">
                <component
                    :is="button.link ? 'a' : 'span'"
                    :href="button.link ?? undefined"
                    target="_blank"
                    v-tooltip.bottom="{ content: button.tooltip, distance: 10 }"
                    @click="handleClick(button)"
                >
                    <i :class="button.icon" class="hero-icon" />
                </component>
            </template>
        </div>
        <div v-if="!scrolled" class="hero-scroll-indicator">
            <span class="arrow">↓</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";

import { Button } from "@typings/hero";
import { useToastStore } from "@stores/toast";

export default defineComponent({
    name: "Hero",

    data() {
        return {
            scrolled: false,
        };
    },

    computed: {
        buttons(): Button[] {
            return [
                {
                    key: "Resume",
                    tooltip: "Open Resume",
                    icon: "fa-solid fa-file-lines",
                    link: "/resume.pdf",
                },
                {
                    key: "LinkedIn",
                    tooltip: "LinkedIn",
                    icon: "fa-brands fa-linkedin",
                    link: "https://www.linkedin.com/in/mark-cirineo/",
                },
                {
                    key: "Github",
                    tooltip: "Github",
                    icon: "fa-brands fa-github",
                    link: "https://www.github.com/markcirineo",
                },
                {
                    key: "Email",
                    tooltip: "Copy Email",
                    icon: "fa-solid fa-envelope",
                    callback: async () => {
                        try {
                            await navigator.clipboard.writeText(
                                "markcirineo22@gmail.com"
                            );
                            this.createToast({
                                message: "Email copied to clipboard",
                                duration: 4000,
                            });
                        } catch (error) {
                            this.createToast({
                                message: "Failed to copy email",
                                duration: 4000,
                            });
                        }
                    },
                },
            ];
        },
    },

    beforeMount() {
        addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
        removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        ...mapActions(useToastStore, ["createToast"]),

        handleClick(button: Button) {
            if (button.callback) {
                button.callback();
            }
        },

        handleScroll() {
            if (window.scrollY === 0) {
                this.scrolled = false;
                return;
            }

            this.scrolled = true;
        },
    },
});
</script>

<style scoped>
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.hero-name {
    font-size: 1.6rem;
    font-weight: 500;
}

.hero-title {
    font-size: 1.1rem;
    font-weight: 300;
    padding-bottom: 6px;
}

.hero-buttons {
    display: flex;
    gap: 8px;
}

.hero-icon {
    font-size: 1.25rem;
}

.hero-icon:hover {
    cursor: pointer;
}

.hero-scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    animation: bounce 1.5s infinite;
    color: white;
    opacity: 0.7;
}

@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translate(-50%, 0);
    }
    40% {
        transform: translate(-50%, -10px);
    }
    60% {
        transform: translate(-50%, -5px);
    }
}
</style>

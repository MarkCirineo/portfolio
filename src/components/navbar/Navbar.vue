<template>
    <Transition name="navbar">
        <nav v-if="visible" class="navbar">
            <div class="navbar-content">
                <a href="#hero" class="navbar-name">MC</a>
                <div class="navbar-links">
                    <a
                        v-for="link in links"
                        :key="link.id"
                        :href="'#' + link.id"
                        class="navbar-link"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>
        </nav>
    </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Navbar",

    data() {
        return {
            visible: false,
            links: [
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
            ],
        };
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.visible = window.scrollY > window.innerHeight * 0.5;
        },
    },
});
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-navbar);
    background: rgba(10, 10, 15, 0.8);
    border-bottom: 1px solid var(--color-border);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.navbar-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 14px var(--space-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-name {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-accent);
    cursor: pointer;
    letter-spacing: -0.5px;
}

.navbar-links {
    display: flex;
    gap: var(--space-xl);
}

.navbar-link {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: color var(--transition-fast);
    letter-spacing: 0.3px;
}

.navbar-link:hover {
    color: var(--color-accent);
}

/* Transition */
.navbar-enter-active,
.navbar-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar-enter-from,
.navbar-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>

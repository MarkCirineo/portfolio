<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-links">
                <a href="https://www.linkedin.com/in/mark-cirineo/" target="_blank" rel="noopener" class="footer-link">
                    <i class="fa-brands fa-linkedin" />
                </a>
                <a href="https://www.github.com/markcirineo" target="_blank" rel="noopener" class="footer-link">
                    <i class="fa-brands fa-github" />
                </a>
                <a href="/resume.pdf" target="_blank" class="footer-link">
                    <i class="fa-solid fa-file-lines" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterSection",
    computed: {
        year(): number {
            return new Date().getFullYear();
        },
    },
});
</script>

<style scoped>
.footer {
    border-top: 1px solid var(--color-border);
    padding: var(--space-2xl) var(--space-lg);
    text-align: center;
}

.footer-content {
    max-width: 1000px;
    margin: 0 auto;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
    margin-bottom: var(--space-md);
}

.footer-link {
    color: var(--color-text-muted);
    font-size: 1.2rem;
    cursor: pointer;
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--color-accent);
}

.footer-copy {
    color: var(--color-text-muted);
    font-size: 0.8rem;
    margin: 0;
}
</style>

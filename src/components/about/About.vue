<template>
    <section id="about" class="about-section">
        <div class="about-content" v-scroll-reveal>
            <p class="about-text">
                Full-stack developer building real products from idea to
                deployment. I work primarily with
                <span class="accent">TypeScript</span>,
                <span class="accent">Vue</span>, and
                <span class="accent">React</span>, and I care about clean UI
                and shipping things people actually use.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "About",
});
</script>

<style scoped>
.about-section {
    padding: var(--space-3xl) var(--space-lg);
    display: flex;
    justify-content: center;
}

.about-content {
    max-width: 640px;
    text-align: center;
}

.about-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    font-weight: 300;
    margin: 0;
}

.accent {
    color: var(--color-accent);
    font-weight: 500;
}
</style>

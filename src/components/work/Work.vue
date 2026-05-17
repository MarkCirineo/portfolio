<template>
    <section id="experience" class="work-section">
        <h2 class="section-title" v-scroll-reveal>Experience</h2>
        <div class="work-cards">
            <div v-for="(job, i) in jobs" :key="job.company" class="work-card glass-card" v-scroll-reveal="{ delay: i * 150 }">
                <div class="work-card-header">
                    <a class="work-company" :href="job.link" target="_blank" rel="noopener">
                        {{ job.company }}
                        <i class="fa-solid fa-arrow-up-right-from-square work-external-icon" />
                    </a>
                </div>
                <div class="work-positions">
                    <div v-for="position in job.positions" :key="position.title" class="work-position">
                        <span class="work-position-title">{{ position.title }}</span>
                        <span class="work-position-dates">{{ position.dates }}</span>
                    </div>
                </div>
                <ul class="work-bullets">
                    <li v-for="(bullet, j) in job.bullets" :key="j" class="work-bullet">{{ bullet }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Work",
    data() {
        return {
            jobs: [
                {
                    positions: [
                        { title: "Software Engineer", dates: "January 2026 - Present" },
                        { title: "Junior Software Engineer", dates: "March 2023 - January 2026" },
                        { title: "Intern", dates: "February 2022 - March 2023" },
                    ],
                    company: "Digital Glue",
                    link: "https://www.digitalglue.com/",
                    bullets: [
                        "Led integration of Archiware APIs into the platform, building full-stack functionality to support file restore workflows and media management.",
                        "Developed and maintained features for a cross-platform desktop application, including file browsing, storage mounting, metadata viewing, and file transfer functionality.",
                        "Currently serve as the sole developer and maintainer of the desktop application, owning ongoing feature development, bug fixes, and stability.",
                        "Act as the sole frontend developer for the web application, responsible for building and maintaining user-facing features.",
                        "Collaborate with product managers and backend engineers to scope and deliver features across the stack.",
                    ],
                },
            ],
        };
    },
});
</script>

<style scoped>
.work-section {
    padding: var(--space-3xl) var(--space-lg) var(--space-4xl);
    max-width: 800px;
    margin: 0 auto;
}

.work-cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.work-card {
    padding: var(--space-xl) var(--space-xl) var(--space-lg);
    border-left: 3px solid var(--color-accent);
    transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.work-card:hover {
    box-shadow: var(--shadow-md);
}

.work-card-header {
    margin-bottom: var(--space-md);
}

.work-company {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-accent);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    transition: opacity var(--transition-fast);
}

.work-company:hover {
    opacity: 0.8;
}

.work-external-icon {
    font-size: 0.8rem;
    opacity: 0.6;
}

.work-positions {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.work-position {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
}

.work-position-title {
    font-weight: 500;
    font-size: 1rem;
}

.work-position-dates {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    padding: 2px 10px;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
}

.work-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.work-bullet {
    position: relative;
    padding-left: var(--space-lg);
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
}

.work-bullet::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-size: 0.9rem;
}

@media (max-width: 640px) {
    .work-card {
        padding: var(--space-lg);
    }
    .work-position {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-xs);
    }
}
</style>

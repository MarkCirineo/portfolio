<template>
    <section id="projects" class="projects-section">
        <h2 class="section-title" v-scroll-reveal>Projects</h2>
        <div class="projects-grid">
            <div
                v-for="(project, index) in projects"
                :key="project.slug"
                class="project-card glass-card"
                v-scroll-reveal="{ delay: index * 100 }"
                @click="selectedProject = project"
            >
                <div class="card-thumbnail">
                    <img
                        :src="project.thumbnailImage"
                        :alt="project.title"
                        class="card-image"
                        @error="handleImageError"
                    />
                    <div class="card-image-placeholder" :style="{ background: gradientForSlug(project.slug) }">
                        <span class="placeholder-initials">{{ getInitials(project.title) }}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <p class="card-tagline">{{ project.tagline }}</p>
                    <div class="card-tech">
                        <span v-for="tech in project.technologies.slice(0, 4)" :key="tech" class="card-tech-pill">{{ tech }}</span>
                    </div>
                    <div class="card-links">
                        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="card-link" @click.stop v-tooltip="'View Source'">
                            <i class="fa-brands fa-github" />
                        </a>
                        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener" class="card-link" @click.stop v-tooltip="'Live Demo'">
                            <i class="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ProjectModal :project="selectedProject" @close="selectedProject = null" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "@typings/projects";
import { projects } from "@/data/projectData";
import ProjectModal from "./ProjectModal.vue";

export default defineComponent({
    name: "Projects",
    components: { ProjectModal },
    data() {
        return {
            projects: projects as Project[],
            selectedProject: null as Project | null,
        };
    },
    methods: {
        getInitials(title: string): string {
            return title.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
        },
        handleImageError(e: Event) {
            (e.target as HTMLImageElement).style.display = "none";
        },
        gradientForSlug(slug: string): string {
            const g: Record<string, string> = {
                terravia: "linear-gradient(135deg, #0f766e, #134e4a)",
                "guess-who": "linear-gradient(135deg, #1e40af, #1e3a5f)",
                "track-course": "linear-gradient(135deg, #166534, #14532d)",
                "nfl-countdown": "linear-gradient(135deg, #9f1239, #4c0519)",
                "putt-calc": "linear-gradient(135deg, #065f46, #064e3b)",
                portfolio: "linear-gradient(135deg, #1a1a2e, #16213e)",
            };
            return g[slug] || "linear-gradient(135deg, #1a1a2e, #0a0a0f)";
        },
    },
});
</script>

<style scoped>
.projects-section {
    padding: var(--space-4xl) var(--space-lg) var(--space-3xl);
    max-width: 1100px;
    margin: 0 auto;
}
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
}
.project-card {
    cursor: pointer;
    overflow: hidden;
    transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
}
.project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: var(--shadow-md);
}
.card-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--color-bg-elevated);
}
.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    transition: transform var(--transition-slow);
}
.project-card:hover .card-image {
    transform: scale(1.05);
}
.card-image-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
}
.placeholder-initials {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.15);
    letter-spacing: 4px;
}
.card-body {
    padding: var(--space-lg);
}
.card-title {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 var(--space-xs);
}
.card-tagline {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    margin: 0 0 var(--space-md);
    line-height: 1.5;
}
.card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: var(--space-md);
}
.card-tech-pill {
    padding: 2px 10px;
    border-radius: var(--radius-full);
    background: var(--color-accent-dim);
    color: var(--color-accent);
    font-size: 0.75rem;
    font-weight: 500;
}
.card-links {
    display: flex;
    gap: var(--space-md);
}
.card-link {
    color: var(--color-text-muted);
    font-size: 1.1rem;
    cursor: pointer;
    transition: color var(--transition-fast);
}
.card-link:hover {
    color: var(--color-accent);
}
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>

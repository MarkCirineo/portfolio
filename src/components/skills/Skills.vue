<template>
    <section id="skills" class="skills-section">
        <h2 class="section-title" v-scroll-reveal>Languages &amp; Technologies</h2>
        <div class="skills-grid">
            <div
                v-for="(skill, index) in skills"
                :key="skill.name"
                class="skill-card glass-card"
                v-scroll-reveal="{ delay: index * 40 }"
                v-tooltip.top="{ content: skill.name }"
            >
                <img class="skill-icon" :src="skill.image" :alt="skill.name" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Skills",
    data() {
        return {
            skills: [
                { name: "TypeScript", image: "/assets/technologies/typescript.svg" },
                { name: "JavaScript", image: "/assets/technologies/javascript.svg" },
                { name: "Vue.js", image: "/assets/technologies/vuejs.svg" },
                { name: "React", image: "/assets/technologies/react.svg" },
                { name: "Next.js", image: "/assets/technologies/nextjs.svg" },
                { name: "Svelte", image: "/assets/technologies/svelte.svg" },
                { name: "Node.js", image: "/assets/technologies/nodejs.svg" },
                { name: "HTML5", image: "/assets/technologies/html5.svg" },
                { name: "CSS3", image: "/assets/technologies/css3.svg" },
                { name: "TailwindCSS", image: "/assets/technologies/tailwind.svg" },
                { name: "Fastify", image: "/assets/technologies/fastify.svg" },
                { name: "Express.js", image: "/assets/technologies/express.svg" },
                { name: "Socket.io", image: "/assets/technologies/socketio.svg" },
                { name: "PostgreSQL", image: "/assets/technologies/postgresql.svg" },
                { name: "MySQL", image: "/assets/technologies/mysql.svg" },
                { name: "MongoDB", image: "/assets/technologies/mongodb.svg" },
                { name: "GraphQL", image: "/assets/technologies/graphql.svg" },
                { name: "Docker", image: "/assets/technologies/docker.svg" },
                { name: "Nginx", image: "/assets/technologies/nginx.svg" },
                { name: "Linux", image: "/assets/technologies/linux.svg" },
                { name: "Cloudflare", image: "/assets/technologies/cloudflare.svg" },
                { name: "Git", image: "/assets/technologies/git.svg" },
                { name: "GitHub", image: "/assets/technologies/github.svg" },
            ],
        };
    },
});
</script>

<style scoped>
.skills-section {
    padding: var(--space-3xl) var(--space-lg) var(--space-4xl);
    max-width: 900px;
    margin: 0 auto;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-md);
}

.skill-card {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-md);
    transition: transform var(--transition-base),
        border-color var(--transition-base),
        box-shadow var(--transition-base);
    cursor: default;
}

.skill-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: var(--shadow-glow);
}

.skill-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

@media (max-width: 640px) {
    .skills-grid {
        gap: var(--space-sm);
    }
    .skill-card {
        width: 64px;
        height: 64px;
    }
    .skill-icon {
        width: 32px;
        height: 32px;
    }
}
</style>

<template>
    <div class="skills-wrapper">
        <div class="skills-text">Languages & Technologies</div>
        <div class="skills">
            <img
                class="skill"
                v-for="skill in skills"
                :src="skill.image"
                :alt="skill.name"
                v-tooltip.top="{ content: skill.name }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Skills",

    data() {
        return {
            skills: [
                {
                    name: "TypeScript",
                    image: "/assets/technologies/typescript.svg",
                },
                {
                    name: "JavaScript",
                    image: "/assets/technologies/javascript.svg",
                },
                {
                    name: "Vue.js",
                    image: "/assets/technologies/vuejs.svg",
                },
                {
                    name: "Node.js",
                    image: "/assets/technologies/nodejs.svg",
                },
                {
                    name: "HTML5",
                    image: "/assets/technologies/html5.svg",
                },
                {
                    name: "CSS3",
                    image: "/assets/technologies/css3.svg",
                },
                {
                    name: "Fastify",
                    image: "/assets/technologies/fastify.svg",
                },
                {
                    name: "Express.js",
                    image: "/assets/technologies/express.svg",
                },

                {
                    name: "PostgreSQL",
                    image: "/assets/technologies/postgresql.svg",
                },
                {
                    name: "MySQL",
                    image: "/assets/technologies/mysql.svg",
                },
                {
                    name: "MongoDB",
                    image: "/assets/technologies/mongodb.svg",
                },
                {
                    name: "Git",
                    image: "/assets/technologies/git.svg",
                },
                {
                    name: "GitHub",
                    image: "/assets/technologies/github.svg",
                },
                {
                    name: "GraphQL",
                    image: "/assets/technologies/graphql.svg",
                },

                {
                    name: "React",
                    image: "/assets/technologies/react.svg",
                },
                {
                    name: "Svelte",
                    image: "/assets/technologies/svelte.svg",
                },
                {
                    name: "TailwindCSS",
                    image: "/assets/technologies/tailwind.svg",
                },
                {
                    name: "Bootstrap",
                    image: "/assets/technologies/bootstrap.svg",
                },
            ],
        };
    },
});
</script>

<style scoped>
.skills-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 5rem;
    padding-bottom: 10rem;
}

.skills-text {
    font-size: 1.6rem;
    margin-bottom: 28px;
    font-weight: 500;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    max-width: 1000px;
    gap: 48px;
}

.skill {
    width: 100px;
    height: 100px;
}
</style>

<template>
    <div class="work-wrapper">
        <div class="work">
            <div class="work-text">Experience</div>
            <div
                v-for="job in jobs"
                :key="job.company"
                class="work-information"
            >
                <div>
                    <div class="work-information-company">
                        <a
                            class="work-information-company-link"
                            :href="job.link"
                            target="_blank"
                        >
                            {{ job.company }}
                            <i
                                class="fa-solid fa-arrow-up-right-from-square work-icon"
                            />
                        </a>
                    </div>
                    <div
                        v-for="position in job.positions"
                        :key="position.title"
                    >
                        <div class="work-information-title">
                            {{ position.title }} ({{ position.dates }})
                        </div>
                    </div>
                    <div class="work-information-bullets">
                        <li v-for="bullet in job.bullets">{{ bullet }}</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                        {
                            title: "Software Engineer",
                            dates: "January 2026 - Present",
                        },
                        {
                            title: "Junior Software Engineer",
                            dates: "March 2023 - January 2026",
                        },
                        {
                            title: "Intern",
                            dates: "February 2022 - March 2023",
                        },
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
.work-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.work {
    width: 50%;
    max-width: 1000px;
    margin-bottom: 48px;
}

.work-text {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 16px;
    font-weight: 500;
}

.work-information-title {
    font-size: 1.05rem;
    font-style: italic;
}

.work-information-company {
    font-size: 1.25rem;
}

.work-information-company-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: max-content;
}

.work-icon {
    margin-left: 8px;
    font-size: 1rem;
    opacity: 0.75;
}

.work-information-bullets {
    margin-top: 8px;
    padding-left: 18px;
}
</style>

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
                            title: "Junior Software Engineer",
                            dates: "April 2023 - Present",
                        },
                        {
                            title: "Intern",
                            dates: "February 2022 - April 2023",
                        },
                    ],
                    company: "Digital Glue",
                    link: "https://www.digitalglue.com/",
                    bullets: [
                        "Spearheaded the integration of Archiware into the web application, developing and implementing features on both the frontend and backend to ensure efficient and reliable functionality.",
                        "Led the development of the tagging interface on the frontend, ensuring a seamless user experience.",
                        "Designed and implemented numerous features for the desktop application; currently serve as the sole developer and maintainer of the app.",
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

.work-information {
    border-left: 1px gray solid;
    padding-left: 18px;
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

.work-information-company-link:hover {
    color: var(--color-hover);
}

.work-information-bullets {
    margin-top: 8px;
}
</style>

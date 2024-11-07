<template>
    <div class="hero">
        <div class="name">Mark Cirineo</div>
        <div class="title">Full-stack Web Developer</div>
        <div class="buttons">
            <template v-for="button in buttons" :key="button.key">
                <component
                    :is="button.link ? 'a' : 'span'"
                    :href="button.link ?? undefined"
                    target="_blank"
                    v-tooltip.bottom="{ content: button.tooltip, distance: 10 }"
                    @click="handleClick(button)"
                >
                    <i :class="button.icon" class="icon" />
                </component>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Button = {
    key: string;
    tooltip: string;
    icon: string;
    link?: string;
    callback?: () => void;
};

export default defineComponent({
    name: "Hero",

    computed: {
        buttons(): Button[] {
            return [
                {
                    key: "Resume",
                    tooltip: "Open Resume",
                    icon: "fa-solid fa-file-lines",
                    callback: () => {
                        //
                    },
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

                            // TODO: Toast
                        } catch (error) {
                            // TODO: Error toast
                        }
                    },
                },
            ];
        },
    },

    methods: {
        handleClick(button: Button) {
            if (button.callback) {
                button.callback();
            }
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
}

.name {
    font-size: 1.6rem;
    font-weight: 500;
}

.title {
    font-size: 1.1rem;
    font-weight: 300;
    padding-bottom: 6px;
}

.location {
    font-size: 1rem;
    font-weight: 300;
}

.buttons {
    display: flex;
    gap: 8px;
}

.icon {
    font-size: 20px;
}

.icon:hover {
    cursor: pointer;
}
</style>

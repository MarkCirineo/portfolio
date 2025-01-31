<template>
    <div class="home">
        <Hero />
        <Work />
        <Skills />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@components/hero/Hero.vue";
import Work from "@components/work/Work.vue";
import Skills from "@components/skills/Skills.vue";

export default defineComponent({
    name: "Home",

    components: {
        Hero,
        Work,
        Skills,
    },
});
</script>

<style scoped>
.home {
    height: 100%;
}
</style>

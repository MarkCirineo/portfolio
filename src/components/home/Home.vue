<template>
    <div class="home">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Work />
        <Skills />
        <FooterSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@components/navbar/Navbar.vue";
import Hero from "@components/hero/Hero.vue";
import About from "@components/about/About.vue";
import Projects from "@components/projects/Projects.vue";
import Work from "@components/work/Work.vue";
import Skills from "@components/skills/Skills.vue";
import FooterSection from "@components/footer/Footer.vue";

export default defineComponent({
    name: "Home",
    components: {
        Navbar,
        Hero,
        About,
        Projects,
        Work,
        Skills,
        FooterSection,
    },
});
</script>

<style scoped>
.home {
    min-height: 100vh;
}
</style>

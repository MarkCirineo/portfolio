<template>
    <div class="home">
        <Hero />
        <Work />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@components/hero/Hero.vue";
import Work from "@components/work/Work.vue";

export default defineComponent({
    name: "Home",

    components: {
        Hero,
        Work,
    },
});
</script>

<style scoped>
.home {
    height: 100%;
}
</style>

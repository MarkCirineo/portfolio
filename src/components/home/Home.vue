<template>
    <div class="home">
        <Hero />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@components/hero/Hero.vue";

export default defineComponent({
    name: "Home",

    components: {
        Hero,
    },
});
</script>

<style scoped>
.home {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
}
</style>

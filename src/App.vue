<template>
    <RouterView />
    <Toasts class="toasts" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toasts from "@components/toast/Toasts.vue";

export default defineComponent({
    name: "App",

    components: {
        Toasts,
    },
});
</script>

<style scoped>
.toasts {
    position: absolute;
    top: 16px;
    right: 16px;
}
</style>

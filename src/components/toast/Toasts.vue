<template>
    <div v-if="toasts.length" class="toasts">
        <Toast v-for="toast in toasts" :toast="toast" />
    </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";

import { useToastStore } from "@stores/toast";
import Toast from "./Toast.vue";

export default defineComponent({
    name: "Toasts",

    components: {
        Toast,
    },

    computed: {
        ...mapState(useToastStore, ["toasts"]),
    },
});
</script>

<style scoped>
.toasts {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>

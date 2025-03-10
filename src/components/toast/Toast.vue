<template>
    <Transition name="toast">
        <div
            v-if="visible"
            class="toast"
            :data-id="toast.id"
            @mouseenter="hovering = true"
            @mouseleave="hovering = false"
        >
            <i
                class="fa-solid fa-xmark toast-x-button"
                v-if="hovering"
                @click="closeToast"
            />
            <span>{{ toast.message }}</span>
        </div>
    </Transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions } from "pinia";

import { useToastStore } from "@stores/toast";
import { Toast } from "@typings/toast";

export default defineComponent({
    name: "Toasts",

    props: {
        toast: {
            type: Object as PropType<Toast>,
            required: true,
        },
    },

    data() {
        return {
            hovering: false,
            visible: true,
        };
    },

    methods: {
        ...mapActions(useToastStore, ["removeToast"]),

        closeToast() {
            this.visible = false;
            setTimeout(() => {
                this.removeToast(this.toast.id);
            }, 300);
        },
    },
});
</script>

<style>
.toast {
    position: relative;
    padding: 16px;
    border-radius: 5px;
    min-width: 350px;
    max-width: 350px;
    gap: 8px;
    font-size: 1.1rem;
    border: 2px solid white;
    animation: slide-in 0.3s ease-out;
}

@keyframes slide-in {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.toast-x-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1rem;
}

.toast-x-button:hover {
    cursor: pointer;
}

.toast-enter-active,
.toast-leave-active {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.toast-enter-from,
.toast-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>

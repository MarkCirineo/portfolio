import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { ToastStore } from "@typings/toast";

export const useToastStore = defineStore("toast", {
    state: (): ToastStore => ({
        toasts: [],
    }),

    actions: {
        createToast({
            message,
            duration,
        }: {
            message: string;
            duration?: number;
        }) {
            const id = nanoid();

            this.toasts.push({
                id,
                message,
                duration: duration ?? 5000,
            });

            setTimeout(() => {
                const toastElement = document.querySelector(
                    `.toast[data-id="${id}"]`
                );

                if (toastElement) {
                    toastElement.classList.add("toast-leave-active");
                    toastElement.classList.add("toast-leave-to");
                    setTimeout(() => {
                        this.removeToast(id);
                    }, 300);
                }
            }, duration ?? 5000);
        },

        removeToast(id: string) {
            this.toasts = this.toasts.filter(toast => toast.id !== id);
        },
    },
});

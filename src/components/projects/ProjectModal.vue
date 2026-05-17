<template>
    <Transition name="modal">
        <div v-if="project" class="modal-overlay" @click.self="close">
            <div class="modal-container">
                <button class="modal-close" @click="close">
                    <i class="fa-solid fa-xmark" />
                </button>

                <!-- Screenshot Gallery -->
                <div class="modal-gallery" v-if="project.screenshots.length">
                    <div class="gallery-viewport">
                        <img
                            :src="project.screenshots[currentIndex]"
                            :alt="project.title + ' screenshot'"
                            class="gallery-image"
                            @error="handleImageError"
                        />

                        <div
                            class="gallery-placeholder"
                            v-if="imageError"
                            :style="{
                                background: gradientForSlug(project.slug),
                            }"
                        >
                            <span class="placeholder-text">{{
                                project.title
                            }}</span>
                        </div>
                    </div>

                    <button
                        v-if="project.screenshots.length > 1"
                        class="gallery-arrow gallery-arrow-left"
                        @click="prevImage"
                    >
                        <i class="fa-solid fa-chevron-left" />
                    </button>
                    <button
                        v-if="project.screenshots.length > 1"
                        class="gallery-arrow gallery-arrow-right"
                        @click="nextImage"
                    >
                        <i class="fa-solid fa-chevron-right" />
                    </button>

                    <div
                        v-if="project.screenshots.length > 1"
                        class="gallery-dots"
                    >
                        <span
                            v-for="(_, i) in project.screenshots"
                            :key="i"
                            class="gallery-dot"
                            :class="{ active: i === currentIndex }"
                            @click="currentIndex = i"
                        />
                    </div>
                </div>

                <!-- Project Info -->
                <div class="modal-info">
                    <h2 class="modal-title">{{ project.title }}</h2>
                    <p class="modal-description">{{ project.description }}</p>

                    <div class="modal-tech">
                        <span
                            v-for="tech in project.technologies"
                            :key="tech"
                            class="tech-pill"
                        >
                            {{ tech }}
                        </span>
                    </div>

                    <div class="modal-actions">
                        <a
                            v-if="project.githubUrl"
                            :href="project.githubUrl"
                            target="_blank"
                            rel="noopener"
                            class="modal-btn modal-btn-secondary"
                        >
                            <i class="fa-brands fa-github" />
                            View Source
                        </a>
                        <a
                            v-if="project.liveUrl"
                            :href="project.liveUrl"
                            target="_blank"
                            rel="noopener"
                            class="modal-btn modal-btn-primary"
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square" />
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "@typings/projects";

export default defineComponent({
    name: "ProjectModal",

    props: {
        project: {
            type: Object as PropType<Project | null>,
            default: null,
        },
    },

    emits: ["close"],

    data() {
        return {
            currentIndex: 0,
            imageError: false,
        };
    },

    watch: {
        project(newVal: Project | null) {
            if (newVal) {
                this.currentIndex = 0;
                this.imageError = false;
                document.body.style.overflow = "hidden";
                window.addEventListener("keydown", this.handleKeydown);
            } else {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", this.handleKeydown);
            }
        },
    },

    beforeUnmount() {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", this.handleKeydown);
    },

    methods: {
        close() {
            this.$emit("close");
        },

        handleKeydown(e: KeyboardEvent) {
            if (e.key === "Escape") this.close();
            if (e.key === "ArrowLeft") this.prevImage();
            if (e.key === "ArrowRight") this.nextImage();
        },

        prevImage() {
            if (!this.project) return;
            this.imageError = false;
            this.currentIndex =
                (this.currentIndex - 1 + this.project.screenshots.length) %
                this.project.screenshots.length;
        },

        nextImage() {
            if (!this.project) return;
            this.imageError = false;
            this.currentIndex =
                (this.currentIndex + 1) % this.project.screenshots.length;
        },

        handleImageError() {
            this.imageError = true;
        },

        gradientForSlug(slug: string): string {
            const gradients: Record<string, string> = {
                terravia:
                    "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
                "guess-who":
                    "linear-gradient(135deg, #1e40af 0%, #1e3a5f 100%)",
                "track-course":
                    "linear-gradient(135deg, #166534 0%, #14532d 100%)",
                "nfl-countdown":
                    "linear-gradient(135deg, #9f1239 0%, #4c0519 100%)",
                "putt-calc":
                    "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
                portfolio:
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            };
            return (
                gradients[slug] ||
                "linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%)"
            );
        },
    },
});
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    z-index: var(--z-modal);
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-lg);
}

.modal-container {
    position: relative;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}

.modal-close {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    z-index: 10;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-full);
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--transition-fast);
}

.modal-close:hover {
    background: rgba(0, 0, 0, 0.8);
}

/* Gallery */
.modal-gallery {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    background: var(--color-bg-elevated);
}

.gallery-viewport {
    width: 100%;
    height: 100%;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.gallery-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-text {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 2px;
}

.gallery-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--color-border);
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--transition-fast);
}

.gallery-arrow:hover {
    background: rgba(0, 0, 0, 0.8);
}

.gallery-arrow-left {
    left: var(--space-md);
}

.gallery-arrow-right {
    right: var(--space-md);
}

.gallery-dots {
    position: absolute;
    bottom: var(--space-md);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--space-sm);
}

.gallery-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: background var(--transition-fast);
}

.gallery-dot.active {
    background: var(--color-accent);
}

/* Info */
.modal-info {
    padding: var(--space-xl) var(--space-xl) var(--space-2xl);
}

.modal-title {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 0 var(--space-md);
}

.modal-description {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin: 0 0 var(--space-lg);
    font-size: 0.95rem;
}

.modal-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.tech-pill {
    padding: 4px 12px;
    border-radius: var(--radius-full);
    background: var(--color-accent-dim);
    color: var(--color-accent);
    font-size: 0.8rem;
    font-weight: 500;
}

.modal-actions {
    display: flex;
    gap: var(--space-md);
}

.modal-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 10px 20px;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
    text-decoration: none;
}

.modal-btn-primary {
    background: var(--color-accent);
    color: #0a0a0f;
}

.modal-btn-primary:hover {
    background: var(--color-accent-hover);
    box-shadow: var(--shadow-glow);
}

.modal-btn-secondary {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
}

.modal-btn-secondary:hover {
    border-color: var(--color-text-muted);
    background: rgba(255, 255, 255, 0.05);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(0.95) translateY(20px);
    opacity: 0;
}

/* Scrollbar inside modal */
.modal-container::-webkit-scrollbar {
    width: 4px;
}

.modal-container::-webkit-scrollbar-thumb {
    background: var(--color-text-muted);
    border-radius: var(--radius-full);
}

@media (max-width: 640px) {
    .modal-overlay {
        padding: 0;
        align-items: flex-end;
    }

    .modal-container {
        max-height: 95vh;
        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .modal-info {
        padding: var(--space-lg);
    }
}
</style>

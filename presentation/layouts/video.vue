<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
    video: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="slidev-layout w-full h-full grid content-center">
        <a
            href="https://www.estg.ipp.pt"
            target="_blank"
            class="
                abs-tl
                top-6
                left-6
                opacity-50
                !hover:opacity-100
                no-border no-decoration
                shadow-none
            "
        >
            <img src="/media/logos/pporto.png" class="w-75px" alt="P.Porto" />
        </a>

        <slot class="mt-4 content" />

        <div class="video-container">
            <iframe
                :src="`${video}?rel=0`"
                allowfullscreen="false"
                class="video"
                v-if="video.includes('http')"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <video class="video" controls v-else>
                <source :src="video" type=video/mp4>
            </video>
        </div>

        <DarkToggle class="abs-tr right-6 top-6" />

        <div class="abs-br mx-6 my-6">
            <span
                @click="$slidev.nav.next"
                class="
                    arrow-container
                    cursor-pointer
                    text-white
                    transition-all
                    duration-150
                    ease-in
                "
                hover="bg-altBlue bg-opacity-75 text-white"
            >
                <carbon:chevron-right class="inline" />
            </span>
        </div>
    </div>
</template>

<style lang="sass">
.video-container
    padding-top: 45%
    height: 0px
    position: relative

.video
    width: 100%
    height: 100%
    position: absolute
    inset: 0
    margin: 0 auto
</style>

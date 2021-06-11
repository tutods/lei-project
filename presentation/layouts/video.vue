<script setup lang="ts">
import { computed, defineProps } from "vue";
import { handleBackground } from "@slidev/theme-default/layoutHelper";

const props = defineProps({
    video: {
        type: String,
    },
});

// const style = computed(() => handleBackground(props.video));
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
            <embed
                v-bind:src="video + '?mute=1'"
                allowfullscreen="false"
                class="video"
            />
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
    // width: 100%
    padding-top: 45%
    height: 0px
    position: relative

.video
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: 0 auto
</style>

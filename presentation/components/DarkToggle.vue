<script setup lang="ts">
import { isDark, toggleDark } from "@slidev/client/logic/dark";
</script>

<template>
    <button
        class="
            br-100p
            inline-flex
            items-center
            justify-center
            text-center text-xs
            p-1
            size-20px
            text-white
            bg-altBlue
            dark:text-altBlue dark:bg-white
            shadow-none
            outline-none
            dark:outline-none
        "
        hover="text-white dark:bg-white bg-altBlue bg-opacity-75 dark:text-beapt outline-none"
        @click="toggleDark"
    >
        <carbon:moon v-if="isDark" />
        <carbon:sun v-else />
    </button>
</template>

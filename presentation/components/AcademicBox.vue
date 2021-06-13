<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
    current: { type: Boolean, default: false },
});

const isCurrent = ref(props.current);
</script>
<template>
    <div
        class="
            flex flex-col
            items-center
            justify-center
            p-2
            px-4
            min-w-100px
            max-w-200px
            text-center
            rounded-sm
            text-white
        "
        v-bind:class="[isCurrent ? 'bg-altBlue' : 'bg-beapt']"
    >
        <slot class="font-bold text-center" />
    </div>
</template>

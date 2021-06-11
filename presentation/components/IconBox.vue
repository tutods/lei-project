<script>
// import { defineProps, ref } from "vue";

// const props = defineProps({
//     title: { type: String, required: true },
// });

// const title = ref(props.title);
// export default {
//     props: {
//         title: {
//             type: String,
//         },
//     },
// };
</script>

<template>
    <div class="flex flex-col items-center">
        <slot />
        <span class="font-300 mt-1 text-sm text-center"
            ><slot name="title"
        /></span>
    </div>
</template>

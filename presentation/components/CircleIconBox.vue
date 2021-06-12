<template>
    <div class="flex flex-col items-center">
        <div
            class="
                w-50px
                h-50px
                text-center
                flex
                items-center
                justify-center
                bg-altBlue
                rounded-full
                mb-2
            "
        >
            <slot />
        </div>
        <span class="font-300 text-xs text-center"><slot name="title" /></span>
    </div>
</template>

<template>
    <div class="flex flex-col items-center">
        <slot />
        <span class="font-300 mt-1 text-sm text-center"
            ><slot name="title"
        /></span>
    </div>
</template>

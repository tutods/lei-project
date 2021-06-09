<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { handleBackground } from '@slidev/theme-default/layoutHelper';

const props = defineProps({
	image: {
		type: String,
	},
	class: {
		type: String,
	},
});

const style = computed(() => handleBackground(props.image));
</script>

<template>
	<div class="h-full w-full">
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

		<DarkToggle class="abs-tr right-6 top-6" />

		<div class="grid grid-cols-2 w-full h-full">
			<div class="slidev-layout default mt-4 h-auto" :class="props.class">
				<slot />
			</div>
			<div class="w-full h-full" :style="style"></div>
		</div>
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

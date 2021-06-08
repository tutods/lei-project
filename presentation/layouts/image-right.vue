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
		<div class="abs-tl top-5 left-5">
			<a
				href="https://www.estg.ipp.pt"
				target="_blank"
				class="
					opacity-50
					!hover:opacity-100
					no-border no-decoration
					shadow-none
				"
			>
				<img
					src="/media/logos/pporto.png"
					class="w-75px"
					alt="P.Porto"
				/>
			</a>
		</div>
		<div class="grid grid-cols-2 w-full h-full">
			<div class="slidev-layout default mt-4 h-auto" :class="props.class">
				<slot />
			</div>
			<div class="w-full h-full" :style="style"></div>
		</div>
		<div class="abs-br mx-14 my-12">
			<span
				@click="$slidev.nav.next"
				class="px-2 py-1 rounded cursor-pointer text-white"
				hover="bg-beapt bg-opacity-50 text-white"
			>
				<carbon:arrow-right class="inline" />
			</span>
		</div>
	</div>
</template>

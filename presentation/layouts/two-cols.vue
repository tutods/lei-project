<!--
  Usage:

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

-->

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
	class: {
		type: String,
	},
});
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
		<div
			class="
				slidev-layout
				two-columns
				w-full
				h-auto
				mt-4
				grid grid-cols-2
			"
		>
			<div class="col-left" :class="props.class">
				<slot />
			</div>
			<div class="col-right" :class="props.class">
				<slot name="right" />
			</div>
		</div>

		<div class="abs-br mx-6 my-6">
			<span
				@click="$slidev.nav.next"
				class="
					arrow-container
					cursor-pointer
					text-altBlue
					dark:text-white
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

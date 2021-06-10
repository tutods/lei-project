<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
	number: { type: Number, required: true },
	title: { type: String, required: true },
});

// const number =
</script>

<template>
	<div class="flex items-center gap-2">
		<div class="circle bg-beapt text-white">
			<div class="circle-txt">{{ this.number }}</div>
		</div>
		<div>
			<h3 class="no-m no-p text-beapt">{{ this.title }}</h3>
			<h4 class="text-xs"><slot /></h4>
		</div>
	</div>
</template>

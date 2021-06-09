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

		<div class="slidev-layout intro h-auto mt-4">
			<slot />
		</div>

		<div class="abs-br mx-14 my-12">
			<span
				@click="$slidev.nav.next"
				class="px-2 py-1 rounded-sm cursor-pointer text-altBlue"
				hover="bg-beapt text-white"
			>
				<carbon:chevron-right class="inline" />
			</span>
		</div>
	</div>
</template>

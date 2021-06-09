<template>
	<div class="slidev-layout section">
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

		<slot class="mt-4" />

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

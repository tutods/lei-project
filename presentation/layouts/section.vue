<template>
	<div class="slidev-layout section">
		<div class="abs-tl top-5 left-5 mb-4">
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

		<slot class="mt-4" />

		<div class="abs-br mx-6 my-6">
			<span
				@click="$slidev.nav.next"
				class="arrow-container cursor-pointer text-white"
				hover="bg-altBlue bg-opacity-75 text-white"
			>
				<carbon:chevron-right class="inline" />
			</span>
		</div>
	</div>
</template>

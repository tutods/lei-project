<template>
	<div class="slidev-layout grid h-full content-center">
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
		<div class="h-auto">
			<slot />
		</div>

		<div class="abs-br mx-14 my-12">
			<span
				@click="$slidev.nav.next"
				class="px-2 py-1 rounded cursor-pointer text-altBlue"
				hover="bg-beapt text-white"
			>
				<carbon:arrow-right class="inline" />
			</span>
		</div>
	</div>
</template>

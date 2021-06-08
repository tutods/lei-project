<template>
	<div class="slidev-layout end">
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

		<h1 class="text-white text-2xl text-center font-bold no-mb">
			Obrigado
		</h1>
		<h3 class="mt-1">pelo tempo disponibilizado!</h3>
	</div>
</template>

<style scopde lang="postcss">
.slidev-layout.end {
	@apply text-white text-xl tracking-widest h-full text-center grid place-content-center select-none bg-blend-overlay;
	background-image: url('/media/backgrounds/athlete.jpeg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-color: rgba(0, 0, 0, 0.85);
}

h3 {
	color: #fff !important;
	opacity: 1 !important;
}
</style>

<template>
	<div
		class="
			bg-404
			h-full
			w-full
			flex
			items-center
			justify-center
			text-center text-white
			bg-blend-overlay bg-color-overlay bg-cover bg-center bg-no-repeat
		"
	>
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

		<h1 class="text-center">404</h1>
		<h4 class="text-center text-white">Página não encontrada</h4>
	</div>
</template>

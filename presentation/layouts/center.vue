<template>
	<div class="slidev-layout center h-full grid place-content-center">
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
		<div class="my-auto">
			<slot />
		</div>
	</div>
</template>

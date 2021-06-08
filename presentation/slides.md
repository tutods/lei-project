---
#==> Theme
theme: 'default'
colorSchema: light

#==> Layout
layout: cover
class: bg-blend-overlay bg-color-overlay
background: '/media/backgrounds/athlete.jpeg'

#==> Fonts
fonts:
  # Normal Font
  sans: 'Poppins'
  # Serif Font
  serif: 'Playfair Display'
  # Code Font
  mono: 'Fira Code'
  # Provider
  provider: 'google'

#==> Code Highlighter
highlighter: shiki

#==> Slide Info
title: BeAPT
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
---

<div class="absolute top-10">
	<a href="https://www.estg.ipp.pt" target="_blank"
	class="opacity-50 !hover:opacity-100 no-border no-decoration shadow-none">
		<img src="/media/logos/pporto.png" class="w-75px"  alt="P.Porto"/>
	</a>
</div>

<div class="center">
  	<h1 class="font-extrabold" style="line-height: 2rem !important;">BeAPT</h1>
  	<p class="font-300" style="opacity: 1;font-size: 12px">Plataforma de gestão de treinos para atletas de alta competição</p>
</div>

<div class="abs-bl mx-14 my-12 flex items-center" >
	<img src="/media/daniel-sousa.jpg" class="size-40px br-50p  object-cover-top no-decoration">
	<div class="ml-3 flex flex-col text-left">
		<span class="font-300">Daniel Sousa</span>
		<span class="mt-1 fs-10px">8160334</span>
	</div>
</div>

<div class="abs-br mx-14 my-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

---
src: ./pages/structure.md
---

---
src: ./pages/about-me.md
---
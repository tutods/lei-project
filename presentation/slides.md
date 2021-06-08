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
src: ./pages/about-me.md

---
layout: full
___
# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

### Keyboard Shortcuts

|                                     |                             |
| ----------------------------------- | --------------------------- |
| <kbd>right</kbd> / <kbd>space</kbd> | next animation or slide     |
| <kbd>left</kbd>                     | previous animation or slide |
| <kbd>up</kbd>                       | previous slide              |
| <kbd>down</kbd>                     | next slide                  |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---
src: ./pages/code.md
---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

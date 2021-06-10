---
layout: center
---

<h1 class="no-mb font-300">Tecnologias & Ferramentas</h1>
<h3 class="font-xs">Tecnologias, Ferramentas e Dependências utilizadas no projeto</h3>

<br />

<v-clicks :every="2">

<p class="font-bold text-sm">Tecnologias</p>

<div class="grid grid-cols-6 gap-2 w-600px">
  <div class="flex flex-col items-center">
    <logos-react class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">React</span>
  </div>
  <div class="flex flex-col items-center">
    <logos-sass class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">Sass</span>
  </div>
  <div class="flex flex-col items-center">
    <logos-graphql class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">GraphQL</span>
  </div>
  <div class="flex flex-col items-center">
    <simple-icons:apollographql class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">Apollo <small>Server & Client</small></span>
  </div>
  <div class="flex flex-col items-center">
    <TypeORMLogo class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">TypeORM</span>
  </div>
  <div class="flex flex-col items-center">
    <logos-postgresql class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">PostgreSQL</span>
  </div>
</div>


<p class="font-bold text-sm">Ferramentas</p>

<div class="grid grid-cols-4 gap-2 w-1/2">
  <div class="flex flex-col items-center">
    <logos:visual-studio-code class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">Visual Studio Code</span>
  </div>
  <div class="flex flex-col items-center">
    <logos:yarn class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">Yarn</span>
  </div>
</div>


<p class="font-bold text-sm pt-4">Dependências</p>

<div class="grid grid-cols-4 gap-2 w-1/2">
  <div class="flex flex-col items-center">
    <logos-stripe class="w-30px h-30px" />
    <span class="font-300 mt-1 text-sm text-center">Stripe</span>
  </div>
  <div class="flex flex-col items-center">
    <simple-icons:strava class="w-30px h-30px text-beapt" />
    <span class="font-300 mt-1 text-sm text-center">Strava</span>
  </div>
</div>

</v-clicks>
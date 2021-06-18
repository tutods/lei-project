---
layout: two-cols
---

<template v-slot:default>
<h1 class="abs-bl font-extrabold">Estrutura</h1>

<div class="flex flex-col gap-2 justify-between">
  <div class="flex flex-col gap-4">
    <v-clicks>
    <StructurePoint number="1" title="Entidade de Acolhimento">
        <b>Jimmy Boys</b>
    </StructurePoint>
    <StructurePoint number="2" title="Projeto">
        <b>BeAPT</b>
    </StructurePoint>
    <StructurePoint number="3" title="Utilizadores">
        Quem são e quais funcionalidades dispõem?
    </StructurePoint>
    <StructurePoint number="4" title="Arquitetura Conceptual">
        Quais são as "camadas" do projeto?
    </StructurePoint>
    <StructurePoint number="5" title="Tecnologias & Ferramentas">
        Tecnologias & Ferramentas utilizadas durante o desenvolvimento
    </StructurePoint>
    </v-clicks>
  </div>
  <div class="mt-5">
    <a href="https://gitlab.estg.ipp.pt/DSousa/lei_pf2021_8160334" class="inline-flex gap-2 items-center !hover:text-beapt text-sm">
      <jam-gitlab />
      Repositório
    </a>
  </div>
</div>

</template>
<template v-slot:right>

<div class="flex flex-col gap-4">
    <v-clicks>
    <StructurePoint number="6" title="Componentes React">
        Reutilização de componentes e propriedades
    </StructurePoint>
    <StructurePoint number="7" title="Resultados">
        O que foi desenvolvido?
    </StructurePoint>
    <StructurePoint number="8" title="Trabalhos Futuros">
        Pontos a implementar ou a melhorar futuramente
    </StructurePoint>
    </v-clicks>
</div>
</template>
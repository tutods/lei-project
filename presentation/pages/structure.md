---
layout: two-cols
---

<template v-slot:default>
<h1 class="abs-bl font-extrabold">Estrutura</h1>

<div class="flex flex-col gap-2 justify-between">
  <div class="flex flex-col gap-4">
    <StructurePoint _number="1" :title="Entidade de Acolhimento">
        <b>Jimmy Boys</b>
    </StructurePoint>
    <StructurePoint _number="2" :title="Projeto">
        <b>BeAPT</b>
    </StructurePoint>
    <StructurePoint _number="3" :title="Arquitetura">
        Arquitetura Conceptual
    </StructurePoint>
    <StructurePoint _number="4" :title="Tecnologias">
        <strong>React</strong> & Componentes
    </StructurePoint>
    <StructurePoint _number="4" :title="Resultado">
        Tecnologias
    </StructurePoint>
  </div>
  <div class="mt-5">
    <a href="https://gitlab.com" class="inline-flex gap-2 items-center !hover:text-beapt text-sm">
      <jam-gitlab />
      Repositório
    </a>
  </div>
</div>

</template>
<template v-slot:right>

<div class="flex flex-col gap-4">
    <StructurePoint _number="1" :title="Entidade de Acolhimento">
        <b>Jimmy Boys</b>
    </StructurePoint>
    <StructurePoint _number="2" :title="Projeto">
        <b>BeAPT</b>
    </StructurePoint>
    <StructurePoint _number="3" :title="Arquitetura">
        Arquitetura Conceptual
    </StructurePoint>
    <StructurePoint _number="4" :title="Tecnologias">
        <strong>React</strong> & Componentes
    </StructurePoint>
    <StructurePoint _number="4" :title="Resultado">
        Tecnologias
    </StructurePoint>
</div>
</template>
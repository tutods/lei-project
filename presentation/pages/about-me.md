---
layout: center
---

<h1 class="font-600 no-mb">Daniel Sousa</h1>
<h3><em>Front-end</em></h3>

<br />


<v-clicks :every="2">
<p class="font-bold">Competências</p>

<div class="grid grid-cols-6 gap-2 w-3/5">
    <IconBox>
        <template v-slot:default>
        <logos-react class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        React
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-angular-icon class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Angular
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-sass class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Sass
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <simple-icons-chakraui  class="w-30px h-30px text-logos-chakra" />
        </template>
        <template v-slot:title>
        Chakra UI
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-bootstrap  class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Bootstrap
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-nodejs-icon  class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        NodeJS
        </template>
    </IconBox>
</div>


<p class="font-bold mt-2 no-mb">Percurso Académico</p>
</v-clicks>

<div class="flex gap-2 mt-2 justify-between w-3/5">
<v-clicks>
    <AcademicBox class="text-xs"><small>Curso Profissional</small> Técnico de Gestão de Equip. Informáticos</AcademicBox>
    <AcademicBox class="text-xs"><small>CTeSP</small> Informática de Gestão</AcademicBox>
    <AcademicBox class="text-xs" current={true}><small>Licenciatura</small> Engenharia Informática</AcademicBox>
</v-clicks>
</div>


<img src="/media/daniel-sousa.jpg" class="rounded-full size-200px object-cover-top abs-tr mt-16 mr-12"/>
---
layout: image-right-overlay
image: '/media/backgrounds/athlete.jpeg'
class: 'content-center'
---

<h2 class="font-300 no-mb">Utilizadores</h2>
<h4 class="mb-4 uppercase text-sm">Quem são? Que funcionalidades podem usufruir?</h4>

<div class="flex flex-col justify-center gap-4">
<v-clicks>

<div>
    <IconBox class="inline-flex">
        <template v-slot:default>
        <AthleteIcon class="w-30px h-30px text-altBlue dark:text-current" />
        </template>
        <template v-slot:title>
        <p class="font-800 text-lg no-m no-pt uppercase dark:text-current text-altBlue">Atletas</p>
        </template>
    </IconBox>
    <p class="text-xs no-m text-beapt italic">Frontoffice</p>
    <ul class="text-xs mt-2">
    <li>Definição do objetivo a atingir e do desafio a realizar;</li>
    <li>Edição dos seus dados pessoais;</li>
    <li>Consulta e carregamento de treinos realizados;</li>
    <li>Visualização da sua evolução graficamente.</li>
    </ul>
</div>

<div>
    <IconBox class="inline-flex">
        <template v-slot:default>
        <TrainerIcon class="w-30px h-30px text-altBlue dark:text-current" />
        </template>
        <template v-slot:title>
        <p class="font-800 text-lg no-m no-pt uppercase dark:text-current text-altBlue">Treinadores</p>
        </template>
    </IconBox>
    <p class="text-xs no-m text-beapt italic">Backoffice</p>
    <ul class="text-xs mt-2">
    <li>Criação de treinos modelo;</li>
    <li>Consulta de dados pessoais e biométricos dos atletas;</li>
    <li>Consulta de treinos realizados e por realizar dos atletas;</li>
    <li>Visualização gráfica da evolução dos atletas.</li>
    </ul>
</div>
</v-clicks>
</div>
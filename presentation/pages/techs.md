---
layout: center
---

<h1 class="no-mb font-300">Tecnologias & Ferramentas</h1>
<h3 class="font-xs">Tecnologias, Ferramentas e Dependências utilizadas no projeto</h3>

<br />

<v-clicks :every="2">

<p class="font-bold text-sm">Tecnologias</p>

<div class="grid grid-cols-7 gap-2 w-600px">
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
        <logos-typescript-icon class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        TypeScript
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
        <logos-graphql class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        GraphQL
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <simple-icons:apollographql class="w-30px h-30px" />
        </template>
        <template v-slot:title class="items-center">
        Apollo
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <TypeORMLogo class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        TypeORM
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-postgresql class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        PostgreSQL
        </template>
    </IconBox>
</div>


<p class="font-bold text-sm">Ferramentas</p>

<div class="grid grid-cols-4 gap-2 w-1/2">
    <IconBox>
        <template v-slot:default>
        <logos-visual-studio-code class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Visual Studio Code
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <logos-yarn class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Yarn
        </template>
    </IconBox>
</div>


<p class="font-bold text-sm pt-4">Dependências</p>

<div class="grid grid-cols-4 gap-2 w-1/2">
    <IconBox>
        <template v-slot:default>
        <logos-stripe class="w-30px h-30px" />
        </template>
        <template v-slot:title>
        Stripe
        </template>
    </IconBox>
    <IconBox>
        <template v-slot:default>
        <simple-icons:strava class="w-30px h-30px text-beapt" />
        </template>
        <template v-slot:title>
        Strava
        </template>
    </IconBox>
</div>

</v-clicks>
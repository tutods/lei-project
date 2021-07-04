---
layout: full
---

<h1 class="no-mb font-300">GraphQL</h1>
<h3 class="font-xs">Uso do <strong>Apollo Client</strong></h3>

<div class="flex gap-4 mt-2">

<div style="width: 50%">
<v-clicks>


```ts{all|2}
const client = new ApolloClient({
    uri: 'https://localhost:3333/graphql',
    cache: new InMemoryCache(),
});
```

```ts{all|5-8|15|all}
const GET_ATHLETES_BY_SPORT = gql`
    query getAllAthletes($sport: String) {
        getAllAthletes(sport: $sport) {
            name
            plans {
                id
                name
            }
        }
    }
`

const { loading, error, data } = useQuery(
    GET_ATHLETES_BY_SPORT,
    {variables: { sport: 'btt' }}
);
```

<arrow v-click="9" x1="300" y1="350" x2="200" y2="435" class="text-beapt" width="3" arrowSize="1" />

</v-clicks>
</div>
<div>
<v-clicks>
<h4 class="font-300"><strong>GraphQL:</strong> Vantagens & Desvantagens</h4>

<div class="flex flex-col gap-2 mt-2">
<div class="flex gap-1 font-300 text-sm items-center">
    <akar-icons:circle-check-fill class="text-success" />
    <span>Obtenção de todos os dados necessários apenas num pedido, sem dados desnecessários;</span>
</div>

<div class="flex gap-1 font-300 text-sm items-center">
    <akar-icons:circle-check-fill class="text-success" />
    <span>Tempos de resposta reduzidos;</span>
</div>

<div class="flex gap-1 font-300 text-sm items-center mt-4">
    <ant-design:close-circle-fill class="text-danger" />
    <span>Curva de aprendizagem elevada;</span>
</div>
<div class="flex gap-1 font-300 text-sm items-center">
    <ant-design:close-circle-fill class="text-danger" />
    <span>Todas as respostas são devolvidas com <em>Status Code</em> 200;</span>
</div>
<div class="flex gap-1 font-300 text-sm items-center">
    <ant-design:close-circle-fill class="text-danger" />
    <span>Armazenamento em <em>cache</em> mais complexo.</span>
</div>
</div>

</v-clicks>
</div>
</div>
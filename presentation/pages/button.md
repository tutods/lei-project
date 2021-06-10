---
layout: center
---

<h1 class="font-700 mb-2">Componente <code>Button</code></h1>

<v-clicks>
<div class="no-mb">
    <h3 class="p-0 mb-1">Propriedade <code>modifier</code></h3>
    <ul class="text-sm">
        <li><b>Valores Possíveis:</b> <code>alt-primary</code>, <code>info</code> e <code>danger</code></li>
    </ul>
</div>

<div class="grid grid-cols-2 gap-2 mt-4 items-center">

<div>
<VButton class="w-200px text-xs mb-2" modifier="alt-primary" rounded>Button com Modifier</VButton>

<div>

```html
<Button modifier="alt-primary" rounded>
    Button com Modifier
</Button>
```

</div>
</div>

<div>
<VButton class="w-200px text-xs mb-2" modifier="info" rounded>Button com Modifier</VButton>

<div>

```html
<Button modifier="info" rounded>
    Button com Modifier
</Button>
```

</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 items-center">
<div>
<VButton class="w-200px text-xs mb-2" modifier="danger" rounded>Button com Modifier</VButton>

<div>

```html
<Button modifier="danger" rounded>
    Button com Modifier
</Button>
```

</div>
</div>

<div>
<VButton class="w-200px text-sm mb-2">Button sem Modifier</VButton>

<div>

```html
<Button>
    Button sem Modifier
</Button>
```

</div>
</div>
</div>

<arrow x1="300" y1="500" x2="270" y2="435" class="text-beapt" width="3" arrowSize="1" />

</v-clicks>
<div align="center">
<a href="#"><img alt="BeAPT" src="/presentation/public/media/logos/beapt.svg" width="100px"></a>
<h1 style="font-weight: 300; margin-top: 5px; margin-bottom: 0 !important;">Projeto <strong>BeAPT</strong></h1>
<h2 style="text-transform: uppercase; font-weight: 300; margin-top: 0;">Relatório</h2>
</div>

<h3>Requisitos</h3>

Antes de realizar o build do projeto é necessário instalar os seguintes *packages* no **Python**:

```bash
pip install Pygments
pip install jsx-lexer
```


<h3>Delete <code>__latexindent_temp</code> files</h3>

On terminal (works for Linux and macOS) run the command:

```bash
find . -name "__latexindent_temp.*" -delete
```
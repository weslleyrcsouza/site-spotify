# Site Spotify

Projeto estatico inspirado no Spotify, feito apenas com HTML, CSS e imagens. Ele nao precisa de servidor obrigatorio, npm, backend ou framework.

## Como abrir direto

Clique duas vezes no arquivo `index.html`.

## Como abrir pelo VS Code

Abra a pasta no VS Code e use Live Server ou abra o `index.html` no navegador.

## Como abrir depois de baixar do GitHub

Baixe o ZIP, extraia a pasta e abra o `index.html`.

## Como publicar no GitHub Pages

1. Suba o projeto para um repositorio no GitHub.
2. No GitHub, abra `Settings`.
3. Entre em `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch principal, normalmente `main`, e a pasta `/root`.
6. Salve a configuracao e aguarde o GitHub gerar o link do site.

## Estrutura esperada

```text
site-spotify/
├── index.html
├── indispensavel.html
├── novo-balanco.html
├── fala-na-cara.html
├── css/
│   └── style.css
├── image/
│   ├── indispensavel.jpg
│   ├── novo-balanco.jpg
│   └── fala-na-cara.jpg
├── README.md
└── .nojekyll
```

Todos os caminhos do projeto sao relativos. Isso permite abrir o site direto pelo arquivo, pelo VS Code, pelo Live Server, depois de baixar em outra maquina ou pelo GitHub Pages.

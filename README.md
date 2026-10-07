# Pesquisa de Produtos

Projeto de pesquisa e exibição de produtos desenvolvido com HTML, CSS e
JavaScript. Os produtos são carregados de `data/produtos.json` e exibidos
dinamicamente em cartões.

## Acesso online

O site está publicado no GitHub Pages e pode ser acessado em:

<https://henriquebfernandes.github.io/atividade-pesquisa-site/>

## Funcionalidades

- Pesquisa em tempo real por nome, categoria ou modelo do produto, conforme o usuário digita.
- Busca sem diferenciar maiúsculas de minúsculas, acentos ou espaços extras no início, no fim e entre palavras.
- Exibição de imagem, nome, preço, categoria e modelo em cada cartão.
- Mensagem quando nenhum produto corresponde à pesquisa.
- Botão para limpar a pesquisa.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- JSON para armazenar os dados dos produtos

## Estrutura do projeto

```text
atividade-pesquisa-site/
├── data/
│   └── produtos.json       # Dados dos produtos e caminhos das imagens
├── src/
│   ├── assets/
│   │   └── images/         # Imagens dos produtos
│   ├── css/
│   │   └── style.css       # Estilos da página
│   └── js/
│       └── script.js       # Carregamento dos dados e pesquisa
├── index.html              # Página principal
└── README.md
```

## Como executar localmente

O site carrega os produtos com `fetch("data/produtos.json")`. Por isso,
abra-o por um servidor HTTP, e não diretamente pelo endereço `file://`.

### Visual Studio Code com Live Server

1. Clone ou baixe o projeto e abra a pasta no Visual Studio Code.
2. Instale a extensão **Live Server**, caso ainda não esteja instalada.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Inicie o servidor na pasta raiz do projeto para que o caminho
`data/produtos.json` seja encontrado.

## Dados e imagens

Os dados ficam em `data/produtos.json`. O campo `imagem` de cada produto
indica o caminho da imagem correspondente dentro do projeto. Ao adicionar
produtos ou imagens, mantenha esses caminhos e nomes de arquivo corretos,
incluindo maiúsculas, minúsculas e extensão.

## Repositório

<https://github.com/henriquebfernandes/atividade-pesquisa-site>

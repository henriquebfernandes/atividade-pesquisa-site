// ELEMENTOS DO DOM
const grid_cartoes =  document.querySelector(".grid-cartoes");
const barra_de_pesquisa = document.querySelector("#barra-de-pesquisa");
const botao_limpar_pesquisa = document.querySelector("#botao-limpar-pesquisa");

// FUNÇÕES AUXILIARES
function formatarTexto(texto) {
     // Remove acentos e transforma o texto em minúsculo
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function filtrarProdutos(produtos, pesquisa) {
    // Filtra os produtos com base na pesquisa, ignorando acentos e maiúsculas/minúsculas
    pesquisa = formatarTexto(pesquisa);
    return produtos.filter((produto) => {
        return [produto.nome, produto.categoria, produto.modelo].some(valor =>
            formatarTexto(valor).includes(pesquisa)
        );
    })
}

function criarCartao(produto) {
     // Cria um cartão de produto e adiciona à grid
    const cartao = document.createElement("div");
    cartao.setAttribute("class", "cartao-produto");
    
    const precoFormatado = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    cartao.innerHTML = `
        <img class="imagem-produto" src="${produto.imagem}">
        <h3>${produto.nome}</h3>
        <p>Preço: ${precoFormatado}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Modelo: ${produto.modelo}</p>
    `;
    grid_cartoes.appendChild(cartao);
}

function exibirProdutos(produtos) {
    // Exibe os produtos na grid, criando cartões para cada um
    grid_cartoes.innerHTML = ""; // Limpa os cartões existentes
    if (produtos.length > 0) {
        produtos.forEach((produto) => {
            criarCartao(produto);
        });
    } else { // Se não houver produtos, exibe uma mensagem
        grid_cartoes.innerHTML = "<p class='mensagem-sem-resultados'>Nenhum produto foi encontrado :-(</p>";
    }
}

async function carregarProdutos() {
    // Carrega os produtos do arquivo JSON e retorna como um array de objetos
    try {
        return await (await fetch("data/produtos.json")).json();
    } catch (error) { // Se houver um erro ao carregar os produtos, exibe uma mensagem de alerta e fecha o site
        window.alert("Erro ao carregar os produtos: \n" + error.message + "\nSe não estiver usando um servidor local, por favor, use um. O fetch não funciona com arquivos locais.");
        window.close(); // Fecha a janela do navegador
    }
}

// FUNÇÃO PRINCIPAL
async function main(){
    const produtos = await carregarProdutos();
    if (!produtos) return; // Se não houver produtos, encerra a função
    exibirProdutos(produtos); // Exibe todos os produtos inicialmente

    barra_de_pesquisa.addEventListener("input", (event) => { // Filtra os produtos com base na pesquisa e exibe os resultados
        event.preventDefault();
        const pesquisa = barra_de_pesquisa.value;
        const produtosFiltrados = filtrarProdutos(produtos, pesquisa);
        exibirProdutos(produtosFiltrados);
    });

    botao_limpar_pesquisa.addEventListener("click", (event) => { // Limpa a barra de pesquisa e exibe todos os produtos novamente
        event.preventDefault();
        barra_de_pesquisa.value = "";
        exibirProdutos(produtos);
    })
}

main(); //iniciar a aplicação
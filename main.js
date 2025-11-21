
/*
    Algoritmo - O que vamos fazer?
    1) Colocar os produtos na tela:
        [x] Saber quem são os produtos
        [x] Onde colocar os produtos
        [x] Colocar os produtos na tela
        [x] Estilizar os produtos
    2) Filtrar por categoria
        [x] Quem são os botões para selecionar a categoria 
        [x] Quando um dos botões ali foram clicados 
        [x] Qual botão foi clicado 
        [x] Filtrar os produtos daquela categoria
        [x] Mostrar na tela, somente os produtos filtrados 
        3) Filtrar por nome   
        [x] Quando digitou algo no input 
        [x] O que foi digitado
        [x] Filtrar os produtos de acordo com o que foi digitado 
        [x] Deixar só os produtos filtrados na tela 
    html -> document
    css -> style 
    js -> script
    querySelector -> selecionar algo
    */

let produtos = [
  {
    id: 1,
    nome: "Empilhadeira Elétrica 2,5t",
    categoria: "Equipamentos-e-tecnologia",
    preco: 7999,
    precoOriginal: 8999,
    desconto: 11,
    imagem:
      "https://armac.com.br/wordpress/wp-content/uploads/2022/06/armac-empilhadeira-eletrica-toyota-btreflex-blog.jpg",
    descricao: "Equipamento para movimentação e armazenamento de cargas em armazéns e indústrias.",
  },
  {
    id: 2,
    nome: "Servidor Corporativo Dell PowerEdge",
    categoria: "Equipamentos-e-tecnologia",
    preco: 8999,
    precoOriginal: 10999,
    desconto: 18,
    imagem:
      "https://gtsperu.com/wp-content/uploads/2023/11/servidores-dell.jpg",
    descricao: "Servidor robusto para empresas de médio e grande porte, com alta capacidade de processamento.",
  },
  {
    id: 3,
    nome: "Desenvolvimento de ERP Personalizado",
    categoria: "Serviços",
    preco: 1899,
    precoOriginal: 2299,
    desconto: 17,
    imagem:
      "https://blog.pyxis.com.br/wp-content/uploads/2024/11/ERP-personalizado-ou-pronto.jpg",
    descricao: "Sistema sob demanda para controle financeiro, estoque, vendas e gestão integrada da empresa.",
  },
  {
    id: 4,
    nome: "Sistema de Câmeras CFTV IP",
    categoria: "Equipamentos-e-tecnologia",
    preco: 5499,
    precoOriginal: 6299,
    desconto: 13,
    imagem:
      "https://a3aengenharia.com.br/wp-content/uploads/2024/08/cftv-ip.jpeg",
    descricao: "Solução de monitoramento digital para segurança patrimonial com gravação em nuvem.",
  },
  {
    id: 5,
    nome: "Big Bag 1.000kg",
    categoria: "Materiais-e-insumos",
    preco: 3299,
    precoOriginal: 3799,
    desconto: 13,
    imagem:
      "https://www.granepro.com.br/site/wp-content/uploads/2021/01/o-nas.jpg",
    descricao: "Saco industrial reforçado para transporte e armazenamento de grãos e outros insumos a granel.",
  },
  {
    id: 6,
    nome: "Máquina de Solda MIG/MAG 300A",
    categoria: "Equipamentos-e-tecnologia",
    preco: 499,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://product-hub-prd.madeiramadeira.com.br/2674375/images/49a97e47-148d-4da6-a20f-84bb48476bca64165940maquinaparasoldamigmagmm403trifasicavonder78939465277168600x600.jpg",
    descricao: "Equipamento industrial para soldagem de estruturas metálicas em larga escala.",
  },
  {
    id: 7,
    nome: "Bobina Plástica Stretch",
    categoria: "Materiais-e-insumos",
    preco: 2499,
    precoOriginal: 2999,
    desconto: 17,
    imagem:
      "https://beagaembalagem.com.br/wp-content/uploads/2022/01/filme-strech-3-kg.jpg",
    descricao: "Filme stretch para paletização de cargas, garantindo proteção durante transporte e armazenamento.",
  },
  {
    id: 8,
    nome: "Álcool Isopropílico Industrial 5L",
    categoria: "Materiais-e-insumos",
    preco: 7999,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://kgepel.com.br/wp-content/uploads/2019/02/%C3%81LCOOL-ISOPROPILICO-RHODIA.jpg",
    descricao: "Solvente para higienização de equipamentos eletrônicos e superfícies em ambientes industriais.",
  },
];


let containerProdutos = document.querySelector(".produtos-div");
let inputPesquisa = document.querySelector(".input-pesquisa")
let textoInput = "";
let todosBotoes = document.querySelectorAll(".botao-categorias");
let categoria = "todos"



function mostrarProdutos() {

  let htmlProdutos = ""; 


  //Pegar item por item do meu array
  //Assim posso decidir o que fazer com cada um
  //prd -> produtos

  produtos.forEach((prd) => {


    //includes -> verifica se dois textos "batem"
    //toLocaleLowerCase() -> compara tudo em minúsculo 
    if(prd.nome.toLocaleLowerCase().includes(textoInput)){


      // === -> Comparando dois valores
      if(prd.categoria === categoria || categoria === "todos") {
  
    htmlProdutos = htmlProdutos + `
      <div class="cartao-produto">
        <img src="${prd.imagem}" alt="" class="imagem-produto">
        <div class="info-produto">
            <h3 class="nome-produto">${prd.nome}</h3>
            <p class="descricao-produto">${prd.descricao}</p>
            <p class="preco-produto">R$${prd.preco},00</p>
            <button class="botao-produto">Ver Detalhes</button>
        </div>
      </div>
            `
    }}
  });
  
    containerProdutos.innerHTML = htmlProdutos
    
}
mostrarProdutos();

function pesquisar() {
  textoInput = inputPesquisa.value
  mostrarProdutos();
}

//CURIOSO, FOFOQUEIRO = ADDEVENTLISTENER (OUVINTE DE EVENTOS)

inputPesquisa.addEventListener("input", pesquisar);

todosBotoes.forEach(botao => {

    botao.addEventListener("click", function(){

      //getAttribute -> permite que eu pegue o valor do data-category
      categoria = botao.getAttribute("data-categoria")

      //RETIRAR DE TODOS A CLASSE "ATIVO"

      todosBotoes.forEach(b => b.classList.remove("ativo"))

      //COLOCAR SOMENTE EM QUEM EU CLICO NO BOTAO 
      botao.classList.add("ativo")


      mostrarProdutos()
})

})
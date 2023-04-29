// array com os produtos disponiveis na loja
    const produtosDisp = ["Camiseta", "Calça", "Sapato", "Jaqueta", "Boné"];

// array com os preços corrspodnetes de cada produto
    const precos = [50.00, 80.00, 120.00, 150.00, 25.00];

// array com as quantidades de cada produto dentro do carrinho
    let quantidadesCarrinho = [0, 0, 0, 0, 0,];

// array para o carrinho de compras
    let carrinho = [];

// varivavel para pegar elementos especificos do html (id)
const addProduto = document.getElementById("formProdutos");

// function para adicionar o item ao carrinho
formProdutos.addEventListener("subimit", function(){
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;


})
// obetendo as ids do html
    // getElementById - obter elementos especificos presentes no html
    const formCadastro = document.getElementById("formCadastro");
    const tabela = document.getElementById("tabela");
    const btnEstoque = document.getElementById("btnEstoque");

// criar array vazio
    let estoque = [];

// configurando o botão de limpar adicionando um evento que puxa a id do botão limpar
    limpar.addEventListener("click", function(){
        formCadastro.reset();
    })

// previne o comportamento padrão do formulário HTML ao ser submetido
    formCadastro.addEventListener("submit", function(event){
        event.preventDefault();

    // variaveis "imutaveis"
        const nome = document.getElementById("nome").value; // value - é usado para obter o valor da ID
        const valor = document.getElementById("valor").value;
        const quant = document.getElementById("quant").value;
        const dataEntrada = document.getElementById("dataEntrada").value;

        const item = [quant, nome, valor, dataEntrada];

    // adicionando item
        estoque.push(item);
        alert(`Produto ${nome} foi adicionado ao estoque`);

    // limpando formulario
        formCadastro.reset();
    })

// adicionando evento para botão estoque
btnEstoque.addEventListener("click", function(){
// vendo se tem itens dentro do estoque, (length retorna o numero de elementos dentro da array)
    if (estoque.length === 0) { // se o numero de elementos dentro do estoque for igualmente igual a zero...
        alert ("Não há nenhum item dentro do estoque");
        return;
    }

// criando uma tr (linha) dentro do html com a função creatElement
    tabela.querySelector("button").addEventListener("click", function(){
        
    })
})
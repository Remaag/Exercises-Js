// obetendo as ids do html
    // getElementById - obter elementos especificos presentes no html
    const formCadastro = document.getElementById("");
    const tabela = document.getElementById("");
    const btnEstoque = document.getElementById("");

// criar array vazio
    let estoque = [];

// previne o comportamento padrão do formulário HTML ao ser submetido
    formCadastro.addEventListener("submit", function (event){
        event.preventDefault();

        // value - é usado para obter o valor da ID
        const nome = document.getElementById("").value;
        const valor = document.getElementById("").value;
        const quant = document.getElementById("").value;
        const dataEntrada = document.getElementById("").value;

        const item = [nome, valor, quant, dataEntrada];

    // adicionando item
        estoque.push(item);
        alert(`Produto ${nome} foi adicionado ao estoque`);

    // limpando formulario
        formCadastro.reset();
    })
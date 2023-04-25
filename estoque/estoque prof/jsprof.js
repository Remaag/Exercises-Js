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

    // adicionando evento para botão estoque
    btnEstoque.addEventListener("click", function(){
        if (estoque.length === 0) { // lenght - expressão que retorna o número de elementos do array
            alert ("Não há itens no estoque");
            return;
        }
    
    // criou um elemento novo dentro do html da função creatElement
        tabela.forEach(function(item){
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.quant}</td>
                <td>${item.nome}</td>
                <td>${item.valor}</td>
                <td>${item.dataEntrada}</td>`;
        });

    // encontra o botão remover item
        tr.querySelector("button").addEventListener("click", function(){
        // encontra o item (objeto) dentro da tabela
            const index = estoque.indexOf(item);
        
        // remove o item (objeto) da tabela
            estoque.splice(index, 1);

        // remove a linha em branco do objeto removido
            tabela.removeChild(tr);
        });

    // adiciona uma linha na tabela
        tabela.querySelector("tbody").appendChild(tr);
    
    // mostra a tabela
        tabela.style.display = "table";
    });
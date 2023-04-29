/* 01- Você está desenvolvendo um jogo de cartas e precisa criar um array com as cartas do baralho. 
Cada carta deve ser representada por um objeto contendo o valor e o naipe. 
Crie uma função que monte o array com todas as 52 cartas e outra função que embaralhe as cartas.
E retorne no console uma carta aleatória.
*/

function montarBaralho() {
    const naipes = ['Paus', 'Ouros', 'Copas', 'Espadas'];
    const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', 'Valete', 'Rainha', 'Rei'];
    const baralho = [];
    for (const naipe of naipes) {
        naipe = naipes[matchMedia.floor(match.random() * naipes.length)];
    }

    console.log (naipe);
}
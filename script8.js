class Produto {
    constructor(tipo, folhas, preco, quantidade) {
        this.tipo = tipo;
        this.folhas = folhas;
        this.preco = parseFloat(preco);
        this.quantidade = parseInt(quantidade);
    }
    somaPrecos() {
        this.preco = this.preco * this.quantidade;
        console.log("\nPapéis tipo " + this.tipo + ", \nQuantidade de Resmas: " + this.quantidade + ", \nSubtotal: R$ " + this.preco + "\n");
    }
}

function valorTotal (valor1, valor2, valor3) {
    var soma = valor1 + valor2 + valor3;
    console.log("\nValor total: R$ " + soma);
    return soma;
}

const resmaTipo1 = new Produto("Branco", "500", "10", "2");
const resmaTipo2 = new Produto("Reciclável", "500", "8", "3");
const resmaTipo3 = new Produto("de Carta", "100", "15", "1");

console.log("Resumo da Compra:");
resmaTipo1.somaPrecos();
resmaTipo2.somaPrecos();
resmaTipo3.somaPrecos();
valorTotal(20, 24, 15);
console.log("\n A Dunder Mifflin Brasil agradece a sua compra!");
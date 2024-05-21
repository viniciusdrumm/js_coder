// Função para verificar se um número é múltiplo de outro
function ehMultiplo(num, multiploDe) {
    return num % multiploDe === 0;
}

// Função para obter o input do usuário e verificar se é múltiplo
function verificarMultiplo() {
    let num = parseInt(prompt("Insira um número: "));
    let multiploDe = parseInt(prompt("Insira o segundo número: "));

    if (ehMultiplo(num, multiploDe)) {
        alert(`${num} é múltiplo de ${multiploDe}`);
    } else {
        alert(`${num} não é múltiplo de ${multiploDe}`);
    }
}

verificarMultiplo();
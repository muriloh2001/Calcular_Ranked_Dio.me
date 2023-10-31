function calcularRanked(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        vitorias = 5;
        derrotas = 3;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Ferro';
    }

    if (vitorias >= 11 && vitorias <= 20) {
        vitorias = 15;
        derrotas = 5;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Bronze';
    }

    if (vitorias >= 21 && vitorias <= 50) {
        vitorias = 30;
        derrotas = 10;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Prata';
    }

    if (vitorias >= 51 && vitorias <= 80) {
        vitorias = 60;
        derrotas = 20;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Ouro';
    }

    if (vitorias >= 81 && vitorias <= 90) {
        vitorias = 85;
        derrotas = 30;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Diamante';
    }

    if (vitorias >= 91 && vitorias <= 100) {
        vitorias = 95;
        derrotas = 40;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Lendário';
    }

    if (vitorias >= 101) {
        vitorias = 110;
        derrotas = 50;
        saldoVitorias = vitorias - derrotas;
        nivel = 'Imortal';
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso da função em cada 'if':
let vitorias, derrotas;
let resultado;

vitorias = 5;
derrotas = 3;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 15;
derrotas = 5;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 30;
derrotas = 10;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 60;
derrotas = 20;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 85;
derrotas = 30;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 95;
derrotas = 40;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

vitorias = 110;
derrotas = 50;
resultado = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

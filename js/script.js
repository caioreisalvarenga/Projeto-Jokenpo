document.getElementById('jogador-escolha-1').onclick = function(){
    alert("Clicou no escolha 2");
};

var jogadorNome;
var jogadorPontos = 0;
var computadorPontos = 0;
var jogadorEscolha = 0;
var computadorEscolha = 0;

//Exibe mensagem no console
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//Define o nome do jogador na tela
function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

function sortear(min, max) {
    //Sorteio entre dois números
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Escolhe a jogada do usuário
//1 - Pedra
//2 - Papel
//3 - Tesoura

//Calcula e retorna quem ganhou
function calcularEscolha(jogador, computador) {

    //0 = empate
    //1 = Jogador
    //2 = Computador

    //Testa pedra
    if(jogador == 1 && computador == 1) {
        return 0;
    }

    else if(jogador == 1 && computador == 2) {
        return 2;
    }

    else if(jogador == 1 && computador == 3) {
        return 1;
    }

    //Testa papel
    if(jogador == 2 && computador == 1) {
        return 1;
    }

    else if(jogador == 2 && computador == 2) {
        return 0;
    }

    else if(jogador == 2 && computador == 3) {
        return 2;
    }

    //Testa tesoura
    if(jogador == 3 && computador == 1) {
        return 2;
    }

    else if(jogador == 3 && computador == 2) {
        return 1;
    }

    else if(jogador == 3 && computador == 3) {
        return 0;
    }

}

//Soma pontos para o jogador
function somarPontoJogador() {
    jogadorPontos ++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

//Soma pontos para o computador
function somarPontoComputador() {
    computadorPontos ++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

function jogar(escolha) {

    jogadorEscolha = escolha;
    //Sortear a jogada do computador
    computadorEscolha = sortear(1, 3);
    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    //Calcular quem ganhou
    if(ganhador == 0) {
        mensagem('Empate');
    }

    else if(ganhador == 1) {
        mensagem('Ponto para' + jogadorNome);
        somarPontoJogador();
    }

    else if(ganhador == 2) {
        mensagem('Ponto para computador');
        somarPontoComputador();
    }

    //Somar pontos

    //exibir para o usuaio
    
}

document.getElementById('jogador-escolha-1').onclick = function(){jogar(1)};
document.getElementById('jogador-escolha-2').onclick = function(){jogar(2)};
document.getElementById('jogador-escolha-3').onclick = function(){jogar(3)};

jogadorNome = prompt("Qual é o seu nome ? ");

mensagem(' Olá ' + jogadorNome + ', Escolha uma opção acima...');

definirNomeJogador(jogadorNome);
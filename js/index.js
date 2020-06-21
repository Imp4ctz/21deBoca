var pontosEl = document.getElementById("pontos");
var numeroInicial = 0;
var help = 0;
//var nJogador;
//var aux;
document.getElementById("a").style.display = "none";
document.getElementById("b").style.display = "none";
document.getElementById("c").style.display = "none";
document.getElementById("d").style.display = "none";
document.getElementById("e").style.display = "none";
document.getElementById("f").style.display = "none";

function mostrarPVM(){
    //document.getElementById("initPVM").style.display = "block";
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "none";
    document.getElementById("e").style.display = "none";
    document.getElementById("f").style.display = "none";
}
function mostrarPVP(){
    document.getElementById("d").style.display = "block";
    document.getElementById("e").style.display = "block";
    document.getElementById("f").style.display = "block";
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
}

function maisNumero(numero){
    //aux = numeroInicial + numero;
    //nJogador.push(aux);
    document.getElementById("numeroJogador").innerHTML = numeroInicial + numero;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! você ganhou essa!");
        numeroInicial = 0;
        document.getElementById("pontos").innerHTML = numeroInicial;
    }else if(numeroInicial <= 20){
        maquina();
    }
    if((numeroInicial > 21) &&(help == 0)){
        alert("Como você conseguiu perder pra máquina? Tu é muito burro!");
        numeroInicial = 0;
        document.getElementById("pontos").innerHTML = numeroInicial;
    }
}

//IA
function maquina(){
    numeroInicial = (numeroInicial + Math.trunc(Math.random()*(4-1)+1));
    document.getElementById("numeroMaquina").innerHTML = numeroInicial;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial == 21){
        alert("A máquina ganhou");
        numeroInicial = 0;
        document.getElementById("pontos").innerHTML = numeroInicial;
    }else if(numeroInicial > 21){
        alert("Você ganhou pq a máquina é mais burra do que você!");
        help == 1;
        numeroInicial = 0;
        document.getElementById("pontos").innerHTML = numeroInicial;
    }
}

function maisNumero1(numero){
    //aux = numeroInicial + numero;
    //nJogador.push(aux);
    document.getElementById("numeroJogador1").innerHTML = numeroInicial + numero;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos1").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! O jogador 1 ganhou essa!");
        numeroInicial = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
    }else if(numeroInicial > 21){
        alert("Jogador 1 ultrapassou os 21 pontos! O jogador 2 ganhou essa!");
        numeroInicial = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
    }
}

function maisNumero2(numero){
    //aux = numeroInicial + numero;
    //nJogador.push(aux);
    document.getElementById("numeroJogador2").innerHTML = numeroInicial + numero;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos1").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! O jogador 2 ganhou essa!");
        numeroInicial = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
    }else if(numeroInicial > 21){
        alert("Jogador 2 ultrapassou os 21 pontos! O jogador 1 ganhou essa!");
        numeroInicial = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
    }
}
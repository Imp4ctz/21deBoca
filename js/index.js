//Deixar guardado para futura implementação
// var vetObj = [];
// obj1 = {nome: "Arthur", v: 1}
// obj2 = {nome: "Tainan", v: 1}
// vetObj.push(obj1)
// vetObj.push(obj2)
// var nome3 = "Arthur";

// for (i=0; i<vetObj.length;i++){
//     if(vetObj[i].nome === nome3){
//         var aux = Number(vetObj[i].v);
//         console.log(aux);
//         vetObj[i].v = aux + 1;
//         console.log(aux+1);
//     }
// }

var pontosEl = document.getElementById("pontos");
var numeroInicial = 0;
var help = 0;
var nJogador = [];
var nMaquina = [];
var nJogador1 = [];
var nJogador2 = [];
var aux;
var aux2;
var aux3;
var jogador1V = 0;
var jogador1D = 0;
var jogador2V = 0;
var jogador2D = 0;
var maquinaV = 0;
var maquinaD = 0;

document.getElementById("a").style.display = "none";
document.getElementById("b").style.display = "none";
document.getElementById("c").style.display = "none";
document.getElementById("d").style.display = "none";
document.getElementById("e").style.display = "none";
document.getElementById("f").style.display = "none";

function mostrarPVM(){
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
    aux = numeroInicial + numero;
    nJogador.push(aux);
    document.getElementById("numeroJogador").innerHTML = nJogador;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial==21){        
        numeroInicial = 0;
        aux = 0;
        document.getElementById("pontos").innerHTML = numeroInicial;
        jogador1V++;
        document.getElementById("Jogador1Vitoria").innerHTML = jogador1V;
        maquinaD++;
        document.getElementById("MaquinaDerrota").innerHTML = maquinaD;
        alert("Parabéns! você ganhou essa!");
        nJogador.length = 0;
        nMaquina.length = 0;
    }else if(numeroInicial <= 20){
        maquina();
    }
    if((numeroInicial > 21) &&(help == 0)){        
        numeroInicial = 0;
        aux = 0;
        maquinaV++;
        document.getElementById("MaquinaVitoria").innerHTML = maquinaV;
        jogador1D++;
        document.getElementById("Jogado1Derrota").innerHTML = jogador1D;
        document.getElementById("pontos").innerHTML = numeroInicial;
        alert("Como você conseguiu perder pra máquina? Tu é muito burro!");
        nJogador.length = 0;
        nMaquina.length = 0;
    }
}

//IA
function maquina(){
    numeroInicial = (numeroInicial + Math.trunc(Math.random()*(4-1)+1));
    aux3 = numeroInicial;
    nMaquina.push(aux3);
    document.getElementById("numeroMaquina").innerHTML = nMaquina;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial == 21){        
        numeroInicial = 0;
        aux = 0;
        jogador1D++;
        document.getElementById("Jogador1Derrota").innerHTML = jogador1D;
        maquinaV++;
        document.getElementById("MaquinaVitoria").innerHTML = maquinaV;
        document.getElementById("pontos").innerHTML = numeroInicial;
        alert("A máquina ganhou");
        nJogador.length = 0;
        nMaquina.length = 0;
    }else if(numeroInicial > 21){        
        help == 1;
        numeroInicial = 0;
        aux = 0;
        maquinaD++;
        document.getElementById("MaquinaDerrota").innerHTML = maquinaD;
        jogador1V++;
        document.getElementById("Jogador1Vitoria").innerHTML = jogador1V
        document.getElementById("pontos").innerHTML = numeroInicial;
        alert("Você ganhou pq a máquina é mais burra do que você!");
        nJogador.length = 0;
        nMaquina.length = 0;
    }
}

function maisNumero1(numero){
    aux = numeroInicial + numero;
    nJogador.push(aux);
    document.getElementById("numeroJogador1").innerHTML = nJogador;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos1").innerHTML = numeroInicial;
    if(numeroInicial==21){
        numeroInicial = 0;
        jogador1V++;
        document.getElementById("Jogador1Vitoria").innerHTML = jogador1V;
        jogador2D++;
        document.getElementById("Jogador2Derrota").innerHTML = jogador2D;
        aux = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
        alert("Parabéns! O jogador 1 ganhou essa!");
        nJogador1.length = 0;
        nJogador2.length = 0;
    }else if(numeroInicial > 21){
        numeroInicial = 0;
        jogador2V++;
        document.getElementById("Jogador2Vitoria").innerHTML = jogador2V;
        jogador1D++;
        document.getElementById("Jogador1Derrota").innerHTML = jogador1D;
        aux = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
        nJogador1.length = 0;
        nJogador2.length = 0;
        alert("Jogador 1 ultrapassou os 21 pontos! O jogador 2 ganhou essa!");
    }
}

function maisNumero2(numero){
    aux2 = numeroInicial + numero;
    nJogador2.push(aux2);
    document.getElementById("numeroJogador2").innerHTML = nJogador2;
    numeroInicial = numeroInicial + numero;
    document.getElementById("pontos1").innerHTML = numeroInicial;
    if(numeroInicial==21){
        numeroInicial = 0;
        aux2 = 0;
        jogador1D++;
        document.getElementById("Jogador1Derrota").innerHTML = jogador1D;
        jogador2V++;
        document.getElementById("Jogador2Vitoria").innerHTML = jogador2V;
        document.getElementById("pontos1").innerHTML = numeroInicial;
        alert("Parabéns! O jogador 2 ganhou essa!");
        nJogador1.length = 0;
        nJogador2.length = 0;
    }else if(numeroInicial > 21){
        numeroInicial = 0;
        jogador1V++;
        document.getElementById("Jogador1Vitoria").innerHTML = jogador1V;
        jogador2D++;
        document.getElementById("Jogador2Derrota").innerHTML = jogador2D;
        aux2 = 0;
        document.getElementById("pontos1").innerHTML = numeroInicial;
        alert("Jogador 2 ultrapassou os 21 pontos! O jogador 1 ganhou essa!");
        nJogador1.length = 0;
        nJogador2.length = 0;
    }
}
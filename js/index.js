var pontosEl = document.getElementById("pontos");
var numeroInicial = 0;
var help = 0;

function maisUm(){
    document.getElementById("numeroAnterior").innerHTML = numeroInicial;
    numeroInicial++;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! você ganhou essa!");
    }else if(numeroInicial <= 20){
        maquina();
    }
    if((numeroInicial > 21) &&(help == 0)){
        alert("Como você conseguiu perder pra máquina? Tu é muito burro!");
    }
}

function maquina(){    
    numeroInicial = (numeroInicial + Math.trunc(Math.random()*(4-1)+1));
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial == 21){
        alert("A máquina ganhou");
    }else if(numeroInicial > 21){
        alert("Você ganhou pq a máquina é mais burra do que você!");
        help == 1;
    }
}

function maisDois(){
    document.getElementById("numeroAnterior").innerHTML = numeroInicial;
    numeroInicial = numeroInicial + 2;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! você ganhou essa!");
    }else if(numeroInicial <= 20){
        maquina();
    }
    if((numeroInicial > 21) &&(help == 0)){
        alert("Como você conseguiu perder pra máquina? Tu é muito burro!");
    }
}

function maisTres(){
    document.getElementById("numeroAnterior").innerHTML = numeroInicial;
    numeroInicial = numeroInicial + 3;
    document.getElementById("pontos").innerHTML = numeroInicial;
    if(numeroInicial==21){
        alert("Parabéns! você ganhou essa!");
    }else if(numeroInicial <= 20){
        maquina();
    }
    if((numeroInicial > 21) &&(help == 0)){
        alert("Como você conseguiu perder pra máquina? Tu é muito burro!");
    }
}


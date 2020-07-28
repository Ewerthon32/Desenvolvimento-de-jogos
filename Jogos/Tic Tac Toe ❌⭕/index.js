//-------------------[ Mecanicas de jogo ]-----------------------
var modo_um_jogador;
var posicao_selecionada = 1;
var local;
var number;

var list = [
    a1, a2, a3,
    a4, a5, a6,
    a7, a8, a9
];

console.log("a variavel esta definida, e eis o seu valor: "+list.a1);

function Preencher_Tela() {
    
    document.getElementById("tela").innerHTML = 
    '<button id="1" class="jogo" onclick="Renderizar_Cor(1)"></button>'+
    '<button id="2" class="jogo" onclick="Renderizar_Cor(2)"></button>'+
    '<button id="3" class="jogo" onclick="Renderizar_Cor(3)"></button>'+
    
    '<button id="4" class="jogo" onclick="Renderizar_Cor(4)"></button>'+
    '<button id="5" class="jogo" onclick="Renderizar_Cor(5)"></button>'+
    '<button id="6" class="jogo" onclick="Renderizar_Cor(6)"></button>'+
    
    '<button id="7" class="jogo" onclick="Renderizar_Cor(7)"></button>'+
    '<button id="8" class="jogo" onclick="Renderizar_Cor(8)"></button>'+
    '<button id="9" class="jogo" onclick="Renderizar_Cor(9)"></button>';

}

function muda(valor) {
 
    // Muda as cores
    if(posicao_selecionada%2 === 0){
        cor =  "red";
    } else cor = "blue";
    posicao_selecionada++;
    
    // Aplica no grid
    document.getElementById(valor).style.backgroundColor = cor;
    
    // Condicinal de um jogador
    if(modo_um_jogador === true) {
        
        // Preenche esse local a cada 2 segundos
        setInterval(() => {
          Verificar(number);
        }, 2000);
    
    }

}

function Verificar(number) {
    
    // Gera um local aleatorio
    number = Math.ceil(Math.random()*9);
    
    // Adiciona a lista para nao gerar o mesmo valor
    for(var i=0;i<list.lenght;i++){
        number = list[i];
        if(number != list[i]){
            Renderizar_Cor(number);
        }
    }
    
}
//---------------------------------------------------------------

// Modo de um jogador
function Jogo_para_um_jogador() {
    
    alert("ainda em desenvolvimento...");
    
    Preencher_Tela();
    
    modo_um_jogador = true;
    
}

// Modo de dois jogadores
function Jogo_para_dois_jogadores() {
    
    Preencher_Tela();
    
}

// Mecanicas de jogo
function Renderizar_Cor(local) {
    switch(local){
        case 1:
        muda(1);
        break;
        case 2:
        muda(2);
        break;
        case 3:
        muda(3);
        break;
        
        case 4:
        muda(4);
        break;
        case 5:
        muda(5);
        break;
        case 6:
        muda(6);
        break;
        
        case 7:
        muda(7);
        break;
        case 8:
        muda(8);
        break;
        case 9:
        muda(9);
        break;
    }
}
//--------[Variaveis]----------

var num = 0

var melhoria = {
    buy: 0,
    preco: 0,
    pontos: 20,
    loop: 0,
    bug: 1
};
              
var autoClick = {
    buy: 0,
    preco: 31
}
       
var cabecalho =      
'<div>' +
'<i class="fa fa-chevron-circle-left" onclick="home()"></i>' +
'<i class="fa fa-trophy" onclick="abrirConquistas()"></i>' +
'</div>'
                
var rodape =
'<div class="menu">' +
'<button class="fa fa-paint-brush" onclick="abrirCustomizar()"></button>' +
'<button class="fa fa-pagelines" onclick="TelaLaranjeira()"></button>' +
'<button class="fa fa-shopping-cart" onclick="abrirBarraca()" style="margin-top: 10px"></button>' +
'</div>'
                
//------[Função clicker]-------

function clicker() {

        render()

        if (melhoria.buy == 1) {
            
        mtply()
        
        }
        
}

function render() {
    
    num++
    
    document.getElementById("render").innerHTML = " Laranjas: " + num

    if (num < 0) {
        
        document.getElementById("render").style.color = "red"
        
    }
    
    if (num > -1) {
        
        document.getElementById("render").style.color = "black"
        
    }

}

//------[Tela de inicio]-------

function home() {

    document.getElementById("screen").innerHTML =
    '<h1>Vendedor de laranja</h1>' +
    '<button class="fa fa-gamepad" onclick="TelaLaranjeira()"></button>'

}

//----[Tela de conquistas]-----

function abrirConquistas() {
    
    document.getElementById("screen").innerHTML = 
    '<i class="fa fa-chevron-circle-left" onclick="TelaLaranjeira()"></i>' +
    '<p id="trofeu"> [ Conquistas - em breve ] </p>' +
    '<img class="conquistas" src="https://docs.google.com/uc?id=1-Pzc4m4j0Fm8fvjUN4sAn8JeeSvWWUt4" height = "60px" width = "60px">' +
    '<img class="conquistas" src="https://docs.google.com/uc?id=1ve0xHeU-KOyrMZ2IEtBLr-HaG2QdYE5p" height = "60px" width = "60px">'
    
}

//---[__Botões inferiores__]---

//--------[Customizar]---------

function abrirCustomizar() {
        
        document.getElementById("screen").innerHTML =
        cabecalho +
        '<br>' +
        '<div>' +
        '<button class="color buttons" onclick="comprar()">' +
        "Tema claro | 1000 moedas" +
        "</button>" +
        "<br>" +
        '<button id="inativo" class="color buttons">' +
        "Indisponivel" +
        //"Tema escuro | 2000 moedas" +
        "</button>" +
        "<br>" +
        '<button class="color buttons" onclick="padrao()">' +
        "Tema padrão" +
        "</button>" +
        "<br>" +
        rodape;          
        
        aplicarTema(1.1);
}

//----------[Temas]------------

var claro = 0

var a = document.getElementsByTagName("button");

function aplicarTema(cod) {
    
    if(claro === 1) {
    
        if(cod === 1) {
            
            configClaro()
            
        }
        
        if(cod === 1.1) {
            
            a[5].style.backgroundColor = "white"
            configClaro()
            
        }
        
        if(cod === 1.3) {
            
            a[0].style.backgroundColor = "white"
            a[1].style.backgroundColor = "white"
            a[2].style.backgroundColor = "white"
            
            a[0].style.color = "black"
            a[1].style.color = "black"
            a[2].style.color = "black"
            a[3].style.color = "black"
            a[4].style.color = "black"
            a[5].style.color = "black"                
            a[6].style.color = "black"
            
            var b = document.getElementsByTagName("body")
            
            b[0].style.backgroundColor = "whitesmoke"
            
        }
        
        function configClaro() {

            a[0].style.backgroundColor = "white"
            a[1].style.backgroundColor = "white"
            a[2].style.backgroundColor = "white"
            a[3].style.backgroundColor = "white"
            a[4].style.backgroundColor = "white"


            a[0].style.color = "black"
            a[1].style.color = "black"
            a[2].style.color = "black"
            a[3].style.color = "black"
            a[4].style.color = "black"
            a[5].style.color = "black"                
            a[6].style.color = "black"

            var b = document.getElementsByTagName("body")
            b[0].style.backgroundColor = "whitesmoke"
            
        }
    }
}

var comprado = 0;

function comprar() {
    
    if(comprado === 0) {
        
     num -= 1000
     comprado = 1
     
    }
    
    claro = 1
    
    aplicarTema(1.1)
    
}

function padrao() {
    
    claro = 0
    var b = document.getElementsByTagName("body"); 
    b[0].style.backgroundColor = "orange"
    abrirCustomizar()
    
}
   
//--------[Laranjeira]---------

function TelaLaranjeira() {
        
    autoClick.preco--
    melhoria.preco += 20;
    
    document.getElementById("screen").innerHTML =
    cabecalho +                  
    '<div class="content">' +
    '<img src="https://docs.google.com/uc?id=1A1KSurzpwkt13zNblShN_bSx31O1laib" id="arvore" onclick = "clicker()"/>' + '<br>' +
    '<i class="fa fa-leaf"></i> <span id="render"> Laranjas: ' + num + '</span>' +
    '<br />' +
    '</div >' +
    '<div class="buttons">' +
    '<button id="multiplicador" class="up" onclick="melhorar()"> Comprar melhoria | Custo: ' + melhoria.preco + ' moedas </button>' +
    '<br />' +
    '<button id="autoClick" class="up"> Comprar clique automatico | Custo: ' + autoClick.preco + ' moedas</button>' +
    '</div>' +                  
    rodape
        
    if(melhoria.pontos > 20) renderMelhoria();
    melhoria.preco -= 20;
    var autoC = document.getElementById("autoClick");
    autoC.addEventListener("click", setTime);
    autoClick.preco++;
    aplicarTema(1);
}

//----[Barraca de laranja]-----

function abrirBarraca() {
    
    document.getElementById("screen").innerHTML =
    cabecalho +
    '<div class="content">' +
    '<img src="https://docs.google.com/uc?id=1xQiH5MqkjEpqcDmTS6ZvfqpEpA5UzJyd" id = "barraca" height = "230px" width = "230px"/> ' +
    '<p>Em breve...</p>' +
    '<br />' +
    '<br />' +
    rodape
    
    aplicarTema(1.3)
        
}

//-[Melhoria ponto por clique]-

function mtply() {
    
    arrumaBug()
    
    for (i = 0; i < melhoria.loop; i++) {
        render()
    }
    
}

function arrumaBug() {
    
    if (melhoria.pontos > 9) {
        num += melhoria.bug;
    }
    
}

function melhorar() {
    
    // - - - - - -
    melhoria.buy = 1;       melhoria.preco += 20;
    melhoria.pontos += 5;   num -= melhoria.preco;
    melhoria.loop += 4;     num--;
    // - - - - - -

    if (melhoria.pontos > 14) {
        melhoria.bug++;
    }

    render();          melhoria.preco += 20;
    renderMelhoria();  melhoria.preco -= 20;

}

function renderMelhoria() {
    document.getElementById("multiplicador").innerHTML =
    "+" +
    melhoria.pontos +
    " moedas por clique" +
    " | " +
    "Melhorar: " +
    melhoria.preco +
    " moedas"
}

//---[Melhoria auto clique]----

function setTime() {
    
    autoClick.Buy = 1;
    num -= autoClick.preco;
    autoClick.preco += 50
    autoClique = setInterval(auto, 1000);
    document.getElementById("autoClick").innerHTML =
    "Clique automatico, aumentar velocidade | Custo: " + autoClick.preco
    
}

function auto() {
    
    render()
    
}
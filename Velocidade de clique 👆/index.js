var num = 0
var tempo = 10
var clicked = 0

function clicker() {
    if (clicked == 1) {
        render()
    }
}

function iniciarContador() {
    num = 0
    document.getElementById("render").innerHTML = "Pontos: " + num
    clicked = 1
    time = setInterval(timer, 1000)
}

function timer() {
    if (tempo == 1) { clearInterval(time); reset(); }
    tempo--
    document.getElementById("timer").innerHTML = "Timer: " + tempo
}

function render() {
    num++
    document.getElementById("render").innerHTML = "Pontos: " + num
}


function reset() {
    tempo = 12
    timer()
    document.getElementById("pts").innerHTML = num;
    if (num >= 100) document.getElementById("task").style.color = 'lightgreen';
    num--
    render()
    clicked = 0
}

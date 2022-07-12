// Constantes y variables
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIqual = document.getElementsByName("data-iqual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];

var result  = document.getElementById("result");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

// ForEach - Llamada a los eventos de botones, operadores, resultado y borrado

botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOpercion(boton.innerHTML);
    })
});

botonIqual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

// Funciones de botones

function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
}

function selectOpercion(op) {
    if(opeActual == "") return;
    if(opeAnterior !== "") {
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

// Funcion calcular 

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acepto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else {
        // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumSecreto ();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }
    
}

function condicionesIniciales(){
    asignarTextoElemento( 'h1', 'Juego del numero secreto');
    asignarTextoElemento( 'p', `Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intevalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabhilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


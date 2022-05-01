const numeros = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
const pintas = ['♦','♥','♠','♣'];
const color = ['red','black'];

let numAleatorio = Math.floor(Math.random()*numeros.length);
let pintasAleatorias = Math.floor(Math.random()*pintas.length);

window.onload = function (){
    document.querySelector(".arriba").innerHTML = pintas[pintasAleatorias];
    document.querySelector(".num").innerHTML = numeros[numAleatorio];
    document.querySelector(".abajo").innerHTML = pintas[pintasAleatorias];

    if (pintas[pintasAleatorias]=='♦' || pintas[pintasAleatorias]=='♥') {
        
        document.querySelector(".card").style.color = "red";
        
    } else {
    
        document.querySelector(".card").style.color = "black";
    }
}

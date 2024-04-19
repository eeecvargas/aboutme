
'use strict';

let nombre = prompt('Por favor, ingresa tu nombre:');

alert('Hola, un gusto. ' + nombre);

let score=0;

function preguntaUno (){
    let meGustaBaskell = prompt('¿Me gusta el basketball? (si/no)');
    console.log();
    if (meGustaBaskell.toLowerCase() === 'si') {
        alert('Es verdad, si me gusta.');
        // console.log("Sabe que me gusta el baskell");
        score++;
    } else if (meGustaBaskell.toLowerCase() === 'no') {
        alert('Que pena, en verdad si me gusta');
        console.log('No sabe que me gusta el baskell');
    }
}
function preguntaDos(){
    let meGustaLeer = prompt('¿Me gusta leer? (si/no)');
    if (meGustaLeer.toLowerCase() === 'si') {
        alert('Es verdad, si me gusta.');
        score++;
        console.log('Sabe que me gusta leer');
    } else if (meGustaLeer.toLowerCase() === 'no') {
        alert('Que pena, en verdad si me gusta leer');
        console.log('no sabe');
    } 
}
function preguntaTres(){
    let meGustaElCine = prompt('¿Me gusta el cine? (si/no)');
    if (meGustaElCine.toLowerCase() === 'si') {
        alert('Es verdad, si me gusta.');
        console.log('Sabe que me gusta el cine');
        score++;
    } else if (meGustaElCine.toLowerCase() === 'no'){
        alert('Que pena, en verdad si me gusta ver peliculas');
        console.log('No sabe que me gusta el cine');
    }
}
function preguntaCuatro(){
    let preguntaFinal = prompt('Si ya sabemos que me gusta y que no me gusta, dependiendo de eso, ¿Crees que soy alguien de ver futbol? (si/no)');
    if (preguntaFinal.toLowerCase() === 'si') {
        alert('Pues no amigo/a, no veo partidos de futbol');
        console.log('Me conoce bien');
    } else if (preguntaFinal.toLowerCase() === 'no'){
        alert('Perfecto, ya nos conocemos mejor');
        console.log('No me conoce muy bien');
        score++;
    }
}

preguntaUno(), preguntaDos(), preguntaTres(), preguntaCuatro ();

let añoDeNacimiento ;
let attempts = 0;

while (añoDeNacimiento != 2001 && attempts < 4) {
    añoDeNacimiento = prompt('¿En qué año nací entre (1999/2005)');
    if (añoDeNacimiento < 2001){
        alert ('No tan viejo amigo/a');
        console.log ('No tan viejo amigo/a');
    } else if (añoDeNacimiento > 2001) {
        alert ('No soy tan joven');
        console.log('No soy tan joven');
    } else {
        alert ('Es correcto')
        console.log('Es correcto')
        score++;
        break;
    }´
    attempts++;
    if(attempts=4){
        alert('te quedastes si nintetno la res')
    }
}
console.log ('Nací el 2001')
alert ('Nací el 2001')

function preguntaSiete() {
    let animalesFavoritos = ['perro','gato','hamster'];
    let animal;
    attempts = 0;
    while (attempts <6) {
        animal = prompt ('Adivina mi animal favorito');
        animal = animal.toLowerCase();
        for (let i = 0; i < animalesFavoritos.length; i++) {
            if (animal == animalesFavoritos[i]) {
                alert ('adivinaste!');
                console.log ('adivinaste!');
                attempts = 6;
                break;
            } else{
                console.log (animal, '¡Incorrecto!, intento' + attempts + ' de 6');
            }
        }
        attempts++;
    }
console.log ('mis animales favoritos son ' + animalesFavoritos);
}
preguntaSiete();

console.log('tu puntuación es de: ' + score);
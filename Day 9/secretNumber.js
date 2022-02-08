//Este es un juego sencillo que trata de adivinar un número aleatorio, el truco está en que no sabes cuál es ese número pero en cada ingresarás un número y sabrás si este es mayor o menor al número secreto. Así que toma en cuenta estas restricciones para intentar adivinar el número y no olvides contar el número de intentos para mostrarlo una vez aciertes.

let secretNumber = parseInt(Math.ceil(Math.random()*100));
console.log(secretNumber);
let count = 0;

let number = parseInt(prompt('Elige un número del 1 al 100:'));

// function compararNumero (number, secretNumber) {
//         if(number < secretNumber) {
//             count++;
//             console.log('Estás cerca, prueba un número más alto');
//         } else {
//             if(number > secretNumber) {
//                 count++;
//                 console.log('Estás cerca, prueba un número más bajo');
//             } else { if(number = secretNumber) {
//                 console.log('Felicidades, acertaste el número');
//                 }
//             }
//         }
//         return(count);
//     }

while (number != secretNumber) {
    if(number < secretNumber) {
        count++;
        number = parseInt(prompt('Elige un número más alto:'));
    } else if(number > secretNumber) {
        count++;
        number = parseInt(prompt('Elige un número más bajo:'));
    }

}
alert(`Felicidades, adivinaste el número (${secretNumber}) en (${count}) intentos`);
// Este es un juego de piedra, papel o tijera, haz tu elección de acuerdo a la siguiente nomenclatura:
//1.- Piedra
//2.- Papel
//3.- Tijera

let random = Math.ceil((Math.random()*300)/100);

function play(choice, random) {
    if(choice == 1 && random == 2) {
        console.log('La computadora ganó con Papel')
    } else {
        if(choice == 1 && random == 3) {
            console.log('FELICIDADES, ganaste con Piedra')
        } else {
            if(choice == 2 && random == 1) {
                console.log('FELICIDADES, ganaste con Papel')
            } else {
                if(choice == 2 && random == 3) {
                    console.log('La computadora ganó con Tijera')
                } else {
                    if(choice == 3 && random == 1) {
                        console.log('La computadora ganó con Piedra')
                    } else {
                        if(choice == 3 && random == 2) {
                            console.log('FELICIDADES, ganaste con Tijera')
                        } else {
                            console.log('Es un empate :/')
                        }
                    }
                }
            }
        }
    }
}

play(3,3)

// 18. Memory (parte 1)!
// Crea un código que te muestre 4 caracteres entre los siguientes de forma aleatoria: "#$%()/&

let characters = ['"','#','$','%','(',')','/','&'];
let choosenCharacters = [];

function printCharacters(reps) {
    for(i=1; i <= reps; i++) {
        let chooseCharacter = Math.floor(Math.random()*characters.length);
        let choosenCharacter = characters[chooseCharacter];
        choosenCharacters.push(choosenCharacter);
    }
    return(choosenCharacters);
}

console.log(printCharacters(4));

// #PlatziCodingChallenge - Memory (parte 2 y 3)
// 19. Memory (part2)!
// Lleva un registro del Orden en el que aparecieron los caracteres

let order = [];

function checkOrder() {
    for(j=1; j <= reps; choosenCharacters.length) {
        
    }
}

checkOrder();

// 20. Memory (part3)!
// Dale al usuario un menú para que elija en el orden correcto los caracteres
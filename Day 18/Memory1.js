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
    console.log(choosenCharacters);
}

printCharacters(4);
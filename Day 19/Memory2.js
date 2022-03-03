// 18. Memory (parte 1)!
// Crea un código que te muestre 4 caracteres entre los siguientes de forma aleatoria: "#$%()/&


// let characters = ['"','#','$','%','(',')','/','&'];
// let choosenCharacters = [];

// function printCharacters(reps) {
//     for(i=1; i <= reps; i++) {
//         let chooseCharacter = Math.floor(Math.random()*characters.length);
//         let choosenCharacter = characters[chooseCharacter];
//         choosenCharacters.push(choosenCharacter);
//     }
//     return(choosenCharacters);
// }

// console.log(printCharacters(4));


// #PlatziCodingChallenge - Memory (parte 2 y 3)
// 19. Memory (part2)!
// Lleva un registro del Orden en el que aparecieron los caracteres

class Memory {
    constructor() {
        this.chars = ['"', '#', '$', '%', '(', ')', '/', '&'];
        this.numberChars = 4;
        this.part1();
        this.part2();
        this.part3();
    }
    part1() {
        this.charList = [];
        for (let i = 0; i < this.numberChars; i++) {
            let randomChar;
            do {
                randomChar = this.chars[Math.floor(Math.random()*this.chars.length)]
            }
            while (this.charList.includes(randomChar));
            this.charList.push(randomChar)
        }
    }
    part2() {
        let message = (`Caracteres aleatorio: 1. ${this.charList[0]} 2. ${this.charList[1]} 3. ${this.charList[2]} 4. ${this.charList[3]} Acuérdate del orden`)
        alert(message)
    }
    part3() {
        let answer;
        do {
            let message = (`Lista de caracteres: 0. ${this.chars[0]} 1. ${this.chars[1]} 2.${this.chars[2]} 3. ${this.chars[3]} 4. ${this.chars[4]} 5. ${this.chars[5]} 6. ${this.chars[6]} 7. ${this.chars[7]} Introduce los números correspondientes al orden de los caracteres anteriores`)
            answer = prompt(message).split('')
            if(answer.length != this.numberChars) {
                alert('Debes ingresar 4 números. Intenta otra vez')
            }
        }
        while (answer.length != this.numberChars) 
        let answerChars = answer.map(number => this.chars[number])
        if(answerChars.toString() === this.charList.toString()) {
            alert('Felicidades, escribiste el orden correcto')
        }
        else {
            alert('Lo siento, ese no es el orden correcto')
        }
    }
}

window.memory = new Memory()

// 20. Memory (part3)!
// Dale al usuario un menú para que elija en el orden correcto los caracteres
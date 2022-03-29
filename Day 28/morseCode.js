// Código Morse
// El código morse te permite mandar señales mediante cualquier medio que pueda ser intermitente. Esto significa que puedes mandar señales a través de pulsos eléctricos (como en el telégrafo), audio, luz, etc. El reto del día de hoy es crear un decodificador de código morse. Por ejemplo:
// hola mundo -> .... --- .-.. .- -- ..- -. -.. ---

//Alfabeto Morse
const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'
    };

const alphabet = {
         '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', 
         '-.-': 'k', '.-..': 'l','--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', 
         '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z'
    }

    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/'];


const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
        return morseCode[el] ? morseCode[el] : el;
    }).join("");
}

console.log(convertToMorse('Hola Mundo'));

function morseToString(morse) {
    let string = [];
    morse = morse.split(' ')  
    morse.map( index => {
        abc.map (letter => {
            if (alphabet[letter] === index) {
                string.push(letter)
            }
        })
    })
    return(string);
}

console.log(morseToString('.... --- .-.. .- -- ..- -. -.. ---'))

const traducir = frase => {
    const fraseArr = frase.toLowerCase().split('').filter(p => p!== ' ');
    console.log(fraseArr)
    const fraseMorse = fraseArr.map(p => morseCode[p]);

    return fraseMorse.join('');
}

const frase = 'Hola Mundo'
console.log(traducir(frase))

const descifrar = code => {
    const codeArr = code.split(' ').filter(x => x !== ' ');
    console.log(codeArr)
    const codeMorse = codeArr.map(x => alphabet[x]);

    return codeMorse.join('');
}

const code = '.... --- .-.. .- -- ..- -. -.. ---';
console.log(descifrar(code));
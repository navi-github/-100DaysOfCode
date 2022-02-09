// El Pig Latin es una lengua lúdica que consiste en modificar las palabras con base en las siguientes condiciones:

// Si una palabra comienza con sonido de consonante, se pasan todas las consonantes antes de la primer vocal y se agrega la sílaba “ay” al final (comida = omidacay).

// Si la palabra inicia con vocal, entonces agrega la sílaba “way” al final (onomatopeya = onomatopeyaway).
// Tu objetivo es crear un programa que reciba un texto y lo traduzca a esta lengua ¿qué resultados obtuviste?

let text = 'comida';
let primerCaracter = text.charAt(0);
console.log(primerCaracter);
var modText;
var finalText;

function pigLatin (string) {
    if(primerCaracter == 'a' || 'e' || 'i' || 'o' || 'u') {
        finalText = (text + 'way');
    } else {
        modText = string.replace(primerCaracter, '');
        finalText = (modText + primerCaracter + 'ay');
    }
    return finalText;
}

console.log(pigLatin(text));

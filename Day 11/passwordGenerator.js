// 11. Generador de contraseñas
// Un ejercicio que siempre resulta útil para aplicar aleatoriedad es la generación de contraseñas. Básicamente debes crear un string de caracteres al azar tomando en cuenta las siguientes condiciones que el usuario debe poder elegir:

// Longitud de la contraseña.
// Si incluirá minúsculas, mayúsculas, números y caracteres especiales (incluyendo espacios).

let len = 0;
let pass = [];

function passwordGenerator (len) {
    for (let i = 0; i < len; i++) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        const charactersLength = characters.length;
        let letter = characters.charAt(Math.floor(Math.random() * charactersLength));
        pass.push(letter);
    }
    let password = pass.join('')
    return password;
}

console.log(passwordGenerator(20));

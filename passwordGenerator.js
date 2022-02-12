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

// function calcular(number1, operator, number2) {
//     // let number1;
//     // let number2;
//     switch (operator) {
//         case (operator = '+'):
//             console.log('La suma de los números es igual a : ' + (number1 + number2));
//             break;
//         case (operator == '-'):
//             console.log('La resta de los números es igual a : ' + (number1 - number2));
//             break;
//         case (operator == '*'):
//             console.log('La multiplicación de los números es igual a : ' + (number1 * number2));
//             break;
//         case (operator == '/'):
//             console.log('La división de los números es igual a : ' + (number1 / number2));
//             break;
//         default:
//             console.log('No es posible hacer esa operación');    
//     }
// }

// calcular(2, '-', 2);

function calcular2(number1, operator, number2) {
    if(operator == '+') {
        console.log('La suma de los números es igual a : '+ (number1 + number2));
    } else {
    if (operator == '-') {
        console.log('La resta de los números es igual a : ' + (number1 - number2));
    } else {
    if (operator == '*') {
        console.log('La multiplicación de los números es igual a : ' + (number1 * number2));
    } else {
    if (operator == '/') {
        console.log('La división de los números es igual a : ' + (number1 / number2));
    }
    else {
        console.log('No es posible hacer esa operación');  
    }
}}}}

calcular2(2, '-', 2);
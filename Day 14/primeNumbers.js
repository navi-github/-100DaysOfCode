// 14. Números primos
// Escribe un programa al que le indiques un número cómo límite y determinará todos los números primos desde el 1 hasta el número límite ingresado.
// Recuerda que los números primos tienen las siguientes características:

// Es un número natural entero mayor a 1.
// Tiene únicamente 2 divisores: el mismo número y el 1.

function primeNumbers(upperLimit) {
    for(let i = 1; i <= upperLimit; i++) {
        //En esta línea indicamos que los números 2,3,5 y 7 son primos
        if(i == 2 || i == 3 || i == 5 || i == 7) {
            console.log(`El número ${i} es primo`)
        } else {
            //Si los números son divisibles entre los primos indicados, entonces no son primos, pues tienen 3 divisores (el 1, su mismo número y los primos originales)
            if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                console.log(`El número ${i} no es primo`)
            } else {
                console.log(`El número ${i} es primo`)
            }
        }
    }
}

//Por favor, introduce el límite superior para calcular los números primos
primeNumbers(100);
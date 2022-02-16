// 16. Calculadora v2
// Te diste cuenta de que muchas veces hacemos cálculos que son con más de dos valores, quiero que crees el algoritmo para programar una calculadora a la que le puedas agregar tantos números como tú requieras, deberá servir para adiciones y multiplicaciones

let operator = prompt('Ingresa el operador que quieres utilizar: + para suma y * para multiplicación');

//Con este ciclo do - while ingresamos los números a utilizar
function operacion (operator) {
    if(operator == '+') {
        let total = 0;
        do {
            let numbers = parseInt(prompt('Ingresa el número'));
            total = total + numbers;
        } while (confirm('¿Deseas agregar más números?'));
        alert(`El resultado de la suma es ${total}`);
    } else {
        if (operator == '*') {
            let total = 1;
            do {
                let numbers = parseInt(prompt('Ingresa el número'));
                total = total * numbers;
            } while (confirm('¿Deseas agregar más números?'));
            alert(`El resultado de la multiplicación es ${total}`);
        } else {
            alert('Por favor, ingresa una operación válida')
        }
    } 
}

operacion(operator);
// #23. ¿Puedo ahorrar otros periodos de tiempo?
// Tu banco quiere permitirte ahorrar en nuevos intérvalos de tiempo que tú elijas, agrega la funcionalidad a tu calculadora de interés compuesto de poner una cantidad de meses de ahorro variable

let amount = parseInt(prompt("Por favor, ingresa la cantidad a ahorrar"));
let months = parseInt(prompt("Ingresa el número de meses a ahorrar"));
let intersest = parseInt(prompt("Ingresa el interés anual"));

//Función para calcular el interés generado
function saving() {
    for (let i = 0; i <= months; i++) {
        amount = (amount * (1 + (intersest/12/100)));
    }
    alert(`Si ahorras la cantidad ingresasda, en ${months} con un interés del ${intersest} anual, tendrás un total ${amount}`)
}

saving();
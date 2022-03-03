// https://platzi.com/comunidad/platzicodingchallenge-memory-part4-y-cuanto-vas-a-ahorrar-2/

// Siguiendo con el reto anterior de ¿Cuanto vas a ahorrar?:

// Ahora quiero que le agregues a tu programa de interés compuesto la capacidad de variar el valor inicial de tu ahorro

//Función para calcular el interés generado
let amount = parseInt(prompt("Por favor, ingresa la cantidad a ahorrar"));
let months = parseInt(prompt("Ingresa el número de meses a ahorrar"));
let intersest = parseInt(prompt("Ingresa el interés anual"));

function saving() {
    for (let i = 0; i <= months; i++) {
        amount = (amount * (1 + (intersest/12/100)));
    }
    alert(`Si ahorras la cantidad ingresasda, en ${months} con un interés del ${intersest} anual, tendrás un total ${amount}`)
}

saving();
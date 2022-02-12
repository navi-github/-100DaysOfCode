// 13. Calculadora de propina
// Imagina que pediste comida a domicilio (porque debemos quedarnos en casa), así que crearás un programa al cual ingresarás el valor de los platillos ordenados, obtendrás la suma total de la comida y calcularás un porcentaje de propina. Recuerda que puedes ingresar una cantidad indeterminada de platillos, indica a tu programa cuando calcular el resultado final.

//Con este ciclo do - while ingresamos el costo de los platillos
var sum = 0;
do {
    let plate = parseInt(prompt('Ingresa el costo del platillo: '));
    sum = sum + plate;
} while (confirm('¿Deseas agregar otro platillo?'));

//Aquí ingresamos el porcentaje de propina a dejar
let percentage = parseInt(prompt('Por favor, ingresa el porcentaje de propina que quieres dejar: '));

function tipsCalculator (sum, percentage) {
    let tips = sum * (percentage/100);
    return tips;
}

let money = prompt('Por favor, ingresa la moneda en que quieres pagar');

alert(`El total de propina a dejar es de ${tipsCalculator(sum, percentage)} ${money}`);
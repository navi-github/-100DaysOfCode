// "El interés compuesto te sirve para generar más dinero gracias a los intereses que generas, es decir, hace que el valor que se paga por intereses se vaya aumentando mes a mes, por que el dinero sobre el cuál se hace el cálculo del interés se incrementa cada vez que se liquidan los respectivos intereses que ganaste el mes previo.
// Crea una calculadora que te diga cuánto vas a tener en 6 meses, 1 año y 2 años al ahorrar 100 dólares con una tasa de interés a tu favor del 4%

//Función para calcular el interés generado
function saving(amount, months, intersest) {
    for (let i = 0; i <= months; i++) {
        amount = amount * (1 + (intersest/12/100));
    }
    console.log(amount)
}

//Invocación de función ingresando el monto, tiempo en meses e interés anual
saving(100, 6, 4);
saving(100, 12, 4);
saving(100, 24, 4);
saving(100, 36, 4);
saving(100, 48, 4);
saving(100, 60, 4);
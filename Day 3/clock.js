function seconds(horas, minutos) {
    return ((horas * 3600) + (minutos * 60));
};

function calcularSegundos() {
    const input1 = document.getElementById("inputHours");
    const input2 = document.getElementById("inputMinutes");
    const minutes = parseFloat(input1.value);
    const hours = parseFloat(input2.value);
    const segundos = seconds(hours, minutes);
    const outputSeconds = document.getElementById("outputSeconds");
    outputSeconds.innerHTML = "El total de segundos contenidos en " + hours + " horas y " + minutes + "es de: " + segundos + " segundos";
}


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloUno");
    const input2 = document.getElementById("inputTrianguloDos");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const perimetroTriangle = perimetroTriangulo(value1, value2, value3);
    const outputPerimetroTriangulo = document.getElementById("outputPerimetroTriangulo");
    outputPerimetroTriangulo.innerHTML = "El perimetro del triangulo es: " + perimetroTriangle + " cm";
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTrianguloUno");
    const input2 = document.getElementById("inputTrianguloDos");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const base = value3;
    const altura = Math.sqrt((value2 ** 2)-((base/2) ** 2));
    const areaTriangle = (Math.round(areaTriangulo(base, altura)*100)) / 100;
    const outputAreaTriangulo = document.getElementById("outputAreaTriangulo");
    outputAreaTriangulo.innerHTML = "El area del triangulo es: " + areaTriangle + " cm"}

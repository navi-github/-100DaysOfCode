// 15. Calculadora de volúmenes, el usuario debe elegir entre Cilindro, Cubo y Esfera
// Las matemáticas son base fundamental de la lógica y programación, por eso es importante practicarlas constantemente. Un cilindro es un cuerpo geométrico que requiere de varias fórmulas, aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal.

//Empezamos con la calculadora de un cilindro recto
let radius;
let height;
let area;

function cilinderVolume (radius, height) {
    let area = Math.PI*(radius * radius);
    let volume = Math.round(area * height);
    console.log(`El volúmen de un cilindro con radio de ${radius} centímetros de radio y ${height} centímetros de altura es de ${volume} centímetros cúbicos`);
}

//Aquí calculamos el volumen del cilindro, ingresando el radio y la altura (ambos en centímetros)
cilinderVolume(2, 10);


//Posteriormente calculamos el volúmen de un cubo
let side;

function cubeVolume (side) {
    let volume = Math.round(side * side * side);
    console.log(`El volumen de un cubo el cual la medida de uno de los lados es de ${side} centímetros es de ${volume} centímetros cúbicos`)
}

//Aquí calculamos el volumen del cubo, ingresando la medida de uno de los lados en centímetros
cubeVolume(5);


//Por último, calculamos el volúmen de una esfera
let radius2;

function esphereVolume (radius2) {
    let volume = Math.round((4/3) * (Math.PI) * (radius2*radius2*radius2));
    console.log(`El volumen de una esfera la cual tiene un radio de ${radius2} centímetros es de ${volume} centímetros cúbicos`)
}

//Aquí calculamos el volumen de la esfera, ingresando el radio en centímetros
esphereVolume(5);
//Ejte ej un programa para calcular el volúmen de un jilindro

function volume(r1, r2, height) {
    let area1 = Math.PI*r1*r1;
    let area2 = Math.PI*r2*r2;
    volumen = Math.round(((area1 + area2)/2) * height);
    console.log('El volumen del cilindro es:' + volumen + 'unidades cúbicas');
}

volume(4,4,8);
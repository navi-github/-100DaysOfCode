// #26. Ordenando ando #2
// Ordena tu set de nombres con cualquier algoritmo de ordenamiento que quieras, asegúrate de imprimir cuánto tiempo se demoró tu equipo en ordenar.

// #27. Ordenando ando #3
// Prueba otro algoritmo de ordenamiento con el mismo data set y compara el tiempo, comparte en el foro cuál fue tu algoritmo con mejor rendimiento y por qué

//Ordenando Ando 3 con JavaScript

// //Algoritmo #1: método burbuja
// function BubbleSort(list) {
//     for (let i = 0; i < list.length - 1; i++) {
//         for (let j = 0; j < list.length; j++) {
//             if (list[j] > list[j + 1]) {
//                 aux = list[j]
//                 list[j] = list[j + 1]
//                 list[j + 1] = aux
//             }
            
//         }
//     }
//     returnlist
// }

// //Algoritmo #2: ordenamiento por inserción
// function InsertionSort(list) {
//     for (let i = 0; i < list.length; i++) {
//         let pos = i
//         let aux = list[i]
//         while (pos > 0 && list[pos - 1] > aux) {
//             list[pos] = list[pos - 1]
//             pos--
//         }
//         list[pos] = aux
//     }
//     returnlist
// }

// //Leyendo archivo
// const RUTA_CSV = "./data1.csv"
// fetch(RUTA_CSV)
//     .then(res => res.text())
//     .then(data => {
//         let listaNombres = data.split('\n')
//         //Ordenando los nombres
//         //Método burbuja
//         console.time('Método burbuja')
//         let listaOrdenada1 = BubbleSort(listaNombres)
//         console.timeEnd('Método burbuja') //Método burbuja: 16-20ms
//         console.log(listaOrdenada1)
//         //Ordenamiento por inserción
//         console.time('Ordenamiento por inserción')
//         let listaOrdenada2 = InsertionSort(listaNombres)
//         console.timeEnd('Ordenamiento por inserción') //Ordenamiento por inserción: 5-8ms
//         console.log(listaOrdenada2)

//     })
//     .catch(error => {
//         console.log(error)
//     })

const fs = require('fs') // filesystem
const csv = require('csv-parse')// Encargado de parsear
let array = []

const parseador = csv({
    delimiter: ',',// Delimitador, por defecto es la coma ,
    cast: true, // Intentar convertir las cadenas a tipos nativos
    comment: '#'// El carácter con el que comienzan las líneas de los comentarios, en caso de existir
})

parseador.on('readable', function () {
    let fila
    while (fila = parseador.read()) {
        array.push(fila)
    }
})

parseador.on('error', function (err) {
    console.error("Error al leer CSV:", err.message)
})

console.time('tiempo')
fs.createReadStream("./data1.csv") // Abrir archivo
    .pipe(parseador) // Pasarlo al parseador a través de una tubería
    .on("end", function () {// Y al finalizar, terminar lo necesario
        array = array.flat(1)
        array.shift()
        const arrayOrdenado = array.sort()
        console.log(arrayOrdenado)
        console.timeEnd('tiempo')
        parseador.end()
    })

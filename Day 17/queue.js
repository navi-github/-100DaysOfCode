// 17. ¿Cómo puedo ordenar una lista de números de mayor a menor?
// El próximo reto será que ordenes una lista de 10 números aleatorios de mayor a menor y viceversa.

var list = [];
function numbers() {
    for(i = 1; i <= 10; i++) {
        list.push(Math.ceil(Math.random()*100));
    }
    console.log(list);
}

numbers();

let orderList = list.sort((a,b) => 
    a - b);
console.log(orderList);
//#12- Próximo cumpleaños
//Muchos lenguajes de programación cuentan con un módulo para manejar tiempo y fechas. Haz uso de este módulo para crear un programa al que le ingreses tu fecha de nacimiento y te diga cuantos días faltan para tu próximo cumpleaños.

//Aquí establecemos el día de la consulta (hoy)
let today = new Date();
//Aquí establecemos cuando será nuestro próximo cumpleaños
let nextBirthday = new Date('February 09, 2023');
//En la siguiente línea definimos la cantidad de milisegundos en un día
let msPerDay = 24 * 60 * 60 * 1000;
//En la siguiente línea calculamos los días faltantes para nuestro próximo cumpleaños
let daysLeft = Math.round((nextBirthday.getTime() - today.getTime()) / msPerDay);

console.log(daysLeft);

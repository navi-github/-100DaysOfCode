function words(word, reps) {
    const phrase = document.getElementById("inputWords");
    phrase.innerHTML = "Hola: " + word + "; por cierto, las repeticiones se mostrarán en la consola, por este lado ==>";
    console.log(word);
    if (reps === 1){
        return 1
    } 
    words(word, reps -1)
}

const reps = parseInt(prompt("¿Cuántas repeticiones quieres?:"));

words("Nunca Pares de Aprender", reps);


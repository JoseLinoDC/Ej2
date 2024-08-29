// Función para invertir el orden de las palabras en una cadena
function invertirFrase(frase) {
    // Dividir la frase en palabras usando un espacio como delimitador
    let palabras = frase.split(" ");
    
    // Invertir el orden del arreglo de palabras
    let palabrasInvertidas = palabras.reverse();
    
    // Unir las palabras invertidas en una nueva frase
    let fraseInvertida = palabrasInvertidas.join(" ");
    
    return fraseInvertida;
}

// Ejemplo de uso
const frase = "Hola, ¿cómo estás?";
const fraseInvertida = invertirFrase(frase);

console.log("La frase invertida es: " + fraseInvertida);

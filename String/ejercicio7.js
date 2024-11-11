let oracion = prompt("Ingrese una oración:");

let palabras = oracion.split(" ");
console.log("Palabras en líneas separadas:");
palabras.forEach(palabra => console.log(palabra));

// Solicitar el tamaño de los vectores
let tamaño = parseInt(prompt("Ingrese el tamaño de los vectores:"));

// Crear y llenar los dos vectores 
let vector1 = [];
let vector2 = [];

for (let i = 0; i < tamaño; i++) {
    vector1.push(parseInt(prompt(`Ingrese el elemento ${i + 1} del primer vector:`)));
}
for (let i = 0; i < tamaño; i++) {
    vector2.push(parseInt(prompt(`Ingrese el elemento ${i + 1} del segundo vector:`)));
}

// Sumar componente a componente y almacenar el resultado en un tercer vector
let vectorSuma = vector1.map((val, index) => val + vector2[index]);

// Mostrar el vector resultante
console.log(`Vector resultante de la suma: ${vectorSuma}`);

let vector = Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000) + 1);

// Extraer y sumar los dos últimos elementos
let ultimo = vector.pop();
let penultimo = vector.pop();
let suma = ultimo + penultimo;

console.log("Vector final:", vector);
console.log("Suma de los dos últimos elementos extraídos:", suma);
console.log("Tamaño final del vector:", vector.length);

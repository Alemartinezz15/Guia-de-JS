let valores = [1, 2, 3, 4, 2, 5, 6, 3, 7];

// Eliminar elementos que sean 2 o 3
for (let i = valores.length - 1; i >= 0; i--) {
    if (valores[i] === 2 || valores[i] === 3) {
        valores.splice(i, 1);
    }
}

// Insertar el valor 1 al inicio
valores.splice(0, 0, 1);

console.log("Vector después de eliminar 2 y 3 e insertar 1 al inicio:", valores);

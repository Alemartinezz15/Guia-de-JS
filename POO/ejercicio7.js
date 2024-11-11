let rifa = new Array(1000).fill(null); // Crear un array de 1000 elementos vacío
let premios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

// Asignar premios en posiciones aleatorias
for (let premio of premios) {
    let posicion;
    do {
        posicion = Math.floor(Math.random() * 1000);
    } while (rifa[posicion] !== null); // Evitar posiciones repetidas
    rifa[posicion] = premio;
}

// Mostrar los números con premio y los premios mismos
console.log("Números con premio y sus montos:");
rifa.forEach((premio, index) => {
    if (premio !== null) {
        console.log(`Número ${index}: $${premio}`);
    }
});

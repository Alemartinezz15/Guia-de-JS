// Inicializamos un array vacío para almacenar los nombres
let nombres = [];
let nombre;

do {
    // Solicitar al usuario que ingrese un nombre
    nombre = prompt("Ingrese un nombre (escriba 'Fin' para terminar):");

    // Si el nombre ingresado no es 'Fin', lo agregamos al array de nombres
    if (nombre !== "Fin") {
        nombres.push(nombre); // Añade el nombre al array 'nombres'
    }

} while (nombre !== "Fin");


console.log(`Se ingresaron ${nombres.length} nombres.`);

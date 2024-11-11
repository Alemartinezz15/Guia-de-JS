let nombres = [];
let nombre;

do {
    nombre = prompt("Ingrese un nombre (escriba 'Fin' para terminar):").toLowerCase();
    if (nombre !== "fin") {
        nombres.push(nombre);
    }
} while (nombre !== "fin");

console.log(`Se ingresaron ${nombres.length} nombres.`);

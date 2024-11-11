let texto = prompt("Ingrese el texto fuente:");
let clave = prompt("Ingrese la clave a buscar:");

let posicion = texto.indexOf(clave);
if (posicion !== -1) {
    console.log(`La clave se encuentra en la posición ${posicion}.`);
} else {
    console.log("La clave no está en el texto.");
}

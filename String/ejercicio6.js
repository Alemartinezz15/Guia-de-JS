let cadena = prompt("Ingrese una cadena de texto:");

console.log("a) Primera mitad de la cadena:", cadena.slice(0, Math.floor(cadena.length / 2)));
console.log("b) Último carácter:", cadena[cadena.length - 1]);
console.log("c) Cadena en forma inversa:", cadena.split("").reverse().join(""));
console.log("d) Cada carácter separado por un guión:", cadena.split("").join("-"));

let cantidadVocales = cadena.match(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g)?.length || 0;
console.log("e) Cantidad de vocales:", cantidadVocales);
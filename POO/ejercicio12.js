let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultadoToString = vector.toString();
let resultadoJoin = vector.join();

if (resultadoToString === resultadoJoin) {
    console.log("Los métodos toString() y join() retornan el mismo valor:", resultadoToString);
} else {
    console.log("Los métodos toString() y join() retornan valores diferentes.");
}

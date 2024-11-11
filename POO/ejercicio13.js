function obtenerMayor() {
    let mayor = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > mayor) {
            mayor = arguments[i];
        }
    }
    return mayor;
}

console.log("El mayor valor es:", obtenerMayor(10, 5, 8, 12, 3));

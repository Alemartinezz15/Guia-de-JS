function validarCoordenada(input) {
    let regex = /^\d{1,3},\d{1,3}$/;
    return regex.test(input);
}

console.log("¿Es válida la coordenada '123,456'?", validarCoordenada("123,456")); // true
console.log("¿Es válida la coordenada '1234,56'?", validarCoordenada("1234,56")); // false

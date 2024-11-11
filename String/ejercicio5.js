let email = prompt("Ingrese una dirección de email:");

function contieneArroba(str) {
    return str.includes("@");
}

if (contieneArroba(email)) {
    console.log("El email contiene el carácter '@'.");
} else {
    console.log("El email no contiene el carácter '@'.");
}

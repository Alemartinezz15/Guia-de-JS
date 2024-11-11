// Función para verificar si una palabra es un palíndromo
function verificarPalindromo() {

    let texto = prompt("Ingresa una palabra o texto:");
    let textoLimpio = texto.replace(/\s+/g, '').toLowerCase();
    let textoInvertido = textoLimpio.split('').reverse().join('');

    // Comparar el texto limpio con su versión invertida
    if (textoLimpio === textoInvertido) {
        alert(`¡La palabra o texto "${texto}" es un palíndromo!`);
    } else {
        alert(`La palabra o texto "${texto}" NO es un palíndromo.`);
    }
}
// Llamar a la función para ejecutar el programa
verificarPalindromo();

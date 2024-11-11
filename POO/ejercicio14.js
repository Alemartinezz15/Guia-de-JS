function funcionPrincipal(parametroPrincipal) {
    let variableLocal = "Soy una variable local de la función principal";

    function funcionAnidada(parametroAnidado) {
        console.log("Parámetro de la función principal:", parametroPrincipal);
        console.log("Parámetro de la función anidada:", parametroAnidado);
        console.log("Variable local de la función principal:", variableLocal);
    }

    funcionAnidada("Soy el parámetro de la función anidada");
}

funcionPrincipal("Soy el parámetro de la función principal");

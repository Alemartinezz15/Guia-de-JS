let sueldos = [];
let input;

do {
    input = parseFloat(prompt("Ingrese el sueldo del empleado (0 para finalizar):"));
    if (input !== 0) {
        sueldos.push(input);
    }
} while (input !== 0);

// Ordenar los sueldos de mayor a menor
sueldos.sort((a, b) => b - a);
console.log("Sueldos ordenados de mayor a menor:", sueldos);

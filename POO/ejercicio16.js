function calcularSueldoNeto(sueldoBruto) {
    let descuento = sueldoBruto > 10000 ? 0.10 : 0.05;
    return sueldoBruto * (1 - descuento);
}

let sueldo = 12000; // Ejemplo
console.log("El sueldo neto es:", calcularSueldoNeto(sueldo));

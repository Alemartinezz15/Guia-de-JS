class Suma {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }

    cargarvalor1(valor) {
        this.valor1 = valor;
    }

    cargarvalor2(valor) {
        this.valor2 = valor;
    }

    retornarResultado() {
        return this.valor1 + this.valor2;
    }
}

// Uso de la clase
let s = new Suma();
s.cargarvalor1(10);
s.cargarvalor2(20);
document.write('La suma de los dos valores es: ' + s.retornarResultado());

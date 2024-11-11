class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Empresa {
    constructor(edadTope) {
        this.edadTope = edadTope;
    }

    puedeTrabajar(persona) {
        return persona.edad <= this.edadTope;
    }
}

// Crear objetos de la clase Persona
let p1 = new Persona("Juan", 55);
let p2 = new Persona("Ana", 65);
let p3 = new Persona("Carlos", 45);

// Crear objeto de la clase Empresa con edad tope de 60 años
let empresa = new Empresa(60);

// Verificar cuántas personas no pueden trabajar
let inhabilitados = [p1, p2, p3].filter(persona => !empresa.puedeTrabajar(persona));
console.log("Cantidad de personas inhabilitadas para trabajar:", inhabilitados.length);

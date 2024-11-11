class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let personas = [
    new Persona("Juan", 30),
    new Persona("Ana", 40),
    new Persona("Luis", 25),
    new Persona("Marta", 50)
];

// Encontrar la persona con la mayor edad
let personaMayor = personas.reduce((max, persona) => (persona.edad > max.edad ? persona : max), personas[0]);

console.log("La persona de mayor edad es:", personaMayor.nombre);

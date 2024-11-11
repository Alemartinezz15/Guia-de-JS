let vector1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 500) + 1);
let vector2 = vector1.filter(num => num < 250);
let vector3 = vector1.filter(num => num >= 250);

console.log("Vector 1:", vector1);
console.log("Vector 2 (menores a 250):", vector2);
console.log("Vector 3 (mayores o iguales a 250):", vector3);

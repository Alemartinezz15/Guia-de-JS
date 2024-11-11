// Función para ingresar el vector y realizar los cálculos
function procesarVector() {
    // Crear un array vacío para almacenar los elementos del vector
    let vector = [];
    
    // Solicitar al usuario ingresar 8 elementos
    for (let i = 0; i < 8; i++) {
      let valor;
      do {
        valor = parseFloat(prompt(`Ingresa el valor del elemento ${i + 1}:`)); // Solicita el valor
        if (isNaN(valor)) {
          alert("Por favor, ingresa un número válido.");
        }
      } while (isNaN(valor)); // Repite si el valor no es un número válido
      vector.push(valor); // Añadir el valor al vector
    }
  
    // Calcular la suma total de todos los elementos
    let sumaTotal = vector.reduce((acc, num) => acc + num, 0);
  
    // Calcular la suma de los elementos mayores a 36
    let sumaMayores36 = vector.reduce((acc, num) => (num > 36 ? acc + num : acc), 0);
  
    // Contar la cantidad de valores mayores a 50
    let cantidadMayores50 = vector.filter(num => num > 50).length;
  
    // Mostrar los resultados
    alert(`Resultados:
      Valor acumulado de todos los elementos: ${sumaTotal}
      Valor acumulado de los elementos mayores a 36: ${sumaMayores36}
      Cantidad de valores mayores a 50: ${cantidadMayores50}`);
  }
  
  // Ejecutamos el programa llamando a la funcion
  procesarVector();
  
// Función para elevar un numero a su tercera potencia
function calcularCubo() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingresa un número para calcular su cubo:"));
  
    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
    } else {
      // Calcular el cubo del número
      let cubo = Math.pow(numero, 3); // O también: numero ** 3;
  
      // Mostrar el resultado
      alert(`El valor de ${numero} elevado a la tercera potencia es: ${cubo}`);
    }
  }
  
  // Llamar a la función para ejecutar el programa
  calcularCubo();
  
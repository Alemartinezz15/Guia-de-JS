let jugador = {
    nombre: "Carlos",
    puntos: 800,
    imprimir: function() {
        console.log("Nombre del jugador:", this.nombre);
        console.log("Puntos actuales:", this.puntos);
    },
    aumentarPuntos: function(cantidad) {
        this.puntos += cantidad;
    },
    verificarSiGano: function() {
        if (this.puntos > 1000) {
            console.log("¡Ganaste!");
        } else {
            console.log("Sigue jugando para ganar.");
        }
    }
};

// Usar los métodos
jugador.imprimir();
jugador.aumentarPuntos(250);
jugador.verificarSiGano();

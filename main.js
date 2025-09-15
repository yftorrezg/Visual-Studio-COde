const opciones = ['piedra', 'papel', 'tijeras'];

function obtenerEleccionComputadora() {
   const indice = Math.floor(Math.random() * opciones.length);
   return opciones[indice];
}

function determinarGanador(jugador, computadora) {
   if (jugador === computadora) return 'Empate';
   if (
      (jugador === 'piedra' && computadora === 'tijeras') ||
      (jugador === 'papel' && computadora === 'piedra') ||
      (jugador === 'tijeras' && computadora === 'papel')
   ) {
      return '¡Ganaste!';
   }
   return 'Perdiste';
}

function jugar() {
   const jugador = prompt('Elige: piedra, papel o tijeras').toLowerCase();
   if (!opciones.includes(jugador)) {
      alert('Opción inválida');
      return;
   }
   const computadora = obtenerEleccionComputadora();
   alert(`Computadora eligió: ${computadora}\n${determinarGanador(jugador, computadora)}`);
}

jugar();
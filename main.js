const opciones = ['piedra', 'papel', 'tijeras'];

function obtenerEleccionComputadora() {
   const indice = Math.floor(Math.random() * opciones.length);
   return opciones[indice];
}

function determinarGanador(jugador, compu) {
   if (jugador === compu) return 'Empate';
   if (
      (jugador === 'piedra' && compu === 'tijeras') ||
      (jugador === 'papel' && compu === 'piedra') ||
      (jugador === 'tijeras' && compu === 'papel')
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
   const compu = obtenerEleccionComputadora();
   alert(`Computadora eligió: ${compu}\n${determinarGanador(jugador, compu)}`);
}

jugar();
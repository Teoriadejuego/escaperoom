'use strict';
window.CodigosDePartida = (() => {
  const digits = (number, width) => String(number).padStart(width, '0');
  function crear(dificultad, milisegundos) {
    const azar = crypto.getRandomValues(new Uint32Array(3));
    const numero = 1000 + azar[0] % 9000;
    const minutos = Math.min(99, Math.floor(milisegundos / 60000));
    const letras = String.fromCharCode(65 + azar[1] % 26, 65 + azar[2] % 26);
    return '@' + numero + digits(Math.floor(numero / 7), 4) +
      (dificultad === 'dificil' ? '1' : '0') + digits(minutos, 2) + letras;
  }
  function leer(texto) {
    const partes = /^@([1-9]\d{3})(\d{4})([01])(\d{2})([A-Z]{2})$/.exec(texto.trim());
    if (!partes || Math.floor(Number(partes[1]) / 7) !== Number(partes[2])) return null;
    return { dificultad: partes[3] === '1' ? 'Difícil' : 'Fácil', minutos: Number(partes[4]) };
  }
  return { crear, leer };
})();

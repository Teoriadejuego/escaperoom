'use strict';
window.CodigosDePartida = (() => {
  const digits = (number, width) => String(number).padStart(width, '0');
  function crear(dificultad, milisegundos, grupo) {
    const azar = crypto.getRandomValues(new Uint32Array(3));
    const numero = 1000 + azar[0] % 9000;
    const minutos = Math.min(99, Math.floor(milisegundos / 60000));
    if (!['CO', 'TR'].includes(grupo)) throw new Error('Grupo desconocido');
    const serie = azar[1].toString(16).padStart(8, '0').toUpperCase();
    return '@' + numero + digits(Math.floor(numero / 7), 4) +
      (dificultad === 'dificil' ? '1' : '0') + digits(minutos, 2) + '-' + serie + '-' + grupo;
  }
  function leer(texto) {
    const actual = /^@([1-9]\d{3})(\d{4})([01])(\d{2})-[0-9A-F]{8}-(CO|TR)$/.exec(texto.trim());
    const partes = actual || /^@([1-9]\d{3})(\d{4})([01])(\d{2})([A-Z]{2})$/.exec(texto.trim());
    if (!partes || Math.floor(Number(partes[1]) / 7) !== Number(partes[2])) return null;
    return { grupo: actual ? (actual[5] === 'CO' ? 'Control' : 'Escape room') : 'Formato anterior, sin grupo', dificultad: partes[3] === '1' ? 'Difícil' : 'Fácil', minutos: Number(partes[4]) };
  }
  return { crear, leer };
})();

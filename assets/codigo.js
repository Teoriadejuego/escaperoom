'use strict';
window.CodigosDePartida = (() => {
  const digits = (number, width) => String(number).padStart(width, '0');
  function crear(dificultad, milisegundos, grupo, reintentos, ayudas, personaje, sexo) {
    const azar = crypto.getRandomValues(new Uint32Array(1));
    const numero = 1000 + azar[0] % 9000;
    const minutos = Math.min(99, Math.floor(milisegundos / 60000));
    if (!['CO', 'TR'].includes(grupo)) throw new Error('Grupo desconocido');
    if (![reintentos, ayudas].every(n => Number.isSafeInteger(n) && n >= 0) ||
        (grupo === 'CO' && ayudas)) throw new Error('Contadores incorrectos');
    let etiqueta = '';
    if (grupo === 'TR') {
      if (!Personajes.buscar(personaje)) throw new Error('Personaje desconocido');
      etiqueta = '-P' + personaje;
    } else if (sexo) {
      if (!['H','M','O'].includes(sexo)) throw new Error('Respuesta desconocida');
      etiqueta = '-S' + sexo;
    }
    return '@' + numero + digits(Math.floor(numero / 7), 4) +
      (dificultad === 'dificil' ? '1' : '0') + digits(minutos, 2) + etiqueta + '-R' + reintentos + 'A' + ayudas + '-' + grupo;
  }
  function leer(texto) {
    const codigo = texto.trim();
    const consentimiento = /-S([HMO])(?=-R(?:0|[1-9]\d*)A0-CO$)/.exec(codigo);
    // Aceptar el dato voluntario únicamente en CO, también en códigos históricos.
    if (consentimiento && !/^@\d{11}(?:-[0-9A-F]{8})?-S[HMO]-R(?:0|[1-9]\d*)A0-CO$/.test(codigo)) return null;
    const normalizado = consentimiento ? codigo.replace(consentimiento[0], '') : codigo;
    const actual = /^@([1-9]\d{3})(\d{4})([01])(\d{2})(?:-[0-9A-F]{8})?(?:-P(?<personaje>[1-6])(?=-R))?(?:-R(0|[1-9]\d*)A(0|[1-9]\d*))?-(CO|TR)$/.exec(normalizado);
    const partes = actual || /^@([1-9]\d{3})(\d{4})([01])(\d{2})([A-Z]{2})$/.exec(texto.trim());
    if (!partes || Math.floor(Number(partes[1]) / 7) !== Number(partes[2])) return null;
    const reintentos = actual?.[6] === undefined ? null : Number(actual[6]);
    const ayudas = actual?.[7] === undefined ? null : Number(actual[7]);
    if (reintentos !== null && (![reintentos, ayudas].every(Number.isSafeInteger) ||
        (actual[8] === 'CO' && ayudas))) return null;
    return { sexo: consentimiento ? {H:'Hombre',M:'Mujer',O:'Otro'}[consentimiento[1]] : null, personaje: actual?.groups?.personaje || null, reintentos, ayudas, grupo: actual ? (actual[8] === 'CO' ? 'Control' : 'Escape room') : 'Formato anterior, sin grupo', dificultad: partes[3] === '1' ? 'Difícil' : 'Fácil', minutos: Number(partes[4]) };
  }
  return { crear, leer };
})();

'use strict';
window.Personajes = (() => {
  // Identificadores permanentes: también se utilizan para leer códigos antiguos.
  const lista = [
    {id:'1', nombre:'Inés', oficio:'Guía de Sevilla'},
    {id:'2', nombre:'Mateo', oficio:'Navegante'},
    {id:'3', nombre:'Alba', oficio:'Ceramista'},
    {id:'4', nombre:'Leo', oficio:'Archivero'},
    {id:'5', nombre:'Vera', oficio:'Directora teatral'},
    {id:'6', nombre:'Hugo', oficio:'Arquitecto'}
  ];
  function montar(fieldset) {
    const grid = document.createElement('div');
    grid.className = 'retrato-grid';
    for (const [index, personaje] of lista.entries()) {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio'; radio.name = 'personaje'; radio.value = personaje.id; radio.required = true;
      const portrait = document.createElement('span');
      portrait.className = 'retrato';portrait.setAttribute('aria-hidden','true');
      portrait.style.backgroundPosition = (index % 3 * 50) + '% ' + (Math.floor(index / 3) * 100) + '%';
      const name = document.createElement('strong'), role = document.createElement('small');
      name.textContent = personaje.nombre; role.textContent = personaje.oficio;
      label.append(radio,portrait,name,role); grid.append(label);
    }
    fieldset.append(grid);
  }
  return {montar, buscar: id => lista.find(p => p.id === id)};
})();

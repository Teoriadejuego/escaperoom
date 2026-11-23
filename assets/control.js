'use strict';
(async () => {
  const el = id => document.getElementById(id);
  let sexoCompartido;
  if (Estudio.clase) el('autorizar').closest('fieldset').remove();
  const courses = window.ASIGNATURAS;
  const selector = el('asignatura');
  const content = el('contenido');
  selector.replaceChildren(...courses.map(c => new Option(c.nombre, c.id)));
  const requested = new URLSearchParams(location.search).get('asignatura');
  selector.value = courses.find(c => c.id === requested)?.id || courses[0].id;
  let course, blocks, questions, difficulty, start, position, correct, retries;
  const visited = new Set();
  async function refresh() {
    const selected = courses.find(c => c.id === selector.value);
    course = selected;
    blocks = null;
    el('origen').hidden = !selected.provisional;
    el('iniciar').disabled = el('bloque').disabled = true;
    el('retry').hidden = true;
    el('estado').textContent = 'Cargando preguntas…';
    el('bloque').replaceChildren();
    try {
      const result = await loadBank(selected);
      if (course !== selected) return;
      blocks = result;
      el('bloque').replaceChildren(...blocks.map(b => new Option(b.nombre,b.id)));
      el('iniciar').disabled = el('bloque').disabled = false;
      Estudio.aplicarPrescripcion(el('iniciar'));
      el('estado').textContent = '';
    } catch {
      if (course !== selected) return;
      el('estado').textContent = 'No se han podido cargar las preguntas.';
      el('retry').hidden = false;
    }
  }
  selector.onchange = el('retry').onclick = refresh;
  function node(tag, text) {
    const item = document.createElement(tag);
    item.textContent = text;
    return item;
  }
  el('setup').onsubmit = event => {
    event.preventDefault();
    if (!blocks || questions || el('iniciar').disabled) return;
    const block = blocks.find(b => b.id === el('bloque').value);
    difficulty = el('dificultad').value;
    questions = block.apartados.map(section => {
      const pool = section[difficulty];
      return pool[Math.floor(Math.random()*pool.length)];
    });
    sexoCompartido = el("autorizar")?.checked ? new FormData(el("setup")).get("sexo") : null;
    el("setup").querySelectorAll('[name="sexo"], #autorizar').forEach(input => { input.checked = false; });
    Estudio.iniciar(course.id, block.id, difficulty);
    start = performance.now(); position = correct = retries = 0;
    el('setup').hidden = true;
    el('sesion').hidden = false;
    el('datos').textContent = [course.nombre, block.nombre, difficulty === 'facil' ? 'Fácil':'Difícil'].join(' · ');
    showQuestion();
  };
  function showQuestion(message) {
    const q = questions[position];
    const heading = node('h2','Pregunta '+(position+1)+' de '+questions.length);
    heading.tabIndex = -1;
    const form = document.createElement('form');
    const fields = document.createElement('fieldset');
    fields.append(node('legend',q.prompt));
    const order = q.options.map((_,i)=>i);
    for(let i=order.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1)); [order[i],order[j]]=[order[j],order[i]];
    }
    for(const i of order){
      const label=document.createElement('label'), radio=document.createElement('input');
      radio.type='radio';radio.name='respuesta';radio.value=i+1;radio.required=true;
      label.append(radio,document.createTextNode(q.options[i]));fields.append(label);
    }
    form.append(fields,node('button',position+1===questions.length?'Finalizar':'Continuar'));
    form.onsubmit = event => {
      event.preventDefault();
      if(!form.isConnected) return;
      const answer = new FormData(form).get('respuesta');
      if(!answer) return;
      const success = Number(answer) === q.answer;
      Estudio.registrar(success);
      if (!visited.has(position) && success) correct++;
      visited.add(position);
      if (!success) {
        retries++;
        position = Math.max(0, position - 3);
        showQuestion('Respuesta incorrecta. Retomas la práctica en la pregunta '+(position+1)+'.');
        return;
      }
      position++;
      if(position===questions.length) finish(); else showQuestion();
    };
    content.replaceChildren(heading);
    if (message) content.append(node('p',message));
    content.append(node('p',q.story),form);
    heading.focus();
  }
  function finish() {
    const code=CodigosDePartida.crear(difficulty,performance.now()-start,'CO',retries,0,null,sexoCompartido);
    const grade=(10*correct/questions.length).toLocaleString('es-ES',{maximumFractionDigits:2});
    const heading=node('h2','Cuestionario finalizado'); heading.tabIndex=-1;
    const label=node('label','Código de finalización'), input=document.createElement('input');
    input.readOnly=true;input.value=code;label.append(input);
    const copy=node('button','Copiar código'),status=node('p','');status.setAttribute('role','status');
    copy.onclick=async()=>{input.focus();input.select();try{await navigator.clipboard.writeText(code);status.textContent='Código copiado.';}catch{status.textContent='Usa la opción Copiar de tu dispositivo.';}};
    content.replaceChildren(heading,node('p','Aciertos al primer intento: '+correct+' de '+questions.length+'. Nota: '+grade+' sobre 10.'),label,node('p',Estudio.clase?'Puedes guardar este código de la práctica.':'Envía el código completo a tu profesor.'),copy,status);
    Estudio.comprobante(content);
    heading.focus();
  }
  refresh();
})();

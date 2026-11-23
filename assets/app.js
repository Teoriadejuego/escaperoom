'use strict';
(async () => {
  await Estudio.entrada();
  const original = window.HISTORIA_ORIGINAL;
  const stories = [original, ...window.HISTORIAS_EXTRA];
  let chapters = original.paradas;
  let story = original;
  const subjects = window.ASIGNATURAS;
  const requestedSubject = new URLSearchParams(window.location.search).get('asignatura');
  let subject = subjects.find(item => item.id === requestedSubject) || subjects[0];
  let bank;
  let difficulty;
  const pick = items => items[Math.floor(Math.random() * items.length)];
  const difficultyName = () => difficulty === 'facil' ? 'Fácil' : 'Difícil';
  const screen = document.querySelector('#screen');
  const dialog = document.querySelector('#dialog');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const studyRules = 'Cada apartado admite una única respuesta. Tras responder a los tres objetos, utiliza el código para abrir la cerradura. Recibirás tu resultado al finalizar.';
  const paths = {lock:'<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',book:'<path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-3-1-6-2-10 1v15"/>',check:'<path d="m5 12 4 4L19 6"/>',key:'<circle cx="8" cy="8" r="5"/><path d="m12 12 9 9m-5-5 3-3m-1 5 3-3"/>'};
  const icon = type => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths[type]}</svg>`;
  function shuffled(a) { const result=[...a]; for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result; }
  function fresh(){return {phase:'cover',aciertos:0,email:'',emailObject:null,current:0,solved:chapters.map(()=>[false,false,false]),codes:shuffled(Array.from({length:900},(_,i)=>String(i+100))).slice(0,chapters.length),mistakes:0,hints:0,log:[]};}
  let state=fresh(), active=null, notice=null, returnFocus=null;
  function log(action,detail=''){state.log.push({time:new Date().toISOString(),place:chapters[state.current].place,action,detail});}
  const btn=(action,label,cls='quiet-button')=>`<button type="button" data-action="${action}" class="${cls}">${label}</button>`;
  function modal(title,body,footer){returnFocus=document.activeElement;dialog.innerHTML=`<div class="modal-header"><h2 id="dialog-title" class="modal-title">${title}</h2></div><div class="modal-body">${body}</div><div class="modal-footer">${footer}</div>`;dialog.showModal();}
  function close(){dialog.close();active=null;}
  dialog.addEventListener('close',()=>{if(dialog.open)return;active=null;if(returnFocus?.isConnected)returnFocus.focus();else screen.focus({preventScroll:true});});
  function render(focus=false){
    if(state.phase==='cover'){
      const banner = document.querySelector('.demo-banner');
      banner.hidden = true;
      screen.innerHTML = `<main class="cover"><div class="cover-art" role="img" aria-label="Plaza del Salvador de Sevilla"></div>
        <div class="cover-content"><h1>Sevilla<br><em>en clave.</em></h1>
        <p class="cover-description">Elige qué quieres practicar. Una historia al azar te llevará por seis escenarios de Sevilla.</p>
        <form id="setup"><label>Asignatura<select id="asignatura">${subjects.map(s => `<option value="${s.id}">${esc(s.nombre)}</option>`).join('')}</select></label>
        <small id="origen-banco" hidden>Banco provisional de Estadística I de Finanzas y Contabilidad.</small><label>Bloque<select id="bloque"></select></label>
        <label>Dificultad<select id="dificultad"><option value="facil">Fácil</option><option value="dificil">Difícil</option></select></label>
        <fieldset class="personajes"><legend>Elige tu personaje</legend></fieldset><button class="primary-button start-button" type="submit" disabled>Abrir la aventura ↗</button>
        <div id="bank-error" hidden role="status">No se han podido cargar las preguntas. <button type="button">Reintentar</button></div></form>
        </div></main>`;
      Personajes.montar(screen.querySelector(".personajes"));
      const subjectSelect = screen.querySelector('#asignatura');
      const blockSelect = screen.querySelector('#bloque');
      subjectSelect.value = subject.id;
      const startButton = screen.querySelector('[type=submit]');
      const error = screen.querySelector('#bank-error');
      async function refreshBlocks() {
        const selected = subjects.find(item => item.id === subjectSelect.value);
        subject = selected;
        screen.querySelector("#origen-banco").hidden = !selected.provisional;
        startButton.disabled = blockSelect.disabled = true;
        error.hidden = true;
        blockSelect.replaceChildren(new Option('Cargando preguntas…', ''));
        try {
          const blocks = await loadBank(selected);
          if (selected !== subject || !blockSelect.isConnected) return;
          blockSelect.replaceChildren(...blocks.map(b => new Option(b.nombre, b.id)));
          startButton.disabled = blockSelect.disabled = false;
          Estudio.aplicarPrescripcion(startButton);
        } catch {
          if (selected !== subject || !blockSelect.isConnected) return;
          blockSelect.replaceChildren(new Option('Preguntas no disponibles', ''));
          error.hidden = false;
        }
      }
      error.querySelector('button').addEventListener('click', refreshBlocks);
      subjectSelect.addEventListener('change', refreshBlocks);
      refreshBlocks();
      screen.querySelector('#setup').addEventListener('submit', startGame);
    }else if(state.phase==='end'){
      screen.innerHTML=`<main class="ending" style="background-image:linear-gradient(90deg,#f5f1e8ef,#f5f1e8cf),url('assets/${esc(chapters.at(-1).image)}')"><div class="end-card"><div class="end-seal">${icon('key')}</div><p class="eyebrow">${esc(story.nombre)}</p><h1>Ya sabes<br><em>dónde mirar.</em></h1><p>Has recuperado los dieciocho hallazgos de ${esc(bank.nombre)} en dificultad ${difficultyName().toLowerCase()}. Guarda tu cuaderno con el recorrido y la palabra final.</p>${Estudio.clase ? `<p>Aciertos: ${state.aciertos} de 18. Nota: ${(10*state.aciertos/18).toLocaleString('es-ES',{maximumFractionDigits:2})} sobre 10.</p>` : ''}<div class="end-stats"><div><strong>6 / 6</strong><span>cerraduras abiertas</span></div><div><strong>${state.mistakes}</strong><span>reintentos</span></div><div><strong>${state.hints}</strong><span>ayudas consultadas</span></div></div><p class="eyebrow">LA PALABRA DEL CUADERNO</p><div class="final-word">${esc(story.palabra)}</div><label for="codigo-final"><strong>Código de finalización</strong></label><input id="codigo-final" class="completion-code" readonly value="${state.codigo}"><p>Copia el código completo, incluido el signo @, y envíaselo a tu profesor para que pueda comprobarlo.</p>${btn('copiar','Copiar código','primary-button')}<p id="aviso-copia" role="status"></p>${btn('report','Guardar mi cuaderno','primary-button')}${Estudio.clase ? '' : btn('restart','Volver a explorar')}</div></main>`;
    }else{
      const ch=chapters[state.current],done=state.solved[state.current],ready=done.every(Boolean),code=ready?state.codes[state.current]:'···';
      screen.innerHTML=`<main class="journey"><nav class="route" aria-label="Progreso del recorrido"><div class="route-heading"><span>EL RECORRIDO</span><small>${String(state.current+1).padStart(2,'0')} / 06</small></div><ol>${chapters.map((c,i)=>`<li class="${i<state.current?'passed':i===state.current?'current':''}" ${i===state.current?'aria-current="step"':''}><span class="route-dot">${i<state.current?'✓':String(i+1).padStart(2,'0')}</span><span>${esc(c.place)}</span></li>`).join('')}</ol></nav><div class="play-grid"><section class="scene-column"><div class="scene" style="background-image:url('assets/${ch.image}')"><div class="scene-shade"></div><div class="scene-top"><span class="scene-tag">HITO ${String(state.current+1).padStart(2,'0')}</span><span class="scene-time">${ch.time} · Sevilla</span></div><div class="scene-title"><p class="eyebrow">${esc(ch.subtitle)}</p><h1>${esc(ch.place)}</h1></div><div class="hotspots">${ch.questions.map((q,j)=>`<button data-object="${j}" class="hotspot spot-${j+1} ${done[j]?'found':''}" aria-label="${done[j]?'Revisar':'Investigar'} ${esc(q.object)}"><span class="hotspot-icon">${icon(done[j]?'check':'book')}</span><span>${esc(q.object)}</span></button>`).join('')}</div>${btn('lock',icon('lock')+'<span>La cerradura</span>','scene-lock '+(ready?'ready':''))}</div><div class="story-card"><span class="avatar" aria-hidden="true">✧</span><div><p class="eyebrow">${esc(story.nombre)}</p><h2>${esc(ch.title)}</h2><p>${esc(ch.intro)}</p></div></div>${notice?`<div class="feedback ${notice.type}" role="status"><strong>${esc(notice.title)}</strong><p>${esc(notice.text)}</p></div>`:''}</section><aside class="notebook"><div class="notebook-heading">${icon('book')}<span>Tu cuaderno</span><small>DE CAMPO</small></div><p class="notebook-intro">Las respuestas abren caminos.</p><div class="clue-list">${ch.questions.map((q,j)=>`<div class="clue ${done[j]?'complete':''}"><span class="clue-number">${done[j]?'✓':'0'+(j+1)}</span><div><strong>${esc(q.object)}</strong><small>${done[j]?'Hallazgo recuperado':'Por investigar'}</small></div></div>`).join('')}</div><div class="code-area"><p class="eyebrow">CÓDIGO DE ESTE HITO</p><div class="code-digits" aria-label="${ready?'Código '+code:'Código aún oculto'}">${[...code].map(x=>`<span>${x}</span>`).join('')}</div><p>${ready?'Ya lo tienes. Pulsa la cerradura de la imagen.':'Resuelve los tres objetos para revelar la combinación.'}</p></div><div class="notebook-bottom"><div class="mini-stats"><span>${state.mistakes} reintentos</span><span>${state.hints} ayudas</span></div><p>Sin prisa. Cada error es una pista para volver a mirar.</p>${btn('report','Guardar cuaderno','notebook-download')}${Estudio.clase ? '' : btn('restart','Reiniciar expedición','reset-button')}</div></aside></div></main>`;
    }
    if (state.phase === 'end') Estudio.comprobante(screen.querySelector('.end-card'));
    if(focus){screen.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  }
  function startGame(event) {
    event.preventDefault();
    if (state.phase !== 'cover' || screen.querySelector('[type=submit]').disabled) return;
    bank = window[subject.global].find(b => String(b.id) === screen.querySelector('#bloque').value);
    difficulty = screen.querySelector('#dificultad').value;
    story = pick(stories);
    chapters = story.paradas.map((stop, i) => ({
      ...stop,
      questions: stop.objetos.map((object, j) => {
        const section = bank.apartados[i * 3 + j];
        return {...pick(section[difficulty]), object, title: section.nombre};
      })
    }));
    state = fresh();
    state.personaje = screen.querySelector("input[name=personaje]:checked").value;
    state.phase = 'play';
    Estudio.iniciar(subject.id, bank.id, difficulty);
    state.inicio = performance.now();
    const banner = document.querySelector('.demo-banner');
    banner.textContent = [Personajes.buscar(state.personaje).nombre, subject.nombre, story.nombre, bank.nombre, difficultyName()].join(' · ');
    banner.hidden = false;
    log('inicio', banner.textContent);
    render(true);
  }
  function emailControls() {
    return `<div class="email-controls">${btn('email', state.email ? 'Editar correo universitario' : 'Añadir correo universitario')}
      <div class="email-editor" hidden><label>Correo universitario <input type="email" autocomplete="email" value="${esc(state.email)}" placeholder="usuario@alum.us.es"></label>
      <small>Opcional. Se incluye solo en la descarga de tu cuaderno.</small>
      ${btn('save-email','Guardar correo')}</div><small class="email-status" role="status"></small></div>`;
  }
  function puzzle(j){
    if(state.phase!=='play')return;
    const q=chapters[state.current].questions[j];
    if (state.emailObject === null) state.emailObject = j;
    const email = !Estudio.clase && state.current === 0 && j === state.emailObject ? emailControls() : '';
    if (state.solved[state.current][j]) {
      modal(esc(q.title), `${email}<p class="eyebrow">PISTA RECUPERADA</p><p>${Estudio.clase ? 'Respuesta registrada.' : esc(q.explanation)}</p>`, btn('close','Volver al escenario'));
      return;
    }
    modal(esc(q.title),`${email}<p class="eyebrow">OBJETO ${j+1} · ${esc(chapters[state.current].place)}</p><p class="story-excerpt">${esc(q.story)}</p><fieldset><legend>${esc(q.prompt)}</legend>${shuffled(q.options.map((text,i)=>({text,value:i+1}))).map(o=>`<label class="choice"><input type="radio" name="answer" value="${o.value}"><span>${esc(o.text)}</span></label>`).join('')}</fieldset><div class="hint-box" aria-live="polite"></div><p class="input-error" role="alert"></p><p class="modal-note">${Estudio.clase ? studyRules : 'Si fallas, volverás a resolver los tres objetos de este hito. Puedes pedir una pista antes de responder.'}</p>`,(Estudio.clase ? '' : btn('hint','Una pista'))+btn('close','Volver')+btn('submit','Guardar hallazgo','primary-button'));
    active={j,stage:state.current,hinted:false};
  }
  function retryStage(reason) {
    log('reinicio de hito', reason);
    state.mistakes++;
    state.solved[state.current] = [false, false, false];
    close();
    notice = {type:'warning', title:'Inténtalo de nuevo en '+chapters[state.current].place,
      text:reason+' Vuelve a investigar los tres objetos de este hito. Conservas las cerraduras anteriores.'};
    render(true);
  }
  function report(){
    const text=[subject.nombre,'Personaje: '+Personajes.buscar(state.personaje).nombre,...(state.codigo?['Código de finalización: '+state.codigo]:[]), story.nombre, bank.nombre, difficultyName(), 'Correo: '+(state.email || 'Sin indicar'),'Estado: '+(state.phase==='end'?'Recorrido completado · '+story.palabra:state.phase==='cover'?'Sin comenzar':'Hito '+(state.current+1)+' de 6'),'Reintentos: '+state.mistakes,'Ayudas: '+state.hints,'','Registro local de esta sesión:',...state.log.map(e=>`${e.time} | ${e.place} | ${e.action} | ${e.detail}`),'','Demostración: este cuaderno no acredita identidad, aprendizaje autónomo ni una calificación. No se envía a ningún profesor.'].join('\n');
    const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Mi_cuaderno_Sevilla.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const actions={
    async copiar() {
      const campo = document.querySelector('#codigo-final');
      campo.focus();
      campo.select();
      const aviso = document.querySelector('#aviso-copia');
      try {
        await navigator.clipboard.writeText(campo.value);
        aviso.textContent = 'Código copiado.';
      } catch {
        aviso.textContent = 'El código está seleccionado. Usa la opción Copiar de tu dispositivo.';
      }
    },
    email() {
      const editor = dialog.querySelector('.email-editor');
      editor.hidden = false;
      editor.querySelector('input').focus();
    },
    'save-email'() {
      const editor = dialog.querySelector('.email-editor');
      const input = editor.querySelector('input');
      const value = input.value.trim();
      const status = dialog.querySelector('.email-status');
      if (value && (!input.validity.valid || !/@(?:[a-z0-9-]+\.)*us\.es$/i.test(value))) {
        status.textContent = 'Introduce un correo de la Universidad de Sevilla, por ejemplo usuario@alum.us.es.';
        input.focus();
        return;
      }
      state.email = value;
      editor.hidden = true;
      const button = dialog.querySelector('[data-action="email"]');
      button.textContent = value ? 'Editar correo universitario' : 'Añadir correo universitario';
      button.focus();
      status.textContent = value ? 'Correo guardado en esta partida.' : 'Correo eliminado.';
    },
    close,
    help(){if(Estudio.clase){modal('Cómo jugar',studyRules,btn('close','Entendido'));return;}modal('Sigue las pistas de Sevilla','<ol><li>Pulsa los tres objetos del escenario y resuelve sus casos.</li><li>Tres hallazgos revelan un código en el cuaderno.</li><li>Pulsa la cerradura e introduce el código para avanzar.</li><li>Si fallas una respuesta o una combinación, repites las tres pistas del hito actual. Conservas las cerraduras ya abiertas.</li></ol><p>Puedes pedir ayuda. No hay cronómetro ni vidas limitadas.</p><p class="modal-note">La partida vive en esta pestaña: recargar o cerrar pierde el progreso. Los códigos cambian en cada expedición. Puedes añadir tu correo universitario al cuaderno desde la primera pregunta.</p>',btn('close','Entendido','primary-button'));},
    about(){modal('Sobre esta actividad','<p>Escape room de estadística aplicada. El juego sortea la historia y un problema por apartado del bloque y la dificultad elegidos. Las preguntas se conservan al reintentar. Una nueva partida repite el sorteo.</p><p>El correo opcional y el progreso permanecen en esta pestaña. Puedes descargar tu cuaderno al terminar.</p>',btn('close','Volver','primary-button'));},
    hint(){if(Estudio.clase||!active||active.stage!==state.current)return;const q=chapters[state.current].questions[active.j];if(!active.hinted){state.hints++;log('pista',q.title);active.hinted=true;}dialog.querySelector('.hint-box').textContent=q.hint;},
    submit(){if(!active||active.stage!==state.current||state.phase!=='play')return;const chosen=dialog.querySelector('input[name="answer"]:checked');if(!chosen){dialog.querySelector('.input-error').textContent='Elige una respuesta antes de guardar.';return;}const q=chapters[state.current].questions[active.j];if(Estudio.clase){
      const recorded=state.solved[state.current];
      if(recorded[active.j])return;
      if (Number(chosen.value)===q.answer) state.aciertos++;
      Estudio.registrar(Number(chosen.value)===q.answer);
      recorded[active.j]=true;log('respuesta registrada',q.title);close();
      notice={type:'success',title:'Respuesta registrada',text:recorded.every(Boolean)?'Consulta el código del hito y abre la cerradura.':'Continúa con el siguiente objeto.'};render(true);return;
    }if(Number(chosen.value)!==q.answer){retryStage('La pista que debes revisar: '+q.hint);return;}state.solved[state.current][active.j]=true;log('acierto',q.title);const ready=state.solved[state.current].every(Boolean);close();notice={type:'success',title:ready?'Has encontrado el código':'Un hallazgo para tu cuaderno',text:q.explanation+' '+(ready?'El código ya está en tu cuaderno. Pulsa la cerradura e introdúcelo.':'Investiga los otros objetos para completar el código.')};render();screen.focus({preventScroll:true});},
    lock(){if(state.phase!=='play')return;const ready=state.solved[state.current].every(Boolean);modal('La cerradura del cuaderno',`<p class="eyebrow">${esc(chapters[state.current].place)}</p><p>${ready?'Consulta los tres dígitos de tu cuaderno e introdúcelos para abrir el siguiente camino.':'Aún faltan hallazgos. Investiga los tres objetos de este escenario para recuperar el código.'}</p>${ready?'<label class="field-label" for="lock_code">Código de tres dígitos</label><input id="lock_code" inputmode="numeric" maxlength="3" autocomplete="off" placeholder="···"><p class="input-error" role="alert"></p>':''}<p class="modal-note">Una combinación incorrecta reinicia las tres pistas de este hito.</p>`,btn('close','Volver')+(ready?btn('unlock','Abrir cerradura','primary-button'):''));},
    unlock(){if(state.phase!=='play'||!state.solved[state.current].every(Boolean))return;const code=dialog.querySelector('#lock_code')?.value.trim();if(!code){dialog.querySelector('.input-error').textContent='Introduce los tres dígitos del cuaderno.';return;}if(code!==state.codes[state.current]){if(Estudio.clase){dialog.querySelector('.input-error').textContent='Comprueba el código del cuaderno.';return;}retryStage('La combinación no coincide con el código recuperado.');return;}log('cerradura abierta');const old=state.current;close();if(old===chapters.length-1){state.codigo=CodigosDePartida.crear(difficulty, performance.now()-state.inicio, 'TR', state.mistakes, state.hints, state.personaje);state.phase='end';notice=null;}else{state.current++;notice={type:'success',title:'Un nuevo camino',text:chapters[old].next_text};}render(true);},
    report,
    restart(){modal('¿Comenzar otra expedición?','<p>Se borrará el progreso de esta sesión y cambiarán los códigos. Puedes descargar tu cuaderno antes.</p>',btn('close','Seguir aquí')+btn('confirm-restart','Empezar de nuevo','primary-button'));},
    'confirm-restart'(){close();state=fresh();notice=null;render(true);}
  };
  document.addEventListener('click',event=>{const b=event.target.closest('button');if(!b)return;if(b.dataset.object!==undefined)puzzle(Number(b.dataset.object));else actions[b.dataset.action]?.();});
  dialog.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.id==='lock_code'){event.preventDefault();actions.unlock();}});
  render();
})();

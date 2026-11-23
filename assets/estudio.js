'use strict';
window.Estudio = (() => {
  const requested = new URLSearchParams(location.search).get('estudio') === '1';
  const academicOnly = new URLSearchParams(location.search).get('practica') === 'clase';
  const cfg = window.CONFIG_ESTUDIO;
  function institutional(link) {
    try {
      const u = new URL(link);
      return u.protocol === 'https:' && !u.username && !u.password && (u.hostname === 'us.es' || u.hostname.endsWith('.us.es'));
    } catch { return false; }
  }
  const enabled = cfg?.activar === true && cfg.revisionConfirmada === true &&
    ['responsable','contacto','conservacion','referenciaRevision','version','derechos','contactoDPD','hojaAprobada','baseJuridica'].every(k => typeof cfg[k] === 'string' && cfg[k].trim()) &&
    institutional(cfg.hojaAprobada) && /^[^\s@]+@(?:[a-z0-9-]+\.)*us\.es$/i.test(cfg.contactoDPD) && !cfg.version.startsWith('ensayo') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.contacto);
  let exposure;
  function iniciar(asignatura,bloque,dificultad) {
    if (requested && !academicOnly) exposure={asignatura,bloque,dificultad,inicio:performance.now(),respuestas:0,aciertos:0,reintentos:0};
  }
  function registrar(acierto) {
    if (!exposure || exposure.id) return;
    exposure.respuestas++;
    if (acierto) exposure.aciertos++;
    else exposure.reintentos++;
  }
  function comprobante(container) {
    if (!exposure) return;
    if (!exposure.id) {
      exposure.id=crypto.randomUUID();
      exposure.segundos=Math.floor((performance.now()-exposure.inicio)/1000);
    }
    const section=document.createElement('section');
    section.className='consentimiento-final';
    section.innerHTML=`<h2>Consentimiento informado</h2>
      <p>Estudiamos cómo aprenden estadística los estudiantes. Al enviar el correo, autorizas el uso de tus datos de práctica y de las notas de tus dos primeros parciales con un ID seudónimo. Participar es voluntario y tu decisión no afecta a tu nota.</p>
      <details><summary>Datos y privacidad</summary><p>El equipo que recibe el correo verá tu dirección para vincular tus notas. El archivo de análisis usará tu ID. Para solicitar la retirada antes de la anonimización, indica ese ID al responsable.</p><p class="contacto"></p></details>
      <p class="estado"></p><button type="button" class="preparar"></button>
      <button type="button" class="omitir">Terminar sin enviar</button>`;
    const consent='Autorizo voluntariamente el uso seudonimizado de mis datos de práctica y de las notas de mis dos primeros parciales para estudiar cómo aprenden estadística los estudiantes.';
    const {inicio,...usage}=exposure;
    const clase=new URLSearchParams(location.search).get('clase');
    const registro={...usage,clase:/^C[0-9]{3}$/.test(clase || '')?clase:null,condicion:location.pathname.endsWith('control.html')?'CO':'TR',apartados:18,ayudas:0,version:enabled?cfg.version:'ensayo-final-1'};
    const body=consent+'\n\n'+JSON.stringify(registro,null,2);
    const info=section.querySelector('.contacto');
    const button=section.querySelector('.preparar');
    if (enabled) {
      info.textContent=[cfg.responsable,cfg.contacto,cfg.baseJuridica,cfg.conservacion,cfg.derechos,cfg.contactoDPD].join(' · ')+'. ';
      const link=document.createElement('a');
      link.href=cfg.hojaAprobada;link.textContent='Hoja informativa del estudio';info.append(link);
      button.textContent='Preparar correo de consentimiento';
      button.onclick=()=>{location.href='mailto:'+encodeURIComponent(cfg.contacto)+'?subject='+encodeURIComponent('Consentimiento · '+exposure.id)+'&body='+encodeURIComponent(body);};
      section.querySelector('.estado').textContent='Revisa el borrador y pulsa Enviar en tu correo si deseas participar.';
    } else {
      info.textContent='Los datos de esta demostración permanecen en la pestaña.';
      section.querySelector('.estado').textContent='Demostración. Puedes ver el correo de ejemplo.';
      button.textContent='Ver correo de ejemplo';
      button.onclick=()=>{
        let preview=section.querySelector('pre');
        if (!preview) { preview=document.createElement('pre');preview.style.whiteSpace='pre-wrap';preview.style.overflowWrap='anywhere';section.append(preview); }
        preview.textContent=body;
      };
    }
    section.querySelector('.omitir').onclick=()=>{section.replaceChildren(document.createTextNode('Práctica finalizada sin enviar datos.'));};
    container.append(section);
  }
  function aplicarPrescripcion(boton) {
    if (!academicOnly && !requested) return;
    const params = new URLSearchParams(location.search);
    let invalid = false;
    for (const key of ['asignatura','bloque','dificultad']) {
      if (!params.has(key)) continue;
      const select=document.getElementById(key);
      const value=params.get(key);
      select.disabled=true;
      if (Array.from(select.options).some(o=>o.value===value)) select.value=value;
      else invalid=true;
    }
    let status=document.querySelector('#prescripcion');
    if (!status) {
      status=document.createElement('p');status.id='prescripcion';status.setAttribute('role','status');boton.before(status);
    }
    status.textContent=invalid?'El enlace contiene una selección no disponible. Pide al docente el enlace de tu clase.':
      ['asignatura','bloque','dificultad'].some(k=>params.has(k))?'Las selecciones fijadas por tu docente corresponden a tu clase.':'';
    boton.disabled=invalid;
  }
  return {iniciar,registrar,comprobante,aplicarPrescripcion,get clase(){return academicOnly || requested;}};
})();

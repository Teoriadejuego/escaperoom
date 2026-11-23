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
  let enrollment, exposure;
  const mode = enabled ? 'ESTUDIO' : 'ENSAYO';
  const condition = location.pathname.endsWith('control.html') ? 'CO' : 'TR';
  function practiceUrl() {
    const url = new URL(location.href);
    url.searchParams.delete('estudio');
    url.searchParams.set('practica','clase');
    return url.href;
  }
  async function entrada() {
    if (!requested) return;
    const panel = document.createElement('main');
    panel.className = 'puerta-estudio';
    panel.innerHTML = `<h1 tabindex="-1">Una app para practicar estadística</h1>
      <p>Te regalamos esta app para ayudarte a preparar el segundo parcial. Queremos saber con qué formato se aprende más: una aventura o un cuestionario.</p>
      <p>¿Nos permites usar tus datos de práctica y relacionarlos con las notas de tus dos primeros parciales? Tú eliges. Tendrás la misma actividad y la misma nota decidas lo que decidas.</p>
      <p id="ensayo-aviso"></p>
      <details><summary>Qué datos se usan y cómo retirarme</summary>
      <p>El comprobante registra tu código de participante y clase, formato, asignatura, bloque, dificultad, aceptación, tiempo, respuestas, aciertos, ayudas y reintentos. Lo entregas tú por el canal institucional. Para retirarlo antes de la anonimización, comunica tu código al responsable. El alojamiento puede recibir datos técnicos de conexión.</p>
      <p id="estudio-info"></p></details>
      <p><button id="participar" type="button" aria-expanded="false">Sí, autorizo el uso de mis datos</button></p>
      <form id="estudio-form" hidden><label>Mi código de participante<input required autocomplete="off" pattern="P[0-9]{6}" name="id" placeholder="P000001"></label>
      <label>Mi código de clase<input required autocomplete="off" pattern="C[0-9]{3}" name="clase" placeholder="C001"></label>
      <button>Empezar la práctica</button></form>
      <p><a id="sin-estudio">Practicar sin compartir mis datos</a></p>`;
    const heading = panel.querySelector('h1');
    panel.querySelector('#ensayo-aviso').textContent = enabled ? '' : 'Demostración con datos ficticios.';
    panel.querySelector('#estudio-info').textContent = enabled ?
      ['Responsable: '+cfg.responsable, 'Contacto: '+cfg.contacto, 'Conservación: '+cfg.conservacion, 'Revisión: '+cfg.referenciaRevision].join('. ') :
      'Simulación técnica. Utiliza P000001 y C001 u otros códigos inventados. No entregues datos reales. La captación está cerrada.';
    if (enabled) {
      const details = document.createElement('p');
      details.textContent = 'Base jurídica: '+cfg.baseJuridica+'. Derechos y ejercicio: '+cfg.derechos+'. Contacto de protección de datos: '+cfg.contactoDPD+'. ';
      const link = document.createElement('a');
      link.href=cfg.hojaAprobada;link.textContent='Consultar la hoja de información aprobada';link.target='_blank';link.rel='noopener noreferrer';
      details.append(link);panel.querySelector('#estudio-info').after(details);
    }
    panel.querySelector('#sin-estudio').href = practiceUrl();
    document.body.prepend(panel);
    heading.focus();
    await new Promise(resolve => {
      const form = panel.querySelector('form');
      const consent = panel.querySelector('#participar');
      consent.onclick = () => {
        form.hidden = false;
        consent.setAttribute('aria-expanded','true');
        if (!enabled) {
          form.elements.id.value='P000001';
          form.elements.clase.value='C001';
          form.requestSubmit();
        } else form.elements.id.focus();
      };
      form.onsubmit = event => {
        event.preventDefault();
        if (form.hidden || !form.reportValidity()) return;
        const fields = new FormData(form);
        enrollment = {modo:mode, id:fields.get('id'), clase:fields.get('clase'), condicion:condition,
          version:enabled ? cfg.version : 'ensayo-2', aceptacion_utc:new Date().toISOString()};
        panel.remove();document.documentElement.classList.remove('entrada-estudio');
        const leave=document.createElement('a');leave.className='salir-estudio';leave.href=practiceUrl();
        leave.textContent = 'Salir del estudio y comenzar la misma práctica sin participar';document.body.append(leave);
        resolve();
      };
    });
  }
  function iniciar(asignatura,bloque,dificultad) {
    if (enrollment) exposure={asignatura,bloque,dificultad,inicio_utc:new Date().toISOString(),inicio:performance.now(),respuestas:0,aciertos:0,ayudas:0,reintentos:0};
  }
  function registrar(acierto) {
    if (enrollment && exposure && !exposure.fin_utc) {
      exposure.respuestas++;
      if (acierto) exposure.aciertos++;
      else exposure.reintentos++;
    }
  }
  function comprobante(container) {
    if (!enrollment || !exposure) return;
    if (!exposure.fin_utc) {
      exposure.fin_utc=new Date().toISOString();
      exposure.segundos=Math.floor((performance.now()-exposure.inicio)/1000);
    }
    const {inicio, ...observed}=exposure;
    const record={...enrollment,...observed,estado:'completada',apartados:18};
    const section=document.createElement('section'), heading=document.createElement('h2'), area=document.createElement('textarea'), copy=document.createElement('button'), download=document.createElement('button'), note=document.createElement('p');
    heading.textContent=enabled?'Comprobante de participación':'Comprobante de ensayo';
    area.readOnly=true;area.setAttribute('aria-label','Contenido del comprobante');area.value=JSON.stringify(record,null,2);
    copy.textContent='Copiar comprobante';download.textContent='Descargar comprobante';note.setAttribute('role','status');
    copy.onclick=async()=>{area.select();try{await navigator.clipboard.writeText(area.value);note.textContent='Comprobante copiado.';}catch{note.textContent='El texto está seleccionado. Utiliza la opción Copiar de tu dispositivo.';}};
    download.onclick=()=>{const url=URL.createObjectURL(new Blob([area.value],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=mode+'_'+record.id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
    section.append(heading,area,copy,download,note);container.append(section);
  }
  function aplicarPrescripcion(boton) {
    if (!academicOnly && !enrollment) return;
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
  return {entrada,iniciar,registrar,comprobante,aplicarPrescripcion,get clase(){return academicOnly || Boolean(enrollment);},get activo(){return Boolean(enrollment);}};
})();

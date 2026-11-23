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
    panel.innerHTML = `<h1 tabindex="-1"></h1><p><strong>¿Mejora el segundo parcial cuando la clase practica con la aventura en vez del cuestionario tradicional, comparando estudiantes con rendimiento inicial similar?</strong></p>
      <p>El primer parcial sirve como referencia. Tu clase tiene asignada una modalidad de práctica antes del segundo parcial. Participar permite al equipo docente relacionar los dos parciales con la actividad mediante un identificador asignado por el docente.</p>
      <p>La participación es voluntaria. Puedes practicar en la misma modalidad y con las mismas condiciones académicas aunque declines. Puedes salir en cualquier momento. Para retirar una entrega, comunica tu identificador al responsable antes de que se anonimice el registro.</p>
      <p id="estudio-info"></p><p>El comprobante incluye identificador seudónimo, clase, condición, asignatura, bloque, dificultad, fecha y versión de la aceptación, duración, número de respuestas, aciertos, ayudas, reintentos y finalización. Tú decides si lo entregas por el canal institucional. Esta página procesa las respuestas en tu pestaña. El servicio de alojamiento puede recibir datos técnicos de conexión.</p>
      <form id="estudio-form"><label>Identificador seudónimo entregado por el docente (P seguido de seis cifras)<input required autocomplete="off" pattern="P[0-9]{6}" name="id" placeholder="P000001"></label>
      <label>Código de clase (C seguida de tres cifras)<input required autocomplete="off" pattern="C[0-9]{3}" name="clase" placeholder="C001"></label>
      <label>Si decides no participar en la investigación, ¿qué sucede?<select required name="comprension"><option value="">Elige una respuesta</option><option value="nota">Pierdo la oportunidad de practicar</option><option value="igual">Puedo practicar con las mismas condiciones académicas</option></select></label>
      <label><input type="checkbox" required name="aceptar"> He leído la información y acepto el tratamiento de los datos descritos para esta investigación.</label>
      <button>Continuar</button><p role="status"></p></form>
      <p><a id="sin-estudio">Continuar con la misma práctica de clase sin participar en el estudio</a></p>`;
    const heading = panel.querySelector('h1');
    heading.textContent = enabled ? 'Información y participación en el estudio' : 'Ensayo del estudio con datos ficticios';
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
      form.onsubmit = event => {
        event.preventDefault();
        const fields = new FormData(form);
        if (!form.reportValidity() || !fields.has('aceptar')) return;
        if (fields.get('comprension') !== 'igual') {
          form.querySelector('[role=status]').textContent = 'Lee de nuevo las condiciones de participación y vuelve a responder.';
          form.elements.comprension.focus();
          return;
        }
        enrollment = {modo:mode, id:fields.get('id'), clase:fields.get('clase'), condicion:condition,
          version:enabled ? cfg.version : 'ensayo-1', aceptacion_utc:new Date().toISOString()};
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

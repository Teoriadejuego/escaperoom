'use strict';
const tipo = document.querySelector('#tipo'), menus = document.querySelector('#menus'), campos = document.querySelector('#campos'), estado = document.querySelector('#estado');
const subjects = [
  { id: 'turismo', nombre: 'Estadística de Turismo', global: 'BANCOS', archivo: 'bancos.js' },
  { id: 'economia', nombre: 'Estadística · Grado en Economía', global: 'ECONOMIA', archivo: 'economia.js' },
  { id: 'finanzas', nombre: 'Estadística I · Finanzas y Contabilidad', global: 'FINANZAS', archivo: 'finanzas.js' }
];
let subject = subjects[0];
let active, pool, inputs;
function selector(label, names, onChange) {
  const wrap = document.createElement('label'), select = document.createElement('select');
  select.setAttribute('aria-label', label);
  wrap.textContent = label;
  names.forEach((name, i) => select.add(new Option(name, i)));
  wrap.append(select); menus.append(wrap);
  select.onchange = () => { while(wrap.nextElementSibling) wrap.nextElementSibling.remove(); onChange(Number(select.value)); };
  onChange(0);
}
function field(key, label, value, numeric=false) {
  const wrap=document.createElement('label'), input=document.createElement(numeric?'input':'textarea');
  wrap.textContent=label; input.value=value; input.required=true;
  if(numeric){input.type='number';input.min=1;input.max=3;}
  wrap.append(input); campos.append(wrap); inputs.push({key,input,numeric});
}
function editar(item, fields){
  active=item; inputs=[]; campos.replaceChildren();
  fields.forEach(([key,label])=>field(key,label,Array.isArray(item[key])?item[key].join('\n'):item[key],key==='answer'));
  const save=document.createElement('button');save.textContent='Guardar cambios en esta sesión';campos.append(save);
}
function mostrar(){
  menus.replaceChildren(); estado.textContent='';
  document.querySelector('#duplicar').hidden=tipo.value!=='b';
  if(tipo.value==='b'){
    selector('Asignatura', subjects.map(s => s.nombre), si => {
      subject = subjects[si];
      const banks = window[subject.global];
      selector('Bloque',banks.map(b=>b.nombre),bi=>{
      const parts=banks[bi].apartados;
      selector('Apartado',parts.map((p,i)=>(i+1)+'. '+p.nombre),pi=>{
        selector('Dificultad',['Fácil','Difícil'],di=>{
          pool=parts[pi][di?'dificil':'facil'];
          selector('Pregunta',pool.map((q,i)=>(i+1)+'. '+q.prompt),qi=>editar(pool[qi],[['story','Situación'],['prompt','Pregunta'],['options','Tres opciones, una por línea'],['answer','Número de la opción correcta'],['hint','Pista'],['explanation','Solución explicada']]));
        });
      });
      });
    });
  } else {
    const stories=tipo.value==='o'?[HISTORIA_ORIGINAL]:HISTORIAS_EXTRA; selector('Historia',stories.map(h=>h.nombre),hi=>{
      const story=stories[hi];selector('Escena o datos generales',['Nombre y palabra final',...story.paradas.map(p=>p.place)],i=>{
        if(i===0) editar(story,[['nombre','Nombre de la historia'],['palabra','Palabra final']]);
        else editar(story.paradas[i-1],[['place','Lugar'],['title','Título'],['subtitle','Subtítulo'],['image','Imagen dentro de assets/'],['time','Hora'],['intro','Escena'],['next_text','Transición'],['objetos','Tres objetos, uno por línea']]);
      });
    });
  }
}
campos.onsubmit=e=>{
  e.preventDefault();const update={};
  for(const {key,input,numeric} of inputs){
    let value=input.value.trim();
    if(!value){estado.textContent='Completa todos los campos.';return;}
    if(Array.isArray(active[key])){value=value.split(/\r?\n/).map(x=>x.trim());if(value.length!==3||value.some(x=>!x)||new Set(value).size!==3){estado.textContent='Escribe tres líneas distintas.';return;}}
    update[key]=numeric?Number(value):value;
  }
  Object.assign(active,update);estado.textContent='Cambios guardados en esta sesión. Descarga el archivo para conservarlos.';
};
document.querySelector('#duplicar').onclick=()=>{
  const copy=JSON.parse(JSON.stringify(active));copy.prompt='Nueva variante de '+copy.prompt;pool.push(copy);
  const select=menus.lastElementChild.querySelector('select');select.add(new Option(copy.prompt,pool.length-1));select.value=pool.length-1;select.onchange();
  estado.textContent='Variante añadida. Edita su contenido y guarda los cambios.';
};
document.querySelector('#descarga').onclick=()=>{
  const questions=tipo.value==='b',name=questions?subject.global:tipo.value==='o'?'HISTORIA_ORIGINAL':'HISTORIAS_EXTRA', content=window[name];
  const url=URL.createObjectURL(new Blob(['window.'+name+' = '+JSON.stringify(content,null,2)+';\n'],{type:'text/javascript;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=questions?subject.archivo:tipo.value==='o'?'original.js':'historias.js';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
tipo.onchange=mostrar;mostrar();

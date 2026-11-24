'use strict';
window.bloquesDocentes = (() => {
  const cache = new Map();
  const format = value => Number(value.toFixed(4)).toLocaleString('es-ES',{maximumFractionDigits:4});
  function opciones(correcta, otras, giro) {
    const valores=[correcta,...otras];
    const orden=valores.slice(giro).concat(valores.slice(0,giro));
    return {options:orden,answer:orden.indexOf(correcta)+1};
  }
  function generarApartado(familia, parada, paso) {
    const caso=casosCurriculares[familia];
    const [prompt,calcular,razon]=caso.tareas[paso];
    const siguiente=caso.tareas[(paso+1)%3];
    function variante(dificil,v) {
      const n=5+parada*4+v*2+Number(dificil);
      const value=calcular(n);
      const delta=Number.isInteger(value)?Math.max(1,Math.round(Math.abs(value)*0.15)):Math.max(0.05,Math.abs(value)*0.15);
      const exacta=format(value);
      let pregunta=prompt, correcta=exacta, alternativas=[format(value+delta),format(value-delta)];
      let explicacion=razon+' Resultado: '+exacta+'.';
      if (dificil) {
        const segunda=format(siguiente[1](n));
        correcta=exacta+' / '+segunda;
        alternativas=[format(value+delta)+' / '+segunda,exacta+' / '+format(siguiente[1](n)+delta)];
        pregunta=prompt+' '+siguiente[0]+' Elige ambos resultados en ese orden.';
        explicacion+=' '+siguiente[2]+' Segundo resultado: '+segunda+'.';
      }
      return {story:caso.datos(n),prompt:pregunta+' Redondea a cuatro decimales si es necesario.',
        ...opciones(correcta,alternativas,(parada+paso+v)%3),hint:razon,explanation:explicacion};
    }
    return {nombre:prompt,facil:[variante(false,0),variante(false,1)],dificil:[variante(true,0),variante(true,1)]};
  }
  async function construir(course, cargar) {
    const definiciones=programasUS[course.id];
    const grupo=course.familia;
    const usaBanco=definiciones.some(b=>b.casos.some(k=>k.startsWith('@')));
    const bases=usaBanco ? await cargar(grupo) : [];
    const indices=definiciones.some(b=>b.casos.includes('@indices')) ? (await cargar('BANCOS'))[2] : null;
    return definiciones.map((b,i)=>{
      const origen=b.casos[0];
      let id=course.id+'-'+(i+1),apartados;
      if (origen.startsWith('@')) {
        const posicion={'@uni':0,'@bi':1,'@indices':2,'@prob':3}[origen];
        const base=bases[posicion];
        id=base.id;
        apartados=base.apartados;
        if (origen==='@indices') {
          apartados=grupo==='BANCOS'?indices.apartados:[...base.apartados.slice(0,9),...indices.apartados.slice(9)];
        }
      } else {
        apartados=Array.from({length:18},(_,j)=>{
          const parada=Math.floor(j/3);
          return generarApartado(b.casos[parada%b.casos.length],parada,j%3);
        });
      }
      const numero=i+(course.id==='1800001'?0:1);
      return {id,nombre:'Bloque '+numero+' · '+b.nombre,apartados};
    });
  }
  return (course,cargar)=>{
    if(!cache.has(course.id)) cache.set(course.id,construir(course,cargar).catch(e=>{cache.delete(course.id);throw e;}));
    return cache.get(course.id);
  };
})();

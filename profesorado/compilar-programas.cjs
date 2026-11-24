// Ejecutar con Node desde cualquier carpeta para reconstruir los bancos curriculares.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
global.window=global;
for(const file of ['data/asignaturas.js','data/bancos.js','data/economia.js','data/finanzas.js','data/programas.js','data/casos-curriculares.js','assets/bloques-docentes.js']) require(path.join(root,file));
async function compilar(){
  for(const curso of ASIGNATURAS){
    const bloques=await bloquesDocentes(curso, nombre=>Promise.resolve(global[nombre]));
    const contenido=bloques.map(b=>JSON.stringify(b,null,2)).join(',\n');
    const destino=path.join(root,'data',curso.archivo);
    fs.mkdirSync(path.dirname(destino),{recursive:true});
    fs.writeFileSync(destino,'window.'+curso.global+' = [\n'+contenido+'\n];\n');
  }
}
compilar().catch(e=>{console.error(e);process.exitCode=1;});

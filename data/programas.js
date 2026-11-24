'use strict';
// Orden y contenido de los programas de asignatura US 2026–27.
// Un bloque con varios casos alterna familias de ejercicios entre las seis paradas.
window.programasUS = (() => {
  const plan = {};
  const tema = (nombre,...casos) => ({nombre,casos});
  const cargar = (ids,bloques) => ids.split(' ').forEach(id=>{plan[id]=bloques;});
  const intro=tema('Introducción y conceptos básicos','intro','medicion','longitudinal','cobertura');
  const uni=tema('Análisis de una característica','@uni');
  const bi=tema('Análisis de dos características','@bi');
  const indices=tema('Números índices','@indices');
  const prob=tema('Introducción al cálculo de probabilidades','@prob');
  cargar('turismo 1790016 turismo-ingles 1510001 1860023',[intro,uni,bi,indices]);
  cargar('economia finanzas fico-ingles 2200022 1800001',[intro,uni,bi,indices,prob]);
  cargar('2290028 2340020 2660001',[intro,uni,indices,bi,prob]);
  const va=tema('Variables aleatorias unidimensionales','aleatoria');
  const mod=tema('Modelos probabilísticos univariantes','modelos','aleatoria');
  const vec=tema('Vectores aleatorios','vectores','normalbi');
  const inf=tema('Introducción a la inferencia estadística','inferencia','contrastes');
  const est=tema('Teoría y métodos de estimación puntual','puntual');
  const normal=tema('Inferencia exacta en poblaciones normales','exactos');
  const asint=tema('Propiedades asintóticas y muestras grandes','asintotica');
  cargar('1560014',[va,vec,mod,inf,est,normal,asint]);
  cargar('2340036 2660014',[va,mod,vec,inf,est,normal,asint]);
  cargar('1610023 2200025',[va,mod,vec,inf,normal,asint,est]);
  cargar('2290036',[prob,va,mod,vec,tema('Modelos probabilísticos multidimensionales','normalbi'),inf,est,tema('Contrastes de hipótesis','contrastes'),tema('Otras técnicas de inferencia: no paramétricas y bayesianas','bayes','signos')]);
  cargar('1560024 2340049',[tema('Introducción a la econometría','regsimple','multiple'),tema('Regresión con una variable explicativa','regsimple','gretl'),tema('Regresión con dos variables explicativas','multiple','colineal'),tema('Ampliación del modelo lineal','escalas','multiple')]);
  cargar('1560026 2340047',[tema('Regresión múltiple, aproximación matricial y colinealidad','multiple','colineal'),tema('Heteroscedasticidad','hetero'),tema('Autocorrelación','auto'),tema('Variable dependiente categórica: logit y probit','logit','probit'),tema('Datos de panel','panel'),tema('Uso de Gretl','gretl')]);
  cargar('1560045',[tema('Sistemas dinámicos con herramientas informáticas','dinamica'),tema('Aplicaciones de la dinámica de sistemas','controlopt','logistica')]);
  cargar('1560051',[tema('Series temporales','series','auto'),tema('Datos de panel','panel'),tema('Variables instrumentales','iv')]);
  cargar('1800018 marketing-internacional',[tema('Introducción a la programación matemática','lineal','cuadratica'),tema('Programación lineal','lineal'),tema('Transporte y asignación','transporte'),tema('Programación no lineal sin restricciones y con igualdades','libre','cuadratica'),tema('Programación no lineal con desigualdades','desigualdad')]);
  cargar('1800019',[tema('Introducción a la investigación por muestreo','muestreo','errores'),tema('Muestreo aleatorio simple','muestreo'),tema('Estimadores de razón y regresión','razon','regmuestra'),tema('Muestreo estratificado','estratos'),tema('Muestreo por conglomerados','conglomerados'),tema('Muestreo sistemático','sistematico'),tema('Muestreo bietápico','bietapico'),tema('Diseños no aleatorios','cuotas'),tema('Errores ajenos al diseño muestral','errores')]);
  cargar('1800051',[tema('Introducción al big data y al aprendizaje automático','bigdata'),tema('Métodos de análisis y predicción','clasificar','regsimple','agrupacion','series'),tema('Herramientas informáticas y visualización','software')]);
  cargar('1800053',[tema('Generalidades: SPSS, exploración e inferencia','software','inferencia','contrastes'),tema('Métodos estadísticos multivariantes','anova','agrupacion','multi')]);
  cargar('1610037',[tema('Cálculo de probabilidades y cálculo actuarial','actuarial','riesgo'),tema('Tipos de riesgos','riesgo','continuo'),tema('Sistemas de valoración de riesgos','valorar','actuarial')]);
  return plan;
})();

// Familias de problemas. Cada caso proporciona datos y tres preguntas con su cálculo.
'use strict';
window.casosCurriculares = (() => {
  const casos = {};
  function caso(id, datos, tareas) { casos[id] = {datos,tareas}; }
  caso('intro', n=>'Un estudio de comercios toma '+n+' establecimientos de un censo de '+(10*n)+'. En cada comercio se anotan tres características y se visita una sola vez.',[
    ['¿Cuántas unidades forman la población?',n=>10*n,'La población es el censo completo.'],
    ['¿Cuántas unidades forman la muestra?',n=>n,'Cada establecimiento seleccionado es una unidad.'],
    ['¿Cuántos valores se registran si no falta ninguno?',n=>3*n,'Multiplica el tamaño muestral por las tres características.']]);
  caso('aleatoria',n=>'El número diario de pedidos perdidos vale 0 o '+n+', con probabilidad 0,5 cada uno.',[
    ['¿Qué pérdida media se espera?',n=>n/2,'Suma cada valor multiplicado por su probabilidad.'],
    ['¿Cuál es el segundo momento respecto al origen?',n=>n*n/2,'Promedia los cuadrados de ambos valores.'],
    ['¿Cuál es la varianza?',n=>n*n/4,'Resta el cuadrado de la media al segundo momento.']]);
  caso('vectores',n=>'Dos canales registran ventas X e Y con varianzas '+(4*n)+' y '+(9*n)+' y covarianza '+n+'.',[
    ['¿Cuál es la varianza de X + Y?',n=>15*n,'Suma las dos varianzas y dos covarianzas.'],
    ['¿Cuál es la varianza de X − Y?',n=>11*n,'Resta dos covarianzas a la suma de varianzas.'],
    ['¿Cuál es Cov(2X, Y)?',n=>2*n,'La covarianza es lineal en cada argumento.']]);
  caso('modelos',n=>'Cada una de '+(4*n)+' visitas independientes compra con probabilidad 0,25. X cuenta las compras.',[
    ['¿Cuál es E(X)?',n=>n,'Para una binomial, E(X) = np.'],
    ['¿Cuál es Var(X)?',n=>0.75*n,'Para una binomial, Var(X) = np(1−p).'],
    ['¿Cuántas visitas sin compra se esperan?',n=>3*n,'Multiplica el número de visitas por 1−p.']]);
  caso('inferencia',n=>'Se toman '+(n*n)+' mediciones independientes de una población con desviación típica conocida '+(2*n)+'. La media muestral es '+(4*n)+'. Usa 1,96 como valor crítico.',[
    ['¿Cuál es el error estándar de la media?',n=>2,'Divide la desviación poblacional por la raíz de N.'],
    ['¿Cuál es el margen de error del intervalo normal del 95 %?',n=>3.92,'Multiplica el error estándar por 1,96.'],
    ['¿Cuál es el extremo inferior del intervalo?',n=>4*n-3.92,'Resta el margen de error a la media.']]);
  caso('puntual',n=>'Tres observaciones independientes de una Poisson son '+(n-1)+', '+n+' y '+(n+4)+'.',[
    ['¿Cuál es el estimador de máxima verosimilitud de la tasa?',n=>n+1,'La media muestral estima la tasa de Poisson.'],
    ['¿Qué total se predice en dos periodos iguales?',n=>2*(n+1),'Multiplica por dos la tasa estimada.'],
    ['¿Qué tasa estimarías si otra observación fuera '+ 'cero?',n=>3*(n+1)/4,'Incluye el cero en el tamaño de muestra.']]);
  caso('exactos',n=>'En una muestra normal de tamaño 9, la media es '+(3*n)+' y la desviación muestral '+n+'. Usa t crítico 2,306.',[
    ['¿Cuántos grados de libertad tiene el pivote t?',n=>8,'Se estima la media y quedan N−1 grados de libertad.'],
    ['¿Cuál es el error estándar estimado?',n=>n/3,'Divide s por la raíz del tamaño.'],
    ['¿Cuál es el extremo superior del intervalo bilateral?',n=>3*n+2.306*n/3,'Suma a la media t crítico por su error estándar.']]);
  caso('asintotica',n=>'De '+(100*n)+' compras independientes, '+(40*n)+' llevan descuento. Usa la aproximación normal.',[
    ['¿Qué porcentaje muestral tiene descuento?',n=>40,'Divide los casos favorables entre el total y multiplica por 100.'],
    ['¿Cuál es el error estándar estimado de la proporción, en puntos porcentuales?',n=>100*Math.sqrt(.24/(100*n)),'Usa 100 por la raíz de p(1−p)/N.'],
    ['Si cuadruplicas N manteniendo p, ¿por qué factor multiplicas el error estándar?',n=>.5,'El error estándar es inverso a la raíz de N.']]);
  caso('contrastes',n=>'Se contrasta una media de referencia '+(3*n)+' frente a una alternativa bilateral. La estimación es '+(3*n+4)+' y su error estándar conocido es 2.',[
    ['¿Cuál es el estadístico z?',n=>2,'Divide la diferencia observada entre el error estándar.'],
    ['¿Cuál es la diferencia estimada en unidades originales?',n=>4,'Resta la media de referencia.'],
    ['Con valor crítico 1,96, ¿cuánto supera |z| al umbral?',n=>.04,'Compara ambos valores en escala estándar.']]);
  caso('bayes',n=>'Se modela una proporción con una previa Beta(2, 2). Se observan '+n+' éxitos y '+(2*n)+' fracasos.',[
    ['¿Cuál es el primer parámetro de la posterior?',n=>2+n,'Suma los éxitos al primer parámetro previo.'],
    ['¿Cuál es el segundo parámetro posterior?',n=>2+2*n,'Suma los fracasos al segundo parámetro previo.'],
    ['¿Qué probabilidad predictiva tiene un nuevo éxito?',n=>(2+n)/(4+3*n),'Divide el primer parámetro posterior entre la suma de ambos.']]);
  caso('regsimple',n=>'Una regresión de ventas con intercepto tiene media de X '+n+', media de Y '+(3*n+2)+', suma cruzada centrada '+(6*n)+' y suma centrada de cuadrados de X '+(2*n)+'.',[
    ['¿Qué pendiente estima mínimos cuadrados?',n=>3,'Divide la suma cruzada por la suma de cuadrados de X.'],
    ['¿Qué intercepto se estima?',n=>2,'Resta pendiente por media de X a la media de Y.'],
    ['¿Qué ventas predice para X un punto por encima de su media?',n=>3*n+5,'La recta pasa por las medias y por cada unidad sube la pendiente.']]);
  caso('multiple',n=>'La demanda ajustada es 8 + 2X − 3Z. En la ficha X = '+(2*n)+' y Z = '+n+'.',[
    ['¿Cuál es la demanda ajustada?',n=>8+n,'Sustituye ambos regresores en la ecuación.'],
    ['¿Cuál es el cambio ajustado si X sube 2 y Z sube 1?',n=>1,'Combina los dos efectos parciales.'],
    ['Si la demanda observada es 10 + X, ¿qué residuo queda?',n=>2+n,'Resta la predicción al dato observado.']]);
  caso('escalas',n=>'Un modelo en euros estima coste = '+(10*n)+' + 4x, con x medido en unidades. Se reexpresa x en decenas.',[
    ['¿Cuál es la pendiente por decena?',n=>40,'Una decena contiene diez unidades.'],
    ['¿Cuál es el intercepto tras cambiar la unidad de x?',n=>10*n,'Cambiar la escala del regresor conserva el valor en x = 0.'],
    ['¿Qué coste se ajusta para dos decenas?',n=>10*n+80,'Evalúa la nueva recta en dos decenas.']]);
  caso('colineal',n=>'En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería '+n+'.',[
    ['¿Cuál es el factor de inflación de la varianza?',n=>5,'VIF = 1/(1−R²).'],
    ['¿Qué varianza resulta con la colinealidad indicada?',n=>5*n,'Multiplica la varianza de referencia por el VIF.'],
    ['¿Qué fracción de variabilidad del predictor queda sin explicar?',n=>.2,'Calcula 1−R².']]);
  caso('hetero',n=>'En dos grupos la varianza del error es '+n+' y '+(4*n)+'. Se pondera por la inversa de la varianza.',[
    ['¿Qué peso corresponde al primer grupo?',n=>1/n,'El peso es la inversa de la varianza.'],
    ['¿Cuántas veces mayor es el peso del primer grupo?',n=>4,'Los pesos son inversamente proporcionales a las varianzas.'],
    ['¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?',n=>2,'Toma la raíz del cociente de varianzas.']]);
  caso('auto',n=>'El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es '+(4*n)+'.',[
    ['¿Qué error se espera un periodo después?',n=>2*n,'Multiplica el error actual por 0,5.'],
    ['¿Qué error se espera a dos periodos?',n=>n,'Aplica dos veces el coeficiente.'],
    ['Si el siguiente error observado es '+ 'cero, ¿cuál fue la innovación?',n=>-2*n,'Resta el error previsto al observado.']]);
  caso('logit',n=>'Un modelo logit da odds de compra de '+n+' a 1. Una campaña duplica esas odds.',[
    ['¿Cuál es la probabilidad inicial?',n=>n/(1+n),'Convierte odds en probabilidad con o/(1+o).'],
    ['¿Cuáles son las nuevas odds?',n=>2*n,'Multiplica por la razón de odds.'],
    ['¿Cuál es la probabilidad tras la campaña?',n=>2*n/(1+2*n),'Convierte de nuevo las odds a probabilidad.']]);
  caso('panel',n=>'Un panel sigue '+n+' empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.',[
    ['¿Cuántas observaciones tiene el panel equilibrado?',n=>4*n,'Multiplica unidades por periodos.'],
    ['¿Cuál es la media temporal de esa empresa?',n=>13,'Promedia sus cuatro observaciones.'],
    ['¿Cuál es la primera venta tras la transformación intragrupos?',n=>-3,'Resta la media individual a la primera observación.']]);
  caso('iv',n=>'Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son '+(3*n)+' y '+n+'.',[
    ['¿Qué pendiente estima el método de variables instrumentales?',n=>3,'Divide Cov(Z,Y) entre Cov(Z,X).'],
    ['Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?',n=>6*n,'La covarianza es lineal.'],
    ['Si X se mide en decenas, ¿qué pendiente IV queda por decena?',n=>30,'Dividir X entre diez multiplica la pendiente por diez.']]);
  caso('dinamica',n=>'El stock sigue x(t+1)=0,5x(t)+'+n+' y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + '+n+'.',[
    ['¿Qué stock hay tras un paso discreto?',n=>n,'Evalúa la recurrencia desde cero.'],
    ['¿Qué stock estacionario tienen ambos sistemas?',n=>2*n,'Iguala el incremento o la derivada a cero.'],
    ['¿Cuál es la derivada del sistema continuo en x = '+ '0?',n=>n,'Sustituye el estado inicial en la tasa.']]);
  caso('controlopt',n=>'Una empresa elige extracción u entre 0 y '+(4*n)+'. Su beneficio inmediato es '+(2*n)+'u − u²/2 y cada unidad extraída reduce en '+n+' el valor futuro del stock.',[
    ['¿Qué u iguala el beneficio marginal al coste de oportunidad?',n=>n,'Iguala 2n−u al valor marginal futuro n.'],
    ['Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato?',n=>2*n,'Iguala a cero la derivada del beneficio inmediato.'],
    ['¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico?',n=>n*n/2,'Sustituye el óptimo en beneficio menos coste futuro.']]);
  caso('series',n=>'Las últimas tres ventas mensuales son '+n+', '+(n+3)+' y '+(n+6)+'.',[
    ['¿Qué pronóstico da la media móvil de tres meses?',n=>n+3,'Promedia las tres ventas.'],
    ['¿Qué pronóstico da el método ingenuo del último valor?',n=>n+6,'El pronóstico repite el dato más reciente.'],
    ['Si el mes siguiente vende '+ 'tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil?',n=>6,'Resta el pronóstico móvil al nuevo dato.']]);

  caso('muestreo',n=>'El marco contiene '+(20*n)+' establecimientos. Un muestreo aleatorio simple sin reposición selecciona '+(2*n)+'.',[
    ['¿Qué probabilidad de inclusión tiene cada establecimiento?',n=>.1,'Divide muestra entre población.'],
    ['¿Cuál es el peso de diseño?',n=>10,'Invierte la probabilidad de inclusión.'],
    ['Si la media muestral es 3, ¿qué total poblacional se estima?',n=>60*n,'Expande la media por el tamaño del marco.']]);
  caso('razon',n=>'La muestra suma '+(3*n)+' euros de ventas y '+n+' visitas. Se conocen '+(10*n)+' visitas poblacionales.',[
    ['¿Cuál es la razón muestral de ventas por visita?',n=>3,'Divide los totales muestrales.'],
    ['¿Cuál es la estimación de razón del total de ventas?',n=>30*n,'Multiplica la razón muestral por el total auxiliar.'],
    ['Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón?',n=>12,'Multiplica el cambio auxiliar por la razón.']]);
  caso('estratos',n=>'Dos estratos tienen '+(3*n)+' y '+n+' unidades. Las medias muestrales de ventas son 10 y 18.',[
    ['¿Cuál es el peso poblacional del estrato menor?',n=>.25,'Divide su tamaño entre el total.'],
    ['¿Cuál es la media estratificada estimada?',n=>12,'Pondera cada media por el peso del estrato.'],
    ['¿Qué total de ventas se estima?',n=>48*n,'Multiplica la media ponderada por la población.']]);
  caso('conglomerados',n=>'Se sortean 2 barrios de '+n+' con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.',[
    ['¿Qué probabilidad de inclusión tiene cada barrio?',n=>2/n,'Divide barrios elegidos entre barrios existentes.'],
    ['¿Qué peso tiene cada total observado?',n=>n/2,'Invierte la probabilidad de inclusión.'],
    ['¿Qué total de ventas estima el diseño?',n=>40*n,'Expande la suma de los dos totales observados.']]);
  caso('sistematico',n=>'Un marco ordenado de '+(10*n)+' clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).',[
    ['¿Cuántos clientes entran en la muestra?',n=>n,'Divide el tamaño del marco por el salto.'],
    ['¿Qué posición ocupa la última selección?',n=>3+10*(n-1),'Suma al arranque el salto por el número de avances.'],
    ['¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?',n=>10,'Cada posición tiene probabilidad 1/10.']]);
  caso('bietapico',n=>'Se sortean 2 de '+n+' distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.',[
    ['¿Qué probabilidad tiene una tienda de entrar?',n=>1/n,'Multiplica las probabilidades de ambas etapas.'],
    ['¿Cuál es el peso de una tienda?',n=>n,'Invierte su probabilidad conjunta.'],
    ['¿Cuántas tiendas se observan en total?',n=>10,'Multiplica los distritos elegidos por las tiendas por distrito.']]);
  caso('cuotas',n=>'Un sondeo por cuotas fija '+(5*n)+' entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.',[
    ['¿Cuántas entrevistas de residentes fija la cuota?',n=>3*n,'Aplica el 60 % al objetivo total.'],
    ['¿Cuántas entrevistas corresponden a visitantes?',n=>2*n,'Resta las entrevistas de residentes.'],
    ['Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?',n=>3*n+3,'Suma las sustituciones a la cuota inicial.']]);
  caso('errores',n=>'Una encuesta invita a '+(10*n)+' personas; '+(8*n)+' responden y '+n+' de quienes responden omiten el gasto.',[
    ['¿Cuál es la tasa de respuesta en porcentaje?',n=>80,'Divide respondentes entre invitados.'],
    ['¿Cuántas respuestas de gasto son utilizables?',n=>7*n,'Descuenta la falta de respuesta al ítem.'],
    ['¿Qué porcentaje del total invitado aporta un gasto utilizable?',n=>70,'Usa el denominador de invitados.']]);
  caso('lineal',n=>'Una empresa maximiza 3x + 2y con x+y ≤ '+n+', x e y no negativas. Cada variable es una cantidad divisible.',[
    ['¿Qué beneficio se obtiene en el vértice (0, capacidad total)?',n=>2*n,'Sustituye x=0 e y=capacidad.'],
    ['¿Qué beneficio máximo es factible?',n=>3*n,'Dedica el recurso al mayor rendimiento unitario.'],
    ['¿En cuánto aumenta el óptimo con una unidad adicional de capacidad?',n=>3,'El precio sombra es el rendimiento de la actividad marginal.']]);
  caso('transporte',n=>'Dos almacenes deben enviar '+n+' cajas cada uno a dos destinos que demandan '+n+' cada uno. Costes unitarios por filas: (2,5) y (4,3).',[
    ['¿Cuánto cuesta enviar por las dos rutas diagonales?',n=>5*n,'Suma los costes diagonales por caja y multiplica por n.'],
    ['¿Cuánto cuesta el plan que usa las dos rutas cruzadas?',n=>9*n,'Suma los dos costes cruzados por caja.'],
    ['¿Qué ahorro aporta el plan óptimo frente al otro extremo?',n=>4*n,'En este problema lineal 2×2 los extremos son los dos planes puros.']]);
  caso('cuadratica',n=>'Una campaña distribuye un presupuesto '+(2*n)+' entre x e y, con x+y igual al presupuesto. Maximiza el impacto xy.',[
    ['¿Qué valor óptimo toma x?',n=>n,'Sustituye y por el presupuesto menos x y deriva.'],
    ['¿Cuál es el impacto máximo?',n=>n*n,'El máximo se alcanza con las dos asignaciones iguales.'],
    ['¿Cuánto impacto se pierde al pasar una unidad de x a y desde el óptimo?',n=>1,'Compara n² con (n−1)(n+1).']]);
  caso('desigualdad',n=>'Se maximiza '+(4*n)+'x − x², con 0 ≤ x ≤ '+n+'.',[
    ['¿Qué x maximizaría el objetivo sin cotas?',n=>2*n,'Anula la derivada.'],
    ['¿Qué x es el óptimo factible?',n=>n,'La función crece hasta la cota superior.'],
    ['¿Cuál es el valor marginal de relajar la cota superior en el óptimo?',n=>2*n,'Evalúa la derivada del objetivo en la cota activa.']]);
  caso('bigdata',n=>'Una tienda recibe '+n+' lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.',[
    ['¿Cuántos registros llegan al día?',n=>200*n,'Multiplica lotes por registros.'],
    ['¿Cuántos registros deben excluirse como duplicados?',n=>20*n,'Aplica la tasa de duplicación al total.'],
    ['¿Qué volumen queda tras la limpieza?',n=>180*n,'Conserva el 90 % del volumen inicial.']]);
  caso('clasificar',n=>'En validación separada, un clasificador produce '+(3*n)+' verdaderos positivos, '+n+' falsos positivos, '+(2*n)+' falsos negativos y '+(4*n)+' verdaderos negativos.',[
    ['¿Qué porcentaje de predicciones positivas es correcto?',n=>75,'Precisión = VP/(VP+FP).'],
    ['¿Cuál es la sensibilidad en porcentaje?',n=>60,'Sensibilidad = VP/(VP+FN).'],
    ['¿Cuántos errores hay en el conjunto de validación?',n=>3*n,'Suma falsos positivos y falsos negativos.']]);
  caso('software',n=>'Un archivo tiene '+(10*n)+' filas de clientes. Un filtro en R o Python selecciona '+(4*n)+' filas. Dentro de ellas, '+n+' carecen de importe.',[
    ['¿Cuántas filas devuelve el filtro antes de tratar ausencias?',n=>4*n,'Cuenta las filas que satisfacen el predicado.'],
    ['¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?',n=>3*n,'Descuenta los importes ausentes tras filtrar.'],
    ['Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?',n=>20,'Divide 60n entre 3n filas válidas.']]);
  caso('multi',n=>'Un análisis de componentes principales de tres variables tiene autovalores '+(3*n)+', '+(2*n)+' y '+n+'.',[
    ['¿Cuál es la varianza total?',n=>6*n,'Suma todos los autovalores.'],
    ['¿Qué porcentaje explica el primer componente?',n=>50,'Divide su autovalor por la suma y multiplica por cien.'],
    ['¿Qué porcentaje explican conjuntamente los dos primeros?',n=>100*5/6,'Suma sus autovalores y divide por la varianza total.']]);
  caso('actuarial',n=>'Una póliza paga '+(20*n)+' euros dentro de un año con probabilidad 0,10 y cero en otro caso. El factor de descuento anual es 0,95.',[
    ['¿Cuál es el pago esperado al vencimiento?',n=>2*n,'Multiplica el pago contingente por su probabilidad.'],
    ['¿Cuál es la prima pura única actual?',n=>1.9*n,'Descuenta el pago esperado.'],
    ['¿Qué prima resulta con un recargo del 20 % sobre la prima pura?',n=>2.28*n,'Multiplica la prima pura por 1,20.']]);
  caso('riesgo',n=>'Un riesgo de pérdida vale cero con probabilidad 0,75 y '+(4*n)+' con probabilidad 0,25.',[
    ['¿Cuál es la pérdida esperada?',n=>n,'Pondera las pérdidas por su probabilidad.'],
    ['¿Cuál es la varianza de la pérdida?',n=>3*n*n,'Calcula E(X²)−E(X)².'],
    ['¿Cuál es el cuantil 0,90 de la pérdida?',n=>4*n,'El acumulado en cero es 0,75 y aún no alcanza 0,90.']]);
  caso('valorar',n=>'Una cartera tiene pérdida esperada '+n+' y desviación típica '+(2*n)+'. Se aplica el principio de prima de desviación típica con carga 0,25.',[
    ['¿Qué recargo monetario se aplica?',n=>n/2,'Multiplica la desviación típica por la carga.'],
    ['¿Qué prima total resulta?',n=>1.5*n,'Suma pérdida esperada y recargo.'],
    ['Si se duplica la carga, ¿qué prima resulta?',n=>2*n,'Usa carga 0,50 sobre la desviación típica.']]);
  caso('normalbi',n=>'Un vector normal bivariante tiene medias 10 y 20, varianzas '+(4*n)+' y '+(9*n)+' y covarianza '+(3*n)+'.',[
    ['¿Cuál es su correlación?',n=>.5,'Divide la covarianza por el producto de desviaciones.'],
    ['¿Cuál es la media condicionada de Y si X = 14?',n=>23,'Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.'],
    ['¿Cuál es la varianza condicionada de Y dado X?',n=>6.75*n,'En la normal bivariante se multiplica Var(Y) por 1−ρ².']]);
  caso('gretl',n=>'La salida de Gretl muestra coeficiente '+(2*n)+', error estándar '+n+' y suma de cuadrados residual '+(8*n)+' con '+(2*n)+' grados de libertad.',[
    ['¿Cuál es el estadístico t frente a coeficiente cero?',n=>2,'Divide la estimación por su error estándar.'],
    ['¿Cuál es el cuadrado medio residual?',n=>4,'Divide la suma residual por sus grados de libertad.'],
    ['¿Qué error típico de la regresión corresponde a esa salida?',n=>2,'Toma la raíz del cuadrado medio residual.']]);
  caso('anova',n=>'Un ANOVA compara tres mercados con '+(3*n)+' observaciones. Las sumas de cuadrados entre y dentro de grupos son '+(8*n)+' y '+(6*n-6)+'.',[
    ['¿Cuál es el cuadrado medio entre grupos?',n=>4*n,'Divide la suma entre grupos por 3−1.'],
    ['¿Cuál es el cuadrado medio residual?',n=>2,'Los grados de libertad residuales son N−3.'],
    ['¿Qué valor toma el estadístico F?',n=>2*n,'Divide el cuadrado medio entre grupos por el residual.']]);
  caso('agrupacion',n=>'En una segmentación unidimensional por k-medias, un cliente tiene gasto '+n+' y los centroides están en '+(n-2)+' y '+(n+5)+'.',[
    ['¿Qué distancia absoluta hay al centroide más próximo?',n=>2,'Calcula las dos distancias y toma la menor.'],
    ['¿Qué contribución al error cuadrático aporta la asignación óptima?',n=>4,'Eleva al cuadrado la distancia al centroide asignado.'],
    ['¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor?',n=>n+2,'El nuevo centroide es la media de los dos gastos.']]);
  caso('signos',n=>'Para una prueba de signos con datos apareados, hay '+n+' diferencias positivas, 3 negativas y 2 empates.',[
    ['¿Cuántos pares entran en la prueba tras excluir empates?',n=>n+3,'Suma diferencias positivas y negativas.'],
    ['¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad?',n=>(n+3)/2,'Usa el tamaño efectivo por 0,5.'],
    ['¿Qué proporción observada de diferencias no nulas es positiva?',n=>n/(n+3),'Divide positivos entre pares sin empate.']]);
  caso('probit',n=>'Una salida probit da un índice latente de −1 y un coeficiente de '+n+' para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.',[
    ['¿Cuál es la probabilidad predicha inicialmente?',n=>.1587,'Aplica la distribución normal acumulada al índice.'],
    ['¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores?',n=>1/n,'Divide el incremento necesario del índice entre el coeficiente.'],
    ['¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero?',n=>.3413,'Resta ambas probabilidades predichas.']]);
  caso('logistica',n=>'Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/'+n+'.',[
    ['¿Qué estado predice la siguiente iteración?',n=>3/n*(1-1/n),'Sustituye el estado inicial en el mapa.'],
    ['¿Qué punto fijo positivo tiene el mapa?',n=>2/3,'Resuelve x = 3x(1−x) para x distinto de cero.'],
    ['¿Qué derivada tiene el mapa en ese punto fijo?',n=>-1,'Evalúa 3−6x en el punto fijo.']]);
  caso('regmuestra',n=>'En la muestra, las medias de Y y X son '+(2*n)+' y '+n+'. La media poblacional conocida de X es '+(n+2)+' y la pendiente estimada vale 3.',[
    ['¿Cuánto difiere la media auxiliar poblacional de la muestral?',n=>2,'Resta la media muestral de X a la poblacional.'],
    ['¿Qué corrección aplica el estimador de regresión a la media de Y?',n=>6,'Multiplica la diferencia auxiliar por la pendiente.'],
    ['¿Qué media de Y se estima por regresión?',n=>2*n+6,'Suma la corrección a la media muestral de Y.']]);
  caso('continuo',n=>'Una pérdida se distribuye uniformemente entre cero y '+(2*n)+' euros.',[
    ['¿Cuál es la pérdida media?',n=>n,'La media uniforme es el punto medio.'],
    ['¿Cuál es el cuantil 0,95?',n=>1.9*n,'Recorre el 95 % del intervalo desde cero.'],
    ['¿Cuál es la probabilidad de superar la mitad del máximo?',n=>.5,'La densidad es constante y la mitad superior ocupa medio intervalo.']]);
  caso('longitudinal',n=>'Un observatorio sigue los mismos '+n+' hoteles cada trimestre durante dos años y registra sus pernoctaciones.',[
    ['¿Cuántas unidades distintas se siguen?',n=>n,'La unidad es el hotel.'],
    ['¿Cuántos periodos se observan por unidad?',n=>8,'Cada año tiene cuatro trimestres.'],
    ['¿Cuántos registros hotel-trimestre tendrá el panel completo?',n=>8*n,'Multiplica unidades por periodos.']]);
  caso('medicion',n=>'En una encuesta de '+n+' comercios se registra el distrito, dos valoraciones ordinales y cuatro importes en euros.',[
    ['¿Cuántas variables cuantitativas se registran por comercio?',n=>4,'Los cuatro importes miden cantidades.'],
    ['¿Cuántos valores ordinales completa la muestra sin datos ausentes?',n=>2*n,'Cada unidad proporciona dos valoraciones ordenadas.'],
    ['¿Cuántos valores nominales de distrito se observan?',n=>n,'Cada registro contiene una categoría de distrito.']]);
  caso('cobertura',n=>'El marco contiene '+(6*n)+' fichas. Hay '+n+' fichas duplicadas que deben retirarse y otras '+n+' de fuera de la población. Estos conjuntos son disjuntos.',[
    ['¿Cuántas fichas quedan tras retirar solo los duplicados?',n=>5*n,'Resta al marco el número de fichas repetidas.'],
    ['¿Cuántas unidades válidas y distintas quedan?',n=>4*n,'Descuenta tanto duplicados como unidades ajenas.'],
    ['Si entrevistas al 25 % de las unidades válidas, ¿cuántas entran en la muestra?',n=>n,'Aplica la fracción de muestreo al marco depurado.']]);
  caso('libre',n=>'Para una inversión x se modela el rendimiento neto por '+(2*n)+'x − x². Se busca un máximo sin restricciones.',[
    ['¿En qué x se anula la derivada?',n=>n,'Iguala el rendimiento marginal a cero.'],
    ['¿Cuál es la segunda derivada?',n=>-2,'Deriva dos veces el polinomio.'],
    ['¿Cuál es el rendimiento máximo?',n=>n*n,'La función es estrictamente cóncava; sustituye el punto crítico.']]);
  return casos;
})();

# Sevilla en clave

[Jugar al escape room de estadística](https://teoriadejuego.github.io/escaperoom/)

Elige bloque y dificultad. En cada partida se sortea una historia y una pregunta por cada uno de los 18 apartados del bloque. Los tres objetos de cada parada revelan una combinación. Si te equivocas al responder o al abrir la cerradura, repites las tres pistas de la parada actual y puedes consultar las pistas. Después de la sexta cerradura aparece la palabra de la historia.

## Programas de asignatura

Consulta el [índice de las 31 asignaturas e itinerarios](profesorado/programas.html) con sus bloques en orden y el enlace al programa US de 2026–27. Turismo separa conceptos básicos, análisis unidimensional, análisis bidimensional y números índices. Estadística I de Finanzas añade probabilidad. Las asignaturas de inferencia, muestreo, econometría y programación matemática disponen de sus propias rutas. Cada bloque incluye 18 apartados y dos dificultades. Los enlaces prescritos para Turismo con bloque=b2 conservan el contenido de análisis bidimensional.

La primera pregunta permite añadir el correo universitario al cuaderno descargable. La partida funciona en el navegador. Para entregar el cuaderno, el estudiante debe descargarlo y presentarlo por el canal indicado por su docente. La palabra final identifica la historia completada. El correo escrito por el jugador carece de verificación de identidad.

## Actualizar contenidos

1. Descarga el repositorio y descomprímelo. Abre **editar.html** en tu navegador. También puedes [abrir el editor en línea](https://teoriadejuego.github.io/escaperoom/editar.html).
2. Para editar una pregunta, selecciona asignatura, bloque, apartado, dificultad y variante. Escribe tres respuestas diferentes, marca la correcta del 1 al 3 y añade una pista y una explicación. Para ampliar el banco, pulsa **Añadir una variante de esta pregunta**.
3. Para cambiar una historia, elige su nombre y la escena. Puedes modificar los textos, objetos, transición y palabra final. Para sustituir un dibujo, copia la nueva imagen dentro de **assets** e indica su nombre o su ruta dentro de esa carpeta.
4. Pulsa **Guardar cambios en esta sesión** después de cada edición. Al terminar con un tipo de contenido, pulsa **Descargar archivo actualizado** y reemplaza el archivo de igual nombre dentro de **data/planes** para las preguntas o **data** para las historias. Conserva una copia anterior si quieres deshacer una edición.
5. Abre **index.html** localmente para probar el resultado. Para publicarlo, sube los archivos de datos e imágenes modificados a la rama **main** del repositorio que sirve GitHub Pages.

Cada banco contiene 18 apartados ordenados. Los tres primeros corresponden a los objetos de la primera parada y así sucesivamente. Cada apartado admite cualquier número positivo de variantes por dificultad. Las imágenes y los nombres de los objetos pertenecen a las historias. Las soluciones y las ayudas pertenecen a los bancos.

El archivo **PROMPT_PROYECTO.md** contiene el encargo reutilizable para coordinar cambios con agentes.

## Comprobar un código de finalización

Abre el [validador docente](https://teoriadejuego.github.io/escaperoom/validar.html) y pega el código. Tras la sexta cerradura el juego genera un código por partida que también aparece en el cuaderno final. Tras @ van el número aleatorio de cuatro cifras, su cociente entero entre siete con cuatro posiciones, la dificultad (0 fácil, 1 difícil), los minutos completos con dos posiciones y los campos de personaje o dato opcional, reintentos, ayudas y grupo TR o CO. El tiempo empieza al abrir la aventura e incluye los reintentos. 99 representa 99 minutos o más. El control es local y comprueba coherencia. La aleatoriedad reduce las coincidencias, pero no garantiza unicidad global ni autoría.

## Catálogo de asignaturas del departamento

El juego y el editor leen el mismo catálogo, **data/asignaturas.js**. Cada entrada identifica la asignatura, la titulación, su fuente y el banco que utiliza. El catálogo reúne docencia de grado de estadística, econometría y técnicas cuantitativas aplicadas, incluidas las variantes de plan e idioma. Se contrastó el [directorio de Economía Aplicada I](https://departamento.us.es/deconapli1/asignaturas/) con el documento Horarios 2026-27.pdf de la Facultad de Ciencias Económicas y Empresariales. El campo paginaHorario indica la página del PDF cuando se localizó el código. La inclusión de una optativa en el catálogo no certifica la apertura de un grupo ese curso.

Para mantener la estructura curricular, modifica **data/programas.js** y las familias de ejercicios de **data/casos-curriculares.js**. El comando `node profesorado/compilar-programas.cjs` reconstruye los bancos publicados en **data/planes** a partir de esas fuentes y de los bancos descriptivos. La reconstrucción reemplaza los bancos derivados; conserva las ediciones manuales del editor antes de regenerarlos.

## Escenarios experimentales

[TR · Aventura](https://teoriadejuego.github.io/escaperoom/) y [CO · Cuestionario](https://teoriadejuego.github.io/escaperoom/control.html) ofrecen 18 preguntas por partida. El control admite una respuesta por ítem, con el resultado al final (10 × aciertos / 18). Ambas URL admiten el parámetro asignatura. Los códigos previos se validan sin atribución de grupo. El profesor distribuye los enlaces según su lista de asignación. [Prompt de diseño y prerregistro](PROMPT_ESTUDIO_CONTROL.md).

El código incorpora los contadores de la pantalla final antes de CO o TR. Por ejemplo, R2A1 indica dos reinicios del hito y una ayuda consultada. En CO se registra R0A0 por diseño. En códigos anteriores el validador indica que esos datos no se registraron.
TR conserva seis personajes y las etiquetas P1 a P6. CO pregunta de forma voluntaria por el sexo asignado al nacer. Solo si se marca la autorización se añade SH, SM o SO al código de CO (Hombre, Mujer u Otro). Con la autorización desmarcada o sin respuesta se omite la etiqueta. El validador conserva los formatos históricos, incluidos los antiguos personajes CO.
La actividad de creación se distribuye desde [Alumnado](alumnado/). Para el experimento y la revisión de entregas, consulta [Recursos del profesorado](profesorado/).

# Sevilla en clave

[Jugar al escape room de estadística](https://teoriadejuego.github.io/escaperoom/)

Elige bloque y dificultad. En cada partida se sortea una historia y una pregunta por cada uno de los 18 apartados del bloque. Los tres objetos de cada parada revelan una combinación. Si te equivocas al responder o al abrir la cerradura, repites las tres pistas de la parada actual y puedes consultar las pistas. Después de la sexta cerradura aparece la palabra de la historia.

La versión de Turismo sigue el programa de Estadística de Turismo del curso 2026–27. El bloque 1 cubre conceptos, frecuencias, localización y dispersión. El bloque 2 trabaja distribuciones bidimensionales, correlación y regresión. El bloque 3 se dedica a números índices de valor, precios y cantidades. Los casos turísticos emplean datos didácticos.

## Economía y Finanzas y Contabilidad

Puedes compartir el [acceso para Economía](https://teoriadejuego.github.io/escaperoom/?asignatura=economia) o el [acceso para Finanzas y Contabilidad](https://teoriadejuego.github.io/escaperoom/?asignatura=finanzas) con tu clase. Cada asignatura tiene preguntas propias y ofrece un recorrido exclusivo de probabilidad además de los tres recorridos de repaso.

| Recorrido | Temas | Contenido |
|---|---|---|
| Descripción de una característica | 1 a 5 | Conceptos, distribuciones de frecuencias, localización, dispersión, forma y desigualdad |
| Análisis de dos características | 6 a 8 | Distribuciones conjuntas, correlación y regresión |
| Índices y probabilidad | 9 y 10 | Comparaciones de precios, cantidades y valor, sucesos y probabilidad condicionada |
| Probabilidad | 10 | Seis hitos dedicados a sucesos, condicionamiento, independencia, muestreo, probabilidad total y Bayes |

Para Economía se consultó el programa de Estadística 1560001 del curso 2026–27 y los materiales revisados de los grupos 1 y 4. Para Finanzas se tomó el programa local de Estadística I 1610015 y el proyecto docente del grupo 3 de 2025–26. El proyecto local del doble grado en Finanzas y Contabilidad y Relaciones Laborales y Recursos Humanos (2200022) recoge la misma relación de diez temas. Los recorridos son una agrupación para la actividad.

La primera pregunta permite añadir el correo universitario al cuaderno descargable. La partida funciona en el navegador. Para entregar el cuaderno, el estudiante debe descargarlo y presentarlo por el canal indicado por su docente. La palabra final identifica la historia completada. El correo escrito por el jugador carece de verificación de identidad.

## Actualizar contenidos

1. Descarga el repositorio y descomprímelo. Abre **editar.html** en tu navegador. También puedes [abrir el editor en línea](https://teoriadejuego.github.io/escaperoom/editar.html).
2. Para editar una pregunta, selecciona asignatura, bloque, apartado, dificultad y variante. Escribe tres respuestas diferentes, marca la correcta del 1 al 3 y añade una pista y una explicación. Para ampliar el banco, pulsa **Añadir una variante de esta pregunta**.
3. Para cambiar una historia, elige su nombre y la escena. Puedes modificar los textos, objetos, transición y palabra final. Para sustituir un dibujo, copia la nueva imagen dentro de **assets** e indica su nombre o su ruta dentro de esa carpeta.
4. Pulsa **Guardar cambios en esta sesión** después de cada edición. Al terminar con un tipo de contenido, pulsa **Descargar archivo actualizado** y reemplaza el archivo de igual nombre dentro de **data**. Conserva una copia anterior si quieres deshacer una edición.
5. Abre **index.html** localmente para probar el resultado. Para publicarlo, sube los archivos de datos e imágenes modificados a la rama **main** del repositorio que sirve GitHub Pages.

Cada banco contiene 18 apartados ordenados. Los tres primeros corresponden a los objetos de la primera parada y así sucesivamente. Cada apartado admite cualquier número positivo de variantes por dificultad. Las imágenes y los nombres de los objetos pertenecen a las historias. Las soluciones y las ayudas pertenecen a los bancos.

El archivo **PROMPT_PROYECTO.md** contiene el encargo reutilizable para coordinar cambios con agentes.

## Comprobar un código de finalización

Abre el [validador docente](https://teoriadejuego.github.io/escaperoom/validar.html) y pega el código. Tras la sexta cerradura el juego genera un código por partida que también aparece en el cuaderno final. Tras @ van el número aleatorio de cuatro cifras, su cociente entero entre siete con cuatro posiciones, la dificultad (0 fácil, 1 difícil), los minutos completos con dos posiciones y una serie aleatoria hexadecimal seguida del grupo TR o CO. El tiempo empieza al abrir la aventura e incluye los reintentos. 99 representa 99 minutos o más. El control es local y comprueba coherencia. La aleatoriedad reduce las coincidencias, pero no garantiza unicidad global ni autoría.

## Catálogo de asignaturas del departamento

El juego y el editor leen el mismo catálogo, **data/asignaturas.js**. Cada entrada identifica la asignatura, la titulación, su fuente y el banco que utiliza. El catálogo reúne docencia de grado de estadística, econometría y técnicas cuantitativas aplicadas, incluidas las variantes de plan e idioma. Se contrastó el [directorio de Economía Aplicada I](https://departamento.us.es/deconapli1/asignaturas/) con el documento Horarios 2026-27.pdf de la Facultad de Ciencias Económicas y Empresariales. El campo paginaHorario indica la página del PDF cuando se localizó el código. La inclusión de una optativa en el catálogo no certifica la apertura de un grupo ese curso.

Cuando provisional es verdadero se utiliza el banco común de Estadística I de Finanzas y Contabilidad. El estudiante ve la asignatura elegida en la partida y en su cuaderno. Para independizar un banco, añade su archivo a index.html y editar.html y actualiza global, archivo y provisional en la entrada del catálogo.

## Escenarios experimentales

[TR · Aventura](https://teoriadejuego.github.io/escaperoom/) y [CO · Cuestionario](https://teoriadejuego.github.io/escaperoom/control.html) ofrecen 18 preguntas por partida. El control admite una respuesta por ítem, con el resultado al final (10 × aciertos / 18). Ambas URL admiten el parámetro asignatura. Los códigos previos se validan sin atribución de grupo. El profesor distribuye los enlaces según su lista de asignación. [Prompt de diseño y prerregistro](PROMPT_ESTUDIO_CONTROL.md).

El código incorpora los contadores de la pantalla final antes de CO o TR. Por ejemplo, R2A1 indica dos reinicios del hito y una ayuda consultada. En CO se registra R0A0 por diseño. En códigos anteriores el validador indica que esos datos no se registraron.
En la primera pantalla se elige uno de seis personajes. En los códigos nuevos, P1 a P6 identifica la elección y el validador muestra el nombre. Las partidas anteriores aparecen como personaje sin registrar.

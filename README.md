# Escaperoom · Antes de contar

Un escape room de estadística por Sevilla. Ejemplo docente abierto del **tema 1** en un contexto ficticio de turismo, adaptado del proyecto original en R Shiny.

## Jugar

Sitio público: **https://teoriadejuego.github.io/escaperoom/**

Abre `index.html` directamente en un navegador moderno, o ejecuta `python -m http.server 8000` en esta carpeta y visita `http://localhost:8000`. No requiere R, cuentas ni servicios externos para ejecutar el juego.

## Recorrido

El Salvador → Ayuntamiento → Giralda → Real Alcázar → Archivo de Indias → Torre del Oro.

Cada escenario incluye tres objetos con problemas conceptuales. Sus respuestas correctas revelan un código de tres cifras. Introduce el código en la cerradura para avanzar. Las alternativas se barajan y los códigos cambian en cada partida. Un error de respuesta o de combinación devuelve al escenario anterior e invalida sus pistas y las posteriores. No hay cronómetro ni límite de intentos; las ayudas están disponibles antes de responder.

Al completar las seis cerraduras aparece la palabra narrativa **AZAHAR** y puedes descargar el cuaderno de la sesión. Recargar la página comienza otra partida; el cuaderno descargado no restaura el progreso.

## Alcance docente

Se trabajan pregunta y fuentes, población/muestra/unidad, tipos de variables, escalas, parámetro/estadístico y estructuras de datos. Se conservan los 18 casos del ejemplo original; esta demo **no implementa todavía** el formato del concurso de tres pruebas con diez alternativas.

Es una demostración pública, no una prueba de evaluación cerrada. Las respuestas y validaciones se ejecutan en el navegador y son inspeccionables. La palabra final y el cuaderno no acreditan identidad ni aprendizaje autónomo. No se solicitan correos ni se envían resultados al profesorado. La partida permanece en memoria de la pestaña. GitHub, como proveedor de alojamiento, puede registrar información técnica de acceso conforme a su política de privacidad.

## Archivos

- `index.html`: portada y contenedor accesible.
- `assets/chapters.js`: contenidos originales adaptados de `R/content.R`.
- `assets/app.js`: juego, cerraduras, retrocesos y descarga del cuaderno.
- `assets/style.css` y `assets/web.css`: diseño y adaptación móvil.
- `assets/*.png`: ilustraciones artísticas generadas para este proyecto, con posibles licencias arquitectónicas.

## Publicación

GitHub Pages publica la rama `main`, carpeta raíz. `.nojekyll` mantiene los archivos estáticos sin procesamiento. La app original en R Shiny permanece en el proyecto local y no se modifica con esta adaptación.

window.PLAN_1800053 = [
{
  "id": "1800053-1",
  "nombre": "Bloque 1 · Generalidades: SPSS, exploración e inferencia",
  "apartados": [
    {
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 50 filas de clientes. Un filtro en R o Python selecciona 20 filas. Dentro de ellas, 5 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 70 filas de clientes. Un filtro en R o Python selecciona 28 filas. Dentro de ellas, 7 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "24",
            "28"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 28."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 60 filas de clientes. Un filtro en R o Python selecciona 24 filas. Dentro de ellas, 6 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 18",
            "28 / 18",
            "24 / 22"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 24. Descuenta los importes ausentes tras filtrar. Segundo resultado: 18."
        },
        {
          "story": "Un archivo tiene 80 filas de clientes. Un filtro en R o Python selecciona 32 filas. Dentro de ellas, 8 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 24",
            "32 / 29",
            "32 / 24"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 32. Descuenta los importes ausentes tras filtrar. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 50 filas de clientes. Un filtro en R o Python selecciona 20 filas. Dentro de ellas, 5 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 15."
        },
        {
          "story": "Un archivo tiene 70 filas de clientes. Un filtro en R o Python selecciona 28 filas. Dentro de ellas, 7 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "24"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 60 filas de clientes. Un filtro en R o Python selecciona 24 filas. Dentro de ellas, 6 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 20",
            "18 / 23",
            "18 / 20"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 18. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 80 filas de clientes. Un filtro en R o Python selecciona 32 filas. Dentro de ellas, 8 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 24",
            "24 / 20",
            "28 / 20"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 24. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 50 filas de clientes. Un filtro en R o Python selecciona 20 filas. Dentro de ellas, 5 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "23"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 70 filas de clientes. Un filtro en R o Python selecciona 28 filas. Dentro de ellas, 7 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 60 filas de clientes. Un filtro en R o Python selecciona 24 filas. Dentro de ellas, 6 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 27",
            "20 / 24",
            "23 / 24"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 24."
        },
        {
          "story": "Un archivo tiene 80 filas de clientes. Un filtro en R o Python selecciona 32 filas. Dentro de ellas, 8 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 32",
            "23 / 32",
            "20 / 35"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el error estándar de la media?",
      "facil": [
        {
          "story": "Se toman 81 mediciones independientes de una población con desviación típica conocida 18. La media muestral es 36. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        },
        {
          "story": "Se toman 121 mediciones independientes de una población con desviación típica conocida 22. La media muestral es 44. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 100 mediciones independientes de una población con desviación típica conocida 20. La media muestral es 40. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 3,92",
            "2 / 4,92",
            "2 / 3,92"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        },
        {
          "story": "Se toman 144 mediciones independientes de una población con desviación típica conocida 24. La media muestral es 48. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4,92",
            "2 / 3,92",
            "3 / 3,92"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el margen de error del intervalo normal del 95 %?",
      "facil": [
        {
          "story": "Se toman 81 mediciones independientes de una población con desviación típica conocida 18. La media muestral es 36. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,332",
            "3,92",
            "4,508"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        },
        {
          "story": "Se toman 121 mediciones independientes de una población con desviación típica conocida 22. La media muestral es 44. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92",
            "4,508",
            "3,332"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 100 mediciones independientes de una población con desviación típica conocida 20. La media muestral es 40. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 36,668",
            "3,92 / 36,08",
            "4,508 / 36,08"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 36,08."
        },
        {
          "story": "Se toman 144 mediciones independientes de una población con desviación típica conocida 24. La media muestral es 48. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 44,08",
            "4,508 / 44,08",
            "3,92 / 44,668"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 44,08."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el extremo inferior del intervalo?",
      "facil": [
        {
          "story": "Se toman 81 mediciones independientes de una población con desviación típica conocida 18. La media muestral es 36. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32,08",
            "36,892",
            "27,268"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 32,08."
        },
        {
          "story": "Se toman 121 mediciones independientes de una población con desviación típica conocida 22. La media muestral es 44. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46,092",
            "34,068",
            "40,08"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 40,08."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 100 mediciones independientes de una población con desviación típica conocida 20. La media muestral es 40. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "36,08 / 2",
            "41,492 / 2",
            "36,08 / 7,412"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 36,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        },
        {
          "story": "Se toman 144 mediciones independientes de una población con desviación típica conocida 24. La media muestral es 48. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50,692 / 2",
            "44,08 / 8,612",
            "44,08 / 2"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 44,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 39 frente a una alternativa bilateral. La estimación es 43 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 45 frente a una alternativa bilateral. La estimación es 49 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 42 frente a una alternativa bilateral. La estimación es 46 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 48 frente a una alternativa bilateral. La estimación es 52 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 39 frente a una alternativa bilateral. La estimación es 43 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 45 frente a una alternativa bilateral. La estimación es 49 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 42 frente a una alternativa bilateral. La estimación es 46 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 0,04",
            "5 / 0,04",
            "4 / 1,04"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 48 frente a una alternativa bilateral. La estimación es 52 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 0,04",
            "4 / 1,04",
            "4 / 0,04"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 39 frente a una alternativa bilateral. La estimación es 43 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09",
            "-0,01",
            "0,04"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 45 frente a una alternativa bilateral. La estimación es 49 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 42 frente a una alternativa bilateral. La estimación es 46 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09 / 2",
            "0,04 / 2,05",
            "0,04 / 2"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 48 frente a una alternativa bilateral. La estimación es 52 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2,05",
            "0,04 / 2",
            "0,09 / 2"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 170 filas de clientes. Un filtro en R o Python selecciona 68 filas. Dentro de ellas, 17 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "78",
            "58"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 68."
        },
        {
          "story": "Un archivo tiene 190 filas de clientes. Un filtro en R o Python selecciona 76 filas. Dentro de ellas, 19 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "87",
            "65",
            "76"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 76."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 180 filas de clientes. Un filtro en R o Python selecciona 72 filas. Dentro de ellas, 18 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 54",
            "83 / 54",
            "72 / 65"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 72. Descuenta los importes ausentes tras filtrar. Segundo resultado: 54."
        },
        {
          "story": "Un archivo tiene 200 filas de clientes. Un filtro en R o Python selecciona 80 filas. Dentro de ellas, 20 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 60",
            "80 / 72",
            "80 / 60"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 80. Descuenta los importes ausentes tras filtrar. Segundo resultado: 60."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 170 filas de clientes. Un filtro en R o Python selecciona 68 filas. Dentro de ellas, 17 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "43",
            "51"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 51."
        },
        {
          "story": "Un archivo tiene 190 filas de clientes. Un filtro en R o Python selecciona 76 filas. Dentro de ellas, 19 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48",
            "57",
            "66"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 57."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 180 filas de clientes. Un filtro en R o Python selecciona 72 filas. Dentro de ellas, 18 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "62 / 20",
            "54 / 28",
            "54 / 20"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 54. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 200 filas de clientes. Un filtro en R o Python selecciona 80 filas. Dentro de ellas, 20 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 29",
            "60 / 20",
            "69 / 20"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 60. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 170 filas de clientes. Un filtro en R o Python selecciona 68 filas. Dentro de ellas, 17 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "23"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 190 filas de clientes. Un filtro en R o Python selecciona 76 filas. Dentro de ellas, 19 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 180 filas de clientes. Un filtro en R o Python selecciona 72 filas. Dentro de ellas, 18 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 75",
            "20 / 72",
            "23 / 72"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 72."
        },
        {
          "story": "Un archivo tiene 200 filas de clientes. Un filtro en R o Python selecciona 80 filas. Dentro de ellas, 20 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 80",
            "23 / 80",
            "20 / 83"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el error estándar de la media?",
      "facil": [
        {
          "story": "Se toman 441 mediciones independientes de una población con desviación típica conocida 42. La media muestral es 84. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        },
        {
          "story": "Se toman 529 mediciones independientes de una población con desviación típica conocida 46. La media muestral es 92. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 484 mediciones independientes de una población con desviación típica conocida 44. La media muestral es 88. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 3,92",
            "2 / 4,92",
            "2 / 3,92"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        },
        {
          "story": "Se toman 576 mediciones independientes de una población con desviación típica conocida 48. La media muestral es 96. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4,92",
            "2 / 3,92",
            "3 / 3,92"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el margen de error del intervalo normal del 95 %?",
      "facil": [
        {
          "story": "Se toman 441 mediciones independientes de una población con desviación típica conocida 42. La media muestral es 84. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,332",
            "3,92",
            "4,508"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        },
        {
          "story": "Se toman 529 mediciones independientes de una población con desviación típica conocida 46. La media muestral es 92. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92",
            "4,508",
            "3,332"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 484 mediciones independientes de una población con desviación típica conocida 44. La media muestral es 88. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 84,668",
            "3,92 / 84,08",
            "4,508 / 84,08"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 84,08."
        },
        {
          "story": "Se toman 576 mediciones independientes de una población con desviación típica conocida 48. La media muestral es 96. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 92,08",
            "4,508 / 92,08",
            "3,92 / 92,668"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 92,08."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el extremo inferior del intervalo?",
      "facil": [
        {
          "story": "Se toman 441 mediciones independientes de una población con desviación típica conocida 42. La media muestral es 84. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80,08",
            "92,092",
            "68,068"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 80,08."
        },
        {
          "story": "Se toman 529 mediciones independientes de una población con desviación típica conocida 46. La media muestral es 92. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "101,292",
            "74,868",
            "88,08"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 88,08."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 484 mediciones independientes de una población con desviación típica conocida 44. La media muestral es 88. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84,08 / 2",
            "96,692 / 2",
            "84,08 / 14,612"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 84,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        },
        {
          "story": "Se toman 576 mediciones independientes de una población con desviación típica conocida 48. La media muestral es 96. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "105,892 / 2",
            "92,08 / 15,812",
            "92,08 / 2"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 92,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 75 frente a una alternativa bilateral. La estimación es 79 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 81 frente a una alternativa bilateral. La estimación es 85 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 78 frente a una alternativa bilateral. La estimación es 82 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 84 frente a una alternativa bilateral. La estimación es 88 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 75 frente a una alternativa bilateral. La estimación es 79 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 81 frente a una alternativa bilateral. La estimación es 85 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 78 frente a una alternativa bilateral. La estimación es 82 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 0,04",
            "5 / 0,04",
            "4 / 1,04"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 84 frente a una alternativa bilateral. La estimación es 88 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 0,04",
            "4 / 1,04",
            "4 / 0,04"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 75 frente a una alternativa bilateral. La estimación es 79 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09",
            "-0,01",
            "0,04"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 81 frente a una alternativa bilateral. La estimación es 85 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 78 frente a una alternativa bilateral. La estimación es 82 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09 / 2",
            "0,04 / 2,05",
            "0,04 / 2"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 84 frente a una alternativa bilateral. La estimación es 88 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2,05",
            "0,04 / 2",
            "0,09 / 2"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        }
      ]
    }
  ]
},
{
  "id": "1800053-2",
  "nombre": "Bloque 2 · Métodos estadísticos multivariantes",
  "apartados": [
    {
      "nombre": "¿Cuál es el cuadrado medio entre grupos?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 15 observaciones. Las sumas de cuadrados entre y dentro de grupos son 40 y 24.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 20."
        },
        {
          "story": "Un ANOVA compara tres mercados con 21 observaciones. Las sumas de cuadrados entre y dentro de grupos son 56 y 36.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "24",
            "28"
          ],
          "answer": 3,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 28."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 18 observaciones. Las sumas de cuadrados entre y dentro de grupos son 48 y 30.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 2",
            "28 / 2",
            "24 / 6"
          ],
          "answer": 1,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 24. Los grados de libertad residuales son N−3. Segundo resultado: 2."
        },
        {
          "story": "Un ANOVA compara tres mercados con 24 observaciones. Las sumas de cuadrados entre y dentro de grupos son 64 y 42.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 2",
            "32 / 7",
            "32 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 32. Los grados de libertad residuales son N−3. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 15 observaciones. Las sumas de cuadrados entre y dentro de grupos son 40 y 24.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2."
        },
        {
          "story": "Un ANOVA compara tres mercados con 21 observaciones. Las sumas de cuadrados entre y dentro de grupos son 56 y 36.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 18 observaciones. Las sumas de cuadrados entre y dentro de grupos son 48 y 30.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué valor toma el estadístico F? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 12",
            "2 / 13",
            "2 / 12"
          ],
          "answer": 3,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2. Divide el cuadrado medio entre grupos por el residual. Segundo resultado: 12."
        },
        {
          "story": "Un ANOVA compara tres mercados con 24 observaciones. Las sumas de cuadrados entre y dentro de grupos son 64 y 42.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué valor toma el estadístico F? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 17",
            "2 / 16",
            "3 / 16"
          ],
          "answer": 2,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2. Divide el cuadrado medio entre grupos por el residual. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué valor toma el estadístico F?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 15 observaciones. Las sumas de cuadrados entre y dentro de grupos son 40 y 24.",
          "prompt": "¿Qué valor toma el estadístico F? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 10."
        },
        {
          "story": "Un ANOVA compara tres mercados con 21 observaciones. Las sumas de cuadrados entre y dentro de grupos son 56 y 36.",
          "prompt": "¿Qué valor toma el estadístico F? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "12"
          ],
          "answer": 1,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 18 observaciones. Las sumas de cuadrados entre y dentro de grupos son 48 y 30.",
          "prompt": "¿Qué valor toma el estadístico F? ¿Cuál es el cuadrado medio entre grupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 26",
            "12 / 24",
            "14 / 24"
          ],
          "answer": 2,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 12. Divide la suma entre grupos por 3−1. Segundo resultado: 24."
        },
        {
          "story": "Un ANOVA compara tres mercados con 24 observaciones. Las sumas de cuadrados entre y dentro de grupos son 64 y 42.",
          "prompt": "¿Qué valor toma el estadístico F? ¿Cuál es el cuadrado medio entre grupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 32",
            "18 / 32",
            "16 / 34"
          ],
          "answer": 1,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 16. Divide la suma entre grupos por 3−1. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Qué distancia absoluta hay al centroide más próximo?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 9 y los centroides están en 7 y 14.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 11 y los centroides están en 9 y 16.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 10 y los centroides están en 8 y 15.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 12 y los centroides están en 10 y 17.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Qué contribución al error cuadrático aporta la asignación óptima?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 9 y los centroides están en 7 y 14.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 11 y los centroides están en 9 y 16.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 10 y los centroides están en 8 y 15.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 13",
            "4 / 12",
            "5 / 12"
          ],
          "answer": 2,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 12."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 12 y los centroides están en 10 y 17.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 14",
            "5 / 14",
            "4 / 15"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 14."
        }
      ]
    },
    {
      "nombre": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 9 y los centroides están en 7 y 14.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "9"
          ],
          "answer": 1,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 11."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 11 y los centroides están en 9 y 16.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 10 y los centroides están en 8 y 15.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 2",
            "14 / 2",
            "12 / 4"
          ],
          "answer": 1,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 12. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 12 y los centroides están en 10 y 17.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 2",
            "14 / 4",
            "14 / 2"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 14. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza total?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 39, 26 y 13.",
          "prompt": "¿Cuál es la varianza total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "66",
            "78",
            "90"
          ],
          "answer": 2,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 78."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 45, 30 y 15.",
          "prompt": "¿Cuál es la varianza total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "90",
            "104",
            "76"
          ],
          "answer": 1,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 90."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 42, 28 y 14.",
          "prompt": "¿Cuál es la varianza total? ¿Qué porcentaje explica el primer componente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84 / 63",
            "84 / 50",
            "97 / 50"
          ],
          "answer": 2,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 84. Divide su autovalor por la suma y multiplica por cien. Segundo resultado: 50."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 48, 32 y 16.",
          "prompt": "¿Cuál es la varianza total? ¿Qué porcentaje explica el primer componente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "96 / 50",
            "110 / 50",
            "96 / 64"
          ],
          "answer": 1,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 96. Divide su autovalor por la suma y multiplica por cien. Segundo resultado: 50."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje explica el primer componente?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 39, 26 y 13.",
          "prompt": "¿Qué porcentaje explica el primer componente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "50",
            "58",
            "42"
          ],
          "answer": 1,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 45, 30 y 15.",
          "prompt": "¿Qué porcentaje explica el primer componente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "58",
            "42",
            "50"
          ],
          "answer": 3,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 42, 28 y 14.",
          "prompt": "¿Qué porcentaje explica el primer componente? ¿Qué porcentaje explican conjuntamente los dos primeros? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 83,3333",
            "58 / 83,3333",
            "50 / 91,3333"
          ],
          "answer": 1,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50. Suma sus autovalores y divide por la varianza total. Segundo resultado: 83,3333."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 48, 32 y 16.",
          "prompt": "¿Qué porcentaje explica el primer componente? ¿Qué porcentaje explican conjuntamente los dos primeros? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "58 / 83,3333",
            "50 / 91,3333",
            "50 / 83,3333"
          ],
          "answer": 3,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50. Suma sus autovalores y divide por la varianza total. Segundo resultado: 83,3333."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje explican conjuntamente los dos primeros?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 39, 26 y 13.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? Redondea a cuatro decimales si es necesario.",
          "options": [
            "95,8333",
            "70,8333",
            "83,3333"
          ],
          "answer": 3,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 45, 30 y 15.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70,8333",
            "83,3333",
            "95,8333"
          ],
          "answer": 2,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 42, 28 y 14.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? ¿Cuál es la varianza total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "95,8333 / 84",
            "83,3333 / 96,5",
            "83,3333 / 84"
          ],
          "answer": 3,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333. Suma todos los autovalores. Segundo resultado: 84."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 48, 32 y 16.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? ¿Cuál es la varianza total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "83,3333 / 108,5",
            "83,3333 / 96",
            "95,8333 / 96"
          ],
          "answer": 2,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333. Suma todos los autovalores. Segundo resultado: 96."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio entre grupos?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 51 observaciones. Las sumas de cuadrados entre y dentro de grupos son 136 y 96.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "78",
            "58"
          ],
          "answer": 1,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 68."
        },
        {
          "story": "Un ANOVA compara tres mercados con 57 observaciones. Las sumas de cuadrados entre y dentro de grupos son 152 y 108.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "87",
            "65",
            "76"
          ],
          "answer": 3,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 76."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 54 observaciones. Las sumas de cuadrados entre y dentro de grupos son 144 y 102.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 2",
            "83 / 2",
            "72 / 13"
          ],
          "answer": 1,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 72. Los grados de libertad residuales son N−3. Segundo resultado: 2."
        },
        {
          "story": "Un ANOVA compara tres mercados con 60 observaciones. Las sumas de cuadrados entre y dentro de grupos son 160 y 114.",
          "prompt": "¿Cuál es el cuadrado medio entre grupos? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 2",
            "80 / 14",
            "80 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma entre grupos por 3−1.",
          "explanation": "Divide la suma entre grupos por 3−1. Resultado: 80. Los grados de libertad residuales son N−3. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 51 observaciones. Las sumas de cuadrados entre y dentro de grupos son 136 y 96.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2."
        },
        {
          "story": "Un ANOVA compara tres mercados con 57 observaciones. Las sumas de cuadrados entre y dentro de grupos son 152 y 108.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 54 observaciones. Las sumas de cuadrados entre y dentro de grupos son 144 y 102.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué valor toma el estadístico F? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 36",
            "2 / 37",
            "2 / 36"
          ],
          "answer": 3,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2. Divide el cuadrado medio entre grupos por el residual. Segundo resultado: 36."
        },
        {
          "story": "Un ANOVA compara tres mercados con 60 observaciones. Las sumas de cuadrados entre y dentro de grupos son 160 y 114.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué valor toma el estadístico F? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 41",
            "2 / 40",
            "3 / 40"
          ],
          "answer": 2,
          "hint": "Los grados de libertad residuales son N−3.",
          "explanation": "Los grados de libertad residuales son N−3. Resultado: 2. Divide el cuadrado medio entre grupos por el residual. Segundo resultado: 40."
        }
      ]
    },
    {
      "nombre": "¿Qué valor toma el estadístico F?",
      "facil": [
        {
          "story": "Un ANOVA compara tres mercados con 51 observaciones. Las sumas de cuadrados entre y dentro de grupos son 136 y 96.",
          "prompt": "¿Qué valor toma el estadístico F? Redondea a cuatro decimales si es necesario.",
          "options": [
            "29",
            "34",
            "39"
          ],
          "answer": 2,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 34."
        },
        {
          "story": "Un ANOVA compara tres mercados con 57 observaciones. Las sumas de cuadrados entre y dentro de grupos son 152 y 108.",
          "prompt": "¿Qué valor toma el estadístico F? Redondea a cuatro decimales si es necesario.",
          "options": [
            "38",
            "44",
            "32"
          ],
          "answer": 1,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 38."
        }
      ],
      "dificil": [
        {
          "story": "Un ANOVA compara tres mercados con 54 observaciones. Las sumas de cuadrados entre y dentro de grupos son 144 y 102.",
          "prompt": "¿Qué valor toma el estadístico F? ¿Cuál es el cuadrado medio entre grupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "36 / 77",
            "36 / 72",
            "41 / 72"
          ],
          "answer": 2,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 36. Divide la suma entre grupos por 3−1. Segundo resultado: 72."
        },
        {
          "story": "Un ANOVA compara tres mercados con 60 observaciones. Las sumas de cuadrados entre y dentro de grupos son 160 y 114.",
          "prompt": "¿Qué valor toma el estadístico F? ¿Cuál es el cuadrado medio entre grupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "40 / 80",
            "46 / 80",
            "40 / 86"
          ],
          "answer": 1,
          "hint": "Divide el cuadrado medio entre grupos por el residual.",
          "explanation": "Divide el cuadrado medio entre grupos por el residual. Resultado: 40. Divide la suma entre grupos por 3−1. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Qué distancia absoluta hay al centroide más próximo?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 21 y los centroides están en 19 y 26.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 23 y los centroides están en 21 y 28.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 22 y los centroides están en 20 y 27.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 24 y los centroides están en 22 y 29.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Qué contribución al error cuadrático aporta la asignación óptima?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 21 y los centroides están en 19 y 26.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 23 y los centroides están en 21 y 28.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 22 y los centroides están en 20 y 27.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 25",
            "4 / 24",
            "5 / 24"
          ],
          "answer": 2,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 24."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 24 y los centroides están en 22 y 29.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 26",
            "5 / 26",
            "4 / 27"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 26."
        }
      ]
    },
    {
      "nombre": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 21 y los centroides están en 19 y 26.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 23."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 23 y los centroides están en 21 y 28.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "29",
            "21",
            "25"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 25."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 22 y los centroides están en 20 y 27.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 2",
            "28 / 2",
            "24 / 6"
          ],
          "answer": 1,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 24. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 24 y los centroides están en 22 y 29.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 2",
            "26 / 6",
            "26 / 2"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 26. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza total?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 75, 50 y 25.",
          "prompt": "¿Cuál es la varianza total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "127",
            "150",
            "173"
          ],
          "answer": 2,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 150."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 81, 54 y 27.",
          "prompt": "¿Cuál es la varianza total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "162",
            "186",
            "138"
          ],
          "answer": 1,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 162."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 78, 52 y 26.",
          "prompt": "¿Cuál es la varianza total? ¿Qué porcentaje explica el primer componente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "156 / 73",
            "156 / 50",
            "179 / 50"
          ],
          "answer": 2,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 156. Divide su autovalor por la suma y multiplica por cien. Segundo resultado: 50."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 84, 56 y 28.",
          "prompt": "¿Cuál es la varianza total? ¿Qué porcentaje explica el primer componente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "168 / 50",
            "193 / 50",
            "168 / 75"
          ],
          "answer": 1,
          "hint": "Suma todos los autovalores.",
          "explanation": "Suma todos los autovalores. Resultado: 168. Divide su autovalor por la suma y multiplica por cien. Segundo resultado: 50."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje explica el primer componente?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 75, 50 y 25.",
          "prompt": "¿Qué porcentaje explica el primer componente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "50",
            "58",
            "42"
          ],
          "answer": 1,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 81, 54 y 27.",
          "prompt": "¿Qué porcentaje explica el primer componente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "58",
            "42",
            "50"
          ],
          "answer": 3,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 78, 52 y 26.",
          "prompt": "¿Qué porcentaje explica el primer componente? ¿Qué porcentaje explican conjuntamente los dos primeros? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 83,3333",
            "58 / 83,3333",
            "50 / 91,3333"
          ],
          "answer": 1,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50. Suma sus autovalores y divide por la varianza total. Segundo resultado: 83,3333."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 84, 56 y 28.",
          "prompt": "¿Qué porcentaje explica el primer componente? ¿Qué porcentaje explican conjuntamente los dos primeros? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "58 / 83,3333",
            "50 / 91,3333",
            "50 / 83,3333"
          ],
          "answer": 3,
          "hint": "Divide su autovalor por la suma y multiplica por cien.",
          "explanation": "Divide su autovalor por la suma y multiplica por cien. Resultado: 50. Suma sus autovalores y divide por la varianza total. Segundo resultado: 83,3333."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje explican conjuntamente los dos primeros?",
      "facil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 75, 50 y 25.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? Redondea a cuatro decimales si es necesario.",
          "options": [
            "95,8333",
            "70,8333",
            "83,3333"
          ],
          "answer": 3,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 81, 54 y 27.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70,8333",
            "83,3333",
            "95,8333"
          ],
          "answer": 2,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333."
        }
      ],
      "dificil": [
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 78, 52 y 26.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? ¿Cuál es la varianza total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "95,8333 / 156",
            "83,3333 / 168,5",
            "83,3333 / 156"
          ],
          "answer": 3,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333. Suma todos los autovalores. Segundo resultado: 156."
        },
        {
          "story": "Un análisis de componentes principales de tres variables tiene autovalores 84, 56 y 28.",
          "prompt": "¿Qué porcentaje explican conjuntamente los dos primeros? ¿Cuál es la varianza total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "83,3333 / 180,5",
            "83,3333 / 168",
            "95,8333 / 168"
          ],
          "answer": 2,
          "hint": "Suma sus autovalores y divide por la varianza total.",
          "explanation": "Suma sus autovalores y divide por la varianza total. Resultado: 83,3333. Suma todos los autovalores. Segundo resultado: 168."
        }
      ]
    }
  ]
}
];

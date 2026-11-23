// Datos ficticios de elaboración propia. Orden: seis paradas con tres apartados consecutivos cada una.
window.BANCOS = [
  {
    "id": "b1",
    "nombre": "Bloque 1 · Estadística descriptiva unidimensional",
    "apartados": [
      {
        "nombre": "Población y muestra",
        "facil": [
          {
            "story": "La oficina estudia las visitas guiadas de un mes.",
            "prompt": "De 200 asistentes se entrevista a 20. ¿Cuántas unidades forman la población?",
            "options": [
              "200",
              "205",
              "195"
            ],
            "answer": 1,
            "hint": "Delimita a quién se refiere el estudio.",
            "explanation": "La población incluye a todos los asistentes del mes. Resultado: 200."
          },
          {
            "story": "La oficina estudia las visitas guiadas de un mes.",
            "prompt": "De 300 asistentes se entrevista a 30. ¿Cuántas unidades forman la población?",
            "options": [
              "305",
              "295",
              "300"
            ],
            "answer": 3,
            "hint": "Delimita a quién se refiere el estudio.",
            "explanation": "La población incluye a todos los asistentes del mes. Resultado: 300."
          }
        ],
        "dificil": [
          {
            "story": "La oficina estudia las visitas guiadas de un mes.",
            "prompt": "De 200 asistentes se entrevista a la cuarta parte. Diez cuestionarios resultan ilegibles. ¿Cuántas observaciones válidas quedan?",
            "options": [
              "45",
              "35",
              "40"
            ],
            "answer": 3,
            "hint": "Distingue seleccionados y observados.",
            "explanation": "Divide el total entre cuatro y resta los diez registros ilegibles. Resultado: 40."
          },
          {
            "story": "La oficina estudia las visitas guiadas de un mes.",
            "prompt": "De 300 asistentes se entrevista a la cuarta parte. Diez cuestionarios resultan ilegibles. ¿Cuántas observaciones válidas quedan?",
            "options": [
              "60",
              "65",
              "70"
            ],
            "answer": 2,
            "hint": "Distingue seleccionados y observados.",
            "explanation": "Divide el total entre cuatro y resta los diez registros ilegibles. Resultado: 65."
          }
        ]
      },
      {
        "nombre": "Unidad de observación",
        "facil": [
          {
            "story": "Recepción prepara una base de datos de viajeros.",
            "prompt": "Hay 20 parejas. Si se abre una ficha por persona, ¿cuántas fichas habrá?",
            "options": [
              "45",
              "35",
              "40"
            ],
            "answer": 3,
            "hint": "Identifica qué representa una fila.",
            "explanation": "Cada pareja aporta dos personas. Resultado: 40."
          },
          {
            "story": "Recepción prepara una base de datos de viajeros.",
            "prompt": "Hay 30 parejas. Si se abre una ficha por persona, ¿cuántas fichas habrá?",
            "options": [
              "55",
              "60",
              "65"
            ],
            "answer": 2,
            "hint": "Identifica qué representa una fila.",
            "explanation": "Cada pareja aporta dos personas. Resultado: 60."
          }
        ],
        "dificil": [
          {
            "story": "Recepción prepara una base de datos de viajeros.",
            "prompt": "Hay 20 parejas y 2 grupos de tres. Si la unidad es la persona, ¿cuántas filas más habrá que usando cada grupo o pareja como unidad?",
            "options": [
              "19",
              "24",
              "29"
            ],
            "answer": 2,
            "hint": "Compara ambos recuentos.",
            "explanation": "Cada pareja añade una fila y cada trío añade dos al pasar a personas. Resultado: 24."
          },
          {
            "story": "Recepción prepara una base de datos de viajeros.",
            "prompt": "Hay 30 parejas y 3 grupos de tres. Si la unidad es la persona, ¿cuántas filas más habrá que usando cada grupo o pareja como unidad?",
            "options": [
              "36",
              "41",
              "31"
            ],
            "answer": 1,
            "hint": "Compara ambos recuentos.",
            "explanation": "Cada pareja añade una fila y cada trío añade dos al pasar a personas. Resultado: 36."
          }
        ]
      },
      {
        "nombre": "Medición y categorías",
        "facil": [
          {
            "story": "Una oficina codifica las respuestas sobre transporte.",
            "prompt": "De 20 respuestas, 10 indican tren. ¿Cuántas corresponden a otro medio?",
            "options": [
              "5",
              "10",
              "15"
            ],
            "answer": 2,
            "hint": "Las categorías son excluyentes.",
            "explanation": "Resta las respuestas de tren del total. Resultado: 10."
          },
          {
            "story": "Una oficina codifica las respuestas sobre transporte.",
            "prompt": "De 20 respuestas, 11 indican tren. ¿Cuántas corresponden a otro medio?",
            "options": [
              "9",
              "10",
              "8"
            ],
            "answer": 1,
            "hint": "Las categorías son excluyentes.",
            "explanation": "Resta las respuestas de tren del total. Resultado: 9."
          }
        ],
        "dificil": [
          {
            "story": "Una oficina codifica las respuestas sobre transporte.",
            "prompt": "De 40 fichas, 5 no indican transporte y 10 dicen tren. Entre quienes respondieron, ¿qué porcentaje eligió tren?",
            "options": [
              "28,5714",
              "33,5714",
              "23,5714"
            ],
            "answer": 1,
            "hint": "Excluye las fichas sin dato del denominador.",
            "explanation": "Divide las respuestas «tren» entre las 35 válidas y multiplica por cien. Resultado: 28,5714."
          },
          {
            "story": "Una oficina codifica las respuestas sobre transporte.",
            "prompt": "De 40 fichas, 5 no indican transporte y 11 dicen tren. Entre quienes respondieron, ¿qué porcentaje eligió tren?",
            "options": [
              "36,4286",
              "26,4286",
              "31,4286"
            ],
            "answer": 3,
            "hint": "Excluye las fichas sin dato del denominador.",
            "explanation": "Divide las respuestas «tren» entre las 35 válidas y multiplica por cien. Resultado: 31,4286."
          }
        ]
      },
      {
        "nombre": "Frecuencia absoluta",
        "facil": [
          {
            "story": "Una guía cuenta visitas por idioma.",
            "prompt": "De 50 visitas, 20 fueron en español y 8 en francés. El resto fueron en inglés. ¿Cuántas?",
            "options": [
              "22",
              "27",
              "17"
            ],
            "answer": 1,
            "hint": "Las frecuencias deben sumar el total.",
            "explanation": "Resta las visitas en español y francés de 50. Resultado: 22."
          },
          {
            "story": "Una guía cuenta visitas por idioma.",
            "prompt": "De 50 visitas, 30 fueron en español y 8 en francés. El resto fueron en inglés. ¿Cuántas?",
            "options": [
              "17",
              "7",
              "12"
            ],
            "answer": 3,
            "hint": "Las frecuencias deben sumar el total.",
            "explanation": "Resta las visitas en español y francés de 50. Resultado: 12."
          }
        ],
        "dificil": [
          {
            "story": "Una guía cuenta visitas por idioma.",
            "prompt": "Se anotaron 20 visitas en inglés sobre 80 visitas. Se descubren 4 duplicados, todos en inglés. ¿Qué porcentaje corregido corresponde a inglés?",
            "options": [
              "26,0526",
              "16,0526",
              "21,0526"
            ],
            "answer": 3,
            "hint": "Corrige numerador y denominador.",
            "explanation": "Elimina cuatro visitas de ambos recuentos antes de calcular la cuota. Resultado: 21,0526."
          },
          {
            "story": "Una guía cuenta visitas por idioma.",
            "prompt": "Se anotaron 30 visitas en inglés sobre 80 visitas. Se descubren 4 duplicados, todos en inglés. ¿Qué porcentaje corregido corresponde a inglés?",
            "options": [
              "29,2105",
              "34,2105",
              "39,2105"
            ],
            "answer": 2,
            "hint": "Corrige numerador y denominador.",
            "explanation": "Elimina cuatro visitas de ambos recuentos antes de calcular la cuota. Resultado: 34,2105."
          }
        ]
      },
      {
        "nombre": "Frecuencia relativa",
        "facil": [
          {
            "story": "El archivo reúne partes de llegadas.",
            "prompt": "Llegan 10 huéspedes en tren de un total de 50. ¿Qué porcentaje representan?",
            "options": [
              "25",
              "15",
              "20"
            ],
            "answer": 3,
            "hint": "Expresa la fracción sobre cien.",
            "explanation": "Divide los llegados en tren entre 50 y multiplica por cien. Resultado: 20."
          },
          {
            "story": "El archivo reúne partes de llegadas.",
            "prompt": "Llegan 15 huéspedes en tren de un total de 50. ¿Qué porcentaje representan?",
            "options": [
              "25",
              "30",
              "35"
            ],
            "answer": 2,
            "hint": "Expresa la fracción sobre cien.",
            "explanation": "Divide los llegados en tren entre 50 y multiplica por cien. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "El archivo reúne partes de llegadas.",
            "prompt": "El lunes llegan 40 turistas, el 25 % en tren. El martes llegan 40, la mitad en tren. ¿Qué porcentaje de ambos días llegó en tren?",
            "options": [
              "32,5",
              "37,5",
              "42,5"
            ],
            "answer": 2,
            "hint": "Pondera por el tamaño de cada día.",
            "explanation": "Suma 10 viajeros del lunes y la mitad del martes y divide por el total de ambos días. Resultado: 37,5."
          },
          {
            "story": "El archivo reúne partes de llegadas.",
            "prompt": "El lunes llegan 40 turistas, el 25 % en tren. El martes llegan 60, la mitad en tren. ¿Qué porcentaje de ambos días llegó en tren?",
            "options": [
              "40",
              "45",
              "35"
            ],
            "answer": 1,
            "hint": "Pondera por el tamaño de cada día.",
            "explanation": "Suma 10 viajeros del lunes y la mitad del martes y divide por el total de ambos días. Resultado: 40."
          }
        ]
      },
      {
        "nombre": "Frecuencia acumulada",
        "facil": [
          {
            "story": "Las fichas cuentan noches de estancia.",
            "prompt": "Pasan una noche 6 visitas, dos noches 8 y tres noches 7. ¿Cuántas pasan como máximo dos noches?",
            "options": [
              "9",
              "14",
              "19"
            ],
            "answer": 2,
            "hint": "Suma las categorías hasta el límite incluido.",
            "explanation": "Se suman las estancias de una y dos noches. Resultado: 14."
          },
          {
            "story": "Las fichas cuentan noches de estancia.",
            "prompt": "Pasan una noche 9 visitas, dos noches 8 y tres noches 7. ¿Cuántas pasan como máximo dos noches?",
            "options": [
              "17",
              "22",
              "12"
            ],
            "answer": 1,
            "hint": "Suma las categorías hasta el límite incluido.",
            "explanation": "Se suman las estancias de una y dos noches. Resultado: 17."
          }
        ],
        "dificil": [
          {
            "story": "Las fichas cuentan noches de estancia.",
            "prompt": "De 60 viajeros, 37 pasan como máximo tres noches y 12 pasan como máximo una. ¿Qué porcentaje pasa dos o tres noches?",
            "options": [
              "41,6667",
              "46,6667",
              "36,6667"
            ],
            "answer": 1,
            "hint": "Resta dos acumuladas.",
            "explanation": "La diferencia entre ambos recuentos acumulados da los casos del intervalo. Resultado: 41,6667."
          },
          {
            "story": "Las fichas cuentan noches de estancia.",
            "prompt": "De 60 viajeros, 38 pasan como máximo tres noches y 12 pasan como máximo una. ¿Qué porcentaje pasa dos o tres noches?",
            "options": [
              "48,3333",
              "38,3333",
              "43,3333"
            ],
            "answer": 3,
            "hint": "Resta dos acumuladas.",
            "explanation": "La diferencia entre ambos recuentos acumulados da los casos del intervalo. Resultado: 43,3333."
          }
        ]
      },
      {
        "nombre": "Intervalos",
        "facil": [
          {
            "story": "El museo agrupa tiempos de espera en minutos.",
            "prompt": "Una clase va de 10 a 24 minutos. ¿Cuál es su amplitud?",
            "options": [
              "14",
              "19",
              "9"
            ],
            "answer": 1,
            "hint": "Compara los límites.",
            "explanation": "La amplitud es el límite superior menos el inferior. Resultado: 14."
          },
          {
            "story": "El museo agrupa tiempos de espera en minutos.",
            "prompt": "Una clase va de 10 a 26 minutos. ¿Cuál es su amplitud?",
            "options": [
              "21",
              "11",
              "16"
            ],
            "answer": 3,
            "hint": "Compara los límites.",
            "explanation": "La amplitud es el límite superior menos el inferior. Resultado: 16."
          }
        ],
        "dificil": [
          {
            "story": "El museo agrupa tiempos de espera en minutos.",
            "prompt": "Las clases [0,10) y [10,30) tienen 14 y 20 visitas. ¿Cuál es la altura de la primera barra menos la segunda, en visitas por minuto?",
            "options": [
              "0,47",
              "0,33",
              "0,4"
            ],
            "answer": 3,
            "hint": "Con amplitudes desiguales usa densidades.",
            "explanation": "Divide cada frecuencia por la amplitud y resta las alturas. Resultado: 0,4."
          },
          {
            "story": "El museo agrupa tiempos de espera en minutos.",
            "prompt": "Las clases [0,10) y [10,30) tienen 15 y 20 visitas. ¿Cuál es la altura de la primera barra menos la segunda, en visitas por minuto?",
            "options": [
              "0,43",
              "0,5",
              "0,57"
            ],
            "answer": 2,
            "hint": "Con amplitudes desiguales usa densidades.",
            "explanation": "Divide cada frecuencia por la amplitud y resta las alturas. Resultado: 0,5."
          }
        ]
      },
      {
        "nombre": "Marca de clase",
        "facil": [
          {
            "story": "Una agencia trabaja con gastos agrupados.",
            "prompt": "El intervalo de gasto es de 20 a 44 €. ¿Qué marca de clase usarías?",
            "options": [
              "37",
              "27",
              "32"
            ],
            "answer": 3,
            "hint": "Busca el punto medio.",
            "explanation": "Promedia los dos límites. Resultado: 32."
          },
          {
            "story": "Una agencia trabaja con gastos agrupados.",
            "prompt": "El intervalo de gasto es de 20 a 46 €. ¿Qué marca de clase usarías?",
            "options": [
              "28",
              "33",
              "38"
            ],
            "answer": 2,
            "hint": "Busca el punto medio.",
            "explanation": "Promedia los dos límites. Resultado: 33."
          }
        ],
        "dificil": [
          {
            "story": "Una agencia trabaja con gastos agrupados.",
            "prompt": "Tres viajeros gastan entre 10 y 20 € y 2 entre 20 y 40 €. Usando marcas, ¿qué gasto medio estimas?",
            "options": [
              "16",
              "21",
              "26"
            ],
            "answer": 2,
            "hint": "Representa cada clase por su punto medio.",
            "explanation": "Pondera las marcas 15 y 30 por sus frecuencias y divide por el número de viajeros. Resultado: 21."
          },
          {
            "story": "Una agencia trabaja con gastos agrupados.",
            "prompt": "Tres viajeros gastan entre 10 y 20 € y 3 entre 20 y 40 €. Usando marcas, ¿qué gasto medio estimas?",
            "options": [
              "22,5",
              "27,5",
              "17,5"
            ],
            "answer": 1,
            "hint": "Representa cada clase por su punto medio.",
            "explanation": "Pondera las marcas 15 y 30 por sus frecuencias y divide por el número de viajeros. Resultado: 22,5."
          }
        ]
      },
      {
        "nombre": "Media aritmética",
        "facil": [
          {
            "story": "La taquilla revisa los tiempos de atención.",
            "prompt": "Tres atenciones duran 2, 4 y 6 minutos. ¿Cuánto dura la atención media?",
            "options": [
              "3",
              "4",
              "5"
            ],
            "answer": 2,
            "hint": "Reparte la suma entre tres.",
            "explanation": "Los tres tiempos están igualmente espaciados. Resultado: 4."
          },
          {
            "story": "La taquilla revisa los tiempos de atención.",
            "prompt": "Tres atenciones duran 3, 5 y 7 minutos. ¿Cuánto dura la atención media?",
            "options": [
              "5",
              "6",
              "4"
            ],
            "answer": 1,
            "hint": "Reparte la suma entre tres.",
            "explanation": "Los tres tiempos están igualmente espaciados. Resultado: 5."
          }
        ],
        "dificil": [
          {
            "story": "La taquilla revisa los tiempos de atención.",
            "prompt": "Cuatro atenciones duran en promedio 10 minutos. Una quinta dura 20. ¿Cuál es la nueva media?",
            "options": [
              "12",
              "17",
              "7"
            ],
            "answer": 1,
            "hint": "Recupera la suma original.",
            "explanation": "Multiplica la media original por cuatro, suma 20 y divide entre cinco. Resultado: 12."
          },
          {
            "story": "La taquilla revisa los tiempos de atención.",
            "prompt": "Cuatro atenciones duran en promedio 11 minutos. Una quinta dura 20. ¿Cuál es la nueva media?",
            "options": [
              "17,8",
              "7,8",
              "12,8"
            ],
            "answer": 3,
            "hint": "Recupera la suma original.",
            "explanation": "Multiplica la media original por cuatro, suma 20 y divide entre cinco. Resultado: 12,8."
          }
        ]
      },
      {
        "nombre": "Media ponderada",
        "facil": [
          {
            "story": "Dos rutas cobran importes distintos.",
            "prompt": "Dos billetes cuestan 10 € cada uno y 2 cuestan 20 € cada uno. ¿Cuál es el ingreso medio por billete?",
            "options": [
              "15",
              "20",
              "10"
            ],
            "answer": 1,
            "hint": "El peso es el número de billetes.",
            "explanation": "Divide el ingreso total entre los billetes vendidos. Resultado: 15."
          },
          {
            "story": "Dos rutas cobran importes distintos.",
            "prompt": "Dos billetes cuestan 10 € cada uno y 3 cuestan 20 € cada uno. ¿Cuál es el ingreso medio por billete?",
            "options": [
              "21",
              "11",
              "16"
            ],
            "answer": 3,
            "hint": "El peso es el número de billetes.",
            "explanation": "Divide el ingreso total entre los billetes vendidos. Resultado: 16."
          }
        ],
        "dificil": [
          {
            "story": "Dos rutas cobran importes distintos.",
            "prompt": "La tarifa media de 10 billetes es 14 €. Seis billetes costaron 10 € cada uno. ¿Cuál fue la tarifa media de los otros cuatro?",
            "options": [
              "25",
              "15",
              "20"
            ],
            "answer": 3,
            "hint": "Descuenta primero los ingresos conocidos.",
            "explanation": "Resta 60 al ingreso total y divide el resto por cuatro. Resultado: 20."
          },
          {
            "story": "Dos rutas cobran importes distintos.",
            "prompt": "La tarifa media de 10 billetes es 15 €. Seis billetes costaron 10 € cada uno. ¿Cuál fue la tarifa media de los otros cuatro?",
            "options": [
              "17,5",
              "22,5",
              "27,5"
            ],
            "answer": 2,
            "hint": "Descuenta primero los ingresos conocidos.",
            "explanation": "Resta 60 al ingreso total y divide el resto por cuatro. Resultado: 22,5."
          }
        ]
      },
      {
        "nombre": "Mediana",
        "facil": [
          {
            "story": "Una guía ordena los minutos de espera.",
            "prompt": "Los tiempos ordenados son 2, 3, 7, 10, 14. ¿Cuál es la mediana?",
            "options": [
              "8",
              "6",
              "7"
            ],
            "answer": 3,
            "hint": "Localiza la posición central.",
            "explanation": "Con cinco datos, la mediana ocupa la tercera posición. Resultado: 7."
          },
          {
            "story": "Una guía ordena los minutos de espera.",
            "prompt": "Los tiempos ordenados son 2, 3, 8, 10, 14. ¿Cuál es la mediana?",
            "options": [
              "7",
              "8",
              "9"
            ],
            "answer": 2,
            "hint": "Localiza la posición central.",
            "explanation": "Con cinco datos, la mediana ocupa la tercera posición. Resultado: 8."
          }
        ],
        "dificil": [
          {
            "story": "Una guía ordena los minutos de espera.",
            "prompt": "Llegan cuatro partes con tiempos 12, 2, 6 y 8. ¿Cuál es la mediana?",
            "options": [
              "6",
              "7",
              "8"
            ],
            "answer": 2,
            "hint": "Ordena los cuatro tiempos.",
            "explanation": "Promedia el segundo y tercer tiempo ordenados. Resultado: 7."
          },
          {
            "story": "Una guía ordena los minutos de espera.",
            "prompt": "Llegan cuatro partes con tiempos 12, 2, 7 y 8. ¿Cuál es la mediana?",
            "options": [
              "7,5",
              "8,5",
              "6,5"
            ],
            "answer": 1,
            "hint": "Ordena los cuatro tiempos.",
            "explanation": "Promedia el segundo y tercer tiempo ordenados. Resultado: 7,5."
          }
        ]
      },
      {
        "nombre": "Moda",
        "facil": [
          {
            "story": "Un hotel resume las estancias más habituales.",
            "prompt": "Las noches vendidas fueron 1, 2, 2, 5, 7. ¿Cuál es la moda?",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": 2,
            "hint": "Cuenta repeticiones.",
            "explanation": "La única estancia repetida es la moda. Resultado: 2."
          },
          {
            "story": "Un hotel resume las estancias más habituales.",
            "prompt": "Las noches vendidas fueron 1, 3, 3, 5, 7. ¿Cuál es la moda?",
            "options": [
              "3",
              "4",
              "2"
            ],
            "answer": 1,
            "hint": "Cuenta repeticiones.",
            "explanation": "La única estancia repetida es la moda. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Un hotel resume las estancias más habituales.",
            "prompt": "Hay 5 estancias de una noche, 8 de dos y 1 de tres. ¿Cuántas nuevas estancias de una noche hacen falta para que una noche sea la única moda?",
            "options": [
              "4",
              "5",
              "3"
            ],
            "answer": 1,
            "hint": "La nueva frecuencia debe superar a su rival.",
            "explanation": "La frecuencia objetivo es una más que la de dos noches. Resta las cinco ya existentes. Resultado: 4."
          },
          {
            "story": "Un hotel resume las estancias más habituales.",
            "prompt": "Hay 5 estancias de una noche, 9 de dos y 1 de tres. ¿Cuántas nuevas estancias de una noche hacen falta para que una noche sea la única moda?",
            "options": [
              "6",
              "4",
              "5"
            ],
            "answer": 3,
            "hint": "La nueva frecuencia debe superar a su rival.",
            "explanation": "La frecuencia objetivo es una más que la de dos noches. Resta las cinco ya existentes. Resultado: 5."
          }
        ]
      },
      {
        "nombre": "Cuantiles empíricos",
        "facil": [
          {
            "story": "La oficina calcula percentiles por rango más próximo.",
            "prompt": "En 20 tiempos ordenados, ¿qué posición ocupa P80 usando techo(0,8 × N)?",
            "options": [
              "16",
              "21",
              "11"
            ],
            "answer": 1,
            "hint": "Aplica la regla indicada.",
            "explanation": "El 80 % del tamaño da aquí una posición entera. Resultado: 16."
          },
          {
            "story": "La oficina calcula percentiles por rango más próximo.",
            "prompt": "En 30 tiempos ordenados, ¿qué posición ocupa P80 usando techo(0,8 × N)?",
            "options": [
              "29",
              "19",
              "24"
            ],
            "answer": 3,
            "hint": "Aplica la regla indicada.",
            "explanation": "El 80 % del tamaño da aquí una posición entera. Resultado: 24."
          }
        ],
        "dificil": [
          {
            "story": "La oficina calcula percentiles por rango más próximo.",
            "prompt": "En 20 observaciones hay 4 esperas de 2 minutos, 10 de 7 y 6 de 12. ¿Cuánto vale P70 con rango techo(0,70 × N)?",
            "options": [
              "8",
              "6",
              "7"
            ],
            "answer": 3,
            "hint": "Sitúa la posición dentro de las frecuencias acumuladas.",
            "explanation": "P70 ocupa la posición 14, la última del segundo grupo. Resultado: 7."
          },
          {
            "story": "La oficina calcula percentiles por rango más próximo.",
            "prompt": "En 20 observaciones hay 4 esperas de 2 minutos, 10 de 8 y 6 de 12. ¿Cuánto vale P70 con rango techo(0,70 × N)?",
            "options": [
              "7",
              "8",
              "9"
            ],
            "answer": 2,
            "hint": "Sitúa la posición dentro de las frecuencias acumuladas.",
            "explanation": "P70 ocupa la posición 14, la última del segundo grupo. Resultado: 8."
          }
        ]
      },
      {
        "nombre": "Recorrido",
        "facil": [
          {
            "story": "El archivo conserva tarifas de temporada.",
            "prompt": "La menor tarifa es 45 € y la mayor 80 €. ¿Cuál es el recorrido?",
            "options": [
              "40",
              "30",
              "35"
            ],
            "answer": 3,
            "hint": "Usa ambos extremos.",
            "explanation": "Resta la tarifa mínima de la máxima. Resultado: 35."
          },
          {
            "story": "El archivo conserva tarifas de temporada.",
            "prompt": "La menor tarifa es 45 € y la mayor 85 €. ¿Cuál es el recorrido?",
            "options": [
              "35",
              "40",
              "45"
            ],
            "answer": 2,
            "hint": "Usa ambos extremos.",
            "explanation": "Resta la tarifa mínima de la máxima. Resultado: 40."
          }
        ],
        "dificil": [
          {
            "story": "El archivo conserva tarifas de temporada.",
            "prompt": "Las tarifas extremas son 40 y 70 €. Todas suben un 10 % y después 3 € fijos. ¿Cuál es el nuevo recorrido?",
            "options": [
              "28",
              "33",
              "38"
            ],
            "answer": 2,
            "hint": "La parte fija afecta por igual a ambos extremos.",
            "explanation": "La diferencia queda multiplicada por 1,10. Resultado: 33."
          },
          {
            "story": "El archivo conserva tarifas de temporada.",
            "prompt": "Las tarifas extremas son 40 y 75 €. Todas suben un 10 % y después 3 € fijos. ¿Cuál es el nuevo recorrido?",
            "options": [
              "38,5",
              "43,5",
              "33,5"
            ],
            "answer": 1,
            "hint": "La parte fija afecta por igual a ambos extremos.",
            "explanation": "La diferencia queda multiplicada por 1,10. Resultado: 38,5."
          }
        ]
      },
      {
        "nombre": "Varianza",
        "facil": [
          {
            "story": "El equipo describe todos los turnos observados usando divisor N.",
            "prompt": "En dos turnos se atienden 8 y 12 personas. ¿Cuál es la varianza poblacional?",
            "options": [
              "3",
              "4",
              "5"
            ],
            "answer": 2,
            "hint": "Calcula las desviaciones respecto de 10.",
            "explanation": "Las desviaciones son opuestas y ambas tienen el mismo cuadrado. Resultado: 4."
          },
          {
            "story": "El equipo describe todos los turnos observados usando divisor N.",
            "prompt": "En dos turnos se atienden 7 y 13 personas. ¿Cuál es la varianza poblacional?",
            "options": [
              "9",
              "10",
              "8"
            ],
            "answer": 1,
            "hint": "Calcula las desviaciones respecto de 10.",
            "explanation": "Las desviaciones son opuestas y ambas tienen el mismo cuadrado. Resultado: 9."
          }
        ],
        "dificil": [
          {
            "story": "El equipo describe todos los turnos observados usando divisor N.",
            "prompt": "La varianza de las duraciones en horas es 2. Al expresarlas en minutos, ¿qué varianza se obtiene en minutos cuadrados?",
            "options": [
              "7200",
              "7205",
              "7195"
            ],
            "answer": 1,
            "hint": "La varianza multiplica por el cuadrado de la escala.",
            "explanation": "El factor de conversión de horas a minutos es 60, por tanto la varianza se multiplica por 3600. Resultado: 7200."
          },
          {
            "story": "El equipo describe todos los turnos observados usando divisor N.",
            "prompt": "La varianza de las duraciones en horas es 3. Al expresarlas en minutos, ¿qué varianza se obtiene en minutos cuadrados?",
            "options": [
              "10.805",
              "10.795",
              "10.800"
            ],
            "answer": 3,
            "hint": "La varianza multiplica por el cuadrado de la escala.",
            "explanation": "El factor de conversión de horas a minutos es 60, por tanto la varianza se multiplica por 3600. Resultado: 10.800."
          }
        ]
      },
      {
        "nombre": "Desviación típica",
        "facil": [
          {
            "story": "La agencia analiza dispersión de precios.",
            "prompt": "La varianza de las tarifas es 16 euros cuadrados. ¿Cuál es la desviación típica en euros?",
            "options": [
              "4",
              "5",
              "3"
            ],
            "answer": 1,
            "hint": "Deshaz el cuadrado.",
            "explanation": "La desviación típica es la raíz positiva de la varianza. Resultado: 4."
          },
          {
            "story": "La agencia analiza dispersión de precios.",
            "prompt": "La varianza de las tarifas es 36 euros cuadrados. ¿Cuál es la desviación típica en euros?",
            "options": [
              "7",
              "5",
              "6"
            ],
            "answer": 3,
            "hint": "Deshaz el cuadrado.",
            "explanation": "La desviación típica es la raíz positiva de la varianza. Resultado: 6."
          }
        ],
        "dificil": [
          {
            "story": "La agencia analiza dispersión de precios.",
            "prompt": "Las tarifas tienen desviación típica 8 €. Tras aplicar un descuento del 25 % y añadir una tasa fija de 2 €, ¿qué desviación típica queda?",
            "options": [
              "7",
              "5",
              "6"
            ],
            "answer": 3,
            "hint": "La tasa fija no cambia distancias.",
            "explanation": "El descuento multiplica las diferencias por 0,75. Resultado: 6."
          },
          {
            "story": "La agencia analiza dispersión de precios.",
            "prompt": "Las tarifas tienen desviación típica 12 €. Tras aplicar un descuento del 25 % y añadir una tasa fija de 2 €, ¿qué desviación típica queda?",
            "options": [
              "8",
              "9",
              "10"
            ],
            "answer": 2,
            "hint": "La tasa fija no cambia distancias.",
            "explanation": "El descuento multiplica las diferencias por 0,75. Resultado: 9."
          }
        ]
      },
      {
        "nombre": "Coeficiente de variación",
        "facil": [
          {
            "story": "Dos hoteles comparan dispersión relativa con medias positivas.",
            "prompt": "Media 100 € y desviación típica 10 €. ¿Cuál es el CV en porcentaje?",
            "options": [
              "15",
              "5",
              "10"
            ],
            "answer": 3,
            "hint": "Divide la desviación típica por la media.",
            "explanation": "Expresa el cociente en porcentaje. Resultado: 10."
          },
          {
            "story": "Dos hoteles comparan dispersión relativa con medias positivas.",
            "prompt": "Media 100 € y desviación típica 15 €. ¿Cuál es el CV en porcentaje?",
            "options": [
              "10",
              "15",
              "20"
            ],
            "answer": 2,
            "hint": "Divide la desviación típica por la media.",
            "explanation": "Expresa el cociente en porcentaje. Resultado: 15."
          }
        ],
        "dificil": [
          {
            "story": "Dos hoteles comparan dispersión relativa con medias positivas.",
            "prompt": "El hotel A tiene media 80 y desviación 8 €. El B tiene media 100 y desviación 14 €. ¿En cuántos puntos porcentuales supera el CV de B al de A?",
            "options": [
              "3",
              "4",
              "5"
            ],
            "answer": 2,
            "hint": "Convierte ambos cocientes a porcentaje.",
            "explanation": "El CV de A es 10 %. Resta ese valor al CV de B. Resultado: 4."
          },
          {
            "story": "Dos hoteles comparan dispersión relativa con medias positivas.",
            "prompt": "El hotel A tiene media 80 y desviación 8 €. El B tiene media 100 y desviación 15 €. ¿En cuántos puntos porcentuales supera el CV de B al de A?",
            "options": [
              "5",
              "6",
              "4"
            ],
            "answer": 1,
            "hint": "Convierte ambos cocientes a porcentaje.",
            "explanation": "El CV de A es 10 %. Resta ese valor al CV de B. Resultado: 5."
          }
        ]
      },
      {
        "nombre": "Tipificación",
        "facil": [
          {
            "story": "Una guía compara esperas de servicios diferentes.",
            "prompt": "La media es 10 minutos y la desviación 2. ¿Qué puntuación z corresponde a 14 minutos?",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": 2,
            "hint": "Centra y divide por la desviación típica.",
            "explanation": "Resta 10 y divide por 2. Resultado: 2."
          },
          {
            "story": "Una guía compara esperas de servicios diferentes.",
            "prompt": "La media es 10 minutos y la desviación 2. ¿Qué puntuación z corresponde a 16 minutos?",
            "options": [
              "3",
              "4",
              "2"
            ],
            "answer": 1,
            "hint": "Centra y divide por la desviación típica.",
            "explanation": "Resta 10 y divide por 2. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Una guía compara esperas de servicios diferentes.",
            "prompt": "En la ruta A, 14 minutos se comparan con media 10 y desviación 2. En la B la media es 20 y la desviación 3. ¿Qué espera de B tiene el mismo z?",
            "options": [
              "26",
              "31",
              "21"
            ],
            "answer": 1,
            "hint": "Traslada la posición relativa entre rutas.",
            "explanation": "Calcula z en A y después suma a 20 tres veces ese z. Resultado: 26."
          },
          {
            "story": "Una guía compara esperas de servicios diferentes.",
            "prompt": "En la ruta A, 16 minutos se comparan con media 10 y desviación 2. En la B la media es 20 y la desviación 3. ¿Qué espera de B tiene el mismo z?",
            "options": [
              "34",
              "24",
              "29"
            ],
            "answer": 3,
            "hint": "Traslada la posición relativa entre rutas.",
            "explanation": "Calcula z en A y después suma a 20 tres veces ese z. Resultado: 29."
          }
        ]
      }
    ]
  },
  {
    "id": "b2",
    "nombre": "Bloque 2 · Distribuciones bidimensionales, correlación y regresión",
    "apartados": [
      {
        "nombre": "Frecuencia conjunta",
        "facil": [
          {
            "story": "El museo cruza transporte y turno.",
            "prompt": "De 100 visitas, 20 llegan en bus por la mañana y 12 en bus por la tarde. ¿Qué porcentaje del total llega en bus por la mañana?",
            "options": [
              "20",
              "25",
              "15"
            ],
            "answer": 1,
            "hint": "Usa como denominador las 100 visitas.",
            "explanation": "Usa como denominador las 100 visitas. Resultado: 20."
          },
          {
            "story": "El museo cruza transporte y turno.",
            "prompt": "De 100 visitas, 30 llegan en bus por la mañana y 12 en bus por la tarde. ¿Qué porcentaje del total llega en bus por la mañana?",
            "options": [
              "35",
              "25",
              "30"
            ],
            "answer": 3,
            "hint": "Usa como denominador las 100 visitas.",
            "explanation": "Usa como denominador las 100 visitas. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "El museo cruza transporte y turno.",
            "prompt": "De 100 visitas, 20 llegan en bus por la mañana y 12 en bus por la tarde. Entre visitantes en bus, ¿qué porcentaje llega por la mañana?",
            "options": [
              "67,5",
              "57,5",
              "62,5"
            ],
            "answer": 3,
            "hint": "Divide la celda de mañana y bus entre el total de bus.",
            "explanation": "Divide la celda de mañana y bus entre el total de bus. Resultado: 62,5."
          },
          {
            "story": "El museo cruza transporte y turno.",
            "prompt": "De 100 visitas, 30 llegan en bus por la mañana y 12 en bus por la tarde. Entre visitantes en bus, ¿qué porcentaje llega por la mañana?",
            "options": [
              "66,4286",
              "71,4286",
              "76,4286"
            ],
            "answer": 2,
            "hint": "Divide la celda de mañana y bus entre el total de bus.",
            "explanation": "Divide la celda de mañana y bus entre el total de bus. Resultado: 71,4286."
          }
        ]
      },
      {
        "nombre": "Marginal de origen",
        "facil": [
          {
            "story": "Una tabla distingue origen y alojamiento.",
            "prompt": "Se alojan en hotel 24 residentes y 20 no residentes. Hay otros 30 viajeros en apartamentos. ¿Cuántos se alojan en hotel?",
            "options": [
              "49",
              "39",
              "44"
            ],
            "answer": 3,
            "hint": "Suma ambas celdas de hotel.",
            "explanation": "Suma ambas celdas de hotel. Resultado: 44."
          },
          {
            "story": "Una tabla distingue origen y alojamiento.",
            "prompt": "Se alojan en hotel 36 residentes y 20 no residentes. Hay otros 30 viajeros en apartamentos. ¿Cuántos se alojan en hotel?",
            "options": [
              "51",
              "56",
              "61"
            ],
            "answer": 2,
            "hint": "Suma ambas celdas de hotel.",
            "explanation": "Suma ambas celdas de hotel. Resultado: 56."
          }
        ],
        "dificil": [
          {
            "story": "Una tabla distingue origen y alojamiento.",
            "prompt": "Se alojan en hotel 24 residentes y 20 no residentes. Hay otros 30 viajeros en apartamentos. ¿Qué porcentaje de todos los viajeros se aloja en hotel?",
            "options": [
              "54,4595",
              "59,4595",
              "64,4595"
            ],
            "answer": 2,
            "hint": "Divide el marginal hotelero por la suma de hotel y apartamentos.",
            "explanation": "Divide el marginal hotelero por la suma de hotel y apartamentos. Resultado: 59,4595."
          },
          {
            "story": "Una tabla distingue origen y alojamiento.",
            "prompt": "Se alojan en hotel 36 residentes y 20 no residentes. Hay otros 30 viajeros en apartamentos. ¿Qué porcentaje de todos los viajeros se aloja en hotel?",
            "options": [
              "65,1163",
              "70,1163",
              "60,1163"
            ],
            "answer": 1,
            "hint": "Divide el marginal hotelero por la suma de hotel y apartamentos.",
            "explanation": "Divide el marginal hotelero por la suma de hotel y apartamentos. Resultado: 65,1163."
          }
        ]
      },
      {
        "nombre": "Marginal de temporada",
        "facil": [
          {
            "story": "Se clasifican reservas por canal y trimestre.",
            "prompt": "En verano se hicieron 40 reservas directas y 15 por agencia. En invierno se hicieron 25 en total. ¿Cuántas reservas son de verano?",
            "options": [
              "50",
              "55",
              "60"
            ],
            "answer": 2,
            "hint": "Suma los dos canales de verano.",
            "explanation": "Suma los dos canales de verano. Resultado: 55."
          },
          {
            "story": "Se clasifican reservas por canal y trimestre.",
            "prompt": "En verano se hicieron 60 reservas directas y 15 por agencia. En invierno se hicieron 25 en total. ¿Cuántas reservas son de verano?",
            "options": [
              "75",
              "80",
              "70"
            ],
            "answer": 1,
            "hint": "Suma los dos canales de verano.",
            "explanation": "Suma los dos canales de verano. Resultado: 75."
          }
        ],
        "dificil": [
          {
            "story": "Se clasifican reservas por canal y trimestre.",
            "prompt": "En verano se hicieron 40 reservas directas y 15 por agencia. En invierno se hicieron 25 en total. ¿Qué porcentaje del total son reservas directas de verano?",
            "options": [
              "50",
              "55",
              "45"
            ],
            "answer": 1,
            "hint": "Usa la celda conjunta sobre el total de las dos temporadas.",
            "explanation": "Usa la celda conjunta sobre el total de las dos temporadas. Resultado: 50."
          },
          {
            "story": "Se clasifican reservas por canal y trimestre.",
            "prompt": "En verano se hicieron 60 reservas directas y 15 por agencia. En invierno se hicieron 25 en total. ¿Qué porcentaje del total son reservas directas de verano?",
            "options": [
              "65",
              "55",
              "60"
            ],
            "answer": 3,
            "hint": "Usa la celda conjunta sobre el total de las dos temporadas.",
            "explanation": "Usa la celda conjunta sobre el total de las dos temporadas. Resultado: 60."
          }
        ]
      },
      {
        "nombre": "Distribución condicionada",
        "facil": [
          {
            "story": "Se examinan hábitos de alojamiento.",
            "prompt": "Entre 50 clientes nacionales, 16 eligieron pensión completa. Entre 20 internacionales la eligieron 10. ¿Qué porcentaje de los nacionales eligió pensión completa?",
            "options": [
              "32",
              "37",
              "27"
            ],
            "answer": 1,
            "hint": "El grupo nacional es el denominador.",
            "explanation": "El grupo nacional es el denominador. Resultado: 32."
          },
          {
            "story": "Se examinan hábitos de alojamiento.",
            "prompt": "Entre 50 clientes nacionales, 24 eligieron pensión completa. Entre 20 internacionales la eligieron 10. ¿Qué porcentaje de los nacionales eligió pensión completa?",
            "options": [
              "53",
              "43",
              "48"
            ],
            "answer": 3,
            "hint": "El grupo nacional es el denominador.",
            "explanation": "El grupo nacional es el denominador. Resultado: 48."
          }
        ],
        "dificil": [
          {
            "story": "Se examinan hábitos de alojamiento.",
            "prompt": "Entre 50 clientes nacionales, 16 eligieron pensión completa. Entre 20 internacionales la eligieron 10. Entre todos los que eligieron pensión completa, ¿qué porcentaje es nacional?",
            "options": [
              "66,5385",
              "56,5385",
              "61,5385"
            ],
            "answer": 3,
            "hint": "Al invertir el condicionamiento cambia el denominador.",
            "explanation": "Al invertir el condicionamiento cambia el denominador. Resultado: 61,5385."
          },
          {
            "story": "Se examinan hábitos de alojamiento.",
            "prompt": "Entre 50 clientes nacionales, 24 eligieron pensión completa. Entre 20 internacionales la eligieron 10. Entre todos los que eligieron pensión completa, ¿qué porcentaje es nacional?",
            "options": [
              "65,5882",
              "70,5882",
              "75,5882"
            ],
            "answer": 2,
            "hint": "Al invertir el condicionamiento cambia el denominador.",
            "explanation": "Al invertir el condicionamiento cambia el denominador. Resultado: 70,5882."
          }
        ]
      },
      {
        "nombre": "Reconstrucción de una tabla",
        "facil": [
          {
            "story": "La agencia reconstruye un informe.",
            "prompt": "Hay 100 viajeros, 60 en hotel y 40 en hostal. Hay 20 nacionales en hotel y 12 nacionales en hostal. ¿Cuántos viajeros internacionales hay en hotel?",
            "options": [
              "45",
              "35",
              "40"
            ],
            "answer": 3,
            "hint": "Resta los nacionales del total hotelero.",
            "explanation": "Resta los nacionales del total hotelero. Resultado: 40."
          },
          {
            "story": "La agencia reconstruye un informe.",
            "prompt": "Hay 100 viajeros, 60 en hotel y 40 en hostal. Hay 30 nacionales en hotel y 12 nacionales en hostal. ¿Cuántos viajeros internacionales hay en hotel?",
            "options": [
              "25",
              "30",
              "35"
            ],
            "answer": 2,
            "hint": "Resta los nacionales del total hotelero.",
            "explanation": "Resta los nacionales del total hotelero. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "La agencia reconstruye un informe.",
            "prompt": "Hay 100 viajeros, 60 en hotel y 40 en hostal. Hay 20 nacionales en hotel y 12 nacionales en hostal. ¿Qué porcentaje de los internacionales está en hotel?",
            "options": [
              "53,8235",
              "58,8235",
              "63,8235"
            ],
            "answer": 2,
            "hint": "Resta todos los nacionales del total y usa ese marginal como denominador.",
            "explanation": "Resta todos los nacionales del total y usa ese marginal como denominador. Resultado: 58,8235."
          },
          {
            "story": "La agencia reconstruye un informe.",
            "prompt": "Hay 100 viajeros, 60 en hotel y 40 en hostal. Hay 30 nacionales en hotel y 12 nacionales en hostal. ¿Qué porcentaje de los internacionales está en hotel?",
            "options": [
              "51,7241",
              "56,7241",
              "46,7241"
            ],
            "answer": 1,
            "hint": "Resta todos los nacionales del total y usa ese marginal como denominador.",
            "explanation": "Resta todos los nacionales del total y usa ese marginal como denominador. Resultado: 51,7241."
          }
        ]
      },
      {
        "nombre": "Media condicionada",
        "facil": [
          {
            "story": "Se anotan las noches según el canal de venta.",
            "prompt": "Por agencia llegan 2 visitantes de una noche y 2 de cuatro noches. Además llegan 4 directos de dos noches. ¿Cuántas noches suman los viajeros de agencia?",
            "options": [
              "5",
              "10",
              "15"
            ],
            "answer": 2,
            "hint": "Multiplica cada estancia por su frecuencia.",
            "explanation": "Multiplica cada estancia por su frecuencia. Resultado: 10."
          },
          {
            "story": "Se anotan las noches según el canal de venta.",
            "prompt": "Por agencia llegan 2 visitantes de una noche y 3 de cuatro noches. Además llegan 4 directos de dos noches. ¿Cuántas noches suman los viajeros de agencia?",
            "options": [
              "14",
              "19",
              "9"
            ],
            "answer": 1,
            "hint": "Multiplica cada estancia por su frecuencia.",
            "explanation": "Multiplica cada estancia por su frecuencia. Resultado: 14."
          }
        ],
        "dificil": [
          {
            "story": "Se anotan las noches según el canal de venta.",
            "prompt": "Por agencia llegan 2 visitantes de una noche y 2 de cuatro noches. Además llegan 4 directos de dos noches. ¿En cuánto supera la estancia media de agencia a la media del canal directo?",
            "options": [
              "0,5",
              "0,57",
              "0,43"
            ],
            "answer": 1,
            "hint": "Calcula la media condicionada de agencia y réstale las dos noches del canal directo.",
            "explanation": "Calcula la media condicionada de agencia y réstale las dos noches del canal directo. Resultado: 0,5."
          },
          {
            "story": "Se anotan las noches según el canal de venta.",
            "prompt": "Por agencia llegan 2 visitantes de una noche y 3 de cuatro noches. Además llegan 4 directos de dos noches. ¿En cuánto supera la estancia media de agencia a la media del canal directo?",
            "options": [
              "0,87",
              "0,73",
              "0,8"
            ],
            "answer": 3,
            "hint": "Calcula la media condicionada de agencia y réstale las dos noches del canal directo.",
            "explanation": "Calcula la media condicionada de agencia y réstale las dos noches del canal directo. Resultado: 0,8."
          }
        ]
      },
      {
        "nombre": "Independencia en tablas",
        "facil": [
          {
            "story": "La guía contrasta si dos atributos se distribuyen independientemente.",
            "prompt": "Entre 100 viajeros hay 40 nacionales y 20 visitantes de museo. La celda nacional y museo contiene 11 personas. ¿Cuántos nacionales visitarían el museo bajo independencia?",
            "options": [
              "8",
              "9",
              "7"
            ],
            "answer": 1,
            "hint": "Multiplica los marginales y divide por el total.",
            "explanation": "Multiplica los marginales y divide por el total. Resultado: 8."
          },
          {
            "story": "La guía contrasta si dos atributos se distribuyen independientemente.",
            "prompt": "Entre 100 viajeros hay 40 nacionales y 30 visitantes de museo. La celda nacional y museo contiene 15 personas. ¿Cuántos nacionales visitarían el museo bajo independencia?",
            "options": [
              "17",
              "7",
              "12"
            ],
            "answer": 3,
            "hint": "Multiplica los marginales y divide por el total.",
            "explanation": "Multiplica los marginales y divide por el total. Resultado: 12."
          }
        ],
        "dificil": [
          {
            "story": "La guía contrasta si dos atributos se distribuyen independientemente.",
            "prompt": "Entre 100 viajeros hay 40 nacionales y 20 visitantes de museo. La celda nacional y museo contiene 11 personas. ¿En cuántas personas supera la celda observada a la esperada bajo independencia?",
            "options": [
              "4",
              "2",
              "3"
            ],
            "answer": 3,
            "hint": "Calcula la frecuencia esperada con ambos marginales y réstala de la observada.",
            "explanation": "Calcula la frecuencia esperada con ambos marginales y réstala de la observada. Resultado: 3."
          },
          {
            "story": "La guía contrasta si dos atributos se distribuyen independientemente.",
            "prompt": "Entre 100 viajeros hay 40 nacionales y 30 visitantes de museo. La celda nacional y museo contiene 15 personas. ¿En cuántas personas supera la celda observada a la esperada bajo independencia?",
            "options": [
              "2",
              "3",
              "4"
            ],
            "answer": 2,
            "hint": "Calcula la frecuencia esperada con ambos marginales y réstala de la observada.",
            "explanation": "Calcula la frecuencia esperada con ambos marginales y réstala de la observada. Resultado: 3."
          }
        ]
      },
      {
        "nombre": "Producto medio",
        "facil": [
          {
            "story": "Se estudian noches X y excursiones Y.",
            "prompt": "Dos fichas igualmente ponderadas tienen pares (1, 2) y (3, 4). ¿Cuál es el producto XY de la segunda ficha?",
            "options": [
              "17",
              "7",
              "12"
            ],
            "answer": 3,
            "hint": "Multiplica ambas coordenadas de la ficha.",
            "explanation": "Multiplica ambas coordenadas de la ficha. Resultado: 12."
          },
          {
            "story": "Se estudian noches X y excursiones Y.",
            "prompt": "Dos fichas igualmente ponderadas tienen pares (1, 2) y (3, 6). ¿Cuál es el producto XY de la segunda ficha?",
            "options": [
              "13",
              "18",
              "23"
            ],
            "answer": 2,
            "hint": "Multiplica ambas coordenadas de la ficha.",
            "explanation": "Multiplica ambas coordenadas de la ficha. Resultado: 18."
          }
        ],
        "dificil": [
          {
            "story": "Se estudian noches X y excursiones Y.",
            "prompt": "Dos fichas igualmente ponderadas tienen pares (1, 2) y (3, 4). ¿Cuál es el promedio de XY entre ambas fichas?",
            "options": [
              "6",
              "7",
              "8"
            ],
            "answer": 2,
            "hint": "Suma los dos productos y divide por dos.",
            "explanation": "Suma los dos productos y divide por dos. Resultado: 7."
          },
          {
            "story": "Se estudian noches X y excursiones Y.",
            "prompt": "Dos fichas igualmente ponderadas tienen pares (1, 2) y (3, 6). ¿Cuál es el promedio de XY entre ambas fichas?",
            "options": [
              "10",
              "15",
              "5"
            ],
            "answer": 1,
            "hint": "Suma los dos productos y divide por dos.",
            "explanation": "Suma los dos productos y divide por dos. Resultado: 10."
          }
        ]
      },
      {
        "nombre": "Covarianza",
        "facil": [
          {
            "story": "Una oficina cruza noches y consumo de servicios.",
            "prompt": "La media de X es 2 y la de Y es 5. La media de XY es 12. Usa divisor N. ¿Cuál es la covarianza?",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": 2,
            "hint": "Resta al producto medio el producto de las medias.",
            "explanation": "Resta al producto medio el producto de las medias. Resultado: 2."
          },
          {
            "story": "Una oficina cruza noches y consumo de servicios.",
            "prompt": "La media de X es 2 y la de Y es 5. La media de XY es 13. Usa divisor N. ¿Cuál es la covarianza?",
            "options": [
              "3",
              "4",
              "2"
            ],
            "answer": 1,
            "hint": "Resta al producto medio el producto de las medias.",
            "explanation": "Resta al producto medio el producto de las medias. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Una oficina cruza noches y consumo de servicios.",
            "prompt": "La media de X es 2 y la de Y es 5. La media de XY es 12. Usa divisor N. Si se expresa Y en otra unidad multiplicándolo por 10 y luego sumando 5, ¿qué covarianza con X resulta?",
            "options": [
              "20",
              "25",
              "15"
            ],
            "answer": 1,
            "hint": "Calcula la covarianza original y multiplícala por el cambio de escala de Y.",
            "explanation": "Calcula la covarianza original y multiplícala por el cambio de escala de Y. Resultado: 20."
          },
          {
            "story": "Una oficina cruza noches y consumo de servicios.",
            "prompt": "La media de X es 2 y la de Y es 5. La media de XY es 13. Usa divisor N. Si se expresa Y en otra unidad multiplicándolo por 10 y luego sumando 5, ¿qué covarianza con X resulta?",
            "options": [
              "35",
              "25",
              "30"
            ],
            "answer": 3,
            "hint": "Calcula la covarianza original y multiplícala por el cambio de escala de Y.",
            "explanation": "Calcula la covarianza original y multiplícala por el cambio de escala de Y. Resultado: 30."
          }
        ]
      },
      {
        "nombre": "Correlación lineal",
        "facil": [
          {
            "story": "El observatorio compara afluencia y gasto.",
            "prompt": "La covarianza es 4 y las desviaciones típicas son 4 y 2. ¿Cuál es el coeficiente de Pearson?",
            "options": [
              "0,5",
              "0,57",
              "0,43"
            ],
            "answer": 1,
            "hint": "Divide la covarianza por el producto de las desviaciones.",
            "explanation": "Divide la covarianza por el producto de las desviaciones. Resultado: 0,5."
          },
          {
            "story": "El observatorio compara afluencia y gasto.",
            "prompt": "La covarianza es 6 y las desviaciones típicas son 4 y 2. ¿Cuál es el coeficiente de Pearson?",
            "options": [
              "0,82",
              "0,68",
              "0,75"
            ],
            "answer": 3,
            "hint": "Divide la covarianza por el producto de las desviaciones.",
            "explanation": "Divide la covarianza por el producto de las desviaciones. Resultado: 0,75."
          }
        ],
        "dificil": [
          {
            "story": "El observatorio compara afluencia y gasto.",
            "prompt": "La covarianza es 4 y las desviaciones típicas son 4 y 2. En la regresión lineal simple con constante, ¿qué porcentaje de variación explica la recta?",
            "options": [
              "30",
              "20",
              "25"
            ],
            "answer": 3,
            "hint": "Eleva Pearson al cuadrado y expresa el resultado en porcentaje.",
            "explanation": "Eleva Pearson al cuadrado y expresa el resultado en porcentaje. Resultado: 25."
          },
          {
            "story": "El observatorio compara afluencia y gasto.",
            "prompt": "La covarianza es 6 y las desviaciones típicas son 4 y 2. En la regresión lineal simple con constante, ¿qué porcentaje de variación explica la recta?",
            "options": [
              "51,25",
              "56,25",
              "61,25"
            ],
            "answer": 2,
            "hint": "Eleva Pearson al cuadrado y expresa el resultado en porcentaje.",
            "explanation": "Eleva Pearson al cuadrado y expresa el resultado en porcentaje. Resultado: 56,25."
          }
        ]
      },
      {
        "nombre": "Escalas y correlación",
        "facil": [
          {
            "story": "Un hotel recodifica su indicador de satisfacción.",
            "prompt": "La correlación entre espera y satisfacción es −0,5. Se define insatisfacción como 10 menos satisfacción. ¿Qué correlación tiene espera con insatisfacción?",
            "options": [
              "0,57",
              "0,43",
              "0,5"
            ],
            "answer": 3,
            "hint": "Una transformación con pendiente negativa invierte el signo.",
            "explanation": "Una transformación con pendiente negativa invierte el signo. Resultado: 0,5."
          },
          {
            "story": "Un hotel recodifica su indicador de satisfacción.",
            "prompt": "La correlación entre espera y satisfacción es −0,6. Se define insatisfacción como 10 menos satisfacción. ¿Qué correlación tiene espera con insatisfacción?",
            "options": [
              "0,53",
              "0,6",
              "0,67"
            ],
            "answer": 2,
            "hint": "Una transformación con pendiente negativa invierte el signo.",
            "explanation": "Una transformación con pendiente negativa invierte el signo. Resultado: 0,6."
          }
        ],
        "dificil": [
          {
            "story": "Un hotel recodifica su indicador de satisfacción.",
            "prompt": "La correlación entre espera y satisfacción es −0,5. Se define insatisfacción como 10 menos satisfacción. Si la desviación de espera es 4 y la de insatisfacción es 2, ¿cuál es su covarianza?",
            "options": [
              "3",
              "4",
              "5"
            ],
            "answer": 2,
            "hint": "Invierte el signo inicial y multiplica la nueva correlación por ambas desviaciones.",
            "explanation": "Invierte el signo inicial y multiplica la nueva correlación por ambas desviaciones. Resultado: 4."
          },
          {
            "story": "Un hotel recodifica su indicador de satisfacción.",
            "prompt": "La correlación entre espera y satisfacción es −0,6. Se define insatisfacción como 10 menos satisfacción. Si la desviación de espera es 4 y la de insatisfacción es 2, ¿cuál es su covarianza?",
            "options": [
              "4,8",
              "5,8",
              "3,8"
            ],
            "answer": 1,
            "hint": "Invierte el signo inicial y multiplica la nueva correlación por ambas desviaciones.",
            "explanation": "Invierte el signo inicial y multiplica la nueva correlación por ambas desviaciones. Resultado: 4,8."
          }
        ]
      },
      {
        "nombre": "Predicción lineal",
        "facil": [
          {
            "story": "Una agencia ajusta gasto Y a noches X.",
            "prompt": "La recta estimada es Ŷ = 20 + 4X, en euros. ¿Cuál es el gasto previsto para tres noches?",
            "options": [
              "27",
              "32",
              "37"
            ],
            "answer": 2,
            "hint": "Sustituye X por 3.",
            "explanation": "Sustituye X por 3. Resultado: 32."
          },
          {
            "story": "Una agencia ajusta gasto Y a noches X.",
            "prompt": "La recta estimada es Ŷ = 20 + 6X, en euros. ¿Cuál es el gasto previsto para tres noches?",
            "options": [
              "38",
              "43",
              "33"
            ],
            "answer": 1,
            "hint": "Sustituye X por 3.",
            "explanation": "Sustituye X por 3. Resultado: 38."
          }
        ],
        "dificil": [
          {
            "story": "Una agencia ajusta gasto Y a noches X.",
            "prompt": "La recta estimada es Ŷ = 20 + 4X, en euros. Un cliente de tres noches gastó 50 €. ¿Cuál es su residuo observado menos predicho?",
            "options": [
              "18",
              "23",
              "13"
            ],
            "answer": 1,
            "hint": "Predice para tres noches y resta esa predicción de 50.",
            "explanation": "Predice para tres noches y resta esa predicción de 50. Resultado: 18."
          },
          {
            "story": "Una agencia ajusta gasto Y a noches X.",
            "prompt": "La recta estimada es Ŷ = 20 + 6X, en euros. Un cliente de tres noches gastó 50 €. ¿Cuál es su residuo observado menos predicho?",
            "options": [
              "17",
              "7",
              "12"
            ],
            "answer": 3,
            "hint": "Predice para tres noches y resta esa predicción de 50.",
            "explanation": "Predice para tres noches y resta esa predicción de 50. Resultado: 12."
          }
        ]
      },
      {
        "nombre": "Pendiente de mínimos cuadrados",
        "facil": [
          {
            "story": "El observatorio estima ventas Y a partir de visitas X.",
            "prompt": "La covarianza de X e Y es 8 y la varianza de X es 4. ¿Cuál es la pendiente estimada de Y sobre X?",
            "options": [
              "2",
              "3",
              "1"
            ],
            "answer": 1,
            "hint": "Divide covarianza por varianza de la explicativa.",
            "explanation": "Divide covarianza por varianza de la explicativa. Resultado: 2."
          },
          {
            "story": "El observatorio estima ventas Y a partir de visitas X.",
            "prompt": "La covarianza de X e Y es 12 y la varianza de X es 4. ¿Cuál es la pendiente estimada de Y sobre X?",
            "options": [
              "4",
              "2",
              "3"
            ],
            "answer": 3,
            "hint": "Divide covarianza por varianza de la explicativa.",
            "explanation": "Divide covarianza por varianza de la explicativa. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "El observatorio estima ventas Y a partir de visitas X.",
            "prompt": "La covarianza de X e Y es 8 y la varianza de X es 4. Si la media de X es 5 y la de Y es 25, ¿cuánto vale la ordenada en el origen?",
            "options": [
              "20",
              "10",
              "15"
            ],
            "answer": 3,
            "hint": "La recta con constante pasa por el punto de medias. Calcula la pendiente y despeja el intercepto.",
            "explanation": "La recta con constante pasa por el punto de medias. Calcula la pendiente y despeja el intercepto. Resultado: 15."
          },
          {
            "story": "El observatorio estima ventas Y a partir de visitas X.",
            "prompt": "La covarianza de X e Y es 12 y la varianza de X es 4. Si la media de X es 5 y la de Y es 25, ¿cuánto vale la ordenada en el origen?",
            "options": [
              "5",
              "10",
              "15"
            ],
            "answer": 2,
            "hint": "La recta con constante pasa por el punto de medias. Calcula la pendiente y despeja el intercepto.",
            "explanation": "La recta con constante pasa por el punto de medias. Calcula la pendiente y despeja el intercepto. Resultado: 10."
          }
        ]
      },
      {
        "nombre": "Interpretación del cambio",
        "facil": [
          {
            "story": "La oferta de plazas sigue una recta ajustada.",
            "prompt": "Para X grupos previstos, la estimación es Ŷ = 8 + 6X plazas. ¿En cuánto sube la predicción por un grupo adicional?",
            "options": [
              "7",
              "5",
              "6"
            ],
            "answer": 3,
            "hint": "La pendiente es el cambio por unidad.",
            "explanation": "La pendiente es el cambio por unidad. Resultado: 6."
          },
          {
            "story": "La oferta de plazas sigue una recta ajustada.",
            "prompt": "Para X grupos previstos, la estimación es Ŷ = 8 + 9X plazas. ¿En cuánto sube la predicción por un grupo adicional?",
            "options": [
              "8",
              "9",
              "10"
            ],
            "answer": 2,
            "hint": "La pendiente es el cambio por unidad.",
            "explanation": "La pendiente es el cambio por unidad. Resultado: 9."
          }
        ],
        "dificil": [
          {
            "story": "La oferta de plazas sigue una recta ajustada.",
            "prompt": "Para X grupos previstos, la estimación es Ŷ = 8 + 6X plazas. ¿Cuánto aumenta la predicción al pasar de 2 a 7 grupos?",
            "options": [
              "25",
              "30",
              "35"
            ],
            "answer": 2,
            "hint": "Multiplica la pendiente por el cambio de cinco grupos.",
            "explanation": "Multiplica la pendiente por el cambio de cinco grupos. Resultado: 30."
          },
          {
            "story": "La oferta de plazas sigue una recta ajustada.",
            "prompt": "Para X grupos previstos, la estimación es Ŷ = 8 + 9X plazas. ¿Cuánto aumenta la predicción al pasar de 2 a 7 grupos?",
            "options": [
              "45",
              "50",
              "40"
            ],
            "answer": 1,
            "hint": "Multiplica la pendiente por el cambio de cinco grupos.",
            "explanation": "Multiplica la pendiente por el cambio de cinco grupos. Resultado: 45."
          }
        ]
      },
      {
        "nombre": "Residuo y ajuste",
        "facil": [
          {
            "story": "La oficina revisa predicciones de aforo.",
            "prompt": "El modelo predice 19 asistentes. Se observaron 25. ¿Cuál es el residuo observado menos predicho?",
            "options": [
              "5",
              "6",
              "7"
            ],
            "answer": 2,
            "hint": "Resta la predicción al dato.",
            "explanation": "Resta la predicción al dato. Resultado: 6."
          },
          {
            "story": "La oficina revisa predicciones de aforo.",
            "prompt": "El modelo predice 21 asistentes. Se observaron 25. ¿Cuál es el residuo observado menos predicho?",
            "options": [
              "4",
              "5",
              "3"
            ],
            "answer": 1,
            "hint": "Resta la predicción al dato.",
            "explanation": "Resta la predicción al dato. Resultado: 4."
          }
        ],
        "dificil": [
          {
            "story": "La oficina revisa predicciones de aforo.",
            "prompt": "El modelo predice 19 asistentes. Se observaron 25. ¿Cuál es el aporte de esta observación a la suma de cuadrados residual?",
            "options": [
              "36",
              "41",
              "31"
            ],
            "answer": 1,
            "hint": "Calcula el residuo y elévalo al cuadrado.",
            "explanation": "Calcula el residuo y elévalo al cuadrado. Resultado: 36."
          },
          {
            "story": "La oficina revisa predicciones de aforo.",
            "prompt": "El modelo predice 21 asistentes. Se observaron 25. ¿Cuál es el aporte de esta observación a la suma de cuadrados residual?",
            "options": [
              "21",
              "11",
              "16"
            ],
            "answer": 3,
            "hint": "Calcula el residuo y elévalo al cuadrado.",
            "explanation": "Calcula el residuo y elévalo al cuadrado. Resultado: 16."
          }
        ]
      },
      {
        "nombre": "Descomposición de variabilidad",
        "facil": [
          {
            "story": "Se ajustó una recta con constante para ingresos turísticos.",
            "prompt": "La suma total de cuadrados es 100 y la residual es 20. ¿Cuánto vale la suma explicada de cuadrados?",
            "options": [
              "80",
              "85",
              "75"
            ],
            "answer": 1,
            "hint": "Resta la parte residual de la total.",
            "explanation": "Resta la parte residual de la total. Resultado: 80."
          },
          {
            "story": "Se ajustó una recta con constante para ingresos turísticos.",
            "prompt": "La suma total de cuadrados es 100 y la residual es 30. ¿Cuánto vale la suma explicada de cuadrados?",
            "options": [
              "75",
              "65",
              "70"
            ],
            "answer": 3,
            "hint": "Resta la parte residual de la total.",
            "explanation": "Resta la parte residual de la total. Resultado: 70."
          }
        ],
        "dificil": [
          {
            "story": "Se ajustó una recta con constante para ingresos turísticos.",
            "prompt": "La suma total de cuadrados es 100 y la residual es 20. ¿Qué valor de R² se ganaría si otro ajuste redujera la suma residual a la mitad?",
            "options": [
              "0,17",
              "0,03",
              "0,1"
            ],
            "answer": 3,
            "hint": "La ganancia de R² equivale a la reducción residual dividida por el total.",
            "explanation": "La ganancia de R² equivale a la reducción residual dividida por el total. Resultado: 0,1."
          },
          {
            "story": "Se ajustó una recta con constante para ingresos turísticos.",
            "prompt": "La suma total de cuadrados es 100 y la residual es 30. ¿Qué valor de R² se ganaría si otro ajuste redujera la suma residual a la mitad?",
            "options": [
              "0,08",
              "0,15",
              "0,22"
            ],
            "answer": 2,
            "hint": "La ganancia de R² equivale a la reducción residual dividida por el total.",
            "explanation": "La ganancia de R² equivale a la reducción residual dividida por el total. Resultado: 0,15."
          }
        ]
      },
      {
        "nombre": "Rectas de regresión",
        "facil": [
          {
            "story": "Se comparan regresiones simples con constante sobre los mismos visitantes.",
            "prompt": "La pendiente de Y sobre X es 2 y la de X sobre Y es 0,2. ¿Cuánto vale el producto de las pendientes?",
            "options": [
              "0,47",
              "0,33",
              "0,4"
            ],
            "answer": 3,
            "hint": "Multiplica los dos coeficientes.",
            "explanation": "Multiplica los dos coeficientes. Resultado: 0,4."
          },
          {
            "story": "Se comparan regresiones simples con constante sobre los mismos visitantes.",
            "prompt": "La pendiente de Y sobre X es 3 y la de X sobre Y es 0,2. ¿Cuánto vale el producto de las pendientes?",
            "options": [
              "0,53",
              "0,6",
              "0,67"
            ],
            "answer": 2,
            "hint": "Multiplica los dos coeficientes.",
            "explanation": "Multiplica los dos coeficientes. Resultado: 0,6."
          }
        ],
        "dificil": [
          {
            "story": "Se comparan regresiones simples con constante sobre los mismos visitantes.",
            "prompt": "La pendiente de Y sobre X es 2 y la de X sobre Y es 0,2. ¿Cuál es la correlación de Pearson, redondeada a cuatro decimales?",
            "options": [
              "0,5625",
              "0,6325",
              "0,7025"
            ],
            "answer": 2,
            "hint": "El producto es r². Elige la raíz de signo positivo porque ambas pendientes son positivas.",
            "explanation": "El producto es r². Elige la raíz de signo positivo porque ambas pendientes son positivas. Resultado: 0,6325."
          },
          {
            "story": "Se comparan regresiones simples con constante sobre los mismos visitantes.",
            "prompt": "La pendiente de Y sobre X es 3 y la de X sobre Y es 0,2. ¿Cuál es la correlación de Pearson, redondeada a cuatro decimales?",
            "options": [
              "0,7746",
              "0,8446",
              "0,7046"
            ],
            "answer": 1,
            "hint": "El producto es r². Elige la raíz de signo positivo porque ambas pendientes son positivas.",
            "explanation": "El producto es r². Elige la raíz de signo positivo porque ambas pendientes son positivas. Resultado: 0,7746."
          }
        ]
      },
      {
        "nombre": "Dominio de predicción",
        "facil": [
          {
            "story": "Una guía ajustó gasto medio por tamaño del grupo.",
            "prompt": "Solo se observaron grupos de 2 a 10 personas. La recta estimada es Ŷ = 30 + 2X. ¿Cuál es la predicción para 8 personas?",
            "options": [
              "41",
              "46",
              "51"
            ],
            "answer": 2,
            "hint": "Sustituye el tamaño del grupo observado.",
            "explanation": "Sustituye el tamaño del grupo observado. Resultado: 46."
          },
          {
            "story": "Una guía ajustó gasto medio por tamaño del grupo.",
            "prompt": "Solo se observaron grupos de 2 a 10 personas. La recta estimada es Ŷ = 30 + 3X. ¿Cuál es la predicción para 8 personas?",
            "options": [
              "54",
              "59",
              "49"
            ],
            "answer": 1,
            "hint": "Sustituye el tamaño del grupo observado.",
            "explanation": "Sustituye el tamaño del grupo observado. Resultado: 54."
          }
        ],
        "dificil": [
          {
            "story": "Una guía ajustó gasto medio por tamaño del grupo.",
            "prompt": "Solo se observaron grupos de 2 a 10 personas. La recta estimada es Ŷ = 30 + 2X. Al extrapolar a 15 personas, ¿en cuánto supera la predicción a la del mayor grupo observado?",
            "options": [
              "10",
              "15",
              "5"
            ],
            "answer": 1,
            "hint": "Compara predicciones para X igual a 15 y 10. La diferencia no valida la extrapolación.",
            "explanation": "Compara predicciones para X igual a 15 y 10. La diferencia no valida la extrapolación. Resultado: 10."
          },
          {
            "story": "Una guía ajustó gasto medio por tamaño del grupo.",
            "prompt": "Solo se observaron grupos de 2 a 10 personas. La recta estimada es Ŷ = 30 + 3X. Al extrapolar a 15 personas, ¿en cuánto supera la predicción a la del mayor grupo observado?",
            "options": [
              "20",
              "10",
              "15"
            ],
            "answer": 3,
            "hint": "Compara predicciones para X igual a 15 y 10. La diferencia no valida la extrapolación.",
            "explanation": "Compara predicciones para X igual a 15 y 10. La diferencia no valida la extrapolación. Resultado: 15."
          }
        ]
      }
    ]
  },
  {
    "id": "b3",
    "nombre": "Bloque 3 · Números índices, precios, cantidades y valor",
    "apartados": [
      {
        "nombre": "Índice simple",
        "facil": [
          {
            "story": "La taquilla compara afluencia con un año base.",
            "prompt": "Se pasa de 200 a 220 visitas. ¿Qué índice base 100 resulta?",
            "options": [
              "110",
              "115",
              "105"
            ],
            "answer": 1,
            "hint": "Divide el nivel actual entre el inicial y multiplica por cien.",
            "explanation": "Divide el nivel actual entre el inicial y multiplica por cien. Resultado: 110."
          },
          {
            "story": "La taquilla compara afluencia con un año base.",
            "prompt": "Se pasa de 200 a 230 visitas. ¿Qué índice base 100 resulta?",
            "options": [
              "120",
              "110",
              "115"
            ],
            "answer": 3,
            "hint": "Divide el nivel actual entre el inicial y multiplica por cien.",
            "explanation": "Divide el nivel actual entre el inicial y multiplica por cien. Resultado: 115."
          }
        ],
        "dificil": [
          {
            "story": "La taquilla compara afluencia con un año base.",
            "prompt": "Se pasa de 200 a 220 visitas. Si el periodo siguiente gana otras 20 visitas, ¿qué índice tiene respecto al periodo intermedio?",
            "options": [
              "114,0909",
              "104,0909",
              "109,0909"
            ],
            "answer": 3,
            "hint": "Usa el nivel intermedio como nueva base y el último como numerador.",
            "explanation": "Usa el nivel intermedio como nueva base y el último como numerador. Resultado: 109,0909."
          },
          {
            "story": "La taquilla compara afluencia con un año base.",
            "prompt": "Se pasa de 200 a 230 visitas. Si el periodo siguiente gana otras 20 visitas, ¿qué índice tiene respecto al periodo intermedio?",
            "options": [
              "103,6957",
              "108,6957",
              "113,6957"
            ],
            "answer": 2,
            "hint": "Usa el nivel intermedio como nueva base y el último como numerador.",
            "explanation": "Usa el nivel intermedio como nueva base y el último como numerador. Resultado: 108,6957."
          }
        ]
      },
      {
        "nombre": "Variación frente al año base",
        "facil": [
          {
            "story": "El observatorio indexa las pernoctaciones.",
            "prompt": "El índice es 120 con base 100 y hubo 500 estancias en la base. ¿Cuál es el crecimiento porcentual desde la base?",
            "options": [
              "25",
              "15",
              "20"
            ],
            "answer": 3,
            "hint": "Compara el índice con cien.",
            "explanation": "Compara el índice con cien. Resultado: 20."
          },
          {
            "story": "El observatorio indexa las pernoctaciones.",
            "prompt": "El índice es 130 con base 100 y hubo 500 estancias en la base. ¿Cuál es el crecimiento porcentual desde la base?",
            "options": [
              "25",
              "30",
              "35"
            ],
            "answer": 2,
            "hint": "Compara el índice con cien.",
            "explanation": "Compara el índice con cien. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "El observatorio indexa las pernoctaciones.",
            "prompt": "El índice es 120 con base 100 y hubo 500 estancias en la base. ¿Cuántas estancias adicionales hubo frente a la base?",
            "options": [
              "95",
              "100",
              "105"
            ],
            "answer": 2,
            "hint": "Aplica la tasa de crecimiento al nivel inicial de 500.",
            "explanation": "Aplica la tasa de crecimiento al nivel inicial de 500. Resultado: 100."
          },
          {
            "story": "El observatorio indexa las pernoctaciones.",
            "prompt": "El índice es 130 con base 100 y hubo 500 estancias en la base. ¿Cuántas estancias adicionales hubo frente a la base?",
            "options": [
              "150",
              "155",
              "145"
            ],
            "answer": 1,
            "hint": "Aplica la tasa de crecimiento al nivel inicial de 500.",
            "explanation": "Aplica la tasa de crecimiento al nivel inicial de 500. Resultado: 150."
          }
        ]
      },
      {
        "nombre": "Recuperación del nivel base",
        "facil": [
          {
            "story": "Se revisan entradas vendidas.",
            "prompt": "El índice actual es 125 y ahora se venden 250 entradas. ¿Qué factor multiplica al nivel inicial?",
            "options": [
              "1,18",
              "1,25",
              "1,32"
            ],
            "answer": 2,
            "hint": "Divide el índice por cien.",
            "explanation": "Divide el índice por cien. Resultado: 1,25."
          },
          {
            "story": "Se revisan entradas vendidas.",
            "prompt": "El índice actual es 125 y ahora se venden 375 entradas. ¿Qué factor multiplica al nivel inicial?",
            "options": [
              "1,25",
              "1,32",
              "1,18"
            ],
            "answer": 1,
            "hint": "Divide el índice por cien.",
            "explanation": "Divide el índice por cien. Resultado: 1,25."
          }
        ],
        "dificil": [
          {
            "story": "Se revisan entradas vendidas.",
            "prompt": "El índice actual es 125 y ahora se venden 250 entradas. ¿Cuántas entradas adicionales se venden respecto a la base?",
            "options": [
              "50",
              "55",
              "45"
            ],
            "answer": 1,
            "hint": "Divide las ventas actuales por 1,25 y resta el nivel base a las actuales.",
            "explanation": "Divide las ventas actuales por 1,25 y resta el nivel base a las actuales. Resultado: 50."
          },
          {
            "story": "Se revisan entradas vendidas.",
            "prompt": "El índice actual es 125 y ahora se venden 375 entradas. ¿Cuántas entradas adicionales se venden respecto a la base?",
            "options": [
              "80",
              "70",
              "75"
            ],
            "answer": 3,
            "hint": "Divide las ventas actuales por 1,25 y resta el nivel base a las actuales.",
            "explanation": "Divide las ventas actuales por 1,25 y resta el nivel base a las actuales. Resultado: 75."
          }
        ]
      },
      {
        "nombre": "Selección de base",
        "facil": [
          {
            "story": "La oficina conserva series de precios.",
            "prompt": "La tarifa fue 50 € en A, 60 € en B y 70 € en C. ¿Qué índice tiene B con base A?",
            "options": [
              "120",
              "125",
              "115"
            ],
            "answer": 1,
            "hint": "Compara B con A en tanto por cien.",
            "explanation": "Compara B con A en tanto por cien. Resultado: 120."
          },
          {
            "story": "La oficina conserva series de precios.",
            "prompt": "La tarifa fue 50 € en A, 60 € en B y 75 € en C. ¿Qué índice tiene B con base A?",
            "options": [
              "125",
              "115",
              "120"
            ],
            "answer": 3,
            "hint": "Compara B con A en tanto por cien.",
            "explanation": "Compara B con A en tanto por cien. Resultado: 120."
          }
        ],
        "dificil": [
          {
            "story": "La oficina conserva series de precios.",
            "prompt": "La tarifa fue 50 € en A, 60 € en B y 70 € en C. ¿Qué índice tiene A con base C?",
            "options": [
              "76,4286",
              "66,4286",
              "71,4286"
            ],
            "answer": 3,
            "hint": "Ahora el numerador es el precio de A y el denominador el de C.",
            "explanation": "Ahora el numerador es el precio de A y el denominador el de C. Resultado: 71,4286."
          },
          {
            "story": "La oficina conserva series de precios.",
            "prompt": "La tarifa fue 50 € en A, 60 € en B y 75 € en C. ¿Qué índice tiene A con base C?",
            "options": [
              "61,6667",
              "66,6667",
              "71,6667"
            ],
            "answer": 2,
            "hint": "Ahora el numerador es el precio de A y el denominador el de C.",
            "explanation": "Ahora el numerador es el precio de A y el denominador el de C. Resultado: 66,6667."
          }
        ]
      },
      {
        "nombre": "Cambio de base",
        "facil": [
          {
            "story": "Los índices de visitas a dos exposiciones temporales corresponden a fechas sucesivas.",
            "prompt": "En la misma serie con base antigua, el índice de enero es 120 y el de marzo 132. Al elegir enero como base, ¿qué índice tendrá enero?",
            "options": [
              "105",
              "95",
              "100"
            ],
            "answer": 3,
            "hint": "Todo periodo base se compara consigo mismo.",
            "explanation": "Todo periodo base se compara consigo mismo. Resultado: 100."
          },
          {
            "story": "Los índices de visitas a dos exposiciones temporales corresponden a fechas sucesivas.",
            "prompt": "En la misma serie con base antigua, el índice de enero es 120 y el de marzo 138. Al elegir enero como base, ¿qué índice tendrá enero?",
            "options": [
              "95",
              "100",
              "105"
            ],
            "answer": 2,
            "hint": "Todo periodo base se compara consigo mismo.",
            "explanation": "Todo periodo base se compara consigo mismo. Resultado: 100."
          }
        ],
        "dificil": [
          {
            "story": "Los índices de visitas a dos exposiciones temporales corresponden a fechas sucesivas.",
            "prompt": "En la misma serie con base antigua, el índice de enero es 120 y el de marzo 132. ¿Qué índice tendrá marzo con enero como base?",
            "options": [
              "105",
              "110",
              "115"
            ],
            "answer": 2,
            "hint": "Divide el índice antiguo de marzo por el de enero y multiplica por cien.",
            "explanation": "Divide el índice antiguo de marzo por el de enero y multiplica por cien. Resultado: 110."
          },
          {
            "story": "Los índices de visitas a dos exposiciones temporales corresponden a fechas sucesivas.",
            "prompt": "En la misma serie con base antigua, el índice de enero es 120 y el de marzo 138. ¿Qué índice tendrá marzo con enero como base?",
            "options": [
              "115",
              "120",
              "110"
            ],
            "answer": 1,
            "hint": "Divide el índice antiguo de marzo por el de enero y multiplica por cien.",
            "explanation": "Divide el índice antiguo de marzo por el de enero y multiplica por cien. Resultado: 115."
          }
        ]
      },
      {
        "nombre": "Encadenamiento",
        "facil": [
          {
            "story": "Un tren turístico registra la evolución de viajeros.",
            "prompt": "El primer año crecen un 10 % y el segundo un 10 %. ¿Cuál es el factor multiplicativo del segundo año?",
            "options": [
              "1,03",
              "1,1",
              "1,17"
            ],
            "answer": 2,
            "hint": "Suma uno a la tasa expresada en tanto por uno.",
            "explanation": "Suma uno a la tasa expresada en tanto por uno. Resultado: 1,1."
          },
          {
            "story": "Un tren turístico registra la evolución de viajeros.",
            "prompt": "El primer año crecen un 10 % y el segundo un 15 %. ¿Cuál es el factor multiplicativo del segundo año?",
            "options": [
              "1,15",
              "1,22",
              "1,08"
            ],
            "answer": 1,
            "hint": "Suma uno a la tasa expresada en tanto por uno.",
            "explanation": "Suma uno a la tasa expresada en tanto por uno. Resultado: 1,15."
          }
        ],
        "dificil": [
          {
            "story": "Un tren turístico registra la evolución de viajeros.",
            "prompt": "El primer año crecen un 10 % y el segundo un 10 %. ¿Cuál es la tasa acumulada de ambos años, en porcentaje?",
            "options": [
              "21",
              "26",
              "16"
            ],
            "answer": 1,
            "hint": "Multiplica los dos factores anuales y convierte el producto en tasa.",
            "explanation": "Multiplica los dos factores anuales y convierte el producto en tasa. Resultado: 21."
          },
          {
            "story": "Un tren turístico registra la evolución de viajeros.",
            "prompt": "El primer año crecen un 10 % y el segundo un 15 %. ¿Cuál es la tasa acumulada de ambos años, en porcentaje?",
            "options": [
              "31,5",
              "21,5",
              "26,5"
            ],
            "answer": 3,
            "hint": "Multiplica los dos factores anuales y convierte el producto en tasa.",
            "explanation": "Multiplica los dos factores anuales y convierte el producto en tasa. Resultado: 26,5."
          }
        ]
      },
      {
        "nombre": "Tasa interanual",
        "facil": [
          {
            "story": "Se comparan dos meses de agosto.",
            "prompt": "El índice de agosto pasado fue 80 y el actual es 88. ¿Cuántos puntos de índice ha ganado?",
            "options": [
              "8",
              "9",
              "7"
            ],
            "answer": 1,
            "hint": "Resta los índices directamente.",
            "explanation": "Resta los índices directamente. Resultado: 8."
          },
          {
            "story": "Se comparan dos meses de agosto.",
            "prompt": "El índice de agosto pasado fue 80 y el actual es 92. ¿Cuántos puntos de índice ha ganado?",
            "options": [
              "17",
              "7",
              "12"
            ],
            "answer": 3,
            "hint": "Resta los índices directamente.",
            "explanation": "Resta los índices directamente. Resultado: 12."
          }
        ],
        "dificil": [
          {
            "story": "Se comparan dos meses de agosto.",
            "prompt": "El índice de agosto pasado fue 80 y el actual es 88. ¿Cuál es el crecimiento interanual en porcentaje?",
            "options": [
              "15",
              "5",
              "10"
            ],
            "answer": 3,
            "hint": "Divide la diferencia de índices por el índice de partida y multiplica por cien.",
            "explanation": "Divide la diferencia de índices por el índice de partida y multiplica por cien. Resultado: 10."
          },
          {
            "story": "Se comparan dos meses de agosto.",
            "prompt": "El índice de agosto pasado fue 80 y el actual es 92. ¿Cuál es el crecimiento interanual en porcentaje?",
            "options": [
              "10",
              "15",
              "20"
            ],
            "answer": 2,
            "hint": "Divide la diferencia de índices por el índice de partida y multiplica por cien.",
            "explanation": "Divide la diferencia de índices por el índice de partida y multiplica por cien. Resultado: 15."
          }
        ]
      },
      {
        "nombre": "Tasa media acumulativa",
        "facil": [
          {
            "story": "El observatorio compara dos intervalos anuales completos.",
            "prompt": "En dos años la afluencia pasa de 100 a 144 visitantes. ¿Cuál es el aumento absoluto?",
            "options": [
              "49",
              "39",
              "44"
            ],
            "answer": 3,
            "hint": "Resta el nivel inicial al final.",
            "explanation": "Resta el nivel inicial al final. Resultado: 44."
          },
          {
            "story": "El observatorio compara dos intervalos anuales completos.",
            "prompt": "En dos años la afluencia pasa de 100 a 169 visitantes. ¿Cuál es el aumento absoluto?",
            "options": [
              "64",
              "69",
              "74"
            ],
            "answer": 2,
            "hint": "Resta el nivel inicial al final.",
            "explanation": "Resta el nivel inicial al final. Resultado: 69."
          }
        ],
        "dificil": [
          {
            "story": "El observatorio compara dos intervalos anuales completos.",
            "prompt": "En dos años la afluencia pasa de 100 a 144 visitantes. ¿Qué tasa anual constante, en porcentaje, reproduce ese crecimiento?",
            "options": [
              "15",
              "20",
              "25"
            ],
            "answer": 2,
            "hint": "Toma la raíz cuadrada del cociente final entre inicial y conviértela en tasa.",
            "explanation": "Toma la raíz cuadrada del cociente final entre inicial y conviértela en tasa. Resultado: 20."
          },
          {
            "story": "El observatorio compara dos intervalos anuales completos.",
            "prompt": "En dos años la afluencia pasa de 100 a 169 visitantes. ¿Qué tasa anual constante, en porcentaje, reproduce ese crecimiento?",
            "options": [
              "30",
              "35",
              "25"
            ],
            "answer": 1,
            "hint": "Toma la raíz cuadrada del cociente final entre inicial y conviértela en tasa.",
            "explanation": "Toma la raíz cuadrada del cociente final entre inicial y conviértela en tasa. Resultado: 30."
          }
        ]
      },
      {
        "nombre": "Índice agregado simple",
        "facil": [
          {
            "story": "La agencia compara dos precios en euros por servicio.",
            "prompt": "La suma de precios iniciales es 40 € y la actual es 48 €. ¿Cuál es la diferencia entre sumas?",
            "options": [
              "7",
              "8",
              "9"
            ],
            "answer": 2,
            "hint": "Compara las sumas en euros.",
            "explanation": "Compara las sumas en euros. Resultado: 8."
          },
          {
            "story": "La agencia compara dos precios en euros por servicio.",
            "prompt": "La suma de precios iniciales es 40 € y la actual es 52 €. ¿Cuál es la diferencia entre sumas?",
            "options": [
              "12",
              "17",
              "7"
            ],
            "answer": 1,
            "hint": "Compara las sumas en euros.",
            "explanation": "Compara las sumas en euros. Resultado: 12."
          }
        ],
        "dificil": [
          {
            "story": "La agencia compara dos precios en euros por servicio.",
            "prompt": "La suma de precios iniciales es 40 € y la actual es 48 €. ¿Cuál es el índice agregado simple de precios con base 100?",
            "options": [
              "120",
              "125",
              "115"
            ],
            "answer": 1,
            "hint": "Calcula el cociente de sumas, después multiplícalo por cien.",
            "explanation": "Calcula el cociente de sumas, después multiplícalo por cien. Resultado: 120."
          },
          {
            "story": "La agencia compara dos precios en euros por servicio.",
            "prompt": "La suma de precios iniciales es 40 € y la actual es 52 €. ¿Cuál es el índice agregado simple de precios con base 100?",
            "options": [
              "135",
              "125",
              "130"
            ],
            "answer": 3,
            "hint": "Calcula el cociente de sumas, después multiplícalo por cien.",
            "explanation": "Calcula el cociente de sumas, después multiplícalo por cien. Resultado: 130."
          }
        ]
      },
      {
        "nombre": "Media de índices simples",
        "facil": [
          {
            "story": "Se resumen precios de dos servicios.",
            "prompt": "Sus índices simples son 110 y 120, ambos de igual base. ¿Cuál es la media aritmética simple?",
            "options": [
              "115",
              "120",
              "110"
            ],
            "answer": 1,
            "hint": "Suma los índices y divide por dos.",
            "explanation": "Suma los índices y divide por dos. Resultado: 115."
          },
          {
            "story": "Se resumen precios de dos servicios.",
            "prompt": "Sus índices simples son 110 y 125, ambos de igual base. ¿Cuál es la media aritmética simple?",
            "options": [
              "122,5",
              "112,5",
              "117,5"
            ],
            "answer": 3,
            "hint": "Suma los índices y divide por dos.",
            "explanation": "Suma los índices y divide por dos. Resultado: 117,5."
          }
        ],
        "dificil": [
          {
            "story": "Se resumen precios de dos servicios.",
            "prompt": "Sus índices simples son 110 y 120, ambos de igual base. Con ponderaciones 20 % y 80 %, respectivamente, ¿cuál es el índice medio ponderado?",
            "options": [
              "123",
              "113",
              "118"
            ],
            "answer": 3,
            "hint": "Aplica cada peso al índice correspondiente y suma ambos productos.",
            "explanation": "Aplica cada peso al índice correspondiente y suma ambos productos. Resultado: 118."
          },
          {
            "story": "Se resumen precios de dos servicios.",
            "prompt": "Sus índices simples son 110 y 125, ambos de igual base. Con ponderaciones 20 % y 80 %, respectivamente, ¿cuál es el índice medio ponderado?",
            "options": [
              "117",
              "122",
              "127"
            ],
            "answer": 2,
            "hint": "Aplica cada peso al índice correspondiente y suma ambos productos.",
            "explanation": "Aplica cada peso al índice correspondiente y suma ambos productos. Resultado: 122."
          }
        ]
      },
      {
        "nombre": "Índice de valor",
        "facil": [
          {
            "story": "La agencia compara su facturación.",
            "prompt": "Inicialmente vende 100 entradas a 10 €. Ahora vende 120 entradas a 12 €. ¿Cuál es el valor actual en euros?",
            "options": [
              "1445",
              "1435",
              "1440"
            ],
            "answer": 3,
            "hint": "Multiplica precio por cantidad del mismo periodo.",
            "explanation": "Multiplica precio por cantidad del mismo periodo. Resultado: 1440."
          },
          {
            "story": "La agencia compara su facturación.",
            "prompt": "Inicialmente vende 100 entradas a 10 €. Ahora vende 130 entradas a 12 €. ¿Cuál es el valor actual en euros?",
            "options": [
              "1555",
              "1560",
              "1565"
            ],
            "answer": 2,
            "hint": "Multiplica precio por cantidad del mismo periodo.",
            "explanation": "Multiplica precio por cantidad del mismo periodo. Resultado: 1560."
          }
        ],
        "dificil": [
          {
            "story": "La agencia compara su facturación.",
            "prompt": "Inicialmente vende 100 entradas a 10 €. Ahora vende 120 entradas a 12 €. ¿Cuál es el índice de valor con base inicial 100?",
            "options": [
              "139",
              "144",
              "149"
            ],
            "answer": 2,
            "hint": "Divide la facturación actual entre la inicial de 1000 € y multiplica por cien.",
            "explanation": "Divide la facturación actual entre la inicial de 1000 € y multiplica por cien. Resultado: 144."
          },
          {
            "story": "La agencia compara su facturación.",
            "prompt": "Inicialmente vende 100 entradas a 10 €. Ahora vende 130 entradas a 12 €. ¿Cuál es el índice de valor con base inicial 100?",
            "options": [
              "156",
              "161",
              "151"
            ],
            "answer": 1,
            "hint": "Divide la facturación actual entre la inicial de 1000 € y multiplica por cien.",
            "explanation": "Divide la facturación actual entre la inicial de 1000 € y multiplica por cien. Resultado: 156."
          }
        ]
      },
      {
        "nombre": "Precios de Laspeyres",
        "facil": [
          {
            "story": "Se valora la cesta fija de un circuito.",
            "prompt": "La cesta base contiene 2 pases y 1 guía. Antes costaban 10 y 20 €. Ahora cuestan 12 y 22 €. ¿Cuánto costaba la cesta base a precios iniciales?",
            "options": [
              "35",
              "40",
              "45"
            ],
            "answer": 2,
            "hint": "Multiplica precios base por cantidades base.",
            "explanation": "Multiplica precios base por cantidades base. Resultado: 40."
          },
          {
            "story": "Se valora la cesta fija de un circuito.",
            "prompt": "La cesta base contiene 2 pases y 1 guía. Antes costaban 10 y 20 €. Ahora cuestan 13 y 22 €. ¿Cuánto costaba la cesta base a precios iniciales?",
            "options": [
              "40",
              "45",
              "35"
            ],
            "answer": 1,
            "hint": "Multiplica precios base por cantidades base.",
            "explanation": "Multiplica precios base por cantidades base. Resultado: 40."
          }
        ],
        "dificil": [
          {
            "story": "Se valora la cesta fija de un circuito.",
            "prompt": "La cesta base contiene 2 pases y 1 guía. Antes costaban 10 y 20 €. Ahora cuestan 12 y 22 €. ¿Cuál es el índice de precios de Laspeyres?",
            "options": [
              "115",
              "120",
              "110"
            ],
            "answer": 1,
            "hint": "Valora las cantidades base a precios actuales y divide por su coste inicial.",
            "explanation": "Valora las cantidades base a precios actuales y divide por su coste inicial. Resultado: 115."
          },
          {
            "story": "Se valora la cesta fija de un circuito.",
            "prompt": "La cesta base contiene 2 pases y 1 guía. Antes costaban 10 y 20 €. Ahora cuestan 13 y 22 €. ¿Cuál es el índice de precios de Laspeyres?",
            "options": [
              "125",
              "115",
              "120"
            ],
            "answer": 3,
            "hint": "Valora las cantidades base a precios actuales y divide por su coste inicial.",
            "explanation": "Valora las cantidades base a precios actuales y divide por su coste inicial. Resultado: 120."
          }
        ]
      },
      {
        "nombre": "Precios de Paasche",
        "facil": [
          {
            "story": "La cesta actual de excursiones difiere de la inicial.",
            "prompt": "Ahora se compran 3 rutas y 2 talleres. Los precios iniciales eran 10 y 20 €. Los actuales son 12 y 22 €. ¿Qué coste tendría la cesta actual a precios iniciales?",
            "options": [
              "70",
              "75",
              "65"
            ],
            "answer": 1,
            "hint": "Utiliza las cantidades actuales y los precios base.",
            "explanation": "Utiliza las cantidades actuales y los precios base. Resultado: 70."
          },
          {
            "story": "La cesta actual de excursiones difiere de la inicial.",
            "prompt": "Ahora se compran 3 rutas y 3 talleres. Los precios iniciales eran 10 y 20 €. Los actuales son 12 y 22 €. ¿Qué coste tendría la cesta actual a precios iniciales?",
            "options": [
              "95",
              "85",
              "90"
            ],
            "answer": 3,
            "hint": "Utiliza las cantidades actuales y los precios base.",
            "explanation": "Utiliza las cantidades actuales y los precios base. Resultado: 90."
          }
        ],
        "dificil": [
          {
            "story": "La cesta actual de excursiones difiere de la inicial.",
            "prompt": "Ahora se compran 3 rutas y 2 talleres. Los precios iniciales eran 10 y 20 €. Los actuales son 12 y 22 €. ¿Cuál es el índice de precios de Paasche?",
            "options": [
              "119,2857",
              "109,2857",
              "114,2857"
            ],
            "answer": 3,
            "hint": "Compara el coste de la cesta actual a precios actuales y a precios iniciales.",
            "explanation": "Compara el coste de la cesta actual a precios actuales y a precios iniciales. Resultado: 114,2857."
          },
          {
            "story": "La cesta actual de excursiones difiere de la inicial.",
            "prompt": "Ahora se compran 3 rutas y 3 talleres. Los precios iniciales eran 10 y 20 €. Los actuales son 12 y 22 €. ¿Cuál es el índice de precios de Paasche?",
            "options": [
              "108,3333",
              "113,3333",
              "118,3333"
            ],
            "answer": 2,
            "hint": "Compara el coste de la cesta actual a precios actuales y a precios iniciales.",
            "explanation": "Compara el coste de la cesta actual a precios actuales y a precios iniciales. Resultado: 113,3333."
          }
        ]
      },
      {
        "nombre": "Cantidades de Laspeyres",
        "facil": [
          {
            "story": "Se comparan entradas de dos tipos.",
            "prompt": "A precios iniciales de 10 y 20 €, se vendían 4 y 2 entradas. Ahora se venden 6 y 3. ¿Qué valor tenía la cesta inicial a sus precios?",
            "options": [
              "85",
              "75",
              "80"
            ],
            "answer": 3,
            "hint": "Suma los dos ingresos iniciales.",
            "explanation": "Suma los dos ingresos iniciales. Resultado: 80."
          },
          {
            "story": "Se comparan entradas de dos tipos.",
            "prompt": "A precios iniciales de 10 y 20 €, se vendían 4 y 2 entradas. Ahora se venden 7 y 3. ¿Qué valor tenía la cesta inicial a sus precios?",
            "options": [
              "75",
              "80",
              "85"
            ],
            "answer": 2,
            "hint": "Suma los dos ingresos iniciales.",
            "explanation": "Suma los dos ingresos iniciales. Resultado: 80."
          }
        ],
        "dificil": [
          {
            "story": "Se comparan entradas de dos tipos.",
            "prompt": "A precios iniciales de 10 y 20 €, se vendían 4 y 2 entradas. Ahora se venden 6 y 3. ¿Cuál es el índice de cantidades de Laspeyres?",
            "options": [
              "145",
              "150",
              "155"
            ],
            "answer": 2,
            "hint": "Mantén los precios iniciales para valorar cantidades de ambos periodos.",
            "explanation": "Mantén los precios iniciales para valorar cantidades de ambos periodos. Resultado: 150."
          },
          {
            "story": "Se comparan entradas de dos tipos.",
            "prompt": "A precios iniciales de 10 y 20 €, se vendían 4 y 2 entradas. Ahora se venden 7 y 3. ¿Cuál es el índice de cantidades de Laspeyres?",
            "options": [
              "162,5",
              "167,5",
              "157,5"
            ],
            "answer": 1,
            "hint": "Mantén los precios iniciales para valorar cantidades de ambos periodos.",
            "explanation": "Mantén los precios iniciales para valorar cantidades de ambos periodos. Resultado: 162,5."
          }
        ]
      },
      {
        "nombre": "Cantidades de Paasche",
        "facil": [
          {
            "story": "El teatro revisa ventas a precios homogéneos.",
            "prompt": "Los precios actuales son 10 y 15 €. Las cantidades iniciales son 2 y 4. Las actuales son 4 y 5. ¿Cuánto valdrían hoy las cantidades iniciales?",
            "options": [
              "75",
              "80",
              "85"
            ],
            "answer": 2,
            "hint": "Valora las cantidades antiguas a precios actuales.",
            "explanation": "Valora las cantidades antiguas a precios actuales. Resultado: 80."
          },
          {
            "story": "El teatro revisa ventas a precios homogéneos.",
            "prompt": "Los precios actuales son 10 y 15 €. Las cantidades iniciales son 2 y 4. Las actuales son 5 y 5. ¿Cuánto valdrían hoy las cantidades iniciales?",
            "options": [
              "80",
              "85",
              "75"
            ],
            "answer": 1,
            "hint": "Valora las cantidades antiguas a precios actuales.",
            "explanation": "Valora las cantidades antiguas a precios actuales. Resultado: 80."
          }
        ],
        "dificil": [
          {
            "story": "El teatro revisa ventas a precios homogéneos.",
            "prompt": "Los precios actuales son 10 y 15 €. Las cantidades iniciales son 2 y 4. Las actuales son 4 y 5. ¿Cuál es el índice de cantidades de Paasche?",
            "options": [
              "143,75",
              "148,75",
              "138,75"
            ],
            "answer": 1,
            "hint": "Valora ambas cestas a precios actuales y divide la nueva entre la antigua.",
            "explanation": "Valora ambas cestas a precios actuales y divide la nueva entre la antigua. Resultado: 143,75."
          },
          {
            "story": "El teatro revisa ventas a precios homogéneos.",
            "prompt": "Los precios actuales son 10 y 15 €. Las cantidades iniciales son 2 y 4. Las actuales son 5 y 5. ¿Cuál es el índice de cantidades de Paasche?",
            "options": [
              "161,25",
              "151,25",
              "156,25"
            ],
            "answer": 3,
            "hint": "Valora ambas cestas a precios actuales y divide la nueva entre la antigua.",
            "explanation": "Valora ambas cestas a precios actuales y divide la nueva entre la antigua. Resultado: 156,25."
          }
        ]
      },
      {
        "nombre": "Índice de Fisher",
        "facil": [
          {
            "story": "El observatorio combina dos índices de precios.",
            "prompt": "Los índices de precios de Laspeyres y Paasche son 100 y 144 en base 100. ¿Cuál es la diferencia Paasche menos Laspeyres en puntos?",
            "options": [
              "44",
              "49",
              "39"
            ],
            "answer": 1,
            "hint": "Resta los dos índices.",
            "explanation": "Resta los dos índices. Resultado: 44."
          },
          {
            "story": "El observatorio combina dos índices de precios.",
            "prompt": "Los índices de precios de Laspeyres y Paasche son 100 y 169 en base 100. ¿Cuál es la diferencia Paasche menos Laspeyres en puntos?",
            "options": [
              "74",
              "64",
              "69"
            ],
            "answer": 3,
            "hint": "Resta los dos índices.",
            "explanation": "Resta los dos índices. Resultado: 69."
          }
        ],
        "dificil": [
          {
            "story": "El observatorio combina dos índices de precios.",
            "prompt": "Los índices de precios de Laspeyres y Paasche son 100 y 144 en base 100. ¿Cuál es el índice ideal de Fisher?",
            "options": [
              "125",
              "115",
              "120"
            ],
            "answer": 3,
            "hint": "Calcula la media geométrica de los índices de Laspeyres y Paasche.",
            "explanation": "Calcula la media geométrica de los índices de Laspeyres y Paasche. Resultado: 120."
          },
          {
            "story": "El observatorio combina dos índices de precios.",
            "prompt": "Los índices de precios de Laspeyres y Paasche son 100 y 169 en base 100. ¿Cuál es el índice ideal de Fisher?",
            "options": [
              "125",
              "130",
              "135"
            ],
            "answer": 2,
            "hint": "Calcula la media geométrica de los índices de Laspeyres y Paasche.",
            "explanation": "Calcula la media geométrica de los índices de Laspeyres y Paasche. Resultado: 130."
          }
        ]
      },
      {
        "nombre": "Descomposición del valor",
        "facil": [
          {
            "story": "La contabilidad separa precios y volumen.",
            "prompt": "El índice de precios de Laspeyres es 110 y el de cantidades de Paasche es 110, ambos base 100. ¿Qué aumento porcentual de cantidades indica el segundo índice?",
            "options": [
              "15",
              "5",
              "10"
            ],
            "answer": 3,
            "hint": "Resta cien al índice de cantidades.",
            "explanation": "Resta cien al índice de cantidades. Resultado: 10."
          },
          {
            "story": "La contabilidad separa precios y volumen.",
            "prompt": "El índice de precios de Laspeyres es 110 y el de cantidades de Paasche es 115, ambos base 100. ¿Qué aumento porcentual de cantidades indica el segundo índice?",
            "options": [
              "10",
              "15",
              "20"
            ],
            "answer": 2,
            "hint": "Resta cien al índice de cantidades.",
            "explanation": "Resta cien al índice de cantidades. Resultado: 15."
          }
        ],
        "dificil": [
          {
            "story": "La contabilidad separa precios y volumen.",
            "prompt": "El índice de precios de Laspeyres es 110 y el de cantidades de Paasche es 110, ambos base 100. ¿Cuál es el índice de valor compatible?",
            "options": [
              "116",
              "121",
              "126"
            ],
            "answer": 2,
            "hint": "Multiplica índices complementarios de precios y cantidades y divide por cien.",
            "explanation": "Multiplica índices complementarios de precios y cantidades y divide por cien. Resultado: 121."
          },
          {
            "story": "La contabilidad separa precios y volumen.",
            "prompt": "El índice de precios de Laspeyres es 110 y el de cantidades de Paasche es 115, ambos base 100. ¿Cuál es el índice de valor compatible?",
            "options": [
              "126,5",
              "131,5",
              "121,5"
            ],
            "answer": 1,
            "hint": "Multiplica índices complementarios de precios y cantidades y divide por cien.",
            "explanation": "Multiplica índices complementarios de precios y cantidades y divide por cien. Resultado: 126,5."
          }
        ]
      },
      {
        "nombre": "Deflación",
        "facil": [
          {
            "story": "El alojamiento compara ingresos en euros constantes.",
            "prompt": "Los ingresos actuales son 2400 € y el índice de precios es 120, con base 100. Los ingresos del año base fueron 1500 €. ¿Qué factor de precios usarías para deflactar?",
            "options": [
              "1,13",
              "1,2",
              "1,27"
            ],
            "answer": 2,
            "hint": "Expresa el índice de precios en tanto por uno.",
            "explanation": "Expresa el índice de precios en tanto por uno. Resultado: 1,2."
          },
          {
            "story": "El alojamiento compara ingresos en euros constantes.",
            "prompt": "Los ingresos actuales son 3600 € y el índice de precios es 120, con base 100. Los ingresos del año base fueron 1500 €. ¿Qué factor de precios usarías para deflactar?",
            "options": [
              "1,2",
              "1,27",
              "1,13"
            ],
            "answer": 1,
            "hint": "Expresa el índice de precios en tanto por uno.",
            "explanation": "Expresa el índice de precios en tanto por uno. Resultado: 1,2."
          }
        ],
        "dificil": [
          {
            "story": "El alojamiento compara ingresos en euros constantes.",
            "prompt": "Los ingresos actuales son 2400 € y el índice de precios es 120, con base 100. Los ingresos del año base fueron 1500 €. ¿Qué aumento real en euros del año base se ha producido?",
            "options": [
              "500",
              "505",
              "495"
            ],
            "answer": 1,
            "hint": "Divide el ingreso corriente entre 1,2 y resta el ingreso del periodo base.",
            "explanation": "Divide el ingreso corriente entre 1,2 y resta el ingreso del periodo base. Resultado: 500."
          },
          {
            "story": "El alojamiento compara ingresos en euros constantes.",
            "prompt": "Los ingresos actuales son 3600 € y el índice de precios es 120, con base 100. Los ingresos del año base fueron 1500 €. ¿Qué aumento real en euros del año base se ha producido?",
            "options": [
              "1505",
              "1495",
              "1500"
            ],
            "answer": 3,
            "hint": "Divide el ingreso corriente entre 1,2 y resta el ingreso del periodo base.",
            "explanation": "Divide el ingreso corriente entre 1,2 y resta el ingreso del periodo base. Resultado: 1500."
          }
        ]
      }
    ]
  }
];

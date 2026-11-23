// Datos económicos ficticios para el programa 1560001. Rutas didácticas: temas 1–5, 6–8 y 9–10.
window.ECONOMIA = [
  {
    "id": "eco-b1",
    "nombre": "Ruta 1 · Descripción, dispersión y desigualdad",
    "apartados": [
      {
        "nombre": "Población y observación",
        "facil": [
          {
            "story": "Una encuesta investiga a los comercios del barrio.",
            "prompt": "El censo incluye 200 comercios. Se selecciona el 20 % y cinco no responden. ¿Cuántos comercios se seleccionaron?",
            "options": [
              "40",
              "200",
              "35"
            ],
            "answer": 1,
            "hint": "Multiplica el tamaño del censo por 0,20.",
            "explanation": "Multiplica el tamaño del censo por 0,20. Resultado: 40."
          },
          {
            "story": "Una encuesta investiga a los comercios del barrio.",
            "prompt": "El censo incluye 300 comercios. Se selecciona el 20 % y cinco no responden. ¿Cuántos comercios se seleccionaron?",
            "options": [
              "300",
              "55",
              "60"
            ],
            "answer": 3,
            "hint": "Multiplica el tamaño del censo por 0,20.",
            "explanation": "Multiplica el tamaño del censo por 0,20. Resultado: 60."
          }
        ],
        "dificil": [
          {
            "story": "Una encuesta investiga a los comercios del barrio.",
            "prompt": "El censo incluye 200 comercios. Se selecciona el 20 % y cinco no responden. ¿Qué porcentaje de los seleccionados sí respondió?",
            "options": [
              "17,5",
              "12,5",
              "87,5"
            ],
            "answer": 3,
            "hint": "Resta cinco al tamaño seleccionado y divide el número válido por el seleccionado.",
            "explanation": "Resta cinco al tamaño seleccionado y divide el número válido por el seleccionado. Resultado: 87,5."
          },
          {
            "story": "Una encuesta investiga a los comercios del barrio.",
            "prompt": "El censo incluye 300 comercios. Se selecciona el 20 % y cinco no responden. ¿Qué porcentaje de los seleccionados sí respondió?",
            "options": [
              "18,3333",
              "91,6667",
              "8,3333"
            ],
            "answer": 2,
            "hint": "Resta cinco al tamaño seleccionado y divide el número válido por el seleccionado.",
            "explanation": "Resta cinco al tamaño seleccionado y divide el número válido por el seleccionado. Resultado: 91,6667."
          }
        ]
      },
      {
        "nombre": "Unidad y registro",
        "facil": [
          {
            "story": "Un analista recibe nóminas anonimizadas.",
            "prompt": "Una empresa envía 12 nóminas mensuales de cada uno de sus 20 trabajadores. ¿Cuántos trabajadores distintos observa?",
            "options": [
              "240",
              "18",
              "20"
            ],
            "answer": 3,
            "hint": "Cuenta personas, sin duplicarlas por mes.",
            "explanation": "Cuenta personas, sin duplicarlas por mes. Resultado: 20."
          },
          {
            "story": "Un analista recibe nóminas anonimizadas.",
            "prompt": "Una empresa envía 12 nóminas mensuales de cada uno de sus 30 trabajadores. ¿Cuántos trabajadores distintos observa?",
            "options": [
              "360",
              "30",
              "28"
            ],
            "answer": 2,
            "hint": "Cuenta personas, sin duplicarlas por mes.",
            "explanation": "Cuenta personas, sin duplicarlas por mes. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "Un analista recibe nóminas anonimizadas.",
            "prompt": "Una empresa envía 12 nóminas mensuales de cada uno de sus 20 trabajadores. Si dos trabajadores solo aportan seis meses, ¿cuántas nóminas válidas habrá?",
            "options": [
              "238",
              "228",
              "234"
            ],
            "answer": 2,
            "hint": "Parte de doce registros por persona y descuenta seis ausencias por cada uno de dos trabajadores.",
            "explanation": "Parte de doce registros por persona y descuenta seis ausencias por cada uno de dos trabajadores. Resultado: 228."
          },
          {
            "story": "Un analista recibe nóminas anonimizadas.",
            "prompt": "Una empresa envía 12 nóminas mensuales de cada uno de sus 30 trabajadores. Si dos trabajadores solo aportan seis meses, ¿cuántas nóminas válidas habrá?",
            "options": [
              "348",
              "358",
              "354"
            ],
            "answer": 1,
            "hint": "Parte de doce registros por persona y descuenta seis ausencias por cada uno de dos trabajadores.",
            "explanation": "Parte de doce registros por persona y descuenta seis ausencias por cada uno de dos trabajadores. Resultado: 348."
          }
        ]
      },
      {
        "nombre": "Frecuencias",
        "facil": [
          {
            "story": "Se registran incidencias de facturación.",
            "prompt": "De 80 facturas, 16 requieren corrección y cinco de las corregidas también requieren abono. ¿Qué porcentaje requiere corrección?",
            "options": [
              "16",
              "20",
              "80"
            ],
            "answer": 2,
            "hint": "Usa el total de 80 facturas como denominador.",
            "explanation": "Usa el total de 80 facturas como denominador. Resultado: 20."
          },
          {
            "story": "Se registran incidencias de facturación.",
            "prompt": "De 80 facturas, 24 requieren corrección y cinco de las corregidas también requieren abono. ¿Qué porcentaje requiere corrección?",
            "options": [
              "30",
              "24",
              "70"
            ],
            "answer": 1,
            "hint": "Usa el total de 80 facturas como denominador.",
            "explanation": "Usa el total de 80 facturas como denominador. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "Se registran incidencias de facturación.",
            "prompt": "De 80 facturas, 16 requieren corrección y cinco de las corregidas también requieren abono. Entre las corregidas, ¿qué porcentaje no requiere abono?",
            "options": [
              "68,75",
              "31,25",
              "13,75"
            ],
            "answer": 1,
            "hint": "Divide las corregidas sin abono entre todas las corregidas.",
            "explanation": "Divide las corregidas sin abono entre todas las corregidas. Resultado: 68,75."
          },
          {
            "story": "Se registran incidencias de facturación.",
            "prompt": "De 80 facturas, 24 requieren corrección y cinco de las corregidas también requieren abono. Entre las corregidas, ¿qué porcentaje no requiere abono?",
            "options": [
              "20,8333",
              "23,75",
              "79,1667"
            ],
            "answer": 3,
            "hint": "Divide las corregidas sin abono entre todas las corregidas.",
            "explanation": "Divide las corregidas sin abono entre todas las corregidas. Resultado: 79,1667."
          }
        ]
      },
      {
        "nombre": "Distribución acumulada",
        "facil": [
          {
            "story": "Una cooperativa registra días de demora.",
            "prompt": "Hay 10 cobros al día, 7 con un día de retraso y 8 con dos días. ¿Cuántos cobros acumulan como máximo un día de retraso?",
            "options": [
              "17",
              "10",
              "25"
            ],
            "answer": 1,
            "hint": "Suma cobros puntuales y cobros con un día de retraso.",
            "explanation": "Suma cobros puntuales y cobros con un día de retraso. Resultado: 17."
          },
          {
            "story": "Una cooperativa registra días de demora.",
            "prompt": "Hay 15 cobros al día, 7 con un día de retraso y 8 con dos días. ¿Cuántos cobros acumulan como máximo un día de retraso?",
            "options": [
              "15",
              "30",
              "22"
            ],
            "answer": 3,
            "hint": "Suma cobros puntuales y cobros con un día de retraso.",
            "explanation": "Suma cobros puntuales y cobros con un día de retraso. Resultado: 22."
          }
        ],
        "dificil": [
          {
            "story": "Una cooperativa registra días de demora.",
            "prompt": "Hay 10 cobros al día, 7 con un día de retraso y 8 con dos días. ¿Qué porcentaje llega con más de un día de retraso?",
            "options": [
              "47,0588",
              "68",
              "32"
            ],
            "answer": 3,
            "hint": "Usa los ocho cobros de dos días como numerador y todos los cobros como denominador.",
            "explanation": "Usa los ocho cobros de dos días como numerador y todos los cobros como denominador. Resultado: 32."
          },
          {
            "story": "Una cooperativa registra días de demora.",
            "prompt": "Hay 15 cobros al día, 7 con un día de retraso y 8 con dos días. ¿Qué porcentaje llega con más de un día de retraso?",
            "options": [
              "36,3636",
              "26,6667",
              "73,3333"
            ],
            "answer": 2,
            "hint": "Usa los ocho cobros de dos días como numerador y todos los cobros como denominador.",
            "explanation": "Usa los ocho cobros de dos días como numerador y todos los cobros como denominador. Resultado: 26,6667."
          }
        ]
      },
      {
        "nombre": "Densidad del histograma",
        "facil": [
          {
            "story": "Los importes se agrupan en intervalos de distinta amplitud.",
            "prompt": "Las clases [0,10) y [10,30) € contienen 20 y 30 facturas. ¿Qué densidad en facturas por euro tiene la primera clase?",
            "options": [
              "20",
              "5",
              "2"
            ],
            "answer": 3,
            "hint": "Divide el número de facturas por la amplitud de la clase.",
            "explanation": "Divide el número de facturas por la amplitud de la clase. Resultado: 2."
          },
          {
            "story": "Los importes se agrupan en intervalos de distinta amplitud.",
            "prompt": "Las clases [0,10) y [10,30) € contienen 30 y 30 facturas. ¿Qué densidad en facturas por euro tiene la primera clase?",
            "options": [
              "30",
              "3",
              "3,3333"
            ],
            "answer": 2,
            "hint": "Divide el número de facturas por la amplitud de la clase.",
            "explanation": "Divide el número de facturas por la amplitud de la clase. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Los importes se agrupan en intervalos de distinta amplitud.",
            "prompt": "Las clases [0,10) y [10,30) € contienen 20 y 30 facturas. ¿Qué cociente de alturas tiene la primera barra respecto a la segunda?",
            "options": [
              "0,6667",
              "1,3333",
              "0,75"
            ],
            "answer": 2,
            "hint": "Las áreas representan frecuencias. Divide cada frecuencia por su amplitud y compara las densidades.",
            "explanation": "Las áreas representan frecuencias. Divide cada frecuencia por su amplitud y compara las densidades. Resultado: 1,3333."
          },
          {
            "story": "Los importes se agrupan en intervalos de distinta amplitud.",
            "prompt": "Las clases [0,10) y [10,30) € contienen 30 y 30 facturas. ¿Qué cociente de alturas tiene la primera barra respecto a la segunda?",
            "options": [
              "2",
              "1",
              "0,5"
            ],
            "answer": 1,
            "hint": "Las áreas representan frecuencias. Divide cada frecuencia por su amplitud y compara las densidades.",
            "explanation": "Las áreas representan frecuencias. Divide cada frecuencia por su amplitud y compara las densidades. Resultado: 2."
          }
        ]
      },
      {
        "nombre": "Media ponderada",
        "facil": [
          {
            "story": "Una empresa estudia el coste por unidad.",
            "prompt": "Compra 10 piezas a 20 € y 10 piezas a 30 €. ¿Cuántos euros gastó en el segundo lote?",
            "options": [
              "10",
              "300",
              "500"
            ],
            "answer": 2,
            "hint": "Multiplica el precio unitario por las unidades del lote.",
            "explanation": "Multiplica el precio unitario por las unidades del lote. Resultado: 300."
          },
          {
            "story": "Una empresa estudia el coste por unidad.",
            "prompt": "Compra 10 piezas a 20 € y 15 piezas a 30 €. ¿Cuántos euros gastó en el segundo lote?",
            "options": [
              "450",
              "15",
              "650"
            ],
            "answer": 1,
            "hint": "Multiplica el precio unitario por las unidades del lote.",
            "explanation": "Multiplica el precio unitario por las unidades del lote. Resultado: 450."
          }
        ],
        "dificil": [
          {
            "story": "Una empresa estudia el coste por unidad.",
            "prompt": "Compra 10 piezas a 20 € y 10 piezas a 30 €. ¿Qué coste medio por pieza resulta al combinar lotes?",
            "options": [
              "25",
              "30",
              "20"
            ],
            "answer": 1,
            "hint": "Divide el coste de ambos lotes por el número total de piezas.",
            "explanation": "Divide el coste de ambos lotes por el número total de piezas. Resultado: 25."
          },
          {
            "story": "Una empresa estudia el coste por unidad.",
            "prompt": "Compra 10 piezas a 20 € y 15 piezas a 30 €. ¿Qué coste medio por pieza resulta al combinar lotes?",
            "options": [
              "30",
              "20",
              "26"
            ],
            "answer": 3,
            "hint": "Divide el coste de ambos lotes por el número total de piezas.",
            "explanation": "Divide el coste de ambos lotes por el número total de piezas. Resultado: 26."
          }
        ]
      },
      {
        "nombre": "Mediana",
        "facil": [
          {
            "story": "El comité revisa los salarios por hora.",
            "prompt": "Ordenados, cinco salarios son 10, 12, 17, 20 y 30 €. ¿Cuál es la mediana?",
            "options": [
              "17",
              "12",
              "20"
            ],
            "answer": 1,
            "hint": "Con cinco sueldos ordenados el tercero es central.",
            "explanation": "Con cinco sueldos ordenados el tercero es central. Resultado: 17."
          },
          {
            "story": "El comité revisa los salarios por hora.",
            "prompt": "Ordenados, cinco salarios son 10, 12, 18, 20 y 30 €. ¿Cuál es la mediana?",
            "options": [
              "12",
              "20",
              "18"
            ],
            "answer": 3,
            "hint": "Con cinco sueldos ordenados el tercero es central.",
            "explanation": "Con cinco sueldos ordenados el tercero es central. Resultado: 18."
          }
        ],
        "dificil": [
          {
            "story": "El comité revisa los salarios por hora.",
            "prompt": "Ordenados, cinco salarios son 10, 12, 17, 20 y 30 €. Se incluye otro salario de 40 €. ¿Cuál es ahora la mediana?",
            "options": [
              "17",
              "20",
              "18,5"
            ],
            "answer": 3,
            "hint": "Con seis valores se promedian el tercero y el cuarto.",
            "explanation": "Con seis valores se promedian el tercero y el cuarto. Resultado: 18,5."
          },
          {
            "story": "El comité revisa los salarios por hora.",
            "prompt": "Ordenados, cinco salarios son 10, 12, 18, 20 y 30 €. Se incluye otro salario de 40 €. ¿Cuál es ahora la mediana?",
            "options": [
              "18",
              "19",
              "20"
            ],
            "answer": 2,
            "hint": "Con seis valores se promedian el tercero y el cuarto.",
            "explanation": "Con seis valores se promedian el tercero y el cuarto. Resultado: 19."
          }
        ]
      },
      {
        "nombre": "Moda",
        "facil": [
          {
            "story": "Se cuentan los plazos de pago más frecuentes.",
            "prompt": "Los plazos de 10, 20 y 30 días tienen frecuencias 4, 7 y 6. ¿Qué frecuencia tiene el plazo modal?",
            "options": [
              "20",
              "6",
              "7"
            ],
            "answer": 3,
            "hint": "Compara las tres frecuencias.",
            "explanation": "Compara las tres frecuencias. Resultado: 7."
          },
          {
            "story": "Se cuentan los plazos de pago más frecuentes.",
            "prompt": "Los plazos de 10, 20 y 30 días tienen frecuencias 4, 8 y 6. ¿Qué frecuencia tiene el plazo modal?",
            "options": [
              "20",
              "8",
              "6"
            ],
            "answer": 2,
            "hint": "Compara las tres frecuencias.",
            "explanation": "Compara las tres frecuencias. Resultado: 8."
          }
        ],
        "dificil": [
          {
            "story": "Se cuentan los plazos de pago más frecuentes.",
            "prompt": "Los plazos de 10, 20 y 30 días tienen frecuencias 4, 7 y 6. ¿Cuántos contratos nuevos de 30 días hacen falta para que ese plazo sea la única moda?",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": 2,
            "hint": "La frecuencia de 30 días debe superar en al menos uno a la frecuencia de 20 días.",
            "explanation": "La frecuencia de 30 días debe superar en al menos uno a la frecuencia de 20 días. Resultado: 2."
          },
          {
            "story": "Se cuentan los plazos de pago más frecuentes.",
            "prompt": "Los plazos de 10, 20 y 30 días tienen frecuencias 4, 8 y 6. ¿Cuántos contratos nuevos de 30 días hacen falta para que ese plazo sea la única moda?",
            "options": [
              "3",
              "2",
              "4"
            ],
            "answer": 1,
            "hint": "La frecuencia de 30 días debe superar en al menos uno a la frecuencia de 20 días.",
            "explanation": "La frecuencia de 30 días debe superar en al menos uno a la frecuencia de 20 días. Resultado: 3."
          }
        ]
      },
      {
        "nombre": "Cuartiles agrupados",
        "facil": [
          {
            "story": "Los importes de facturas se agrupan por tramos.",
            "prompt": "En 40 facturas, las primeras 6 no llegan a 20 €. Otras 20 quedan en [20,40). Supón uniformidad en la clase. ¿Qué posición acumulada corresponde al primer cuartil al usar N/4?",
            "options": [
              "20",
              "10",
              "6"
            ],
            "answer": 2,
            "hint": "Divide el total por cuatro.",
            "explanation": "Divide el total por cuatro. Resultado: 10."
          },
          {
            "story": "Los importes de facturas se agrupan por tramos.",
            "prompt": "En 40 facturas, las primeras 7 no llegan a 20 €. Otras 20 quedan en [20,40). Supón uniformidad en la clase. ¿Qué posición acumulada corresponde al primer cuartil al usar N/4?",
            "options": [
              "10",
              "20",
              "7"
            ],
            "answer": 1,
            "hint": "Divide el total por cuatro.",
            "explanation": "Divide el total por cuatro. Resultado: 10."
          }
        ],
        "dificil": [
          {
            "story": "Los importes de facturas se agrupan por tramos.",
            "prompt": "En 40 facturas, las primeras 6 no llegan a 20 €. Otras 20 quedan en [20,40). Supón uniformidad en la clase. Por interpolación, ¿a cuántos euros asciende Q1?",
            "options": [
              "24",
              "30",
              "26"
            ],
            "answer": 1,
            "hint": "Desde 20 €, suma la amplitud por la fracción de clase necesaria para alcanzar la observación 10.",
            "explanation": "Desde 20 €, suma la amplitud por la fracción de clase necesaria para alcanzar la observación 10. Resultado: 24."
          },
          {
            "story": "Los importes de facturas se agrupan por tramos.",
            "prompt": "En 40 facturas, las primeras 7 no llegan a 20 €. Otras 20 quedan en [20,40). Supón uniformidad en la clase. Por interpolación, ¿a cuántos euros asciende Q1?",
            "options": [
              "30",
              "27",
              "23"
            ],
            "answer": 3,
            "hint": "Desde 20 €, suma la amplitud por la fracción de clase necesaria para alcanzar la observación 10.",
            "explanation": "Desde 20 €, suma la amplitud por la fracción de clase necesaria para alcanzar la observación 10. Resultado: 23."
          }
        ]
      },
      {
        "nombre": "Media armónica",
        "facil": [
          {
            "story": "Un taller fabrica dos lotes del mismo tamaño.",
            "prompt": "Cada lote tiene 24 piezas. Las velocidades son 6 y 12 piezas por hora. ¿Cuántas horas necesita el lote más lento?",
            "options": [
              "4",
              "6",
              "2"
            ],
            "answer": 1,
            "hint": "Divide su tamaño por seis piezas por hora.",
            "explanation": "Divide su tamaño por seis piezas por hora. Resultado: 4."
          },
          {
            "story": "Un taller fabrica dos lotes del mismo tamaño.",
            "prompt": "Cada lote tiene 36 piezas. Las velocidades son 6 y 12 piezas por hora. ¿Cuántas horas necesita el lote más lento?",
            "options": [
              "9",
              "3",
              "6"
            ],
            "answer": 3,
            "hint": "Divide su tamaño por seis piezas por hora.",
            "explanation": "Divide su tamaño por seis piezas por hora. Resultado: 6."
          }
        ],
        "dificil": [
          {
            "story": "Un taller fabrica dos lotes del mismo tamaño.",
            "prompt": "Cada lote tiene 24 piezas. Las velocidades son 6 y 12 piezas por hora. ¿Cuál es la velocidad media del proceso completo?",
            "options": [
              "9",
              "12",
              "8"
            ],
            "answer": 3,
            "hint": "Divide el total de piezas de ambos lotes por la suma de sus tiempos.",
            "explanation": "Divide el total de piezas de ambos lotes por la suma de sus tiempos. Resultado: 8."
          },
          {
            "story": "Un taller fabrica dos lotes del mismo tamaño.",
            "prompt": "Cada lote tiene 36 piezas. Las velocidades son 6 y 12 piezas por hora. ¿Cuál es la velocidad media del proceso completo?",
            "options": [
              "9",
              "8",
              "12"
            ],
            "answer": 2,
            "hint": "Divide el total de piezas de ambos lotes por la suma de sus tiempos.",
            "explanation": "Divide el total de piezas de ambos lotes por la suma de sus tiempos. Resultado: 8."
          }
        ]
      },
      {
        "nombre": "Media geométrica",
        "facil": [
          {
            "story": "La empresa compara dos periodos de crecimiento.",
            "prompt": "Las ventas se multiplican por 1 y luego por 1,44. ¿Qué factor acumulado resulta?",
            "options": [
              "1,2",
              "1,22",
              "1,44"
            ],
            "answer": 3,
            "hint": "Multiplica los factores de ambos periodos.",
            "explanation": "Multiplica los factores de ambos periodos. Resultado: 1,44."
          },
          {
            "story": "La empresa compara dos periodos de crecimiento.",
            "prompt": "Las ventas se multiplican por 1 y luego por 1,69. ¿Qué factor acumulado resulta?",
            "options": [
              "1,3",
              "1,69",
              "1,345"
            ],
            "answer": 2,
            "hint": "Multiplica los factores de ambos periodos.",
            "explanation": "Multiplica los factores de ambos periodos. Resultado: 1,69."
          }
        ],
        "dificil": [
          {
            "story": "La empresa compara dos periodos de crecimiento.",
            "prompt": "Las ventas se multiplican por 1 y luego por 1,44. ¿Qué tasa porcentual constante por periodo produce el mismo crecimiento?",
            "options": [
              "22",
              "20",
              "44"
            ],
            "answer": 2,
            "hint": "Toma la raíz cuadrada del producto y convierte el factor en una tasa.",
            "explanation": "Toma la raíz cuadrada del producto y convierte el factor en una tasa. Resultado: 20."
          },
          {
            "story": "La empresa compara dos periodos de crecimiento.",
            "prompt": "Las ventas se multiplican por 1 y luego por 1,69. ¿Qué tasa porcentual constante por periodo produce el mismo crecimiento?",
            "options": [
              "30",
              "34,5",
              "69"
            ],
            "answer": 1,
            "hint": "Toma la raíz cuadrada del producto y convierte el factor en una tasa.",
            "explanation": "Toma la raíz cuadrada del producto y convierte el factor en una tasa. Resultado: 30."
          }
        ]
      },
      {
        "nombre": "Varianza",
        "facil": [
          {
            "story": "Se revisan todos los turnos de producción observados.",
            "prompt": "Dos turnos producen 18 y 22 unidades. Usa divisor N. ¿Cuál es la varianza descriptiva?",
            "options": [
              "8",
              "4",
              "0"
            ],
            "answer": 2,
            "hint": "Promedia las desviaciones cuadráticas respecto a 20.",
            "explanation": "Promedia las desviaciones cuadráticas respecto a 20. Resultado: 4."
          },
          {
            "story": "Se revisan todos los turnos de producción observados.",
            "prompt": "Dos turnos producen 17 y 23 unidades. Usa divisor N. ¿Cuál es la varianza descriptiva?",
            "options": [
              "9",
              "18",
              "0"
            ],
            "answer": 1,
            "hint": "Promedia las desviaciones cuadráticas respecto a 20.",
            "explanation": "Promedia las desviaciones cuadráticas respecto a 20. Resultado: 9."
          }
        ],
        "dificil": [
          {
            "story": "Se revisan todos los turnos de producción observados.",
            "prompt": "Dos turnos producen 18 y 22 unidades. Usa divisor N. Si se duplica la producción de ambos turnos y se añaden 3 unidades a cada uno, ¿qué varianza resulta?",
            "options": [
              "16",
              "8",
              "4"
            ],
            "answer": 1,
            "hint": "Una constante sumada no cambia la dispersión. Multiplicar por dos cuadruplica la varianza.",
            "explanation": "Una constante sumada no cambia la dispersión. Multiplicar por dos cuadruplica la varianza. Resultado: 16."
          },
          {
            "story": "Se revisan todos los turnos de producción observados.",
            "prompt": "Dos turnos producen 17 y 23 unidades. Usa divisor N. Si se duplica la producción de ambos turnos y se añaden 3 unidades a cada uno, ¿qué varianza resulta?",
            "options": [
              "18",
              "9",
              "36"
            ],
            "answer": 3,
            "hint": "Una constante sumada no cambia la dispersión. Multiplicar por dos cuadruplica la varianza.",
            "explanation": "Una constante sumada no cambia la dispersión. Multiplicar por dos cuadruplica la varianza. Resultado: 36."
          }
        ]
      },
      {
        "nombre": "Dispersión relativa",
        "facil": [
          {
            "story": "La oficina compara salarios de dos sectores.",
            "prompt": "En A la media es 2000 € y la desviación es 200 €. En B el CV es el 8 %. ¿Cuál es el CV porcentual de A?",
            "options": [
              "10",
              "0,1",
              "200"
            ],
            "answer": 1,
            "hint": "Divide la desviación por la media y expresa el resultado en porcentaje.",
            "explanation": "Divide la desviación por la media y expresa el resultado en porcentaje. Resultado: 10."
          },
          {
            "story": "La oficina compara salarios de dos sectores.",
            "prompt": "En A la media es 2000 € y la desviación es 300 €. En B el CV es el 8 %. ¿Cuál es el CV porcentual de A?",
            "options": [
              "0,15",
              "300",
              "15"
            ],
            "answer": 3,
            "hint": "Divide la desviación por la media y expresa el resultado en porcentaje.",
            "explanation": "Divide la desviación por la media y expresa el resultado en porcentaje. Resultado: 15."
          }
        ],
        "dificil": [
          {
            "story": "La oficina compara salarios de dos sectores.",
            "prompt": "En A la media es 2000 € y la desviación es 200 €. En B el CV es el 8 %. ¿En cuántos puntos porcentuales supera A a B?",
            "options": [
              "18",
              "1,25",
              "2"
            ],
            "answer": 3,
            "hint": "Calcula el CV de A y réstale ocho puntos.",
            "explanation": "Calcula el CV de A y réstale ocho puntos. Resultado: 2."
          },
          {
            "story": "La oficina compara salarios de dos sectores.",
            "prompt": "En A la media es 2000 € y la desviación es 300 €. En B el CV es el 8 %. ¿En cuántos puntos porcentuales supera A a B?",
            "options": [
              "23",
              "7",
              "1,875"
            ],
            "answer": 2,
            "hint": "Calcula el CV de A y réstale ocho puntos.",
            "explanation": "Calcula el CV de A y réstale ocho puntos. Resultado: 7."
          }
        ]
      },
      {
        "nombre": "Asimetría de Pearson",
        "facil": [
          {
            "story": "El analista describe el reparto salarial.",
            "prompt": "Media 20, moda 18 y desviación típica 4. Se usa el coeficiente (media−moda)/desviación. ¿Cuál es el coeficiente?",
            "options": [
              "2",
              "0,125",
              "0,5"
            ],
            "answer": 3,
            "hint": "Centra la media respecto a la moda y divide por la desviación.",
            "explanation": "Centra la media respecto a la moda y divide por la desviación. Resultado: 0,5."
          },
          {
            "story": "El analista describe el reparto salarial.",
            "prompt": "Media 20, moda 17 y desviación típica 4. Se usa el coeficiente (media−moda)/desviación. ¿Cuál es el coeficiente?",
            "options": [
              "3",
              "0,75",
              "0,1875"
            ],
            "answer": 2,
            "hint": "Centra la media respecto a la moda y divide por la desviación.",
            "explanation": "Centra la media respecto a la moda y divide por la desviación. Resultado: 0,75."
          }
        ],
        "dificil": [
          {
            "story": "El analista describe el reparto salarial.",
            "prompt": "Media 20, moda 18 y desviación típica 4. Se usa el coeficiente (media−moda)/desviación. Si todos los salarios se expresan en céntimos, ¿qué valor toma el coeficiente?",
            "options": [
              "0,005",
              "0,5",
              "50"
            ],
            "answer": 2,
            "hint": "La diferencia y la desviación se multiplican por cien, por lo que su cociente se conserva.",
            "explanation": "La diferencia y la desviación se multiplican por cien, por lo que su cociente se conserva. Resultado: 0,5."
          },
          {
            "story": "El analista describe el reparto salarial.",
            "prompt": "Media 20, moda 17 y desviación típica 4. Se usa el coeficiente (media−moda)/desviación. Si todos los salarios se expresan en céntimos, ¿qué valor toma el coeficiente?",
            "options": [
              "0,75",
              "0,0075",
              "75"
            ],
            "answer": 1,
            "hint": "La diferencia y la desviación se multiplican por cien, por lo que su cociente se conserva.",
            "explanation": "La diferencia y la desviación se multiplican por cien, por lo que su cociente se conserva. Resultado: 0,75."
          }
        ]
      },
      {
        "nombre": "Curva de Lorenz",
        "facil": [
          {
            "story": "Se ordenan hogares de menor a mayor renta.",
            "prompt": "El 50 % de hogares con menor renta acumula el 20 % de la renta total. ¿Qué porcentaje de la renta recibe la mitad de hogares con mayor renta?",
            "options": [
              "20",
              "80",
              "50"
            ],
            "answer": 2,
            "hint": "Resta la cuota acumulada a cien.",
            "explanation": "Resta la cuota acumulada a cien. Resultado: 80."
          },
          {
            "story": "Se ordenan hogares de menor a mayor renta.",
            "prompt": "El 50 % de hogares con menor renta acumula el 30 % de la renta total. ¿Qué porcentaje de la renta recibe la mitad de hogares con mayor renta?",
            "options": [
              "70",
              "30",
              "50"
            ],
            "answer": 1,
            "hint": "Resta la cuota acumulada a cien.",
            "explanation": "Resta la cuota acumulada a cien. Resultado: 70."
          }
        ],
        "dificil": [
          {
            "story": "Se ordenan hogares de menor a mayor renta.",
            "prompt": "El 50 % de hogares con menor renta acumula el 20 % de la renta total. En el punto del 50 % de hogares, ¿cuántos puntos porcentuales separan la curva de la diagonal de igualdad?",
            "options": [
              "30",
              "80",
              "20"
            ],
            "answer": 1,
            "hint": "La diagonal asigna el 50 % de la renta a la mitad de hogares.",
            "explanation": "La diagonal asigna el 50 % de la renta a la mitad de hogares. Resultado: 30."
          },
          {
            "story": "Se ordenan hogares de menor a mayor renta.",
            "prompt": "El 50 % de hogares con menor renta acumula el 30 % de la renta total. En el punto del 50 % de hogares, ¿cuántos puntos porcentuales separan la curva de la diagonal de igualdad?",
            "options": [
              "70",
              "30",
              "20"
            ],
            "answer": 3,
            "hint": "La diagonal asigna el 50 % de la renta a la mitad de hogares.",
            "explanation": "La diagonal asigna el 50 % de la renta a la mitad de hogares. Resultado: 20."
          }
        ]
      },
      {
        "nombre": "Gini con dos hogares",
        "facil": [
          {
            "story": "Dos hogares perciben rentas no negativas.",
            "prompt": "El primer hogar percibe 100 € y el segundo 300 €. Usa Gini poblacional sin corrección. ¿Cuál es la diferencia entre las dos rentas?",
            "options": [
              "200",
              "300",
              "400"
            ],
            "answer": 1,
            "hint": "Resta la renta menor de la mayor.",
            "explanation": "Resta la renta menor de la mayor. Resultado: 200."
          },
          {
            "story": "Dos hogares perciben rentas no negativas.",
            "prompt": "El primer hogar percibe 100 € y el segundo 400 €. Usa Gini poblacional sin corrección. ¿Cuál es la diferencia entre las dos rentas?",
            "options": [
              "400",
              "500",
              "300"
            ],
            "answer": 3,
            "hint": "Resta la renta menor de la mayor.",
            "explanation": "Resta la renta menor de la mayor. Resultado: 300."
          }
        ],
        "dificil": [
          {
            "story": "Dos hogares perciben rentas no negativas.",
            "prompt": "El primer hogar percibe 100 € y el segundo 300 €. Usa Gini poblacional sin corrección. ¿Cuál es G para dos hogares con el mismo peso?",
            "options": [
              "0,5",
              "0,3333",
              "0,25"
            ],
            "answer": 3,
            "hint": "La fórmula de diferencias absolutas se simplifica a diferencia dividida entre dos veces la suma de rentas.",
            "explanation": "La fórmula de diferencias absolutas se simplifica a diferencia dividida entre dos veces la suma de rentas. Resultado: 0,25."
          },
          {
            "story": "Dos hogares perciben rentas no negativas.",
            "prompt": "El primer hogar percibe 100 € y el segundo 400 €. Usa Gini poblacional sin corrección. ¿Cuál es G para dos hogares con el mismo peso?",
            "options": [
              "0,6",
              "0,3",
              "0,375"
            ],
            "answer": 2,
            "hint": "La fórmula de diferencias absolutas se simplifica a diferencia dividida entre dos veces la suma de rentas.",
            "explanation": "La fórmula de diferencias absolutas se simplifica a diferencia dividida entre dos veces la suma de rentas. Resultado: 0,3."
          }
        ]
      },
      {
        "nombre": "Transformación de rentas",
        "facil": [
          {
            "story": "Una política pública modifica todos los ingresos.",
            "prompt": "La renta media es 1000 € y el Gini inicial 0,4. Cada hogar recibe 100 € adicionales. ¿Qué media queda después de la transferencia?",
            "options": [
              "1000",
              "1200",
              "1100"
            ],
            "answer": 3,
            "hint": "Una cantidad fija aumenta la media por esa misma cantidad.",
            "explanation": "Una cantidad fija aumenta la media por esa misma cantidad. Resultado: 1100."
          },
          {
            "story": "Una política pública modifica todos los ingresos.",
            "prompt": "La renta media es 1000 € y el Gini inicial 0,5. Cada hogar recibe 100 € adicionales. ¿Qué media queda después de la transferencia?",
            "options": [
              "1000",
              "1100",
              "1200"
            ],
            "answer": 2,
            "hint": "Una cantidad fija aumenta la media por esa misma cantidad.",
            "explanation": "Una cantidad fija aumenta la media por esa misma cantidad. Resultado: 1100."
          }
        ],
        "dificil": [
          {
            "story": "Una política pública modifica todos los ingresos.",
            "prompt": "La renta media es 1000 € y el Gini inicial 0,4. Cada hogar recibe 100 € adicionales. ¿Cuál es el nuevo Gini poblacional?",
            "options": [
              "0,4",
              "0,3636",
              "0,44"
            ],
            "answer": 2,
            "hint": "Las diferencias absolutas no cambian y la media sube. Multiplica el Gini por la razón entre media antigua y nueva.",
            "explanation": "Las diferencias absolutas no cambian y la media sube. Multiplica el Gini por la razón entre media antigua y nueva. Resultado: 0,3636."
          },
          {
            "story": "Una política pública modifica todos los ingresos.",
            "prompt": "La renta media es 1000 € y el Gini inicial 0,5. Cada hogar recibe 100 € adicionales. ¿Cuál es el nuevo Gini poblacional?",
            "options": [
              "0,4545",
              "0,5",
              "0,55"
            ],
            "answer": 1,
            "hint": "Las diferencias absolutas no cambian y la media sube. Multiplica el Gini por la razón entre media antigua y nueva.",
            "explanation": "Las diferencias absolutas no cambian y la media sube. Multiplica el Gini por la razón entre media antigua y nueva. Resultado: 0,4545."
          }
        ]
      },
      {
        "nombre": "Mediala discreta",
        "facil": [
          {
            "story": "Una auditoría localiza la mitad de la renta acumulada.",
            "prompt": "Cuatro ingresos ordenados son 10, 20, 40 y 60 €. Define mediala como el primer ingreso cuya acumulación alcanza el 50 % del total. ¿Cuál es la suma de los dos primeros ingresos?",
            "options": [
              "20",
              "30",
              "10"
            ],
            "answer": 2,
            "hint": "Acumula los dos ingresos menores.",
            "explanation": "Acumula los dos ingresos menores. Resultado: 30."
          },
          {
            "story": "Una auditoría localiza la mitad de la renta acumulada.",
            "prompt": "Cuatro ingresos ordenados son 10, 20, 45 y 60 €. Define mediala como el primer ingreso cuya acumulación alcanza el 50 % del total. ¿Cuál es la suma de los dos primeros ingresos?",
            "options": [
              "30",
              "20",
              "10"
            ],
            "answer": 1,
            "hint": "Acumula los dos ingresos menores.",
            "explanation": "Acumula los dos ingresos menores. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "Una auditoría localiza la mitad de la renta acumulada.",
            "prompt": "Cuatro ingresos ordenados son 10, 20, 40 y 60 €. Define mediala como el primer ingreso cuya acumulación alcanza el 50 % del total. ¿Qué ingreso es la mediala?",
            "options": [
              "40",
              "60",
              "20"
            ],
            "answer": 1,
            "hint": "Calcula la mitad de la suma y recorre las rentas en orden hasta alcanzar ese umbral.",
            "explanation": "Calcula la mitad de la suma y recorre las rentas en orden hasta alcanzar ese umbral. Resultado: 40."
          },
          {
            "story": "Una auditoría localiza la mitad de la renta acumulada.",
            "prompt": "Cuatro ingresos ordenados son 10, 20, 45 y 60 €. Define mediala como el primer ingreso cuya acumulación alcanza el 50 % del total. ¿Qué ingreso es la mediala?",
            "options": [
              "60",
              "20",
              "45"
            ],
            "answer": 3,
            "hint": "Calcula la mitad de la suma y recorre las rentas en orden hasta alcanzar ese umbral.",
            "explanation": "Calcula la mitad de la suma y recorre las rentas en orden hasta alcanzar ese umbral. Resultado: 45."
          }
        ]
      }
    ]
  },
  {
    "id": "eco-b2",
    "nombre": "Ruta 2 · Análisis bidimensional y regresión",
    "apartados": [
      {
        "nombre": "Recuentos conjuntos",
        "facil": [
          {
            "story": "Una encuesta cruza jornada y modalidad de empleo.",
            "prompt": "Entre 80 empleados, 20 tienen jornada completa y contrato indefinido. Hay 50 empleados a jornada completa. ¿Qué porcentaje del total reúne ambas condiciones?",
            "options": [
              "25",
              "20",
              "40"
            ],
            "answer": 1,
            "hint": "Usa el total para la frecuencia conjunta.",
            "explanation": "Usa el total para la frecuencia conjunta. Resultado: 25."
          },
          {
            "story": "Una encuesta cruza jornada y modalidad de empleo.",
            "prompt": "Entre 80 empleados, 30 tienen jornada completa y contrato indefinido. Hay 50 empleados a jornada completa. ¿Qué porcentaje del total reúne ambas condiciones?",
            "options": [
              "30",
              "60",
              "37,5"
            ],
            "answer": 3,
            "hint": "Usa el total para la frecuencia conjunta.",
            "explanation": "Usa el total para la frecuencia conjunta. Resultado: 37,5."
          }
        ],
        "dificil": [
          {
            "story": "Una encuesta cruza jornada y modalidad de empleo.",
            "prompt": "Entre 80 empleados, 20 tienen jornada completa y contrato indefinido. Hay 50 empleados a jornada completa. Entre los de jornada completa, ¿qué porcentaje tiene contrato indefinido?",
            "options": [
              "25",
              "60",
              "40"
            ],
            "answer": 3,
            "hint": "Usa como denominador solo la jornada completa.",
            "explanation": "Usa como denominador solo la jornada completa. Resultado: 40."
          },
          {
            "story": "Una encuesta cruza jornada y modalidad de empleo.",
            "prompt": "Entre 80 empleados, 30 tienen jornada completa y contrato indefinido. Hay 50 empleados a jornada completa. Entre los de jornada completa, ¿qué porcentaje tiene contrato indefinido?",
            "options": [
              "37,5",
              "60",
              "40"
            ],
            "answer": 2,
            "hint": "Usa como denominador solo la jornada completa.",
            "explanation": "Usa como denominador solo la jornada completa. Resultado: 60."
          }
        ]
      },
      {
        "nombre": "Distribución marginal",
        "facil": [
          {
            "story": "Se cruzan sector y tamaño de las empresas.",
            "prompt": "Hay 10 pymes industriales, 18 pymes de servicios y 22 empresas grandes. ¿Cuántas pymes hay?",
            "options": [
              "10",
              "50",
              "28"
            ],
            "answer": 3,
            "hint": "Suma los sectores dentro de la categoría pyme.",
            "explanation": "Suma los sectores dentro de la categoría pyme. Resultado: 28."
          },
          {
            "story": "Se cruzan sector y tamaño de las empresas.",
            "prompt": "Hay 15 pymes industriales, 18 pymes de servicios y 22 empresas grandes. ¿Cuántas pymes hay?",
            "options": [
              "15",
              "33",
              "55"
            ],
            "answer": 2,
            "hint": "Suma los sectores dentro de la categoría pyme.",
            "explanation": "Suma los sectores dentro de la categoría pyme. Resultado: 33."
          }
        ],
        "dificil": [
          {
            "story": "Se cruzan sector y tamaño de las empresas.",
            "prompt": "Hay 10 pymes industriales, 18 pymes de servicios y 22 empresas grandes. ¿Qué porcentaje de empresas son pymes industriales?",
            "options": [
              "35,7143",
              "20",
              "56"
            ],
            "answer": 2,
            "hint": "Divide la celda de pymes industriales entre todos los establecimientos.",
            "explanation": "Divide la celda de pymes industriales entre todos los establecimientos. Resultado: 20."
          },
          {
            "story": "Se cruzan sector y tamaño de las empresas.",
            "prompt": "Hay 15 pymes industriales, 18 pymes de servicios y 22 empresas grandes. ¿Qué porcentaje de empresas son pymes industriales?",
            "options": [
              "27,2727",
              "45,4545",
              "60"
            ],
            "answer": 1,
            "hint": "Divide la celda de pymes industriales entre todos los establecimientos.",
            "explanation": "Divide la celda de pymes industriales entre todos los establecimientos. Resultado: 27,2727."
          }
        ]
      },
      {
        "nombre": "Condicionamiento inverso",
        "facil": [
          {
            "story": "Un banco examina los préstamos de una cartera.",
            "prompt": "De 50 préstamos en el norte hay 10 morosos. De 50 en el sur hay 10 morosos. ¿Qué porcentaje de préstamos del norte es moroso?",
            "options": [
              "10",
              "20",
              "80"
            ],
            "answer": 2,
            "hint": "El denominador es el total del norte.",
            "explanation": "El denominador es el total del norte. Resultado: 20."
          },
          {
            "story": "Un banco examina los préstamos de una cartera.",
            "prompt": "De 50 préstamos en el norte hay 15 morosos. De 50 en el sur hay 10 morosos. ¿Qué porcentaje de préstamos del norte es moroso?",
            "options": [
              "30",
              "15",
              "70"
            ],
            "answer": 1,
            "hint": "El denominador es el total del norte.",
            "explanation": "El denominador es el total del norte. Resultado: 30."
          }
        ],
        "dificil": [
          {
            "story": "Un banco examina los préstamos de una cartera.",
            "prompt": "De 50 préstamos en el norte hay 10 morosos. De 50 en el sur hay 10 morosos. De los préstamos morosos, ¿qué porcentaje procede del norte?",
            "options": [
              "50",
              "20",
              "10"
            ],
            "answer": 1,
            "hint": "Divide los morosos del norte por los morosos de ambas regiones.",
            "explanation": "Divide los morosos del norte por los morosos de ambas regiones. Resultado: 50."
          },
          {
            "story": "Un banco examina los préstamos de una cartera.",
            "prompt": "De 50 préstamos en el norte hay 15 morosos. De 50 en el sur hay 10 morosos. De los préstamos morosos, ¿qué porcentaje procede del norte?",
            "options": [
              "30",
              "40",
              "60"
            ],
            "answer": 3,
            "hint": "Divide los morosos del norte por los morosos de ambas regiones.",
            "explanation": "Divide los morosos del norte por los morosos de ambas regiones. Resultado: 60."
          }
        ]
      },
      {
        "nombre": "Reconstrucción de celdas",
        "facil": [
          {
            "story": "Una tabla separa comercios digitales y físicos.",
            "prompt": "Hay 100 empresas, de las que 60 exportan. Entre las digitales, 20 exportan y 10 venden solo dentro del país. ¿Cuántas empresas físicas exportan?",
            "options": [
              "40",
              "60",
              "20"
            ],
            "answer": 1,
            "hint": "Resta las digitales exportadoras del marginal de exportación.",
            "explanation": "Resta las digitales exportadoras del marginal de exportación. Resultado: 40."
          },
          {
            "story": "Una tabla separa comercios digitales y físicos.",
            "prompt": "Hay 100 empresas, de las que 60 exportan. Entre las digitales, 20 exportan y 15 venden solo dentro del país. ¿Cuántas empresas físicas exportan?",
            "options": [
              "60",
              "20",
              "40"
            ],
            "answer": 3,
            "hint": "Resta las digitales exportadoras del marginal de exportación.",
            "explanation": "Resta las digitales exportadoras del marginal de exportación. Resultado: 40."
          }
        ],
        "dificil": [
          {
            "story": "Una tabla separa comercios digitales y físicos.",
            "prompt": "Hay 100 empresas, de las que 60 exportan. Entre las digitales, 20 exportan y 10 venden solo dentro del país. Entre las empresas físicas, ¿qué porcentaje exporta?",
            "options": [
              "40",
              "66,6667",
              "57,1429"
            ],
            "answer": 3,
            "hint": "Reconstruye el total físico restando al total de empresas todas las digitales.",
            "explanation": "Reconstruye el total físico restando al total de empresas todas las digitales. Resultado: 57,1429."
          },
          {
            "story": "Una tabla separa comercios digitales y físicos.",
            "prompt": "Hay 100 empresas, de las que 60 exportan. Entre las digitales, 20 exportan y 15 venden solo dentro del país. Entre las empresas físicas, ¿qué porcentaje exporta?",
            "options": [
              "40",
              "61,5385",
              "66,6667"
            ],
            "answer": 2,
            "hint": "Reconstruye el total físico restando al total de empresas todas las digitales.",
            "explanation": "Reconstruye el total físico restando al total de empresas todas las digitales. Resultado: 61,5385."
          }
        ]
      },
      {
        "nombre": "Media condicionada",
        "facil": [
          {
            "story": "Una empresa estudia las ventas por sucursal.",
            "prompt": "En A, dos pedidos son de 10 € y 2 pedidos de 40 €. En B, el pedido medio es de 15 €. ¿Cuánto suman en euros los pedidos de A?",
            "options": [
              "80",
              "50",
              "100"
            ],
            "answer": 3,
            "hint": "Pondera cada importe por su recuento.",
            "explanation": "Pondera cada importe por su recuento. Resultado: 100."
          },
          {
            "story": "Una empresa estudia las ventas por sucursal.",
            "prompt": "En A, dos pedidos son de 10 € y 3 pedidos de 40 €. En B, el pedido medio es de 15 €. ¿Cuánto suman en euros los pedidos de A?",
            "options": [
              "120",
              "140",
              "50"
            ],
            "answer": 2,
            "hint": "Pondera cada importe por su recuento.",
            "explanation": "Pondera cada importe por su recuento. Resultado: 140."
          }
        ],
        "dificil": [
          {
            "story": "Una empresa estudia las ventas por sucursal.",
            "prompt": "En A, dos pedidos son de 10 € y 2 pedidos de 40 €. En B, el pedido medio es de 15 €. ¿Cuántos euros supera la media de A a la de B?",
            "options": [
              "25",
              "10",
              "85"
            ],
            "answer": 2,
            "hint": "Divide el importe de A por sus pedidos y resta 15.",
            "explanation": "Divide el importe de A por sus pedidos y resta 15. Resultado: 10."
          },
          {
            "story": "Una empresa estudia las ventas por sucursal.",
            "prompt": "En A, dos pedidos son de 10 € y 3 pedidos de 40 €. En B, el pedido medio es de 15 €. ¿Cuántos euros supera la media de A a la de B?",
            "options": [
              "13",
              "28",
              "10"
            ],
            "answer": 1,
            "hint": "Divide el importe de A por sus pedidos y resta 15.",
            "explanation": "Divide el importe de A por sus pedidos y resta 15. Resultado: 13."
          }
        ]
      },
      {
        "nombre": "Composición de grupos",
        "facil": [
          {
            "story": "Dos sectores declaran sus salarios medios.",
            "prompt": "El sector A tiene 10 empleados con media 1200 €. El sector B tiene 20 con media 1800 €. ¿Qué peso porcentual tiene el sector B en el empleo conjunto?",
            "options": [
              "33,3333",
              "66,6667",
              "50"
            ],
            "answer": 2,
            "hint": "Divide su plantilla entre la plantilla total.",
            "explanation": "Divide su plantilla entre la plantilla total. Resultado: 66,6667."
          },
          {
            "story": "Dos sectores declaran sus salarios medios.",
            "prompt": "El sector A tiene 10 empleados con media 1200 €. El sector B tiene 30 con media 1800 €. ¿Qué peso porcentual tiene el sector B en el empleo conjunto?",
            "options": [
              "75",
              "25",
              "50"
            ],
            "answer": 1,
            "hint": "Divide su plantilla entre la plantilla total.",
            "explanation": "Divide su plantilla entre la plantilla total. Resultado: 75."
          }
        ],
        "dificil": [
          {
            "story": "Dos sectores declaran sus salarios medios.",
            "prompt": "El sector A tiene 10 empleados con media 1200 €. El sector B tiene 20 con media 1800 €. ¿Cuál es el salario medio de ambos sectores juntos?",
            "options": [
              "1600",
              "1500",
              "1800"
            ],
            "answer": 1,
            "hint": "Pondera por el número de empleados de cada sector.",
            "explanation": "Pondera por el número de empleados de cada sector. Resultado: 1600."
          },
          {
            "story": "Dos sectores declaran sus salarios medios.",
            "prompt": "El sector A tiene 10 empleados con media 1200 €. El sector B tiene 30 con media 1800 €. ¿Cuál es el salario medio de ambos sectores juntos?",
            "options": [
              "1500",
              "1800",
              "1650"
            ],
            "answer": 3,
            "hint": "Pondera por el número de empleados de cada sector.",
            "explanation": "Pondera por el número de empleados de cada sector. Resultado: 1650."
          }
        ]
      },
      {
        "nombre": "Independencia",
        "facil": [
          {
            "story": "Se analiza la relación entre formación y promoción.",
            "prompt": "Entre 100 trabajadores hay 50 con formación y 20 con promoción. Se observan 12 personas con ambas condiciones. ¿Cuántos casos con ambas condiciones se esperarían bajo independencia?",
            "options": [
              "10",
              "12",
              "20"
            ],
            "answer": 1,
            "hint": "Multiplica los marginales y divide por cien.",
            "explanation": "Multiplica los marginales y divide por cien. Resultado: 10."
          },
          {
            "story": "Se analiza la relación entre formación y promoción.",
            "prompt": "Entre 100 trabajadores hay 50 con formación y 30 con promoción. Se observan 17 personas con ambas condiciones. ¿Cuántos casos con ambas condiciones se esperarían bajo independencia?",
            "options": [
              "17",
              "30",
              "15"
            ],
            "answer": 3,
            "hint": "Multiplica los marginales y divide por cien.",
            "explanation": "Multiplica los marginales y divide por cien. Resultado: 15."
          }
        ],
        "dificil": [
          {
            "story": "Se analiza la relación entre formación y promoción.",
            "prompt": "Entre 100 trabajadores hay 50 con formación y 20 con promoción. Se observan 12 personas con ambas condiciones. ¿Cuántos puntos porcentuales supera la tasa de promoción entre formados a la tasa global?",
            "options": [
              "2",
              "20",
              "4"
            ],
            "answer": 3,
            "hint": "Usa la celda observada sobre 50 y réstale la proporción global de promociones.",
            "explanation": "Usa la celda observada sobre 50 y réstale la proporción global de promociones. Resultado: 4."
          },
          {
            "story": "Se analiza la relación entre formación y promoción.",
            "prompt": "Entre 100 trabajadores hay 50 con formación y 30 con promoción. Se observan 17 personas con ambas condiciones. ¿Cuántos puntos porcentuales supera la tasa de promoción entre formados a la tasa global?",
            "options": [
              "2",
              "4",
              "13,3333"
            ],
            "answer": 2,
            "hint": "Usa la celda observada sobre 50 y réstale la proporción global de promociones.",
            "explanation": "Usa la celda observada sobre 50 y réstale la proporción global de promociones. Resultado: 4."
          }
        ]
      },
      {
        "nombre": "Producto medio",
        "facil": [
          {
            "story": "Una tabla contiene horas de publicidad X y ventas Y.",
            "prompt": "Hay dos observaciones con el mismo peso: (1, 4) y (3, 8). ¿Qué producto XY corresponde a la segunda observación?",
            "options": [
              "8",
              "11",
              "24"
            ],
            "answer": 3,
            "hint": "Multiplica las dos coordenadas.",
            "explanation": "Multiplica las dos coordenadas. Resultado: 24."
          },
          {
            "story": "Una tabla contiene horas de publicidad X y ventas Y.",
            "prompt": "Hay dos observaciones con el mismo peso: (1, 4) y (3, 12). ¿Qué producto XY corresponde a la segunda observación?",
            "options": [
              "12",
              "36",
              "15"
            ],
            "answer": 2,
            "hint": "Multiplica las dos coordenadas.",
            "explanation": "Multiplica las dos coordenadas. Resultado: 36."
          }
        ],
        "dificil": [
          {
            "story": "Una tabla contiene horas de publicidad X y ventas Y.",
            "prompt": "Hay dos observaciones con el mismo peso: (1, 4) y (3, 8). ¿Cuál es la covarianza poblacional entre horas y ventas?",
            "options": [
              "14",
              "2",
              "4"
            ],
            "answer": 2,
            "hint": "Con dos observaciones igualmente ponderadas, la covarianza es el producto de sus diferencias dividido por cuatro.",
            "explanation": "Con dos observaciones igualmente ponderadas, la covarianza es el producto de sus diferencias dividido por cuatro. Resultado: 2."
          },
          {
            "story": "Una tabla contiene horas de publicidad X y ventas Y.",
            "prompt": "Hay dos observaciones con el mismo peso: (1, 4) y (3, 12). ¿Cuál es la covarianza poblacional entre horas y ventas?",
            "options": [
              "4",
              "20",
              "8"
            ],
            "answer": 1,
            "hint": "Con dos observaciones igualmente ponderadas, la covarianza es el producto de sus diferencias dividido por cuatro.",
            "explanation": "Con dos observaciones igualmente ponderadas, la covarianza es el producto de sus diferencias dividido por cuatro. Resultado: 4."
          }
        ]
      },
      {
        "nombre": "Covarianza",
        "facil": [
          {
            "story": "Un estudio resume gasto X e ingreso Y.",
            "prompt": "E(X)=4, E(Y)=5 y E(XY)=22. Se emplea divisor N. ¿Qué covarianza hay?",
            "options": [
              "22",
              "2",
              "20"
            ],
            "answer": 2,
            "hint": "Resta el producto de medias a la media del producto.",
            "explanation": "Resta el producto de medias a la media del producto. Resultado: 2."
          },
          {
            "story": "Un estudio resume gasto X e ingreso Y.",
            "prompt": "E(X)=4, E(Y)=5 y E(XY)=23. Se emplea divisor N. ¿Qué covarianza hay?",
            "options": [
              "3",
              "23",
              "20"
            ],
            "answer": 1,
            "hint": "Resta el producto de medias a la media del producto.",
            "explanation": "Resta el producto de medias a la media del producto. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Un estudio resume gasto X e ingreso Y.",
            "prompt": "E(X)=4, E(Y)=5 y E(XY)=22. Se emplea divisor N. Si tanto X como Y se duplican, ¿cuál es la nueva covarianza?",
            "options": [
              "8",
              "4",
              "2"
            ],
            "answer": 1,
            "hint": "Multiplica la covarianza original por los dos factores de escala.",
            "explanation": "Multiplica la covarianza original por los dos factores de escala. Resultado: 8."
          },
          {
            "story": "Un estudio resume gasto X e ingreso Y.",
            "prompt": "E(X)=4, E(Y)=5 y E(XY)=23. Se emplea divisor N. Si tanto X como Y se duplican, ¿cuál es la nueva covarianza?",
            "options": [
              "6",
              "3",
              "12"
            ],
            "answer": 3,
            "hint": "Multiplica la covarianza original por los dos factores de escala.",
            "explanation": "Multiplica la covarianza original por los dos factores de escala. Resultado: 12."
          }
        ]
      },
      {
        "nombre": "Correlación de Pearson",
        "facil": [
          {
            "story": "Una fábrica estudia automatización y productividad.",
            "prompt": "La covarianza es 6. Las desviaciones típicas son 3 y 4. ¿Cuál es r?",
            "options": [
              "0,5",
              "0,1667",
              "0,6667"
            ],
            "answer": 1,
            "hint": "Estandariza la covarianza con el producto de desviaciones.",
            "explanation": "Estandariza la covarianza con el producto de desviaciones. Resultado: 0,5."
          },
          {
            "story": "Una fábrica estudia automatización y productividad.",
            "prompt": "La covarianza es 9. Las desviaciones típicas son 3 y 4. ¿Cuál es r?",
            "options": [
              "0,25",
              "1",
              "0,75"
            ],
            "answer": 3,
            "hint": "Estandariza la covarianza con el producto de desviaciones.",
            "explanation": "Estandariza la covarianza con el producto de desviaciones. Resultado: 0,75."
          }
        ],
        "dificil": [
          {
            "story": "Una fábrica estudia automatización y productividad.",
            "prompt": "La covarianza es 6. Las desviaciones típicas son 3 y 4. Con regresión lineal simple y constante, ¿qué porcentaje queda sin explicar?",
            "options": [
              "25",
              "50",
              "75"
            ],
            "answer": 3,
            "hint": "La proporción explicada es r al cuadrado. Usa su complemento.",
            "explanation": "La proporción explicada es r al cuadrado. Usa su complemento. Resultado: 75."
          },
          {
            "story": "Una fábrica estudia automatización y productividad.",
            "prompt": "La covarianza es 9. Las desviaciones típicas son 3 y 4. Con regresión lineal simple y constante, ¿qué porcentaje queda sin explicar?",
            "options": [
              "56,25",
              "43,75",
              "25"
            ],
            "answer": 2,
            "hint": "La proporción explicada es r al cuadrado. Usa su complemento.",
            "explanation": "La proporción explicada es r al cuadrado. Usa su complemento. Resultado: 43,75."
          }
        ]
      },
      {
        "nombre": "Cambio de escala",
        "facil": [
          {
            "story": "Un informe registra inflación y poder de compra.",
            "prompt": "La correlación entre inflación y poder de compra es −0,4. Se define pérdida como el negativo del poder de compra. ¿Qué correlación tiene la inflación con la pérdida?",
            "options": [
              "-0,4",
              "0,16",
              "0,4"
            ],
            "answer": 3,
            "hint": "Multiplicar una variable por menos uno cambia el signo.",
            "explanation": "Multiplicar una variable por menos uno cambia el signo. Resultado: 0,4."
          },
          {
            "story": "Un informe registra inflación y poder de compra.",
            "prompt": "La correlación entre inflación y poder de compra es −0,5. Se define pérdida como el negativo del poder de compra. ¿Qué correlación tiene la inflación con la pérdida?",
            "options": [
              "-0,5",
              "0,5",
              "0,25"
            ],
            "answer": 2,
            "hint": "Multiplicar una variable por menos uno cambia el signo.",
            "explanation": "Multiplicar una variable por menos uno cambia el signo. Resultado: 0,5."
          }
        ],
        "dificil": [
          {
            "story": "Un informe registra inflación y poder de compra.",
            "prompt": "La correlación entre inflación y poder de compra es −0,4. Se define pérdida como el negativo del poder de compra. Si sus desviaciones son 2 y 5, ¿cuál es su nueva covarianza?",
            "options": [
              "-4",
              "4",
              "0,4"
            ],
            "answer": 2,
            "hint": "Multiplica la correlación con la pérdida por el producto de desviaciones.",
            "explanation": "Multiplica la correlación con la pérdida por el producto de desviaciones. Resultado: 4."
          },
          {
            "story": "Un informe registra inflación y poder de compra.",
            "prompt": "La correlación entre inflación y poder de compra es −0,5. Se define pérdida como el negativo del poder de compra. Si sus desviaciones son 2 y 5, ¿cuál es su nueva covarianza?",
            "options": [
              "5",
              "-5",
              "0,5"
            ],
            "answer": 1,
            "hint": "Multiplica la correlación con la pérdida por el producto de desviaciones.",
            "explanation": "Multiplica la correlación con la pérdida por el producto de desviaciones. Resultado: 5."
          }
        ]
      },
      {
        "nombre": "Pendiente estimada",
        "facil": [
          {
            "story": "Un modelo relaciona costes Y con lotes X.",
            "prompt": "La covarianza es 18, la varianza de X es 9 y las medias de X e Y son 4 y 30. ¿Cuánto sube el coste previsto por un lote adicional?",
            "options": [
              "18",
              "2",
              "0,5"
            ],
            "answer": 2,
            "hint": "Calcula la pendiente como covarianza sobre varianza de X.",
            "explanation": "Calcula la pendiente como covarianza sobre varianza de X. Resultado: 2."
          },
          {
            "story": "Un modelo relaciona costes Y con lotes X.",
            "prompt": "La covarianza es 27, la varianza de X es 9 y las medias de X e Y son 4 y 30. ¿Cuánto sube el coste previsto por un lote adicional?",
            "options": [
              "3",
              "27",
              "0,3333"
            ],
            "answer": 1,
            "hint": "Calcula la pendiente como covarianza sobre varianza de X.",
            "explanation": "Calcula la pendiente como covarianza sobre varianza de X. Resultado: 3."
          }
        ],
        "dificil": [
          {
            "story": "Un modelo relaciona costes Y con lotes X.",
            "prompt": "La covarianza es 18, la varianza de X es 9 y las medias de X e Y son 4 y 30. ¿Qué coste predice el modelo para cero lotes?",
            "options": [
              "22",
              "30",
              "38"
            ],
            "answer": 1,
            "hint": "La recta estimada pasa por las medias. Resta la pendiente multiplicada por la media de X a la media de Y.",
            "explanation": "La recta estimada pasa por las medias. Resta la pendiente multiplicada por la media de X a la media de Y. Resultado: 22."
          },
          {
            "story": "Un modelo relaciona costes Y con lotes X.",
            "prompt": "La covarianza es 27, la varianza de X es 9 y las medias de X e Y son 4 y 30. ¿Qué coste predice el modelo para cero lotes?",
            "options": [
              "30",
              "42",
              "18"
            ],
            "answer": 3,
            "hint": "La recta estimada pasa por las medias. Resta la pendiente multiplicada por la media de X a la media de Y.",
            "explanation": "La recta estimada pasa por las medias. Resta la pendiente multiplicada por la media de X a la media de Y. Resultado: 18."
          }
        ]
      },
      {
        "nombre": "Predicción de demanda",
        "facil": [
          {
            "story": "Una tienda estima las ventas semanales.",
            "prompt": "Para precio P en euros usa Q estimada = 100 − 4P. ¿Cuántas unidades se prevén con P=5?",
            "options": [
              "80",
              "120",
              "96"
            ],
            "answer": 1,
            "hint": "Sustituye el precio en la ecuación.",
            "explanation": "Sustituye el precio en la ecuación. Resultado: 80."
          },
          {
            "story": "Una tienda estima las ventas semanales.",
            "prompt": "Para precio P en euros usa Q estimada = 100 − 6P. ¿Cuántas unidades se prevén con P=5?",
            "options": [
              "130",
              "94",
              "70"
            ],
            "answer": 3,
            "hint": "Sustituye el precio en la ecuación.",
            "explanation": "Sustituye el precio en la ecuación. Resultado: 70."
          }
        ],
        "dificil": [
          {
            "story": "Una tienda estima las ventas semanales.",
            "prompt": "Para precio P en euros usa Q estimada = 100 − 4P. Si el precio pasa de 5 a 4 €, ¿cuánto aumenta el ingreso previsto, en euros? Admite un resultado negativo.",
            "options": [
              "64",
              "4",
              "-64"
            ],
            "answer": 3,
            "hint": "Calcula P por Q en cada situación y resta el ingreso inicial del final.",
            "explanation": "Calcula P por Q en cada situación y resta el ingreso inicial del final. Resultado: -64."
          },
          {
            "story": "Una tienda estima las ventas semanales.",
            "prompt": "Para precio P en euros usa Q estimada = 100 − 6P. Si el precio pasa de 5 a 4 €, ¿cuánto aumenta el ingreso previsto, en euros? Admite un resultado negativo.",
            "options": [
              "46",
              "-46",
              "6"
            ],
            "answer": 2,
            "hint": "Calcula P por Q en cada situación y resta el ingreso inicial del final.",
            "explanation": "Calcula P por Q en cada situación y resta el ingreso inicial del final. Resultado: -46."
          }
        ]
      },
      {
        "nombre": "Residuos",
        "facil": [
          {
            "story": "Un modelo prevé el consumo de energía.",
            "prompt": "El consumo estimado es 20 + 2X. Con X=5, se observan 40 unidades. ¿Cuál es el consumo previsto?",
            "options": [
              "22",
              "10",
              "30"
            ],
            "answer": 3,
            "hint": "Sustituye X por cinco.",
            "explanation": "Sustituye X por cinco. Resultado: 30."
          },
          {
            "story": "Un modelo prevé el consumo de energía.",
            "prompt": "El consumo estimado es 20 + 3X. Con X=5, se observan 40 unidades. ¿Cuál es el consumo previsto?",
            "options": [
              "23",
              "35",
              "15"
            ],
            "answer": 2,
            "hint": "Sustituye X por cinco.",
            "explanation": "Sustituye X por cinco. Resultado: 35."
          }
        ],
        "dificil": [
          {
            "story": "Un modelo prevé el consumo de energía.",
            "prompt": "El consumo estimado es 20 + 2X. Con X=5, se observan 40 unidades. ¿Cuál es la contribución al error cuadrático residual?",
            "options": [
              "10",
              "100",
              "900"
            ],
            "answer": 2,
            "hint": "Resta el consumo previsto al observado y eleva al cuadrado.",
            "explanation": "Resta el consumo previsto al observado y eleva al cuadrado. Resultado: 100."
          },
          {
            "story": "Un modelo prevé el consumo de energía.",
            "prompt": "El consumo estimado es 20 + 3X. Con X=5, se observan 40 unidades. ¿Cuál es la contribución al error cuadrático residual?",
            "options": [
              "25",
              "5",
              "1225"
            ],
            "answer": 1,
            "hint": "Resta el consumo previsto al observado y eleva al cuadrado.",
            "explanation": "Resta el consumo previsto al observado y eleva al cuadrado. Resultado: 25."
          }
        ]
      },
      {
        "nombre": "Descomposición de cuadrados",
        "facil": [
          {
            "story": "Un modelo de salarios incluye constante.",
            "prompt": "La suma total de cuadrados es 200 y la explicada es 100. ¿Cuál es la suma residual?",
            "options": [
              "200",
              "100",
              "300"
            ],
            "answer": 2,
            "hint": "La variación total es explicada más residual.",
            "explanation": "La variación total es explicada más residual. Resultado: 100."
          },
          {
            "story": "Un modelo de salarios incluye constante.",
            "prompt": "La suma total de cuadrados es 200 y la explicada es 150. ¿Cuál es la suma residual?",
            "options": [
              "50",
              "150",
              "200"
            ],
            "answer": 1,
            "hint": "La variación total es explicada más residual.",
            "explanation": "La variación total es explicada más residual. Resultado: 50."
          }
        ],
        "dificil": [
          {
            "story": "Un modelo de salarios incluye constante.",
            "prompt": "La suma total de cuadrados es 200 y la explicada es 100. Si otro ajuste reduce la suma residual en 20 unidades, ¿qué R² obtiene?",
            "options": [
              "0,6",
              "0,5",
              "0,4"
            ],
            "answer": 1,
            "hint": "Con el mismo total, los veinte puntos que desaparecen del residuo pasan a la suma explicada.",
            "explanation": "Con el mismo total, los veinte puntos que desaparecen del residuo pasan a la suma explicada. Resultado: 0,6."
          },
          {
            "story": "Un modelo de salarios incluye constante.",
            "prompt": "La suma total de cuadrados es 200 y la explicada es 150. Si otro ajuste reduce la suma residual en 20 unidades, ¿qué R² obtiene?",
            "options": [
              "0,75",
              "0,15",
              "0,85"
            ],
            "answer": 3,
            "hint": "Con el mismo total, los veinte puntos que desaparecen del residuo pasan a la suma explicada.",
            "explanation": "Con el mismo total, los veinte puntos que desaparecen del residuo pasan a la suma explicada. Resultado: 0,85."
          }
        ]
      },
      {
        "nombre": "Regresión inversa",
        "facil": [
          {
            "story": "Se ajustan dos rectas sobre los mismos registros de activos y deuda.",
            "prompt": "La pendiente de deuda sobre activos es 0,5 y la inversa es 0,4. ¿Cuánto vale el producto de pendientes?",
            "options": [
              "0,2",
              "0,4",
              "0,5"
            ],
            "answer": 1,
            "hint": "Multiplica ambas pendientes.",
            "explanation": "Multiplica ambas pendientes. Resultado: 0,2."
          },
          {
            "story": "Se ajustan dos rectas sobre los mismos registros de activos y deuda.",
            "prompt": "La pendiente de deuda sobre activos es 0,5 y la inversa es 0,5. ¿Cuánto vale el producto de pendientes?",
            "options": [
              "0,5",
              "1",
              "0,25"
            ],
            "answer": 3,
            "hint": "Multiplica ambas pendientes.",
            "explanation": "Multiplica ambas pendientes. Resultado: 0,25."
          }
        ],
        "dificil": [
          {
            "story": "Se ajustan dos rectas sobre los mismos registros de activos y deuda.",
            "prompt": "La pendiente de deuda sobre activos es 0,5 y la inversa es 0,4. ¿Cuál es el coeficiente de Pearson, redondeado a cuatro decimales?",
            "options": [
              "0,2",
              "-0,4472",
              "0,4472"
            ],
            "answer": 3,
            "hint": "Las pendientes tienen signo positivo y su producto es r².",
            "explanation": "Las pendientes tienen signo positivo y su producto es r². Resultado: 0,4472."
          },
          {
            "story": "Se ajustan dos rectas sobre los mismos registros de activos y deuda.",
            "prompt": "La pendiente de deuda sobre activos es 0,5 y la inversa es 0,5. ¿Cuál es el coeficiente de Pearson, redondeado a cuatro decimales?",
            "options": [
              "0,25",
              "0,5",
              "-0,5"
            ],
            "answer": 2,
            "hint": "Las pendientes tienen signo positivo y su producto es r².",
            "explanation": "Las pendientes tienen signo positivo y su producto es r². Resultado: 0,5."
          }
        ]
      },
      {
        "nombre": "Extrapolación",
        "facil": [
          {
            "story": "Una consultora relaciona facturación y plantilla.",
            "prompt": "En empresas de 5 a 20 empleados se ajusta facturación en miles de euros = 8 + 2X. ¿Cuál es la predicción en miles para 20 empleados?",
            "options": [
              "40",
              "18",
              "48"
            ],
            "answer": 3,
            "hint": "Evalúa en el extremo superior del rango observado.",
            "explanation": "Evalúa en el extremo superior del rango observado. Resultado: 48."
          },
          {
            "story": "Una consultora relaciona facturación y plantilla.",
            "prompt": "En empresas de 5 a 20 empleados se ajusta facturación en miles de euros = 8 + 3X. ¿Cuál es la predicción en miles para 20 empleados?",
            "options": [
              "60",
              "68",
              "23"
            ],
            "answer": 2,
            "hint": "Evalúa en el extremo superior del rango observado.",
            "explanation": "Evalúa en el extremo superior del rango observado. Resultado: 68."
          }
        ],
        "dificil": [
          {
            "story": "Una consultora relaciona facturación y plantilla.",
            "prompt": "En empresas de 5 a 20 empleados se ajusta facturación en miles de euros = 8 + 2X. ¿En cuántos miles supera la extrapolación a 35 empleados a la predicción para 20 empleados?",
            "options": [
              "78",
              "30",
              "38"
            ],
            "answer": 2,
            "hint": "Multiplica por la pendiente el aumento de tamaño. Esta diferencia no avala la validez de la extrapolación.",
            "explanation": "Multiplica por la pendiente el aumento de tamaño. Esta diferencia no avala la validez de la extrapolación. Resultado: 30."
          },
          {
            "story": "Una consultora relaciona facturación y plantilla.",
            "prompt": "En empresas de 5 a 20 empleados se ajusta facturación en miles de euros = 8 + 3X. ¿En cuántos miles supera la extrapolación a 35 empleados a la predicción para 20 empleados?",
            "options": [
              "45",
              "113",
              "53"
            ],
            "answer": 1,
            "hint": "Multiplica por la pendiente el aumento de tamaño. Esta diferencia no avala la validez de la extrapolación.",
            "explanation": "Multiplica por la pendiente el aumento de tamaño. Esta diferencia no avala la validez de la extrapolación. Resultado: 45."
          }
        ]
      },
      {
        "nombre": "Comparación de modelos",
        "facil": [
          {
            "story": "La dirección compara dos ajustes de costes sobre la misma muestra.",
            "prompt": "La suma total de cuadrados es 100. Los modelos A y B tienen sumas residuales de 20 y 10. ¿Cuánto vale el R² de B si incluye constante?",
            "options": [
              "0,1",
              "0,9",
              "0,81"
            ],
            "answer": 2,
            "hint": "Resta de uno el cociente de la suma residual sobre la total.",
            "explanation": "Resta de uno el cociente de la suma residual sobre la total. Resultado: 0,9."
          },
          {
            "story": "La dirección compara dos ajustes de costes sobre la misma muestra.",
            "prompt": "La suma total de cuadrados es 100. Los modelos A y B tienen sumas residuales de 30 y 10. ¿Cuánto vale el R² de B si incluye constante?",
            "options": [
              "0,9",
              "0,1",
              "0,81"
            ],
            "answer": 1,
            "hint": "Resta de uno el cociente de la suma residual sobre la total.",
            "explanation": "Resta de uno el cociente de la suma residual sobre la total. Resultado: 0,9."
          }
        ],
        "dificil": [
          {
            "story": "La dirección compara dos ajustes de costes sobre la misma muestra.",
            "prompt": "La suma total de cuadrados es 100. Los modelos A y B tienen sumas residuales de 20 y 10. ¿Cuántos puntos porcentuales de variación explicada gana B frente a A?",
            "options": [
              "10",
              "20",
              "80"
            ],
            "answer": 1,
            "hint": "La reducción del residuo dividida por el total equivale a la ganancia de R².",
            "explanation": "La reducción del residuo dividida por el total equivale a la ganancia de R². Resultado: 10."
          },
          {
            "story": "La dirección compara dos ajustes de costes sobre la misma muestra.",
            "prompt": "La suma total de cuadrados es 100. Los modelos A y B tienen sumas residuales de 30 y 10. ¿Cuántos puntos porcentuales de variación explicada gana B frente a A?",
            "options": [
              "30",
              "70",
              "20"
            ],
            "answer": 3,
            "hint": "La reducción del residuo dividida por el total equivale a la ganancia de R².",
            "explanation": "La reducción del residuo dividida por el total equivale a la ganancia de R². Resultado: 20."
          }
        ]
      }
    ]
  },
  {
    "id": "eco-b3",
    "nombre": "Ruta 3 · Números índices y probabilidad",
    "apartados": [
      {
        "nombre": "Índice simple",
        "facil": [
          {
            "story": "Un observatorio compara precios agrícolas.",
            "prompt": "El kilo costaba 4 € y ahora cuesta 4,8 €. ¿Qué índice de precios base 100 resulta?",
            "options": [
              "120",
              "20",
              "108"
            ],
            "answer": 1,
            "hint": "Divide el precio actual por cuatro y multiplica por cien.",
            "explanation": "Divide el precio actual por cuatro y multiplica por cien. Resultado: 120."
          },
          {
            "story": "Un observatorio compara precios agrícolas.",
            "prompt": "El kilo costaba 4 € y ahora cuesta 5,2 €. ¿Qué índice de precios base 100 resulta?",
            "options": [
              "30",
              "112",
              "130"
            ],
            "answer": 3,
            "hint": "Divide el precio actual por cuatro y multiplica por cien.",
            "explanation": "Divide el precio actual por cuatro y multiplica por cien. Resultado: 130."
          }
        ],
        "dificil": [
          {
            "story": "Un observatorio compara precios agrícolas.",
            "prompt": "El kilo costaba 4 € y ahora cuesta 4,8 €. Si el precio posterior cae un 10 %, ¿qué índice conserva respecto a la base original?",
            "options": [
              "110",
              "90",
              "108"
            ],
            "answer": 3,
            "hint": "Aplica el factor 0,90 al índice actual.",
            "explanation": "Aplica el factor 0,90 al índice actual. Resultado: 108."
          },
          {
            "story": "Un observatorio compara precios agrícolas.",
            "prompt": "El kilo costaba 4 € y ahora cuesta 5,2 €. Si el precio posterior cae un 10 %, ¿qué índice conserva respecto a la base original?",
            "options": [
              "120",
              "117",
              "90"
            ],
            "answer": 2,
            "hint": "Aplica el factor 0,90 al índice actual.",
            "explanation": "Aplica el factor 0,90 al índice actual. Resultado: 117."
          }
        ]
      },
      {
        "nombre": "Cambio de base",
        "facil": [
          {
            "story": "Una serie de producción industrial utiliza una base común.",
            "prompt": "Los índices de enero y mayo son 80 y 96. ¿Cuántos puntos del índice antiguo se ganaron?",
            "options": [
              "96",
              "20",
              "16"
            ],
            "answer": 3,
            "hint": "Resta los índices originales.",
            "explanation": "Resta los índices originales. Resultado: 16."
          },
          {
            "story": "Una serie de producción industrial utiliza una base común.",
            "prompt": "Los índices de enero y mayo son 80 y 104. ¿Cuántos puntos del índice antiguo se ganaron?",
            "options": [
              "104",
              "24",
              "30"
            ],
            "answer": 2,
            "hint": "Resta los índices originales.",
            "explanation": "Resta los índices originales. Resultado: 24."
          }
        ],
        "dificil": [
          {
            "story": "Una serie de producción industrial utiliza una base común.",
            "prompt": "Los índices de enero y mayo son 80 y 96. Al fijar enero igual a cien, ¿qué índice tiene mayo?",
            "options": [
              "116",
              "120",
              "96"
            ],
            "answer": 2,
            "hint": "Divide la cifra antigua de mayo por la de enero y multiplica por cien.",
            "explanation": "Divide la cifra antigua de mayo por la de enero y multiplica por cien. Resultado: 120."
          },
          {
            "story": "Una serie de producción industrial utiliza una base común.",
            "prompt": "Los índices de enero y mayo son 80 y 104. Al fijar enero igual a cien, ¿qué índice tiene mayo?",
            "options": [
              "130",
              "124",
              "104"
            ],
            "answer": 1,
            "hint": "Divide la cifra antigua de mayo por la de enero y multiplica por cien.",
            "explanation": "Divide la cifra antigua de mayo por la de enero y multiplica por cien. Resultado: 130."
          }
        ]
      },
      {
        "nombre": "Tasas sucesivas",
        "facil": [
          {
            "story": "La facturación trimestral aumenta durante dos periodos.",
            "prompt": "Primero sube un 10 % y posteriormente un 20 %. ¿Qué factor multiplica las ventas en el segundo periodo?",
            "options": [
              "0,2",
              "1,2",
              "1,1"
            ],
            "answer": 2,
            "hint": "Suma uno a la tasa en tanto por uno.",
            "explanation": "Suma uno a la tasa en tanto por uno. Resultado: 1,2."
          },
          {
            "story": "La facturación trimestral aumenta durante dos periodos.",
            "prompt": "Primero sube un 10 % y posteriormente un 30 %. ¿Qué factor multiplica las ventas en el segundo periodo?",
            "options": [
              "1,3",
              "0,3",
              "1,1"
            ],
            "answer": 1,
            "hint": "Suma uno a la tasa en tanto por uno.",
            "explanation": "Suma uno a la tasa en tanto por uno. Resultado: 1,3."
          }
        ],
        "dificil": [
          {
            "story": "La facturación trimestral aumenta durante dos periodos.",
            "prompt": "Primero sube un 10 % y posteriormente un 20 %. ¿Cuál es el aumento porcentual acumulado?",
            "options": [
              "32",
              "30",
              "20"
            ],
            "answer": 1,
            "hint": "Multiplica los dos factores de crecimiento antes de convertir a porcentaje.",
            "explanation": "Multiplica los dos factores de crecimiento antes de convertir a porcentaje. Resultado: 32."
          },
          {
            "story": "La facturación trimestral aumenta durante dos periodos.",
            "prompt": "Primero sube un 10 % y posteriormente un 30 %. ¿Cuál es el aumento porcentual acumulado?",
            "options": [
              "40",
              "30",
              "43"
            ],
            "answer": 3,
            "hint": "Multiplica los dos factores de crecimiento antes de convertir a porcentaje.",
            "explanation": "Multiplica los dos factores de crecimiento antes de convertir a porcentaje. Resultado: 43."
          }
        ]
      },
      {
        "nombre": "Repercusión en un índice",
        "facil": [
          {
            "story": "Se estudia la contribución de la energía a un índice de cesta fija.",
            "prompt": "En la base, la energía pesa un 20 %. Su precio sube el 20 % y el resto de precios queda constante. ¿Qué peso tiene el resto de la cesta en porcentaje?",
            "options": [
              "80",
              "20",
              "100"
            ],
            "answer": 1,
            "hint": "Los pesos suman cien.",
            "explanation": "Los pesos suman cien. Resultado: 80."
          },
          {
            "story": "Se estudia la contribución de la energía a un índice de cesta fija.",
            "prompt": "En la base, la energía pesa un 20 %. Su precio sube el 30 % y el resto de precios queda constante. ¿Qué peso tiene el resto de la cesta en porcentaje?",
            "options": [
              "20",
              "100",
              "80"
            ],
            "answer": 3,
            "hint": "Los pesos suman cien.",
            "explanation": "Los pesos suman cien. Resultado: 80."
          }
        ],
        "dificil": [
          {
            "story": "Se estudia la contribución de la energía a un índice de cesta fija.",
            "prompt": "En la base, la energía pesa un 20 %. Su precio sube el 20 % y el resto de precios queda constante. ¿Cuántos puntos aporta la energía al índice de precios base 100?",
            "options": [
              "20",
              "16",
              "4"
            ],
            "answer": 3,
            "hint": "Multiplica la variación porcentual de energía por su peso inicial en tanto por uno.",
            "explanation": "Multiplica la variación porcentual de energía por su peso inicial en tanto por uno. Resultado: 4."
          },
          {
            "story": "Se estudia la contribución de la energía a un índice de cesta fija.",
            "prompt": "En la base, la energía pesa un 20 %. Su precio sube el 30 % y el resto de precios queda constante. ¿Cuántos puntos aporta la energía al índice de precios base 100?",
            "options": [
              "30",
              "6",
              "24"
            ],
            "answer": 2,
            "hint": "Multiplica la variación porcentual de energía por su peso inicial en tanto por uno.",
            "explanation": "Multiplica la variación porcentual de energía por su peso inicial en tanto por uno. Resultado: 6."
          }
        ]
      },
      {
        "nombre": "Laspeyres de precios",
        "facil": [
          {
            "story": "Una fábrica compra dos insumos.",
            "prompt": "La cesta base contiene 4 unidades de acero y 2 de cobre a 10 y 20 €. Hoy cuestan 12 y 22 €. ¿Cuál es el coste base de la cesta en euros?",
            "options": [
              "60",
              "30",
              "80"
            ],
            "answer": 3,
            "hint": "Suma cada precio base por su cantidad base.",
            "explanation": "Suma cada precio base por su cantidad base. Resultado: 80."
          },
          {
            "story": "Una fábrica compra dos insumos.",
            "prompt": "La cesta base contiene 4 unidades de acero y 2 de cobre a 10 y 20 €. Hoy cuestan 13 y 22 €. ¿Cuál es el coste base de la cesta en euros?",
            "options": [
              "60",
              "80",
              "30"
            ],
            "answer": 2,
            "hint": "Suma cada precio base por su cantidad base.",
            "explanation": "Suma cada precio base por su cantidad base. Resultado: 80."
          }
        ],
        "dificil": [
          {
            "story": "Una fábrica compra dos insumos.",
            "prompt": "La cesta base contiene 4 unidades de acero y 2 de cobre a 10 y 20 €. Hoy cuestan 12 y 22 €. ¿Cuál es el índice de precios de Laspeyres?",
            "options": [
              "1,15",
              "115",
              "92"
            ],
            "answer": 2,
            "hint": "Mantén las cantidades base y compara el coste de comprarlas a precios de ambos periodos.",
            "explanation": "Mantén las cantidades base y compara el coste de comprarlas a precios de ambos periodos. Resultado: 115."
          },
          {
            "story": "Una fábrica compra dos insumos.",
            "prompt": "La cesta base contiene 4 unidades de acero y 2 de cobre a 10 y 20 €. Hoy cuestan 13 y 22 €. ¿Cuál es el índice de precios de Laspeyres?",
            "options": [
              "120",
              "1,2",
              "96"
            ],
            "answer": 1,
            "hint": "Mantén las cantidades base y compara el coste de comprarlas a precios de ambos periodos.",
            "explanation": "Mantén las cantidades base y compara el coste de comprarlas a precios de ambos periodos. Resultado: 120."
          }
        ]
      },
      {
        "nombre": "Paasche de precios",
        "facil": [
          {
            "story": "Una empresa cambia su mezcla de compras.",
            "prompt": "La cesta actual contiene 2 tornillos especiales y 2 placas. Sus precios base eran 10 y 20 €. Los actuales son 11 y 24 €. ¿Cuánto costaría la cesta actual a precios iniciales?",
            "options": [
              "70",
              "60",
              "30"
            ],
            "answer": 2,
            "hint": "Mantén las cantidades de hoy y aplica precios antiguos.",
            "explanation": "Mantén las cantidades de hoy y aplica precios antiguos. Resultado: 60."
          },
          {
            "story": "Una empresa cambia su mezcla de compras.",
            "prompt": "La cesta actual contiene 2 tornillos especiales y 3 placas. Sus precios base eran 10 y 20 €. Los actuales son 11 y 24 €. ¿Cuánto costaría la cesta actual a precios iniciales?",
            "options": [
              "80",
              "94",
              "30"
            ],
            "answer": 1,
            "hint": "Mantén las cantidades de hoy y aplica precios antiguos.",
            "explanation": "Mantén las cantidades de hoy y aplica precios antiguos. Resultado: 80."
          }
        ],
        "dificil": [
          {
            "story": "Una empresa cambia su mezcla de compras.",
            "prompt": "La cesta actual contiene 2 tornillos especiales y 2 placas. Sus precios base eran 10 y 20 €. Los actuales son 11 y 24 €. ¿Cuál es el índice de precios de Paasche?",
            "options": [
              "116,6667",
              "81,0811",
              "85,7143"
            ],
            "answer": 1,
            "hint": "Divide el coste actual de la cesta actual por su coste a precios base.",
            "explanation": "Divide el coste actual de la cesta actual por su coste a precios base. Resultado: 116,6667."
          },
          {
            "story": "Una empresa cambia su mezcla de compras.",
            "prompt": "La cesta actual contiene 2 tornillos especiales y 3 placas. Sus precios base eran 10 y 20 €. Los actuales son 11 y 24 €. ¿Cuál es el índice de precios de Paasche?",
            "options": [
              "76,9231",
              "85,1064",
              "117,5"
            ],
            "answer": 3,
            "hint": "Divide el coste actual de la cesta actual por su coste a precios base.",
            "explanation": "Divide el coste actual de la cesta actual por su coste a precios base. Resultado: 117,5."
          }
        ]
      },
      {
        "nombre": "Índices de cantidades",
        "facil": [
          {
            "story": "Un mayorista registra compras de dos bienes.",
            "prompt": "Antes compraba 2 y 4 unidades. Ahora compra 4 y 5. Los precios base son 5 y 10 €, y los actuales son 10 y 10 €. ¿Cuántas unidades compra ahora en total?",
            "options": [
              "9",
              "6",
              "4"
            ],
            "answer": 1,
            "hint": "Suma las dos cantidades actuales.",
            "explanation": "Suma las dos cantidades actuales. Resultado: 9."
          },
          {
            "story": "Un mayorista registra compras de dos bienes.",
            "prompt": "Antes compraba 2 y 4 unidades. Ahora compra 5 y 5. Los precios base son 5 y 10 €, y los actuales son 10 y 10 €. ¿Cuántas unidades compra ahora en total?",
            "options": [
              "6",
              "5",
              "10"
            ],
            "answer": 3,
            "hint": "Suma las dos cantidades actuales.",
            "explanation": "Suma las dos cantidades actuales. Resultado: 10."
          }
        ],
        "dificil": [
          {
            "story": "Un mayorista registra compras de dos bienes.",
            "prompt": "Antes compraba 2 y 4 unidades. Ahora compra 4 y 5. Los precios base son 5 y 10 €, y los actuales son 10 y 10 €. ¿Cuál es el índice de cantidades de Paasche?",
            "options": [
              "140",
              "66,6667",
              "150"
            ],
            "answer": 3,
            "hint": "Usa los precios actuales para valorar las cantidades nuevas y las antiguas.",
            "explanation": "Usa los precios actuales para valorar las cantidades nuevas y las antiguas. Resultado: 150."
          },
          {
            "story": "Un mayorista registra compras de dos bienes.",
            "prompt": "Antes compraba 2 y 4 unidades. Ahora compra 5 y 5. Los precios base son 5 y 10 €, y los actuales son 10 y 10 €. ¿Cuál es el índice de cantidades de Paasche?",
            "options": [
              "150",
              "166,6667",
              "60"
            ],
            "answer": 2,
            "hint": "Usa los precios actuales para valorar las cantidades nuevas y las antiguas.",
            "explanation": "Usa los precios actuales para valorar las cantidades nuevas y las antiguas. Resultado: 166,6667."
          }
        ]
      },
      {
        "nombre": "Descomposición del valor",
        "facil": [
          {
            "story": "Las ventas se resumen por precio y volumen.",
            "prompt": "Laspeyres de precios vale 120 y Paasche de cantidades vale 110, ambos base 100. ¿Qué crecimiento porcentual de volumen refleja este último?",
            "options": [
              "110",
              "0,1",
              "10"
            ],
            "answer": 3,
            "hint": "Resta la base cien.",
            "explanation": "Resta la base cien. Resultado: 10."
          },
          {
            "story": "Las ventas se resumen por precio y volumen.",
            "prompt": "Laspeyres de precios vale 120 y Paasche de cantidades vale 115, ambos base 100. ¿Qué crecimiento porcentual de volumen refleja este último?",
            "options": [
              "115",
              "15",
              "0,15"
            ],
            "answer": 2,
            "hint": "Resta la base cien.",
            "explanation": "Resta la base cien. Resultado: 15."
          }
        ],
        "dificil": [
          {
            "story": "Las ventas se resumen por precio y volumen.",
            "prompt": "Laspeyres de precios vale 120 y Paasche de cantidades vale 110, ambos base 100. ¿Qué índice de valor resulta?",
            "options": [
              "130",
              "132",
              "110"
            ],
            "answer": 2,
            "hint": "Multiplica el índice de precios y el índice complementario de cantidades y divide por cien.",
            "explanation": "Multiplica el índice de precios y el índice complementario de cantidades y divide por cien. Resultado: 132."
          },
          {
            "story": "Las ventas se resumen por precio y volumen.",
            "prompt": "Laspeyres de precios vale 120 y Paasche de cantidades vale 115, ambos base 100. ¿Qué índice de valor resulta?",
            "options": [
              "138",
              "135",
              "115"
            ],
            "answer": 1,
            "hint": "Multiplica el índice de precios y el índice complementario de cantidades y divide por cien.",
            "explanation": "Multiplica el índice de precios y el índice complementario de cantidades y divide por cien. Resultado: 138."
          }
        ]
      },
      {
        "nombre": "Deflación",
        "facil": [
          {
            "story": "Una cuenta empresarial distingue euros corrientes y constantes.",
            "prompt": "Los ingresos actuales son 4800 € y el índice de precios es 120 (base 100). El ingreso del año base fue 3000 €. ¿Cuánto valen hoy los ingresos en euros del año base?",
            "options": [
              "5760",
              "4000",
              "4800"
            ],
            "answer": 2,
            "hint": "Divide el ingreso corriente por 1,20.",
            "explanation": "Divide el ingreso corriente por 1,20. Resultado: 4000."
          },
          {
            "story": "Una cuenta empresarial distingue euros corrientes y constantes.",
            "prompt": "Los ingresos actuales son 7200 € y el índice de precios es 120 (base 100). El ingreso del año base fue 3000 €. ¿Cuánto valen hoy los ingresos en euros del año base?",
            "options": [
              "6000",
              "8640",
              "7200"
            ],
            "answer": 1,
            "hint": "Divide el ingreso corriente por 1,20.",
            "explanation": "Divide el ingreso corriente por 1,20. Resultado: 6000."
          }
        ],
        "dificil": [
          {
            "story": "Una cuenta empresarial distingue euros corrientes y constantes.",
            "prompt": "Los ingresos actuales son 4800 € y el índice de precios es 120 (base 100). El ingreso del año base fue 3000 €. ¿Cuál es el crecimiento real porcentual respecto al año base?",
            "options": [
              "33,3333",
              "60",
              "133,3333"
            ],
            "answer": 1,
            "hint": "Compara el ingreso deflactado con los 3000 € iniciales.",
            "explanation": "Compara el ingreso deflactado con los 3000 € iniciales. Resultado: 33,3333."
          },
          {
            "story": "Una cuenta empresarial distingue euros corrientes y constantes.",
            "prompt": "Los ingresos actuales son 7200 € y el índice de precios es 120 (base 100). El ingreso del año base fue 3000 €. ¿Cuál es el crecimiento real porcentual respecto al año base?",
            "options": [
              "140",
              "200",
              "100"
            ],
            "answer": 3,
            "hint": "Compara el ingreso deflactado con los 3000 € iniciales.",
            "explanation": "Compara el ingreso deflactado con los 3000 € iniciales. Resultado: 100."
          }
        ]
      },
      {
        "nombre": "Sucesos y unión",
        "facil": [
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,2 y P(ambos) = 0,1. ¿Cuál es P(retraso o reclamación)?",
            "options": [
              "0,5",
              "0,6",
              "0,08"
            ],
            "answer": 1,
            "hint": "Suma las probabilidades marginales y resta la intersección.",
            "explanation": "Suma las probabilidades marginales y resta la intersección. Resultado: 0,5."
          },
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,3 y P(ambos) = 0,1. ¿Cuál es P(retraso o reclamación)?",
            "options": [
              "0,7",
              "0,12",
              "0,6"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades marginales y resta la intersección.",
            "explanation": "Suma las probabilidades marginales y resta la intersección. Resultado: 0,6."
          }
        ],
        "dificil": [
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,2 y P(ambos) = 0,1. ¿Cuál es la probabilidad de exactamente uno de los dos problemas?",
            "options": [
              "0,5",
              "0,6",
              "0,4"
            ],
            "answer": 3,
            "hint": "Resta la intersección de la unión para excluir los casos con ambos problemas.",
            "explanation": "Resta la intersección de la unión para excluir los casos con ambos problemas. Resultado: 0,4."
          },
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,3 y P(ambos) = 0,1. ¿Cuál es la probabilidad de exactamente uno de los dos problemas?",
            "options": [
              "0,6",
              "0,5",
              "0,7"
            ],
            "answer": 2,
            "hint": "Resta la intersección de la unión para excluir los casos con ambos problemas.",
            "explanation": "Resta la intersección de la unión para excluir los casos con ambos problemas. Resultado: 0,5."
          }
        ]
      },
      {
        "nombre": "Complemento",
        "facil": [
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 20 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de que un expediente carezca de errores?",
            "options": [
              "0,2",
              "0,64",
              "0,8"
            ],
            "answer": 3,
            "hint": "Toma el complemento de la probabilidad de error.",
            "explanation": "Toma el complemento de la probabilidad de error. Resultado: 0,8."
          },
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 30 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de que un expediente carezca de errores?",
            "options": [
              "0,3",
              "0,7",
              "0,49"
            ],
            "answer": 2,
            "hint": "Toma el complemento de la probabilidad de error.",
            "explanation": "Toma el complemento de la probabilidad de error. Resultado: 0,7."
          }
        ],
        "dificil": [
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 20 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de hallar al menos un expediente con error en las dos selecciones?",
            "options": [
              "0,04",
              "0,36",
              "0,64"
            ],
            "answer": 2,
            "hint": "Resta de uno la probabilidad de que ambos estén libres de errores.",
            "explanation": "Resta de uno la probabilidad de que ambos estén libres de errores. Resultado: 0,36."
          },
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 30 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de hallar al menos un expediente con error en las dos selecciones?",
            "options": [
              "0,51",
              "0,09",
              "0,49"
            ],
            "answer": 1,
            "hint": "Resta de uno la probabilidad de que ambos estén libres de errores.",
            "explanation": "Resta de uno la probabilidad de que ambos estén libres de errores. Resultado: 0,51."
          }
        ]
      },
      {
        "nombre": "Probabilidad condicionada",
        "facil": [
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 8 son simultáneamente de pymes y morosos. ¿Qué probabilidad tiene un crédito al azar de reunir las dos condiciones?",
            "options": [
              "0,2",
              "0,08",
              "0,4"
            ],
            "answer": 2,
            "hint": "Divide el recuento conjunto por el total.",
            "explanation": "Divide el recuento conjunto por el total. Resultado: 0,08."
          },
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 12 son simultáneamente de pymes y morosos. ¿Qué probabilidad tiene un crédito al azar de reunir las dos condiciones?",
            "options": [
              "0,12",
              "0,3",
              "0,4"
            ],
            "answer": 1,
            "hint": "Divide el recuento conjunto por el total.",
            "explanation": "Divide el recuento conjunto por el total. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 8 son simultáneamente de pymes y morosos. Sabiendo que pertenece a una pyme, ¿qué probabilidad tiene de estar en mora?",
            "options": [
              "0,2",
              "0,08",
              "0,4"
            ],
            "answer": 1,
            "hint": "El denominador pasa a ser el total de créditos a pymes.",
            "explanation": "El denominador pasa a ser el total de créditos a pymes. Resultado: 0,2."
          },
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 12 son simultáneamente de pymes y morosos. Sabiendo que pertenece a una pyme, ¿qué probabilidad tiene de estar en mora?",
            "options": [
              "0,12",
              "0,4",
              "0,3"
            ],
            "answer": 3,
            "hint": "El denominador pasa a ser el total de créditos a pymes.",
            "explanation": "El denominador pasa a ser el total de créditos a pymes. Resultado: 0,3."
          }
        ]
      },
      {
        "nombre": "Producto de probabilidades",
        "facil": [
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,6. Entre quienes superan el primero, ¿qué probabilidad hay de fallar el segundo?",
            "options": [
              "0,4",
              "0,6",
              "0,2"
            ],
            "answer": 1,
            "hint": "Toma el complemento de la probabilidad condicionada.",
            "explanation": "Toma el complemento de la probabilidad condicionada. Resultado: 0,4."
          },
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,7. Entre quienes superan el primero, ¿qué probabilidad hay de fallar el segundo?",
            "options": [
              "0,7",
              "0,2",
              "0,3"
            ],
            "answer": 3,
            "hint": "Toma el complemento de la probabilidad condicionada.",
            "explanation": "Toma el complemento de la probabilidad condicionada. Resultado: 0,3."
          }
        ],
        "dificil": [
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,6. ¿Qué probabilidad tiene un proveedor de superar ambos controles?",
            "options": [
              "0,32",
              "0,6",
              "0,48"
            ],
            "answer": 3,
            "hint": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero.",
            "explanation": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero. Resultado: 0,48."
          },
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,7. ¿Qué probabilidad tiene un proveedor de superar ambos controles?",
            "options": [
              "0,24",
              "0,56",
              "0,7"
            ],
            "answer": 2,
            "hint": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero.",
            "explanation": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero. Resultado: 0,56."
          }
        ]
      },
      {
        "nombre": "Independencia de incidencias",
        "facil": [
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,2 y P(avería de B) = 0,4. ¿Qué probabilidad tiene una avería simultánea?",
            "options": [
              "0,6",
              "0,32",
              "0,08"
            ],
            "answer": 3,
            "hint": "Por independencia multiplica las probabilidades.",
            "explanation": "Por independencia multiplica las probabilidades. Resultado: 0,08."
          },
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,3 y P(avería de B) = 0,4. ¿Qué probabilidad tiene una avería simultánea?",
            "options": [
              "0,7",
              "0,12",
              "0,28"
            ],
            "answer": 2,
            "hint": "Por independencia multiplica las probabilidades.",
            "explanation": "Por independencia multiplica las probabilidades. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,2 y P(avería de B) = 0,4. ¿Cuál es la probabilidad de que se averíe exactamente una máquina?",
            "options": [
              "0,6",
              "0,44",
              "0,08"
            ],
            "answer": 2,
            "hint": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra.",
            "explanation": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra. Resultado: 0,44."
          },
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,3 y P(avería de B) = 0,4. ¿Cuál es la probabilidad de que se averíe exactamente una máquina?",
            "options": [
              "0,46",
              "0,7",
              "0,12"
            ],
            "answer": 1,
            "hint": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra.",
            "explanation": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra. Resultado: 0,46."
          }
        ]
      },
      {
        "nombre": "Extracción sin reposición",
        "facil": [
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 4 son incorrectas. Se extraen dos al azar sin reposición. ¿Qué probabilidad hay de que la primera sea incorrecta?",
            "options": [
              "0,2105",
              "0,2",
              "0,1579"
            ],
            "answer": 2,
            "hint": "Compara las facturas incorrectas con el total inicial.",
            "explanation": "Compara las facturas incorrectas con el total inicial. Resultado: 0,2."
          },
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 5 son incorrectas. Se extraen dos al azar sin reposición. ¿Qué probabilidad hay de que la primera sea incorrecta?",
            "options": [
              "0,25",
              "0,2632",
              "0,2105"
            ],
            "answer": 1,
            "hint": "Compara las facturas incorrectas con el total inicial.",
            "explanation": "Compara las facturas incorrectas con el total inicial. Resultado: 0,25."
          }
        ],
        "dificil": [
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 4 son incorrectas. Se extraen dos al azar sin reposición. ¿Cuál es la probabilidad de que las dos facturas sean incorrectas?",
            "options": [
              "0,0316",
              "0,04",
              "0,1579"
            ],
            "answer": 1,
            "hint": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total.",
            "explanation": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total. Resultado: 0,0316."
          },
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 5 son incorrectas. Se extraen dos al azar sin reposición. ¿Cuál es la probabilidad de que las dos facturas sean incorrectas?",
            "options": [
              "0,0625",
              "0,2105",
              "0,0526"
            ],
            "answer": 3,
            "hint": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total.",
            "explanation": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total. Resultado: 0,0526."
          }
        ]
      },
      {
        "nombre": "Probabilidad total",
        "facil": [
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 10 % y en B el 5 %. ¿Cuál es la probabilidad de recibir una pieza de A defectuosa?",
            "options": [
              "0,04",
              "0,1",
              "0,5"
            ],
            "answer": 1,
            "hint": "Multiplica el peso de A por su tasa de fallo.",
            "explanation": "Multiplica el peso de A por su tasa de fallo. Resultado: 0,04."
          },
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 15 % y en B el 5 %. ¿Cuál es la probabilidad de recibir una pieza de A defectuosa?",
            "options": [
              "0,15",
              "0,55",
              "0,06"
            ],
            "answer": 3,
            "hint": "Multiplica el peso de A por su tasa de fallo.",
            "explanation": "Multiplica el peso de A por su tasa de fallo. Resultado: 0,06."
          }
        ],
        "dificil": [
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 10 % y en B el 5 %. ¿Qué probabilidad de defecto tiene una pieza elegida de la mezcla?",
            "options": [
              "0,15",
              "0,075",
              "0,07"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades conjuntas de defecto con cada origen.",
            "explanation": "Suma las probabilidades conjuntas de defecto con cada origen. Resultado: 0,07."
          },
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 15 % y en B el 5 %. ¿Qué probabilidad de defecto tiene una pieza elegida de la mezcla?",
            "options": [
              "0,2",
              "0,09",
              "0,1"
            ],
            "answer": 2,
            "hint": "Suma las probabilidades conjuntas de defecto con cada origen.",
            "explanation": "Suma las probabilidades conjuntas de defecto con cada origen. Resultado: 0,09."
          }
        ]
      },
      {
        "nombre": "Teorema de Bayes",
        "facil": [
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 10 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. ¿Cuál es la probabilidad conjunta de irregularidad y alerta?",
            "options": [
              "0,8",
              "0,1",
              "0,08"
            ],
            "answer": 3,
            "hint": "Aplica la sensibilidad a la proporción de solicitudes irregulares.",
            "explanation": "Aplica la sensibilidad a la proporción de solicitudes irregulares. Resultado: 0,08."
          },
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 15 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. ¿Cuál es la probabilidad conjunta de irregularidad y alerta?",
            "options": [
              "0,8",
              "0,12",
              "0,15"
            ],
            "answer": 2,
            "hint": "Aplica la sensibilidad a la proporción de solicitudes irregulares.",
            "explanation": "Aplica la sensibilidad a la proporción de solicitudes irregulares. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 10 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. Si hay alerta, ¿cuál es la probabilidad de irregularidad?",
            "options": [
              "0,8",
              "0,4706",
              "0,1"
            ],
            "answer": 2,
            "hint": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas.",
            "explanation": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas. Resultado: 0,4706."
          },
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 15 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. Si hay alerta, ¿cuál es la probabilidad de irregularidad?",
            "options": [
              "0,5854",
              "0,8",
              "0,15"
            ],
            "answer": 1,
            "hint": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas.",
            "explanation": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas. Resultado: 0,5854."
          }
        ]
      },
      {
        "nombre": "Revisión de probabilidades",
        "facil": [
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 20 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. ¿Cuántos billetes activa la prueba en total?",
            "options": [
              "20",
              "30",
              "10"
            ],
            "answer": 2,
            "hint": "Suma verdaderos y falsos positivos.",
            "explanation": "Suma verdaderos y falsos positivos. Resultado: 30."
          },
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 30 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. ¿Cuántos billetes activa la prueba en total?",
            "options": [
              "40",
              "30",
              "10"
            ],
            "answer": 1,
            "hint": "Suma verdaderos y falsos positivos.",
            "explanation": "Suma verdaderos y falsos positivos. Resultado: 40."
          }
        ],
        "dificil": [
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 20 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. Dado que el billete ha activado la prueba, ¿qué probabilidad hay de que sea auténtico?",
            "options": [
              "0,3333",
              "0,01",
              "0,6667"
            ],
            "answer": 1,
            "hint": "Entre las alertas, divide las diez de billetes auténticos por el total señalado.",
            "explanation": "Entre las alertas, divide las diez de billetes auténticos por el total señalado. Resultado: 0,3333."
          },
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 30 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. Dado que el billete ha activado la prueba, ¿qué probabilidad hay de que sea auténtico?",
            "options": [
              "0,01",
              "0,75",
              "0,25"
            ],
            "answer": 3,
            "hint": "Entre las alertas, divide las diez de billetes auténticos por el total señalado.",
            "explanation": "Entre las alertas, divide las diez de billetes auténticos por el total señalado. Resultado: 0,25."
          }
        ]
      }
    ]
  },
  {
    "id": "eco-prob",
    "nombre": "Probabilidad · Tema 10",
    "apartados": [
      {
        "nombre": "Sucesos y unión",
        "facil": [
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,2 y P(ambos) = 0,1. ¿Cuál es P(retraso o reclamación)?",
            "options": [
              "0,5",
              "0,6",
              "0,08"
            ],
            "answer": 1,
            "hint": "Suma las probabilidades marginales y resta la intersección.",
            "explanation": "Suma las probabilidades marginales y resta la intersección. Resultado: 0,5."
          },
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,3 y P(ambos) = 0,1. ¿Cuál es P(retraso o reclamación)?",
            "options": [
              "0,7",
              "0,12",
              "0,6"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades marginales y resta la intersección.",
            "explanation": "Suma las probabilidades marginales y resta la intersección. Resultado: 0,6."
          }
        ],
        "dificil": [
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,2 y P(ambos) = 0,1. ¿Cuál es la probabilidad de exactamente uno de los dos problemas?",
            "options": [
              "0,5",
              "0,6",
              "0,4"
            ],
            "answer": 3,
            "hint": "Resta la intersección de la unión para excluir los casos con ambos problemas.",
            "explanation": "Resta la intersección de la unión para excluir los casos con ambos problemas. Resultado: 0,4."
          },
          {
            "story": "Una muestra aleatoria de operaciones permite estimar riesgos.",
            "prompt": "P(retraso) = 0,4, P(reclamación) = 0,3 y P(ambos) = 0,1. ¿Cuál es la probabilidad de exactamente uno de los dos problemas?",
            "options": [
              "0,6",
              "0,5",
              "0,7"
            ],
            "answer": 2,
            "hint": "Resta la intersección de la unión para excluir los casos con ambos problemas.",
            "explanation": "Resta la intersección de la unión para excluir los casos con ambos problemas. Resultado: 0,5."
          }
        ]
      },
      {
        "nombre": "Un solo suceso",
        "facil": [
          {
            "story": "De 100 comercios, 34 venden por internet, 31 exportan y 12 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de A? Redondea a dos decimales si es necesario.",
            "options": [
              "30 %",
              "41 %",
              "34 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "P(A) = 34/100. Resultado: 34 %."
          },
          {
            "story": "De 100 comercios, 38 venden por internet, 34 exportan y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de A? Redondea a dos decimales si es necesario.",
            "options": [
              "45 %",
              "41 %",
              "38 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "P(A) = 38/100. Resultado: 38 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 comercios, 34 venden por internet, 31 exportan y 12 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de que se cumpla exactamente una de las dos condiciones? Redondea a dos decimales si es necesario.",
            "options": [
              "28 %",
              "41 %",
              "44 %"
            ],
            "answer": 2,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "Solo A y solo B son disjuntos. Sus recuentos suman (34−12)+(31−12). Resultado: 41 %."
          },
          {
            "story": "De 100 comercios, 38 venden por internet, 34 exportan y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de que se cumpla exactamente una de las dos condiciones? Redondea a dos decimales si es necesario.",
            "options": [
              "53 %",
              "33 %",
              "46 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "Solo A y solo B son disjuntos. Sus recuentos suman (38−13)+(34−13). Resultado: 46 %."
          }
        ]
      },
      {
        "nombre": "Complemento",
        "facil": [
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 20 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de que un expediente carezca de errores?",
            "options": [
              "0,2",
              "0,64",
              "0,8"
            ],
            "answer": 3,
            "hint": "Toma el complemento de la probabilidad de error.",
            "explanation": "Toma el complemento de la probabilidad de error. Resultado: 0,8."
          },
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 30 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de que un expediente carezca de errores?",
            "options": [
              "0,3",
              "0,7",
              "0,49"
            ],
            "answer": 2,
            "hint": "Toma el complemento de la probabilidad de error.",
            "explanation": "Toma el complemento de la probabilidad de error. Resultado: 0,7."
          }
        ],
        "dificil": [
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 20 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de hallar al menos un expediente con error en las dos selecciones?",
            "options": [
              "0,04",
              "0,36",
              "0,64"
            ],
            "answer": 2,
            "hint": "Resta de uno la probabilidad de que ambos estén libres de errores.",
            "explanation": "Resta de uno la probabilidad de que ambos estén libres de errores. Resultado: 0,36."
          },
          {
            "story": "Una auditoría selecciona expedientes al azar.",
            "prompt": "El 30 % de expedientes contiene un error. Las dos selecciones se hacen con reposición e independencia. ¿Cuál es la probabilidad de hallar al menos un expediente con error en las dos selecciones?",
            "options": [
              "0,51",
              "0,09",
              "0,49"
            ],
            "answer": 1,
            "hint": "Resta de uno la probabilidad de que ambos estén libres de errores.",
            "explanation": "Resta de uno la probabilidad de que ambos estén libres de errores. Resultado: 0,51."
          }
        ]
      },
      {
        "nombre": "Fuera de ambos grupos",
        "facil": [
          {
            "story": "De 100 comercios, 36 venden por internet, 31 exportan y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de no cumplir B? Redondea a dos decimales si es necesario.",
            "options": [
              "69 %",
              "76 %",
              "72 %"
            ],
            "answer": 1,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "Quedan 100−31 fuera de B. Resultado: 69 %."
          },
          {
            "story": "De 100 comercios, 40 venden por internet, 34 exportan y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de no cumplir B? Redondea a dos decimales si es necesario.",
            "options": [
              "62 %",
              "66 %",
              "73 %"
            ],
            "answer": 2,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "Quedan 100−34 fuera de B. Resultado: 66 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 comercios, 36 venden por internet, 31 exportan y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de quedar fuera de ambos grupos? Redondea a dos decimales si es necesario.",
            "options": [
              "42 %",
              "46 %",
              "37 %"
            ],
            "answer": 2,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "La unión reúne 36+31−13 elementos. Toma su complemento. Resultado: 46 %."
          },
          {
            "story": "De 100 comercios, 40 venden por internet, 34 exportan y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de quedar fuera de ambos grupos? Redondea a dos decimales si es necesario.",
            "options": [
              "47 %",
              "36 %",
              "40 %"
            ],
            "answer": 3,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "La unión reúne 40+34−14 elementos. Toma su complemento. Resultado: 40 %."
          }
        ]
      },
      {
        "nombre": "Probabilidad condicionada",
        "facil": [
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 8 son simultáneamente de pymes y morosos. ¿Qué probabilidad tiene un crédito al azar de reunir las dos condiciones?",
            "options": [
              "0,2",
              "0,08",
              "0,4"
            ],
            "answer": 2,
            "hint": "Divide el recuento conjunto por el total.",
            "explanation": "Divide el recuento conjunto por el total. Resultado: 0,08."
          },
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 12 son simultáneamente de pymes y morosos. ¿Qué probabilidad tiene un crédito al azar de reunir las dos condiciones?",
            "options": [
              "0,12",
              "0,3",
              "0,4"
            ],
            "answer": 1,
            "hint": "Divide el recuento conjunto por el total.",
            "explanation": "Divide el recuento conjunto por el total. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 8 son simultáneamente de pymes y morosos. Sabiendo que pertenece a una pyme, ¿qué probabilidad tiene de estar en mora?",
            "options": [
              "0,2",
              "0,08",
              "0,4"
            ],
            "answer": 1,
            "hint": "El denominador pasa a ser el total de créditos a pymes.",
            "explanation": "El denominador pasa a ser el total de créditos a pymes. Resultado: 0,2."
          },
          {
            "story": "Una cartera incluye empresas de diferentes tamaños.",
            "prompt": "De 100 créditos, 40 pertenecen a pymes y 12 son simultáneamente de pymes y morosos. Sabiendo que pertenece a una pyme, ¿qué probabilidad tiene de estar en mora?",
            "options": [
              "0,12",
              "0,4",
              "0,3"
            ],
            "answer": 3,
            "hint": "El denominador pasa a ser el total de créditos a pymes.",
            "explanation": "El denominador pasa a ser el total de créditos a pymes. Resultado: 0,3."
          }
        ]
      },
      {
        "nombre": "Probabilidad inversa",
        "facil": [
          {
            "story": "De 100 comercios, 38 venden por internet, 31 exportan y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "52,16 %",
              "64,16 %",
              "45,16 %"
            ],
            "answer": 3,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 31 elementos, de los cuales 14 cumplen A. Resultado: 45,16 %."
          },
          {
            "story": "De 100 comercios, 42 venden por internet, 34 exportan y 15 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "51,12 %",
              "63,12 %",
              "44,12 %"
            ],
            "answer": 3,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 34 elementos, de los cuales 15 cumplen A. Resultado: 44,12 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 comercios, 38 venden por internet, 31 exportan y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes no cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "53,78 %",
              "34,78 %",
              "37,78 %"
            ],
            "answer": 2,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 69 elementos, de los cuales 24 cumplen A. Resultado: 34,78 %."
          },
          {
            "story": "De 100 comercios, 42 venden por internet, 34 exportan y 15 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes no cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "43,91 %",
              "40,91 %",
              "27,91 %"
            ],
            "answer": 2,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 66 elementos, de los cuales 27 cumplen A. Resultado: 40,91 %."
          }
        ]
      },
      {
        "nombre": "Producto de probabilidades",
        "facil": [
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,6. Entre quienes superan el primero, ¿qué probabilidad hay de fallar el segundo?",
            "options": [
              "0,4",
              "0,6",
              "0,2"
            ],
            "answer": 1,
            "hint": "Toma el complemento de la probabilidad condicionada.",
            "explanation": "Toma el complemento de la probabilidad condicionada. Resultado: 0,4."
          },
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,7. Entre quienes superan el primero, ¿qué probabilidad hay de fallar el segundo?",
            "options": [
              "0,7",
              "0,2",
              "0,3"
            ],
            "answer": 3,
            "hint": "Toma el complemento de la probabilidad condicionada.",
            "explanation": "Toma el complemento de la probabilidad condicionada. Resultado: 0,3."
          }
        ],
        "dificil": [
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,6. ¿Qué probabilidad tiene un proveedor de superar ambos controles?",
            "options": [
              "0,32",
              "0,6",
              "0,48"
            ],
            "answer": 3,
            "hint": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero.",
            "explanation": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero. Resultado: 0,48."
          },
          {
            "story": "Un proveedor pasa dos controles sucesivos.",
            "prompt": "P(superar el primer control) = 0,8 y P(superar el segundo dado que superó el primero) = 0,7. ¿Qué probabilidad tiene un proveedor de superar ambos controles?",
            "options": [
              "0,24",
              "0,56",
              "0,7"
            ],
            "answer": 2,
            "hint": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero.",
            "explanation": "Multiplica la probabilidad del primer éxito por la del segundo condicionada al primero. Resultado: 0,56."
          }
        ]
      },
      {
        "nombre": "Intersección mediante condicionamiento",
        "facil": [
          {
            "story": "En una muestra de comercios, el 40 % venden por internet. Entre quienes cumplen esta condición, el 31 % exportan.",
            "prompt": "¿Qué porcentaje cumple la primera condición? Redondea a dos decimales si es necesario.",
            "options": [
              "59 %",
              "40 %",
              "47 %"
            ],
            "answer": 2,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "El porcentaje marginal de la primera condición es 40 %. Resultado: 40 %."
          },
          {
            "story": "En una muestra de comercios, el 44 % venden por internet. Entre quienes cumplen esta condición, el 34 % exportan.",
            "prompt": "¿Qué porcentaje cumple la primera condición? Redondea a dos decimales si es necesario.",
            "options": [
              "31 %",
              "35 %",
              "44 %"
            ],
            "answer": 3,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "El porcentaje marginal de la primera condición es 44 %. Resultado: 44 %."
          }
        ],
        "dificil": [
          {
            "story": "En una muestra de comercios, el 40 % venden por internet. Entre quienes cumplen esta condición, el 31 % exportan.",
            "prompt": "¿Qué porcentaje del total cumple la primera condición pero no la segunda? Redondea a dos decimales si es necesario.",
            "options": [
              "30,6 %",
              "27,6 %",
              "23,6 %"
            ],
            "answer": 2,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "Multiplica 40/100 por (1−31/100). Resultado: 27,6 %."
          },
          {
            "story": "En una muestra de comercios, el 44 % venden por internet. Entre quienes cumplen esta condición, el 34 % exportan.",
            "prompt": "¿Qué porcentaje del total cumple la primera condición pero no la segunda? Redondea a dos decimales si es necesario.",
            "options": [
              "29,04 %",
              "36,04 %",
              "20,04 %"
            ],
            "answer": 1,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "Multiplica 44/100 por (1−34/100). Resultado: 29,04 %."
          }
        ]
      },
      {
        "nombre": "Independencia de incidencias",
        "facil": [
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,2 y P(avería de B) = 0,4. ¿Qué probabilidad tiene una avería simultánea?",
            "options": [
              "0,6",
              "0,32",
              "0,08"
            ],
            "answer": 3,
            "hint": "Por independencia multiplica las probabilidades.",
            "explanation": "Por independencia multiplica las probabilidades. Resultado: 0,08."
          },
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,3 y P(avería de B) = 0,4. ¿Qué probabilidad tiene una avería simultánea?",
            "options": [
              "0,7",
              "0,12",
              "0,28"
            ],
            "answer": 2,
            "hint": "Por independencia multiplica las probabilidades.",
            "explanation": "Por independencia multiplica las probabilidades. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,2 y P(avería de B) = 0,4. ¿Cuál es la probabilidad de que se averíe exactamente una máquina?",
            "options": [
              "0,6",
              "0,44",
              "0,08"
            ],
            "answer": 2,
            "hint": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra.",
            "explanation": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra. Resultado: 0,44."
          },
          {
            "story": "Dos máquinas sufren averías independientes.",
            "prompt": "P(avería de A) = 0,3 y P(avería de B) = 0,4. ¿Cuál es la probabilidad de que se averíe exactamente una máquina?",
            "options": [
              "0,46",
              "0,7",
              "0,12"
            ],
            "answer": 1,
            "hint": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra.",
            "explanation": "Suma los dos casos disjuntos en que falla una máquina y funciona la otra. Resultado: 0,46."
          }
        ]
      },
      {
        "nombre": "Diferencia entre sucesos",
        "facil": [
          {
            "story": "De 100 comercios, 42 venden por internet, 31 exportan y 16 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple A pero no B? Redondea a dos decimales si es necesario.",
            "options": [
              "29 %",
              "26 %",
              "13 %"
            ],
            "answer": 2,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Del total que cumple A resta la intersección: 42−16. Resultado: 26 %."
          },
          {
            "story": "De 100 comercios, 46 venden por internet, 34 exportan y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple A pero no B? Redondea a dos decimales si es necesario.",
            "options": [
              "25 %",
              "16 %",
              "29 %"
            ],
            "answer": 3,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Del total que cumple A resta la intersección: 46−17. Resultado: 29 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 comercios, 42 venden por internet, 31 exportan y 16 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen al menos una condición, ¿qué porcentaje cumple solo B? Redondea a dos decimales si es necesario.",
            "options": [
              "26,32 %",
              "33,32 %",
              "22,32 %"
            ],
            "answer": 1,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Hay 15 casos solo B y 57 en la unión. Divide el primer recuento entre el segundo. Resultado: 26,32 %."
          },
          {
            "story": "De 100 comercios, 46 venden por internet, 34 exportan y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen al menos una condición, ¿qué porcentaje cumple solo B? Redondea a dos decimales si es necesario.",
            "options": [
              "33,98 %",
              "29,98 %",
              "26,98 %"
            ],
            "answer": 3,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Hay 17 casos solo B y 63 en la unión. Divide el primer recuento entre el segundo. Resultado: 26,98 %."
          }
        ]
      },
      {
        "nombre": "Extracción sin reposición",
        "facil": [
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 4 son incorrectas. Se extraen dos al azar sin reposición. ¿Qué probabilidad hay de que la primera sea incorrecta?",
            "options": [
              "0,2105",
              "0,2",
              "0,1579"
            ],
            "answer": 2,
            "hint": "Compara las facturas incorrectas con el total inicial.",
            "explanation": "Compara las facturas incorrectas con el total inicial. Resultado: 0,2."
          },
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 5 son incorrectas. Se extraen dos al azar sin reposición. ¿Qué probabilidad hay de que la primera sea incorrecta?",
            "options": [
              "0,25",
              "0,2632",
              "0,2105"
            ],
            "answer": 1,
            "hint": "Compara las facturas incorrectas con el total inicial.",
            "explanation": "Compara las facturas incorrectas con el total inicial. Resultado: 0,25."
          }
        ],
        "dificil": [
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 4 son incorrectas. Se extraen dos al azar sin reposición. ¿Cuál es la probabilidad de que las dos facturas sean incorrectas?",
            "options": [
              "0,0316",
              "0,04",
              "0,1579"
            ],
            "answer": 1,
            "hint": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total.",
            "explanation": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total. Resultado: 0,0316."
          },
          {
            "story": "Se audita un lote cerrado de facturas.",
            "prompt": "Hay 20 facturas y 5 son incorrectas. Se extraen dos al azar sin reposición. ¿Cuál es la probabilidad de que las dos facturas sean incorrectas?",
            "options": [
              "0,0625",
              "0,2105",
              "0,0526"
            ],
            "answer": 3,
            "hint": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total.",
            "explanation": "Tras un primer error quedan una factura incorrecta menos y diecinueve facturas en total. Resultado: 0,0526."
          }
        ]
      },
      {
        "nombre": "Efecto de seleccionar un subgrupo",
        "facil": [
          {
            "story": "De 100 comercios, 44 venden por internet, 31 exportan y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple simultáneamente A y B? Redondea a dos decimales si es necesario.",
            "options": [
              "20 %",
              "24 %",
              "17 %"
            ],
            "answer": 3,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "La intersección contiene 17 de 100. Resultado: 17 %."
          },
          {
            "story": "De 100 comercios, 48 venden por internet, 34 exportan y 18 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple simultáneamente A y B? Redondea a dos decimales si es necesario.",
            "options": [
              "25 %",
              "21 %",
              "18 %"
            ],
            "answer": 3,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "La intersección contiene 18 de 100. Resultado: 18 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 comercios, 44 venden por internet, 31 exportan y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Si se elige exclusivamente entre quienes cumplen A, ¿cuál es la probabilidad de que no se cumpla B? Redondea a dos decimales si es necesario.",
            "options": [
              "61,36 %",
              "64,36 %",
              "80,36 %"
            ],
            "answer": 1,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "De 44 elementos con A, 27 quedan fuera de B. Resultado: 61,36 %."
          },
          {
            "story": "De 100 comercios, 48 venden por internet, 34 exportan y 18 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Si se elige exclusivamente entre quienes cumplen A, ¿cuál es la probabilidad de que no se cumpla B? Redondea a dos decimales si es necesario.",
            "options": [
              "58,5 %",
              "69,5 %",
              "62,5 %"
            ],
            "answer": 3,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "De 48 elementos con A, 30 quedan fuera de B. Resultado: 62,5 %."
          }
        ]
      },
      {
        "nombre": "Probabilidad total",
        "facil": [
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 10 % y en B el 5 %. ¿Cuál es la probabilidad de recibir una pieza de A defectuosa?",
            "options": [
              "0,04",
              "0,1",
              "0,5"
            ],
            "answer": 1,
            "hint": "Multiplica el peso de A por su tasa de fallo.",
            "explanation": "Multiplica el peso de A por su tasa de fallo. Resultado: 0,04."
          },
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 15 % y en B el 5 %. ¿Cuál es la probabilidad de recibir una pieza de A defectuosa?",
            "options": [
              "0,15",
              "0,55",
              "0,06"
            ],
            "answer": 3,
            "hint": "Multiplica el peso de A por su tasa de fallo.",
            "explanation": "Multiplica el peso de A por su tasa de fallo. Resultado: 0,06."
          }
        ],
        "dificil": [
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 10 % y en B el 5 %. ¿Qué probabilidad de defecto tiene una pieza elegida de la mezcla?",
            "options": [
              "0,15",
              "0,075",
              "0,07"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades conjuntas de defecto con cada origen.",
            "explanation": "Suma las probabilidades conjuntas de defecto con cada origen. Resultado: 0,07."
          },
          {
            "story": "Dos proveedores sirven piezas a una cadena.",
            "prompt": "A aporta el 40 % y B el 60 %. En A falla el 15 % y en B el 5 %. ¿Qué probabilidad de defecto tiene una pieza elegida de la mezcla?",
            "options": [
              "0,2",
              "0,09",
              "0,1"
            ],
            "answer": 2,
            "hint": "Suma las probabilidades conjuntas de defecto con cada origen.",
            "explanation": "Suma las probabilidades conjuntas de defecto con cada origen. Resultado: 0,09."
          }
        ]
      },
      {
        "nombre": "Dos extracciones independientes",
        "facil": [
          {
            "story": "Se extraen al azar dos registros de comercios con reposición e independientemente. En cada extracción la probabilidad de incidencia es 46 %.",
            "prompt": "¿Qué probabilidad hay de que ambos registros presenten incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "17,16 %",
              "28,16 %",
              "21,16 %"
            ],
            "answer": 3,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Multiplica (46/100) por sí mismo. Resultado: 21,16 %."
          },
          {
            "story": "Se extraen al azar dos registros de comercios con reposición e independientemente. En cada extracción la probabilidad de incidencia es 50 %.",
            "prompt": "¿Qué probabilidad hay de que ambos registros presenten incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "21 %",
              "25 %",
              "28 %"
            ],
            "answer": 2,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Multiplica (50/100) por sí mismo. Resultado: 25 %."
          }
        ],
        "dificil": [
          {
            "story": "Se extraen al azar dos registros de comercios con reposición e independientemente. En cada extracción la probabilidad de incidencia es 46 %.",
            "prompt": "¿Qué probabilidad hay de que exactamente uno presente incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "49,68 %",
              "52,68 %",
              "36,68 %"
            ],
            "answer": 1,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Suma los dos órdenes posibles: 2 × (46/100) × (1−46/100). Resultado: 49,68 %."
          },
          {
            "story": "Se extraen al azar dos registros de comercios con reposición e independientemente. En cada extracción la probabilidad de incidencia es 50 %.",
            "prompt": "¿Qué probabilidad hay de que exactamente uno presente incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "50 %",
              "57 %",
              "41 %"
            ],
            "answer": 1,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Suma los dos órdenes posibles: 2 × (50/100) × (1−50/100). Resultado: 50 %."
          }
        ]
      },
      {
        "nombre": "Teorema de Bayes",
        "facil": [
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 10 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. ¿Cuál es la probabilidad conjunta de irregularidad y alerta?",
            "options": [
              "0,8",
              "0,1",
              "0,08"
            ],
            "answer": 3,
            "hint": "Aplica la sensibilidad a la proporción de solicitudes irregulares.",
            "explanation": "Aplica la sensibilidad a la proporción de solicitudes irregulares. Resultado: 0,08."
          },
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 15 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. ¿Cuál es la probabilidad conjunta de irregularidad y alerta?",
            "options": [
              "0,8",
              "0,12",
              "0,15"
            ],
            "answer": 2,
            "hint": "Aplica la sensibilidad a la proporción de solicitudes irregulares.",
            "explanation": "Aplica la sensibilidad a la proporción de solicitudes irregulares. Resultado: 0,12."
          }
        ],
        "dificil": [
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 10 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. Si hay alerta, ¿cuál es la probabilidad de irregularidad?",
            "options": [
              "0,8",
              "0,4706",
              "0,1"
            ],
            "answer": 2,
            "hint": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas.",
            "explanation": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas. Resultado: 0,4706."
          },
          {
            "story": "Un filtro automático revisa solicitudes de crédito.",
            "prompt": "El 15 % de las solicitudes es irregular. El filtro alerta en el 80 % de las irregulares y en el 10 % de las regulares. Si hay alerta, ¿cuál es la probabilidad de irregularidad?",
            "options": [
              "0,5854",
              "0,8",
              "0,15"
            ],
            "answer": 1,
            "hint": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas.",
            "explanation": "Divide la probabilidad conjunta de irregularidad y alerta por la suma de alertas verdaderas y falsas. Resultado: 0,5854."
          }
        ]
      },
      {
        "nombre": "Muestreo con y sin reposición",
        "facil": [
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de comercios, 6 contienen incidencias.",
            "prompt": "Si el primero tenía incidencia, ¿qué probabilidad hay de que el segundo también la tenga? Redondea a dos decimales si es necesario.",
            "options": [
              "30,00 %",
              "31,58 %",
              "26,32 %"
            ],
            "answer": 3,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Quedan 5 con incidencia entre 19. Resultado: 26,32 %."
          },
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de comercios, 8 contienen incidencias.",
            "prompt": "Si el primero tenía incidencia, ¿qué probabilidad hay de que el segundo también la tenga? Redondea a dos decimales si es necesario.",
            "options": [
              "40,00 %",
              "42,11 %",
              "36,84 %"
            ],
            "answer": 3,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Quedan 7 con incidencia entre 19. Resultado: 36,84 %."
          }
        ],
        "dificil": [
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de comercios, 6 contienen incidencias.",
            "prompt": "Antes de extraerlos, ¿qué probabilidad hay de que al menos uno tenga incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "51,00 %",
              "52,11 %",
              "30,00 %"
            ],
            "answer": 2,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Resta de 1 la probabilidad de dos expedientes limpios: (14/20) × (13/19). Resultado: 52,11 %."
          },
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de comercios, 8 contienen incidencias.",
            "prompt": "Antes de extraerlos, ¿qué probabilidad hay de que al menos uno tenga incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "64,00 %",
              "65,26 %",
              "40,00 %"
            ],
            "answer": 2,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Resta de 1 la probabilidad de dos expedientes limpios: (12/20) × (11/19). Resultado: 65,26 %."
          }
        ]
      },
      {
        "nombre": "Revisión de probabilidades",
        "facil": [
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 20 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. ¿Cuántos billetes activa la prueba en total?",
            "options": [
              "20",
              "30",
              "10"
            ],
            "answer": 2,
            "hint": "Suma verdaderos y falsos positivos.",
            "explanation": "Suma verdaderos y falsos positivos. Resultado: 30."
          },
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 30 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. ¿Cuántos billetes activa la prueba en total?",
            "options": [
              "40",
              "30",
              "10"
            ],
            "answer": 1,
            "hint": "Suma verdaderos y falsos positivos.",
            "explanation": "Suma verdaderos y falsos positivos. Resultado: 40."
          }
        ],
        "dificil": [
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 20 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. Dado que el billete ha activado la prueba, ¿qué probabilidad hay de que sea auténtico?",
            "options": [
              "0,3333",
              "0,01",
              "0,6667"
            ],
            "answer": 1,
            "hint": "Entre las alertas, divide las diez de billetes auténticos por el total señalado.",
            "explanation": "Entre las alertas, divide las diez de billetes auténticos por el total señalado. Resultado: 0,3333."
          },
          {
            "story": "Un banco usa una prueba para detectar billetes falsos.",
            "prompt": "De 1000 billetes hay 30 falsos. La prueba identifica todos los falsos y marca también 10 billetes auténticos. Dado que el billete ha activado la prueba, ¿qué probabilidad hay de que sea auténtico?",
            "options": [
              "0,01",
              "0,75",
              "0,25"
            ],
            "answer": 3,
            "hint": "Entre las alertas, divide las diez de billetes auténticos por el total señalado.",
            "explanation": "Entre las alertas, divide las diez de billetes auténticos por el total señalado. Resultado: 0,25."
          }
        ]
      },
      {
        "nombre": "Comprobación posterior de una alerta",
        "facil": [
          {
            "story": "En 1000 registros de comercios, 50 tienen retrasos en las entregas. Un sistema señala 46 de los casos reales y también señala 31 registros sin ese problema.",
            "prompt": "Entre los registros con el problema, ¿qué porcentaje detecta el sistema? Redondea a dos decimales si es necesario.",
            "options": [
              "92 %",
              "83 %",
              "79 %"
            ],
            "answer": 1,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 50 registros. De ellos, 46 cumplen la condición solicitada. Resultado: 92 %."
          },
          {
            "story": "En 1000 registros de comercios, 54 tienen retrasos en las entregas. Un sistema señala 50 de los casos reales y también señala 34 registros sin ese problema.",
            "prompt": "Entre los registros con el problema, ¿qué porcentaje detecta el sistema? Redondea a dos decimales si es necesario.",
            "options": [
              "92,59 %",
              "79,59 %",
              "88,59 %"
            ],
            "answer": 1,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 54 registros. De ellos, 50 cumplen la condición solicitada. Resultado: 92,59 %."
          }
        ],
        "dificil": [
          {
            "story": "En 1000 registros de comercios, 50 tienen retrasos en las entregas. Un sistema señala 46 de los casos reales y también señala 31 registros sin ese problema.",
            "prompt": "Entre los registros señalados, ¿qué porcentaje corresponde a falsas alarmas? Redondea a dos decimales si es necesario.",
            "options": [
              "40,26 %",
              "59,26 %",
              "43,26 %"
            ],
            "answer": 1,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 77 registros. De ellos, 31 cumplen la condición solicitada. Resultado: 40,26 %."
          },
          {
            "story": "En 1000 registros de comercios, 54 tienen retrasos en las entregas. Un sistema señala 50 de los casos reales y también señala 34 registros sin ese problema.",
            "prompt": "Entre los registros señalados, ¿qué porcentaje corresponde a falsas alarmas? Redondea a dos decimales si es necesario.",
            "options": [
              "47,48 %",
              "40,48 %",
              "27,48 %"
            ],
            "answer": 2,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 84 registros. De ellos, 34 cumplen la condición solicitada. Resultado: 40,48 %."
          }
        ]
      }
    ]
  }
];

// Casos ficticios. Proyectos docentes 2025/26 de Estadística I, códigos 1610015 y 2200022. Agrupación didáctica del juego: temas 1–5, 6–8 y 9–10.
window.FINANZAS = [
  {
    "id": "fin-b1",
    "nombre": "Bloque 1 · Descripción unidimensional y concentración",
    "apartados": [
      {
        "nombre": "Población observada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se revisan 4 lotes de 20 facturas. ¿Cuántas facturas se observan?",
            "options": [
              "80",
              "84",
              "88"
            ],
            "answer": 1,
            "hint": "Multiplica lotes por facturas de cada lote.",
            "explanation": "Multiplica lotes por facturas de cada lote. El resultado es 80."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se revisan 4 lotes de 30 facturas. ¿Cuántas facturas se observan?",
            "options": [
              "124",
              "120",
              "128"
            ],
            "answer": 2,
            "hint": "Multiplica lotes por facturas de cada lote.",
            "explanation": "Multiplica lotes por facturas de cada lote. El resultado es 120."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una auditora revisa cuatro carteras distintas. En cada cartera, una muestra de 20 facturas representa el 25 % de sus facturas. ¿Cuántas facturas reúnen las cuatro carteras?",
            "options": [
              "324",
              "320",
              "328"
            ],
            "answer": 2,
            "hint": "Cada lote representa cuatro veces su tamaño.",
            "explanation": "Cada cartera reúne 20 ÷ 0,25 = 80 facturas. Las cuatro reúnen 80 × 4 = 320 facturas."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una auditora revisa cuatro carteras distintas. En cada cartera, una muestra de 30 facturas representa el 25 % de sus facturas. ¿Cuántas facturas reúnen las cuatro carteras?",
            "options": [
              "484",
              "488",
              "480"
            ],
            "answer": 3,
            "hint": "Cada lote representa cuatro veces su tamaño.",
            "explanation": "Cada cartera reúne 30 ÷ 0,25 = 120 facturas. Las cuatro reúnen 120 × 4 = 480 facturas."
          }
        ]
      },
      {
        "nombre": "Cobertura",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 100 cuentas elegibles se revisan 20. ¿Qué porcentaje se revisa?",
            "options": [
              "16",
              "20",
              "12"
            ],
            "answer": 2,
            "hint": "Divide el número revisado entre el total.",
            "explanation": "Divide el número revisado entre el total. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 100 cuentas elegibles se revisan 30. ¿Qué porcentaje se revisa?",
            "options": [
              "26",
              "22",
              "30"
            ],
            "answer": 3,
            "hint": "Divide el número revisado entre el total.",
            "explanation": "Divide el número revisado entre el total. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De las 100 cuentas se revisaron 20. Si se detectan 5 duplicados entre las revisadas y el universo correcto es 95, ¿qué porcentaje se revisó realmente? Redondea a tres decimales.",
            "options": [
              "11,789",
              "7,789",
              "15,789"
            ],
            "answer": 3,
            "hint": "Resta los duplicados tanto del numerador como del denominador.",
            "explanation": "Resta los duplicados tanto del numerador como del denominador. El resultado es 15,789."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De las 100 cuentas se revisaron 30. Si se detectan 5 duplicados entre las revisadas y el universo correcto es 95, ¿qué porcentaje se revisó realmente? Redondea a tres decimales.",
            "options": [
              "26,316",
              "22,316",
              "18,316"
            ],
            "answer": 1,
            "hint": "Resta los duplicados tanto del numerador como del denominador.",
            "explanation": "Resta los duplicados tanto del numerador como del denominador. El resultado es 26,316."
          }
        ]
      },
      {
        "nombre": "Frecuencia absoluta",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En una caja hay 20 pagos digitales y 12 en efectivo. ¿Cuántos pagos hay?",
            "options": [
              "28",
              "36",
              "32"
            ],
            "answer": 3,
            "hint": "Suma frecuencias de categorías excluyentes.",
            "explanation": "Suma frecuencias de categorías excluyentes. El resultado es 32."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En una caja hay 30 pagos digitales y 12 en efectivo. ¿Cuántos pagos hay?",
            "options": [
              "42",
              "38",
              "46"
            ],
            "answer": 1,
            "hint": "Suma frecuencias de categorías excluyentes.",
            "explanation": "Suma frecuencias de categorías excluyentes. El resultado es 42."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 20 pagos digitales y 12 en efectivo, dos digitales se reclasifican como efectivo. ¿Qué porcentaje sigue siendo digital?",
            "options": [
              "56,25",
              "52,25",
              "60,25"
            ],
            "answer": 1,
            "hint": "La reclasificación preserva el total.",
            "explanation": "La reclasificación preserva el total. El resultado es 56,25."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 30 pagos digitales y 12 en efectivo, dos digitales se reclasifican como efectivo. ¿Qué porcentaje sigue siendo digital? Redondea a tres decimales.",
            "options": [
              "62,667",
              "66,667",
              "70,667"
            ],
            "answer": 2,
            "hint": "La reclasificación preserva el total.",
            "explanation": "La reclasificación preserva el total. El resultado es 66,667."
          }
        ]
      },
      {
        "nombre": "Frecuencia relativa",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "20 de 50 facturas están vencidas. ¿Qué porcentaje está vencido?",
            "options": [
              "40",
              "44",
              "48"
            ],
            "answer": 1,
            "hint": "Divide vencidas entre total y multiplica por cien.",
            "explanation": "Divide vencidas entre total y multiplica por cien. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "30 de 50 facturas están vencidas. ¿Qué porcentaje está vencido?",
            "options": [
              "64",
              "60",
              "68"
            ],
            "answer": 2,
            "hint": "Divide vencidas entre total y multiplica por cien.",
            "explanation": "Divide vencidas entre total y multiplica por cien. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Con 20 de 50 facturas vencidas entran otras diez, cinco vencidas. ¿Cuál es el nuevo porcentaje vencido? Redondea a tres decimales.",
            "options": [
              "45,667",
              "41,667",
              "49,667"
            ],
            "answer": 2,
            "hint": "Actualiza tanto el recuento vencido como el total.",
            "explanation": "Actualiza tanto el recuento vencido como el total. El resultado es 41,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Con 30 de 50 facturas vencidas entran otras diez, cinco vencidas. ¿Cuál es el nuevo porcentaje vencido? Redondea a tres decimales.",
            "options": [
              "62,333",
              "66,333",
              "58,333"
            ],
            "answer": 3,
            "hint": "Actualiza tanto el recuento vencido como el total.",
            "explanation": "Actualiza tanto el recuento vencido como el total. El resultado es 58,333."
          }
        ]
      },
      {
        "nombre": "Acumulación",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay 20 recibos menores de 50 €, 6 entre 50 y 99 € y 9 de 100 € o más. ¿Cuántos son menores de 100 €?",
            "options": [
              "22",
              "26",
              "18"
            ],
            "answer": 2,
            "hint": "Acumula las dos primeras clases.",
            "explanation": "Acumula las dos primeras clases. El resultado es 26."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay 30 recibos menores de 50 €, 6 entre 50 y 99 € y 9 de 100 € o más. ¿Cuántos son menores de 100 €?",
            "options": [
              "32",
              "28",
              "36"
            ],
            "answer": 3,
            "hint": "Acumula las dos primeras clases.",
            "explanation": "Acumula las dos primeras clases. El resultado es 36."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Con 20 recibos por debajo de 50 €, 6 entre 50 y 99 € y 9 de 100 € o más, ¿qué porcentaje alcanza 50 €? Redondea a tres decimales.",
            "options": [
              "38,857",
              "34,857",
              "42,857"
            ],
            "answer": 3,
            "hint": "Los recibos de al menos 50 € suman 15.",
            "explanation": "Los recibos de al menos 50 € suman 15. El resultado es 42,857."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Con 30 recibos por debajo de 50 €, 6 entre 50 y 99 € y 9 de 100 € o más, ¿qué porcentaje alcanza 50 €? Redondea a tres decimales.",
            "options": [
              "33,333",
              "29,333",
              "25,333"
            ],
            "answer": 1,
            "hint": "Los recibos de al menos 50 € suman 15.",
            "explanation": "Los recibos de al menos 50 € suman 15. El resultado es 33,333."
          }
        ]
      },
      {
        "nombre": "Intervalos",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los importes se agrupan en [20, 30) euros. ¿Cuál es la marca de clase?",
            "options": [
              "21",
              "29",
              "25"
            ],
            "answer": 3,
            "hint": "Promedia ambos límites.",
            "explanation": "Promedia ambos límites. El resultado es 25."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los importes se agrupan en [30, 40) euros. ¿Cuál es la marca de clase?",
            "options": [
              "35",
              "31",
              "39"
            ],
            "answer": 1,
            "hint": "Promedia ambos límites.",
            "explanation": "Promedia ambos límites. El resultado es 35."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En [20, 30) hay 8 tickets y en [30, 50) hay 4. Estima el importe medio por ticket usando marcas de clase.",
            "options": [
              "30",
              "26",
              "34"
            ],
            "answer": 1,
            "hint": "Pondera cada punto medio por su frecuencia.",
            "explanation": "Pondera cada punto medio por su frecuencia. El resultado es 30."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En [30, 40) hay 8 tickets y en [40, 60) hay 4. Estima el importe medio por ticket usando marcas de clase.",
            "options": [
              "36",
              "40",
              "44"
            ],
            "answer": 2,
            "hint": "Pondera cada punto medio por su frecuencia.",
            "explanation": "Pondera cada punto medio por su frecuencia. El resultado es 40."
          }
        ]
      },
      {
        "nombre": "Media",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Tres facturas ascienden a 20, 30 y 40 euros. ¿Cuál es la media?",
            "options": [
              "30",
              "34",
              "38"
            ],
            "answer": 1,
            "hint": "Divide la suma por tres.",
            "explanation": "Divide la suma por tres. El resultado es 30."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Tres facturas ascienden a 30, 40 y 50 euros. ¿Cuál es la media?",
            "options": [
              "44",
              "40",
              "48"
            ],
            "answer": 2,
            "hint": "Divide la suma por tres.",
            "explanation": "Divide la suma por tres. El resultado es 40."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Cuatro facturas promedian 30 euros. Una de 20 euros se anula. ¿Cuál es la nueva media? Redondea a tres decimales.",
            "options": [
              "37,333",
              "33,333",
              "41,333"
            ],
            "answer": 2,
            "hint": "Recupera el total inicial y retira la factura anulada.",
            "explanation": "Recupera el total inicial y retira la factura anulada. El resultado es 33,333."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Cuatro facturas promedian 40 euros. Una de 30 euros se anula. ¿Cuál es la nueva media? Redondea a tres decimales.",
            "options": [
              "47,333",
              "51,333",
              "43,333"
            ],
            "answer": 3,
            "hint": "Recupera el total inicial y retira la factura anulada.",
            "explanation": "Recupera el total inicial y retira la factura anulada. El resultado es 43,333."
          }
        ]
      },
      {
        "nombre": "Media ponderada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se compran 3 acciones a 20 € y 1 a 24 €. ¿Cuál es el precio medio?",
            "options": [
              "17",
              "21",
              "13"
            ],
            "answer": 2,
            "hint": "Pondera por número de acciones.",
            "explanation": "Pondera por número de acciones. El resultado es 21."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se compran 3 acciones a 30 € y 1 a 34 €. ¿Cuál es el precio medio?",
            "options": [
              "27",
              "23",
              "31"
            ],
            "answer": 3,
            "hint": "Pondera por número de acciones.",
            "explanation": "Pondera por número de acciones. El resultado es 31."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se compran 3 acciones a 20 € y una a 24 €. Se pagan además 8 € de comisiones. ¿Qué coste medio tiene cada acción?",
            "options": [
              "19",
              "15",
              "23"
            ],
            "answer": 3,
            "hint": "Añade las comisiones al total antes de dividir por cuatro.",
            "explanation": "Añade las comisiones al total antes de dividir por cuatro. El resultado es 23."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se compran 3 acciones a 30 € y una a 34 €. Se pagan además 8 € de comisiones. ¿Qué coste medio tiene cada acción?",
            "options": [
              "33",
              "29",
              "25"
            ],
            "answer": 1,
            "hint": "Añade las comisiones al total antes de dividir por cuatro.",
            "explanation": "Añade las comisiones al total antes de dividir por cuatro. El resultado es 33."
          }
        ]
      },
      {
        "nombre": "Mediana",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Las deudas ordenadas son 18, 20 y 29 euros. ¿Cuál es la mediana?",
            "options": [
              "16",
              "24",
              "20"
            ],
            "answer": 3,
            "hint": "Toma el dato central.",
            "explanation": "Toma el dato central. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Las deudas ordenadas son 28, 30 y 39 euros. ¿Cuál es la mediana?",
            "options": [
              "30",
              "26",
              "34"
            ],
            "answer": 1,
            "hint": "Toma el dato central.",
            "explanation": "Toma el dato central. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "A 18, 20 y 29 euros de deuda se añade una deuda de 21. ¿Cuál es la mediana del nuevo conjunto?",
            "options": [
              "20,5",
              "16,5",
              "24,5"
            ],
            "answer": 1,
            "hint": "Ordena los cuatro valores y promedia los dos centrales.",
            "explanation": "Ordena los cuatro valores y promedia los dos centrales. El resultado es 20,5."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "A 28, 30 y 39 euros de deuda se añade una deuda de 31. ¿Cuál es la mediana del nuevo conjunto?",
            "options": [
              "26,5",
              "30,5",
              "34,5"
            ],
            "answer": 2,
            "hint": "Ordena los cuatro valores y promedia los dos centrales.",
            "explanation": "Ordena los cuatro valores y promedia los dos centrales. El resultado es 30,5."
          }
        ]
      },
      {
        "nombre": "Moda",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un apunte de 20 € aparece tres veces y otro de 22 € aparece dos veces. ¿Qué importe es la moda?",
            "options": [
              "20",
              "24",
              "28"
            ],
            "answer": 1,
            "hint": "Identifica el importe más frecuente.",
            "explanation": "Identifica el importe más frecuente. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un apunte de 30 € aparece tres veces y otro de 32 € aparece dos veces. ¿Qué importe es la moda?",
            "options": [
              "34",
              "30",
              "38"
            ],
            "answer": 2,
            "hint": "Identifica el importe más frecuente.",
            "explanation": "Identifica el importe más frecuente. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Con tres apuntes de 20 € y dos de 22 €, se agregan cuatro de 22 €. ¿Cuántos apuntes del importe modal hay ahora?",
            "options": [
              "7",
              "6",
              "8"
            ],
            "answer": 2,
            "hint": "Primero actualiza las frecuencias y luego localiza la mayor.",
            "explanation": "Primero actualiza las frecuencias y luego localiza la mayor. El resultado es 6."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Con tres apuntes de 30 € y dos de 32 €, se agregan cuatro de 32 €. ¿Cuántos apuntes del importe modal hay ahora?",
            "options": [
              "7",
              "8",
              "6"
            ],
            "answer": 3,
            "hint": "Primero actualiza las frecuencias y luego localiza la mayor.",
            "explanation": "Primero actualiza las frecuencias y luego localiza la mayor. El resultado es 6."
          }
        ]
      },
      {
        "nombre": "Rango",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los saldos mínimo y máximo son 20 y 44 €. ¿Cuál es el rango?",
            "options": [
              "20",
              "24",
              "16"
            ],
            "answer": 2,
            "hint": "Resta el mínimo al máximo.",
            "explanation": "Resta el mínimo al máximo. El resultado es 24."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los saldos mínimo y máximo son 30 y 54 €. ¿Cuál es el rango?",
            "options": [
              "20",
              "16",
              "24"
            ],
            "answer": 3,
            "hint": "Resta el mínimo al máximo.",
            "explanation": "Resta el mínimo al máximo. El resultado es 24."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los saldos mínimo y máximo son 20 y 44 €. Se duplican todos los saldos y se añade un abono fijo de 5 €. ¿Cuál es el nuevo rango?",
            "options": [
              "44",
              "40",
              "48"
            ],
            "answer": 3,
            "hint": "Sumar la misma constante conserva el rango y duplicar lo multiplica por dos.",
            "explanation": "Sumar la misma constante conserva el rango y duplicar lo multiplica por dos. El resultado es 48."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los saldos mínimo y máximo son 30 y 54 €. Se duplican todos los saldos y se añade un abono fijo de 5 €. ¿Cuál es el nuevo rango?",
            "options": [
              "48",
              "44",
              "40"
            ],
            "answer": 1,
            "hint": "Sumar la misma constante conserva el rango y duplicar lo multiplica por dos.",
            "explanation": "Sumar la misma constante conserva el rango y duplicar lo multiplica por dos. El resultado es 48."
          }
        ]
      },
      {
        "nombre": "Varianza",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos comisiones equiprobables son 18 y 22 €. ¿Cuál es su varianza poblacional en euros cuadrados?",
            "options": [
              "3",
              "5",
              "4"
            ],
            "answer": 3,
            "hint": "Promedia las desviaciones cuadráticas respecto al centro.",
            "explanation": "Promedia las desviaciones cuadráticas respecto al centro. El resultado es 4."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos comisiones equiprobables son 28 y 32 €. ¿Cuál es su varianza poblacional en euros cuadrados?",
            "options": [
              "4",
              "3",
              "5"
            ],
            "answer": 1,
            "hint": "Promedia las desviaciones cuadráticas respecto al centro.",
            "explanation": "Promedia las desviaciones cuadráticas respecto al centro. El resultado es 4."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Las comisiones 18 y 22 € son equiprobables. Se aplica a cada una un recargo del 50 % y se suman 3 €. ¿Qué varianza poblacional resulta?",
            "options": [
              "9",
              "8",
              "10"
            ],
            "answer": 1,
            "hint": "La escala multiplica la varianza por el cuadrado de 1,5.",
            "explanation": "La escala multiplica la varianza por el cuadrado de 1,5. El resultado es 9."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Las comisiones 28 y 32 € son equiprobables. Se aplica a cada una un recargo del 50 % y se suman 3 €. ¿Qué varianza poblacional resulta?",
            "options": [
              "8",
              "9",
              "10"
            ],
            "answer": 2,
            "hint": "La escala multiplica la varianza por el cuadrado de 1,5.",
            "explanation": "La escala multiplica la varianza por el cuadrado de 1,5. El resultado es 9."
          }
        ]
      },
      {
        "nombre": "Desviación típica",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La varianza poblacional de gastos es 400 euros cuadrados. ¿Cuál es la desviación típica en euros?",
            "options": [
              "20",
              "24",
              "28"
            ],
            "answer": 1,
            "hint": "Extrae la raíz cuadrada.",
            "explanation": "Extrae la raíz cuadrada. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La varianza poblacional de gastos es 900 euros cuadrados. ¿Cuál es la desviación típica en euros?",
            "options": [
              "34",
              "30",
              "38"
            ],
            "answer": 2,
            "hint": "Extrae la raíz cuadrada.",
            "explanation": "Extrae la raíz cuadrada. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La varianza de los gastos es 400 euros cuadrados. Se reducen todos un 20 % y se suma un cargo fijo. ¿Qué desviación típica resulta?",
            "options": [
              "20",
              "16",
              "24"
            ],
            "answer": 2,
            "hint": "El cargo fijo no afecta a la dispersión y la reducción multiplica por 0,8.",
            "explanation": "El cargo fijo no afecta a la dispersión y la reducción multiplica por 0,8. El resultado es 16."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La varianza de los gastos es 900 euros cuadrados. Se reducen todos un 20 % y se suma un cargo fijo. ¿Qué desviación típica resulta?",
            "options": [
              "28",
              "32",
              "24"
            ],
            "answer": 3,
            "hint": "El cargo fijo no afecta a la dispersión y la reducción multiplica por 0,8.",
            "explanation": "El cargo fijo no afecta a la dispersión y la reducción multiplica por 0,8. El resultado es 24."
          }
        ]
      },
      {
        "nombre": "Variación relativa",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los costes tienen media 20 € y desviación típica 2 €. ¿Cuál es su coeficiente de variación en porcentaje?",
            "options": [
              "6",
              "10",
              "2"
            ],
            "answer": 2,
            "hint": "Divide desviación típica entre media.",
            "explanation": "Divide desviación típica entre media. El resultado es 10."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los costes tienen media 30 € y desviación típica 2 €. ¿Cuál es su coeficiente de variación en porcentaje? Redondea a tres decimales.",
            "options": [
              "5,667",
              "4,667",
              "6,667"
            ],
            "answer": 3,
            "hint": "Divide desviación típica entre media.",
            "explanation": "Divide desviación típica entre media. El resultado es 6,667."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los costes tienen media 20 € y desviación típica 2 €. Tras añadir 5 € fijos por operación, ¿qué coeficiente de variación porcentual resulta?",
            "options": [
              "7",
              "6",
              "8"
            ],
            "answer": 3,
            "hint": "La suma fija cambia la media pero conserva la desviación.",
            "explanation": "La suma fija cambia la media pero conserva la desviación. El resultado es 8."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los costes tienen media 30 € y desviación típica 2 €. Tras añadir 5 € fijos por operación, ¿qué coeficiente de variación porcentual resulta? Redondea a tres decimales.",
            "options": [
              "5,714",
              "4,714",
              "3,714"
            ],
            "answer": 1,
            "hint": "La suma fija cambia la media pero conserva la desviación.",
            "explanation": "La suma fija cambia la media pero conserva la desviación. El resultado es 5,714."
          }
        ]
      },
      {
        "nombre": "Asimetría",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los gastos presentan media 22, mediana 20 y desviación típica 3. Calcula el segundo coeficiente de Pearson.",
            "options": [
              "1",
              "3",
              "2"
            ],
            "answer": 3,
            "hint": "Aplica tres veces la diferencia media menos mediana dividida por la desviación.",
            "explanation": "Aplica tres veces la diferencia media menos mediana dividida por la desviación. El resultado es 2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los gastos presentan media 32, mediana 30 y desviación típica 3. Calcula el segundo coeficiente de Pearson.",
            "options": [
              "2",
              "1",
              "3"
            ],
            "answer": 1,
            "hint": "Aplica tres veces la diferencia media menos mediana dividida por la desviación.",
            "explanation": "Aplica tres veces la diferencia media menos mediana dividida por la desviación. El resultado es 2."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una serie tiene media 22, mediana 20 y desviación típica 3. Al multiplicar cada gasto por −2 para expresarlo como flujo negativo, ¿cuál es el segundo coeficiente de Pearson?",
            "options": [
              "-2",
              "-3",
              "-1"
            ],
            "answer": 1,
            "hint": "Reflejar la escala invierte el signo del coeficiente.",
            "explanation": "Reflejar la escala invierte el signo del coeficiente. El resultado es -2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una serie tiene media 32, mediana 30 y desviación típica 3. Al multiplicar cada gasto por −2 para expresarlo como flujo negativo, ¿cuál es el segundo coeficiente de Pearson?",
            "options": [
              "-3",
              "-2",
              "-1"
            ],
            "answer": 2,
            "hint": "Reflejar la escala invierte el signo del coeficiente.",
            "explanation": "Reflejar la escala invierte el signo del coeficiente. El resultado es -2."
          }
        ]
      },
      {
        "nombre": "Concentración",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos socios aportan 20 y 60 euros. ¿Qué porcentaje del capital aporta el menor?",
            "options": [
              "25",
              "29",
              "33"
            ],
            "answer": 1,
            "hint": "Divide la aportación menor entre el capital total.",
            "explanation": "Divide la aportación menor entre el capital total. El resultado es 25."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos socios aportan 30 y 90 euros. ¿Qué porcentaje del capital aporta el menor?",
            "options": [
              "29",
              "25",
              "33"
            ],
            "answer": 2,
            "hint": "Divide la aportación menor entre el capital total.",
            "explanation": "Divide la aportación menor entre el capital total. El resultado es 25."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos socios aportan 20 y 60 euros. El mayor transfiere 20 euros de su participación al menor. ¿Qué porcentaje del capital tiene ahora el menor original?",
            "options": [
              "54",
              "50",
              "58"
            ],
            "answer": 2,
            "hint": "La transferencia conserva el total de 80 y deja 40 en cada participación.",
            "explanation": "La transferencia conserva el total de 80 y deja 40 en cada participación. El resultado es 50."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos socios aportan 30 y 90 euros. El mayor transfiere 30 euros de su participación al menor. ¿Qué porcentaje del capital tiene ahora el menor original?",
            "options": [
              "54",
              "58",
              "50"
            ],
            "answer": 3,
            "hint": "La transferencia conserva el total de 120 y deja 60 en cada participación.",
            "explanation": "La transferencia conserva el total de 120 y deja 60 en cada participación. El resultado es 50."
          }
        ]
      },
      {
        "nombre": "Curva de Lorenz",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El 40 % de clientes con menor saldo posee 20 % del saldo total. ¿Qué porcentaje posee el resto?",
            "options": [
              "76",
              "80",
              "72"
            ],
            "answer": 2,
            "hint": "Las cuotas patrimoniales suman cien.",
            "explanation": "Las cuotas patrimoniales suman cien. El resultado es 80."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El 40 % de clientes con menor saldo posee 30 % del saldo total. ¿Qué porcentaje posee el resto?",
            "options": [
              "66",
              "62",
              "70"
            ],
            "answer": 3,
            "hint": "Las cuotas patrimoniales suman cien.",
            "explanation": "Las cuotas patrimoniales suman cien. El resultado es 70."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El 40 % de clientes con menor saldo posee 20 % del total y el 70 % con menor saldo posee 55 %. ¿Qué porcentaje corresponde al tramo entre ambos percentiles?",
            "options": [
              "31",
              "27",
              "35"
            ],
            "answer": 3,
            "hint": "Resta las cuotas acumuladas de Lorenz.",
            "explanation": "Resta las cuotas acumuladas de Lorenz. El resultado es 35."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El 40 % de clientes con menor saldo posee 30 % del total y el 70 % con menor saldo posee 55 %. ¿Qué porcentaje corresponde al tramo entre ambos percentiles?",
            "options": [
              "25",
              "21",
              "17"
            ],
            "answer": 1,
            "hint": "Resta las cuotas acumuladas de Lorenz.",
            "explanation": "Resta las cuotas acumuladas de Lorenz. El resultado es 25."
          }
        ]
      },
      {
        "nombre": "Índice de Gini",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La superficie entre la diagonal de igualdad y Lorenz es 0,2, en ejes de cero a uno. ¿Cuál es el Gini?",
            "options": [
              "0,3",
              "0,5",
              "0,4"
            ],
            "answer": 3,
            "hint": "Divide esa superficie entre el área del triángulo de referencia, 0,5.",
            "explanation": "Divide esa superficie entre el área del triángulo de referencia, 0,5. El resultado es 0,4."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La superficie entre la diagonal de igualdad y Lorenz es 0,3, en ejes de cero a uno. ¿Cuál es el Gini?",
            "options": [
              "0,6",
              "0,5",
              "0,7"
            ],
            "answer": 1,
            "hint": "Divide esa superficie entre el área del triángulo de referencia, 0,5.",
            "explanation": "Divide esa superficie entre el área del triángulo de referencia, 0,5. El resultado es 0,6."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El área bajo la curva de Lorenz es 0,2 en ejes de cero a uno. ¿Cuál es el índice de Gini?",
            "options": [
              "0,6",
              "0,5",
              "0,7"
            ],
            "answer": 1,
            "hint": "Resta dos veces el área bajo Lorenz a uno.",
            "explanation": "Resta dos veces el área bajo Lorenz a uno. El resultado es 0,6."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El área bajo la curva de Lorenz es 0,3 en ejes de cero a uno. ¿Cuál es el índice de Gini?",
            "options": [
              "0,3",
              "0,4",
              "0,5"
            ],
            "answer": 2,
            "hint": "Resta dos veces el área bajo Lorenz a uno.",
            "explanation": "Resta dos veces el área bajo Lorenz a uno. El resultado es 0,4."
          }
        ]
      }
    ]
  },
  {
    "id": "fin-b2",
    "nombre": "Bloque 2 · Análisis bidimensional, correlación y regresión",
    "apartados": [
      {
        "nombre": "Tabla conjunta",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay 20 facturas digitales pagadas y 10 digitales pendientes. ¿Cuántas facturas digitales hay?",
            "options": [
              "34",
              "30",
              "38"
            ],
            "answer": 2,
            "hint": "Suma ambas celdas de la fila digital.",
            "explanation": "Suma ambas celdas de la fila digital. El resultado es 30."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay 30 facturas digitales pagadas y 10 digitales pendientes. ¿Cuántas facturas digitales hay?",
            "options": [
              "44",
              "48",
              "40"
            ],
            "answer": 3,
            "hint": "Suma ambas celdas de la fila digital.",
            "explanation": "Suma ambas celdas de la fila digital. El resultado es 40."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay 20 facturas digitales pagadas y 10 digitales pendientes. Se pagan 4 pendientes. ¿Qué porcentaje de las digitales está ahora pagado?",
            "options": [
              "84",
              "88",
              "80"
            ],
            "answer": 3,
            "hint": "Cambian las celdas de pago pero se mantiene el total de la fila.",
            "explanation": "Cambian las celdas de pago pero se mantiene el total de la fila. El resultado es 80."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay 30 facturas digitales pagadas y 10 digitales pendientes. Se pagan 4 pendientes. ¿Qué porcentaje de las digitales está ahora pagado?",
            "options": [
              "85",
              "89",
              "93"
            ],
            "answer": 1,
            "hint": "Cambian las celdas de pago pero se mantiene el total de la fila.",
            "explanation": "Cambian las celdas de pago pero se mantiene el total de la fila. El resultado es 85."
          }
        ]
      },
      {
        "nombre": "Marginal de columna",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En dos oficinas se registran 20 y 15 transferencias inmediatas. ¿Cuántas inmediatas se registran en total?",
            "options": [
              "31",
              "27",
              "35"
            ],
            "answer": 3,
            "hint": "Suma la columna de ambas oficinas.",
            "explanation": "Suma la columna de ambas oficinas. El resultado es 35."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En dos oficinas se registran 30 y 15 transferencias inmediatas. ¿Cuántas inmediatas se registran en total?",
            "options": [
              "45",
              "41",
              "37"
            ],
            "answer": 1,
            "hint": "Suma la columna de ambas oficinas.",
            "explanation": "Suma la columna de ambas oficinas. El resultado es 45."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 20 y 15 transferencias inmediatas en dos oficinas, 3 de la primera se reasignan a la segunda. ¿Qué porcentaje de inmediatas corresponde ahora a la segunda? Redondea a tres decimales.",
            "options": [
              "51,429",
              "47,429",
              "43,429"
            ],
            "answer": 1,
            "hint": "La columna sigue teniendo el mismo total y la segunda aporta dieciocho.",
            "explanation": "La columna sigue teniendo el mismo total y la segunda aporta dieciocho. El resultado es 51,429."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 30 y 15 transferencias inmediatas en dos oficinas, 3 de la primera se reasignan a la segunda. ¿Qué porcentaje de inmediatas corresponde ahora a la segunda?",
            "options": [
              "36",
              "40",
              "32"
            ],
            "answer": 2,
            "hint": "La columna sigue teniendo el mismo total y la segunda aporta dieciocho.",
            "explanation": "La columna sigue teniendo el mismo total y la segunda aporta dieciocho. El resultado es 40."
          }
        ]
      },
      {
        "nombre": "Frecuencia conjunta",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 100 préstamos, 20 son a tipo fijo y están al corriente. ¿Cuál es su frecuencia conjunta porcentual?",
            "options": [
              "20",
              "16",
              "24"
            ],
            "answer": 1,
            "hint": "Usa todo el conjunto como denominador.",
            "explanation": "Usa todo el conjunto como denominador. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 100 préstamos, 30 son a tipo fijo y están al corriente. ¿Cuál es su frecuencia conjunta porcentual?",
            "options": [
              "26",
              "30",
              "34"
            ],
            "answer": 2,
            "hint": "Usa todo el conjunto como denominador.",
            "explanation": "Usa todo el conjunto como denominador. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre 200 préstamos, 40 son fijos al corriente y 20 son fijos morosos. ¿Qué porcentaje de los fijos está al corriente? Redondea a tres decimales.",
            "options": [
              "62,667",
              "66,667",
              "70,667"
            ],
            "answer": 2,
            "hint": "Condiciona en los préstamos fijos.",
            "explanation": "Condiciona en los préstamos fijos. El resultado es 66,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre 200 préstamos, 60 son fijos al corriente y 20 son fijos morosos. ¿Qué porcentaje de los fijos está al corriente?",
            "options": [
              "71",
              "79",
              "75"
            ],
            "answer": 3,
            "hint": "Condiciona en los préstamos fijos.",
            "explanation": "Condiciona en los préstamos fijos. El resultado es 75."
          }
        ]
      },
      {
        "nombre": "Distribución condicionada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre 50 clientes de empresa, 20 usan confirming. ¿Qué porcentaje lo usa?",
            "options": [
              "44",
              "40",
              "48"
            ],
            "answer": 2,
            "hint": "Selecciona exclusivamente los clientes de empresa.",
            "explanation": "Selecciona exclusivamente los clientes de empresa. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre 50 clientes de empresa, 30 usan confirming. ¿Qué porcentaje lo usa?",
            "options": [
              "64",
              "68",
              "60"
            ],
            "answer": 3,
            "hint": "Selecciona exclusivamente los clientes de empresa.",
            "explanation": "Selecciona exclusivamente los clientes de empresa. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre 50 clientes de empresa, 20 usan confirming. Entran diez clientes de empresa, dos usuarios. ¿Qué porcentaje lo usa ahora? Redondea a tres decimales.",
            "options": [
              "40,667",
              "44,667",
              "36,667"
            ],
            "answer": 3,
            "hint": "Recalcula base y usuarios dentro del grupo.",
            "explanation": "Recalcula base y usuarios dentro del grupo. El resultado es 36,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre 50 clientes de empresa, 30 usan confirming. Entran diez clientes de empresa, dos usuarios. ¿Qué porcentaje lo usa ahora? Redondea a tres decimales.",
            "options": [
              "53,333",
              "57,333",
              "61,333"
            ],
            "answer": 1,
            "hint": "Recalcula base y usuarios dentro del grupo.",
            "explanation": "Recalcula base y usuarios dentro del grupo. El resultado es 53,333."
          }
        ]
      },
      {
        "nombre": "Media condicionada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre empresas pequeñas hay importes 20 y 26 €. ¿Qué media tiene ese grupo?",
            "options": [
              "19",
              "15",
              "23"
            ],
            "answer": 3,
            "hint": "Promedia solo los datos del grupo indicado.",
            "explanation": "Promedia solo los datos del grupo indicado. El resultado es 23."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre empresas pequeñas hay importes 30 y 36 €. ¿Qué media tiene ese grupo?",
            "options": [
              "33",
              "29",
              "25"
            ],
            "answer": 1,
            "hint": "Promedia solo los datos del grupo indicado.",
            "explanation": "Promedia solo los datos del grupo indicado. El resultado es 33."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay dos empresas pequeñas con media 23 € y seis grandes con media 27 €. ¿Cuál es la media global?",
            "options": [
              "26",
              "22",
              "18"
            ],
            "answer": 1,
            "hint": "Pondera las medias condicionadas por los tamaños de grupo.",
            "explanation": "Pondera las medias condicionadas por los tamaños de grupo. El resultado es 26."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay dos empresas pequeñas con media 33 € y seis grandes con media 37 €. ¿Cuál es la media global?",
            "options": [
              "32",
              "36",
              "28"
            ],
            "answer": 2,
            "hint": "Pondera las medias condicionadas por los tamaños de grupo.",
            "explanation": "Pondera las medias condicionadas por los tamaños de grupo. El resultado es 36."
          }
        ]
      },
      {
        "nombre": "Independencia",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 100 pagos, 50 son digitales y 40 son aplazados. Bajo independencia, ¿cuántos serían digitales y aplazados?",
            "options": [
              "20",
              "16",
              "24"
            ],
            "answer": 1,
            "hint": "Multiplica las marginales y divide entre cien.",
            "explanation": "Multiplica las marginales y divide entre cien. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 100 pagos, 50 son digitales y 60 son aplazados. Bajo independencia, ¿cuántos serían digitales y aplazados?",
            "options": [
              "26",
              "30",
              "34"
            ],
            "answer": 2,
            "hint": "Multiplica las marginales y divide entre cien.",
            "explanation": "Multiplica las marginales y divide entre cien. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 100 pagos, 50 son digitales y 40 son aplazados. Si se observan 24 digitales y aplazados, ¿qué exceso porcentual hay respecto al recuento esperado por independencia?",
            "options": [
              "16",
              "20",
              "24"
            ],
            "answer": 2,
            "hint": "Compara el exceso de cuatro con la frecuencia esperada.",
            "explanation": "Compara el exceso de cuatro con la frecuencia esperada. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 100 pagos, 50 son digitales y 60 son aplazados. Si se observan 34 digitales y aplazados, ¿qué exceso porcentual hay respecto al recuento esperado por independencia? Redondea a tres decimales.",
            "options": [
              "9,333",
              "17,333",
              "13,333"
            ],
            "answer": 3,
            "hint": "Compara el exceso de cuatro con la frecuencia esperada.",
            "explanation": "Compara el exceso de cuatro con la frecuencia esperada. El resultado es 13,333."
          }
        ]
      },
      {
        "nombre": "Producto cruzado",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En un comercio se observan ventas 20 y coste 5, ambos en miles de euros. ¿Cuál es el producto de las ventas por el coste de esta observación?",
            "options": [
              "104",
              "100",
              "108"
            ],
            "answer": 2,
            "hint": "Multiplica las dos coordenadas de la observación.",
            "explanation": "Multiplica las dos coordenadas de la observación. El resultado es 100."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En un comercio se observan ventas 30 y coste 5, ambos en miles de euros. ¿Cuál es el producto de las ventas por el coste de esta observación?",
            "options": [
              "154",
              "158",
              "150"
            ],
            "answer": 3,
            "hint": "Multiplica las dos coordenadas de la observación.",
            "explanation": "Multiplica las dos coordenadas de la observación. El resultado es 150."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos comercios tienen parejas (20,5) y (24,7), en miles de euros. ¿Cuál es la media de los productos cruzados?",
            "options": [
              "138",
              "142",
              "134"
            ],
            "answer": 3,
            "hint": "Calcula el producto dentro de cada pareja y después promedia.",
            "explanation": "Calcula el producto dentro de cada pareja y después promedia. El resultado es 134."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos comercios tienen parejas (30,5) y (34,7), en miles de euros. ¿Cuál es la media de los productos cruzados?",
            "options": [
              "194",
              "198",
              "202"
            ],
            "answer": 1,
            "hint": "Calcula el producto dentro de cada pareja y después promedia.",
            "explanation": "Calcula el producto dentro de cada pareja y después promedia. El resultado es 194."
          }
        ]
      },
      {
        "nombre": "Covarianza",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En una cartera, E(UV)=32 y E(U)E(V)=20. ¿Cuál es la covarianza?",
            "options": [
              "8",
              "4",
              "12"
            ],
            "answer": 3,
            "hint": "Resta el producto de medias a la media de productos.",
            "explanation": "Resta el producto de medias a la media de productos. El resultado es 12."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En una cartera, E(UV)=42 y E(U)E(V)=30. ¿Cuál es la covarianza?",
            "options": [
              "12",
              "8",
              "4"
            ],
            "answer": 1,
            "hint": "Resta el producto de medias a la media de productos.",
            "explanation": "Resta el producto de medias a la media de productos. El resultado es 12."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La covarianza de dos rendimientos es 20 en sus unidades originales. Se duplica el primero y cambia de signo el segundo. ¿Cuál es la nueva covarianza?",
            "options": [
              "-40",
              "-44",
              "-48"
            ],
            "answer": 1,
            "hint": "Multiplica por los dos factores de escala.",
            "explanation": "Multiplica por los dos factores de escala. El resultado es -40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La covarianza de dos rendimientos es 30 en sus unidades originales. Se duplica el primero y cambia de signo el segundo. ¿Cuál es la nueva covarianza?",
            "options": [
              "-64",
              "-60",
              "-68"
            ],
            "answer": 2,
            "hint": "Multiplica por los dos factores de escala.",
            "explanation": "Multiplica por los dos factores de escala. El resultado es -60."
          }
        ]
      },
      {
        "nombre": "Correlación",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Las desviaciones típicas de dos costes son 20 y 2. Su covarianza es 20. ¿Cuál es la correlación?",
            "options": [
              "0,5",
              "0,4",
              "0,6"
            ],
            "answer": 1,
            "hint": "Divide la covarianza por el producto de las desviaciones.",
            "explanation": "Divide la covarianza por el producto de las desviaciones. El resultado es 0,5."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Las desviaciones típicas de dos costes son 30 y 2. Su covarianza es 30. ¿Cuál es la correlación?",
            "options": [
              "0,4",
              "0,5",
              "0,6"
            ],
            "answer": 2,
            "hint": "Divide la covarianza por el producto de las desviaciones.",
            "explanation": "Divide la covarianza por el producto de las desviaciones. El resultado es 0,5."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos costes tienen desviaciones 20 y 2 y covarianza 20. Expresa uno en céntimos y el otro como ahorro con signo invertido. ¿Qué correlación resulta?",
            "options": [
              "-0,6",
              "-0,5",
              "-0,4"
            ],
            "answer": 2,
            "hint": "Una conversión positiva preserva la correlación y un cambio de signo la invierte.",
            "explanation": "Una conversión positiva preserva la correlación y un cambio de signo la invierte. El resultado es -0,5."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos costes tienen desviaciones 30 y 2 y covarianza 30. Expresa uno en céntimos y el otro como ahorro con signo invertido. ¿Qué correlación resulta?",
            "options": [
              "-0,6",
              "-0,4",
              "-0,5"
            ],
            "answer": 3,
            "hint": "Una conversión positiva preserva la correlación y un cambio de signo la invierte.",
            "explanation": "Una conversión positiva preserva la correlación y un cambio de signo la invierte. El resultado es -0,5."
          }
        ]
      },
      {
        "nombre": "Determinación",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En regresión lineal simple con constante, r=0,2. ¿Qué porcentaje de variabilidad explica la recta?",
            "options": [
              "5",
              "4",
              "6"
            ],
            "answer": 2,
            "hint": "Eleva r al cuadrado y multiplica por cien.",
            "explanation": "Eleva r al cuadrado y multiplica por cien. El resultado es 4."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En regresión lineal simple con constante, r=0,3. ¿Qué porcentaje de variabilidad explica la recta?",
            "options": [
              "10",
              "11",
              "9"
            ],
            "answer": 3,
            "hint": "Eleva r al cuadrado y multiplica por cien.",
            "explanation": "Eleva r al cuadrado y multiplica por cien. El resultado es 9."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Con r=−0,2 en regresión simple con constante, ¿qué porcentaje de variabilidad queda sin explicar?",
            "options": [
              "100",
              "104",
              "96"
            ],
            "answer": 3,
            "hint": "Usa el complemento de r al cuadrado.",
            "explanation": "Usa el complemento de r al cuadrado. El resultado es 96."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Con r=−0,3 en regresión simple con constante, ¿qué porcentaje de variabilidad queda sin explicar?",
            "options": [
              "91",
              "95",
              "99"
            ],
            "answer": 1,
            "hint": "Usa el complemento de r al cuadrado.",
            "explanation": "Usa el complemento de r al cuadrado. El resultado es 91."
          }
        ]
      },
      {
        "nombre": "Pendiente",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La covarianza entre ventas y coste es 40 y la varianza de ventas es 20. ¿Cuál es la pendiente del coste sobre ventas?",
            "options": [
              "1",
              "0",
              "2"
            ],
            "answer": 3,
            "hint": "Divide covarianza entre varianza de la explicativa.",
            "explanation": "Divide covarianza entre varianza de la explicativa. El resultado es 2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La covarianza entre ventas y coste es 60 y la varianza de ventas es 30. ¿Cuál es la pendiente del coste sobre ventas?",
            "options": [
              "2",
              "1",
              "0"
            ],
            "answer": 1,
            "hint": "Divide covarianza entre varianza de la explicativa.",
            "explanation": "Divide covarianza entre varianza de la explicativa. El resultado es 2."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La covarianza de coste y ventas es 40 y la varianza de ventas 20. En el ajuste lineal simple del coste sobre las ventas, si aumentan las ventas 7 unidades, ¿cuánto cambia el coste predicho?",
            "options": [
              "14",
              "10",
              "6"
            ],
            "answer": 1,
            "hint": "Calcula primero la pendiente y multiplícala por el cambio en ventas.",
            "explanation": "Calcula primero la pendiente y multiplícala por el cambio en ventas. El resultado es 14."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La covarianza de coste y ventas es 60 y la varianza de ventas 30. En el ajuste lineal simple del coste sobre las ventas, si aumentan las ventas 7 unidades, ¿cuánto cambia el coste predicho?",
            "options": [
              "10",
              "14",
              "6"
            ],
            "answer": 2,
            "hint": "Calcula primero la pendiente y multiplícala por el cambio en ventas.",
            "explanation": "Calcula primero la pendiente y multiplícala por el cambio en ventas. El resultado es 14."
          }
        ]
      },
      {
        "nombre": "Intercepto",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Para explicar gasto usando ingresos, la pendiente es 2 y las medias son 20 de ingresos y 60 de gasto. ¿Cuál es la constante?",
            "options": [
              "20",
              "16",
              "24"
            ],
            "answer": 1,
            "hint": "La recta pasa por el punto formado por las medias.",
            "explanation": "La recta pasa por el punto formado por las medias. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Para explicar gasto usando ingresos, la pendiente es 2 y las medias son 30 de ingresos y 90 de gasto. ¿Cuál es la constante?",
            "options": [
              "26",
              "30",
              "34"
            ],
            "answer": 2,
            "hint": "La recta pasa por el punto formado por las medias.",
            "explanation": "La recta pasa por el punto formado por las medias. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En un ajuste de pendiente 2 y medias 20 de ingresos y 60 de gasto, se centra la variable ingresos restándole 20. ¿Cuál es el nuevo intercepto?",
            "options": [
              "56",
              "60",
              "64"
            ],
            "answer": 2,
            "hint": "En la escala centrada, cero corresponde al ingreso medio.",
            "explanation": "En la escala centrada, cero corresponde al ingreso medio. El resultado es 60."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En un ajuste de pendiente 2 y medias 30 de ingresos y 90 de gasto, se centra la variable ingresos restándole 30. ¿Cuál es el nuevo intercepto?",
            "options": [
              "86",
              "94",
              "90"
            ],
            "answer": 3,
            "hint": "En la escala centrada, cero corresponde al ingreso medio.",
            "explanation": "En la escala centrada, cero corresponde al ingreso medio. El resultado es 90."
          }
        ]
      },
      {
        "nombre": "Predicción",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El coste estimado en miles es 5+2u, con u pedidos. ¿Qué estima para 20 pedidos?",
            "options": [
              "49",
              "45",
              "53"
            ],
            "answer": 2,
            "hint": "Sustituye el número de pedidos en la recta.",
            "explanation": "Sustituye el número de pedidos en la recta. El resultado es 45."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El coste estimado en miles es 5+2u, con u pedidos. ¿Qué estima para 30 pedidos?",
            "options": [
              "69",
              "73",
              "65"
            ],
            "answer": 3,
            "hint": "Sustituye el número de pedidos en la recta.",
            "explanation": "Sustituye el número de pedidos en la recta. El resultado es 65."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El coste estimado en miles es 5+2u, con u pedidos. Para 20 pedidos el ingreso es 60 miles. ¿Qué margen estima el modelo?",
            "options": [
              "19",
              "23",
              "15"
            ],
            "answer": 3,
            "hint": "Resta el coste predicho al ingreso.",
            "explanation": "Resta el coste predicho al ingreso. El resultado es 15."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El coste estimado en miles es 5+2u, con u pedidos. Para 30 pedidos el ingreso es 90 miles. ¿Qué margen estima el modelo?",
            "options": [
              "25",
              "29",
              "33"
            ],
            "answer": 1,
            "hint": "Resta el coste predicho al ingreso.",
            "explanation": "Resta el coste predicho al ingreso. El resultado es 25."
          }
        ]
      },
      {
        "nombre": "Residuo",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Para una operación se observa coste 23 y se predice 20. ¿Cuál es el residuo observado menos predicho?",
            "options": [
              "2",
              "1",
              "3"
            ],
            "answer": 3,
            "hint": "Resta predicción al valor observado.",
            "explanation": "Resta predicción al valor observado. El resultado es 3."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Para una operación se observa coste 33 y se predice 30. ¿Cuál es el residuo observado menos predicho?",
            "options": [
              "3",
              "2",
              "1"
            ],
            "answer": 1,
            "hint": "Resta predicción al valor observado.",
            "explanation": "Resta predicción al valor observado. El resultado es 3."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una recta predice coste 4+2u. Para u=20 se observa coste 40. ¿Cuál es el residuo al cuadrado?",
            "options": [
              "16",
              "12",
              "8"
            ],
            "answer": 1,
            "hint": "Calcula el residuo antes de elevarlo al cuadrado.",
            "explanation": "Calcula el residuo antes de elevarlo al cuadrado. El resultado es 16."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una recta predice coste 4+2u. Para u=30 se observa coste 60. ¿Cuál es el residuo al cuadrado?",
            "options": [
              "12",
              "16",
              "8"
            ],
            "answer": 2,
            "hint": "Calcula el residuo antes de elevarlo al cuadrado.",
            "explanation": "Calcula el residuo antes de elevarlo al cuadrado. El resultado es 16."
          }
        ]
      },
      {
        "nombre": "Sumas de cuadrados",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La suma total de cuadrados es 80 y la residual 20 en un ajuste con constante. ¿Cuál es la explicada?",
            "options": [
              "60",
              "56",
              "64"
            ],
            "answer": 1,
            "hint": "Resta residual a total.",
            "explanation": "Resta residual a total. El resultado es 60."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La suma total de cuadrados es 120 y la residual 30 en un ajuste con constante. ¿Cuál es la explicada?",
            "options": [
              "86",
              "90",
              "94"
            ],
            "answer": 2,
            "hint": "Resta residual a total.",
            "explanation": "Resta residual a total. El resultado es 90."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En un ajuste con constante, la suma explicada es 60 y la residual 20. ¿Qué porcentaje representa la variabilidad residual sobre la total?",
            "options": [
              "21",
              "25",
              "29"
            ],
            "answer": 2,
            "hint": "Reconstruye la total como suma de explicada y residual.",
            "explanation": "Reconstruye la total como suma de explicada y residual. El resultado es 25."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En un ajuste con constante, la suma explicada es 90 y la residual 30. ¿Qué porcentaje representa la variabilidad residual sobre la total?",
            "options": [
              "21",
              "29",
              "25"
            ],
            "answer": 3,
            "hint": "Reconstruye la total como suma de explicada y residual.",
            "explanation": "Reconstruye la total como suma de explicada y residual. El resultado es 25."
          }
        ]
      },
      {
        "nombre": "Error cuadrático",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos errores de previsión de tesorería son +20 y −20 euros. ¿Cuál es el error cuadrático medio en euros cuadrados?",
            "options": [
              "404",
              "400",
              "408"
            ],
            "answer": 2,
            "hint": "Promedia los cuadrados de ambos errores.",
            "explanation": "Promedia los cuadrados de ambos errores. El resultado es 400."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos errores de previsión de tesorería son +30 y −30 euros. ¿Cuál es el error cuadrático medio en euros cuadrados?",
            "options": [
              "904",
              "908",
              "900"
            ],
            "answer": 3,
            "hint": "Promedia los cuadrados de ambos errores.",
            "explanation": "Promedia los cuadrados de ambos errores. El resultado es 900."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Tres errores de previsión son −20, 0 y 20 euros. ¿Cuál es la raíz del error cuadrático medio en euros? Redondea a tres decimales.",
            "options": [
              "20,33",
              "24,33",
              "16,33"
            ],
            "answer": 3,
            "hint": "Promedia los cuadrados de los tres residuos y extrae la raíz.",
            "explanation": "Promedia los cuadrados de los tres residuos y extrae la raíz. El resultado es 16,33."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Tres errores de previsión son −30, 0 y 30 euros. ¿Cuál es la raíz del error cuadrático medio en euros? Redondea a tres decimales.",
            "options": [
              "24,495",
              "28,495",
              "32,495"
            ],
            "answer": 1,
            "hint": "Promedia los cuadrados de los tres residuos y extrae la raíz.",
            "explanation": "Promedia los cuadrados de los tres residuos y extrae la raíz. El resultado es 24,495."
          }
        ]
      },
      {
        "nombre": "Recta inversa",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La covarianza entre deuda e ingreso es 20 y la varianza del ingreso es 80. ¿Cuál es la pendiente de deuda sobre ingreso?",
            "options": [
              "0,15",
              "0,05",
              "0,25"
            ],
            "answer": 3,
            "hint": "Usa como denominador la varianza del predictor.",
            "explanation": "Usa como denominador la varianza del predictor. El resultado es 0,25."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La covarianza entre deuda e ingreso es 30 y la varianza del ingreso es 120. ¿Cuál es la pendiente de deuda sobre ingreso?",
            "options": [
              "0,25",
              "0,15",
              "0,05"
            ],
            "answer": 1,
            "hint": "Usa como denominador la varianza del predictor.",
            "explanation": "Usa como denominador la varianza del predictor. El resultado es 0,25."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La pendiente de deuda sobre ingreso es 0,25 y la de ingreso sobre deuda es 1. En regresiones simples con constante, ¿cuál es la correlación?",
            "options": [
              "0,5",
              "0,4",
              "0,3"
            ],
            "answer": 1,
            "hint": "El producto de pendientes es r² y ambas pendientes son positivas.",
            "explanation": "El producto de pendientes es r² y ambas pendientes son positivas. El resultado es 0,5."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La pendiente de deuda sobre ingreso es 0,25 y la de ingreso sobre deuda es 1. En regresiones simples con constante, ¿cuál es la correlación?",
            "options": [
              "0,4",
              "0,5",
              "0,3"
            ],
            "answer": 2,
            "hint": "El producto de pendientes es r² y ambas pendientes son positivas.",
            "explanation": "El producto de pendientes es r² y ambas pendientes son positivas. El resultado es 0,5."
          }
        ]
      },
      {
        "nombre": "Cambio de escala",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La pendiente de costes en euros sobre pedidos es 20. Si el coste se expresa en céntimos, ¿cuál es la pendiente?",
            "options": [
              "2000",
              "1996",
              "2004"
            ],
            "answer": 1,
            "hint": "La variable dependiente se multiplica por cien.",
            "explanation": "La variable dependiente se multiplica por cien. El resultado es 2000."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La pendiente de costes en euros sobre pedidos es 30. Si el coste se expresa en céntimos, ¿cuál es la pendiente?",
            "options": [
              "2996",
              "3000",
              "3004"
            ],
            "answer": 2,
            "hint": "La variable dependiente se multiplica por cien.",
            "explanation": "La variable dependiente se multiplica por cien. El resultado es 3000."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La pendiente en euros por pedido es 20. Ahora el coste se expresa en miles de euros y los pedidos en centenas. ¿Qué pendiente resulta?",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": 2,
            "hint": "Una unidad del nuevo predictor representa cien pedidos y un nuevo coste equivale a mil euros.",
            "explanation": "Una unidad del nuevo predictor representa cien pedidos y un nuevo coste equivale a mil euros. El resultado es 2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La pendiente en euros por pedido es 30. Ahora el coste se expresa en miles de euros y los pedidos en centenas. ¿Qué pendiente resulta?",
            "options": [
              "2",
              "4",
              "3"
            ],
            "answer": 3,
            "hint": "Una unidad del nuevo predictor representa cien pedidos y un nuevo coste equivale a mil euros.",
            "explanation": "Una unidad del nuevo predictor representa cien pedidos y un nuevo coste equivale a mil euros. El resultado es 3."
          }
        ]
      }
    ]
  },
  {
    "id": "fin-b3",
    "nombre": "Bloque 3 · Números índices y probabilidad",
    "apartados": [
      {
        "nombre": "Índice simple",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una comisión pasa de 100 a 120 €. ¿Cuál es el índice simple en base 100?",
            "options": [
              "124",
              "128",
              "120"
            ],
            "answer": 3,
            "hint": "Divide el precio actual entre el inicial y multiplica por cien.",
            "explanation": "Divide el precio actual entre el inicial y multiplica por cien. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una comisión pasa de 100 a 130 €. ¿Cuál es el índice simple en base 100?",
            "options": [
              "130",
              "134",
              "138"
            ],
            "answer": 1,
            "hint": "Divide el precio actual entre el inicial y multiplica por cien.",
            "explanation": "Divide el precio actual entre el inicial y multiplica por cien. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un índice simple en base 100 alcanza 120 y el precio actual es 240 €. ¿Cuál era el precio base?",
            "options": [
              "200",
              "204",
              "208"
            ],
            "answer": 1,
            "hint": "Despeja el precio base de la fórmula.",
            "explanation": "Despeja el precio base de la fórmula. El resultado es 200."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un índice simple en base 100 alcanza 130 y el precio actual es 260 €. ¿Cuál era el precio base?",
            "options": [
              "204",
              "200",
              "208"
            ],
            "answer": 2,
            "hint": "Despeja el precio base de la fórmula.",
            "explanation": "Despeja el precio base de la fórmula. El resultado es 200."
          }
        ]
      },
      {
        "nombre": "Variación porcentual",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El índice de gastos pasa de 100 a 120. ¿Cuánto aumentó en porcentaje?",
            "options": [
              "20",
              "16",
              "12"
            ],
            "answer": 1,
            "hint": "Compara el valor final con el inicial.",
            "explanation": "Compara el valor final con el inicial. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El índice de gastos pasa de 100 a 130. ¿Cuánto aumentó en porcentaje?",
            "options": [
              "26",
              "30",
              "22"
            ],
            "answer": 2,
            "hint": "Compara el valor final con el inicial.",
            "explanation": "Compara el valor final con el inicial. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El índice pasa de 120 a 100. ¿Qué porcentaje de descenso supone, expresado como magnitud positiva? Redondea a tres decimales.",
            "options": [
              "12,667",
              "16,667",
              "8,667"
            ],
            "answer": 2,
            "hint": "El denominador es ahora el índice más alto.",
            "explanation": "El denominador es ahora el índice más alto. El resultado es 16,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El índice pasa de 130 a 100. ¿Qué porcentaje de descenso supone, expresado como magnitud positiva? Redondea a tres decimales.",
            "options": [
              "19,077",
              "15,077",
              "23,077"
            ],
            "answer": 3,
            "hint": "El denominador es ahora el índice más alto.",
            "explanation": "El denominador es ahora el índice más alto. El resultado es 23,077."
          }
        ]
      },
      {
        "nombre": "Cambio de base",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un índice de precios vale 120 este año y 100 en el año elegido como nueva base. ¿Cuál es el índice rebasado?",
            "options": [
              "116",
              "120",
              "124"
            ],
            "answer": 2,
            "hint": "Divide el índice del año por el de la nueva base.",
            "explanation": "Divide el índice del año por el de la nueva base. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un índice de precios vale 130 este año y 100 en el año elegido como nueva base. ¿Cuál es el índice rebasado?",
            "options": [
              "126",
              "134",
              "130"
            ],
            "answer": 3,
            "hint": "Divide el índice del año por el de la nueva base.",
            "explanation": "Divide el índice del año por el de la nueva base. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En la antigua base, el índice vale 120 este año y 120 en la nueva base. ¿Cuál es el índice rebasado de este año?",
            "options": [
              "96",
              "104",
              "100"
            ],
            "answer": 3,
            "hint": "Divide ambos índices y multiplica por cien.",
            "explanation": "Divide ambos índices y multiplica por cien. El resultado es 100."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En la antigua base, el índice vale 120 este año y 130 en la nueva base. ¿Cuál es el índice rebasado de este año? Redondea a tres decimales.",
            "options": [
              "92,308",
              "88,308",
              "96,308"
            ],
            "answer": 1,
            "hint": "Divide ambos índices y multiplica por cien.",
            "explanation": "Divide ambos índices y multiplica por cien. El resultado es 92,308."
          }
        ]
      },
      {
        "nombre": "Encadenamiento",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La cotización sube 20 % en un periodo. Si empezó en 200 €, ¿en cuánto termina?",
            "options": [
              "244",
              "248",
              "240"
            ],
            "answer": 3,
            "hint": "Aplica el factor de crecimiento al importe inicial.",
            "explanation": "Aplica el factor de crecimiento al importe inicial. El resultado es 240."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La cotización sube 30 % en un periodo. Si empezó en 200 €, ¿en cuánto termina?",
            "options": [
              "260",
              "264",
              "268"
            ],
            "answer": 1,
            "hint": "Aplica el factor de crecimiento al importe inicial.",
            "explanation": "Aplica el factor de crecimiento al importe inicial. El resultado es 260."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una cotización sube 20 % y luego baja 20 %. ¿Qué pérdida porcentual acumula, expresada como magnitud positiva?",
            "options": [
              "4",
              "5",
              "6"
            ],
            "answer": 1,
            "hint": "Multiplica los dos factores antes de comparar con uno.",
            "explanation": "Multiplica los dos factores antes de comparar con uno. El resultado es 4."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una cotización sube 30 % y luego baja 30 %. ¿Qué pérdida porcentual acumula, expresada como magnitud positiva?",
            "options": [
              "10",
              "9",
              "11"
            ],
            "answer": 2,
            "hint": "Multiplica los dos factores antes de comparar con uno.",
            "explanation": "Multiplica los dos factores antes de comparar con uno. El resultado es 9."
          }
        ]
      },
      {
        "nombre": "Índice de valor",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La cartera inicial vale 1000 € y la actual 1200 €. ¿Qué índice de valor en base 100 resulta?",
            "options": [
              "120",
              "116",
              "112"
            ],
            "answer": 1,
            "hint": "Relaciona ambos valores monetarios.",
            "explanation": "Relaciona ambos valores monetarios. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La cartera inicial vale 1000 € y la actual 1300 €. ¿Qué índice de valor en base 100 resulta?",
            "options": [
              "126",
              "130",
              "122"
            ],
            "answer": 2,
            "hint": "Relaciona ambos valores monetarios.",
            "explanation": "Relaciona ambos valores monetarios. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Los precios por título aumentan 20 % y el número de títulos cae 10 %. Para un solo activo, ¿qué índice de valor resulta en base 100?",
            "options": [
              "104",
              "108",
              "100"
            ],
            "answer": 2,
            "hint": "Multiplica el factor de precios por el de cantidad.",
            "explanation": "Multiplica el factor de precios por el de cantidad. El resultado es 108."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Los precios por título aumentan 30 % y el número de títulos cae 10 %. Para un solo activo, ¿qué índice de valor resulta en base 100?",
            "options": [
              "113",
              "109",
              "117"
            ],
            "answer": 3,
            "hint": "Multiplica el factor de precios por el de cantidad.",
            "explanation": "Multiplica el factor de precios por el de cantidad. El resultado es 117."
          }
        ]
      },
      {
        "nombre": "Precios de Laspeyres",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La cesta base costó 100 €. Hoy esa misma cesta cuesta 120 €. Calcula el índice de precios de Laspeyres en base 100.",
            "options": [
              "116",
              "120",
              "124"
            ],
            "answer": 2,
            "hint": "Usa cantidades base en ambos periodos.",
            "explanation": "Usa cantidades base en ambos periodos. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La cesta base costó 100 €. Hoy esa misma cesta cuesta 130 €. Calcula el índice de precios de Laspeyres en base 100.",
            "options": [
              "126",
              "134",
              "130"
            ],
            "answer": 3,
            "hint": "Usa cantidades base en ambos periodos.",
            "explanation": "Usa cantidades base en ambos periodos. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La cesta inicial dedica 25 % al servicio A y 75 % al B. Sus precios aumentan 20 % y 8 %. Calcula el índice de Laspeyres en base 100.",
            "options": [
              "107",
              "115",
              "111"
            ],
            "answer": 3,
            "hint": "Pondera las variaciones por las participaciones del periodo base.",
            "explanation": "Pondera las variaciones por las participaciones del periodo base. El resultado es 111."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La cesta inicial dedica 25 % al servicio A y 75 % al B. Sus precios aumentan 30 % y 8 %. Calcula el índice de Laspeyres en base 100.",
            "options": [
              "113,5",
              "109,5",
              "117,5"
            ],
            "answer": 1,
            "hint": "Pondera las variaciones por las participaciones del periodo base.",
            "explanation": "Pondera las variaciones por las participaciones del periodo base. El resultado es 113,5."
          }
        ]
      },
      {
        "nombre": "Precios de Paasche",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La cesta actual cuesta 120 € a precios vigentes y 100 € a precios base. Calcula Paasche en base 100.",
            "options": [
              "124",
              "128",
              "120"
            ],
            "answer": 3,
            "hint": "Mantén fijas las cantidades actuales.",
            "explanation": "Mantén fijas las cantidades actuales. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La cesta actual cuesta 130 € a precios vigentes y 100 € a precios base. Calcula Paasche en base 100.",
            "options": [
              "130",
              "134",
              "138"
            ],
            "answer": 1,
            "hint": "Mantén fijas las cantidades actuales.",
            "explanation": "Mantén fijas las cantidades actuales. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se consumen hoy 2 servicios A y 3 B. Los precios base son 10 y 20 €, y los actuales 20 y 22 €. Calcula Paasche en base 100.",
            "options": [
              "132,5",
              "136,5",
              "140,5"
            ],
            "answer": 1,
            "hint": "Valora las cantidades actuales una vez con cada vector de precios.",
            "explanation": "Valora las cantidades actuales una vez con cada vector de precios. El resultado es 132,5."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se consumen hoy 2 servicios A y 3 B. Los precios base son 10 y 20 €, y los actuales 30 y 22 €. Calcula Paasche en base 100.",
            "options": [
              "161,5",
              "157,5",
              "165,5"
            ],
            "answer": 2,
            "hint": "Valora las cantidades actuales una vez con cada vector de precios.",
            "explanation": "Valora las cantidades actuales una vez con cada vector de precios. El resultado es 157,5."
          }
        ]
      },
      {
        "nombre": "Deflación",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Una empresa factura 120 miles de euros corrientes y el deflactor en base 100 vale 120. ¿Cuál es la facturación real en miles?",
            "options": [
              "100",
              "96",
              "92"
            ],
            "answer": 1,
            "hint": "Divide por el deflactor expresado como factor.",
            "explanation": "Divide por el deflactor expresado como factor. El resultado es 100."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Una empresa factura 130 miles de euros corrientes y el deflactor en base 100 vale 130. ¿Cuál es la facturación real en miles?",
            "options": [
              "96",
              "100",
              "92"
            ],
            "answer": 2,
            "hint": "Divide por el deflactor expresado como factor.",
            "explanation": "Divide por el deflactor expresado como factor. El resultado es 100."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La facturación nominal sube 20 % y el deflactor aumenta 10 %. ¿Cuál es la variación real porcentual? Redondea a tres decimales.",
            "options": [
              "8,091",
              "9,091",
              "7,091"
            ],
            "answer": 2,
            "hint": "Divide el factor nominal por el factor de precios antes de restar uno.",
            "explanation": "Divide el factor nominal por el factor de precios antes de restar uno. El resultado es 9,091."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La facturación nominal sube 30 % y el deflactor aumenta 10 %. ¿Cuál es la variación real porcentual? Redondea a tres decimales.",
            "options": [
              "14,182",
              "10,182",
              "18,182"
            ],
            "answer": 3,
            "hint": "Divide el factor nominal por el factor de precios antes de restar uno.",
            "explanation": "Divide el factor nominal por el factor de precios antes de restar uno. El resultado es 18,182."
          }
        ]
      },
      {
        "nombre": "Índice de cantidades",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un fondo tenía 100 títulos y pasa a 120 títulos. Calcula su índice simple de cantidad en base 100.",
            "options": [
              "116",
              "120",
              "124"
            ],
            "answer": 2,
            "hint": "Compara cantidades en base cien.",
            "explanation": "Compara cantidades en base cien. El resultado es 120."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un fondo tenía 100 títulos y pasa a 130 títulos. Calcula su índice simple de cantidad en base 100.",
            "options": [
              "126",
              "134",
              "130"
            ],
            "answer": 3,
            "hint": "Compara cantidades en base cien.",
            "explanation": "Compara cantidades en base cien. El resultado es 130."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "El índice de valor de un activo es 240 y el de precio es 120, ambos en base 100. ¿Qué índice de cantidad resulta?",
            "options": [
              "196",
              "204",
              "200"
            ],
            "answer": 3,
            "hint": "Divide el índice de valor por el de precio y reescala a cien.",
            "explanation": "Divide el índice de valor por el de precio y reescala a cien. El resultado es 200."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "El índice de valor de un activo es 260 y el de precio es 130, ambos en base 100. ¿Qué índice de cantidad resulta?",
            "options": [
              "200",
              "196",
              "204"
            ],
            "answer": 1,
            "hint": "Divide el índice de valor por el de precio y reescala a cien.",
            "explanation": "Divide el índice de valor por el de precio y reescala a cien. El resultado es 200."
          }
        ]
      },
      {
        "nombre": "Probabilidad simple",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se elige al azar una factura entre 100, con 20 vencidas. ¿Qué probabilidad porcentual hay de que esté vencida?",
            "options": [
              "24",
              "28",
              "20"
            ],
            "answer": 3,
            "hint": "Cuenta los casos favorables entre los posibles.",
            "explanation": "Cuenta los casos favorables entre los posibles. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se elige al azar una factura entre 100, con 30 vencidas. ¿Qué probabilidad porcentual hay de que esté vencida?",
            "options": [
              "30",
              "34",
              "38"
            ],
            "answer": 1,
            "hint": "Cuenta los casos favorables entre los posibles.",
            "explanation": "Cuenta los casos favorables entre los posibles. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se retiran 5 facturas vencidas de un lote de 100 que contenía 20 vencidas. ¿Qué probabilidad porcentual tiene una elección uniforme de estar vencida ahora? Redondea a tres decimales.",
            "options": [
              "15,789",
              "19,789",
              "23,789"
            ],
            "answer": 1,
            "hint": "Actualiza el numerador y el denominador.",
            "explanation": "Actualiza el numerador y el denominador. El resultado es 15,789."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se retiran 5 facturas vencidas de un lote de 100 que contenía 30 vencidas. ¿Qué probabilidad porcentual tiene una elección uniforme de estar vencida ahora? Redondea a tres decimales.",
            "options": [
              "30,316",
              "26,316",
              "34,316"
            ],
            "answer": 2,
            "hint": "Actualiza el numerador y el denominador.",
            "explanation": "Actualiza el numerador y el denominador. El resultado es 26,316."
          }
        ]
      },
      {
        "nombre": "Complemento",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La probabilidad de impago es 20 %. ¿Cuál es la probabilidad porcentual de pago?",
            "options": [
              "80",
              "76",
              "72"
            ],
            "answer": 1,
            "hint": "La suma del suceso y su complementario es cien por cien.",
            "explanation": "La suma del suceso y su complementario es cien por cien. El resultado es 80."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La probabilidad de impago es 30 %. ¿Cuál es la probabilidad porcentual de pago?",
            "options": [
              "66",
              "70",
              "62"
            ],
            "answer": 2,
            "hint": "La suma del suceso y su complementario es cien por cien.",
            "explanation": "La suma del suceso y su complementario es cien por cien. El resultado es 70."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos facturas independientes tienen probabilidad de impago 20 % cada una. ¿Cuál es la probabilidad porcentual de que se paguen ambas?",
            "options": [
              "60",
              "64",
              "56"
            ],
            "answer": 2,
            "hint": "Obtén la probabilidad de pago y multiplica para dos facturas independientes.",
            "explanation": "Obtén la probabilidad de pago y multiplica para dos facturas independientes. El resultado es 64."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos facturas independientes tienen probabilidad de impago 30 % cada una. ¿Cuál es la probabilidad porcentual de que se paguen ambas?",
            "options": [
              "45",
              "41",
              "49"
            ],
            "answer": 3,
            "hint": "Obtén la probabilidad de pago y multiplica para dos facturas independientes.",
            "explanation": "Obtén la probabilidad de pago y multiplica para dos facturas independientes. El resultado es 49."
          }
        ]
      },
      {
        "nombre": "Unión",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos vías de pago excluyentes representan 20 % y 30 %. ¿Qué porcentaje usa una u otra?",
            "options": [
              "46",
              "50",
              "54"
            ],
            "answer": 2,
            "hint": "Suma las cuotas de dos sucesos incompatibles.",
            "explanation": "Suma las cuotas de dos sucesos incompatibles. El resultado es 50."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos vías de pago excluyentes representan 30 % y 30 %. ¿Qué porcentaje usa una u otra?",
            "options": [
              "56",
              "64",
              "60"
            ],
            "answer": 3,
            "hint": "Suma las cuotas de dos sucesos incompatibles.",
            "explanation": "Suma las cuotas de dos sucesos incompatibles. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un 20 % contrata factoring, un 30 % renting y un 5 % ambos. ¿Qué porcentaje contrata exactamente uno?",
            "options": [
              "36",
              "44",
              "40"
            ],
            "answer": 3,
            "hint": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno.",
            "explanation": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un 30 % contrata factoring, un 30 % renting y un 5 % ambos. ¿Qué porcentaje contrata exactamente uno?",
            "options": [
              "50",
              "46",
              "54"
            ],
            "answer": 1,
            "hint": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno.",
            "explanation": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno. El resultado es 50."
          }
        ]
      },
      {
        "nombre": "Condicionada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre 50 créditos empresariales hay 20 con aval. ¿Cuál es la probabilidad porcentual de aval dado que el crédito es empresarial?",
            "options": [
              "44",
              "48",
              "40"
            ],
            "answer": 3,
            "hint": "Trabaja dentro de los 50 créditos empresariales.",
            "explanation": "Trabaja dentro de los 50 créditos empresariales. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre 50 créditos empresariales hay 30 con aval. ¿Cuál es la probabilidad porcentual de aval dado que el crédito es empresarial?",
            "options": [
              "60",
              "64",
              "68"
            ],
            "answer": 1,
            "hint": "Trabaja dentro de los 50 créditos empresariales.",
            "explanation": "Trabaja dentro de los 50 créditos empresariales. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En una cartera, el 50 % son créditos empresariales y 20 % del total son empresariales con aval. ¿Qué porcentaje de los empresariales carece de aval?",
            "options": [
              "60",
              "64",
              "68"
            ],
            "answer": 1,
            "hint": "Divide la probabilidad conjunta entre la empresarial y toma el complemento.",
            "explanation": "Divide la probabilidad conjunta entre la empresarial y toma el complemento. El resultado es 60."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En una cartera, el 50 % son créditos empresariales y 30 % del total son empresariales con aval. ¿Qué porcentaje de los empresariales carece de aval?",
            "options": [
              "44",
              "40",
              "48"
            ],
            "answer": 2,
            "hint": "Divide la probabilidad conjunta entre la empresarial y toma el complemento.",
            "explanation": "Divide la probabilidad conjunta entre la empresarial y toma el complemento. El resultado es 40."
          }
        ]
      },
      {
        "nombre": "Independencia",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 20 % y 10 %. ¿Qué probabilidad porcentual hay de dos fallos?",
            "options": [
              "2",
              "1",
              "0"
            ],
            "answer": 1,
            "hint": "Multiplica las probabilidades como proporciones.",
            "explanation": "Multiplica las probabilidades como proporciones. El resultado es 2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 30 % y 10 %. ¿Qué probabilidad porcentual hay de dos fallos?",
            "options": [
              "2",
              "3",
              "1"
            ],
            "answer": 2,
            "hint": "Multiplica las probabilidades como proporciones.",
            "explanation": "Multiplica las probabilidades como proporciones. El resultado es 3."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 20 % y 10 %. ¿Qué probabilidad porcentual hay de exactamente un fallo?",
            "options": [
              "22",
              "26",
              "18"
            ],
            "answer": 2,
            "hint": "Suma los dos órdenes posibles de fallo y éxito.",
            "explanation": "Suma los dos órdenes posibles de fallo y éxito. El resultado es 26."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 30 % y 10 %. ¿Qué probabilidad porcentual hay de exactamente un fallo?",
            "options": [
              "30",
              "26",
              "34"
            ],
            "answer": 3,
            "hint": "Suma los dos órdenes posibles de fallo y éxito.",
            "explanation": "Suma los dos órdenes posibles de fallo y éxito. El resultado es 34."
          }
        ]
      },
      {
        "nombre": "Probabilidad total",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos sucursales emiten la mitad de los créditos cada una. Sus tasas de mora son 20 % y 10 %. ¿Cuál es la mora global porcentual?",
            "options": [
              "11",
              "15",
              "19"
            ],
            "answer": 2,
            "hint": "Pondera cada tasa por su cuota de emisión.",
            "explanation": "Pondera cada tasa por su cuota de emisión. El resultado es 15."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos sucursales emiten la mitad de los créditos cada una. Sus tasas de mora son 30 % y 10 %. ¿Cuál es la mora global porcentual?",
            "options": [
              "16",
              "24",
              "20"
            ],
            "answer": 3,
            "hint": "Pondera cada tasa por su cuota de emisión.",
            "explanation": "Pondera cada tasa por su cuota de emisión. El resultado es 20."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La sucursal A emite el 25 % de los créditos y tiene mora 20 %. La mora global es 15 %. ¿Cuál es el porcentaje de mora de B? Redondea a tres decimales.",
            "options": [
              "9,333",
              "17,333",
              "13,333"
            ],
            "answer": 3,
            "hint": "Despeja la tasa de B en la media ponderada.",
            "explanation": "Despeja la tasa de B en la media ponderada. El resultado es 13,333."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La sucursal A emite el 25 % de los créditos y tiene mora 30 %. La mora global es 15 %. ¿Cuál es el porcentaje de mora de B?",
            "options": [
              "10",
              "6",
              "14"
            ],
            "answer": 1,
            "hint": "Despeja la tasa de B en la media ponderada.",
            "explanation": "Despeja la tasa de B en la media ponderada. El resultado es 10."
          }
        ]
      },
      {
        "nombre": "Bayes",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "A emite el 50 % de créditos y tiene 20 % de impago. ¿Qué porcentaje del total corresponde a créditos de A impagados?",
            "options": [
              "14",
              "18",
              "10"
            ],
            "answer": 3,
            "hint": "Multiplica cuota de A por impago condicionado a A.",
            "explanation": "Multiplica cuota de A por impago condicionado a A. El resultado es 10."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "A emite el 50 % de créditos y tiene 30 % de impago. ¿Qué porcentaje del total corresponde a créditos de A impagados?",
            "options": [
              "15",
              "19",
              "23"
            ],
            "answer": 1,
            "hint": "Multiplica cuota de A por impago condicionado a A.",
            "explanation": "Multiplica cuota de A por impago condicionado a A. El resultado es 15."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "A y B emiten el mismo número de créditos y tienen tasas de impago 20 % y 10 %. Dado un impago, ¿qué probabilidad porcentual hay de que proceda de A? Redondea a tres decimales.",
            "options": [
              "66,667",
              "70,667",
              "74,667"
            ],
            "answer": 1,
            "hint": "Divide la contribución de A al impago por el impago total.",
            "explanation": "Divide la contribución de A al impago por el impago total. El resultado es 66,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "A y B emiten el mismo número de créditos y tienen tasas de impago 30 % y 10 %. Dado un impago, ¿qué probabilidad porcentual hay de que proceda de A?",
            "options": [
              "79",
              "75",
              "83"
            ],
            "answer": 2,
            "hint": "Divide la contribución de A al impago por el impago total.",
            "explanation": "Divide la contribución de A al impago por el impago total. El resultado es 75."
          }
        ]
      },
      {
        "nombre": "Sin reposición",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay 50 recibos y 20 de ellos vencidos. Se retira uno vencido. ¿Cuántos vencidos permanecen?",
            "options": [
              "19",
              "15",
              "11"
            ],
            "answer": 1,
            "hint": "Actualiza el recuento favorable.",
            "explanation": "Actualiza el recuento favorable. El resultado es 19."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay 50 recibos y 30 de ellos vencidos. Se retira uno vencido. ¿Cuántos vencidos permanecen?",
            "options": [
              "25",
              "29",
              "21"
            ],
            "answer": 2,
            "hint": "Actualiza el recuento favorable.",
            "explanation": "Actualiza el recuento favorable. El resultado es 29."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 50 recibos, 20 están vencidos. Se extraen dos al azar sin reemplazo. ¿Qué probabilidad porcentual hay de que ambos estén vencidos? Redondea a tres decimales.",
            "options": [
              "11,51",
              "15,51",
              "7,51"
            ],
            "answer": 2,
            "hint": "Tras retirar un vencido cambian ambos recuentos.",
            "explanation": "Tras retirar un vencido cambian ambos recuentos. El resultado es 15,51."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 50 recibos, 30 están vencidos. Se extraen dos al azar sin reemplazo. ¿Qué probabilidad porcentual hay de que ambos estén vencidos? Redondea a tres decimales.",
            "options": [
              "31,51",
              "27,51",
              "35,51"
            ],
            "answer": 3,
            "hint": "Tras retirar un vencido cambian ambos recuentos.",
            "explanation": "Tras retirar un vencido cambian ambos recuentos. El resultado es 35,51."
          }
        ]
      },
      {
        "nombre": "Árbol de decisión",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 20 %. Entre los renovados, 50 % mejora el tipo. ¿Qué porcentaje se renueva y mejora?",
            "options": [
              "6",
              "10",
              "14"
            ],
            "answer": 2,
            "hint": "Multiplica probabilidades a lo largo de la rama.",
            "explanation": "Multiplica probabilidades a lo largo de la rama. El resultado es 10."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 30 %. Entre los renovados, 50 % mejora el tipo. ¿Qué porcentaje se renueva y mejora?",
            "options": [
              "11",
              "19",
              "15"
            ],
            "answer": 3,
            "hint": "Multiplica probabilidades a lo largo de la rama.",
            "explanation": "Multiplica probabilidades a lo largo de la rama. El resultado es 15."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 20 %. La probabilidad de ahorrar comisiones es 50 % al renovar y 10 % al no renovar. ¿Qué porcentaje ahorra comisiones?",
            "options": [
              "14",
              "22",
              "18"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades de las dos ramas que terminan en ahorro.",
            "explanation": "Suma las probabilidades de las dos ramas que terminan en ahorro. El resultado es 18."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 30 %. La probabilidad de ahorrar comisiones es 50 % al renovar y 10 % al no renovar. ¿Qué porcentaje ahorra comisiones?",
            "options": [
              "22",
              "18",
              "26"
            ],
            "answer": 1,
            "hint": "Suma las probabilidades de las dos ramas que terminan en ahorro.",
            "explanation": "Suma las probabilidades de las dos ramas que terminan en ahorro. El resultado es 22."
          }
        ]
      }
    ]
  },
  {
    "id": "fin-prob",
    "nombre": "Bloque 4. Probabilidad",
    "apartados": [
      {
        "nombre": "Probabilidad simple",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se elige al azar una factura entre 100, con 20 vencidas. ¿Qué probabilidad porcentual hay de que esté vencida?",
            "options": [
              "24",
              "28",
              "20"
            ],
            "answer": 3,
            "hint": "Cuenta los casos favorables entre los posibles.",
            "explanation": "Cuenta los casos favorables entre los posibles. El resultado es 20."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se elige al azar una factura entre 100, con 30 vencidas. ¿Qué probabilidad porcentual hay de que esté vencida?",
            "options": [
              "30",
              "34",
              "38"
            ],
            "answer": 1,
            "hint": "Cuenta los casos favorables entre los posibles.",
            "explanation": "Cuenta los casos favorables entre los posibles. El resultado es 30."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Se retiran 5 facturas vencidas de un lote de 100 que contenía 20 vencidas. ¿Qué probabilidad porcentual tiene una elección uniforme de estar vencida ahora? Redondea a tres decimales.",
            "options": [
              "15,789",
              "19,789",
              "23,789"
            ],
            "answer": 1,
            "hint": "Actualiza el numerador y el denominador.",
            "explanation": "Actualiza el numerador y el denominador. El resultado es 15,789."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Se retiran 5 facturas vencidas de un lote de 100 que contenía 30 vencidas. ¿Qué probabilidad porcentual tiene una elección uniforme de estar vencida ahora? Redondea a tres decimales.",
            "options": [
              "30,316",
              "26,316",
              "34,316"
            ],
            "answer": 2,
            "hint": "Actualiza el numerador y el denominador.",
            "explanation": "Actualiza el numerador y el denominador. El resultado es 26,316."
          }
        ]
      },
      {
        "nombre": "Un solo suceso",
        "facil": [
          {
            "story": "De 100 facturas, 37 tienen aval, 31 se han pagado al vencimiento y 12 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de A? Redondea a dos decimales si es necesario.",
            "options": [
              "28 %",
              "40 %",
              "37 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "P(A) = 37/100. Resultado: 37 %."
          },
          {
            "story": "De 100 facturas, 41 tienen aval, 34 se han pagado al vencimiento y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de A? Redondea a dos decimales si es necesario.",
            "options": [
              "41 %",
              "37 %",
              "28 %"
            ],
            "answer": 1,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "P(A) = 41/100. Resultado: 41 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 facturas, 37 tienen aval, 31 se han pagado al vencimiento y 12 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de que se cumpla exactamente una de las dos condiciones? Redondea a dos decimales si es necesario.",
            "options": [
              "47 %",
              "31 %",
              "44 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "Solo A y solo B son disjuntos. Sus recuentos suman (37−12)+(31−12). Resultado: 44 %."
          },
          {
            "story": "De 100 facturas, 41 tienen aval, 34 se han pagado al vencimiento y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de que se cumpla exactamente una de las dos condiciones? Redondea a dos decimales si es necesario.",
            "options": [
              "68 %",
              "45 %",
              "49 %"
            ],
            "answer": 3,
            "hint": "Distingue el total del grupo favorable.",
            "explanation": "Solo A y solo B son disjuntos. Sus recuentos suman (41−13)+(34−13). Resultado: 49 %."
          }
        ]
      },
      {
        "nombre": "Complemento",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La probabilidad de impago es 20 %. ¿Cuál es la probabilidad porcentual de pago?",
            "options": [
              "80",
              "76",
              "72"
            ],
            "answer": 1,
            "hint": "La suma del suceso y su complementario es cien por cien.",
            "explanation": "La suma del suceso y su complementario es cien por cien. El resultado es 80."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La probabilidad de impago es 30 %. ¿Cuál es la probabilidad porcentual de pago?",
            "options": [
              "66",
              "70",
              "62"
            ],
            "answer": 2,
            "hint": "La suma del suceso y su complementario es cien por cien.",
            "explanation": "La suma del suceso y su complementario es cien por cien. El resultado es 70."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos facturas independientes tienen probabilidad de impago 20 % cada una. ¿Cuál es la probabilidad porcentual de que se paguen ambas?",
            "options": [
              "60",
              "64",
              "56"
            ],
            "answer": 2,
            "hint": "Obtén la probabilidad de pago y multiplica para dos facturas independientes.",
            "explanation": "Obtén la probabilidad de pago y multiplica para dos facturas independientes. El resultado es 64."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos facturas independientes tienen probabilidad de impago 30 % cada una. ¿Cuál es la probabilidad porcentual de que se paguen ambas?",
            "options": [
              "45",
              "41",
              "49"
            ],
            "answer": 3,
            "hint": "Obtén la probabilidad de pago y multiplica para dos facturas independientes.",
            "explanation": "Obtén la probabilidad de pago y multiplica para dos facturas independientes. El resultado es 49."
          }
        ]
      },
      {
        "nombre": "Fuera de ambos grupos",
        "facil": [
          {
            "story": "De 100 facturas, 39 tienen aval, 31 se han pagado al vencimiento y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de no cumplir B? Redondea a dos decimales si es necesario.",
            "options": [
              "69 %",
              "56 %",
              "60 %"
            ],
            "answer": 1,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "Quedan 100−31 fuera de B. Resultado: 69 %."
          },
          {
            "story": "De 100 facturas, 43 tienen aval, 34 se han pagado al vencimiento y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Cuál es la probabilidad de no cumplir B? Redondea a dos decimales si es necesario.",
            "options": [
              "53 %",
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
            "story": "De 100 facturas, 39 tienen aval, 31 se han pagado al vencimiento y 13 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de quedar fuera de ambos grupos? Redondea a dos decimales si es necesario.",
            "options": [
              "34 %",
              "43 %",
              "62 %"
            ],
            "answer": 2,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "La unión reúne 39+31−13 elementos. Toma su complemento. Resultado: 43 %."
          },
          {
            "story": "De 100 facturas, 43 tienen aval, 34 se han pagado al vencimiento y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué probabilidad hay de quedar fuera de ambos grupos? Redondea a dos decimales si es necesario.",
            "options": [
              "44 %",
              "33 %",
              "37 %"
            ],
            "answer": 3,
            "hint": "Cuenta los casos de la unión una sola vez.",
            "explanation": "La unión reúne 43+34−14 elementos. Toma su complemento. Resultado: 37 %."
          }
        ]
      },
      {
        "nombre": "Unión",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos vías de pago excluyentes representan 20 % y 30 %. ¿Qué porcentaje usa una u otra?",
            "options": [
              "46",
              "50",
              "54"
            ],
            "answer": 2,
            "hint": "Suma las cuotas de dos sucesos incompatibles.",
            "explanation": "Suma las cuotas de dos sucesos incompatibles. El resultado es 50."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos vías de pago excluyentes representan 30 % y 30 %. ¿Qué porcentaje usa una u otra?",
            "options": [
              "56",
              "64",
              "60"
            ],
            "answer": 3,
            "hint": "Suma las cuotas de dos sucesos incompatibles.",
            "explanation": "Suma las cuotas de dos sucesos incompatibles. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un 20 % contrata factoring, un 30 % renting y un 5 % ambos. ¿Qué porcentaje contrata exactamente uno?",
            "options": [
              "36",
              "44",
              "40"
            ],
            "answer": 3,
            "hint": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno.",
            "explanation": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un 30 % contrata factoring, un 30 % renting y un 5 % ambos. ¿Qué porcentaje contrata exactamente uno?",
            "options": [
              "50",
              "46",
              "54"
            ],
            "answer": 1,
            "hint": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno.",
            "explanation": "Las dos intersecciones incluidas en la suma deben retirarse para contar exactamente uno. El resultado es 50."
          }
        ]
      },
      {
        "nombre": "Probabilidad inversa",
        "facil": [
          {
            "story": "De 100 facturas, 41 tienen aval, 31 se han pagado al vencimiento y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "64,16 %",
              "36,16 %",
              "45,16 %"
            ],
            "answer": 3,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 31 elementos, de los cuales 14 cumplen A. Resultado: 45,16 %."
          },
          {
            "story": "De 100 facturas, 45 tienen aval, 34 se han pagado al vencimiento y 15 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "44,12 %",
              "31,12 %",
              "47,12 %"
            ],
            "answer": 1,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 34 elementos, de los cuales 15 cumplen A. Resultado: 44,12 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 facturas, 41 tienen aval, 31 se han pagado al vencimiento y 14 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes no cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "42,13 %",
              "46,13 %",
              "39,13 %"
            ],
            "answer": 3,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 69 elementos, de los cuales 27 cumplen A. Resultado: 39,13 %."
          },
          {
            "story": "De 100 facturas, 45 tienen aval, 34 se han pagado al vencimiento y 15 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes no cumplen B, ¿qué porcentaje cumple A? Redondea a dos decimales si es necesario.",
            "options": [
              "45,45 %",
              "41,45 %",
              "48,45 %"
            ],
            "answer": 1,
            "hint": "El denominador depende de qué información conoces.",
            "explanation": "En el grupo condicionado hay 66 elementos, de los cuales 30 cumplen A. Resultado: 45,45 %."
          }
        ]
      },
      {
        "nombre": "Condicionada",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Entre 50 créditos empresariales hay 20 con aval. ¿Cuál es la probabilidad porcentual de aval dado que el crédito es empresarial?",
            "options": [
              "44",
              "48",
              "40"
            ],
            "answer": 3,
            "hint": "Trabaja dentro de los 50 créditos empresariales.",
            "explanation": "Trabaja dentro de los 50 créditos empresariales. El resultado es 40."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Entre 50 créditos empresariales hay 30 con aval. ¿Cuál es la probabilidad porcentual de aval dado que el crédito es empresarial?",
            "options": [
              "60",
              "64",
              "68"
            ],
            "answer": 1,
            "hint": "Trabaja dentro de los 50 créditos empresariales.",
            "explanation": "Trabaja dentro de los 50 créditos empresariales. El resultado es 60."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "En una cartera, el 50 % son créditos empresariales y 20 % del total son empresariales con aval. ¿Qué porcentaje de los empresariales carece de aval?",
            "options": [
              "60",
              "64",
              "68"
            ],
            "answer": 1,
            "hint": "Divide la probabilidad conjunta entre la empresarial y toma el complemento.",
            "explanation": "Divide la probabilidad conjunta entre la empresarial y toma el complemento. El resultado es 60."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "En una cartera, el 50 % son créditos empresariales y 30 % del total son empresariales con aval. ¿Qué porcentaje de los empresariales carece de aval?",
            "options": [
              "44",
              "40",
              "48"
            ],
            "answer": 2,
            "hint": "Divide la probabilidad conjunta entre la empresarial y toma el complemento.",
            "explanation": "Divide la probabilidad conjunta entre la empresarial y toma el complemento. El resultado es 40."
          }
        ]
      },
      {
        "nombre": "Intersección mediante condicionamiento",
        "facil": [
          {
            "story": "En una muestra de facturas, el 43 % tienen aval. Entre quienes cumplen esta condición, el 31 % se han pagado al vencimiento.",
            "prompt": "¿Qué porcentaje cumple la primera condición? Redondea a dos decimales si es necesario.",
            "options": [
              "34 %",
              "46 %",
              "43 %"
            ],
            "answer": 3,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "El porcentaje marginal de la primera condición es 43 %. Resultado: 43 %."
          },
          {
            "story": "En una muestra de facturas, el 47 % tienen aval. Entre quienes cumplen esta condición, el 34 % se han pagado al vencimiento.",
            "prompt": "¿Qué porcentaje cumple la primera condición? Redondea a dos decimales si es necesario.",
            "options": [
              "47 %",
              "66 %",
              "34 %"
            ],
            "answer": 1,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "El porcentaje marginal de la primera condición es 47 %. Resultado: 47 %."
          }
        ],
        "dificil": [
          {
            "story": "En una muestra de facturas, el 43 % tienen aval. Entre quienes cumplen esta condición, el 31 % se han pagado al vencimiento.",
            "prompt": "¿Qué porcentaje del total cumple la primera condición pero no la segunda? Redondea a dos decimales si es necesario.",
            "options": [
              "29,67 %",
              "25,67 %",
              "16,67 %"
            ],
            "answer": 1,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "Multiplica 43/100 por (1−31/100). Resultado: 29,67 %."
          },
          {
            "story": "En una muestra de facturas, el 47 % tienen aval. Entre quienes cumplen esta condición, el 34 % se han pagado al vencimiento.",
            "prompt": "¿Qué porcentaje del total cumple la primera condición pero no la segunda? Redondea a dos decimales si es necesario.",
            "options": [
              "50,02 %",
              "31,02 %",
              "38,02 %"
            ],
            "answer": 2,
            "hint": "Dibuja las dos ramas del primer suceso.",
            "explanation": "Multiplica 47/100 por (1−34/100). Resultado: 31,02 %."
          }
        ]
      },
      {
        "nombre": "Independencia",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 20 % y 10 %. ¿Qué probabilidad porcentual hay de dos fallos?",
            "options": [
              "2",
              "1",
              "0"
            ],
            "answer": 1,
            "hint": "Multiplica las probabilidades como proporciones.",
            "explanation": "Multiplica las probabilidades como proporciones. El resultado es 2."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 30 % y 10 %. ¿Qué probabilidad porcentual hay de dos fallos?",
            "options": [
              "2",
              "3",
              "1"
            ],
            "answer": 2,
            "hint": "Multiplica las probabilidades como proporciones.",
            "explanation": "Multiplica las probabilidades como proporciones. El resultado es 3."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 20 % y 10 %. ¿Qué probabilidad porcentual hay de exactamente un fallo?",
            "options": [
              "22",
              "26",
              "18"
            ],
            "answer": 2,
            "hint": "Suma los dos órdenes posibles de fallo y éxito.",
            "explanation": "Suma los dos órdenes posibles de fallo y éxito. El resultado es 26."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos pagos independientes fallan con probabilidades 30 % y 10 %. ¿Qué probabilidad porcentual hay de exactamente un fallo?",
            "options": [
              "30",
              "26",
              "34"
            ],
            "answer": 3,
            "hint": "Suma los dos órdenes posibles de fallo y éxito.",
            "explanation": "Suma los dos órdenes posibles de fallo y éxito. El resultado es 34."
          }
        ]
      },
      {
        "nombre": "Diferencia entre sucesos",
        "facil": [
          {
            "story": "De 100 facturas, 45 tienen aval, 31 se han pagado al vencimiento y 16 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple A pero no B? Redondea a dos decimales si es necesario.",
            "options": [
              "29 %",
              "25 %",
              "48 %"
            ],
            "answer": 1,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Del total que cumple A resta la intersección: 45−16. Resultado: 29 %."
          },
          {
            "story": "De 100 facturas, 49 tienen aval, 34 se han pagado al vencimiento y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple A pero no B? Redondea a dos decimales si es necesario.",
            "options": [
              "28 %",
              "39 %",
              "32 %"
            ],
            "answer": 3,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Del total que cumple A resta la intersección: 49−17. Resultado: 32 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 facturas, 45 tienen aval, 31 se han pagado al vencimiento y 16 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen al menos una condición, ¿qué porcentaje cumple solo B? Redondea a dos decimales si es necesario.",
            "options": [
              "28 %",
              "25 %",
              "32 %"
            ],
            "answer": 2,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Hay 15 casos solo B y 60 en la unión. Divide el primer recuento entre el segundo. Resultado: 25 %."
          },
          {
            "story": "De 100 facturas, 49 tienen aval, 34 se han pagado al vencimiento y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Entre quienes cumplen al menos una condición, ¿qué porcentaje cumple solo B? Redondea a dos decimales si es necesario.",
            "options": [
              "25,76 %",
              "12,76 %",
              "32,76 %"
            ],
            "answer": 1,
            "hint": "Representa los dos grupos con un diagrama.",
            "explanation": "Hay 17 casos solo B y 66 en la unión. Divide el primer recuento entre el segundo. Resultado: 25,76 %."
          }
        ]
      },
      {
        "nombre": "Probabilidad total",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Dos sucursales emiten la mitad de los créditos cada una. Sus tasas de mora son 20 % y 10 %. ¿Cuál es la mora global porcentual?",
            "options": [
              "11",
              "15",
              "19"
            ],
            "answer": 2,
            "hint": "Pondera cada tasa por su cuota de emisión.",
            "explanation": "Pondera cada tasa por su cuota de emisión. El resultado es 15."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Dos sucursales emiten la mitad de los créditos cada una. Sus tasas de mora son 30 % y 10 %. ¿Cuál es la mora global porcentual?",
            "options": [
              "16",
              "24",
              "20"
            ],
            "answer": 3,
            "hint": "Pondera cada tasa por su cuota de emisión.",
            "explanation": "Pondera cada tasa por su cuota de emisión. El resultado es 20."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "La sucursal A emite el 25 % de los créditos y tiene mora 20 %. La mora global es 15 %. ¿Cuál es el porcentaje de mora de B? Redondea a tres decimales.",
            "options": [
              "9,333",
              "17,333",
              "13,333"
            ],
            "answer": 3,
            "hint": "Despeja la tasa de B en la media ponderada.",
            "explanation": "Despeja la tasa de B en la media ponderada. El resultado es 13,333."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "La sucursal A emite el 25 % de los créditos y tiene mora 30 %. La mora global es 15 %. ¿Cuál es el porcentaje de mora de B?",
            "options": [
              "10",
              "6",
              "14"
            ],
            "answer": 1,
            "hint": "Despeja la tasa de B en la media ponderada.",
            "explanation": "Despeja la tasa de B en la media ponderada. El resultado es 10."
          }
        ]
      },
      {
        "nombre": "Efecto de seleccionar un subgrupo",
        "facil": [
          {
            "story": "De 100 facturas, 47 tienen aval, 31 se han pagado al vencimiento y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple simultáneamente A y B? Redondea a dos decimales si es necesario.",
            "options": [
              "17 %",
              "20 %",
              "4 %"
            ],
            "answer": 1,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "La intersección contiene 17 de 100. Resultado: 17 %."
          },
          {
            "story": "De 100 facturas, 51 tienen aval, 34 se han pagado al vencimiento y 18 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "¿Qué porcentaje cumple simultáneamente A y B? Redondea a dos decimales si es necesario.",
            "options": [
              "18 %",
              "37 %",
              "5 %"
            ],
            "answer": 1,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "La intersección contiene 18 de 100. Resultado: 18 %."
          }
        ],
        "dificil": [
          {
            "story": "De 100 facturas, 47 tienen aval, 31 se han pagado al vencimiento y 17 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Si se elige exclusivamente entre quienes cumplen A, ¿cuál es la probabilidad de que no se cumpla B? Redondea a dos decimales si es necesario.",
            "options": [
              "66,83 %",
              "63,83 %",
              "54,83 %"
            ],
            "answer": 2,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "De 47 elementos con A, 30 quedan fuera de B. Resultado: 63,83 %."
          },
          {
            "story": "De 100 facturas, 51 tienen aval, 34 se han pagado al vencimiento y 18 cumplen ambas condiciones. Se selecciona un elemento al azar. Llamamos A a la primera condición y B a la segunda.",
            "prompt": "Si se elige exclusivamente entre quienes cumplen A, ¿cuál es la probabilidad de que no se cumpla B? Redondea a dos decimales si es necesario.",
            "options": [
              "60,71 %",
              "64,71 %",
              "71,71 %"
            ],
            "answer": 2,
            "hint": "Empieza identificando qué registros pueden elegirse.",
            "explanation": "De 51 elementos con A, 33 quedan fuera de B. Resultado: 64,71 %."
          }
        ]
      },
      {
        "nombre": "Bayes",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "A emite el 50 % de créditos y tiene 20 % de impago. ¿Qué porcentaje del total corresponde a créditos de A impagados?",
            "options": [
              "14",
              "18",
              "10"
            ],
            "answer": 3,
            "hint": "Multiplica cuota de A por impago condicionado a A.",
            "explanation": "Multiplica cuota de A por impago condicionado a A. El resultado es 10."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "A emite el 50 % de créditos y tiene 30 % de impago. ¿Qué porcentaje del total corresponde a créditos de A impagados?",
            "options": [
              "15",
              "19",
              "23"
            ],
            "answer": 1,
            "hint": "Multiplica cuota de A por impago condicionado a A.",
            "explanation": "Multiplica cuota de A por impago condicionado a A. El resultado es 15."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "A y B emiten el mismo número de créditos y tienen tasas de impago 20 % y 10 %. Dado un impago, ¿qué probabilidad porcentual hay de que proceda de A? Redondea a tres decimales.",
            "options": [
              "66,667",
              "70,667",
              "74,667"
            ],
            "answer": 1,
            "hint": "Divide la contribución de A al impago por el impago total.",
            "explanation": "Divide la contribución de A al impago por el impago total. El resultado es 66,667."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "A y B emiten el mismo número de créditos y tienen tasas de impago 30 % y 10 %. Dado un impago, ¿qué probabilidad porcentual hay de que proceda de A?",
            "options": [
              "79",
              "75",
              "83"
            ],
            "answer": 2,
            "hint": "Divide la contribución de A al impago por el impago total.",
            "explanation": "Divide la contribución de A al impago por el impago total. El resultado es 75."
          }
        ]
      },
      {
        "nombre": "Dos extracciones independientes",
        "facil": [
          {
            "story": "Se extraen al azar dos registros de facturas con reposición e independientemente. En cada extracción la probabilidad de incidencia es 49 %.",
            "prompt": "¿Qué probabilidad hay de que ambos registros presenten incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "24,01 %",
              "15,01 %",
              "20,01 %"
            ],
            "answer": 1,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Multiplica (49/100) por sí mismo. Resultado: 24,01 %."
          },
          {
            "story": "Se extraen al azar dos registros de facturas con reposición e independientemente. En cada extracción la probabilidad de incidencia es 53 %.",
            "prompt": "¿Qué probabilidad hay de que ambos registros presenten incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "19,09 %",
              "35,09 %",
              "28,09 %"
            ],
            "answer": 3,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Multiplica (53/100) por sí mismo. Resultado: 28,09 %."
          }
        ],
        "dificil": [
          {
            "story": "Se extraen al azar dos registros de facturas con reposición e independientemente. En cada extracción la probabilidad de incidencia es 49 %.",
            "prompt": "¿Qué probabilidad hay de que exactamente uno presente incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "56,98 %",
              "68,98 %",
              "49,98 %"
            ],
            "answer": 3,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Suma los dos órdenes posibles: 2 × (49/100) × (1−49/100). Resultado: 49,98 %."
          },
          {
            "story": "Se extraen al azar dos registros de facturas con reposición e independientemente. En cada extracción la probabilidad de incidencia es 53 %.",
            "prompt": "¿Qué probabilidad hay de que exactamente uno presente incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "56,82 %",
              "45,82 %",
              "49,82 %"
            ],
            "answer": 3,
            "hint": "Distingue los posibles órdenes del resultado.",
            "explanation": "Suma los dos órdenes posibles: 2 × (53/100) × (1−53/100). Resultado: 49,82 %."
          }
        ]
      },
      {
        "nombre": "Sin reposición",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Hay 50 recibos y 20 de ellos vencidos. Se retira uno vencido. ¿Cuántos vencidos permanecen?",
            "options": [
              "19",
              "15",
              "11"
            ],
            "answer": 1,
            "hint": "Actualiza el recuento favorable.",
            "explanation": "Actualiza el recuento favorable. El resultado es 19."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Hay 50 recibos y 30 de ellos vencidos. Se retira uno vencido. ¿Cuántos vencidos permanecen?",
            "options": [
              "25",
              "29",
              "21"
            ],
            "answer": 2,
            "hint": "Actualiza el recuento favorable.",
            "explanation": "Actualiza el recuento favorable. El resultado es 29."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "De 50 recibos, 20 están vencidos. Se extraen dos al azar sin reemplazo. ¿Qué probabilidad porcentual hay de que ambos estén vencidos? Redondea a tres decimales.",
            "options": [
              "11,51",
              "15,51",
              "7,51"
            ],
            "answer": 2,
            "hint": "Tras retirar un vencido cambian ambos recuentos.",
            "explanation": "Tras retirar un vencido cambian ambos recuentos. El resultado es 15,51."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "De 50 recibos, 30 están vencidos. Se extraen dos al azar sin reemplazo. ¿Qué probabilidad porcentual hay de que ambos estén vencidos? Redondea a tres decimales.",
            "options": [
              "31,51",
              "27,51",
              "35,51"
            ],
            "answer": 3,
            "hint": "Tras retirar un vencido cambian ambos recuentos.",
            "explanation": "Tras retirar un vencido cambian ambos recuentos. El resultado es 35,51."
          }
        ]
      },
      {
        "nombre": "Muestreo con y sin reposición",
        "facil": [
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de facturas, 9 contienen incidencias.",
            "prompt": "Si el primero tenía incidencia, ¿qué probabilidad hay de que el segundo también la tenga? Redondea a dos decimales si es necesario.",
            "options": [
              "45,00 %",
              "42,11 %",
              "47,37 %"
            ],
            "answer": 2,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Quedan 8 con incidencia entre 19. Resultado: 42,11 %."
          },
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de facturas, 11 contienen incidencias.",
            "prompt": "Si el primero tenía incidencia, ¿qué probabilidad hay de que el segundo también la tenga? Redondea a dos decimales si es necesario.",
            "options": [
              "55,00 %",
              "52,63 %",
              "57,89 %"
            ],
            "answer": 2,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Quedan 10 con incidencia entre 19. Resultado: 52,63 %."
          }
        ],
        "dificil": [
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de facturas, 9 contienen incidencias.",
            "prompt": "Antes de extraerlos, ¿qué probabilidad hay de que al menos uno tenga incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "71,05 %",
              "69,75 %",
              "45,00 %"
            ],
            "answer": 1,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Resta de 1 la probabilidad de dos expedientes limpios: (11/20) × (10/19). Resultado: 71,05 %."
          },
          {
            "story": "Una auditoría selecciona sin reposición dos expedientes, con igual probabilidad para cada pareja. De 20 expedientes de facturas, 11 contienen incidencias.",
            "prompt": "Antes de extraerlos, ¿qué probabilidad hay de que al menos uno tenga incidencia? Redondea a dos decimales si es necesario.",
            "options": [
              "79,75 %",
              "55,00 %",
              "81,05 %"
            ],
            "answer": 3,
            "hint": "Actualiza la composición tras la primera extracción.",
            "explanation": "Resta de 1 la probabilidad de dos expedientes limpios: (9/20) × (8/19). Resultado: 81,05 %."
          }
        ]
      },
      {
        "nombre": "Árbol de decisión",
        "facil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 20 %. Entre los renovados, 50 % mejora el tipo. ¿Qué porcentaje se renueva y mejora?",
            "options": [
              "6",
              "10",
              "14"
            ],
            "answer": 2,
            "hint": "Multiplica probabilidades a lo largo de la rama.",
            "explanation": "Multiplica probabilidades a lo largo de la rama. El resultado es 10."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 30 %. Entre los renovados, 50 % mejora el tipo. ¿Qué porcentaje se renueva y mejora?",
            "options": [
              "11",
              "19",
              "15"
            ],
            "answer": 3,
            "hint": "Multiplica probabilidades a lo largo de la rama.",
            "explanation": "Multiplica probabilidades a lo largo de la rama. El resultado es 15."
          }
        ],
        "dificil": [
          {
            "story": "El equipo de control de gestión de una empresa sevillana revisa el expediente de marzo. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 20 %. La probabilidad de ahorrar comisiones es 50 % al renovar y 10 % al no renovar. ¿Qué porcentaje ahorra comisiones?",
            "options": [
              "14",
              "22",
              "18"
            ],
            "answer": 3,
            "hint": "Suma las probabilidades de las dos ramas que terminan en ahorro.",
            "explanation": "Suma las probabilidades de las dos ramas que terminan en ahorro. El resultado es 18."
          },
          {
            "story": "El equipo de auditoría de una cooperativa revisa el expediente de septiembre. Datos ficticios.",
            "prompt": "Un préstamo se renueva con probabilidad 30 %. La probabilidad de ahorrar comisiones es 50 % al renovar y 10 % al no renovar. ¿Qué porcentaje ahorra comisiones?",
            "options": [
              "22",
              "18",
              "26"
            ],
            "answer": 1,
            "hint": "Suma las probabilidades de las dos ramas que terminan en ahorro.",
            "explanation": "Suma las probabilidades de las dos ramas que terminan en ahorro. El resultado es 22."
          }
        ]
      },
      {
        "nombre": "Comprobación posterior de una alerta",
        "facil": [
          {
            "story": "En 1000 registros de facturas, 53 tienen errores de conciliación. Un sistema señala 49 de los casos reales y también señala 31 registros sin ese problema.",
            "prompt": "Entre los registros con el problema, ¿qué porcentaje detecta el sistema? Redondea a dos decimales si es necesario.",
            "options": [
              "92,45 %",
              "88,45 %",
              "79,45 %"
            ],
            "answer": 1,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 53 registros. De ellos, 49 cumplen la condición solicitada. Resultado: 92,45 %."
          },
          {
            "story": "En 1000 registros de facturas, 57 tienen errores de conciliación. Un sistema señala 53 de los casos reales y también señala 34 registros sin ese problema.",
            "prompt": "Entre los registros con el problema, ¿qué porcentaje detecta el sistema? Redondea a dos decimales si es necesario.",
            "options": [
              "83,98 %",
              "92,98 %",
              "79,98 %"
            ],
            "answer": 2,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 57 registros. De ellos, 53 cumplen la condición solicitada. Resultado: 92,98 %."
          }
        ],
        "dificil": [
          {
            "story": "En 1000 registros de facturas, 53 tienen errores de conciliación. Un sistema señala 49 de los casos reales y también señala 31 registros sin ese problema.",
            "prompt": "Entre los registros señalados, ¿qué porcentaje corresponde a falsas alarmas? Redondea a dos decimales si es necesario.",
            "options": [
              "34,75 %",
              "25,75 %",
              "38,75 %"
            ],
            "answer": 3,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 80 registros. De ellos, 31 cumplen la condición solicitada. Resultado: 38,75 %."
          },
          {
            "story": "En 1000 registros de facturas, 57 tienen errores de conciliación. Un sistema señala 53 de los casos reales y también señala 34 registros sin ese problema.",
            "prompt": "Entre los registros señalados, ¿qué porcentaje corresponde a falsas alarmas? Redondea a dos decimales si es necesario.",
            "options": [
              "35,08 %",
              "26,08 %",
              "39,08 %"
            ],
            "answer": 3,
            "hint": "Separa los casos reales y los registros señalados.",
            "explanation": "El grupo de referencia tiene 87 registros. De ellos, 34 cumplen la condición solicitada. Resultado: 39,08 %."
          }
        ]
      }
    ]
  }
];

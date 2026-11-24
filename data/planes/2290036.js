window.PLAN_2290036 = [
{
  "id": "fin-prob",
  "nombre": "Bloque 1 · Introducción al cálculo de probabilidades",
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
},
{
  "id": "2290036-2",
  "nombre": "Bloque 2 · Variables aleatorias unidimensionales",
  "apartados": [
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 5, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2,5",
            "2,875",
            "2,125"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 2,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 7, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,025",
            "2,975",
            "3,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 3,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 6, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 18",
            "4 / 18",
            "3 / 19"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 3. Promedia los cuadrados de ambos valores. Segundo resultado: 18."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 8, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 32",
            "4 / 33",
            "4 / 32"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 4. Promedia los cuadrados de ambos valores. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 5, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14,375",
            "10,625",
            "12,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 12,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 7, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20,825",
            "24,5",
            "28,175"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 24,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 6, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 9",
            "18 / 12",
            "18 / 9"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 18. Resta el cuadrado de la media al segundo momento. Segundo resultado: 9."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 8, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 21",
            "32 / 16",
            "37 / 16"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 32. Resta el cuadrado de la media al segundo momento. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 5, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,3125",
            "6,25",
            "7,1875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 6,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 7, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,25",
            "14,0875",
            "10,4125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 12,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 6, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 4",
            "9 / 3",
            "10 / 3"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 9. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 3."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 8, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 4",
            "18 / 4",
            "16 / 6"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 16. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,175",
            "3,825",
            "4,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 4,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,675",
            "5,5",
            "6,325"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 5,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 50",
            "5 / 51",
            "5 / 50"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 5. Promedia los cuadrados de ambos valores. Segundo resultado: 50."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 73",
            "6 / 72",
            "7 / 72"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 6. Promedia los cuadrados de ambos valores. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34,425",
            "40,5",
            "46,575"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 40,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60,5",
            "69,575",
            "51,425"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 60,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 33",
            "50 / 25",
            "58 / 25"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 50. Resta el cuadrado de la media al segundo momento. Segundo resultado: 25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 36",
            "83 / 36",
            "72 / 47"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 72. Resta el cuadrado de la media al segundo momento. Segundo resultado: 36."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20,25",
            "23,2875",
            "17,2125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 20,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34,7875",
            "25,7125",
            "30,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 30,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 5",
            "29 / 5",
            "25 / 9"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 25. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "41 / 6",
            "36 / 11",
            "36 / 6"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 36. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 13, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,525",
            "6,5",
            "7,475"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 6,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 15, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7,5",
            "8,625",
            "6,375"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 7,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 14, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 99",
            "7 / 98",
            "8 / 98"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 7. Promedia los cuadrados de ambos valores. Segundo resultado: 98."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 16, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / 128",
            "9 / 128",
            "8 / 129"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 8. Promedia los cuadrados de ambos valores. Segundo resultado: 128."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 13, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "84,5",
            "97,175",
            "71,825"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 84,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 15, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "129,375",
            "95,625",
            "112,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 112,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 14, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "98 / 49",
            "113 / 49",
            "98 / 64"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 98. Resta el cuadrado de la media al segundo momento. Segundo resultado: 49."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 16, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "147 / 64",
            "128 / 83",
            "128 / 64"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 128. Resta el cuadrado de la media al segundo momento. Segundo resultado: 64."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 13, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48,5875",
            "35,9125",
            "42,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 42,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 15, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "47,8125",
            "56,25",
            "64,6875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 56,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 14, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "56 / 7",
            "49 / 14",
            "49 / 7"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 49. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 7."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 16, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "64 / 18",
            "64 / 8",
            "74 / 8"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 64. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,5",
            "9,775",
            "7,225"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 8,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,925",
            "8,075",
            "9,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 9,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 162",
            "10 / 162",
            "9 / 163"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 9. Promedia los cuadrados de ambos valores. Segundo resultado: 162."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 200",
            "10 / 202",
            "10 / 200"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 10. Promedia los cuadrados de ambos valores. Segundo resultado: 200."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "166,175",
            "122,825",
            "144,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 144,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "153,425",
            "180,5",
            "207,575"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 180,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "186 / 81",
            "162 / 105",
            "162 / 81"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 162. Resta el cuadrado de la media al segundo momento. Segundo resultado: 81."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "200 / 130",
            "200 / 100",
            "230 / 100"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 200. Resta el cuadrado de la media al segundo momento. Segundo resultado: 100."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "61,4125",
            "72,25",
            "83,0875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 72,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "90,25",
            "103,7875",
            "76,7125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 90,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 21",
            "81 / 9",
            "93 / 9"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 81. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 9."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "100 / 10",
            "115 / 10",
            "100 / 25"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 100. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 21, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,075",
            "8,925",
            "10,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 10,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 23, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9,775",
            "11,5",
            "13,225"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 11,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 22, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 242",
            "11 / 244",
            "11 / 242"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 11. Promedia los cuadrados de ambos valores. Segundo resultado: 242."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 24, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 290",
            "12 / 288",
            "14 / 288"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 12. Promedia los cuadrados de ambos valores. Segundo resultado: 288."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 21, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "187,425",
            "220,5",
            "253,575"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 220,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 23, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "264,5",
            "304,175",
            "224,825"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 264,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 22, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "242 / 157",
            "242 / 121",
            "278 / 121"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 242. Resta el cuadrado de la media al segundo momento. Segundo resultado: 121."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 24, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "288 / 144",
            "331 / 144",
            "288 / 187"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 288. Resta el cuadrado de la media al segundo momento. Segundo resultado: 144."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 21, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "110,25",
            "126,7875",
            "93,7125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 110,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 23, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "152,0875",
            "112,4125",
            "132,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 132,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 22, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "121 / 11",
            "139 / 11",
            "121 / 29"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 121. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 11."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 24, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "166 / 12",
            "144 / 34",
            "144 / 12"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 144. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,625",
            "12,5",
            "14,375"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 12,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13,5",
            "15,525",
            "11,475"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 13,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 340",
            "13 / 338",
            "15 / 338"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 13. Promedia los cuadrados de ambos valores. Segundo resultado: 338."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 392",
            "16 / 392",
            "14 / 394"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 14. Promedia los cuadrados de ambos valores. Segundo resultado: 392."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "312,5",
            "359,375",
            "265,625"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 312,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "419,175",
            "309,825",
            "364,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 364,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "338 / 169",
            "389 / 169",
            "338 / 220"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 338. Resta el cuadrado de la media al segundo momento. Segundo resultado: 169."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "451 / 196",
            "392 / 255",
            "392 / 196"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 392. Resta el cuadrado de la media al segundo momento. Segundo resultado: 196."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "179,6875",
            "132,8125",
            "156,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 156,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "154,9125",
            "182,25",
            "209,5875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 182,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "194 / 13",
            "169 / 38",
            "169 / 13"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 169. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 13."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "196 / 43",
            "196 / 14",
            "225 / 14"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 196. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 14."
        }
      ]
    }
  ]
},
{
  "id": "2290036-3",
  "nombre": "Bloque 3 · Modelos probabilísticos univariantes",
  "apartados": [
    {
      "nombre": "¿Cuál es E(X)?",
      "facil": [
        {
          "story": "Cada una de 20 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 5."
        },
        {
          "story": "Cada una de 28 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "6",
            "7"
          ],
          "answer": 3,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 24 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 4,5",
            "7 / 4,5",
            "6 / 5,5"
          ],
          "answer": 1,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 6. Para una binomial, Var(X) = np(1−p). Segundo resultado: 4,5."
        },
        {
          "story": "Cada una de 32 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 6",
            "8 / 7",
            "8 / 6"
          ],
          "answer": 3,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 8. Para una binomial, Var(X) = np(1−p). Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Var(X)?",
      "facil": [
        {
          "story": "Cada una de 20 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,3125",
            "3,1875",
            "3,75"
          ],
          "answer": 3,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 3,75."
        },
        {
          "story": "Cada una de 28 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,4625",
            "5,25",
            "6,0375"
          ],
          "answer": 2,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 5,25."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 24 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,175 / 18",
            "4,5 / 18,675",
            "4,5 / 18"
          ],
          "answer": 3,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 4,5. Multiplica el número de visitas por 1−p. Segundo resultado: 18."
        },
        {
          "story": "Cada una de 32 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 25",
            "6 / 24",
            "7 / 24"
          ],
          "answer": 2,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 6. Multiplica el número de visitas por 1−p. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántas visitas sin compra se esperan?",
      "facil": [
        {
          "story": "Cada una de 20 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "17"
          ],
          "answer": 2,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 15."
        },
        {
          "story": "Cada una de 28 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "24",
            "18"
          ],
          "answer": 1,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 24 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 9",
            "18 / 6",
            "21 / 6"
          ],
          "answer": 2,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 18. Para una binomial, E(X) = np. Segundo resultado: 6."
        },
        {
          "story": "Cada una de 32 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 8",
            "28 / 8",
            "24 / 12"
          ],
          "answer": 1,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 24. Para una binomial, E(X) = np. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,175",
            "3,825",
            "4,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 4,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,675",
            "5,5",
            "6,325"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 5,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 50",
            "5 / 51",
            "5 / 50"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 5. Promedia los cuadrados de ambos valores. Segundo resultado: 50."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 73",
            "6 / 72",
            "7 / 72"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 6. Promedia los cuadrados de ambos valores. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34,425",
            "40,5",
            "46,575"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 40,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60,5",
            "69,575",
            "51,425"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 60,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 33",
            "50 / 25",
            "58 / 25"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 50. Resta el cuadrado de la media al segundo momento. Segundo resultado: 25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 36",
            "83 / 36",
            "72 / 47"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 72. Resta el cuadrado de la media al segundo momento. Segundo resultado: 36."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 9, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20,25",
            "23,2875",
            "17,2125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 20,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 11, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34,7875",
            "25,7125",
            "30,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 30,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 10, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 5",
            "29 / 5",
            "25 / 9"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 25. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 12, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "41 / 6",
            "36 / 11",
            "36 / 6"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 36. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Cuál es E(X)?",
      "facil": [
        {
          "story": "Cada una de 52 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 13."
        },
        {
          "story": "Cada una de 60 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 56 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 12,5",
            "14 / 10,5",
            "16 / 10,5"
          ],
          "answer": 2,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 14. Para una binomial, Var(X) = np(1−p). Segundo resultado: 10,5."
        },
        {
          "story": "Cada una de 64 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 12",
            "18 / 12",
            "16 / 14"
          ],
          "answer": 1,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 16. Para una binomial, Var(X) = np(1−p). Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Var(X)?",
      "facil": [
        {
          "story": "Cada una de 52 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9,75",
            "11,2125",
            "8,2875"
          ],
          "answer": 1,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 9,75."
        },
        {
          "story": "Cada una de 60 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,9375",
            "9,5625",
            "11,25"
          ],
          "answer": 3,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 11,25."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 56 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,5 / 42",
            "12,075 / 42",
            "10,5 / 43,575"
          ],
          "answer": 1,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 10,5. Multiplica el número de visitas por 1−p. Segundo resultado: 42."
        },
        {
          "story": "Cada una de 64 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 48",
            "12 / 50",
            "12 / 48"
          ],
          "answer": 3,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 12. Multiplica el número de visitas por 1−p. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas visitas sin compra se esperan?",
      "facil": [
        {
          "story": "Cada una de 52 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "45",
            "33",
            "39"
          ],
          "answer": 3,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 39."
        },
        {
          "story": "Cada una de 60 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "38",
            "45",
            "52"
          ],
          "answer": 2,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 45."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 56 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 14",
            "42 / 20",
            "42 / 14"
          ],
          "answer": 3,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 42. Para una binomial, E(X) = np. Segundo resultado: 14."
        },
        {
          "story": "Cada una de 64 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 23",
            "48 / 16",
            "55 / 16"
          ],
          "answer": 2,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 48. Para una binomial, E(X) = np. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,5",
            "9,775",
            "7,225"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 8,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,925",
            "8,075",
            "9,5"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 9,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 162",
            "10 / 162",
            "9 / 163"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 9. Promedia los cuadrados de ambos valores. Segundo resultado: 162."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 200",
            "10 / 202",
            "10 / 200"
          ],
          "answer": 3,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 10. Promedia los cuadrados de ambos valores. Segundo resultado: 200."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "166,175",
            "122,825",
            "144,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 144,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "153,425",
            "180,5",
            "207,575"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 180,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "186 / 81",
            "162 / 105",
            "162 / 81"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 162. Resta el cuadrado de la media al segundo momento. Segundo resultado: 81."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "200 / 130",
            "200 / 100",
            "230 / 100"
          ],
          "answer": 2,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 200. Resta el cuadrado de la media al segundo momento. Segundo resultado: 100."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 17, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "61,4125",
            "72,25",
            "83,0875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 72,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 19, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "90,25",
            "103,7875",
            "76,7125"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 90,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 18, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 21",
            "81 / 9",
            "93 / 9"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 81. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 9."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 20, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "100 / 10",
            "115 / 10",
            "100 / 25"
          ],
          "answer": 1,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 100. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es E(X)?",
      "facil": [
        {
          "story": "Cada una de 84 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 21."
        },
        {
          "story": "Cada una de 92 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 88 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 16,5",
            "22 / 19,5",
            "22 / 16,5"
          ],
          "answer": 3,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 22. Para una binomial, Var(X) = np(1−p). Segundo resultado: 16,5."
        },
        {
          "story": "Cada una de 96 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es E(X)? ¿Cuál es Var(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 22",
            "24 / 18",
            "28 / 18"
          ],
          "answer": 2,
          "hint": "Para una binomial, E(X) = np.",
          "explanation": "Para una binomial, E(X) = np. Resultado: 24. Para una binomial, Var(X) = np(1−p). Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Var(X)?",
      "facil": [
        {
          "story": "Cada una de 84 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13,3875",
            "15,75",
            "18,1125"
          ],
          "answer": 2,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 15,75."
        },
        {
          "story": "Cada una de 92 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17,25",
            "19,8375",
            "14,6625"
          ],
          "answer": 1,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 17,25."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 88 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16,5 / 68,475",
            "16,5 / 66",
            "18,975 / 66"
          ],
          "answer": 2,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 16,5. Multiplica el número de visitas por 1−p. Segundo resultado: 66."
        },
        {
          "story": "Cada una de 96 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuál es Var(X)? ¿Cuántas visitas sin compra se esperan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 72",
            "21 / 72",
            "18 / 75"
          ],
          "answer": 1,
          "hint": "Para una binomial, Var(X) = np(1−p).",
          "explanation": "Para una binomial, Var(X) = np(1−p). Resultado: 18. Multiplica el número de visitas por 1−p. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuántas visitas sin compra se esperan?",
      "facil": [
        {
          "story": "Cada una de 84 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "63",
            "72",
            "54"
          ],
          "answer": 1,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 63."
        },
        {
          "story": "Cada una de 92 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "79",
            "59",
            "69"
          ],
          "answer": 3,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 69."
        }
      ],
      "dificil": [
        {
          "story": "Cada una de 88 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "66 / 22",
            "76 / 22",
            "66 / 32"
          ],
          "answer": 1,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 66. Para una binomial, E(X) = np. Segundo resultado: 22."
        },
        {
          "story": "Cada una de 96 visitas independientes compra con probabilidad 0,25. X cuenta las compras.",
          "prompt": "¿Cuántas visitas sin compra se esperan? ¿Cuál es E(X)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "83 / 24",
            "72 / 35",
            "72 / 24"
          ],
          "answer": 3,
          "hint": "Multiplica el número de visitas por 1−p.",
          "explanation": "Multiplica el número de visitas por 1−p. Resultado: 72. Para una binomial, E(X) = np. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué pérdida media se espera?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,625",
            "12,5",
            "14,375"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 12,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13,5",
            "15,525",
            "11,475"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 13,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 340",
            "13 / 338",
            "15 / 338"
          ],
          "answer": 2,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 13. Promedia los cuadrados de ambos valores. Segundo resultado: 338."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Qué pérdida media se espera? ¿Cuál es el segundo momento respecto al origen? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 392",
            "16 / 392",
            "14 / 394"
          ],
          "answer": 1,
          "hint": "Suma cada valor multiplicado por su probabilidad.",
          "explanation": "Suma cada valor multiplicado por su probabilidad. Resultado: 14. Promedia los cuadrados de ambos valores. Segundo resultado: 392."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo momento respecto al origen?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "312,5",
            "359,375",
            "265,625"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 312,5."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? Redondea a cuatro decimales si es necesario.",
          "options": [
            "419,175",
            "309,825",
            "364,5"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 364,5."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "338 / 169",
            "389 / 169",
            "338 / 220"
          ],
          "answer": 1,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 338. Resta el cuadrado de la media al segundo momento. Segundo resultado: 169."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es el segundo momento respecto al origen? ¿Cuál es la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "451 / 196",
            "392 / 255",
            "392 / 196"
          ],
          "answer": 3,
          "hint": "Promedia los cuadrados de ambos valores.",
          "explanation": "Promedia los cuadrados de ambos valores. Resultado: 392. Resta el cuadrado de la media al segundo momento. Segundo resultado: 196."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza?",
      "facil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 25, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "179,6875",
            "132,8125",
            "156,25"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 156,25."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 27, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "154,9125",
            "182,25",
            "209,5875"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 182,25."
        }
      ],
      "dificil": [
        {
          "story": "El número diario de pedidos perdidos vale 0 o 26, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "194 / 13",
            "169 / 38",
            "169 / 13"
          ],
          "answer": 3,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 169. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 13."
        },
        {
          "story": "El número diario de pedidos perdidos vale 0 o 28, con probabilidad 0,5 cada uno.",
          "prompt": "¿Cuál es la varianza? ¿Qué pérdida media se espera? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "196 / 43",
            "196 / 14",
            "225 / 14"
          ],
          "answer": 2,
          "hint": "Resta el cuadrado de la media al segundo momento.",
          "explanation": "Resta el cuadrado de la media al segundo momento. Resultado: 196. Suma cada valor multiplicado por su probabilidad. Segundo resultado: 14."
        }
      ]
    }
  ]
},
{
  "id": "2290036-4",
  "nombre": "Bloque 4 · Vectores aleatorios",
  "apartados": [
    {
      "nombre": "¿Cuál es la varianza de X + Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 20 y 45 y covarianza 5.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "75",
            "86",
            "64"
          ],
          "answer": 1,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 75."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 28 y 63 y covarianza 7.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "121",
            "89",
            "105"
          ],
          "answer": 3,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 105."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 24 y 54 y covarianza 6.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "90 / 66",
            "104 / 66",
            "90 / 80"
          ],
          "answer": 1,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 90. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 66."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 32 y 72 y covarianza 8.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "138 / 88",
            "120 / 106",
            "120 / 88"
          ],
          "answer": 3,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 120. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 88."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza de X − Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 20 y 45 y covarianza 5.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "63",
            "47",
            "55"
          ],
          "answer": 3,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 55."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 28 y 63 y covarianza 7.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "65",
            "77",
            "89"
          ],
          "answer": 2,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 77."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 24 y 54 y covarianza 6.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "76 / 12",
            "66 / 22",
            "66 / 12"
          ],
          "answer": 3,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 66. La covarianza es lineal en cada argumento. Segundo resultado: 12."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 32 y 72 y covarianza 8.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "88 / 29",
            "88 / 16",
            "101 / 16"
          ],
          "answer": 2,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 88. La covarianza es lineal en cada argumento. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Cov(2X, Y)?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 20 y 45 y covarianza 5.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 10."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 28 y 63 y covarianza 7.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "12"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 24 y 54 y covarianza 6.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 92",
            "12 / 90",
            "14 / 90"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 12. Suma las dos varianzas y dos covarianzas. Segundo resultado: 90."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 32 y 72 y covarianza 8.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 120",
            "18 / 120",
            "16 / 122"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 16. Suma las dos varianzas y dos covarianzas. Segundo resultado: 120."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 70,5",
            "23 / 67,5",
            "26 / 67,5"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 67,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 81",
            "26 / 81",
            "23 / 84"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 81."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60,75",
            "69,8625",
            "51,6375"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 60,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "85,3875",
            "63,1125",
            "74,25"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 74,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "67,5 / 0,5",
            "77,625 / 0,5",
            "67,5 / 10,625"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 67,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "93 / 0,5",
            "81 / 12,5",
            "81 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 81. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza de X + Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 52 y 117 y covarianza 13.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "166",
            "195",
            "224"
          ],
          "answer": 2,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 195."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 60 y 135 y covarianza 15.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "225",
            "259",
            "191"
          ],
          "answer": 1,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 225."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 56 y 126 y covarianza 14.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "210 / 186",
            "210 / 154",
            "242 / 154"
          ],
          "answer": 2,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 210. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 154."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 64 y 144 y covarianza 16.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "240 / 176",
            "276 / 176",
            "240 / 212"
          ],
          "answer": 1,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 240. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 176."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza de X − Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 52 y 117 y covarianza 13.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "143",
            "164",
            "122"
          ],
          "answer": 1,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 143."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 60 y 135 y covarianza 15.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "190",
            "140",
            "165"
          ],
          "answer": 3,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 165."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 56 y 126 y covarianza 14.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "154 / 28",
            "177 / 28",
            "154 / 51"
          ],
          "answer": 1,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 154. La covarianza es lineal en cada argumento. Segundo resultado: 28."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 64 y 144 y covarianza 16.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "202 / 32",
            "176 / 58",
            "176 / 32"
          ],
          "answer": 3,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 176. La covarianza es lineal en cada argumento. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Cov(2X, Y)?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 52 y 117 y covarianza 13.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "22",
            "26"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 26."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 60 y 135 y covarianza 15.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "30",
            "35"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 56 y 126 y covarianza 14.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 210",
            "28 / 214",
            "28 / 210"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 28. Suma las dos varianzas y dos covarianzas. Segundo resultado: 210."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 64 y 144 y covarianza 16.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 245",
            "32 / 240",
            "37 / 240"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 32. Suma las dos varianzas y dos covarianzas. Segundo resultado: 240."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 121,5",
            "23 / 124,5",
            "23 / 121,5"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 121,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 138",
            "23 / 135",
            "26 / 135"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 135."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97,5375",
            "114,75",
            "131,9625"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 114,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "128,25",
            "147,4875",
            "109,0125"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 128,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "121,5 / 18,725",
            "121,5 / 0,5",
            "139,725 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 121,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "135 / 0,5",
            "155 / 0,5",
            "135 / 20,5"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 135. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza de X + Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 84 y 189 y covarianza 21.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "362",
            "268",
            "315"
          ],
          "answer": 3,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 315."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 92 y 207 y covarianza 23.",
          "prompt": "¿Cuál es la varianza de X + Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "293",
            "345",
            "397"
          ],
          "answer": 2,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 345."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 88 y 198 y covarianza 22.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "380 / 242",
            "330 / 292",
            "330 / 242"
          ],
          "answer": 3,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 330. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 242."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 96 y 216 y covarianza 24.",
          "prompt": "¿Cuál es la varianza de X + Y? ¿Cuál es la varianza de X − Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "360 / 318",
            "360 / 264",
            "414 / 264"
          ],
          "answer": 2,
          "hint": "Suma las dos varianzas y dos covarianzas.",
          "explanation": "Suma las dos varianzas y dos covarianzas. Resultado: 360. Resta dos covarianzas a la suma de varianzas. Segundo resultado: 264."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza de X − Y?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 84 y 189 y covarianza 21.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "196",
            "231",
            "266"
          ],
          "answer": 2,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 231."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 92 y 207 y covarianza 23.",
          "prompt": "¿Cuál es la varianza de X − Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "253",
            "291",
            "215"
          ],
          "answer": 1,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 253."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 88 y 198 y covarianza 22.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "242 / 80",
            "242 / 44",
            "278 / 44"
          ],
          "answer": 2,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 242. La covarianza es lineal en cada argumento. Segundo resultado: 44."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 96 y 216 y covarianza 24.",
          "prompt": "¿Cuál es la varianza de X − Y? ¿Cuál es Cov(2X, Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "264 / 48",
            "304 / 48",
            "264 / 88"
          ],
          "answer": 1,
          "hint": "Resta dos covarianzas a la suma de varianzas.",
          "explanation": "Resta dos covarianzas a la suma de varianzas. Resultado: 264. La covarianza es lineal en cada argumento. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuál es Cov(2X, Y)?",
      "facil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 84 y 189 y covarianza 21.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "42",
            "48",
            "36"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 42."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 92 y 207 y covarianza 23.",
          "prompt": "¿Cuál es Cov(2X, Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "53",
            "39",
            "46"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "Dos canales registran ventas X e Y con varianzas 88 y 198 y covarianza 22.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 330",
            "51 / 330",
            "44 / 337"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 44. Suma las dos varianzas y dos covarianzas. Segundo resultado: 330."
        },
        {
          "story": "Dos canales registran ventas X e Y con varianzas 96 y 216 y covarianza 24.",
          "prompt": "¿Cuál es Cov(2X, Y)? ¿Cuál es la varianza de X + Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "55 / 360",
            "48 / 367",
            "48 / 360"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal en cada argumento.",
          "explanation": "La covarianza es lineal en cada argumento. Resultado: 48. Suma las dos varianzas y dos covarianzas. Segundo resultado: 360."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 175,5",
            "26 / 175,5",
            "23 / 178,5"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 175,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 189",
            "23 / 192",
            "23 / 189"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 189."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "194,0625",
            "143,4375",
            "168,75"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 168,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "154,9125",
            "182,25",
            "209,5875"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 182,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "201,825 / 0,5",
            "175,5 / 26,825",
            "175,5 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 175,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "189 / 28,5",
            "189 / 0,5",
            "217 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 189. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    }
  ]
},
{
  "id": "2290036-5",
  "nombre": "Bloque 5 · Modelos probabilísticos multidimensionales",
  "apartados": [
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 20 y 45 y covarianza 15.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 28 y 63 y covarianza 21.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 24 y 54 y covarianza 18.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 32 y 72 y covarianza 24.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 20 y 45 y covarianza 15.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 28 y 63 y covarianza 21.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 24 y 54 y covarianza 18.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 40,5",
            "23 / 43,5",
            "23 / 40,5"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 40,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 32 y 72 y covarianza 24.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 57",
            "23 / 54",
            "26 / 54"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 54."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 20 y 45 y covarianza 15.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28,6875",
            "33,75",
            "38,8125"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 33,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 28 y 63 y covarianza 21.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "47,25",
            "54,3375",
            "40,1625"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 47,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 24 y 54 y covarianza 18.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "40,5 / 6,575",
            "40,5 / 0,5",
            "46,575 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 40,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 32 y 72 y covarianza 24.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "54 / 0,5",
            "62 / 0,5",
            "54 / 8,5"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 54. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 70,5",
            "23 / 67,5",
            "26 / 67,5"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 67,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 81",
            "26 / 81",
            "23 / 84"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 81."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 36 y 81 y covarianza 27.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60,75",
            "69,8625",
            "51,6375"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 60,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 44 y 99 y covarianza 33.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "85,3875",
            "63,1125",
            "74,25"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 74,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 40 y 90 y covarianza 30.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "67,5 / 0,5",
            "77,625 / 0,5",
            "67,5 / 10,625"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 67,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 48 y 108 y covarianza 36.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "93 / 0,5",
            "81 / 12,5",
            "81 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 81. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 52 y 117 y covarianza 39.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 60 y 135 y covarianza 45.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 56 y 126 y covarianza 42.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 64 y 144 y covarianza 48.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 52 y 117 y covarianza 39.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 60 y 135 y covarianza 45.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 56 y 126 y covarianza 42.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 94,5",
            "26 / 94,5",
            "23 / 97,5"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 94,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 64 y 144 y covarianza 48.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 108",
            "23 / 111",
            "23 / 108"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 108."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 52 y 117 y covarianza 39.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "100,9125",
            "74,5875",
            "87,75"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 87,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 60 y 135 y covarianza 45.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "86,0625",
            "101,25",
            "116,4375"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 101,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 56 y 126 y covarianza 42.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "108,675 / 0,5",
            "94,5 / 14,675",
            "94,5 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 94,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 64 y 144 y covarianza 48.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "108 / 16,5",
            "108 / 0,5",
            "124 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 108. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 121,5",
            "23 / 124,5",
            "23 / 121,5"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 121,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 138",
            "23 / 135",
            "26 / 135"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 135."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 68 y 153 y covarianza 51.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97,5375",
            "114,75",
            "131,9625"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 114,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 76 y 171 y covarianza 57.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "128,25",
            "147,4875",
            "109,0125"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 128,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 72 y 162 y covarianza 54.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "121,5 / 18,725",
            "121,5 / 0,5",
            "139,725 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 121,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 80 y 180 y covarianza 60.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "135 / 0,5",
            "155 / 0,5",
            "135 / 20,5"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 135. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 84 y 189 y covarianza 63.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575",
            "0,425",
            "0,5"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 92 y 207 y covarianza 69.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 88 y 198 y covarianza 66.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,575 / 23",
            "0,5 / 23,075",
            "0,5 / 23"
          ],
          "answer": 3,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 96 y 216 y covarianza 72.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 84 y 189 y covarianza 63.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 92 y 207 y covarianza 69.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 88 y 198 y covarianza 66.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 151,5",
            "23 / 148,5",
            "26 / 148,5"
          ],
          "answer": 2,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 148,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 96 y 216 y covarianza 72.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 162",
            "26 / 162",
            "23 / 165"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 162."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 84 y 189 y covarianza 63.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "141,75",
            "163,0125",
            "120,4875"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 141,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 92 y 207 y covarianza 69.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "178,5375",
            "131,9625",
            "155,25"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 155,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 88 y 198 y covarianza 66.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "148,5 / 0,5",
            "170,775 / 0,5",
            "148,5 / 22,775"
          ],
          "answer": 1,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 148,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 96 y 216 y covarianza 72.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "186 / 0,5",
            "162 / 24,5",
            "162 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 162. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es su correlación?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,425",
            "0,5",
            "0,575"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es su correlación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5",
            "0,575",
            "0,425"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23,075",
            "0,5 / 23",
            "0,575 / 23"
          ],
          "answer": 2,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es su correlación? ¿Cuál es la media condicionada de Y si X = 14? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5 / 23",
            "0,575 / 23",
            "0,5 / 23,075"
          ],
          "answer": 1,
          "hint": "Divide la covarianza por el producto de desviaciones.",
          "explanation": "Divide la covarianza por el producto de desviaciones. Resultado: 0,5. Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media condicionada de Y si X = 14?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 175,5",
            "26 / 175,5",
            "23 / 178,5"
          ],
          "answer": 1,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 175,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es la media condicionada de Y si X = 14? ¿Cuál es la varianza condicionada de Y dado X? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 189",
            "23 / 192",
            "23 / 189"
          ],
          "answer": 3,
          "hint": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media.",
          "explanation": "Suma a la media de Y la pendiente condicional por la desviación de X respecto a su media. Resultado: 23. En la normal bivariante se multiplica Var(Y) por 1−ρ². Segundo resultado: 189."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la varianza condicionada de Y dado X?",
      "facil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 100 y 225 y covarianza 75.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "194,0625",
            "143,4375",
            "168,75"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 168,75."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 108 y 243 y covarianza 81.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? Redondea a cuatro decimales si es necesario.",
          "options": [
            "154,9125",
            "182,25",
            "209,5875"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 182,25."
        }
      ],
      "dificil": [
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 104 y 234 y covarianza 78.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "201,825 / 0,5",
            "175,5 / 26,825",
            "175,5 / 0,5"
          ],
          "answer": 3,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 175,5. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        },
        {
          "story": "Un vector normal bivariante tiene medias 10 y 20, varianzas 112 y 252 y covarianza 84.",
          "prompt": "¿Cuál es la varianza condicionada de Y dado X? ¿Cuál es su correlación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "189 / 28,5",
            "189 / 0,5",
            "217 / 0,5"
          ],
          "answer": 2,
          "hint": "En la normal bivariante se multiplica Var(Y) por 1−ρ².",
          "explanation": "En la normal bivariante se multiplica Var(Y) por 1−ρ². Resultado: 189. Divide la covarianza por el producto de desviaciones. Segundo resultado: 0,5."
        }
      ]
    }
  ]
},
{
  "id": "2290036-6",
  "nombre": "Bloque 6 · Introducción a la inferencia estadística",
  "apartados": [
    {
      "nombre": "¿Cuál es el error estándar de la media?",
      "facil": [
        {
          "story": "Se toman 25 mediciones independientes de una población con desviación típica conocida 10. La media muestral es 20. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        },
        {
          "story": "Se toman 49 mediciones independientes de una población con desviación típica conocida 14. La media muestral es 28. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 36 mediciones independientes de una población con desviación típica conocida 12. La media muestral es 24. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3,92",
            "3 / 3,92",
            "2 / 4,92"
          ],
          "answer": 1,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        },
        {
          "story": "Se toman 64 mediciones independientes de una población con desviación típica conocida 16. La media muestral es 32. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 3,92",
            "2 / 4,92",
            "2 / 3,92"
          ],
          "answer": 3,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el margen de error del intervalo normal del 95 %?",
      "facil": [
        {
          "story": "Se toman 25 mediciones independientes de una población con desviación típica conocida 10. La media muestral es 20. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,508",
            "3,332",
            "3,92"
          ],
          "answer": 3,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        },
        {
          "story": "Se toman 49 mediciones independientes de una población con desviación típica conocida 14. La media muestral es 28. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,332",
            "3,92",
            "4,508"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 36 mediciones independientes de una población con desviación típica conocida 12. La media muestral es 24. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,508 / 20,08",
            "3,92 / 20,668",
            "3,92 / 20,08"
          ],
          "answer": 3,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 20,08."
        },
        {
          "story": "Se toman 64 mediciones independientes de una población con desviación típica conocida 16. La media muestral es 32. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 28,668",
            "3,92 / 28,08",
            "4,508 / 28,08"
          ],
          "answer": 2,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 28,08."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el extremo inferior del intervalo?",
      "facil": [
        {
          "story": "Se toman 25 mediciones independientes de una población con desviación típica conocida 10. La media muestral es 20. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13,668",
            "16,08",
            "18,492"
          ],
          "answer": 2,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 16,08."
        },
        {
          "story": "Se toman 49 mediciones independientes de una población con desviación típica conocida 14. La media muestral es 28. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24,08",
            "27,692",
            "20,468"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 24,08."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 36 mediciones independientes de una población con desviación típica conocida 12. La media muestral es 24. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20,08 / 5,012",
            "20,08 / 2",
            "23,092 / 2"
          ],
          "answer": 2,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 20,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        },
        {
          "story": "Se toman 64 mediciones independientes de una población con desviación típica conocida 16. La media muestral es 32. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28,08 / 2",
            "32,292 / 2",
            "28,08 / 6,212"
          ],
          "answer": 1,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 28,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 0,04",
            "5 / 0,04",
            "4 / 1,04"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09",
            "-0,01",
            "0,04"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09 / 2",
            "0,04 / 2,05",
            "0,04 / 2"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el error estándar de la media?",
      "facil": [
        {
          "story": "Se toman 169 mediciones independientes de una población con desviación típica conocida 26. La media muestral es 52. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        },
        {
          "story": "Se toman 225 mediciones independientes de una población con desviación típica conocida 30. La media muestral es 60. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 196 mediciones independientes de una población con desviación típica conocida 28. La media muestral es 56. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4,92",
            "2 / 3,92",
            "3 / 3,92"
          ],
          "answer": 2,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        },
        {
          "story": "Se toman 256 mediciones independientes de una población con desviación típica conocida 32. La media muestral es 64. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el error estándar de la media? ¿Cuál es el margen de error del intervalo normal del 95 %? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3,92",
            "3 / 3,92",
            "2 / 4,92"
          ],
          "answer": 1,
          "hint": "Divide la desviación poblacional por la raíz de N.",
          "explanation": "Divide la desviación poblacional por la raíz de N. Resultado: 2. Multiplica el error estándar por 1,96. Segundo resultado: 3,92."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el margen de error del intervalo normal del 95 %?",
      "facil": [
        {
          "story": "Se toman 169 mediciones independientes de una población con desviación típica conocida 26. La media muestral es 52. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92",
            "4,508",
            "3,332"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        },
        {
          "story": "Se toman 225 mediciones independientes de una población con desviación típica conocida 30. La media muestral es 60. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,508",
            "3,332",
            "3,92"
          ],
          "answer": 3,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 196 mediciones independientes de una población con desviación típica conocida 28. La media muestral es 56. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,92 / 52,08",
            "4,508 / 52,08",
            "3,92 / 52,668"
          ],
          "answer": 1,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 52,08."
        },
        {
          "story": "Se toman 256 mediciones independientes de una población con desviación típica conocida 32. La media muestral es 64. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el margen de error del intervalo normal del 95 %? ¿Cuál es el extremo inferior del intervalo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4,508 / 60,08",
            "3,92 / 60,668",
            "3,92 / 60,08"
          ],
          "answer": 3,
          "hint": "Multiplica el error estándar por 1,96.",
          "explanation": "Multiplica el error estándar por 1,96. Resultado: 3,92. Resta el margen de error a la media. Segundo resultado: 60,08."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el extremo inferior del intervalo?",
      "facil": [
        {
          "story": "Se toman 169 mediciones independientes de una población con desviación típica conocida 26. La media muestral es 52. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "55,292",
            "40,868",
            "48,08"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 48,08."
        },
        {
          "story": "Se toman 225 mediciones independientes de una población con desviación típica conocida 30. La media muestral es 60. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "47,668",
            "56,08",
            "64,492"
          ],
          "answer": 2,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 56,08."
        }
      ],
      "dificil": [
        {
          "story": "Se toman 196 mediciones independientes de una población con desviación típica conocida 28. La media muestral es 56. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "59,892 / 2",
            "52,08 / 9,812",
            "52,08 / 2"
          ],
          "answer": 3,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 52,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        },
        {
          "story": "Se toman 256 mediciones independientes de una población con desviación típica conocida 32. La media muestral es 64. Usa 1,96 como valor crítico.",
          "prompt": "¿Cuál es el extremo inferior del intervalo? ¿Cuál es el error estándar de la media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60,08 / 11,012",
            "60,08 / 2",
            "69,092 / 2"
          ],
          "answer": 2,
          "hint": "Resta el margen de error a la media.",
          "explanation": "Resta el margen de error a la media. Resultado: 60,08. Divide la desviación poblacional por la raíz de N. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 0,04",
            "4 / 1,04",
            "4 / 0,04"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2,05",
            "0,04 / 2",
            "0,09 / 2"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
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
  "id": "2290036-7",
  "nombre": "Bloque 7 · Teoría y métodos de estimación puntual",
  "apartados": [
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 4, 5 y 9.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 6."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 6, 7 y 11.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "7",
            "8"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 8."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 5, 6 y 10.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 14",
            "8 / 14",
            "7 / 15"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 7. Multiplica por dos la tasa estimada. Segundo resultado: 14."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 7, 8 y 12.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 18",
            "9 / 19",
            "9 / 18"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 9. Multiplica por dos la tasa estimada. Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 4, 5 y 9.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 12."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 6, 7 y 11.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "18"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 16."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 5, 6 y 10.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 5,25",
            "14 / 7,25",
            "14 / 5,25"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 14. Incluye el cero en el tamaño de muestra. Segundo resultado: 5,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 7, 8 y 12.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 9,75",
            "18 / 6,75",
            "21 / 6,75"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 18. Incluye el cero en el tamaño de muestra. Segundo resultado: 6,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 4, 5 y 9.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,825",
            "4,5",
            "5,175"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 4,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 6, 7 y 11.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 5, 6 y 10.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,25 / 7,7875",
            "5,25 / 7",
            "6,0375 / 7"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 5,25. La media muestral estima la tasa de Poisson. Segundo resultado: 7."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 7, 8 y 12.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6,75 / 9",
            "7,7625 / 9",
            "6,75 / 10,0125"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 6,75. La media muestral estima la tasa de Poisson. Segundo resultado: 9."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 8, 9 y 13.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 10."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 10, 11 y 15.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 9, 10 y 14.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 22",
            "11 / 24",
            "11 / 22"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 11. Multiplica por dos la tasa estimada. Segundo resultado: 22."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 11, 12 y 16.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 28",
            "13 / 26",
            "15 / 26"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 13. Multiplica por dos la tasa estimada. Segundo resultado: 26."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 8, 9 y 13.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "23"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 20."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 10, 11 y 15.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "28",
            "20"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 24."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 9, 10 y 14.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "22 / 11,25",
            "22 / 8,25",
            "25 / 8,25"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 22. Incluye el cero en el tamaño de muestra. Segundo resultado: 8,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 11, 12 y 16.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 9,75",
            "30 / 9,75",
            "26 / 13,75"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 26. Incluye el cero en el tamaño de muestra. Segundo resultado: 9,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 8, 9 y 13.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7,5",
            "8,625",
            "6,375"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 7,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 10, 11 y 15.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "8",
            "9"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 9."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 9, 10 y 14.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,25 / 11",
            "9,4875 / 11",
            "8,25 / 12,2375"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 8,25. La media muestral estima la tasa de Poisson. Segundo resultado: 11."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 11, 12 y 16.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "11,2125 / 13",
            "9,75 / 14,4625",
            "9,75 / 13"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 9,75. La media muestral estima la tasa de Poisson. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 12, 13 y 17.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 14."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 14, 15 y 19.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "16",
            "18",
            "14"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 16."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 13, 14 y 18.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / 32",
            "15 / 30",
            "17 / 30"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 15. Multiplica por dos la tasa estimada. Segundo resultado: 30."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 15, 16 y 20.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "17 / 34",
            "20 / 34",
            "17 / 37"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 17. Multiplica por dos la tasa estimada. Segundo resultado: 34."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 12, 13 y 17.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28",
            "32",
            "24"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 28."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 14, 15 y 19.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "27",
            "32"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 32."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 13, 14 y 18.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 11,25",
            "35 / 11,25",
            "30 / 16,25"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 30. Incluye el cero en el tamaño de muestra. Segundo resultado: 11,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 15, 16 y 20.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "39 / 12,75",
            "34 / 17,75",
            "34 / 12,75"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 34. Incluye el cero en el tamaño de muestra. Segundo resultado: 12,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 12, 13 y 17.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,075",
            "8,925",
            "10,5"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 10,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 14, 15 y 19.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 13, 14 y 18.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,9375 / 15",
            "11,25 / 16,6875",
            "11,25 / 15"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 11,25. La media muestral estima la tasa de Poisson. Segundo resultado: 15."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 15, 16 y 20.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,75 / 18,9125",
            "12,75 / 17",
            "14,6625 / 17"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 12,75. La media muestral estima la tasa de Poisson. Segundo resultado: 17."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 16, 17 y 21.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "15"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 18."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 18, 19 y 23.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "17",
            "20"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 17, 18 y 22.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "19 / 38",
            "22 / 38",
            "19 / 41"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 19. Multiplica por dos la tasa estimada. Segundo resultado: 38."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 19, 20 y 24.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 42",
            "21 / 45",
            "21 / 42"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 21. Multiplica por dos la tasa estimada. Segundo resultado: 42."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 16, 17 y 21.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "41",
            "31",
            "36"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 36."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 18, 19 y 23.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34",
            "40",
            "46"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 40."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 17, 18 y 22.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 14,25",
            "38 / 20,25",
            "38 / 14,25"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 38. Incluye el cero en el tamaño de muestra. Segundo resultado: 14,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 19, 20 y 24.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "42 / 21,75",
            "42 / 15,75",
            "48 / 15,75"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 42. Incluye el cero en el tamaño de muestra. Segundo resultado: 15,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 16, 17 y 21.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11,475",
            "13,5",
            "15,525"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 13,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 18, 19 y 23.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 17, 18 y 22.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14,25 / 21,1375",
            "14,25 / 19",
            "16,3875 / 19"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 14,25. La media muestral estima la tasa de Poisson. Segundo resultado: 19."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 19, 20 y 24.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15,75 / 21",
            "18,1125 / 21",
            "15,75 / 23,3625"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 15,75. La media muestral estima la tasa de Poisson. Segundo resultado: 21."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 20, 21 y 25.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "19",
            "22"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 22."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 22, 23 y 27.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "24",
            "28"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 24."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 21, 22 y 26.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 46",
            "23 / 49",
            "23 / 46"
          ],
          "answer": 3,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 23. Multiplica por dos la tasa estimada. Segundo resultado: 46."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 23, 24 y 28.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 54",
            "25 / 50",
            "29 / 50"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 25. Multiplica por dos la tasa estimada. Segundo resultado: 50."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 20, 21 y 25.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "44",
            "51"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 44."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 22, 23 y 27.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48",
            "55",
            "41"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 48."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 21, 22 y 26.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 24,25",
            "46 / 17,25",
            "53 / 17,25"
          ],
          "answer": 2,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 46. Incluye el cero en el tamaño de muestra. Segundo resultado: 17,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 23, 24 y 28.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 18,75",
            "58 / 18,75",
            "50 / 26,75"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 50. Incluye el cero en el tamaño de muestra. Segundo resultado: 18,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 20, 21 y 25.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "16,5",
            "18,975",
            "14,025"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 16,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 22, 23 y 27.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "15",
            "18"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 18."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 21, 22 y 26.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "17,25 / 23",
            "19,8375 / 23",
            "17,25 / 25,5875"
          ],
          "answer": 1,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 17,25. La media muestral estima la tasa de Poisson. Segundo resultado: 23."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 23, 24 y 28.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21,5625 / 25",
            "18,75 / 27,8125",
            "18,75 / 25"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 18,75. La media muestral estima la tasa de Poisson. Segundo resultado: 25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estimador de máxima verosimilitud de la tasa?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 24, 25 y 29.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "26",
            "30"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 26."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 26, 27 y 31.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28",
            "32",
            "24"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 28."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 25, 26 y 30.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "27 / 58",
            "27 / 54",
            "31 / 54"
          ],
          "answer": 2,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 27. Multiplica por dos la tasa estimada. Segundo resultado: 54."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 27, 28 y 32.",
          "prompt": "¿Cuál es el estimador de máxima verosimilitud de la tasa? ¿Qué total se predice en dos periodos iguales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "29 / 58",
            "33 / 58",
            "29 / 62"
          ],
          "answer": 1,
          "hint": "La media muestral estima la tasa de Poisson.",
          "explanation": "La media muestral estima la tasa de Poisson. Resultado: 29. Multiplica por dos la tasa estimada. Segundo resultado: 58."
        }
      ]
    },
    {
      "nombre": "¿Qué total se predice en dos periodos iguales?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 24, 25 y 29.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "52",
            "60",
            "44"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 52."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 26, 27 y 31.",
          "prompt": "¿Qué total se predice en dos periodos iguales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "64",
            "48",
            "56"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 56."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 25, 26 y 30.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "54 / 20,25",
            "62 / 20,25",
            "54 / 28,25"
          ],
          "answer": 1,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 54. Incluye el cero en el tamaño de muestra. Segundo resultado: 20,25."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 27, 28 y 32.",
          "prompt": "¿Qué total se predice en dos periodos iguales? ¿Qué tasa estimarías si otra observación fuera cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "67 / 21,75",
            "58 / 30,75",
            "58 / 21,75"
          ],
          "answer": 3,
          "hint": "Multiplica por dos la tasa estimada.",
          "explanation": "Multiplica por dos la tasa estimada. Resultado: 58. Incluye el cero en el tamaño de muestra. Segundo resultado: 21,75."
        }
      ]
    },
    {
      "nombre": "¿Qué tasa estimarías si otra observación fuera cero?",
      "facil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 24, 25 y 29.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22,425",
            "16,575",
            "19,5"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 19,5."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 26, 27 y 31.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "24"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "Tres observaciones independientes de una Poisson son 25, 26 y 30.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23,2875 / 27",
            "20,25 / 30,0375",
            "20,25 / 27"
          ],
          "answer": 3,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 20,25. La media muestral estima la tasa de Poisson. Segundo resultado: 27."
        },
        {
          "story": "Tres observaciones independientes de una Poisson son 27, 28 y 32.",
          "prompt": "¿Qué tasa estimarías si otra observación fuera cero? ¿Cuál es el estimador de máxima verosimilitud de la tasa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21,75 / 32,2625",
            "21,75 / 29",
            "25,0125 / 29"
          ],
          "answer": 2,
          "hint": "Incluye el cero en el tamaño de muestra.",
          "explanation": "Incluye el cero en el tamaño de muestra. Resultado: 21,75. La media muestral estima la tasa de Poisson. Segundo resultado: 29."
        }
      ]
    }
  ]
},
{
  "id": "2290036-8",
  "nombre": "Bloque 8 · Contrastes de hipótesis",
  "apartados": [
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 15 frente a una alternativa bilateral. La estimación es 19 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 21 frente a una alternativa bilateral. La estimación es 25 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 18 frente a una alternativa bilateral. La estimación es 22 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 24 frente a una alternativa bilateral. La estimación es 28 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 15 frente a una alternativa bilateral. La estimación es 19 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 21 frente a una alternativa bilateral. La estimación es 25 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 18 frente a una alternativa bilateral. La estimación es 22 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 0,04",
            "4 / 1,04",
            "4 / 0,04"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 24 frente a una alternativa bilateral. La estimación es 28 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 15 frente a una alternativa bilateral. La estimación es 19 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 21 frente a una alternativa bilateral. La estimación es 25 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 18 frente a una alternativa bilateral. La estimación es 22 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2,05",
            "0,04 / 2",
            "0,09 / 2"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 24 frente a una alternativa bilateral. La estimación es 28 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 0,04",
            "5 / 0,04",
            "4 / 1,04"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 27 frente a una alternativa bilateral. La estimación es 31 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 33 frente a una alternativa bilateral. La estimación es 37 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09",
            "-0,01",
            "0,04"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 30 frente a una alternativa bilateral. La estimación es 34 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 36 frente a una alternativa bilateral. La estimación es 40 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09 / 2",
            "0,04 / 2,05",
            "0,04 / 2"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
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
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 0,04",
            "4 / 1,04",
            "4 / 0,04"
          ],
          "answer": 3,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 51 frente a una alternativa bilateral. La estimación es 55 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 57 frente a una alternativa bilateral. La estimación es 61 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 54 frente a una alternativa bilateral. La estimación es 58 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2,05",
            "0,04 / 2",
            "0,09 / 2"
          ],
          "answer": 2,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 60 frente a una alternativa bilateral. La estimación es 64 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico z?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 63 frente a una alternativa bilateral. La estimación es 67 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 69 frente a una alternativa bilateral. La estimación es 73 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 66 frente a una alternativa bilateral. La estimación es 70 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 72 frente a una alternativa bilateral. La estimación es 76 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es el estadístico z? ¿Cuál es la diferencia estimada en unidades originales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la diferencia observada entre el error estándar.",
          "explanation": "Divide la diferencia observada entre el error estándar. Resultado: 2. Resta la media de referencia. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la diferencia estimada en unidades originales?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 63 frente a una alternativa bilateral. La estimación es 67 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        },
        {
          "story": "Se contrasta una media de referencia 69 frente a una alternativa bilateral. La estimación es 73 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 66 frente a una alternativa bilateral. La estimación es 70 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 1,04",
            "4 / 0,04",
            "5 / 0,04"
          ],
          "answer": 2,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 72 frente a una alternativa bilateral. La estimación es 76 y su error estándar conocido es 2.",
          "prompt": "¿Cuál es la diferencia estimada en unidades originales? Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 0,04",
            "5 / 0,04",
            "4 / 1,04"
          ],
          "answer": 1,
          "hint": "Resta la media de referencia.",
          "explanation": "Resta la media de referencia. Resultado: 4. Compara ambos valores en escala estándar. Segundo resultado: 0,04."
        }
      ]
    },
    {
      "nombre": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral?",
      "facil": [
        {
          "story": "Se contrasta una media de referencia 63 frente a una alternativa bilateral. La estimación es 67 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        },
        {
          "story": "Se contrasta una media de referencia 69 frente a una alternativa bilateral. La estimación es 73 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09",
            "-0,01",
            "0,04"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04."
        }
      ],
      "dificil": [
        {
          "story": "Se contrasta una media de referencia 66 frente a una alternativa bilateral. La estimación es 70 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04 / 2",
            "0,09 / 2",
            "0,04 / 2,05"
          ],
          "answer": 1,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
        },
        {
          "story": "Se contrasta una media de referencia 72 frente a una alternativa bilateral. La estimación es 76 y su error estándar conocido es 2.",
          "prompt": "Con valor crítico 1,96, ¿cuánto supera |z| al umbral? ¿Cuál es el estadístico z? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,09 / 2",
            "0,04 / 2,05",
            "0,04 / 2"
          ],
          "answer": 3,
          "hint": "Compara ambos valores en escala estándar.",
          "explanation": "Compara ambos valores en escala estándar. Resultado: 0,04. Divide la diferencia observada entre el error estándar. Segundo resultado: 2."
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
  "id": "2290036-9",
  "nombre": "Bloque 9 · Otras técnicas de inferencia: no paramétricas y bayesianas",
  "apartados": [
    {
      "nombre": "¿Cuál es el primer parámetro de la posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 5 éxitos y 10 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "8",
            "6"
          ],
          "answer": 1,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 7."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 7 éxitos y 14 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "8",
            "9"
          ],
          "answer": 3,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 9."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 6 éxitos y 12 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / 14",
            "9 / 14",
            "8 / 15"
          ],
          "answer": 1,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 8. Suma los fracasos al segundo parámetro previo. Segundo resultado: 14."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 8 éxitos y 16 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 18",
            "10 / 20",
            "10 / 18"
          ],
          "answer": 3,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 10. Suma los fracasos al segundo parámetro previo. Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo parámetro posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 5 éxitos y 10 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 12."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 7 éxitos y 14 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "18"
          ],
          "answer": 2,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 16."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 6 éxitos y 12 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 0,3636",
            "14 / 2,3636",
            "14 / 0,3636"
          ],
          "answer": 3,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 14. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3636."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 8 éxitos y 16 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 3,3571",
            "18 / 0,3571",
            "21 / 0,3571"
          ],
          "answer": 2,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 18. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3571."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad predictiva tiene un nuevo éxito?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 5 éxitos y 10 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3132",
            "0,3684",
            "0,4237"
          ],
          "answer": 2,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3684."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 7 éxitos y 14 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,36",
            "0,414",
            "0,306"
          ],
          "answer": 1,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,36."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 6 éxitos y 12 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3636 / 8,0545",
            "0,3636 / 8",
            "0,4182 / 8"
          ],
          "answer": 2,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3636. Suma los éxitos al primer parámetro previo. Segundo resultado: 8."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 8 éxitos y 16 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3571 / 10",
            "0,4107 / 10",
            "0,3571 / 10,0536"
          ],
          "answer": 1,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3571. Suma los éxitos al primer parámetro previo. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántos pares entran en la prueba tras excluir empates?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 9 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 12."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 11 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 10 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / 6,5",
            "13 / 8,5",
            "13 / 6,5"
          ],
          "answer": 3,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 13. Usa el tamaño efectivo por 0,5. Segundo resultado: 6,5."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 12 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / 9,5",
            "15 / 7,5",
            "17 / 7,5"
          ],
          "answer": 2,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 15. Usa el tamaño efectivo por 0,5. Segundo resultado: 7,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 9 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "7"
          ],
          "answer": 2,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 6."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 11 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "8",
            "6"
          ],
          "answer": 1,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 10 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6,5 / 1,7442",
            "6,5 / 0,7692",
            "7,475 / 0,7692"
          ],
          "answer": 2,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 6,5. Divide positivos entre pares sin empate. Segundo resultado: 0,7692."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 12 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7,5 / 0,8",
            "8,625 / 0,8",
            "7,5 / 1,925"
          ],
          "answer": 1,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 7,5. Divide positivos entre pares sin empate. Segundo resultado: 0,8."
        }
      ]
    },
    {
      "nombre": "¿Qué proporción observada de diferencias no nulas es positiva?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 9 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,75",
            "0,8625",
            "0,6375"
          ],
          "answer": 1,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,75."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 11 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9036",
            "0,6679",
            "0,7857"
          ],
          "answer": 3,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,7857."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 10 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7692 / 13",
            "0,8846 / 13",
            "0,7692 / 13,1154"
          ],
          "answer": 1,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,7692. Suma diferencias positivas y negativas. Segundo resultado: 13."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 12 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,92 / 15",
            "0,8 / 15,12",
            "0,8 / 15"
          ],
          "answer": 3,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8. Suma diferencias positivas y negativas. Segundo resultado: 15."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el primer parámetro de la posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 13 éxitos y 26 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "17"
          ],
          "answer": 2,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 15."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 15 éxitos y 30 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "14"
          ],
          "answer": 1,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 17."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 14 éxitos y 28 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 32",
            "16 / 30",
            "18 / 30"
          ],
          "answer": 2,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 16. Suma los fracasos al segundo parámetro previo. Segundo resultado: 30."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 16 éxitos y 32 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 34",
            "21 / 34",
            "18 / 37"
          ],
          "answer": 1,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 18. Suma los fracasos al segundo parámetro previo. Segundo resultado: 34."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo parámetro posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 13 éxitos y 26 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28",
            "32",
            "24"
          ],
          "answer": 1,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 28."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 15 éxitos y 30 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "27",
            "32"
          ],
          "answer": 3,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 32."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 14 éxitos y 28 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 0,3478",
            "35 / 0,3478",
            "30 / 5,3478"
          ],
          "answer": 1,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 30. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3478."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 16 éxitos y 32 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "39 / 0,3462",
            "34 / 5,3462",
            "34 / 0,3462"
          ],
          "answer": 3,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 34. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3462."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad predictiva tiene un nuevo éxito?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 13 éxitos y 26 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,4012",
            "0,2965",
            "0,3488"
          ],
          "answer": 3,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3488."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 15 éxitos y 30 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2949",
            "0,3469",
            "0,399"
          ],
          "answer": 2,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3469."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 14 éxitos y 28 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,4 / 16",
            "0,3478 / 16,0522",
            "0,3478 / 16"
          ],
          "answer": 3,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3478. Suma los éxitos al primer parámetro previo. Segundo resultado: 16."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 16 éxitos y 32 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3462 / 18,0519",
            "0,3462 / 18",
            "0,3981 / 18"
          ],
          "answer": 2,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3462. Suma los éxitos al primer parámetro previo. Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "¿Cuántos pares entran en la prueba tras excluir empates?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 17 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 20."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 19 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "19",
            "22"
          ],
          "answer": 3,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 22."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 18 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 10,5",
            "24 / 10,5",
            "21 / 13,5"
          ],
          "answer": 1,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 21. Usa el tamaño efectivo por 0,5. Segundo resultado: 10,5."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 20 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 11,5",
            "23 / 14,5",
            "23 / 11,5"
          ],
          "answer": 3,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 23. Usa el tamaño efectivo por 0,5. Segundo resultado: 11,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 17 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 10."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 19 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "11",
            "13"
          ],
          "answer": 2,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 18 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,075 / 0,8571",
            "10,5 / 2,4321",
            "10,5 / 0,8571"
          ],
          "answer": 3,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 10,5. Divide positivos entre pares sin empate. Segundo resultado: 0,8571."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 20 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "11,5 / 2,5946",
            "11,5 / 0,8696",
            "13,225 / 0,8696"
          ],
          "answer": 2,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 11,5. Divide positivos entre pares sin empate. Segundo resultado: 0,8696."
        }
      ]
    },
    {
      "nombre": "¿Qué proporción observada de diferencias no nulas es positiva?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 17 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7225",
            "0,85",
            "0,9775"
          ],
          "answer": 2,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,85."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 19 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8636",
            "0,9932",
            "0,7341"
          ],
          "answer": 1,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8636."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 18 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8571 / 21,1286",
            "0,8571 / 21",
            "0,9857 / 21"
          ],
          "answer": 2,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8571. Suma diferencias positivas y negativas. Segundo resultado: 21."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 20 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8696 / 23",
            "1 / 23",
            "0,8696 / 23,1304"
          ],
          "answer": 1,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8696. Suma diferencias positivas y negativas. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el primer parámetro de la posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 21 éxitos y 42 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 23."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 23 éxitos y 46 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "25",
            "29"
          ],
          "answer": 2,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 25."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 22 éxitos y 44 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 46",
            "24 / 50",
            "24 / 46"
          ],
          "answer": 3,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 24. Suma los fracasos al segundo parámetro previo. Segundo resultado: 46."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 24 éxitos y 48 fracasos.",
          "prompt": "¿Cuál es el primer parámetro de la posterior? ¿Cuál es el segundo parámetro posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 54",
            "26 / 50",
            "30 / 50"
          ],
          "answer": 2,
          "hint": "Suma los éxitos al primer parámetro previo.",
          "explanation": "Suma los éxitos al primer parámetro previo. Resultado: 26. Suma los fracasos al segundo parámetro previo. Segundo resultado: 50."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el segundo parámetro posterior?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 21 éxitos y 42 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "44",
            "51"
          ],
          "answer": 2,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 44."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 23 éxitos y 46 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48",
            "55",
            "41"
          ],
          "answer": 1,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 48."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 22 éxitos y 44 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 7,3429",
            "46 / 0,3429",
            "53 / 0,3429"
          ],
          "answer": 2,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 46. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3429."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 24 éxitos y 48 fracasos.",
          "prompt": "¿Cuál es el segundo parámetro posterior? ¿Qué probabilidad predictiva tiene un nuevo éxito? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 0,3421",
            "58 / 0,3421",
            "50 / 8,3421"
          ],
          "answer": 1,
          "hint": "Suma los fracasos al segundo parámetro previo.",
          "explanation": "Suma los fracasos al segundo parámetro previo. Resultado: 50. Divide el primer parámetro posterior entre la suma de ambos. Segundo resultado: 0,3421."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad predictiva tiene un nuevo éxito?",
      "facil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 21 éxitos y 42 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3433",
            "0,3948",
            "0,2918"
          ],
          "answer": 1,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3433."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 23 éxitos y 46 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3938",
            "0,2911",
            "0,3425"
          ],
          "answer": 3,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3425."
        }
      ],
      "dificil": [
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 22 éxitos y 44 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3429 / 24",
            "0,3943 / 24",
            "0,3429 / 24,0514"
          ],
          "answer": 1,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3429. Suma los éxitos al primer parámetro previo. Segundo resultado: 24."
        },
        {
          "story": "Se modela una proporción con una previa Beta(2, 2). Se observan 24 éxitos y 48 fracasos.",
          "prompt": "¿Qué probabilidad predictiva tiene un nuevo éxito? ¿Cuál es el primer parámetro de la posterior? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3934 / 26",
            "0,3421 / 26,0513",
            "0,3421 / 26"
          ],
          "answer": 3,
          "hint": "Divide el primer parámetro posterior entre la suma de ambos.",
          "explanation": "Divide el primer parámetro posterior entre la suma de ambos. Resultado: 0,3421. Suma los éxitos al primer parámetro previo. Segundo resultado: 26."
        }
      ]
    },
    {
      "nombre": "¿Cuántos pares entran en la prueba tras excluir empates?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 25 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "28",
            "32"
          ],
          "answer": 2,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 28."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 27 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 26 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "29 / 18,5",
            "29 / 14,5",
            "33 / 14,5"
          ],
          "answer": 2,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 29. Usa el tamaño efectivo por 0,5. Segundo resultado: 14,5."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 28 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuántos pares entran en la prueba tras excluir empates? ¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "31 / 15,5",
            "36 / 15,5",
            "31 / 20,5"
          ],
          "answer": 1,
          "hint": "Suma diferencias positivas y negativas.",
          "explanation": "Suma diferencias positivas y negativas. Resultado: 31. Usa el tamaño efectivo por 0,5. Segundo resultado: 15,5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 25 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "12"
          ],
          "answer": 1,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 14."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 27 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 26 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14,5 / 0,8966",
            "16,675 / 0,8966",
            "14,5 / 3,0716"
          ],
          "answer": 1,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 14,5. Divide positivos entre pares sin empate. Segundo resultado: 0,8966."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 28 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Cuál es el número esperado de signos positivos bajo la hipótesis de equiprobabilidad? ¿Qué proporción observada de diferencias no nulas es positiva? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "17,825 / 0,9032",
            "15,5 / 3,2282",
            "15,5 / 0,9032"
          ],
          "answer": 3,
          "hint": "Usa el tamaño efectivo por 0,5.",
          "explanation": "Usa el tamaño efectivo por 0,5. Resultado: 15,5. Divide positivos entre pares sin empate. Segundo resultado: 0,9032."
        }
      ]
    },
    {
      "nombre": "¿Qué proporción observada de diferencias no nulas es positiva?",
      "facil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 25 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,0268",
            "0,7589",
            "0,8929"
          ],
          "answer": 3,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8929."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 27 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,765",
            "0,9",
            "1,035"
          ],
          "answer": 2,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,9."
        }
      ],
      "dificil": [
        {
          "story": "Para una prueba de signos con datos apareados, hay 26 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,031 / 29",
            "0,8966 / 29,1345",
            "0,8966 / 29"
          ],
          "answer": 3,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,8966. Suma diferencias positivas y negativas. Segundo resultado: 29."
        },
        {
          "story": "Para una prueba de signos con datos apareados, hay 28 diferencias positivas, 3 negativas y 2 empates.",
          "prompt": "¿Qué proporción observada de diferencias no nulas es positiva? ¿Cuántos pares entran en la prueba tras excluir empates? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9032 / 31,1355",
            "0,9032 / 31",
            "1,0387 / 31"
          ],
          "answer": 2,
          "hint": "Divide positivos entre pares sin empate.",
          "explanation": "Divide positivos entre pares sin empate. Resultado: 0,9032. Suma diferencias positivas y negativas. Segundo resultado: 31."
        }
      ]
    }
  ]
}
];

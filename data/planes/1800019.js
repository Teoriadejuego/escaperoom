window.PLAN_1800019 = [
{
  "id": "1800019-1",
  "nombre": "Bloque 1 · Introducción a la investigación por muestreo",
  "apartados": [
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 360",
            "10 / 362",
            "10 / 360"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 360."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 482",
            "10 / 480",
            "12 / 480"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 480."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "255",
            "300",
            "345"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 300."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "420",
            "483",
            "357"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 420."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "360 / 54,1",
            "360 / 0,1",
            "414 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 360. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "480 / 0,1",
            "552 / 0,1",
            "480 / 72,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 480. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 70",
            "80 / 82",
            "80 / 70"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 96",
            "80 / 84",
            "92 / 84"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 84."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "54",
            "63",
            "72"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 63."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "77",
            "89",
            "65"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 77."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 81",
            "70 / 70",
            "81 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 70. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84 / 70",
            "97 / 70",
            "84 / 83"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 84. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 840",
            "12 / 840",
            "10 / 842"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 840."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 960",
            "10 / 962",
            "10 / 960"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 960."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "897",
            "663",
            "780"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 780."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "765",
            "900",
            "1035"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 900."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "966 / 0,1",
            "840 / 126,1",
            "840 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 840. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "960 / 144,1",
            "960 / 0,1",
            "1104 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 960. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 126",
            "92 / 126",
            "80 / 138"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 126."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 140",
            "80 / 152",
            "80 / 140"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 140."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "137",
            "101",
            "119"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 119."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "113",
            "133",
            "153"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 133."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "145 / 70",
            "126 / 89",
            "126 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 126. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "140 / 91",
            "140 / 70",
            "161 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 140. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1322",
            "10 / 1320",
            "12 / 1320"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1320."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1440",
            "12 / 1440",
            "10 / 1442"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1440."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1260",
            "1449",
            "1071"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1260."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1587",
            "1173",
            "1380"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1380."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1320 / 0,1",
            "1518 / 0,1",
            "1320 / 198,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1320. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1656 / 0,1",
            "1440 / 216,1",
            "1440 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1440. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 194",
            "80 / 182",
            "92 / 182"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 182."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 196",
            "92 / 196",
            "80 / 208"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 196."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "175",
            "201",
            "149"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 175."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "217",
            "161",
            "189"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 189."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "182 / 70",
            "209 / 70",
            "182 / 97"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 182. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "225 / 70",
            "196 / 99",
            "196 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 196. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    }
  ]
},
{
  "id": "1800019-2",
  "nombre": "Bloque 2 · Muestreo aleatorio simple",
  "apartados": [
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 360",
            "10 / 362",
            "10 / 360"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 360."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 482",
            "10 / 480",
            "12 / 480"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 480."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 100 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 10.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "255",
            "300",
            "345"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 300."
        },
        {
          "story": "El marco contiene 140 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 14.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "420",
            "483",
            "357"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 420."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 120 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 12.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "360 / 54,1",
            "360 / 0,1",
            "414 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 360. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 160 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 16.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "480 / 0,1",
            "552 / 0,1",
            "480 / 72,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 480. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 180 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 18.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 220 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 22.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 200 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 20.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 240 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 24.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 180 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 18.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 220 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 22.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 200 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 20.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 602",
            "10 / 600",
            "12 / 600"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 600."
        },
        {
          "story": "El marco contiene 240 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 24.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 720",
            "12 / 720",
            "10 / 722"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 720."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 180 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 18.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "540",
            "621",
            "459"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 540."
        },
        {
          "story": "El marco contiene 220 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 22.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "759",
            "561",
            "660"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 660."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 200 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 20.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "600 / 0,1",
            "690 / 0,1",
            "600 / 90,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 600. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 240 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 24.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "828 / 0,1",
            "720 / 108,1",
            "720 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 720. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 840",
            "12 / 840",
            "10 / 842"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 840."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 960",
            "10 / 962",
            "10 / 960"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 960."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 260 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 26.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "897",
            "663",
            "780"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 780."
        },
        {
          "story": "El marco contiene 300 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 30.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "765",
            "900",
            "1035"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 900."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 280 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 28.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "966 / 0,1",
            "840 / 126,1",
            "840 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 840. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 320 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 32.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "960 / 144,1",
            "960 / 0,1",
            "1104 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 960. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 340 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 34.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 380 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 38.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 360 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 36.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 400 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 40.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 340 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 34.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 380 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 38.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 360 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 36.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 1080",
            "10 / 1082",
            "10 / 1080"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1080."
        },
        {
          "story": "El marco contiene 400 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 40.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1202",
            "10 / 1200",
            "12 / 1200"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1200."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 340 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 34.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "867",
            "1020",
            "1173"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1020."
        },
        {
          "story": "El marco contiene 380 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 38.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1140",
            "1311",
            "969"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1140."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 360 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 36.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1080 / 162,1",
            "1080 / 0,1",
            "1242 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1080. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 400 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 40.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1200 / 0,1",
            "1380 / 0,1",
            "1200 / 180,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1200. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,05",
            "0,1"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1322",
            "10 / 1320",
            "12 / 1320"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1320."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1440",
            "12 / 1440",
            "10 / 1442"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1440."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 420 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 42.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1260",
            "1449",
            "1071"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1260."
        },
        {
          "story": "El marco contiene 460 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 46.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1587",
            "1173",
            "1380"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1380."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 440 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 44.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1320 / 0,1",
            "1518 / 0,1",
            "1320 / 198,1"
          ],
          "answer": 1,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1320. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 480 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 48.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1656 / 0,1",
            "1440 / 216,1",
            "1440 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1440. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada establecimiento?",
      "facil": [
        {
          "story": "El marco contiene 500 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 50.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05",
            "0,1",
            "0,15"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        },
        {
          "story": "El marco contiene 540 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 54.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1",
            "0,15",
            "0,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 520 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 52.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10,05",
            "0,1 / 10",
            "0,15 / 10"
          ],
          "answer": 2,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        },
        {
          "story": "El marco contiene 560 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 56.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada establecimiento? ¿Cuál es el peso de diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 10",
            "0,15 / 10",
            "0,1 / 10,05"
          ],
          "answer": 1,
          "hint": "Divide muestra entre población.",
          "explanation": "Divide muestra entre población. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de diseño?",
      "facil": [
        {
          "story": "El marco contiene 500 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 50.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        },
        {
          "story": "El marco contiene 540 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 54.",
          "prompt": "¿Cuál es el peso de diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 520 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 52.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 1560",
            "12 / 1560",
            "10 / 1562"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1560."
        },
        {
          "story": "El marco contiene 560 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 56.",
          "prompt": "¿Cuál es el peso de diseño? Si la media muestral es 3, ¿qué total poblacional se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 1680",
            "10 / 1682",
            "10 / 1680"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la media por el tamaño del marco. Segundo resultado: 1680."
        }
      ]
    },
    {
      "nombre": "Si la media muestral es 3, ¿qué total poblacional se estima?",
      "facil": [
        {
          "story": "El marco contiene 500 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 50.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1725",
            "1275",
            "1500"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1500."
        },
        {
          "story": "El marco contiene 540 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 54.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1377",
            "1620",
            "1863"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1620."
        }
      ],
      "dificil": [
        {
          "story": "El marco contiene 520 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 52.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1794 / 0,1",
            "1560 / 234,1",
            "1560 / 0,1"
          ],
          "answer": 3,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1560. Divide muestra entre población. Segundo resultado: 0,1."
        },
        {
          "story": "El marco contiene 560 establecimientos. Un muestreo aleatorio simple sin reposición selecciona 56.",
          "prompt": "Si la media muestral es 3, ¿qué total poblacional se estima? ¿Qué probabilidad de inclusión tiene cada establecimiento? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1680 / 252,1",
            "1680 / 0,1",
            "1932 / 0,1"
          ],
          "answer": 2,
          "hint": "Expande la media por el tamaño del marco.",
          "explanation": "Expande la media por el tamaño del marco. Resultado: 1680. Divide muestra entre población. Segundo resultado: 0,1."
        }
      ]
    }
  ]
},
{
  "id": "1800019-3",
  "nombre": "Bloque 3 · Estimadores de razón y regresión",
  "apartados": [
    {
      "nombre": "¿Cuál es la razón muestral de ventas por visita?",
      "facil": [
        {
          "story": "La muestra suma 15 euros de ventas y 5 visitas. Se conocen 50 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        },
        {
          "story": "La muestra suma 21 euros de ventas y 7 visitas. Se conocen 70 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 18 euros de ventas y 6 visitas. Se conocen 60 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 180",
            "4 / 180",
            "3 / 181"
          ],
          "answer": 1,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 180."
        },
        {
          "story": "La muestra suma 24 euros de ventas y 8 visitas. Se conocen 80 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 240",
            "3 / 241",
            "3 / 240"
          ],
          "answer": 3,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 240."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la estimación de razón del total de ventas?",
      "facil": [
        {
          "story": "La muestra suma 15 euros de ventas y 5 visitas. Se conocen 50 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "173",
            "127",
            "150"
          ],
          "answer": 3,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 150."
        },
        {
          "story": "La muestra suma 21 euros de ventas y 7 visitas. Se conocen 70 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "178",
            "210",
            "242"
          ],
          "answer": 2,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 210."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 18 euros de ventas y 6 visitas. Se conocen 60 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "207 / 12",
            "180 / 39",
            "180 / 12"
          ],
          "answer": 3,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 180. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        },
        {
          "story": "La muestra suma 24 euros de ventas y 8 visitas. Se conocen 80 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "240 / 48",
            "240 / 12",
            "276 / 12"
          ],
          "answer": 2,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 240. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón?",
      "facil": [
        {
          "story": "La muestra suma 15 euros de ventas y 5 visitas. Se conocen 50 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        },
        {
          "story": "La muestra suma 21 euros de ventas y 7 visitas. Se conocen 70 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 18 euros de ventas y 6 visitas. Se conocen 60 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 5",
            "12 / 3",
            "14 / 3"
          ],
          "answer": 2,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        },
        {
          "story": "La muestra suma 24 euros de ventas y 8 visitas. Se conocen 80 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 3",
            "14 / 3",
            "12 / 5"
          ],
          "answer": 1,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Cuánto difiere la media auxiliar poblacional de la muestral?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 18 y 9. La media poblacional conocida de X es 11 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 22 y 11. La media poblacional conocida de X es 13 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 20 y 10. La media poblacional conocida de X es 12 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 6",
            "2 / 7",
            "2 / 6"
          ],
          "answer": 3,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 24 y 12. La media poblacional conocida de X es 14 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 7",
            "2 / 6",
            "3 / 6"
          ],
          "answer": 2,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Qué corrección aplica el estimador de regresión a la media de Y?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 18 y 9. La media poblacional conocida de X es 11 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "7"
          ],
          "answer": 2,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 22 y 11. La media poblacional conocida de X es 13 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 20 y 10. La media poblacional conocida de X es 12 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 27",
            "6 / 26",
            "7 / 26"
          ],
          "answer": 2,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 26."
        },
        {
          "story": "En la muestra, las medias de Y y X son 24 y 12. La media poblacional conocida de X es 14 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 30",
            "7 / 30",
            "6 / 31"
          ],
          "answer": 1,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "¿Qué media de Y se estima por regresión?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 18 y 9. La media poblacional conocida de X es 11 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "28",
            "20"
          ],
          "answer": 1,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 24."
        },
        {
          "story": "En la muestra, las medias de Y y X son 22 y 11. La media poblacional conocida de X es 13 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "24",
            "28"
          ],
          "answer": 3,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 28."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 20 y 10. La media poblacional conocida de X es 12 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 2",
            "30 / 2",
            "26 / 6"
          ],
          "answer": 1,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 26. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 24 y 12. La media poblacional conocida de X es 14 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 2",
            "30 / 7",
            "30 / 2"
          ],
          "answer": 3,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 30. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la razón muestral de ventas por visita?",
      "facil": [
        {
          "story": "La muestra suma 39 euros de ventas y 13 visitas. Se conocen 130 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        },
        {
          "story": "La muestra suma 45 euros de ventas y 15 visitas. Se conocen 150 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 42 euros de ventas y 14 visitas. Se conocen 140 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 421",
            "3 / 420",
            "4 / 420"
          ],
          "answer": 2,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 420."
        },
        {
          "story": "La muestra suma 48 euros de ventas y 16 visitas. Se conocen 160 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 480",
            "4 / 480",
            "3 / 481"
          ],
          "answer": 1,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 480."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la estimación de razón del total de ventas?",
      "facil": [
        {
          "story": "La muestra suma 39 euros de ventas y 13 visitas. Se conocen 130 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "390",
            "449",
            "331"
          ],
          "answer": 1,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 390."
        },
        {
          "story": "La muestra suma 45 euros de ventas y 15 visitas. Se conocen 150 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "518",
            "382",
            "450"
          ],
          "answer": 3,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 450."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 42 euros de ventas y 14 visitas. Se conocen 140 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "420 / 12",
            "483 / 12",
            "420 / 75"
          ],
          "answer": 1,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 420. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        },
        {
          "story": "La muestra suma 48 euros de ventas y 16 visitas. Se conocen 160 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "552 / 12",
            "480 / 84",
            "480 / 12"
          ],
          "answer": 3,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 480. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón?",
      "facil": [
        {
          "story": "La muestra suma 39 euros de ventas y 13 visitas. Se conocen 130 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        },
        {
          "story": "La muestra suma 45 euros de ventas y 15 visitas. Se conocen 150 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 42 euros de ventas y 14 visitas. Se conocen 140 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 3",
            "12 / 5",
            "12 / 3"
          ],
          "answer": 3,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        },
        {
          "story": "La muestra suma 48 euros de ventas y 16 visitas. Se conocen 160 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 5",
            "12 / 3",
            "14 / 3"
          ],
          "answer": 2,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Cuánto difiere la media auxiliar poblacional de la muestral?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 34 y 17. La media poblacional conocida de X es 19 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 38 y 19. La media poblacional conocida de X es 21 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 36 y 18. La media poblacional conocida de X es 20 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 6",
            "3 / 6",
            "2 / 7"
          ],
          "answer": 1,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 40 y 20. La media poblacional conocida de X es 22 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 6",
            "2 / 7",
            "2 / 6"
          ],
          "answer": 3,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Qué corrección aplica el estimador de regresión a la media de Y?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 34 y 17. La media poblacional conocida de X es 19 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "5",
            "6"
          ],
          "answer": 3,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 38 y 19. La media poblacional conocida de X es 21 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "7"
          ],
          "answer": 2,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 36 y 18. La media poblacional conocida de X es 20 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 42",
            "6 / 43",
            "6 / 42"
          ],
          "answer": 3,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 42."
        },
        {
          "story": "En la muestra, las medias de Y y X son 40 y 20. La media poblacional conocida de X es 22 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 47",
            "6 / 46",
            "7 / 46"
          ],
          "answer": 2,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 46."
        }
      ]
    },
    {
      "nombre": "¿Qué media de Y se estima por regresión?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 34 y 17. La media poblacional conocida de X es 19 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34",
            "40",
            "46"
          ],
          "answer": 2,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 40."
        },
        {
          "story": "En la muestra, las medias de Y y X son 38 y 19. La media poblacional conocida de X es 21 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "44",
            "51",
            "37"
          ],
          "answer": 1,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 44."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 36 y 18. La media poblacional conocida de X es 20 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "42 / 8",
            "42 / 2",
            "48 / 2"
          ],
          "answer": 2,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 42. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 40 y 20. La media poblacional conocida de X es 22 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 2",
            "53 / 2",
            "46 / 9"
          ],
          "answer": 1,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 46. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la razón muestral de ventas por visita?",
      "facil": [
        {
          "story": "La muestra suma 63 euros de ventas y 21 visitas. Se conocen 210 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        },
        {
          "story": "La muestra suma 69 euros de ventas y 23 visitas. Se conocen 230 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 66 euros de ventas y 22 visitas. Se conocen 220 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 660",
            "3 / 661",
            "3 / 660"
          ],
          "answer": 3,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 660."
        },
        {
          "story": "La muestra suma 72 euros de ventas y 24 visitas. Se conocen 240 visitas poblacionales.",
          "prompt": "¿Cuál es la razón muestral de ventas por visita? ¿Cuál es la estimación de razón del total de ventas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 721",
            "3 / 720",
            "4 / 720"
          ],
          "answer": 2,
          "hint": "Divide los totales muestrales.",
          "explanation": "Divide los totales muestrales. Resultado: 3. Multiplica la razón muestral por el total auxiliar. Segundo resultado: 720."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la estimación de razón del total de ventas?",
      "facil": [
        {
          "story": "La muestra suma 63 euros de ventas y 21 visitas. Se conocen 210 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "535",
            "630",
            "725"
          ],
          "answer": 2,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 630."
        },
        {
          "story": "La muestra suma 69 euros de ventas y 23 visitas. Se conocen 230 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "690",
            "794",
            "586"
          ],
          "answer": 1,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 690."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 66 euros de ventas y 22 visitas. Se conocen 220 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "660 / 111",
            "660 / 12",
            "759 / 12"
          ],
          "answer": 2,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 660. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        },
        {
          "story": "La muestra suma 72 euros de ventas y 24 visitas. Se conocen 240 visitas poblacionales.",
          "prompt": "¿Cuál es la estimación de razón del total de ventas? Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "720 / 12",
            "828 / 12",
            "720 / 120"
          ],
          "answer": 1,
          "hint": "Multiplica la razón muestral por el total auxiliar.",
          "explanation": "Multiplica la razón muestral por el total auxiliar. Resultado: 720. Multiplica el cambio auxiliar por la razón. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón?",
      "facil": [
        {
          "story": "La muestra suma 63 euros de ventas y 21 visitas. Se conocen 210 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        },
        {
          "story": "La muestra suma 69 euros de ventas y 23 visitas. Se conocen 230 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "La muestra suma 66 euros de ventas y 22 visitas. Se conocen 220 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 3",
            "14 / 3",
            "12 / 5"
          ],
          "answer": 1,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        },
        {
          "story": "La muestra suma 72 euros de ventas y 24 visitas. Se conocen 240 visitas poblacionales.",
          "prompt": "Si el total auxiliar aumenta en 4, ¿en cuánto cambia la estimación manteniendo la razón? ¿Cuál es la razón muestral de ventas por visita? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 3",
            "12 / 5",
            "12 / 3"
          ],
          "answer": 3,
          "hint": "Multiplica el cambio auxiliar por la razón.",
          "explanation": "Multiplica el cambio auxiliar por la razón. Resultado: 12. Divide los totales muestrales. Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Cuánto difiere la media auxiliar poblacional de la muestral?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 50 y 25. La media poblacional conocida de X es 27 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 54 y 27. La media poblacional conocida de X es 29 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 52 y 26. La media poblacional conocida de X es 28 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 7",
            "2 / 6",
            "3 / 6"
          ],
          "answer": 2,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 56 y 28. La media poblacional conocida de X es 30 y la pendiente estimada vale 3.",
          "prompt": "¿Cuánto difiere la media auxiliar poblacional de la muestral? ¿Qué corrección aplica el estimador de regresión a la media de Y? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 6",
            "3 / 6",
            "2 / 7"
          ],
          "answer": 1,
          "hint": "Resta la media muestral de X a la poblacional.",
          "explanation": "Resta la media muestral de X a la poblacional. Resultado: 2. Multiplica la diferencia auxiliar por la pendiente. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Qué corrección aplica el estimador de regresión a la media de Y?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 50 y 25. La media poblacional conocida de X es 27 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        },
        {
          "story": "En la muestra, las medias de Y y X son 54 y 27. La media poblacional conocida de X es 29 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "5",
            "6"
          ],
          "answer": 3,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 52 y 26. La media poblacional conocida de X es 28 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 58",
            "7 / 58",
            "6 / 59"
          ],
          "answer": 1,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 58."
        },
        {
          "story": "En la muestra, las medias de Y y X son 56 y 28. La media poblacional conocida de X es 30 y la pendiente estimada vale 3.",
          "prompt": "¿Qué corrección aplica el estimador de regresión a la media de Y? ¿Qué media de Y se estima por regresión? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 62",
            "6 / 63",
            "6 / 62"
          ],
          "answer": 3,
          "hint": "Multiplica la diferencia auxiliar por la pendiente.",
          "explanation": "Multiplica la diferencia auxiliar por la pendiente. Resultado: 6. Suma la corrección a la media muestral de Y. Segundo resultado: 62."
        }
      ]
    },
    {
      "nombre": "¿Qué media de Y se estima por regresión?",
      "facil": [
        {
          "story": "En la muestra, las medias de Y y X son 50 y 25. La media poblacional conocida de X es 27 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "64",
            "48",
            "56"
          ],
          "answer": 3,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 56."
        },
        {
          "story": "En la muestra, las medias de Y y X son 54 y 27. La media poblacional conocida de X es 29 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? Redondea a cuatro decimales si es necesario.",
          "options": [
            "51",
            "60",
            "69"
          ],
          "answer": 2,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "En la muestra, las medias de Y y X son 52 y 26. La media poblacional conocida de X es 28 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "67 / 2",
            "58 / 11",
            "58 / 2"
          ],
          "answer": 3,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 58. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        },
        {
          "story": "En la muestra, las medias de Y y X son 56 y 28. La media poblacional conocida de X es 30 y la pendiente estimada vale 3.",
          "prompt": "¿Qué media de Y se estima por regresión? ¿Cuánto difiere la media auxiliar poblacional de la muestral? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "62 / 11",
            "62 / 2",
            "71 / 2"
          ],
          "answer": 2,
          "hint": "Suma la corrección a la media muestral de Y.",
          "explanation": "Suma la corrección a la media muestral de Y. Resultado: 62. Resta la media muestral de X a la poblacional. Segundo resultado: 2."
        }
      ]
    }
  ]
},
{
  "id": "1800019-4",
  "nombre": "Bloque 4 · Muestreo estratificado",
  "apartados": [
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 15 y 5 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,3",
            "0,2"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 21 y 7 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3",
            "0,2",
            "0,25"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 18 y 6 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12",
            "0,3 / 12",
            "0,25 / 12,05"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 24 y 8 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3 / 12",
            "0,25 / 12,05",
            "0,25 / 12"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 15 y 5 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 21 y 7 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 18 y 6 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 288",
            "12 / 290",
            "12 / 288"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 288."
        },
        {
          "story": "Dos estratos tienen 24 y 8 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 386",
            "12 / 384",
            "14 / 384"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 384."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 15 y 5 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "204",
            "240",
            "276"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 240."
        },
        {
          "story": "Dos estratos tienen 21 y 7 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "336",
            "386",
            "286"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 336."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 18 y 6 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "288 / 43,25",
            "288 / 0,25",
            "331 / 0,25"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 288. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 24 y 8 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "384 / 0,25",
            "442 / 0,25",
            "384 / 58,25"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 384. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 27 y 9 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3",
            "0,2",
            "0,25"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 33 y 11 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,3"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 30 y 10 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3 / 12",
            "0,25 / 12,05",
            "0,25 / 12"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 36 y 12 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12,05",
            "0,25 / 12",
            "0,3 / 12"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 27 y 9 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 33 y 11 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 30 y 10 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 482",
            "12 / 480",
            "14 / 480"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 480."
        },
        {
          "story": "Dos estratos tienen 36 y 12 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 576",
            "14 / 576",
            "12 / 578"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 576."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 27 y 9 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "432",
            "497",
            "367"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 432."
        },
        {
          "story": "Dos estratos tienen 33 y 11 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "607",
            "449",
            "528"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 528."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 30 y 10 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "480 / 0,25",
            "552 / 0,25",
            "480 / 72,25"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 480. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 36 y 12 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "662 / 0,25",
            "576 / 86,25",
            "576 / 0,25"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 576. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 39 y 13 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,3"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 45 y 15 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,3",
            "0,2"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 42 y 14 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12,05",
            "0,25 / 12",
            "0,3 / 12"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 48 y 16 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12",
            "0,3 / 12",
            "0,25 / 12,05"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 39 y 13 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 45 y 15 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 42 y 14 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 672",
            "14 / 672",
            "12 / 674"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 672."
        },
        {
          "story": "Dos estratos tienen 48 y 16 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 768",
            "12 / 770",
            "12 / 768"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 768."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 39 y 13 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "718",
            "530",
            "624"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 624."
        },
        {
          "story": "Dos estratos tienen 45 y 15 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "612",
            "720",
            "828"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 720."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 42 y 14 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "773 / 0,25",
            "672 / 101,25",
            "672 / 0,25"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 672. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 48 y 16 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "768 / 115,25",
            "768 / 0,25",
            "883 / 0,25"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 768. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 51 y 17 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,3",
            "0,2"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 57 y 19 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3",
            "0,2",
            "0,25"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 54 y 18 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12",
            "0,3 / 12",
            "0,25 / 12,05"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 60 y 20 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3 / 12",
            "0,25 / 12,05",
            "0,25 / 12"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 51 y 17 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 57 y 19 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 54 y 18 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 864",
            "12 / 866",
            "12 / 864"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 864."
        },
        {
          "story": "Dos estratos tienen 60 y 20 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 962",
            "12 / 960",
            "14 / 960"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 960."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 51 y 17 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "694",
            "816",
            "938"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 816."
        },
        {
          "story": "Dos estratos tienen 57 y 19 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "912",
            "1049",
            "775"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 912."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 54 y 18 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "864 / 130,25",
            "864 / 0,25",
            "994 / 0,25"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 864. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 60 y 20 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "960 / 0,25",
            "1104 / 0,25",
            "960 / 144,25"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 960. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 63 y 21 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3",
            "0,2",
            "0,25"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 69 y 23 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,3"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 66 y 22 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3 / 12",
            "0,25 / 12,05",
            "0,25 / 12"
          ],
          "answer": 3,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 72 y 24 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12,05",
            "0,25 / 12",
            "0,3 / 12"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 63 y 21 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "14"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 69 y 23 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 66 y 22 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 1058",
            "12 / 1056",
            "14 / 1056"
          ],
          "answer": 2,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 1056."
        },
        {
          "story": "Dos estratos tienen 72 y 24 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 1152",
            "14 / 1152",
            "12 / 1154"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 1152."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 63 y 21 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1008",
            "1159",
            "857"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1008."
        },
        {
          "story": "Dos estratos tienen 69 y 23 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1270",
            "938",
            "1104"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1104."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 66 y 22 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1056 / 0,25",
            "1214 / 0,25",
            "1056 / 158,25"
          ],
          "answer": 1,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1056. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 72 y 24 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1325 / 0,25",
            "1152 / 173,25",
            "1152 / 0,25"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1152. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso poblacional del estrato menor?",
      "facil": [
        {
          "story": "Dos estratos tienen 75 y 25 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,3"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 81 y 27 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,3",
            "0,2"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 78 y 26 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12,05",
            "0,25 / 12",
            "0,3 / 12"
          ],
          "answer": 2,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        },
        {
          "story": "Dos estratos tienen 84 y 28 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es el peso poblacional del estrato menor? ¿Cuál es la media estratificada estimada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 12",
            "0,3 / 12",
            "0,25 / 12,05"
          ],
          "answer": 1,
          "hint": "Divide su tamaño entre el total.",
          "explanation": "Divide su tamaño entre el total. Resultado: 0,25. Pondera cada media por el peso del estrato. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media estratificada estimada?",
      "facil": [
        {
          "story": "Dos estratos tienen 75 y 25 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "10"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        },
        {
          "story": "Dos estratos tienen 81 y 27 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "10",
            "12"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 78 y 26 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 1248",
            "14 / 1248",
            "12 / 1250"
          ],
          "answer": 1,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 1248."
        },
        {
          "story": "Dos estratos tienen 84 y 28 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Cuál es la media estratificada estimada? ¿Qué total de ventas se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 1344",
            "12 / 1346",
            "12 / 1344"
          ],
          "answer": 3,
          "hint": "Pondera cada media por el peso del estrato.",
          "explanation": "Pondera cada media por el peso del estrato. Resultado: 12. Multiplica la media ponderada por la población. Segundo resultado: 1344."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas se estima?",
      "facil": [
        {
          "story": "Dos estratos tienen 75 y 25 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1380",
            "1020",
            "1200"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1200."
        },
        {
          "story": "Dos estratos tienen 81 y 27 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1102",
            "1296",
            "1490"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1296."
        }
      ],
      "dificil": [
        {
          "story": "Dos estratos tienen 78 y 26 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1435 / 0,25",
            "1248 / 187,25",
            "1248 / 0,25"
          ],
          "answer": 3,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1248. Divide su tamaño entre el total. Segundo resultado: 0,25."
        },
        {
          "story": "Dos estratos tienen 84 y 28 unidades. Las medias muestrales de ventas son 10 y 18.",
          "prompt": "¿Qué total de ventas se estima? ¿Cuál es el peso poblacional del estrato menor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1344 / 202,25",
            "1344 / 0,25",
            "1546 / 0,25"
          ],
          "answer": 2,
          "hint": "Multiplica la media ponderada por la población.",
          "explanation": "Multiplica la media ponderada por la población. Resultado: 1344. Divide su tamaño entre el total. Segundo resultado: 0,25."
        }
      ]
    }
  ]
},
{
  "id": "1800019-5",
  "nombre": "Bloque 5 · Muestreo por conglomerados",
  "apartados": [
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 5 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,4",
            "0,46",
            "0,34"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,4."
        },
        {
          "story": "Se sortean 2 barrios de 7 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3357",
            "0,2357",
            "0,2857"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,2857."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 6 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3333 / 3",
            "0,3833 / 3",
            "0,3333 / 3,05"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,3333. Invierte la probabilidad de inclusión. Segundo resultado: 3."
        },
        {
          "story": "Se sortean 2 barrios de 8 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3 / 4",
            "0,25 / 4,05",
            "0,25 / 4"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,25. Invierte la probabilidad de inclusión. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 5 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2,875",
            "2,125",
            "2,5"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 2,5."
        },
        {
          "story": "Se sortean 2 barrios de 7 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2,975",
            "3,5",
            "4,025"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 3,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 6 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 240",
            "3 / 241",
            "3 / 240"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 3. Expande la suma de los dos totales observados. Segundo resultado: 240."
        },
        {
          "story": "Se sortean 2 barrios de 8 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 321",
            "4 / 320",
            "5 / 320"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 4. Expande la suma de los dos totales observados. Segundo resultado: 320."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 5 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "170",
            "200",
            "230"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 200."
        },
        {
          "story": "Se sortean 2 barrios de 7 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "280",
            "322",
            "238"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 280."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 6 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "240 / 36,3333",
            "240 / 0,3333",
            "276 / 0,3333"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 240. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,3333."
        },
        {
          "story": "Se sortean 2 barrios de 8 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "320 / 0,25",
            "368 / 0,25",
            "320 / 48,25"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 320. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,25."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 9 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2722",
            "0,1722",
            "0,2222"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,2222."
        },
        {
          "story": "Se sortean 2 barrios de 11 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1318",
            "0,1818",
            "0,2318"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1818."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 10 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 5",
            "0,2 / 5,05",
            "0,2 / 5"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,2. Invierte la probabilidad de inclusión. Segundo resultado: 5."
        },
        {
          "story": "Se sortean 2 barrios de 12 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1667 / 6,05",
            "0,1667 / 6",
            "0,2167 / 6"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1667. Invierte la probabilidad de inclusión. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 9 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3,825",
            "4,5",
            "5,175"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 4,5."
        },
        {
          "story": "Se sortean 2 barrios de 11 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5,5",
            "6,325",
            "4,675"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 5,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 10 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 401",
            "5 / 400",
            "6 / 400"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 5. Expande la suma de los dos totales observados. Segundo resultado: 400."
        },
        {
          "story": "Se sortean 2 barrios de 12 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 480",
            "7 / 480",
            "6 / 481"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 6. Expande la suma de los dos totales observados. Segundo resultado: 480."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 9 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "360",
            "414",
            "306"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 360."
        },
        {
          "story": "Se sortean 2 barrios de 11 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "506",
            "374",
            "440"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 440."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 10 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "400 / 0,2",
            "460 / 0,2",
            "400 / 60,2"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 400. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,2."
        },
        {
          "story": "Se sortean 2 barrios de 12 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "552 / 0,1667",
            "480 / 72,1667",
            "480 / 0,1667"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 480. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,1667."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 13 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1038",
            "0,1538",
            "0,2038"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1538."
        },
        {
          "story": "Se sortean 2 barrios de 15 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1333",
            "0,1833",
            "0,0833"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1333."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 14 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1429 / 7,05",
            "0,1429 / 7",
            "0,1929 / 7"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1429. Invierte la probabilidad de inclusión. Segundo resultado: 7."
        },
        {
          "story": "Se sortean 2 barrios de 16 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,125 / 8",
            "0,175 / 8",
            "0,125 / 8,05"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,125. Invierte la probabilidad de inclusión. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 13 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6,5",
            "7,475",
            "5,525"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 6,5."
        },
        {
          "story": "Se sortean 2 barrios de 15 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,625",
            "6,375",
            "7,5"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 7,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 14 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 560",
            "8 / 560",
            "7 / 561"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 7. Expande la suma de los dos totales observados. Segundo resultado: 560."
        },
        {
          "story": "Se sortean 2 barrios de 16 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 640",
            "8 / 641",
            "8 / 640"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 8. Expande la suma de los dos totales observados. Segundo resultado: 640."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 13 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "598",
            "442",
            "520"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 520."
        },
        {
          "story": "Se sortean 2 barrios de 15 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "510",
            "600",
            "690"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 600."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 14 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "644 / 0,1429",
            "560 / 84,1429",
            "560 / 0,1429"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 560. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,1429."
        },
        {
          "story": "Se sortean 2 barrios de 16 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "640 / 96,125",
            "640 / 0,125",
            "736 / 0,125"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 640. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,125."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 17 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1176",
            "0,1676",
            "0,0676"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1176."
        },
        {
          "story": "Se sortean 2 barrios de 19 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1553",
            "0,0553",
            "0,1053"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1053."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 18 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1111 / 9",
            "0,1611 / 9",
            "0,1111 / 9,05"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1111. Invierte la probabilidad de inclusión. Segundo resultado: 9."
        },
        {
          "story": "Se sortean 2 barrios de 20 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,1. Invierte la probabilidad de inclusión. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 17 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9,775",
            "7,225",
            "8,5"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 8,5."
        },
        {
          "story": "Se sortean 2 barrios de 19 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,075",
            "9,5",
            "10,925"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 9,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 18 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 720",
            "9 / 721",
            "9 / 720"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 9. Expande la suma de los dos totales observados. Segundo resultado: 720."
        },
        {
          "story": "Se sortean 2 barrios de 20 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 802",
            "10 / 800",
            "12 / 800"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10. Expande la suma de los dos totales observados. Segundo resultado: 800."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 17 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "578",
            "680",
            "782"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 680."
        },
        {
          "story": "Se sortean 2 barrios de 19 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "760",
            "874",
            "646"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 760."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 18 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "720 / 108,1111",
            "720 / 0,1111",
            "828 / 0,1111"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 720. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,1111."
        },
        {
          "story": "Se sortean 2 barrios de 20 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "800 / 0,1",
            "920 / 0,1",
            "800 / 120,1"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 800. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,1."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 21 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1452",
            "0,0452",
            "0,0952"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0952."
        },
        {
          "story": "Se sortean 2 barrios de 23 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,037",
            "0,087",
            "0,137"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,087."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 22 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1409 / 11",
            "0,0909 / 11,05",
            "0,0909 / 11"
          ],
          "answer": 3,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0909. Invierte la probabilidad de inclusión. Segundo resultado: 11."
        },
        {
          "story": "Se sortean 2 barrios de 24 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0833 / 12,05",
            "0,0833 / 12",
            "0,1333 / 12"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0833. Invierte la probabilidad de inclusión. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 21 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8,925",
            "10,5",
            "12,075"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 10,5."
        },
        {
          "story": "Se sortean 2 barrios de 23 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11,5",
            "13,225",
            "9,775"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 11,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 22 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "11 / 882",
            "11 / 880",
            "13 / 880"
          ],
          "answer": 2,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 11. Expande la suma de los dos totales observados. Segundo resultado: 880."
        },
        {
          "story": "Se sortean 2 barrios de 24 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 960",
            "14 / 960",
            "12 / 962"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 12. Expande la suma de los dos totales observados. Segundo resultado: 960."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 21 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "840",
            "966",
            "714"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 840."
        },
        {
          "story": "Se sortean 2 barrios de 23 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1058",
            "782",
            "920"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 920."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 22 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "880 / 0,0909",
            "1012 / 0,0909",
            "880 / 132,0909"
          ],
          "answer": 1,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 880. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,0909."
        },
        {
          "story": "Se sortean 2 barrios de 24 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1104 / 0,0833",
            "960 / 144,0833",
            "960 / 0,0833"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 960. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,0833."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad de inclusión tiene cada barrio?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 25 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,03",
            "0,08",
            "0,13"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,08."
        },
        {
          "story": "Se sortean 2 barrios de 27 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0741",
            "0,1241",
            "0,0241"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0741."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 26 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0769 / 13,05",
            "0,0769 / 13",
            "0,1269 / 13"
          ],
          "answer": 2,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0769. Invierte la probabilidad de inclusión. Segundo resultado: 13."
        },
        {
          "story": "Se sortean 2 barrios de 28 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué probabilidad de inclusión tiene cada barrio? ¿Qué peso tiene cada total observado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0714 / 14",
            "0,1214 / 14",
            "0,0714 / 14,05"
          ],
          "answer": 1,
          "hint": "Divide barrios elegidos entre barrios existentes.",
          "explanation": "Divide barrios elegidos entre barrios existentes. Resultado: 0,0714. Invierte la probabilidad de inclusión. Segundo resultado: 14."
        }
      ]
    },
    {
      "nombre": "¿Qué peso tiene cada total observado?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 25 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12,5",
            "14,375",
            "10,625"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 12,5."
        },
        {
          "story": "Se sortean 2 barrios de 27 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15,525",
            "11,475",
            "13,5"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 13,5."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 26 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 1040",
            "15 / 1040",
            "13 / 1042"
          ],
          "answer": 1,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 13. Expande la suma de los dos totales observados. Segundo resultado: 1040."
        },
        {
          "story": "Se sortean 2 barrios de 28 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué peso tiene cada total observado? ¿Qué total de ventas estima el diseño? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 1120",
            "14 / 1122",
            "14 / 1120"
          ],
          "answer": 3,
          "hint": "Invierte la probabilidad de inclusión.",
          "explanation": "Invierte la probabilidad de inclusión. Resultado: 14. Expande la suma de los dos totales observados. Segundo resultado: 1120."
        }
      ]
    },
    {
      "nombre": "¿Qué total de ventas estima el diseño?",
      "facil": [
        {
          "story": "Se sortean 2 barrios de 25 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1150",
            "850",
            "1000"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 1000."
        },
        {
          "story": "Se sortean 2 barrios de 27 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? Redondea a cuatro decimales si es necesario.",
          "options": [
            "918",
            "1080",
            "1242"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 1080."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 barrios de 26 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1196 / 0,0769",
            "1040 / 156,0769",
            "1040 / 0,0769"
          ],
          "answer": 3,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 1040. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,0769."
        },
        {
          "story": "Se sortean 2 barrios de 28 con igual probabilidad y se encuesta a todas sus tiendas. Los barrios elegidos suman 30 y 50 ventas.",
          "prompt": "¿Qué total de ventas estima el diseño? ¿Qué probabilidad de inclusión tiene cada barrio? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1120 / 168,0714",
            "1120 / 0,0714",
            "1288 / 0,0714"
          ],
          "answer": 2,
          "hint": "Expande la suma de los dos totales observados.",
          "explanation": "Expande la suma de los dos totales observados. Resultado: 1120. Divide barrios elegidos entre barrios existentes. Segundo resultado: 0,0714."
        }
      ]
    }
  ]
},
{
  "id": "1800019-6",
  "nombre": "Bloque 6 · Muestreo sistemático",
  "apartados": [
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 50 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 5."
        },
        {
          "story": "Un marco ordenado de 70 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "6",
            "7"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 60 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 53",
            "7 / 53",
            "6 / 54"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 6. Suma al arranque el salto por el número de avances. Segundo resultado: 53."
        },
        {
          "story": "Un marco ordenado de 80 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 73",
            "8 / 74",
            "8 / 73"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 8. Suma al arranque el salto por el número de avances. Segundo resultado: 73."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 50 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "49",
            "37",
            "43"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 43."
        },
        {
          "story": "Un marco ordenado de 70 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "54",
            "63",
            "72"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 63."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 60 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "61 / 10",
            "53 / 18",
            "53 / 10"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 53. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 80 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "73 / 21",
            "73 / 10",
            "84 / 10"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 73. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 50 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 70 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 60 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 8",
            "10 / 6",
            "12 / 6"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 6."
        },
        {
          "story": "Un marco ordenado de 80 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 8",
            "12 / 8",
            "10 / 10"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 90 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "8",
            "9"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 9."
        },
        {
          "story": "Un marco ordenado de 110 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "11",
            "13"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 100 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 93",
            "10 / 95",
            "10 / 93"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 10. Suma al arranque el salto por el número de avances. Segundo resultado: 93."
        },
        {
          "story": "Un marco ordenado de 120 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 115",
            "12 / 113",
            "14 / 113"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 12. Suma al arranque el salto por el número de avances. Segundo resultado: 113."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 90 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "71",
            "83",
            "95"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 83."
        },
        {
          "story": "Un marco ordenado de 110 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "103",
            "118",
            "88"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 103."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 100 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "93 / 24",
            "93 / 10",
            "107 / 10"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 93. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 120 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "113 / 10",
            "130 / 10",
            "113 / 27"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 113. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 90 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 110 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 100 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 10",
            "12 / 10",
            "10 / 12"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 120 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 12",
            "10 / 14",
            "10 / 12"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 130 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 13."
        },
        {
          "story": "Un marco ordenado de 150 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 140 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 135",
            "14 / 133",
            "16 / 133"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 14. Suma al arranque el salto por el número de avances. Segundo resultado: 133."
        },
        {
          "story": "Un marco ordenado de 160 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 153",
            "18 / 153",
            "16 / 155"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 16. Suma al arranque el salto por el número de avances. Segundo resultado: 153."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 130 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "123",
            "141",
            "105"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 123."
        },
        {
          "story": "Un marco ordenado de 150 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "164",
            "122",
            "143"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 143."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 140 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "133 / 10",
            "153 / 10",
            "133 / 30"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 133. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 160 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "176 / 10",
            "153 / 33",
            "153 / 10"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 153. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 130 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 150 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 140 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 14",
            "10 / 16",
            "10 / 14"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 14."
        },
        {
          "story": "Un marco ordenado de 160 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 18",
            "10 / 16",
            "12 / 16"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 170 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "14"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 17."
        },
        {
          "story": "Un marco ordenado de 190 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "16",
            "19"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 19."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 180 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 173",
            "21 / 173",
            "18 / 176"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 18. Suma al arranque el salto por el número de avances. Segundo resultado: 173."
        },
        {
          "story": "Un marco ordenado de 200 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 193",
            "20 / 196",
            "20 / 193"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 20. Suma al arranque el salto por el número de avances. Segundo resultado: 193."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 170 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "187",
            "139",
            "163"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 163."
        },
        {
          "story": "Un marco ordenado de 190 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "156",
            "183",
            "210"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 183."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 180 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "199 / 10",
            "173 / 36",
            "173 / 10"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 173. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 200 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "193 / 39",
            "193 / 10",
            "222 / 10"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 193. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 170 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 190 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 180 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 20",
            "10 / 18",
            "12 / 18"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 18."
        },
        {
          "story": "Un marco ordenado de 200 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 20",
            "12 / 20",
            "10 / 22"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 210 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 21."
        },
        {
          "story": "Un marco ordenado de 230 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 220 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 213",
            "22 / 216",
            "22 / 213"
          ],
          "answer": 3,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 22. Suma al arranque el salto por el número de avances. Segundo resultado: 213."
        },
        {
          "story": "Un marco ordenado de 240 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 237",
            "24 / 233",
            "28 / 233"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 24. Suma al arranque el salto por el número de avances. Segundo resultado: 233."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 210 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "173",
            "203",
            "233"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 203."
        },
        {
          "story": "Un marco ordenado de 230 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "223",
            "256",
            "190"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 223."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 220 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "213 / 42",
            "213 / 10",
            "245 / 10"
          ],
          "answer": 2,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 213. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 240 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "233 / 10",
            "268 / 10",
            "233 / 45"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 233. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 210 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 230 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 220 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 22",
            "12 / 22",
            "10 / 24"
          ],
          "answer": 1,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 22."
        },
        {
          "story": "Un marco ordenado de 240 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 24",
            "10 / 26",
            "10 / 24"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántos clientes entran en la muestra?",
      "facil": [
        {
          "story": "Un marco ordenado de 250 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "25",
            "29"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 25."
        },
        {
          "story": "Un marco ordenado de 270 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? Redondea a cuatro decimales si es necesario.",
          "options": [
            "27",
            "31",
            "23"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 27."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 260 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 257",
            "26 / 253",
            "30 / 253"
          ],
          "answer": 2,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 26. Suma al arranque el salto por el número de avances. Segundo resultado: 253."
        },
        {
          "story": "Un marco ordenado de 280 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Cuántos clientes entran en la muestra? ¿Qué posición ocupa la última selección? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 273",
            "32 / 273",
            "28 / 277"
          ],
          "answer": 1,
          "hint": "Divide el tamaño del marco por el salto.",
          "explanation": "Divide el tamaño del marco por el salto. Resultado: 28. Suma al arranque el salto por el número de avances. Segundo resultado: 273."
        }
      ]
    },
    {
      "nombre": "¿Qué posición ocupa la última selección?",
      "facil": [
        {
          "story": "Un marco ordenado de 250 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "243",
            "279",
            "207"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 243."
        },
        {
          "story": "Un marco ordenado de 270 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? Redondea a cuatro decimales si es necesario.",
          "options": [
            "302",
            "224",
            "263"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 263."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 260 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "253 / 10",
            "291 / 10",
            "253 / 48"
          ],
          "answer": 1,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 253. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        },
        {
          "story": "Un marco ordenado de 280 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué posición ocupa la última selección? ¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "314 / 10",
            "273 / 51",
            "273 / 10"
          ],
          "answer": 3,
          "hint": "Suma al arranque el salto por el número de avances.",
          "explanation": "Suma al arranque el salto por el número de avances. Resultado: 273. Cada posición tiene probabilidad 1/10. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10?",
      "facil": [
        {
          "story": "Un marco ordenado de 250 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        },
        {
          "story": "Un marco ordenado de 270 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Un marco ordenado de 260 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 26",
            "10 / 28",
            "10 / 26"
          ],
          "answer": 3,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 26."
        },
        {
          "story": "Un marco ordenado de 280 clientes se recorre con salto 10 y arranque aleatorio 3 (posiciones desde 1).",
          "prompt": "¿Qué peso corresponde a cada seleccionado con arranque uniforme de 1 a 10? ¿Cuántos clientes entran en la muestra? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 30",
            "10 / 28",
            "12 / 28"
          ],
          "answer": 2,
          "hint": "Cada posición tiene probabilidad 1/10.",
          "explanation": "Cada posición tiene probabilidad 1/10. Resultado: 10. Divide el tamaño del marco por el salto. Segundo resultado: 28."
        }
      ]
    }
  ]
},
{
  "id": "1800019-7",
  "nombre": "Bloque 7 · Muestreo bietápico",
  "apartados": [
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 5 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,15"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,2."
        },
        {
          "story": "Se sortean 2 de 7 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1929",
            "0,0929",
            "0,1429"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,1429."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 6 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1667 / 6",
            "0,2167 / 6",
            "0,1667 / 6,05"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,1667. Invierte su probabilidad conjunta. Segundo resultado: 6."
        },
        {
          "story": "Se sortean 2 de 8 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,175 / 8",
            "0,125 / 8,05",
            "0,125 / 8"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,125. Invierte su probabilidad conjunta. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 5 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "4",
            "5"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 5."
        },
        {
          "story": "Se sortean 2 de 7 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 6 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 10",
            "6 / 11",
            "6 / 10"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 6. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 8 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / 11",
            "8 / 10",
            "9 / 10"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 8. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 5 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 7 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 6 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 2,1667",
            "10 / 0,1667",
            "12 / 0,1667"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,1667."
        },
        {
          "story": "Se sortean 2 de 8 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 0,125",
            "12 / 0,125",
            "10 / 2,125"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,125."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 9 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1611",
            "0,0611",
            "0,1111"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,1111."
        },
        {
          "story": "Se sortean 2 de 11 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0409",
            "0,0909",
            "0,1409"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0909."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 10 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 10",
            "0,1 / 10,05",
            "0,1 / 10"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,1. Invierte su probabilidad conjunta. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 12 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0833 / 12,05",
            "0,0833 / 12",
            "0,1333 / 12"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0833. Invierte su probabilidad conjunta. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 9 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "9",
            "10"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 9."
        },
        {
          "story": "Se sortean 2 de 11 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "9"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 10 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 12",
            "10 / 10",
            "12 / 10"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 10. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 12 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 10",
            "14 / 10",
            "12 / 12"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 12. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 9 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 11 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 10 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 0,1",
            "12 / 0,1",
            "10 / 2,1"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,1."
        },
        {
          "story": "Se sortean 2 de 12 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 0,0833",
            "10 / 2,0833",
            "10 / 0,0833"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0833."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 13 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0269",
            "0,0769",
            "0,1269"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0769."
        },
        {
          "story": "Se sortean 2 de 15 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0667",
            "0,1167",
            "0,0167"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0667."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 14 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0714 / 14,05",
            "0,0714 / 14",
            "0,1214 / 14"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0714. Invierte su probabilidad conjunta. Segundo resultado: 14."
        },
        {
          "story": "Se sortean 2 de 16 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0625 / 16",
            "0,1125 / 16",
            "0,0625 / 16,05"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0625. Invierte su probabilidad conjunta. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 13 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 13."
        },
        {
          "story": "Se sortean 2 de 15 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 14 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 10",
            "16 / 10",
            "14 / 12"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 14. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 16 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 10",
            "16 / 12",
            "16 / 10"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 16. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 13 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 15 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 14 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 0,0714",
            "10 / 2,0714",
            "10 / 0,0714"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0714."
        },
        {
          "story": "Se sortean 2 de 16 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 2,0625",
            "10 / 0,0625",
            "12 / 0,0625"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0625."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 17 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0588",
            "0,1088",
            "0,0088"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0588."
        },
        {
          "story": "Se sortean 2 de 19 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1026",
            "0,0026",
            "0,0526"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0526."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 18 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0556 / 18",
            "0,1056 / 18",
            "0,0556 / 18,05"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0556. Invierte su probabilidad conjunta. Segundo resultado: 18."
        },
        {
          "story": "Se sortean 2 de 20 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 20",
            "0,05 / 20,05",
            "0,05 / 20"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,05. Invierte su probabilidad conjunta. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 17 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "14",
            "17"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 17."
        },
        {
          "story": "Se sortean 2 de 19 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "16",
            "19",
            "22"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 19."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 18 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 10",
            "18 / 13",
            "18 / 10"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 18. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 20 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 13",
            "20 / 10",
            "23 / 10"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 20. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 17 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 19 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 18 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 2,0556",
            "10 / 0,0556",
            "12 / 0,0556"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0556."
        },
        {
          "story": "Se sortean 2 de 20 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 0,05",
            "12 / 0,05",
            "10 / 2,05"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,05."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 21 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0976",
            "-0,0024",
            "0,0476"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0476."
        },
        {
          "story": "Se sortean 2 de 23 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,0065",
            "0,0435",
            "0,0935"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0435."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 22 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0955 / 22",
            "0,0455 / 22,05",
            "0,0455 / 22"
          ],
          "answer": 3,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0455. Invierte su probabilidad conjunta. Segundo resultado: 22."
        },
        {
          "story": "Se sortean 2 de 24 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0417 / 24,05",
            "0,0417 / 24",
            "0,0917 / 24"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0417. Invierte su probabilidad conjunta. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 21 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "24"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 21."
        },
        {
          "story": "Se sortean 2 de 23 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 22 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "22 / 13",
            "22 / 10",
            "25 / 10"
          ],
          "answer": 2,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 22. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 24 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 10",
            "28 / 10",
            "24 / 14"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 24. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 21 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 23 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 22 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 0,0455",
            "12 / 0,0455",
            "10 / 2,0455"
          ],
          "answer": 1,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0455."
        },
        {
          "story": "Se sortean 2 de 24 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 0,0417",
            "10 / 2,0417",
            "10 / 0,0417"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0417."
        }
      ]
    },
    {
      "nombre": "¿Qué probabilidad tiene una tienda de entrar?",
      "facil": [
        {
          "story": "Se sortean 2 de 25 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,04."
        },
        {
          "story": "Se sortean 2 de 27 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,037",
            "0,087",
            "-0,013"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,037."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 26 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0385 / 26,05",
            "0,0385 / 26",
            "0,0885 / 26"
          ],
          "answer": 2,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0385. Invierte su probabilidad conjunta. Segundo resultado: 26."
        },
        {
          "story": "Se sortean 2 de 28 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Qué probabilidad tiene una tienda de entrar? ¿Cuál es el peso de una tienda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0357 / 28",
            "0,0857 / 28",
            "0,0357 / 28,05"
          ],
          "answer": 1,
          "hint": "Multiplica las probabilidades de ambas etapas.",
          "explanation": "Multiplica las probabilidades de ambas etapas. Resultado: 0,0357. Invierte su probabilidad conjunta. Segundo resultado: 28."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el peso de una tienda?",
      "facil": [
        {
          "story": "Se sortean 2 de 25 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "29",
            "21"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 25."
        },
        {
          "story": "Se sortean 2 de 27 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "31",
            "23",
            "27"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 27."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 26 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 10",
            "30 / 10",
            "26 / 14"
          ],
          "answer": 1,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 26. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        },
        {
          "story": "Se sortean 2 de 28 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuál es el peso de una tienda? ¿Cuántas tiendas se observan en total? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 10",
            "28 / 14",
            "28 / 10"
          ],
          "answer": 3,
          "hint": "Invierte su probabilidad conjunta.",
          "explanation": "Invierte su probabilidad conjunta. Resultado: 28. Multiplica los distritos elegidos por las tiendas por distrito. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "¿Cuántas tiendas se observan en total?",
      "facil": [
        {
          "story": "Se sortean 2 de 25 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        },
        {
          "story": "Se sortean 2 de 27 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "10",
            "12"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Se sortean 2 de 26 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 0,0385",
            "10 / 2,0385",
            "10 / 0,0385"
          ],
          "answer": 3,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0385."
        },
        {
          "story": "Se sortean 2 de 28 distritos. En cada distrito elegido se seleccionan 5 de 10 tiendas al azar.",
          "prompt": "¿Cuántas tiendas se observan en total? ¿Qué probabilidad tiene una tienda de entrar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 2,0357",
            "10 / 0,0357",
            "12 / 0,0357"
          ],
          "answer": 2,
          "hint": "Multiplica los distritos elegidos por las tiendas por distrito.",
          "explanation": "Multiplica los distritos elegidos por las tiendas por distrito. Resultado: 10. Multiplica las probabilidades de ambas etapas. Segundo resultado: 0,0357."
        }
      ]
    }
  ]
},
{
  "id": "1800019-8",
  "nombre": "Bloque 8 · Diseños no aleatorios",
  "apartados": [
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 25 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 15."
        },
        {
          "story": "Un sondeo por cuotas fija 35 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 30 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 12",
            "21 / 12",
            "18 / 15"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 18. Resta las entrevistas de residentes. Segundo resultado: 12."
        },
        {
          "story": "Un sondeo por cuotas fija 40 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 16",
            "24 / 20",
            "24 / 16"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 24. Resta las entrevistas de residentes. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 25 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 10."
        },
        {
          "story": "Un sondeo por cuotas fija 35 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 30 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 21",
            "12 / 23",
            "12 / 21"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 12. Suma las sustituciones a la cuota inicial. Segundo resultado: 21."
        },
        {
          "story": "Un sondeo por cuotas fija 40 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 29",
            "16 / 27",
            "18 / 27"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 16. Suma las sustituciones a la cuota inicial. Segundo resultado: 27."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 25 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "18",
            "21"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 18."
        },
        {
          "story": "Un sondeo por cuotas fija 35 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "28",
            "20"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 24."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 30 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 21",
            "21 / 18",
            "24 / 18"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 21. Aplica el 60 % al objetivo total. Segundo resultado: 18."
        },
        {
          "story": "Un sondeo por cuotas fija 40 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "27 / 24",
            "31 / 24",
            "27 / 28"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 27. Aplica el 60 % al objetivo total. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 45 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "31",
            "23",
            "27"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 27."
        },
        {
          "story": "Un sondeo por cuotas fija 55 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28",
            "33",
            "38"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 33."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 50 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 20",
            "30 / 25",
            "30 / 20"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 30. Resta las entrevistas de residentes. Segundo resultado: 20."
        },
        {
          "story": "Un sondeo por cuotas fija 60 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "36 / 29",
            "36 / 24",
            "41 / 24"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 36. Resta las entrevistas de residentes. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 45 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "18",
            "21"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 18."
        },
        {
          "story": "Un sondeo por cuotas fija 55 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "25",
            "19"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 22."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 50 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 36",
            "20 / 33",
            "23 / 33"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 20. Suma las sustituciones a la cuota inicial. Segundo resultado: 33."
        },
        {
          "story": "Un sondeo por cuotas fija 60 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 39",
            "28 / 39",
            "24 / 43"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 24. Suma las sustituciones a la cuota inicial. Segundo resultado: 39."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 45 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 30."
        },
        {
          "story": "Un sondeo por cuotas fija 55 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "41",
            "31",
            "36"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 36."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 50 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "33 / 30",
            "38 / 30",
            "33 / 35"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 33. Aplica el 60 % al objetivo total. Segundo resultado: 30."
        },
        {
          "story": "Un sondeo por cuotas fija 60 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "45 / 36",
            "39 / 42",
            "39 / 36"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 39. Aplica el 60 % al objetivo total. Segundo resultado: 36."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 65 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "33",
            "39",
            "45"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 39."
        },
        {
          "story": "Un sondeo por cuotas fija 75 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "45",
            "52",
            "38"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 45."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 70 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "42 / 34",
            "42 / 28",
            "48 / 28"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 42. Resta las entrevistas de residentes. Segundo resultado: 28."
        },
        {
          "story": "Un sondeo por cuotas fija 80 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 32",
            "55 / 32",
            "48 / 39"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 48. Resta las entrevistas de residentes. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 65 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "30",
            "22"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 26."
        },
        {
          "story": "Un sondeo por cuotas fija 75 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 70 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 45",
            "32 / 45",
            "28 / 49"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 28. Suma las sustituciones a la cuota inicial. Segundo resultado: 45."
        },
        {
          "story": "Un sondeo por cuotas fija 80 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 51",
            "32 / 56",
            "32 / 51"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 32. Suma las sustituciones a la cuota inicial. Segundo resultado: 51."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 65 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48",
            "36",
            "42"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 42."
        },
        {
          "story": "Un sondeo por cuotas fija 75 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "41",
            "48",
            "55"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 48."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 70 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "52 / 42",
            "45 / 49",
            "45 / 42"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 45. Aplica el 60 % al objetivo total. Segundo resultado: 42."
        },
        {
          "story": "Un sondeo por cuotas fija 80 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "51 / 56",
            "51 / 48",
            "59 / 48"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 51. Aplica el 60 % al objetivo total. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 85 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "51",
            "59",
            "43"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 51."
        },
        {
          "story": "Un sondeo por cuotas fija 95 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "66",
            "48",
            "57"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 57."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 90 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "54 / 36",
            "62 / 36",
            "54 / 44"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 54. Resta las entrevistas de residentes. Segundo resultado: 36."
        },
        {
          "story": "Un sondeo por cuotas fija 100 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "69 / 40",
            "60 / 49",
            "60 / 40"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 60. Resta las entrevistas de residentes. Segundo resultado: 40."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 85 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "39",
            "29",
            "34"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 34."
        },
        {
          "story": "Un sondeo por cuotas fija 95 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "38",
            "44"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 38."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 90 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "41 / 57",
            "36 / 62",
            "36 / 57"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 36. Suma las sustituciones a la cuota inicial. Segundo resultado: 57."
        },
        {
          "story": "Un sondeo por cuotas fija 100 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "40 / 69",
            "40 / 63",
            "46 / 63"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 40. Suma las sustituciones a la cuota inicial. Segundo resultado: 63."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 85 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "54",
            "62"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 54."
        },
        {
          "story": "Un sondeo por cuotas fija 95 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60",
            "69",
            "51"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 90 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "57 / 63",
            "57 / 54",
            "66 / 54"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 57. Aplica el 60 % al objetivo total. Segundo resultado: 54."
        },
        {
          "story": "Un sondeo por cuotas fija 100 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "63 / 60",
            "72 / 60",
            "63 / 69"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 63. Aplica el 60 % al objetivo total. Segundo resultado: 60."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 105 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "72",
            "54",
            "63"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 63."
        },
        {
          "story": "Un sondeo por cuotas fija 115 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "69",
            "79"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 69."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 110 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "76 / 44",
            "66 / 54",
            "66 / 44"
          ],
          "answer": 3,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 66. Resta las entrevistas de residentes. Segundo resultado: 44."
        },
        {
          "story": "Un sondeo por cuotas fija 120 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 59",
            "72 / 48",
            "83 / 48"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 72. Resta las entrevistas de residentes. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 105 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "36",
            "42",
            "48"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 42."
        },
        {
          "story": "Un sondeo por cuotas fija 115 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "53",
            "39"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 110 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 76",
            "44 / 69",
            "51 / 69"
          ],
          "answer": 2,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 44. Suma las sustituciones a la cuota inicial. Segundo resultado: 69."
        },
        {
          "story": "Un sondeo por cuotas fija 120 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 75",
            "55 / 75",
            "48 / 82"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 48. Suma las sustituciones a la cuota inicial. Segundo resultado: 75."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 105 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "66",
            "76",
            "56"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 66."
        },
        {
          "story": "Un sondeo por cuotas fija 115 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "83",
            "61",
            "72"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 72."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 110 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "69 / 66",
            "79 / 66",
            "69 / 76"
          ],
          "answer": 1,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 69. Aplica el 60 % al objetivo total. Segundo resultado: 66."
        },
        {
          "story": "Un sondeo por cuotas fija 120 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "86 / 72",
            "75 / 83",
            "75 / 72"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 75. Aplica el 60 % al objetivo total. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas de residentes fija la cuota?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 125 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "64",
            "75",
            "86"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 75."
        },
        {
          "story": "Un sondeo por cuotas fija 135 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "93",
            "69"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 81."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 130 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "78 / 64",
            "78 / 52",
            "90 / 52"
          ],
          "answer": 2,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 78. Resta las entrevistas de residentes. Segundo resultado: 52."
        },
        {
          "story": "Un sondeo por cuotas fija 140 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas de residentes fija la cuota? ¿Cuántas entrevistas corresponden a visitantes? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84 / 56",
            "97 / 56",
            "84 / 69"
          ],
          "answer": 1,
          "hint": "Aplica el 60 % al objetivo total.",
          "explanation": "Aplica el 60 % al objetivo total. Resultado: 84. Resta las entrevistas de residentes. Segundo resultado: 56."
        }
      ]
    },
    {
      "nombre": "¿Cuántas entrevistas corresponden a visitantes?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 125 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "50",
            "58",
            "42"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 50."
        },
        {
          "story": "Un sondeo por cuotas fija 135 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Redondea a cuatro decimales si es necesario.",
          "options": [
            "62",
            "46",
            "54"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 54."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 130 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "52 / 81",
            "60 / 81",
            "52 / 89"
          ],
          "answer": 1,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 52. Suma las sustituciones a la cuota inicial. Segundo resultado: 81."
        },
        {
          "story": "Un sondeo por cuotas fija 140 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "¿Cuántas entrevistas corresponden a visitantes? Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "64 / 87",
            "56 / 95",
            "56 / 87"
          ],
          "answer": 3,
          "hint": "Resta las entrevistas de residentes.",
          "explanation": "Resta las entrevistas de residentes. Resultado: 56. Suma las sustituciones a la cuota inicial. Segundo resultado: 87."
        }
      ]
    },
    {
      "nombre": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan?",
      "facil": [
        {
          "story": "Un sondeo por cuotas fija 125 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "90",
            "66",
            "78"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 78."
        },
        {
          "story": "Un sondeo por cuotas fija 135 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? Redondea a cuatro decimales si es necesario.",
          "options": [
            "71",
            "84",
            "97"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 84."
        }
      ],
      "dificil": [
        {
          "story": "Un sondeo por cuotas fija 130 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "93 / 78",
            "81 / 90",
            "81 / 78"
          ],
          "answer": 3,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 81. Aplica el 60 % al objetivo total. Segundo resultado: 78."
        },
        {
          "story": "Un sondeo por cuotas fija 140 entrevistas: el 60 % a residentes y el resto a visitantes. El entrevistador elige a quién abordar.",
          "prompt": "Si faltan tres visitantes y se sustituyen por residentes, ¿cuántos residentes quedan? ¿Cuántas entrevistas de residentes fija la cuota? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "87 / 97",
            "87 / 84",
            "100 / 84"
          ],
          "answer": 2,
          "hint": "Suma las sustituciones a la cuota inicial.",
          "explanation": "Suma las sustituciones a la cuota inicial. Resultado: 87. Aplica el 60 % al objetivo total. Segundo resultado: 84."
        }
      ]
    }
  ]
},
{
  "id": "1800019-9",
  "nombre": "Bloque 9 · Errores ajenos al diseño muestral",
  "apartados": [
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 50 personas; 40 responden y 5 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 70 personas; 56 responden y 7 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 60 personas; 48 responden y 6 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 42",
            "92 / 42",
            "80 / 54"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 42."
        },
        {
          "story": "Una encuesta invita a 80 personas; 64 responden y 8 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 56",
            "80 / 68",
            "80 / 56"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 56."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 50 personas; 40 responden y 5 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "40",
            "30",
            "35"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 35."
        },
        {
          "story": "Una encuesta invita a 70 personas; 56 responden y 7 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "42",
            "49",
            "56"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 49."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 60 personas; 48 responden y 6 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 70",
            "42 / 76",
            "42 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 42. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 80 personas; 64 responden y 8 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "56 / 78",
            "56 / 70",
            "64 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 56. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 50 personas; 40 responden y 5 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 70 personas; 56 responden y 7 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 60 personas; 48 responden y 6 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 80 personas; 64 responden y 8 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 70",
            "80 / 82",
            "80 / 70"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 96",
            "80 / 84",
            "92 / 84"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 84."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "54",
            "63",
            "72"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 63."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "77",
            "89",
            "65"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 77."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 81",
            "70 / 70",
            "81 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 70. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84 / 70",
            "97 / 70",
            "84 / 83"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 84. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 90 personas; 72 responden y 9 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 110 personas; 88 responden y 11 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 100 personas; 80 responden y 10 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 120 personas; 96 responden y 12 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 130 personas; 104 responden y 13 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 150 personas; 120 responden y 15 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 140 personas; 112 responden y 14 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 110",
            "80 / 98",
            "92 / 98"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 98."
        },
        {
          "story": "Una encuesta invita a 160 personas; 128 responden y 16 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 112",
            "92 / 112",
            "80 / 124"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 112."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 130 personas; 104 responden y 13 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "91",
            "105",
            "77"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 91."
        },
        {
          "story": "Una encuesta invita a 150 personas; 120 responden y 15 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "121",
            "89",
            "105"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 105."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 140 personas; 112 responden y 14 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "98 / 70",
            "113 / 70",
            "98 / 85"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 98. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 160 personas; 128 responden y 16 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "129 / 70",
            "112 / 87",
            "112 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 112. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 130 personas; 104 responden y 13 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 150 personas; 120 responden y 15 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 140 personas; 112 responden y 14 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 160 personas; 128 responden y 16 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 126",
            "92 / 126",
            "80 / 138"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 126."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 140",
            "80 / 152",
            "80 / 140"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 140."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "137",
            "101",
            "119"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 119."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "113",
            "133",
            "153"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 133."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "145 / 70",
            "126 / 89",
            "126 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 126. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "140 / 91",
            "140 / 70",
            "161 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 140. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 170 personas; 136 responden y 17 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 190 personas; 152 responden y 19 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 180 personas; 144 responden y 18 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 200 personas; 160 responden y 20 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 210 personas; 168 responden y 21 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 230 personas; 184 responden y 23 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 220 personas; 176 responden y 22 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 154",
            "80 / 166",
            "80 / 154"
          ],
          "answer": 3,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 154."
        },
        {
          "story": "Una encuesta invita a 240 personas; 192 responden y 24 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 180",
            "80 / 168",
            "92 / 168"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 168."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 210 personas; 168 responden y 21 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "125",
            "147",
            "169"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 147."
        },
        {
          "story": "Una encuesta invita a 230 personas; 184 responden y 23 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "161",
            "185",
            "137"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 161."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 220 personas; 176 responden y 22 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "154 / 93",
            "154 / 70",
            "177 / 70"
          ],
          "answer": 2,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 154. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 240 personas; 192 responden y 24 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "168 / 70",
            "193 / 70",
            "168 / 95"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 168. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 210 personas; 168 responden y 21 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "70",
            "81",
            "59"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 230 personas; 184 responden y 23 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 220 personas; 176 responden y 22 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 80",
            "81 / 80",
            "70 / 91"
          ],
          "answer": 1,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 240 personas; 192 responden y 24 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la tasa de respuesta en porcentaje?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "80",
            "92"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "80",
            "92",
            "68"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 194",
            "80 / 182",
            "92 / 182"
          ],
          "answer": 2,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 182."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Cuál es la tasa de respuesta en porcentaje? ¿Cuántas respuestas de gasto son utilizables? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "80 / 196",
            "92 / 196",
            "80 / 208"
          ],
          "answer": 1,
          "hint": "Divide respondentes entre invitados.",
          "explanation": "Divide respondentes entre invitados. Resultado: 80. Descuenta la falta de respuesta al ítem. Segundo resultado: 196."
        }
      ]
    },
    {
      "nombre": "¿Cuántas respuestas de gasto son utilizables?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "175",
            "201",
            "149"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 175."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? Redondea a cuatro decimales si es necesario.",
          "options": [
            "217",
            "161",
            "189"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 189."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "182 / 70",
            "209 / 70",
            "182 / 97"
          ],
          "answer": 1,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 182. Usa el denominador de invitados. Segundo resultado: 70."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Cuántas respuestas de gasto son utilizables? ¿Qué porcentaje del total invitado aporta un gasto utilizable? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "225 / 70",
            "196 / 99",
            "196 / 70"
          ],
          "answer": 3,
          "hint": "Descuenta la falta de respuesta al ítem.",
          "explanation": "Descuenta la falta de respuesta al ítem. Resultado: 196. Usa el denominador de invitados. Segundo resultado: 70."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje del total invitado aporta un gasto utilizable?",
      "facil": [
        {
          "story": "Una encuesta invita a 250 personas; 200 responden y 25 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "59",
            "70"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        },
        {
          "story": "Una encuesta invita a 270 personas; 216 responden y 27 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? Redondea a cuatro decimales si es necesario.",
          "options": [
            "59",
            "70",
            "81"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70."
        }
      ],
      "dificil": [
        {
          "story": "Una encuesta invita a 260 personas; 208 responden y 26 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "81 / 80",
            "70 / 91",
            "70 / 80"
          ],
          "answer": 3,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        },
        {
          "story": "Una encuesta invita a 280 personas; 224 responden y 28 de quienes responden omiten el gasto.",
          "prompt": "¿Qué porcentaje del total invitado aporta un gasto utilizable? ¿Cuál es la tasa de respuesta en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "70 / 91",
            "70 / 80",
            "81 / 80"
          ],
          "answer": 2,
          "hint": "Usa el denominador de invitados.",
          "explanation": "Usa el denominador de invitados. Resultado: 70. Divide respondentes entre invitados. Segundo resultado: 80."
        }
      ]
    }
  ]
}
];

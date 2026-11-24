window.PLAN_1560026 = [
{
  "id": "1560026-1",
  "nombre": "Bloque 1 · Regresión múltiple, aproximación matricial y colinealidad",
  "apartados": [
    {
      "nombre": "¿Cuál es la demanda ajustada?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 10 y Z = 5.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 13."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 14 y Z = 7.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 12 y Z = 6.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 1",
            "16 / 1",
            "14 / 3"
          ],
          "answer": 1,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 14. Combina los dos efectos parciales. Segundo resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 16 y Z = 8.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 1",
            "16 / 3",
            "16 / 1"
          ],
          "answer": 3,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 16. Combina los dos efectos parciales. Segundo resultado: 1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 10 y Z = 5.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "0",
            "1"
          ],
          "answer": 3,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 14 y Z = 7.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0",
            "1",
            "2"
          ],
          "answer": 2,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 12 y Z = 6.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 8",
            "1 / 9",
            "1 / 8"
          ],
          "answer": 3,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 8."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 16 y Z = 8.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1 / 11",
            "1 / 10",
            "2 / 10"
          ],
          "answer": 2,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 10."
        }
      ]
    },
    {
      "nombre": "Si la demanda observada es 10 + X, ¿qué residuo queda?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 10 y Z = 5.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 7."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 14 y Z = 7.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "10",
            "8"
          ],
          "answer": 1,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 9."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 12 y Z = 6.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / 15",
            "8 / 14",
            "9 / 14"
          ],
          "answer": 2,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 8. Sustituye ambos regresores en la ecuación. Segundo resultado: 14."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 16 y Z = 8.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 16",
            "12 / 16",
            "10 / 18"
          ],
          "answer": 1,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 10. Sustituye ambos regresores en la ecuación. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el factor de inflación de la varianza?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 9.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "4",
            "5"
          ],
          "answer": 3,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 11.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 10.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 50",
            "5 / 51",
            "5 / 50"
          ],
          "answer": 3,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 50."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 12.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 61",
            "5 / 60",
            "6 / 60"
          ],
          "answer": 2,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 60."
        }
      ]
    },
    {
      "nombre": "¿Qué varianza resulta con la colinealidad indicada?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 9.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "38",
            "45",
            "52"
          ],
          "answer": 2,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 45."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 11.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "55",
            "63",
            "47"
          ],
          "answer": 1,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 55."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 10.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "50 / 8,2",
            "50 / 0,2",
            "58 / 0,2"
          ],
          "answer": 2,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 50. Calcula 1−R². Segundo resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 12.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 0,2",
            "69 / 0,2",
            "60 / 9,2"
          ],
          "answer": 1,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 60. Calcula 1−R². Segundo resultado: 0,2."
        }
      ]
    },
    {
      "nombre": "¿Qué fracción de variabilidad del predictor queda sin explicar?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 9.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,15"
          ],
          "answer": 1,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 11.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,15",
            "0,2"
          ],
          "answer": 3,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 10.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2 / 5",
            "0,25 / 5",
            "0,2 / 5,05"
          ],
          "answer": 1,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 12.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 5",
            "0,2 / 5,05",
            "0,2 / 5"
          ],
          "answer": 3,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la demanda ajustada?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 26 y Z = 13.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "24"
          ],
          "answer": 2,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 21."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 30 y Z = 15.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 28 y Z = 14.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "22 / 4",
            "22 / 1",
            "25 / 1"
          ],
          "answer": 2,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 22. Combina los dos efectos parciales. Segundo resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 32 y Z = 16.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 1",
            "28 / 1",
            "24 / 5"
          ],
          "answer": 1,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 24. Combina los dos efectos parciales. Segundo resultado: 1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 26 y Z = 13.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "0"
          ],
          "answer": 1,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 30 y Z = 15.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "0",
            "1"
          ],
          "answer": 3,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 28 y Z = 14.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1 / 16",
            "2 / 16",
            "1 / 17"
          ],
          "answer": 1,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 16."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 32 y Z = 16.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 18",
            "1 / 19",
            "1 / 18"
          ],
          "answer": 3,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "Si la demanda observada es 10 + X, ¿qué residuo queda?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 26 y Z = 13.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 15."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 30 y Z = 15.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "17",
            "20"
          ],
          "answer": 2,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 17."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 28 y Z = 14.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 22",
            "16 / 24",
            "16 / 22"
          ],
          "answer": 3,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 16. Sustituye ambos regresores en la ecuación. Segundo resultado: 22."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 32 y Z = 16.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 27",
            "18 / 24",
            "21 / 24"
          ],
          "answer": 2,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 18. Sustituye ambos regresores en la ecuación. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el factor de inflación de la varianza?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 17.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 19.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "4",
            "5"
          ],
          "answer": 3,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 18.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 90",
            "6 / 90",
            "5 / 91"
          ],
          "answer": 1,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 90."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 20.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 100",
            "5 / 101",
            "5 / 100"
          ],
          "answer": 3,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 100."
        }
      ]
    },
    {
      "nombre": "¿Qué varianza resulta con la colinealidad indicada?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 17.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "98",
            "72",
            "85"
          ],
          "answer": 3,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 85."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 19.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "81",
            "95",
            "109"
          ],
          "answer": 2,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 95."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 18.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "104 / 0,2",
            "90 / 14,2",
            "90 / 0,2"
          ],
          "answer": 3,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 90. Calcula 1−R². Segundo resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 20.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "100 / 15,2",
            "100 / 0,2",
            "115 / 0,2"
          ],
          "answer": 2,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 100. Calcula 1−R². Segundo resultado: 0,2."
        }
      ]
    },
    {
      "nombre": "¿Qué fracción de variabilidad del predictor queda sin explicar?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 17.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,2",
            "0,25"
          ],
          "answer": 2,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 19.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,15"
          ],
          "answer": 1,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 18.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2 / 5,05",
            "0,2 / 5",
            "0,25 / 5"
          ],
          "answer": 2,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 20.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2 / 5",
            "0,25 / 5",
            "0,2 / 5,05"
          ],
          "answer": 1,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la demanda ajustada?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 42 y Z = 21.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "33",
            "25",
            "29"
          ],
          "answer": 3,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 29."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 46 y Z = 23.",
          "prompt": "¿Cuál es la demanda ajustada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "31",
            "36"
          ],
          "answer": 2,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 31."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 44 y Z = 22.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 1",
            "30 / 6",
            "30 / 1"
          ],
          "answer": 3,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 30. Combina los dos efectos parciales. Segundo resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 48 y Z = 24.",
          "prompt": "¿Cuál es la demanda ajustada? ¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 6",
            "32 / 1",
            "37 / 1"
          ],
          "answer": 2,
          "hint": "Sustituye ambos regresores en la ecuación.",
          "explanation": "Sustituye ambos regresores en la ecuación. Resultado: 32. Combina los dos efectos parciales. Segundo resultado: 1."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 42 y Z = 21.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0",
            "1",
            "2"
          ],
          "answer": 2,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 46 y Z = 23.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "0"
          ],
          "answer": 1,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 44 y Z = 22.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1 / 25",
            "1 / 24",
            "2 / 24"
          ],
          "answer": 2,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 24."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 48 y Z = 24.",
          "prompt": "¿Cuál es el cambio ajustado si X sube 2 y Z sube 1? Si la demanda observada es 10 + X, ¿qué residuo queda? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1 / 26",
            "2 / 26",
            "1 / 27"
          ],
          "answer": 1,
          "hint": "Combina los dos efectos parciales.",
          "explanation": "Combina los dos efectos parciales. Resultado: 1. Resta la predicción al dato observado. Segundo resultado: 26."
        }
      ]
    },
    {
      "nombre": "Si la demanda observada es 10 + X, ¿qué residuo queda?",
      "facil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 42 y Z = 21.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 23."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 46 y Z = 23.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? Redondea a cuatro decimales si es necesario.",
          "options": [
            "29",
            "21",
            "25"
          ],
          "answer": 3,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 25."
        }
      ],
      "dificil": [
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 44 y Z = 22.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 30",
            "28 / 30",
            "24 / 34"
          ],
          "answer": 1,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 24. Sustituye ambos regresores en la ecuación. Segundo resultado: 30."
        },
        {
          "story": "La demanda ajustada es 8 + 2X − 3Z. En la ficha X = 48 y Z = 24.",
          "prompt": "Si la demanda observada es 10 + X, ¿qué residuo queda? ¿Cuál es la demanda ajustada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 32",
            "26 / 36",
            "26 / 32"
          ],
          "answer": 3,
          "hint": "Resta la predicción al dato observado.",
          "explanation": "Resta la predicción al dato observado. Resultado: 26. Sustituye ambos regresores en la ecuación. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el factor de inflación de la varianza?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 25.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 27.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 26.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 131",
            "5 / 130",
            "6 / 130"
          ],
          "answer": 2,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 130."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 28.",
          "prompt": "¿Cuál es el factor de inflación de la varianza? ¿Qué varianza resulta con la colinealidad indicada? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 140",
            "6 / 140",
            "5 / 141"
          ],
          "answer": 1,
          "hint": "VIF = 1/(1−R²).",
          "explanation": "VIF = 1/(1−R²). Resultado: 5. Multiplica la varianza de referencia por el VIF. Segundo resultado: 140."
        }
      ]
    },
    {
      "nombre": "¿Qué varianza resulta con la colinealidad indicada?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 25.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "125",
            "144",
            "106"
          ],
          "answer": 1,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 125."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 27.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? Redondea a cuatro decimales si es necesario.",
          "options": [
            "155",
            "115",
            "135"
          ],
          "answer": 3,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 135."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 26.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "130 / 0,2",
            "150 / 0,2",
            "130 / 20,2"
          ],
          "answer": 1,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 130. Calcula 1−R². Segundo resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 28.",
          "prompt": "¿Qué varianza resulta con la colinealidad indicada? ¿Qué fracción de variabilidad del predictor queda sin explicar? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "161 / 0,2",
            "140 / 21,2",
            "140 / 0,2"
          ],
          "answer": 3,
          "hint": "Multiplica la varianza de referencia por el VIF.",
          "explanation": "Multiplica la varianza de referencia por el VIF. Resultado: 140. Calcula 1−R². Segundo resultado: 0,2."
        }
      ]
    },
    {
      "nombre": "¿Qué fracción de variabilidad del predictor queda sin explicar?",
      "facil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 25.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25",
            "0,15",
            "0,2"
          ],
          "answer": 3,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 27.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15",
            "0,2",
            "0,25"
          ],
          "answer": 2,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2."
        }
      ],
      "dificil": [
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 26.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,25 / 5",
            "0,2 / 5,05",
            "0,2 / 5"
          ],
          "answer": 3,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        },
        {
          "story": "En una regresión auxiliar un predictor tiene R² = 0,80 y, sin correlación con otros predictores, su varianza estimada sería 28.",
          "prompt": "¿Qué fracción de variabilidad del predictor queda sin explicar? ¿Cuál es el factor de inflación de la varianza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2 / 5,05",
            "0,2 / 5",
            "0,25 / 5"
          ],
          "answer": 2,
          "hint": "Calcula 1−R².",
          "explanation": "Calcula 1−R². Resultado: 0,2. VIF = 1/(1−R²). Segundo resultado: 5."
        }
      ]
    }
  ]
},
{
  "id": "1560026-2",
  "nombre": "Bloque 2 · Heteroscedasticidad",
  "apartados": [
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 5 y 20. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2",
            "0,25",
            "0,15"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,2."
        },
        {
          "story": "En dos grupos la varianza del error es 7 y 28. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1929",
            "0,0929",
            "0,1429"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,1429."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 6 y 24. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1667 / 4",
            "0,2167 / 4",
            "0,1667 / 4,05"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,1667. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 8 y 32. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,175 / 4",
            "0,125 / 4,05",
            "0,125 / 4"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,125. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 5 y 20. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 7 y 28. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 6 y 24. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 8 y 32. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 5 y 20. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 7 y 28. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 6 y 24. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 1,1667",
            "2 / 0,1667",
            "3 / 0,1667"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,1667."
        },
        {
          "story": "En dos grupos la varianza del error es 8 y 32. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 0,125",
            "3 / 0,125",
            "2 / 1,125"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,125."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 9 y 36. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1611",
            "0,0611",
            "0,1111"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,1111."
        },
        {
          "story": "En dos grupos la varianza del error es 11 y 44. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0409",
            "0,0909",
            "0,1409"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0909."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 10 y 40. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,15 / 4",
            "0,1 / 4,05",
            "0,1 / 4"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,1. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 12 y 48. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0833 / 4,05",
            "0,0833 / 4",
            "0,1333 / 4"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0833. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 9 y 36. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 11 y 44. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 10 y 40. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 12 y 48. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 9 y 36. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 11 y 44. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 10 y 40. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 0,1",
            "3 / 0,1",
            "2 / 1,1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,1."
        },
        {
          "story": "En dos grupos la varianza del error es 12 y 48. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 0,0833",
            "2 / 1,0833",
            "2 / 0,0833"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0833."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 13 y 52. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0269",
            "0,0769",
            "0,1269"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0769."
        },
        {
          "story": "En dos grupos la varianza del error es 15 y 60. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0667",
            "0,1167",
            "0,0167"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0667."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 14 y 56. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0714 / 4,05",
            "0,0714 / 4",
            "0,1214 / 4"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0714. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 16 y 64. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0625 / 4",
            "0,1125 / 4",
            "0,0625 / 4,05"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0625. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 13 y 52. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 15 y 60. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 14 y 56. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 16 y 64. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 13 y 52. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 15 y 60. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 14 y 56. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 0,0714",
            "2 / 1,0714",
            "2 / 0,0714"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0714."
        },
        {
          "story": "En dos grupos la varianza del error es 16 y 64. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 1,0625",
            "2 / 0,0625",
            "3 / 0,0625"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0625."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 17 y 68. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0588",
            "0,1088",
            "0,0088"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0588."
        },
        {
          "story": "En dos grupos la varianza del error es 19 y 76. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1026",
            "0,0026",
            "0,0526"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0526."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 18 y 72. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0556 / 4",
            "0,1056 / 4",
            "0,0556 / 4,05"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0556. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 20 y 80. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 4",
            "0,05 / 4,05",
            "0,05 / 4"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,05. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 17 y 68. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 19 y 76. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 18 y 72. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 20 y 80. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 17 y 68. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 19 y 76. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 18 y 72. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 1,0556",
            "2 / 0,0556",
            "3 / 0,0556"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0556."
        },
        {
          "story": "En dos grupos la varianza del error es 20 y 80. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 0,05",
            "3 / 0,05",
            "2 / 1,05"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,05."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 21 y 84. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0976",
            "-0,0024",
            "0,0476"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0476."
        },
        {
          "story": "En dos grupos la varianza del error es 23 y 92. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,0065",
            "0,0435",
            "0,0935"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0435."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 22 y 88. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0955 / 4",
            "0,0455 / 4,05",
            "0,0455 / 4"
          ],
          "answer": 3,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0455. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 24 y 96. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0417 / 4,05",
            "0,0417 / 4",
            "0,0917 / 4"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0417. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 21 y 84. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 23 y 92. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 22 y 88. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 24 y 96. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 21 y 84. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 23 y 92. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 22 y 88. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 0,0455",
            "3 / 0,0455",
            "2 / 1,0455"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0455."
        },
        {
          "story": "En dos grupos la varianza del error es 24 y 96. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 0,0417",
            "2 / 1,0417",
            "2 / 0,0417"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0417."
        }
      ]
    },
    {
      "nombre": "¿Qué peso corresponde al primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 25 y 100. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-0,01",
            "0,04",
            "0,09"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,04."
        },
        {
          "story": "En dos grupos la varianza del error es 27 y 108. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,037",
            "0,087",
            "-0,013"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,037."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 26 y 104. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0385 / 4,05",
            "0,0385 / 4",
            "0,0885 / 4"
          ],
          "answer": 2,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0385. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 28 y 112. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué peso corresponde al primer grupo? ¿Cuántas veces mayor es el peso del primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0357 / 4",
            "0,0857 / 4",
            "0,0357 / 4,05"
          ],
          "answer": 1,
          "hint": "El peso es la inversa de la varianza.",
          "explanation": "El peso es la inversa de la varianza. Resultado: 0,0357. Los pesos son inversamente proporcionales a las varianzas. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuántas veces mayor es el peso del primer grupo?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 25 y 100. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        },
        {
          "story": "En dos grupos la varianza del error es 27 y 108. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 26 y 104. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 28 y 112. Se pondera por la inversa de la varianza.",
          "prompt": "¿Cuántas veces mayor es el peso del primer grupo? ¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Los pesos son inversamente proporcionales a las varianzas.",
          "explanation": "Los pesos son inversamente proporcionales a las varianzas. Resultado: 4. Toma la raíz del cociente de varianzas. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero?",
      "facil": [
        {
          "story": "En dos grupos la varianza del error es 25 y 100. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        },
        {
          "story": "En dos grupos la varianza del error es 27 y 108. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En dos grupos la varianza del error es 26 y 104. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 0,0385",
            "2 / 1,0385",
            "2 / 0,0385"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0385."
        },
        {
          "story": "En dos grupos la varianza del error es 28 y 112. Se pondera por la inversa de la varianza.",
          "prompt": "¿Qué cociente hay entre las desviaciones típicas del segundo y del primero? ¿Qué peso corresponde al primer grupo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 1,0357",
            "2 / 0,0357",
            "3 / 0,0357"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cociente de varianzas.",
          "explanation": "Toma la raíz del cociente de varianzas. Resultado: 2. El peso es la inversa de la varianza. Segundo resultado: 0,0357."
        }
      ]
    }
  ]
},
{
  "id": "1560026-3",
  "nombre": "Bloque 3 · Autocorrelación",
  "apartados": [
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 20.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "12",
            "8"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 10."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 28.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "16",
            "12",
            "14"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 24.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 6",
            "14 / 6",
            "12 / 8"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 12. Aplica dos veces el coeficiente. Segundo resultado: 6."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 32.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 8",
            "16 / 10",
            "16 / 8"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 16. Aplica dos veces el coeficiente. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 20.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "4",
            "5"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 5."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 28.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 24.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / -12",
            "6 / -11",
            "6 / -12"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 6. Resta el error previsto al observado. Segundo resultado: -12."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 32.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / -15",
            "8 / -16",
            "9 / -16"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 8. Resta el error previsto al observado. Segundo resultado: -16."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 20.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-12",
            "-10",
            "-8"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -10."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 28.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-14",
            "-12",
            "-16"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -14."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 24.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-12 / 14",
            "-12 / 12",
            "-10 / 12"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -12. Multiplica el error actual por 0,5. Segundo resultado: 12."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 32.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-16 / 16",
            "-14 / 16",
            "-16 / 18"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -16. Multiplica el error actual por 0,5. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 36.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "15",
            "18"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 18."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 44.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "19",
            "22",
            "25"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 22."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 40.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 10",
            "20 / 13",
            "20 / 10"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 20. Aplica dos veces el coeficiente. Segundo resultado: 10."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 48.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 16",
            "24 / 12",
            "28 / 12"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 24. Aplica dos veces el coeficiente. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 36.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "9",
            "10"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 9."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 44.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "9"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 40.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / -18",
            "10 / -20",
            "12 / -20"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 10. Resta el error previsto al observado. Segundo resultado: -20."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 48.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / -24",
            "14 / -24",
            "12 / -22"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 12. Resta el error previsto al observado. Segundo resultado: -24."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 36.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-18",
            "-15",
            "-21"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -18."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 44.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-19",
            "-25",
            "-22"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -22."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 40.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-20 / 20",
            "-17 / 20",
            "-20 / 23"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -20. Multiplica el error actual por 0,5. Segundo resultado: 20."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 48.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-20 / 24",
            "-24 / 28",
            "-24 / 24"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -24. Multiplica el error actual por 0,5. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 52.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "26",
            "30"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 26."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 60.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 56.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 18",
            "28 / 14",
            "32 / 14"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 28. Aplica dos veces el coeficiente. Segundo resultado: 14."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 64.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 16",
            "37 / 16",
            "32 / 21"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 32. Aplica dos veces el coeficiente. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 52.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 13."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 60.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 56.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / -28",
            "16 / -28",
            "14 / -26"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 14. Resta el error previsto al observado. Segundo resultado: -28."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 64.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / -32",
            "16 / -30",
            "16 / -32"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 16. Resta el error previsto al observado. Segundo resultado: -32."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 52.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-22",
            "-30",
            "-26"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -26."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 60.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-35",
            "-30",
            "-25"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -30."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 56.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-24 / 28",
            "-28 / 32",
            "-28 / 28"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -28. Multiplica el error actual por 0,5. Segundo resultado: 28."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 64.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-32 / 37",
            "-32 / 32",
            "-27 / 32"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -32. Multiplica el error actual por 0,5. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 68.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "34",
            "39",
            "29"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 34."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 76.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "44",
            "32",
            "38"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 38."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 72.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "36 / 18",
            "41 / 18",
            "36 / 23"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 36. Aplica dos veces el coeficiente. Segundo resultado: 18."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 80.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 20",
            "40 / 26",
            "40 / 20"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 40. Aplica dos veces el coeficiente. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 68.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "14",
            "17"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 17."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 76.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "16",
            "19",
            "22"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 19."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 72.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / -36",
            "18 / -33",
            "18 / -36"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 18. Resta el error previsto al observado. Segundo resultado: -36."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 80.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / -37",
            "20 / -40",
            "23 / -40"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 20. Resta el error previsto al observado. Segundo resultado: -40."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 68.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-39",
            "-34",
            "-29"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -34."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 76.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-38",
            "-32",
            "-44"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -38."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 72.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-36 / 41",
            "-36 / 36",
            "-31 / 36"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -36. Multiplica el error actual por 0,5. Segundo resultado: 36."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 80.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-40 / 40",
            "-34 / 40",
            "-40 / 46"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -40. Multiplica el error actual por 0,5. Segundo resultado: 40."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 84.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "48",
            "36",
            "42"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 42."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 92.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "39",
            "46",
            "53"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 88.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "51 / 22",
            "44 / 29",
            "44 / 22"
          ],
          "answer": 3,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 44. Aplica dos veces el coeficiente. Segundo resultado: 22."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 96.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 31",
            "48 / 24",
            "55 / 24"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 48. Aplica dos veces el coeficiente. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 84.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "24"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 21."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 92.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "26",
            "20"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 88.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "22 / -41",
            "22 / -44",
            "25 / -44"
          ],
          "answer": 2,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 22. Resta el error previsto al observado. Segundo resultado: -44."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 96.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / -48",
            "28 / -48",
            "24 / -44"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 24. Resta el error previsto al observado. Segundo resultado: -48."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 84.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-42",
            "-36",
            "-48"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -42."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 92.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-39",
            "-53",
            "-46"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -46."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 88.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-44 / 44",
            "-37 / 44",
            "-44 / 51"
          ],
          "answer": 1,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -44. Multiplica el error actual por 0,5. Segundo resultado: 44."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 96.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-41 / 48",
            "-48 / 55",
            "-48 / 48"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -48. Multiplica el error actual por 0,5. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera un periodo después?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 100.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "42",
            "50",
            "58"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 50."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 108.",
          "prompt": "¿Qué error se espera un periodo después? Redondea a cuatro decimales si es necesario.",
          "options": [
            "54",
            "62",
            "46"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 54."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 104.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "52 / 34",
            "52 / 26",
            "60 / 26"
          ],
          "answer": 2,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 52. Aplica dos veces el coeficiente. Segundo resultado: 26."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 112.",
          "prompt": "¿Qué error se espera un periodo después? ¿Qué error se espera a dos periodos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "56 / 28",
            "64 / 28",
            "56 / 36"
          ],
          "answer": 1,
          "hint": "Multiplica el error actual por 0,5.",
          "explanation": "Multiplica el error actual por 0,5. Resultado: 56. Aplica dos veces el coeficiente. Segundo resultado: 28."
        }
      ]
    },
    {
      "nombre": "¿Qué error se espera a dos periodos?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 100.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "29",
            "21"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 25."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 108.",
          "prompt": "¿Qué error se espera a dos periodos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "31",
            "23",
            "27"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 27."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 104.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / -52",
            "30 / -52",
            "26 / -48"
          ],
          "answer": 1,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 26. Resta el error previsto al observado. Segundo resultado: -52."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 112.",
          "prompt": "¿Qué error se espera a dos periodos? Si el siguiente error observado es cero, ¿cuál fue la innovación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / -56",
            "28 / -52",
            "28 / -56"
          ],
          "answer": 3,
          "hint": "Aplica dos veces el coeficiente.",
          "explanation": "Aplica dos veces el coeficiente. Resultado: 28. Resta el error previsto al observado. Segundo resultado: -56."
        }
      ]
    },
    {
      "nombre": "Si el siguiente error observado es cero, ¿cuál fue la innovación?",
      "facil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 100.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-42",
            "-58",
            "-50"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -50."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 108.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-62",
            "-54",
            "-46"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -54."
        }
      ],
      "dificil": [
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 104.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-44 / 52",
            "-52 / 60",
            "-52 / 52"
          ],
          "answer": 3,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -52. Multiplica el error actual por 0,5. Segundo resultado: 52."
        },
        {
          "story": "El error obedece a e(t) = 0,5e(t−1) + u(t), con innovaciones de media cero. El error actual es 112.",
          "prompt": "Si el siguiente error observado es cero, ¿cuál fue la innovación? ¿Qué error se espera un periodo después? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-56 / 64",
            "-56 / 56",
            "-48 / 56"
          ],
          "answer": 2,
          "hint": "Resta el error previsto al observado.",
          "explanation": "Resta el error previsto al observado. Resultado: -56. Multiplica el error actual por 0,5. Segundo resultado: 56."
        }
      ]
    }
  ]
},
{
  "id": "1560026-4",
  "nombre": "Bloque 4 · Variable dependiente categórica: logit y probit",
  "apartados": [
    {
      "nombre": "¿Cuál es la probabilidad inicial?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 5 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8333",
            "0,9583",
            "0,7083"
          ],
          "answer": 1,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,8333."
        },
        {
          "story": "Un modelo logit da odds de compra de 7 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,0063",
            "0,7438",
            "0,875"
          ],
          "answer": 3,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,875."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 6 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8571 / 12",
            "0,9857 / 12",
            "0,8571 / 12,1286"
          ],
          "answer": 1,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,8571. Multiplica por la razón de odds. Segundo resultado: 12."
        },
        {
          "story": "Un modelo logit da odds de compra de 8 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,0222 / 16",
            "0,8889 / 16,1333",
            "0,8889 / 16"
          ],
          "answer": 3,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,8889. Multiplica por la razón de odds. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuáles son las nuevas odds?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 5 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 10."
        },
        {
          "story": "Un modelo logit da odds de compra de 7 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 6 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 0,9231",
            "12 / 2,9231",
            "12 / 0,9231"
          ],
          "answer": 3,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 12. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9231."
        },
        {
          "story": "Un modelo logit da odds de compra de 8 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 2,9412",
            "16 / 0,9412",
            "18 / 0,9412"
          ],
          "answer": 2,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 16. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9412."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad tras la campaña?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 5 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7727",
            "0,9091",
            "1,0455"
          ],
          "answer": 2,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9091."
        },
        {
          "story": "Un modelo logit da odds de compra de 7 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9333",
            "1,0733",
            "0,7933"
          ],
          "answer": 1,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9333."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 6 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9231 / 0,9956",
            "0,9231 / 0,8571",
            "1,0615 / 0,8571"
          ],
          "answer": 2,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9231. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,8571."
        },
        {
          "story": "Un modelo logit da odds de compra de 8 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9412 / 0,8889",
            "1,0824 / 0,8889",
            "0,9412 / 1,0301"
          ],
          "answer": 1,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9412. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,8889."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad predicha inicialmente?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 9 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2087",
            "0,1087",
            "0,1587"
          ],
          "answer": 3,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 11 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1087",
            "0,1587",
            "0,2087"
          ],
          "answer": 2,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 10 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2087 / 0,1",
            "0,1587 / 0,15",
            "0,1587 / 0,1"
          ],
          "answer": 3,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,1."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 12 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587 / 0,1333",
            "0,1587 / 0,0833",
            "0,2087 / 0,0833"
          ],
          "answer": 2,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,0833."
        }
      ]
    },
    {
      "nombre": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 9 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0611",
            "0,1111",
            "0,1611"
          ],
          "answer": 2,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,1111."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 11 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0909",
            "0,1409",
            "0,0409"
          ],
          "answer": 1,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0909."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 10 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1 / 0,3913",
            "0,1 / 0,3413",
            "0,15 / 0,3413"
          ],
          "answer": 2,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,1. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 12 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0833 / 0,3413",
            "0,1333 / 0,3413",
            "0,0833 / 0,3913"
          ],
          "answer": 1,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0833. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 9 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413",
            "0,3925",
            "0,2901"
          ],
          "answer": 1,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 11 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3925",
            "0,2901",
            "0,3413"
          ],
          "answer": 3,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 10 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413 / 0,1587",
            "0,3925 / 0,1587",
            "0,3413 / 0,2099"
          ],
          "answer": 1,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 12 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3925 / 0,1587",
            "0,3413 / 0,2099",
            "0,3413 / 0,1587"
          ],
          "answer": 3,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad inicial?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 13 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7893",
            "0,9286",
            "1,0679"
          ],
          "answer": 2,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9286."
        },
        {
          "story": "Un modelo logit da odds de compra de 15 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9375",
            "1,0781",
            "0,7969"
          ],
          "answer": 1,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9375."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 14 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9333 / 28,14",
            "0,9333 / 28",
            "1,0733 / 28"
          ],
          "answer": 2,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9333. Multiplica por la razón de odds. Segundo resultado: 28."
        },
        {
          "story": "Un modelo logit da odds de compra de 16 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9412 / 32",
            "1,0824 / 32",
            "0,9412 / 32,1412"
          ],
          "answer": 1,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9412. Multiplica por la razón de odds. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuáles son las nuevas odds?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 13 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "30",
            "22"
          ],
          "answer": 1,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 26."
        },
        {
          "story": "Un modelo logit da odds de compra de 15 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 14 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 0,9655",
            "32 / 0,9655",
            "28 / 4,9655"
          ],
          "answer": 1,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 28. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9655."
        },
        {
          "story": "Un modelo logit da odds de compra de 16 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 0,9697",
            "32 / 5,9697",
            "32 / 0,9697"
          ],
          "answer": 3,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 32. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9697."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad tras la campaña?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 13 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,1074",
            "0,8185",
            "0,963"
          ],
          "answer": 3,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,963."
        },
        {
          "story": "Un modelo logit da odds de compra de 15 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8226",
            "0,9677",
            "1,1129"
          ],
          "answer": 2,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9677."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 14 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,1103 / 0,9333",
            "0,9655 / 1,0782",
            "0,9655 / 0,9333"
          ],
          "answer": 3,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9655. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,9333."
        },
        {
          "story": "Un modelo logit da odds de compra de 16 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9697 / 1,0866",
            "0,9697 / 0,9412",
            "1,1152 / 0,9412"
          ],
          "answer": 2,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9697. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,9412."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad predicha inicialmente?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 17 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587",
            "0,2087",
            "0,1087"
          ],
          "answer": 1,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 19 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2087",
            "0,1087",
            "0,1587"
          ],
          "answer": 3,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 18 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587 / 0,0556",
            "0,2087 / 0,0556",
            "0,1587 / 0,1056"
          ],
          "answer": 1,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,0556."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 20 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2087 / 0,05",
            "0,1587 / 0,1",
            "0,1587 / 0,05"
          ],
          "answer": 3,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,05."
        }
      ]
    },
    {
      "nombre": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 17 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1088",
            "0,0088",
            "0,0588"
          ],
          "answer": 3,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0588."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 19 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0026",
            "0,0526",
            "0,1026"
          ],
          "answer": 2,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0526."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 18 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1056 / 0,3413",
            "0,0556 / 0,3913",
            "0,0556 / 0,3413"
          ],
          "answer": 3,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0556. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 20 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,05 / 0,3913",
            "0,05 / 0,3413",
            "0,1 / 0,3413"
          ],
          "answer": 2,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,05. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 17 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2901",
            "0,3413",
            "0,3925"
          ],
          "answer": 2,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 19 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413",
            "0,3925",
            "0,2901"
          ],
          "answer": 1,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 18 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413 / 0,2099",
            "0,3413 / 0,1587",
            "0,3925 / 0,1587"
          ],
          "answer": 2,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 20 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413 / 0,1587",
            "0,3925 / 0,1587",
            "0,3413 / 0,2099"
          ],
          "answer": 1,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad inicial?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 21 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,0977",
            "0,8114",
            "0,9545"
          ],
          "answer": 3,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9545."
        },
        {
          "story": "Un modelo logit da odds de compra de 23 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,8146",
            "0,9583",
            "1,1021"
          ],
          "answer": 2,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9583."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 22 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,1 / 44",
            "0,9565 / 44,1435",
            "0,9565 / 44"
          ],
          "answer": 3,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,9565. Multiplica por la razón de odds. Segundo resultado: 44."
        },
        {
          "story": "Un modelo logit da odds de compra de 24 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad inicial? ¿Cuáles son las nuevas odds? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,96 / 48,144",
            "0,96 / 48",
            "1,104 / 48"
          ],
          "answer": 2,
          "hint": "Convierte odds en probabilidad con o/(1+o).",
          "explanation": "Convierte odds en probabilidad con o/(1+o). Resultado: 0,96. Multiplica por la razón de odds. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuáles son las nuevas odds?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 21 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "36",
            "42",
            "48"
          ],
          "answer": 2,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 42."
        },
        {
          "story": "Un modelo logit da odds de compra de 23 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "53",
            "39"
          ],
          "answer": 1,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 22 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 7,9778",
            "44 / 0,9778",
            "51 / 0,9778"
          ],
          "answer": 2,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 44. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9778."
        },
        {
          "story": "Un modelo logit da odds de compra de 24 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuáles son las nuevas odds? ¿Cuál es la probabilidad tras la campaña? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 0,9796",
            "55 / 0,9796",
            "48 / 7,9796"
          ],
          "answer": 1,
          "hint": "Multiplica por la razón de odds.",
          "explanation": "Multiplica por la razón de odds. Resultado: 48. Convierte de nuevo las odds a probabilidad. Segundo resultado: 0,9796."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad tras la campaña?",
      "facil": [
        {
          "story": "Un modelo logit da odds de compra de 21 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9767",
            "1,1233",
            "0,8302"
          ],
          "answer": 1,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9767."
        },
        {
          "story": "Un modelo logit da odds de compra de 23 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,1255",
            "0,8319",
            "0,9787"
          ],
          "answer": 3,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9787."
        }
      ],
      "dificil": [
        {
          "story": "Un modelo logit da odds de compra de 22 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,9778 / 0,9565",
            "1,1244 / 0,9565",
            "0,9778 / 1,1032"
          ],
          "answer": 1,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9778. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,9565."
        },
        {
          "story": "Un modelo logit da odds de compra de 24 a 1. Una campaña duplica esas odds.",
          "prompt": "¿Cuál es la probabilidad tras la campaña? ¿Cuál es la probabilidad inicial? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1,1265 / 0,96",
            "0,9796 / 1,1069",
            "0,9796 / 0,96"
          ],
          "answer": 3,
          "hint": "Convierte de nuevo las odds a probabilidad.",
          "explanation": "Convierte de nuevo las odds a probabilidad. Resultado: 0,9796. Convierte odds en probabilidad con o/(1+o). Segundo resultado: 0,96."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la probabilidad predicha inicialmente?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 25 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1087",
            "0,1587",
            "0,2087"
          ],
          "answer": 2,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 27 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587",
            "0,2087",
            "0,1087"
          ],
          "answer": 1,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 26 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587 / 0,0885",
            "0,1587 / 0,0385",
            "0,2087 / 0,0385"
          ],
          "answer": 2,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,0385."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 28 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es la probabilidad predicha inicialmente? ¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1587 / 0,0357",
            "0,2087 / 0,0357",
            "0,1587 / 0,0857"
          ],
          "answer": 1,
          "hint": "Aplica la distribución normal acumulada al índice.",
          "explanation": "Aplica la distribución normal acumulada al índice. Resultado: 0,1587. Divide el incremento necesario del índice entre el coeficiente. Segundo resultado: 0,0357."
        }
      ]
    },
    {
      "nombre": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 25 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,04",
            "0,09",
            "-0,01"
          ],
          "answer": 1,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,04."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 27 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,087",
            "-0,013",
            "0,037"
          ],
          "answer": 3,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,037."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 26 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0385 / 0,3413",
            "0,0885 / 0,3413",
            "0,0385 / 0,3913"
          ],
          "answer": 1,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0385. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 28 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuánto debe subir X para llevar el índice a cero sin variar los demás regresores? ¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0857 / 0,3413",
            "0,0357 / 0,3913",
            "0,0357 / 0,3413"
          ],
          "answer": 3,
          "hint": "Divide el incremento necesario del índice entre el coeficiente.",
          "explanation": "Divide el incremento necesario del índice entre el coeficiente. Resultado: 0,0357. Resta ambas probabilidades predichas. Segundo resultado: 0,3413."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero?",
      "facil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 25 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3925",
            "0,2901",
            "0,3413"
          ],
          "answer": 3,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 27 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2901",
            "0,3413",
            "0,3925"
          ],
          "answer": 2,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413."
        }
      ],
      "dificil": [
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 26 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3925 / 0,1587",
            "0,3413 / 0,2099",
            "0,3413 / 0,1587"
          ],
          "answer": 3,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        },
        {
          "story": "Una salida probit da un índice latente de −1 y un coeficiente de 28 para X. Usa Φ(−1)=0,1587 y Φ(0)=0,5.",
          "prompt": "¿Cuál es el cambio de probabilidad al pasar de índice −1 a cero? ¿Cuál es la probabilidad predicha inicialmente? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3413 / 0,2099",
            "0,3413 / 0,1587",
            "0,3925 / 0,1587"
          ],
          "answer": 2,
          "hint": "Resta ambas probabilidades predichas.",
          "explanation": "Resta ambas probabilidades predichas. Resultado: 0,3413. Aplica la distribución normal acumulada al índice. Segundo resultado: 0,1587."
        }
      ]
    }
  ]
},
{
  "id": "1560026-5",
  "nombre": "Bloque 5 · Datos de panel",
  "apartados": [
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 5 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 20."
        },
        {
          "story": "Un panel sigue 7 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "24",
            "28"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 28."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 6 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 13",
            "28 / 13",
            "24 / 17"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 24. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 8 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 13",
            "32 / 18",
            "32 / 13"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 32. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 5 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 7 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 6 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / -3",
            "13 / -1",
            "13 / -3"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 8 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -1",
            "13 / -3",
            "15 / -3"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 5 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-4",
            "-3",
            "-2"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 7 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3",
            "-2",
            "-4"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 6 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 25",
            "-3 / 24",
            "-2 / 24"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 24."
        },
        {
          "story": "Un panel sigue 8 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 32",
            "-2 / 32",
            "-3 / 33"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 9 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "41",
            "31",
            "36"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 36."
        },
        {
          "story": "Un panel sigue 11 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "44",
            "51"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 44."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 10 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 13",
            "40 / 19",
            "40 / 13"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 40. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 12 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 20",
            "48 / 13",
            "55 / 13"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 48. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 9 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 11 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 10 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -1",
            "13 / -3",
            "15 / -3"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 12 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -3",
            "15 / -3",
            "13 / -1"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 9 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3",
            "-2",
            "-4"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 11 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-4",
            "-3"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 10 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 40",
            "-2 / 40",
            "-3 / 41"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 40."
        },
        {
          "story": "Un panel sigue 12 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2 / 48",
            "-3 / 49",
            "-3 / 48"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 13 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "44",
            "52",
            "60"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 52."
        },
        {
          "story": "Un panel sigue 15 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60",
            "69",
            "51"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 14 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "56 / 21",
            "56 / 13",
            "64 / 13"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 56. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 16 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "64 / 13",
            "74 / 13",
            "64 / 23"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 64. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 13 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 15 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 14 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -3",
            "15 / -3",
            "13 / -1"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 16 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / -3",
            "13 / -1",
            "13 / -3"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 13 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-4",
            "-3"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 15 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-4",
            "-3",
            "-2"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 14 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2 / 56",
            "-3 / 57",
            "-3 / 56"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 56."
        },
        {
          "story": "Un panel sigue 16 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 65",
            "-3 / 64",
            "-2 / 64"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 64."
        }
      ]
    },
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 17 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "68",
            "78",
            "58"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 68."
        },
        {
          "story": "Un panel sigue 19 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "87",
            "65",
            "76"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 76."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 18 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 13",
            "83 / 13",
            "72 / 24"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 72. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 20 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "92 / 13",
            "80 / 25",
            "80 / 13"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 80. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 17 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 19 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 18 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / -3",
            "13 / -1",
            "13 / -3"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 20 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -1",
            "13 / -3",
            "15 / -3"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 17 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-4",
            "-3",
            "-2"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 19 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3",
            "-2",
            "-4"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 18 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 73",
            "-3 / 72",
            "-2 / 72"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 72."
        },
        {
          "story": "Un panel sigue 20 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 80",
            "-2 / 80",
            "-3 / 81"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 80."
        }
      ]
    },
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 21 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97",
            "71",
            "84"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 84."
        },
        {
          "story": "Un panel sigue 23 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "78",
            "92",
            "106"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 92."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 22 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "101 / 13",
            "88 / 26",
            "88 / 13"
          ],
          "answer": 3,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 88. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 24 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "96 / 27",
            "96 / 13",
            "110 / 13"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 96. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 21 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 23 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 22 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -1",
            "13 / -3",
            "15 / -3"
          ],
          "answer": 2,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 24 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -3",
            "15 / -3",
            "13 / -1"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 21 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3",
            "-2",
            "-4"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 23 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-4",
            "-3"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 22 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 88",
            "-2 / 88",
            "-3 / 89"
          ],
          "answer": 1,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 88."
        },
        {
          "story": "Un panel sigue 24 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2 / 96",
            "-3 / 97",
            "-3 / 96"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 96."
        }
      ]
    },
    {
      "nombre": "¿Cuántas observaciones tiene el panel equilibrado?",
      "facil": [
        {
          "story": "Un panel sigue 25 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "85",
            "100",
            "115"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 100."
        },
        {
          "story": "Un panel sigue 27 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? Redondea a cuatro decimales si es necesario.",
          "options": [
            "108",
            "124",
            "92"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 108."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 26 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "104 / 29",
            "104 / 13",
            "120 / 13"
          ],
          "answer": 2,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 104. Promedia sus cuatro observaciones. Segundo resultado: 13."
        },
        {
          "story": "Un panel sigue 28 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuántas observaciones tiene el panel equilibrado? ¿Cuál es la media temporal de esa empresa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "112 / 13",
            "129 / 13",
            "112 / 30"
          ],
          "answer": 1,
          "hint": "Multiplica unidades por periodos.",
          "explanation": "Multiplica unidades por periodos. Resultado: 112. Promedia sus cuatro observaciones. Segundo resultado: 13."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la media temporal de esa empresa?",
      "facil": [
        {
          "story": "Un panel sigue 25 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "11"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        },
        {
          "story": "Un panel sigue 27 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 26 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / -3",
            "15 / -3",
            "13 / -1"
          ],
          "answer": 1,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        },
        {
          "story": "Un panel sigue 28 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la media temporal de esa empresa? ¿Cuál es la primera venta tras la transformación intragrupos? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "15 / -3",
            "13 / -1",
            "13 / -3"
          ],
          "answer": 3,
          "hint": "Promedia sus cuatro observaciones.",
          "explanation": "Promedia sus cuatro observaciones. Resultado: 13. Resta la media individual a la primera observación. Segundo resultado: -3."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la primera venta tras la transformación intragrupos?",
      "facil": [
        {
          "story": "Un panel sigue 25 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-4",
            "-3"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        },
        {
          "story": "Un panel sigue 27 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-4",
            "-3",
            "-2"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3."
        }
      ],
      "dificil": [
        {
          "story": "Un panel sigue 26 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2 / 104",
            "-3 / 105",
            "-3 / 104"
          ],
          "answer": 3,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 104."
        },
        {
          "story": "Un panel sigue 28 empresas durante cuatro años. Una empresa tiene ventas 10, 12, 14 y 16.",
          "prompt": "¿Cuál es la primera venta tras la transformación intragrupos? ¿Cuántas observaciones tiene el panel equilibrado? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-3 / 113",
            "-3 / 112",
            "-2 / 112"
          ],
          "answer": 2,
          "hint": "Resta la media individual a la primera observación.",
          "explanation": "Resta la media individual a la primera observación. Resultado: -3. Multiplica unidades por periodos. Segundo resultado: 112."
        }
      ]
    }
  ]
},
{
  "id": "1560026-6",
  "nombre": "Bloque 6 · Uso de Gretl",
  "apartados": [
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 10, error estándar 5 y suma de cuadrados residual 40 con 10 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 14, error estándar 7 y suma de cuadrados residual 56 con 14 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 12, error estándar 6 y suma de cuadrados residual 48 con 12 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 16, error estándar 8 y suma de cuadrados residual 64 con 16 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 10, error estándar 5 y suma de cuadrados residual 40 con 10 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 14, error estándar 7 y suma de cuadrados residual 56 con 14 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 12, error estándar 6 y suma de cuadrados residual 48 con 12 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 16, error estándar 8 y suma de cuadrados residual 64 con 16 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 10, error estándar 5 y suma de cuadrados residual 40 con 10 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 14, error estándar 7 y suma de cuadrados residual 56 con 14 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 12, error estándar 6 y suma de cuadrados residual 48 con 12 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3",
            "2 / 2",
            "3 / 2"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 16, error estándar 8 y suma de cuadrados residual 64 con 16 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 2",
            "3 / 2",
            "2 / 3"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 18, error estándar 9 y suma de cuadrados residual 72 con 18 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 22, error estándar 11 y suma de cuadrados residual 88 con 22 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 20, error estándar 10 y suma de cuadrados residual 80 con 20 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 24, error estándar 12 y suma de cuadrados residual 96 con 24 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 18, error estándar 9 y suma de cuadrados residual 72 con 18 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 22, error estándar 11 y suma de cuadrados residual 88 con 22 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 20, error estándar 10 y suma de cuadrados residual 80 con 20 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 24, error estándar 12 y suma de cuadrados residual 96 con 24 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 18, error estándar 9 y suma de cuadrados residual 72 con 18 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 22, error estándar 11 y suma de cuadrados residual 88 con 22 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 20, error estándar 10 y suma de cuadrados residual 80 con 20 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 2",
            "3 / 2",
            "2 / 3"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 24, error estándar 12 y suma de cuadrados residual 96 con 24 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 2",
            "2 / 3",
            "2 / 2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 26, error estándar 13 y suma de cuadrados residual 104 con 26 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 30, error estándar 15 y suma de cuadrados residual 120 con 30 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 28, error estándar 14 y suma de cuadrados residual 112 con 28 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 32, error estándar 16 y suma de cuadrados residual 128 con 32 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 26, error estándar 13 y suma de cuadrados residual 104 con 26 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 30, error estándar 15 y suma de cuadrados residual 120 con 30 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 28, error estándar 14 y suma de cuadrados residual 112 con 28 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 32, error estándar 16 y suma de cuadrados residual 128 con 32 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 26, error estándar 13 y suma de cuadrados residual 104 con 26 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 30, error estándar 15 y suma de cuadrados residual 120 con 30 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 28, error estándar 14 y suma de cuadrados residual 112 con 28 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 2",
            "2 / 3",
            "2 / 2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 32, error estándar 16 y suma de cuadrados residual 128 con 32 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3",
            "2 / 2",
            "3 / 2"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 34, error estándar 17 y suma de cuadrados residual 136 con 34 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 38, error estándar 19 y suma de cuadrados residual 152 con 38 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 36, error estándar 18 y suma de cuadrados residual 144 con 36 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 40, error estándar 20 y suma de cuadrados residual 160 con 40 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 34, error estándar 17 y suma de cuadrados residual 136 con 34 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 38, error estándar 19 y suma de cuadrados residual 152 con 38 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 36, error estándar 18 y suma de cuadrados residual 144 con 36 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 40, error estándar 20 y suma de cuadrados residual 160 con 40 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 34, error estándar 17 y suma de cuadrados residual 136 con 34 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 38, error estándar 19 y suma de cuadrados residual 152 con 38 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 36, error estándar 18 y suma de cuadrados residual 144 con 36 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3",
            "2 / 2",
            "3 / 2"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 40, error estándar 20 y suma de cuadrados residual 160 con 40 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 2",
            "3 / 2",
            "2 / 3"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 42, error estándar 21 y suma de cuadrados residual 168 con 42 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 46, error estándar 23 y suma de cuadrados residual 184 con 46 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 44, error estándar 22 y suma de cuadrados residual 176 con 44 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 4",
            "2 / 5",
            "2 / 4"
          ],
          "answer": 3,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 48, error estándar 24 y suma de cuadrados residual 192 con 48 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 42, error estándar 21 y suma de cuadrados residual 168 con 42 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 46, error estándar 23 y suma de cuadrados residual 184 con 46 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 44, error estándar 22 y suma de cuadrados residual 176 con 44 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 3",
            "4 / 2",
            "5 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 48, error estándar 24 y suma de cuadrados residual 192 con 48 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 42, error estándar 21 y suma de cuadrados residual 168 con 42 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 46, error estándar 23 y suma de cuadrados residual 184 con 46 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 44, error estándar 22 y suma de cuadrados residual 176 con 44 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 2",
            "3 / 2",
            "2 / 3"
          ],
          "answer": 1,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 48, error estándar 24 y suma de cuadrados residual 192 con 48 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 2",
            "2 / 3",
            "2 / 2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el estadístico t frente a coeficiente cero?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 50, error estándar 25 y suma de cuadrados residual 200 con 50 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 54, error estándar 27 y suma de cuadrados residual 216 con 54 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 52, error estándar 26 y suma de cuadrados residual 208 con 52 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 56, error estándar 28 y suma de cuadrados residual 224 con 56 grados de libertad.",
          "prompt": "¿Cuál es el estadístico t frente a coeficiente cero? ¿Cuál es el cuadrado medio residual? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Divide la estimación por su error estándar.",
          "explanation": "Divide la estimación por su error estándar. Resultado: 2. Divide la suma residual por sus grados de libertad. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Cuál es el cuadrado medio residual?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 50, error estándar 25 y suma de cuadrados residual 200 con 50 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 54, error estándar 27 y suma de cuadrados residual 216 con 54 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 52, error estándar 26 y suma de cuadrados residual 208 con 52 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "5 / 2",
            "4 / 3"
          ],
          "answer": 1,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 56, error estándar 28 y suma de cuadrados residual 224 con 56 grados de libertad.",
          "prompt": "¿Cuál es el cuadrado medio residual? ¿Qué error típico de la regresión corresponde a esa salida? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 2",
            "4 / 3",
            "4 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma residual por sus grados de libertad.",
          "explanation": "Divide la suma residual por sus grados de libertad. Resultado: 4. Toma la raíz del cuadrado medio residual. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué error típico de la regresión corresponde a esa salida?",
      "facil": [
        {
          "story": "La salida de Gretl muestra coeficiente 50, error estándar 25 y suma de cuadrados residual 200 con 50 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 54, error estándar 27 y suma de cuadrados residual 216 con 54 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "La salida de Gretl muestra coeficiente 52, error estándar 26 y suma de cuadrados residual 208 con 52 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 2",
            "2 / 3",
            "2 / 2"
          ],
          "answer": 3,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        },
        {
          "story": "La salida de Gretl muestra coeficiente 56, error estándar 28 y suma de cuadrados residual 224 con 56 grados de libertad.",
          "prompt": "¿Qué error típico de la regresión corresponde a esa salida? ¿Cuál es el estadístico t frente a coeficiente cero? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 3",
            "2 / 2",
            "3 / 2"
          ],
          "answer": 2,
          "hint": "Toma la raíz del cuadrado medio residual.",
          "explanation": "Toma la raíz del cuadrado medio residual. Resultado: 2. Divide la estimación por su error estándar. Segundo resultado: 2."
        }
      ]
    }
  ]
}
];

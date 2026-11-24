window.PLAN_1560051 = [
{
  "id": "1560051-1",
  "nombre": "Bloque 1 · Series temporales",
  "apartados": [
    {
      "nombre": "¿Qué pronóstico da la media móvil de tres meses?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 5, 8 y 11.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "9",
            "7"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 8."
        },
        {
          "story": "Las últimas tres ventas mensuales son 7, 10 y 13.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 10."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 6, 9 y 12.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 12",
            "10 / 12",
            "9 / 13"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 9. El pronóstico repite el dato más reciente. Segundo resultado: 12."
        },
        {
          "story": "Las últimas tres ventas mensuales son 8, 11 y 14.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "13 / 14",
            "11 / 16",
            "11 / 14"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 11. El pronóstico repite el dato más reciente. Segundo resultado: 14."
        }
      ]
    },
    {
      "nombre": "¿Qué pronóstico da el método ingenuo del último valor?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 5, 8 y 11.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "9",
            "11"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 11."
        },
        {
          "story": "Las últimas tres ventas mensuales son 7, 10 y 13.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 13."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 6, 9 y 12.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 6",
            "12 / 8",
            "12 / 6"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 12. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 8, 11 y 14.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 8",
            "14 / 6",
            "16 / 6"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 14. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 5, 8 y 11.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "7"
          ],
          "answer": 2,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 7, 10 y 13.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 6, 9 y 12.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 10",
            "6 / 9",
            "7 / 9"
          ],
          "answer": 2,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 9."
        },
        {
          "story": "Las últimas tres ventas mensuales son 8, 11 y 14.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 11",
            "7 / 11",
            "6 / 12"
          ],
          "answer": 1,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 11."
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
      "nombre": "¿Qué pronóstico da la media móvil de tres meses?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 13, 16 y 19.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "16",
            "18"
          ],
          "answer": 2,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 16."
        },
        {
          "story": "Las últimas tres ventas mensuales son 15, 18 y 21.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "18",
            "21",
            "15"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 18."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 14, 17 y 20.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "17 / 23",
            "17 / 20",
            "20 / 20"
          ],
          "answer": 2,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 17. El pronóstico repite el dato más reciente. Segundo resultado: 20."
        },
        {
          "story": "Las últimas tres ventas mensuales son 16, 19 y 22.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "19 / 22",
            "22 / 22",
            "19 / 25"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 19. El pronóstico repite el dato más reciente. Segundo resultado: 22."
        }
      ]
    },
    {
      "nombre": "¿Qué pronóstico da el método ingenuo del último valor?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 13, 16 y 19.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "19",
            "22",
            "16"
          ],
          "answer": 1,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 19."
        },
        {
          "story": "Las últimas tres ventas mensuales son 15, 18 y 21.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 14, 17 y 20.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 6",
            "23 / 6",
            "20 / 9"
          ],
          "answer": 1,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 20. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 16, 19 y 22.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 6",
            "22 / 9",
            "22 / 6"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 22. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 13, 16 y 19.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "5",
            "6"
          ],
          "answer": 3,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 15, 18 y 21.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "7"
          ],
          "answer": 2,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 14, 17 y 20.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 17",
            "6 / 18",
            "6 / 17"
          ],
          "answer": 3,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 17."
        },
        {
          "story": "Las últimas tres ventas mensuales son 16, 19 y 22.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 20",
            "6 / 19",
            "7 / 19"
          ],
          "answer": 2,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 19."
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
      "nombre": "¿Qué pronóstico da la media móvil de tres meses?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 21, 24 y 27.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "28",
            "20",
            "24"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 24."
        },
        {
          "story": "Las últimas tres ventas mensuales son 23, 26 y 29.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "26",
            "30"
          ],
          "answer": 2,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 26."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 22, 25 y 28.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "29 / 28",
            "25 / 32",
            "25 / 28"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 25. El pronóstico repite el dato más reciente. Segundo resultado: 28."
        },
        {
          "story": "Las últimas tres ventas mensuales son 24, 27 y 30.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "27 / 34",
            "27 / 30",
            "31 / 30"
          ],
          "answer": 2,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 27. El pronóstico repite el dato más reciente. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "¿Qué pronóstico da el método ingenuo del último valor?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 21, 24 y 27.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "27",
            "31"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 27."
        },
        {
          "story": "Las últimas tres ventas mensuales son 23, 26 y 29.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "29",
            "33",
            "25"
          ],
          "answer": 1,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 29."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 22, 25 y 28.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 10",
            "28 / 6",
            "32 / 6"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 28. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 24, 27 y 30.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 6",
            "35 / 6",
            "30 / 11"
          ],
          "answer": 1,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 30. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 21, 24 y 27.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "6",
            "7",
            "5"
          ],
          "answer": 1,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 23, 26 y 29.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "5",
            "6"
          ],
          "answer": 3,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 22, 25 y 28.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 25",
            "7 / 25",
            "6 / 26"
          ],
          "answer": 1,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 25."
        },
        {
          "story": "Las últimas tres ventas mensuales son 24, 27 y 30.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "7 / 27",
            "6 / 28",
            "6 / 27"
          ],
          "answer": 3,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 27."
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
  "id": "1560051-2",
  "nombre": "Bloque 2 · Datos de panel",
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
  "id": "1560051-3",
  "nombre": "Bloque 3 · Variables instrumentales",
  "apartados": [
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 15 y 5.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 21 y 7.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 18 y 6.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 36",
            "4 / 36",
            "3 / 37"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 36."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 24 y 8.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 48",
            "3 / 49",
            "3 / 48"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 15 y 5.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 21 y 7.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "36",
            "42",
            "48"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 42."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 18 y 6.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "41 / 30",
            "36 / 35",
            "36 / 30"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 36. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 24 y 8.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 37",
            "48 / 30",
            "55 / 30"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 48. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 15 y 5.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "30",
            "35"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 21 y 7.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 18 y 6.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 8",
            "30 / 3",
            "35 / 3"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 24 y 8.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 3",
            "35 / 3",
            "30 / 8"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 27 y 9.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 33 y 11.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 30 y 10.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 60",
            "3 / 61",
            "3 / 60"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 60."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 36 y 12.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 73",
            "3 / 72",
            "4 / 72"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 27 y 9.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "54",
            "62"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 54."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 33 y 11.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "66",
            "76",
            "56"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 66."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 30 y 10.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 39",
            "60 / 30",
            "69 / 30"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 60. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 36 y 12.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 30",
            "83 / 30",
            "72 / 41"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 72. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 27 y 9.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 33 y 11.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 30 y 10.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 3",
            "35 / 3",
            "30 / 8"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 36 y 12.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 3",
            "30 / 8",
            "30 / 3"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 39 y 13.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 45 y 15.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 42 y 14.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 85",
            "3 / 84",
            "4 / 84"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 84."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 48 y 16.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 96",
            "4 / 96",
            "3 / 97"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 96."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 39 y 13.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "78",
            "90",
            "66"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 78."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 45 y 15.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "104",
            "76",
            "90"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 90."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 42 y 14.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "84 / 30",
            "97 / 30",
            "84 / 43"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 84. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 48 y 16.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "110 / 30",
            "96 / 44",
            "96 / 30"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 96. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 39 y 13.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 45 y 15.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "30",
            "35"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 42 y 14.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 3",
            "30 / 8",
            "30 / 3"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 48 y 16.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 8",
            "30 / 3",
            "35 / 3"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 51 y 17.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 57 y 19.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 54 y 18.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 108",
            "4 / 108",
            "3 / 109"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 108."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 60 y 20.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 120",
            "3 / 121",
            "3 / 120"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 120."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 51 y 17.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "117",
            "87",
            "102"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 102."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 57 y 19.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97",
            "114",
            "131"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 114."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 54 y 18.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "124 / 30",
            "108 / 46",
            "108 / 30"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 108. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 60 y 20.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "120 / 48",
            "120 / 30",
            "138 / 30"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 120. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 51 y 17.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "30",
            "35"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 57 y 19.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 54 y 18.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 8",
            "30 / 3",
            "35 / 3"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 60 y 20.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 3",
            "35 / 3",
            "30 / 8"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 63 y 21.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 69 y 23.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 66 y 22.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 132",
            "3 / 133",
            "3 / 132"
          ],
          "answer": 3,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 132."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 72 y 24.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 145",
            "3 / 144",
            "4 / 144"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 144."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 63 y 21.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "107",
            "126",
            "145"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 126."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 69 y 23.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "138",
            "159",
            "117"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 138."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 66 y 22.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "132 / 50",
            "132 / 30",
            "152 / 30"
          ],
          "answer": 2,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 132. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 72 y 24.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "144 / 30",
            "166 / 30",
            "144 / 52"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 144. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 63 y 21.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "30",
            "35",
            "25"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 69 y 23.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 66 y 22.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 3",
            "35 / 3",
            "30 / 8"
          ],
          "answer": 1,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 72 y 24.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 3",
            "30 / 8",
            "30 / 3"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima el método de variables instrumentales?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 75 y 25.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 81 y 27.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 78 y 26.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 157",
            "3 / 156",
            "4 / 156"
          ],
          "answer": 2,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 156."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 84 y 28.",
          "prompt": "¿Qué pendiente estima el método de variables instrumentales? Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 168",
            "4 / 168",
            "3 / 169"
          ],
          "answer": 1,
          "hint": "Divide Cov(Z,Y) entre Cov(Z,X).",
          "explanation": "Divide Cov(Z,Y) entre Cov(Z,X). Resultado: 3. La covarianza es lineal. Segundo resultado: 168."
        }
      ]
    },
    {
      "nombre": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 75 y 25.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "150",
            "173",
            "127"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 150."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 81 y 27.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Redondea a cuatro decimales si es necesario.",
          "options": [
            "186",
            "138",
            "162"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 162."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 78 y 26.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "156 / 30",
            "179 / 30",
            "156 / 53"
          ],
          "answer": 1,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 156. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 84 y 28.",
          "prompt": "Si escalas Z multiplicándolo por dos, ¿cuánto vale Cov(2Z,Y)? Si X se mide en decenas, ¿qué pendiente IV queda por decena? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "193 / 30",
            "168 / 55",
            "168 / 30"
          ],
          "answer": 3,
          "hint": "La covarianza es lineal.",
          "explanation": "La covarianza es lineal. Resultado: 168. Dividir X entre diez multiplica la pendiente por diez. Segundo resultado: 30."
        }
      ]
    },
    {
      "nombre": "Si X se mide en decenas, ¿qué pendiente IV queda por decena?",
      "facil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 75 y 25.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 81 y 27.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "30",
            "35"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 78 y 26.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 3",
            "30 / 8",
            "30 / 3"
          ],
          "answer": 3,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        },
        {
          "story": "Un instrumento Z es relevante y satisface exclusión y exogeneidad. Las covarianzas muestrales de Z con Y y X son 84 y 28.",
          "prompt": "Si X se mide en decenas, ¿qué pendiente IV queda por decena? ¿Qué pendiente estima el método de variables instrumentales? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 8",
            "30 / 3",
            "35 / 3"
          ],
          "answer": 2,
          "hint": "Dividir X entre diez multiplica la pendiente por diez.",
          "explanation": "Dividir X entre diez multiplica la pendiente por diez. Resultado: 30. Divide Cov(Z,Y) entre Cov(Z,X). Segundo resultado: 3."
        }
      ]
    }
  ]
}
];

window.PLAN_1800051 = [
{
  "id": "1800051-1",
  "nombre": "Bloque 1 · Introducción al big data y al aprendizaje automático",
  "apartados": [
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 5 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1000",
            "1150",
            "850"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 1000."
        },
        {
          "story": "Una tienda recibe 7 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1610",
            "1190",
            "1400"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 1400."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 6 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1200 / 120",
            "1380 / 120",
            "1200 / 300"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 1200. Aplica la tasa de duplicación al total. Segundo resultado: 120."
        },
        {
          "story": "Una tienda recibe 8 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1840 / 160",
            "1600 / 400",
            "1600 / 160"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 1600. Aplica la tasa de duplicación al total. Segundo resultado: 160."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 5 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "115",
            "85",
            "100"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 100."
        },
        {
          "story": "Una tienda recibe 7 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "119",
            "140",
            "161"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 140."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 6 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "138 / 1080",
            "120 / 1098",
            "120 / 1080"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 120. Conserva el 90 % del volumen inicial. Segundo resultado: 1080."
        },
        {
          "story": "Una tienda recibe 8 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "160 / 1464",
            "160 / 1440",
            "184 / 1440"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 160. Conserva el 90 % del volumen inicial. Segundo resultado: 1440."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 5 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "765",
            "900",
            "1035"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 900."
        },
        {
          "story": "Una tienda recibe 7 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1260",
            "1449",
            "1071"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1260."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 6 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1080 / 1362",
            "1080 / 1200",
            "1242 / 1200"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1080. Multiplica lotes por registros. Segundo resultado: 1200."
        },
        {
          "story": "Una tienda recibe 8 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1440 / 1600",
            "1656 / 1600",
            "1440 / 1816"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1440. Multiplica lotes por registros. Segundo resultado: 1600."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 9 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2070",
            "1530",
            "1800"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 1800."
        },
        {
          "story": "Una tienda recibe 11 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1870",
            "2200",
            "2530"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 2200."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 10 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2300 / 200",
            "2000 / 500",
            "2000 / 200"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 2000. Aplica la tasa de duplicación al total. Segundo resultado: 200."
        },
        {
          "story": "Una tienda recibe 12 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2400 / 600",
            "2400 / 240",
            "2760 / 240"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 2400. Aplica la tasa de duplicación al total. Segundo resultado: 240."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 9 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "153",
            "180",
            "207"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 180."
        },
        {
          "story": "Una tienda recibe 11 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "220",
            "253",
            "187"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 220."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 10 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "200 / 1830",
            "200 / 1800",
            "230 / 1800"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 200. Conserva el 90 % del volumen inicial. Segundo resultado: 1800."
        },
        {
          "story": "Una tienda recibe 12 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "240 / 2160",
            "276 / 2160",
            "240 / 2196"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 240. Conserva el 90 % del volumen inicial. Segundo resultado: 2160."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 9 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1620",
            "1863",
            "1377"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1620."
        },
        {
          "story": "Una tienda recibe 11 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2277",
            "1683",
            "1980"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1980."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 10 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "1800 / 2000",
            "2070 / 2000",
            "1800 / 2270"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 1800. Multiplica lotes por registros. Segundo resultado: 2000."
        },
        {
          "story": "Una tienda recibe 12 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2484 / 2400",
            "2160 / 2724",
            "2160 / 2400"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 2160. Multiplica lotes por registros. Segundo resultado: 2400."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 13 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2210",
            "2600",
            "2990"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 2600."
        },
        {
          "story": "Una tienda recibe 15 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3000",
            "3450",
            "2550"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 3000."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 14 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2800 / 700",
            "2800 / 280",
            "3220 / 280"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 2800. Aplica la tasa de duplicación al total. Segundo resultado: 280."
        },
        {
          "story": "Una tienda recibe 16 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3200 / 320",
            "3680 / 320",
            "3200 / 800"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 3200. Aplica la tasa de duplicación al total. Segundo resultado: 320."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 13 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "260",
            "299",
            "221"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 260."
        },
        {
          "story": "Una tienda recibe 15 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "345",
            "255",
            "300"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 300."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 14 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "280 / 2520",
            "322 / 2520",
            "280 / 2562"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 280. Conserva el 90 % del volumen inicial. Segundo resultado: 2520."
        },
        {
          "story": "Una tienda recibe 16 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "368 / 2880",
            "320 / 2928",
            "320 / 2880"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 320. Conserva el 90 % del volumen inicial. Segundo resultado: 2880."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 13 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2691",
            "1989",
            "2340"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 2340."
        },
        {
          "story": "Una tienda recibe 15 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2295",
            "2700",
            "3105"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 2700."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 14 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2898 / 2800",
            "2520 / 3178",
            "2520 / 2800"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 2520. Multiplica lotes por registros. Segundo resultado: 2800."
        },
        {
          "story": "Una tienda recibe 16 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2880 / 3632",
            "2880 / 3200",
            "3312 / 3200"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 2880. Multiplica lotes por registros. Segundo resultado: 3200."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 17 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3400",
            "3910",
            "2890"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 3400."
        },
        {
          "story": "Una tienda recibe 19 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4370",
            "3230",
            "3800"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 3800."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 18 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3600 / 360",
            "4140 / 360",
            "3600 / 900"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 3600. Aplica la tasa de duplicación al total. Segundo resultado: 360."
        },
        {
          "story": "Una tienda recibe 20 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4600 / 400",
            "4000 / 1000",
            "4000 / 400"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 4000. Aplica la tasa de duplicación al total. Segundo resultado: 400."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 17 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "391",
            "289",
            "340"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 340."
        },
        {
          "story": "Una tienda recibe 19 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "323",
            "380",
            "437"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 380."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 18 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "414 / 3240",
            "360 / 3294",
            "360 / 3240"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 360. Conserva el 90 % del volumen inicial. Segundo resultado: 3240."
        },
        {
          "story": "Una tienda recibe 20 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "400 / 3660",
            "400 / 3600",
            "460 / 3600"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 400. Conserva el 90 % del volumen inicial. Segundo resultado: 3600."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 17 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2601",
            "3060",
            "3519"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3060."
        },
        {
          "story": "Una tienda recibe 19 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3420",
            "3933",
            "2907"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3420."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 18 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3240 / 4086",
            "3240 / 3600",
            "3726 / 3600"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3240. Multiplica lotes por registros. Segundo resultado: 3600."
        },
        {
          "story": "Una tienda recibe 20 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3600 / 4000",
            "4140 / 4000",
            "3600 / 4540"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3600. Multiplica lotes por registros. Segundo resultado: 4000."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 21 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4830",
            "3570",
            "4200"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 4200."
        },
        {
          "story": "Una tienda recibe 23 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3910",
            "4600",
            "5290"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 4600."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 22 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5060 / 440",
            "4400 / 1100",
            "4400 / 440"
          ],
          "answer": 3,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 4400. Aplica la tasa de duplicación al total. Segundo resultado: 440."
        },
        {
          "story": "Una tienda recibe 24 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4800 / 1200",
            "4800 / 480",
            "5520 / 480"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 4800. Aplica la tasa de duplicación al total. Segundo resultado: 480."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 21 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "357",
            "420",
            "483"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 420."
        },
        {
          "story": "Una tienda recibe 23 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "460",
            "529",
            "391"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 460."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 22 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "440 / 4026",
            "440 / 3960",
            "506 / 3960"
          ],
          "answer": 2,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 440. Conserva el 90 % del volumen inicial. Segundo resultado: 3960."
        },
        {
          "story": "Una tienda recibe 24 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "480 / 4320",
            "552 / 4320",
            "480 / 4392"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 480. Conserva el 90 % del volumen inicial. Segundo resultado: 4320."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 21 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3780",
            "4347",
            "3213"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3780."
        },
        {
          "story": "Una tienda recibe 23 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4761",
            "3519",
            "4140"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 4140."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 22 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3960 / 4400",
            "4554 / 4400",
            "3960 / 4994"
          ],
          "answer": 1,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 3960. Multiplica lotes por registros. Segundo resultado: 4400."
        },
        {
          "story": "Una tienda recibe 24 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4968 / 4800",
            "4320 / 5448",
            "4320 / 4800"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 4320. Multiplica lotes por registros. Segundo resultado: 4800."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros llegan al día?",
      "facil": [
        {
          "story": "Una tienda recibe 25 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4250",
            "5000",
            "5750"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 5000."
        },
        {
          "story": "Una tienda recibe 27 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5400",
            "6210",
            "4590"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 5400."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 26 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5200 / 1300",
            "5200 / 520",
            "5980 / 520"
          ],
          "answer": 2,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 5200. Aplica la tasa de duplicación al total. Segundo resultado: 520."
        },
        {
          "story": "Una tienda recibe 28 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros llegan al día? ¿Cuántos registros deben excluirse como duplicados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5600 / 560",
            "6440 / 560",
            "5600 / 1400"
          ],
          "answer": 1,
          "hint": "Multiplica lotes por registros.",
          "explanation": "Multiplica lotes por registros. Resultado: 5600. Aplica la tasa de duplicación al total. Segundo resultado: 560."
        }
      ]
    },
    {
      "nombre": "¿Cuántos registros deben excluirse como duplicados?",
      "facil": [
        {
          "story": "Una tienda recibe 25 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "500",
            "575",
            "425"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 500."
        },
        {
          "story": "Una tienda recibe 27 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "621",
            "459",
            "540"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 540."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 26 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "520 / 4680",
            "598 / 4680",
            "520 / 4758"
          ],
          "answer": 1,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 520. Conserva el 90 % del volumen inicial. Segundo resultado: 4680."
        },
        {
          "story": "Una tienda recibe 28 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Cuántos registros deben excluirse como duplicados? ¿Qué volumen queda tras la limpieza? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "644 / 5040",
            "560 / 5124",
            "560 / 5040"
          ],
          "answer": 3,
          "hint": "Aplica la tasa de duplicación al total.",
          "explanation": "Aplica la tasa de duplicación al total. Resultado: 560. Conserva el 90 % del volumen inicial. Segundo resultado: 5040."
        }
      ]
    },
    {
      "nombre": "¿Qué volumen queda tras la limpieza?",
      "facil": [
        {
          "story": "Una tienda recibe 25 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5175",
            "3825",
            "4500"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 4500."
        },
        {
          "story": "Una tienda recibe 27 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4131",
            "4860",
            "5589"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 4860."
        }
      ],
      "dificil": [
        {
          "story": "Una tienda recibe 26 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5382 / 5200",
            "4680 / 5902",
            "4680 / 5200"
          ],
          "answer": 3,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 4680. Multiplica lotes por registros. Segundo resultado: 5200."
        },
        {
          "story": "Una tienda recibe 28 lotes diarios de 200 registros. El 10 % de los registros son duplicados identificados.",
          "prompt": "¿Qué volumen queda tras la limpieza? ¿Cuántos registros llegan al día? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5040 / 6356",
            "5040 / 5600",
            "5796 / 5600"
          ],
          "answer": 2,
          "hint": "Conserva el 90 % del volumen inicial.",
          "explanation": "Conserva el 90 % del volumen inicial. Resultado: 5040. Multiplica lotes por registros. Segundo resultado: 5600."
        }
      ]
    }
  ]
},
{
  "id": "1800051-2",
  "nombre": "Bloque 2 · Métodos de análisis y predicción",
  "apartados": [
    {
      "nombre": "¿Qué porcentaje de predicciones positivas es correcto?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 15 verdaderos positivos, 5 falsos positivos, 10 falsos negativos y 20 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "75",
            "86",
            "64"
          ],
          "answer": 1,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75."
        },
        {
          "story": "En validación separada, un clasificador produce 21 verdaderos positivos, 7 falsos positivos, 14 falsos negativos y 28 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "86",
            "64",
            "75"
          ],
          "answer": 3,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 18 verdaderos positivos, 6 falsos positivos, 12 falsos negativos y 24 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? ¿Cuál es la sensibilidad en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "75 / 60",
            "86 / 60",
            "75 / 71"
          ],
          "answer": 1,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75. Sensibilidad = VP/(VP+FN). Segundo resultado: 60."
        },
        {
          "story": "En validación separada, un clasificador produce 24 verdaderos positivos, 8 falsos positivos, 16 falsos negativos y 32 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? ¿Cuál es la sensibilidad en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "86 / 60",
            "75 / 71",
            "75 / 60"
          ],
          "answer": 3,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75. Sensibilidad = VP/(VP+FN). Segundo resultado: 60."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la sensibilidad en porcentaje?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 15 verdaderos positivos, 5 falsos positivos, 10 falsos negativos y 20 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "69",
            "51",
            "60"
          ],
          "answer": 3,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60."
        },
        {
          "story": "En validación separada, un clasificador produce 21 verdaderos positivos, 7 falsos positivos, 14 falsos negativos y 28 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "51",
            "60",
            "69"
          ],
          "answer": 2,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 18 verdaderos positivos, 6 falsos positivos, 12 falsos negativos y 24 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? ¿Cuántos errores hay en el conjunto de validación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "69 / 18",
            "60 / 27",
            "60 / 18"
          ],
          "answer": 3,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60. Suma falsos positivos y falsos negativos. Segundo resultado: 18."
        },
        {
          "story": "En validación separada, un clasificador produce 24 verdaderos positivos, 8 falsos positivos, 16 falsos negativos y 32 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? ¿Cuántos errores hay en el conjunto de validación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 33",
            "60 / 24",
            "69 / 24"
          ],
          "answer": 2,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60. Suma falsos positivos y falsos negativos. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuántos errores hay en el conjunto de validación?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 15 verdaderos positivos, 5 falsos positivos, 10 falsos negativos y 20 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "17"
          ],
          "answer": 2,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 15."
        },
        {
          "story": "En validación separada, un clasificador produce 21 verdaderos positivos, 7 falsos positivos, 14 falsos negativos y 28 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "24",
            "18"
          ],
          "answer": 1,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 21."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 18 verdaderos positivos, 6 falsos positivos, 12 falsos negativos y 24 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? ¿Qué porcentaje de predicciones positivas es correcto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 78",
            "18 / 75",
            "21 / 75"
          ],
          "answer": 2,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 18. Precisión = VP/(VP+FP). Segundo resultado: 75."
        },
        {
          "story": "En validación separada, un clasificador produce 24 verdaderos positivos, 8 falsos positivos, 16 falsos negativos y 32 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? ¿Qué porcentaje de predicciones positivas es correcto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 75",
            "28 / 75",
            "24 / 79"
          ],
          "answer": 1,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 24. Precisión = VP/(VP+FP). Segundo resultado: 75."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima mínimos cuadrados?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 9, media de Y 29, suma cruzada centrada 54 y suma centrada de cuadrados de X 18.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "2",
            "3"
          ],
          "answer": 3,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 11, media de Y 35, suma cruzada centrada 66 y suma centrada de cuadrados de X 22.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 10, media de Y 32, suma cruzada centrada 60 y suma centrada de cuadrados de X 20.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? ¿Qué intercepto se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 2",
            "3 / 3",
            "3 / 2"
          ],
          "answer": 3,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3. Resta pendiente por media de X a la media de Y. Segundo resultado: 2."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 12, media de Y 38, suma cruzada centrada 72 y suma centrada de cuadrados de X 24.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? ¿Qué intercepto se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 3",
            "3 / 2",
            "4 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3. Resta pendiente por media de X a la media de Y. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué intercepto se estima?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 9, media de Y 29, suma cruzada centrada 54 y suma centrada de cuadrados de X 18.",
          "prompt": "¿Qué intercepto se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 11, media de Y 35, suma cruzada centrada 66 y suma centrada de cuadrados de X 22.",
          "prompt": "¿Qué intercepto se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 10, media de Y 32, suma cruzada centrada 60 y suma centrada de cuadrados de X 20.",
          "prompt": "¿Qué intercepto se estima? ¿Qué ventas predice para X un punto por encima de su media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 36",
            "2 / 35",
            "3 / 35"
          ],
          "answer": 2,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2. La recta pasa por las medias y por cada unidad sube la pendiente. Segundo resultado: 35."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 12, media de Y 38, suma cruzada centrada 72 y suma centrada de cuadrados de X 24.",
          "prompt": "¿Qué intercepto se estima? ¿Qué ventas predice para X un punto por encima de su media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 41",
            "3 / 41",
            "2 / 42"
          ],
          "answer": 1,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2. La recta pasa por las medias y por cada unidad sube la pendiente. Segundo resultado: 41."
        }
      ]
    },
    {
      "nombre": "¿Qué ventas predice para X un punto por encima de su media?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 9, media de Y 29, suma cruzada centrada 54 y suma centrada de cuadrados de X 18.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "37",
            "27"
          ],
          "answer": 1,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 32."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 11, media de Y 35, suma cruzada centrada 66 y suma centrada de cuadrados de X 22.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "44",
            "32",
            "38"
          ],
          "answer": 3,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 38."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 10, media de Y 32, suma cruzada centrada 60 y suma centrada de cuadrados de X 20.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? ¿Qué pendiente estima mínimos cuadrados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "35 / 3",
            "40 / 3",
            "35 / 8"
          ],
          "answer": 1,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 35. Divide la suma cruzada por la suma de cuadrados de X. Segundo resultado: 3."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 12, media de Y 38, suma cruzada centrada 72 y suma centrada de cuadrados de X 24.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? ¿Qué pendiente estima mínimos cuadrados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "47 / 3",
            "41 / 9",
            "41 / 3"
          ],
          "answer": 3,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 41. Divide la suma cruzada por la suma de cuadrados de X. Segundo resultado: 3."
        }
      ]
    },
    {
      "nombre": "¿Qué distancia absoluta hay al centroide más próximo?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 13 y los centroides están en 11 y 18.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 15 y los centroides están en 13 y 20.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 14 y los centroides están en 12 y 19.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 5",
            "2 / 4",
            "3 / 4"
          ],
          "answer": 2,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 16 y los centroides están en 14 y 21.",
          "prompt": "¿Qué distancia absoluta hay al centroide más próximo? ¿Qué contribución al error cuadrático aporta la asignación óptima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 4",
            "3 / 4",
            "2 / 5"
          ],
          "answer": 1,
          "hint": "Calcula las dos distancias y toma la menor.",
          "explanation": "Calcula las dos distancias y toma la menor. Resultado: 2. Eleva al cuadrado la distancia al centroide asignado. Segundo resultado: 4."
        }
      ]
    },
    {
      "nombre": "¿Qué contribución al error cuadrático aporta la asignación óptima?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 13 y los centroides están en 11 y 18.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "3"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 15 y los centroides están en 13 y 20.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "3",
            "4"
          ],
          "answer": 3,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 14 y los centroides están en 12 y 19.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "4 / 16",
            "5 / 16",
            "4 / 17"
          ],
          "answer": 1,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 16."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 16 y los centroides están en 14 y 21.",
          "prompt": "¿Qué contribución al error cuadrático aporta la asignación óptima? ¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "5 / 18",
            "4 / 19",
            "4 / 18"
          ],
          "answer": 3,
          "hint": "Eleva al cuadrado la distancia al centroide asignado.",
          "explanation": "Eleva al cuadrado la distancia al centroide asignado. Resultado: 4. El nuevo centroide es la media de los dos gastos. Segundo resultado: 18."
        }
      ]
    },
    {
      "nombre": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor?",
      "facil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 13 y los centroides están en 11 y 18.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "13",
            "15"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 15."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 15 y los centroides están en 13 y 20.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "17",
            "20"
          ],
          "answer": 2,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 17."
        }
      ],
      "dificil": [
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 14 y los centroides están en 12 y 19.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 2",
            "16 / 4",
            "16 / 2"
          ],
          "answer": 3,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 16. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        },
        {
          "story": "En una segmentación unidimensional por k-medias, un cliente tiene gasto 16 y los centroides están en 14 y 21.",
          "prompt": "¿Qué centroide tendría un grupo formado solo por este cliente y otro con gasto cuatro unidades mayor? ¿Qué distancia absoluta hay al centroide más próximo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 5",
            "18 / 2",
            "21 / 2"
          ],
          "answer": 2,
          "hint": "El nuevo centroide es la media de los dos gastos.",
          "explanation": "El nuevo centroide es la media de los dos gastos. Resultado: 18. Calcula las dos distancias y toma la menor. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué pronóstico da la media móvil de tres meses?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 17, 20 y 23.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 20."
        },
        {
          "story": "Las últimas tres ventas mensuales son 19, 22 y 25.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? Redondea a cuatro decimales si es necesario.",
          "options": [
            "25",
            "19",
            "22"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 22."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 18, 21 y 24.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "21 / 24",
            "24 / 24",
            "21 / 27"
          ],
          "answer": 1,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 21. El pronóstico repite el dato más reciente. Segundo resultado: 24."
        },
        {
          "story": "Las últimas tres ventas mensuales son 20, 23 y 26.",
          "prompt": "¿Qué pronóstico da la media móvil de tres meses? ¿Qué pronóstico da el método ingenuo del último valor? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 26",
            "23 / 29",
            "23 / 26"
          ],
          "answer": 3,
          "hint": "Promedia las tres ventas.",
          "explanation": "Promedia las tres ventas. Resultado: 23. El pronóstico repite el dato más reciente. Segundo resultado: 26."
        }
      ]
    },
    {
      "nombre": "¿Qué pronóstico da el método ingenuo del último valor?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 17, 20 y 23.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 23."
        },
        {
          "story": "Las últimas tres ventas mensuales son 19, 22 y 25.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "25",
            "29"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 25."
        }
      ],
      "dificil": [
        {
          "story": "Las últimas tres ventas mensuales son 18, 21 y 24.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 6",
            "24 / 10",
            "24 / 6"
          ],
          "answer": 3,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 24. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        },
        {
          "story": "Las últimas tres ventas mensuales son 20, 23 y 26.",
          "prompt": "¿Qué pronóstico da el método ingenuo del último valor? Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 10",
            "26 / 6",
            "30 / 6"
          ],
          "answer": 2,
          "hint": "El pronóstico repite el dato más reciente.",
          "explanation": "El pronóstico repite el dato más reciente. Resultado: 26. Resta el pronóstico móvil al nuevo dato. Segundo resultado: 6."
        }
      ]
    },
    {
      "nombre": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil?",
      "facil": [
        {
          "story": "Las últimas tres ventas mensuales son 17, 20 y 23.",
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
          "story": "Las últimas tres ventas mensuales son 19, 22 y 25.",
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
          "story": "Las últimas tres ventas mensuales son 18, 21 y 24.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 22",
            "6 / 21",
            "7 / 21"
          ],
          "answer": 2,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 21."
        },
        {
          "story": "Las últimas tres ventas mensuales son 20, 23 y 26.",
          "prompt": "Si el mes siguiente vende tres unidades más que el último, ¿qué error observado menos previsto tuvo la media móvil? ¿Qué pronóstico da la media móvil de tres meses? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 23",
            "7 / 23",
            "6 / 24"
          ],
          "answer": 1,
          "hint": "Resta el pronóstico móvil al nuevo dato.",
          "explanation": "Resta el pronóstico móvil al nuevo dato. Resultado: 6. Promedia las tres ventas. Segundo resultado: 23."
        }
      ]
    },
    {
      "nombre": "¿Qué porcentaje de predicciones positivas es correcto?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 63 verdaderos positivos, 21 falsos positivos, 42 falsos negativos y 84 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "86",
            "64",
            "75"
          ],
          "answer": 3,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75."
        },
        {
          "story": "En validación separada, un clasificador produce 69 verdaderos positivos, 23 falsos positivos, 46 falsos negativos y 92 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "64",
            "75",
            "86"
          ],
          "answer": 2,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 66 verdaderos positivos, 22 falsos positivos, 44 falsos negativos y 88 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? ¿Cuál es la sensibilidad en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "86 / 60",
            "75 / 71",
            "75 / 60"
          ],
          "answer": 3,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75. Sensibilidad = VP/(VP+FN). Segundo resultado: 60."
        },
        {
          "story": "En validación separada, un clasificador produce 72 verdaderos positivos, 24 falsos positivos, 48 falsos negativos y 96 verdaderos negativos.",
          "prompt": "¿Qué porcentaje de predicciones positivas es correcto? ¿Cuál es la sensibilidad en porcentaje? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "75 / 71",
            "75 / 60",
            "86 / 60"
          ],
          "answer": 2,
          "hint": "Precisión = VP/(VP+FP).",
          "explanation": "Precisión = VP/(VP+FP). Resultado: 75. Sensibilidad = VP/(VP+FN). Segundo resultado: 60."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la sensibilidad en porcentaje?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 63 verdaderos positivos, 21 falsos positivos, 42 falsos negativos y 84 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "51",
            "60",
            "69"
          ],
          "answer": 2,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60."
        },
        {
          "story": "En validación separada, un clasificador produce 69 verdaderos positivos, 23 falsos positivos, 46 falsos negativos y 92 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60",
            "69",
            "51"
          ],
          "answer": 1,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 66 verdaderos positivos, 22 falsos positivos, 44 falsos negativos y 88 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? ¿Cuántos errores hay en el conjunto de validación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 75",
            "60 / 66",
            "69 / 66"
          ],
          "answer": 2,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60. Suma falsos positivos y falsos negativos. Segundo resultado: 66."
        },
        {
          "story": "En validación separada, un clasificador produce 72 verdaderos positivos, 24 falsos positivos, 48 falsos negativos y 96 verdaderos negativos.",
          "prompt": "¿Cuál es la sensibilidad en porcentaje? ¿Cuántos errores hay en el conjunto de validación? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "60 / 72",
            "69 / 72",
            "60 / 81"
          ],
          "answer": 1,
          "hint": "Sensibilidad = VP/(VP+FN).",
          "explanation": "Sensibilidad = VP/(VP+FN). Resultado: 60. Suma falsos positivos y falsos negativos. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuántos errores hay en el conjunto de validación?",
      "facil": [
        {
          "story": "En validación separada, un clasificador produce 63 verdaderos positivos, 21 falsos positivos, 42 falsos negativos y 84 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "63",
            "72",
            "54"
          ],
          "answer": 1,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 63."
        },
        {
          "story": "En validación separada, un clasificador produce 69 verdaderos positivos, 23 falsos positivos, 46 falsos negativos y 92 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? Redondea a cuatro decimales si es necesario.",
          "options": [
            "79",
            "59",
            "69"
          ],
          "answer": 3,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 69."
        }
      ],
      "dificil": [
        {
          "story": "En validación separada, un clasificador produce 66 verdaderos positivos, 22 falsos positivos, 44 falsos negativos y 88 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? ¿Qué porcentaje de predicciones positivas es correcto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "66 / 75",
            "76 / 75",
            "66 / 85"
          ],
          "answer": 1,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 66. Precisión = VP/(VP+FP). Segundo resultado: 75."
        },
        {
          "story": "En validación separada, un clasificador produce 72 verdaderos positivos, 24 falsos positivos, 48 falsos negativos y 96 verdaderos negativos.",
          "prompt": "¿Cuántos errores hay en el conjunto de validación? ¿Qué porcentaje de predicciones positivas es correcto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "83 / 75",
            "72 / 86",
            "72 / 75"
          ],
          "answer": 3,
          "hint": "Suma falsos positivos y falsos negativos.",
          "explanation": "Suma falsos positivos y falsos negativos. Resultado: 72. Precisión = VP/(VP+FP). Segundo resultado: 75."
        }
      ]
    },
    {
      "nombre": "¿Qué pendiente estima mínimos cuadrados?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 25, media de Y 77, suma cruzada centrada 150 y suma centrada de cuadrados de X 50.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 27, media de Y 83, suma cruzada centrada 162 y suma centrada de cuadrados de X 54.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "4",
            "2"
          ],
          "answer": 1,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 26, media de Y 80, suma cruzada centrada 156 y suma centrada de cuadrados de X 52.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? ¿Qué intercepto se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 3",
            "3 / 2",
            "4 / 2"
          ],
          "answer": 2,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3. Resta pendiente por media de X a la media de Y. Segundo resultado: 2."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 28, media de Y 86, suma cruzada centrada 168 y suma centrada de cuadrados de X 56.",
          "prompt": "¿Qué pendiente estima mínimos cuadrados? ¿Qué intercepto se estima? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 2",
            "4 / 2",
            "3 / 3"
          ],
          "answer": 1,
          "hint": "Divide la suma cruzada por la suma de cuadrados de X.",
          "explanation": "Divide la suma cruzada por la suma de cuadrados de X. Resultado: 3. Resta pendiente por media de X a la media de Y. Segundo resultado: 2."
        }
      ]
    },
    {
      "nombre": "¿Qué intercepto se estima?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 25, media de Y 77, suma cruzada centrada 150 y suma centrada de cuadrados de X 50.",
          "prompt": "¿Qué intercepto se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "2",
            "3",
            "1"
          ],
          "answer": 1,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 27, media de Y 83, suma cruzada centrada 162 y suma centrada de cuadrados de X 54.",
          "prompt": "¿Qué intercepto se estima? Redondea a cuatro decimales si es necesario.",
          "options": [
            "3",
            "1",
            "2"
          ],
          "answer": 3,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 26, media de Y 80, suma cruzada centrada 156 y suma centrada de cuadrados de X 52.",
          "prompt": "¿Qué intercepto se estima? ¿Qué ventas predice para X un punto por encima de su media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "2 / 83",
            "3 / 83",
            "2 / 84"
          ],
          "answer": 1,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2. La recta pasa por las medias y por cada unidad sube la pendiente. Segundo resultado: 83."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 28, media de Y 86, suma cruzada centrada 168 y suma centrada de cuadrados de X 56.",
          "prompt": "¿Qué intercepto se estima? ¿Qué ventas predice para X un punto por encima de su media? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "3 / 89",
            "2 / 90",
            "2 / 89"
          ],
          "answer": 3,
          "hint": "Resta pendiente por media de X a la media de Y.",
          "explanation": "Resta pendiente por media de X a la media de Y. Resultado: 2. La recta pasa por las medias y por cada unidad sube la pendiente. Segundo resultado: 89."
        }
      ]
    },
    {
      "nombre": "¿Qué ventas predice para X un punto por encima de su media?",
      "facil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 25, media de Y 77, suma cruzada centrada 150 y suma centrada de cuadrados de X 50.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "92",
            "68",
            "80"
          ],
          "answer": 3,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 80."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 27, media de Y 83, suma cruzada centrada 162 y suma centrada de cuadrados de X 54.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? Redondea a cuatro decimales si es necesario.",
          "options": [
            "73",
            "86",
            "99"
          ],
          "answer": 2,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 86."
        }
      ],
      "dificil": [
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 26, media de Y 80, suma cruzada centrada 156 y suma centrada de cuadrados de X 52.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? ¿Qué pendiente estima mínimos cuadrados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "95 / 3",
            "83 / 15",
            "83 / 3"
          ],
          "answer": 3,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 83. Divide la suma cruzada por la suma de cuadrados de X. Segundo resultado: 3."
        },
        {
          "story": "Una regresión de ventas con intercepto tiene media de X 28, media de Y 86, suma cruzada centrada 168 y suma centrada de cuadrados de X 56.",
          "prompt": "¿Qué ventas predice para X un punto por encima de su media? ¿Qué pendiente estima mínimos cuadrados? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "89 / 16",
            "89 / 3",
            "102 / 3"
          ],
          "answer": 2,
          "hint": "La recta pasa por las medias y por cada unidad sube la pendiente.",
          "explanation": "La recta pasa por las medias y por cada unidad sube la pendiente. Resultado: 89. Divide la suma cruzada por la suma de cuadrados de X. Segundo resultado: 3."
        }
      ]
    }
  ]
},
{
  "id": "1800051-3",
  "nombre": "Bloque 3 · Herramientas informáticas y visualización",
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
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 90 filas de clientes. Un filtro en R o Python selecciona 36 filas. Dentro de ellas, 9 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "41",
            "31",
            "36"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 36."
        },
        {
          "story": "Un archivo tiene 110 filas de clientes. Un filtro en R o Python selecciona 44 filas. Dentro de ellas, 11 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "37",
            "44",
            "51"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 44."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 100 filas de clientes. Un filtro en R o Python selecciona 40 filas. Dentro de ellas, 10 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "46 / 30",
            "40 / 36",
            "40 / 30"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 40. Descuenta los importes ausentes tras filtrar. Segundo resultado: 30."
        },
        {
          "story": "Un archivo tiene 120 filas de clientes. Un filtro en R o Python selecciona 48 filas. Dentro de ellas, 12 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 43",
            "48 / 36",
            "55 / 36"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 48. Descuenta los importes ausentes tras filtrar. Segundo resultado: 36."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 90 filas de clientes. Un filtro en R o Python selecciona 36 filas. Dentro de ellas, 9 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "27",
            "31"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 27."
        },
        {
          "story": "Un archivo tiene 110 filas de clientes. Un filtro en R o Python selecciona 44 filas. Dentro de ellas, 11 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "33",
            "38",
            "28"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 33."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 100 filas de clientes. Un filtro en R o Python selecciona 40 filas. Dentro de ellas, 10 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 25",
            "30 / 20",
            "35 / 20"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 30. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 120 filas de clientes. Un filtro en R o Python selecciona 48 filas. Dentro de ellas, 12 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "36 / 20",
            "41 / 20",
            "36 / 25"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 36. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 90 filas de clientes. Un filtro en R o Python selecciona 36 filas. Dentro de ellas, 9 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 110 filas de clientes. Un filtro en R o Python selecciona 44 filas. Dentro de ellas, 11 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "17",
            "20"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 100 filas de clientes. Un filtro en R o Python selecciona 40 filas. Dentro de ellas, 10 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 40",
            "23 / 40",
            "20 / 43"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 40."
        },
        {
          "story": "Un archivo tiene 120 filas de clientes. Un filtro en R o Python selecciona 48 filas. Dentro de ellas, 12 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 48",
            "20 / 51",
            "20 / 48"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 130 filas de clientes. Un filtro en R o Python selecciona 52 filas. Dentro de ellas, 13 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "44",
            "52",
            "60"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 52."
        },
        {
          "story": "Un archivo tiene 150 filas de clientes. Un filtro en R o Python selecciona 60 filas. Dentro de ellas, 15 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "60",
            "69",
            "51"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 60."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 140 filas de clientes. Un filtro en R o Python selecciona 56 filas. Dentro de ellas, 14 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "56 / 50",
            "56 / 42",
            "64 / 42"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 56. Descuenta los importes ausentes tras filtrar. Segundo resultado: 42."
        },
        {
          "story": "Un archivo tiene 160 filas de clientes. Un filtro en R o Python selecciona 64 filas. Dentro de ellas, 16 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "64 / 48",
            "74 / 48",
            "64 / 58"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 64. Descuenta los importes ausentes tras filtrar. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 130 filas de clientes. Un filtro en R o Python selecciona 52 filas. Dentro de ellas, 13 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "39",
            "45",
            "33"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 39."
        },
        {
          "story": "Un archivo tiene 150 filas de clientes. Un filtro en R o Python selecciona 60 filas. Dentro de ellas, 15 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "52",
            "38",
            "45"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 45."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 140 filas de clientes. Un filtro en R o Python selecciona 56 filas. Dentro de ellas, 14 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "42 / 20",
            "48 / 20",
            "42 / 26"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 42. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 160 filas de clientes. Un filtro en R o Python selecciona 64 filas. Dentro de ellas, 16 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "55 / 20",
            "48 / 27",
            "48 / 20"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 48. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 130 filas de clientes. Un filtro en R o Python selecciona 52 filas. Dentro de ellas, 13 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "17",
            "20"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 150 filas de clientes. Un filtro en R o Python selecciona 60 filas. Dentro de ellas, 15 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "23"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 140 filas de clientes. Un filtro en R o Python selecciona 56 filas. Dentro de ellas, 14 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 56",
            "20 / 59",
            "20 / 56"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 56."
        },
        {
          "story": "Un archivo tiene 160 filas de clientes. Un filtro en R o Python selecciona 64 filas. Dentro de ellas, 16 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 67",
            "20 / 64",
            "23 / 64"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 64."
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
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 210 filas de clientes. Un filtro en R o Python selecciona 84 filas. Dentro de ellas, 21 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97",
            "71",
            "84"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 84."
        },
        {
          "story": "Un archivo tiene 230 filas de clientes. Un filtro en R o Python selecciona 92 filas. Dentro de ellas, 23 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "78",
            "92",
            "106"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 92."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 220 filas de clientes. Un filtro en R o Python selecciona 88 filas. Dentro de ellas, 22 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "101 / 66",
            "88 / 79",
            "88 / 66"
          ],
          "answer": 3,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 88. Descuenta los importes ausentes tras filtrar. Segundo resultado: 66."
        },
        {
          "story": "Un archivo tiene 240 filas de clientes. Un filtro en R o Python selecciona 96 filas. Dentro de ellas, 24 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "96 / 86",
            "96 / 72",
            "110 / 72"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 96. Descuenta los importes ausentes tras filtrar. Segundo resultado: 72."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 210 filas de clientes. Un filtro en R o Python selecciona 84 filas. Dentro de ellas, 21 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "54",
            "63",
            "72"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 63."
        },
        {
          "story": "Un archivo tiene 230 filas de clientes. Un filtro en R o Python selecciona 92 filas. Dentro de ellas, 23 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "69",
            "79",
            "59"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 69."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 220 filas de clientes. Un filtro en R o Python selecciona 88 filas. Dentro de ellas, 22 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "66 / 30",
            "66 / 20",
            "76 / 20"
          ],
          "answer": 2,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 66. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 240 filas de clientes. Un filtro en R o Python selecciona 96 filas. Dentro de ellas, 24 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "72 / 20",
            "83 / 20",
            "72 / 31"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 72. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 210 filas de clientes. Un filtro en R o Python selecciona 84 filas. Dentro de ellas, 21 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "17"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 230 filas de clientes. Un filtro en R o Python selecciona 92 filas. Dentro de ellas, 23 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "17",
            "20"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 220 filas de clientes. Un filtro en R o Python selecciona 88 filas. Dentro de ellas, 22 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 88",
            "23 / 88",
            "20 / 91"
          ],
          "answer": 1,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 88."
        },
        {
          "story": "Un archivo tiene 240 filas de clientes. Un filtro en R o Python selecciona 96 filas. Dentro de ellas, 24 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 96",
            "20 / 99",
            "20 / 96"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 96."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas devuelve el filtro antes de tratar ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 250 filas de clientes. Un filtro en R o Python selecciona 100 filas. Dentro de ellas, 25 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "85",
            "100",
            "115"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 100."
        },
        {
          "story": "Un archivo tiene 270 filas de clientes. Un filtro en R o Python selecciona 108 filas. Dentro de ellas, 27 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "108",
            "124",
            "92"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 108."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 260 filas de clientes. Un filtro en R o Python selecciona 104 filas. Dentro de ellas, 26 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "104 / 94",
            "104 / 78",
            "120 / 78"
          ],
          "answer": 2,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 104. Descuenta los importes ausentes tras filtrar. Segundo resultado: 78."
        },
        {
          "story": "Un archivo tiene 280 filas de clientes. Un filtro en R o Python selecciona 112 filas. Dentro de ellas, 28 carecen de importe.",
          "prompt": "¿Cuántas filas devuelve el filtro antes de tratar ausencias? ¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "112 / 84",
            "129 / 84",
            "112 / 101"
          ],
          "answer": 1,
          "hint": "Cuenta las filas que satisfacen el predicado.",
          "explanation": "Cuenta las filas que satisfacen el predicado. Resultado: 112. Descuenta los importes ausentes tras filtrar. Segundo resultado: 84."
        }
      ]
    },
    {
      "nombre": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias?",
      "facil": [
        {
          "story": "Un archivo tiene 250 filas de clientes. Un filtro en R o Python selecciona 100 filas. Dentro de ellas, 25 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "75",
            "86",
            "64"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 75."
        },
        {
          "story": "Un archivo tiene 270 filas de clientes. Un filtro en R o Python selecciona 108 filas. Dentro de ellas, 27 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Redondea a cuatro decimales si es necesario.",
          "options": [
            "93",
            "69",
            "81"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 81."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 260 filas de clientes. Un filtro en R o Python selecciona 104 filas. Dentro de ellas, 26 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "78 / 20",
            "90 / 20",
            "78 / 32"
          ],
          "answer": 1,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 78. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        },
        {
          "story": "Un archivo tiene 280 filas de clientes. Un filtro en R o Python selecciona 112 filas. Dentro de ellas, 28 carecen de importe.",
          "prompt": "¿Cuántas filas se usan al calcular la media del importe omitiendo ausencias? Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "97 / 20",
            "84 / 33",
            "84 / 20"
          ],
          "answer": 3,
          "hint": "Descuenta los importes ausentes tras filtrar.",
          "explanation": "Descuenta los importes ausentes tras filtrar. Resultado: 84. Divide 60n entre 3n filas válidas. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa?",
      "facil": [
        {
          "story": "Un archivo tiene 250 filas de clientes. Un filtro en R o Python selecciona 100 filas. Dentro de ellas, 25 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "17",
            "20"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        },
        {
          "story": "Un archivo tiene 270 filas de clientes. Un filtro en R o Python selecciona 108 filas. Dentro de ellas, 27 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "23"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20."
        }
      ],
      "dificil": [
        {
          "story": "Un archivo tiene 260 filas de clientes. Un filtro en R o Python selecciona 104 filas. Dentro de ellas, 26 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 104",
            "20 / 107",
            "20 / 104"
          ],
          "answer": 3,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 104."
        },
        {
          "story": "Un archivo tiene 280 filas de clientes. Un filtro en R o Python selecciona 112 filas. Dentro de ellas, 28 carecen de importe.",
          "prompt": "Si los importes válidos suman 60 veces n, siendo n el número de importes ausentes entre los seleccionados, ¿qué media se representa? ¿Cuántas filas devuelve el filtro antes de tratar ausencias? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 115",
            "20 / 112",
            "23 / 112"
          ],
          "answer": 2,
          "hint": "Divide 60n entre 3n filas válidas.",
          "explanation": "Divide 60n entre 3n filas válidas. Resultado: 20. Cuenta las filas que satisfacen el predicado. Segundo resultado: 112."
        }
      ]
    }
  ]
}
];

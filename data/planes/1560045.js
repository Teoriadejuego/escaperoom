window.PLAN_1560045 = [
{
  "id": "1560045-1",
  "nombre": "Bloque 1 · Sistemas dinámicos con herramientas informáticas",
  "apartados": [
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+5 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 5.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 5."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+7 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 7.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "6",
            "7"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+6 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 6.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 12",
            "7 / 12",
            "6 / 13"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 6. Iguala el incremento o la derivada a cero. Segundo resultado: 12."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+8 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 8.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 16",
            "8 / 17",
            "8 / 16"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 8. Iguala el incremento o la derivada a cero. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+5 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 5.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 10."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+7 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 7.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+6 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 6.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 6",
            "12 / 8",
            "12 / 6"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 12. Sustituye el estado inicial en la tasa. Segundo resultado: 6."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+8 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 8.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 10",
            "16 / 8",
            "18 / 8"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 16. Sustituye el estado inicial en la tasa. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+5 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 5.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 5."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+7 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 7.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "7",
            "8",
            "6"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+6 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 6.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 7",
            "6 / 6",
            "7 / 6"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 6. Evalúa la recurrencia desde cero. Segundo resultado: 6."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+8 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 8.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "8 / 8",
            "9 / 8",
            "8 / 9"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 8. Evalúa la recurrencia desde cero. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+9 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 9.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10",
            "8",
            "9"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 9."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+11 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 11.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "11",
            "13"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+10 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 10.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 20",
            "10 / 22",
            "10 / 20"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 10. Iguala el incremento o la derivada a cero. Segundo resultado: 20."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+12 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 12.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "12 / 26",
            "12 / 24",
            "14 / 24"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 12. Iguala el incremento o la derivada a cero. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+9 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 9.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "18",
            "21"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 18."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+11 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 11.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "25",
            "19"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 22."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+10 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 10.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 13",
            "20 / 10",
            "23 / 10"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 20. Sustituye el estado inicial en la tasa. Segundo resultado: 10."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+12 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 12.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 12",
            "28 / 12",
            "24 / 16"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 24. Sustituye el estado inicial en la tasa. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+9 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 9.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "9",
            "10",
            "8"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 9."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+11 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 11.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "9",
            "11"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 11."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+10 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 10.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "10 / 10",
            "12 / 10",
            "10 / 12"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 10. Evalúa la recurrencia desde cero. Segundo resultado: 10."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+12 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 12.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 12",
            "12 / 14",
            "12 / 12"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 12. Evalúa la recurrencia desde cero. Segundo resultado: 12."
        }
      ]
    },
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+13 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 13.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 13."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+15 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 15.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+14 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 14.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 30",
            "14 / 28",
            "16 / 28"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 14. Iguala el incremento o la derivada a cero. Segundo resultado: 28."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+16 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 16.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 32",
            "18 / 32",
            "16 / 34"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 16. Iguala el incremento o la derivada a cero. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+13 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 13.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "30",
            "22"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 26."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+15 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 15.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+14 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 14.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 14",
            "32 / 14",
            "28 / 18"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 28. Sustituye el estado inicial en la tasa. Segundo resultado: 14."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+16 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 16.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 16",
            "32 / 21",
            "32 / 16"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 32. Sustituye el estado inicial en la tasa. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+13 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 13.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "11",
            "13"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 13."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+15 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 15.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "13",
            "15",
            "17"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+14 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 14.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 14",
            "14 / 16",
            "14 / 14"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 14. Evalúa la recurrencia desde cero. Segundo resultado: 14."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+16 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 16.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 18",
            "16 / 16",
            "18 / 16"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 16. Evalúa la recurrencia desde cero. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+17 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 17.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "17",
            "20",
            "14"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 17."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+19 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 19.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "22",
            "16",
            "19"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 19."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+18 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 18.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 36",
            "21 / 36",
            "18 / 39"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 18. Iguala el incremento o la derivada a cero. Segundo resultado: 36."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+20 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 20.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "23 / 40",
            "20 / 43",
            "20 / 40"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 20. Iguala el incremento o la derivada a cero. Segundo resultado: 40."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+17 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 17.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "39",
            "29",
            "34"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 34."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+19 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 19.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "32",
            "38",
            "44"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 38."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+18 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 18.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "41 / 18",
            "36 / 23",
            "36 / 18"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 36. Sustituye el estado inicial en la tasa. Segundo resultado: 18."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+20 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 20.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "40 / 26",
            "40 / 20",
            "46 / 20"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 40. Sustituye el estado inicial en la tasa. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+17 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 17.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "14",
            "17",
            "20"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 17."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+19 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 19.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "19",
            "22",
            "16"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 19."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+18 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 18.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 21",
            "18 / 18",
            "21 / 18"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 18. Evalúa la recurrencia desde cero. Segundo resultado: 18."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+20 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 20.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "20 / 20",
            "23 / 20",
            "20 / 23"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 20. Evalúa la recurrencia desde cero. Segundo resultado: 20."
        }
      ]
    },
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+21 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 21.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 21."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+23 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 23.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+22 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 22.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 44",
            "22 / 47",
            "22 / 44"
          ],
          "answer": 3,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 22. Iguala el incremento o la derivada a cero. Segundo resultado: 44."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+24 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 24.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 52",
            "24 / 48",
            "28 / 48"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 24. Iguala el incremento o la derivada a cero. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+21 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 21.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "36",
            "42",
            "48"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 42."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+23 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 23.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "53",
            "39"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+22 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 22.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 29",
            "44 / 22",
            "51 / 22"
          ],
          "answer": 2,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 44. Sustituye el estado inicial en la tasa. Segundo resultado: 22."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+24 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 24.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 24",
            "55 / 24",
            "48 / 31"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 48. Sustituye el estado inicial en la tasa. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+21 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 21.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "24",
            "18"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 21."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+23 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 23.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "20",
            "23"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+22 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 22.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "22 / 22",
            "25 / 22",
            "22 / 25"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 22. Evalúa la recurrencia desde cero. Segundo resultado: 22."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+24 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 24.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 24",
            "24 / 28",
            "24 / 24"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 24. Evalúa la recurrencia desde cero. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué stock hay tras un paso discreto?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+25 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 25.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "21",
            "25",
            "29"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 25."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+27 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 27.",
          "prompt": "¿Qué stock hay tras un paso discreto? Redondea a cuatro decimales si es necesario.",
          "options": [
            "27",
            "31",
            "23"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 27."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+26 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 26.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "26 / 56",
            "26 / 52",
            "30 / 52"
          ],
          "answer": 2,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 26. Iguala el incremento o la derivada a cero. Segundo resultado: 52."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+28 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 28.",
          "prompt": "¿Qué stock hay tras un paso discreto? ¿Qué stock estacionario tienen ambos sistemas? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 56",
            "32 / 56",
            "28 / 60"
          ],
          "answer": 1,
          "hint": "Evalúa la recurrencia desde cero.",
          "explanation": "Evalúa la recurrencia desde cero. Resultado: 28. Iguala el incremento o la derivada a cero. Segundo resultado: 56."
        }
      ]
    },
    {
      "nombre": "¿Qué stock estacionario tienen ambos sistemas?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+25 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 25.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "50",
            "58",
            "42"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 50."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+27 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 27.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? Redondea a cuatro decimales si es necesario.",
          "options": [
            "62",
            "46",
            "54"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 54."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+26 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 26.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "52 / 26",
            "60 / 26",
            "52 / 34"
          ],
          "answer": 1,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 52. Sustituye el estado inicial en la tasa. Segundo resultado: 26."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+28 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 28.",
          "prompt": "¿Qué stock estacionario tienen ambos sistemas? ¿Cuál es la derivada del sistema continuo en x = 0? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "64 / 28",
            "56 / 36",
            "56 / 28"
          ],
          "answer": 3,
          "hint": "Iguala el incremento o la derivada a cero.",
          "explanation": "Iguala el incremento o la derivada a cero. Resultado: 56. Sustituye el estado inicial en la tasa. Segundo resultado: 28."
        }
      ]
    },
    {
      "nombre": "¿Cuál es la derivada del sistema continuo en x = 0?",
      "facil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+25 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 25.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "29",
            "21",
            "25"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 25."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+27 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 27.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? Redondea a cuatro decimales si es necesario.",
          "options": [
            "23",
            "27",
            "31"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 27."
        }
      ],
      "dificil": [
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+26 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 26.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "30 / 26",
            "26 / 30",
            "26 / 26"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 26. Evalúa la recurrencia desde cero. Segundo resultado: 26."
        },
        {
          "story": "El stock sigue x(t+1)=0,5x(t)+28 y empieza en cero. En el modelo continuo asociado, la tasa es −0,5x + 28.",
          "prompt": "¿Cuál es la derivada del sistema continuo en x = 0? ¿Qué stock hay tras un paso discreto? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 32",
            "28 / 28",
            "32 / 28"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en la tasa.",
          "explanation": "Sustituye el estado inicial en la tasa. Resultado: 28. Evalúa la recurrencia desde cero. Segundo resultado: 28."
        }
      ]
    }
  ]
},
{
  "id": "1560045-2",
  "nombre": "Bloque 2 · Aplicaciones de la dinámica de sistemas",
  "apartados": [
    {
      "nombre": "¿Qué u iguala el beneficio marginal al coste de oportunidad?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 20. Su beneficio inmediato es 10u − u²/2 y cada unidad extraída reduce en 5 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "5",
            "6",
            "4"
          ],
          "answer": 1,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 5."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 28. Su beneficio inmediato es 14u − u²/2 y cada unidad extraída reduce en 7 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "8",
            "6",
            "7"
          ],
          "answer": 3,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 7."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 24. Su beneficio inmediato es 12u − u²/2 y cada unidad extraída reduce en 6 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "6 / 12",
            "7 / 12",
            "6 / 13"
          ],
          "answer": 1,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 6. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 12."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 32. Su beneficio inmediato es 16u − u²/2 y cada unidad extraída reduce en 8 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "9 / 16",
            "8 / 17",
            "8 / 16"
          ],
          "answer": 3,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 8. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 20. Su beneficio inmediato es 10u − u²/2 y cada unidad extraída reduce en 5 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "8",
            "10"
          ],
          "answer": 3,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 10."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 28. Su beneficio inmediato es 14u − u²/2 y cada unidad extraída reduce en 7 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "12",
            "14",
            "16"
          ],
          "answer": 2,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 14."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 24. Su beneficio inmediato es 12u − u²/2 y cada unidad extraída reduce en 6 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 18",
            "12 / 20",
            "12 / 18"
          ],
          "answer": 3,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 12. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 18."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 32. Su beneficio inmediato es 16u − u²/2 y cada unidad extraída reduce en 8 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 34",
            "16 / 32",
            "18 / 32"
          ],
          "answer": 2,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 16. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 20. Su beneficio inmediato es 10u − u²/2 y cada unidad extraída reduce en 5 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "10,625",
            "12,5",
            "14,375"
          ],
          "answer": 2,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 12,5."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 28. Su beneficio inmediato es 14u − u²/2 y cada unidad extraída reduce en 7 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24,5",
            "28,175",
            "20,825"
          ],
          "answer": 1,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 24,5."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 24. Su beneficio inmediato es 12u − u²/2 y cada unidad extraída reduce en 6 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "18 / 9",
            "18 / 6",
            "21 / 6"
          ],
          "answer": 2,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 18. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 6."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 32. Su beneficio inmediato es 16u − u²/2 y cada unidad extraída reduce en 8 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "32 / 8",
            "37 / 8",
            "32 / 13"
          ],
          "answer": 1,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 32. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 8."
        }
      ]
    },
    {
      "nombre": "¿Qué estado predice la siguiente iteración?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/9.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,3463",
            "0,2463",
            "0,2963"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,2963."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/11.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1979",
            "0,2479",
            "0,2979"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,2479."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/10.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,32 / 0,6667",
            "0,27 / 0,7167",
            "0,27 / 0,6667"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,27. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/12.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,2292 / 0,7167",
            "0,2292 / 0,6667",
            "0,2792 / 0,6667"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,2292. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        }
      ]
    },
    {
      "nombre": "¿Qué punto fijo positivo tiene el mapa?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/9.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5667",
            "0,6667",
            "0,7667"
          ],
          "answer": 2,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/11.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667",
            "0,7667",
            "0,5667"
          ],
          "answer": 1,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/10.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667 / -0,9",
            "0,6667 / -1",
            "0,7667 / -1"
          ],
          "answer": 2,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/12.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667 / -1",
            "0,7667 / -1",
            "0,6667 / -0,9"
          ],
          "answer": 1,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        }
      ]
    },
    {
      "nombre": "¿Qué derivada tiene el mapa en ese punto fijo?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/9.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1",
            "0",
            "-2"
          ],
          "answer": 1,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/11.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0",
            "-2",
            "-1"
          ],
          "answer": 3,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/10.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1 / 0,27",
            "0 / 0,27",
            "-1 / 1,27"
          ],
          "answer": 1,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,27."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/12.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0 / 0,2292",
            "-1 / 1,2292",
            "-1 / 0,2292"
          ],
          "answer": 3,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,2292."
        }
      ]
    },
    {
      "nombre": "¿Qué u iguala el beneficio marginal al coste de oportunidad?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 52. Su beneficio inmediato es 26u − u²/2 y cada unidad extraída reduce en 13 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "11",
            "13",
            "15"
          ],
          "answer": 2,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 13."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 60. Su beneficio inmediato es 30u − u²/2 y cada unidad extraída reduce en 15 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "15",
            "17",
            "13"
          ],
          "answer": 1,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 15."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 56. Su beneficio inmediato es 28u − u²/2 y cada unidad extraída reduce en 14 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "14 / 30",
            "14 / 28",
            "16 / 28"
          ],
          "answer": 2,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 14. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 28."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 64. Su beneficio inmediato es 32u − u²/2 y cada unidad extraída reduce en 16 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "16 / 32",
            "18 / 32",
            "16 / 34"
          ],
          "answer": 1,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 16. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 32."
        }
      ]
    },
    {
      "nombre": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 52. Su beneficio inmediato es 26u − u²/2 y cada unidad extraída reduce en 13 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "26",
            "30",
            "22"
          ],
          "answer": 1,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 26."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 60. Su beneficio inmediato es 30u − u²/2 y cada unidad extraída reduce en 15 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "35",
            "25",
            "30"
          ],
          "answer": 3,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 30."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 56. Su beneficio inmediato es 28u − u²/2 y cada unidad extraída reduce en 14 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "28 / 98",
            "32 / 98",
            "28 / 102"
          ],
          "answer": 1,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 28. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 98."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 64. Su beneficio inmediato es 32u − u²/2 y cada unidad extraída reduce en 16 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "37 / 128",
            "32 / 133",
            "32 / 128"
          ],
          "answer": 3,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 32. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 128."
        }
      ]
    },
    {
      "nombre": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 52. Su beneficio inmediato es 26u − u²/2 y cada unidad extraída reduce en 13 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "97,175",
            "71,825",
            "84,5"
          ],
          "answer": 3,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 84,5."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 60. Su beneficio inmediato es 30u − u²/2 y cada unidad extraída reduce en 15 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "95,625",
            "112,5",
            "129,375"
          ],
          "answer": 2,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 112,5."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 56. Su beneficio inmediato es 28u − u²/2 y cada unidad extraída reduce en 14 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "113 / 14",
            "98 / 29",
            "98 / 14"
          ],
          "answer": 3,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 98. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 14."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 64. Su beneficio inmediato es 32u − u²/2 y cada unidad extraída reduce en 16 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "128 / 35",
            "128 / 16",
            "147 / 16"
          ],
          "answer": 2,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 128. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 16."
        }
      ]
    },
    {
      "nombre": "¿Qué estado predice la siguiente iteración?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/17.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1661",
            "0,2161",
            "0,1161"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1661."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/19.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1996",
            "0,0996",
            "0,1496"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1496."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/18.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1574 / 0,6667",
            "0,2074 / 0,6667",
            "0,1574 / 0,7167"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1574. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/20.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1925 / 0,6667",
            "0,1425 / 0,7167",
            "0,1425 / 0,6667"
          ],
          "answer": 3,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1425. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        }
      ]
    },
    {
      "nombre": "¿Qué punto fijo positivo tiene el mapa?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/17.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7667",
            "0,5667",
            "0,6667"
          ],
          "answer": 3,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/19.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,5667",
            "0,6667",
            "0,7667"
          ],
          "answer": 2,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/18.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7667 / -1",
            "0,6667 / -0,9",
            "0,6667 / -1"
          ],
          "answer": 3,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/20.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667 / -0,9",
            "0,6667 / -1",
            "0,7667 / -1"
          ],
          "answer": 2,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        }
      ]
    },
    {
      "nombre": "¿Qué derivada tiene el mapa en ese punto fijo?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/17.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-1",
            "0"
          ],
          "answer": 2,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/19.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1",
            "0",
            "-2"
          ],
          "answer": 1,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/18.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1 / 1,1574",
            "-1 / 0,1574",
            "0 / 0,1574"
          ],
          "answer": 2,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,1574."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/20.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1 / 0,1425",
            "0 / 0,1425",
            "-1 / 1,1425"
          ],
          "answer": 1,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,1425."
        }
      ]
    },
    {
      "nombre": "¿Qué u iguala el beneficio marginal al coste de oportunidad?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 84. Su beneficio inmediato es 42u − u²/2 y cada unidad extraída reduce en 21 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "24",
            "18",
            "21"
          ],
          "answer": 3,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 21."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 92. Su beneficio inmediato es 46u − u²/2 y cada unidad extraída reduce en 23 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Redondea a cuatro decimales si es necesario.",
          "options": [
            "20",
            "23",
            "26"
          ],
          "answer": 2,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 23."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 88. Su beneficio inmediato es 44u − u²/2 y cada unidad extraída reduce en 22 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "25 / 44",
            "22 / 47",
            "22 / 44"
          ],
          "answer": 3,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 22. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 44."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 96. Su beneficio inmediato es 48u − u²/2 y cada unidad extraída reduce en 24 el valor futuro del stock.",
          "prompt": "¿Qué u iguala el beneficio marginal al coste de oportunidad? Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "24 / 52",
            "24 / 48",
            "28 / 48"
          ],
          "answer": 2,
          "hint": "Iguala 2n−u al valor marginal futuro n.",
          "explanation": "Iguala 2n−u al valor marginal futuro n. Resultado: 24. Iguala a cero la derivada del beneficio inmediato. Segundo resultado: 48."
        }
      ]
    },
    {
      "nombre": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 84. Su beneficio inmediato es 42u − u²/2 y cada unidad extraída reduce en 21 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "36",
            "42",
            "48"
          ],
          "answer": 2,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 42."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 92. Su beneficio inmediato es 46u − u²/2 y cada unidad extraída reduce en 23 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? Redondea a cuatro decimales si es necesario.",
          "options": [
            "46",
            "53",
            "39"
          ],
          "answer": 1,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 46."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 88. Su beneficio inmediato es 44u − u²/2 y cada unidad extraída reduce en 22 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "44 / 249",
            "44 / 242",
            "51 / 242"
          ],
          "answer": 2,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 44. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 242."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 96. Su beneficio inmediato es 48u − u²/2 y cada unidad extraída reduce en 24 el valor futuro del stock.",
          "prompt": "Si se ignora el futuro, ¿qué extracción maximiza el beneficio inmediato? ¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "48 / 288",
            "55 / 288",
            "48 / 295"
          ],
          "answer": 1,
          "hint": "Iguala a cero la derivada del beneficio inmediato.",
          "explanation": "Iguala a cero la derivada del beneficio inmediato. Resultado: 48. Sustituye el óptimo en beneficio menos coste futuro. Segundo resultado: 288."
        }
      ]
    },
    {
      "nombre": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico?",
      "facil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 84. Su beneficio inmediato es 42u − u²/2 y cada unidad extraída reduce en 21 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "220,5",
            "253,575",
            "187,425"
          ],
          "answer": 1,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 220,5."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 92. Su beneficio inmediato es 46u − u²/2 y cada unidad extraída reduce en 23 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? Redondea a cuatro decimales si es necesario.",
          "options": [
            "304,175",
            "224,825",
            "264,5"
          ],
          "answer": 3,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 264,5."
        }
      ],
      "dificil": [
        {
          "story": "Una empresa elige extracción u entre 0 y 88. Su beneficio inmediato es 44u − u²/2 y cada unidad extraída reduce en 22 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "242 / 22",
            "278 / 22",
            "242 / 58"
          ],
          "answer": 1,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 242. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 22."
        },
        {
          "story": "Una empresa elige extracción u entre 0 y 96. Su beneficio inmediato es 48u − u²/2 y cada unidad extraída reduce en 24 el valor futuro del stock.",
          "prompt": "¿Qué beneficio neto, descontado el valor del stock consumido, da el óptimo dinámico? ¿Qué u iguala el beneficio marginal al coste de oportunidad? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "331 / 24",
            "288 / 67",
            "288 / 24"
          ],
          "answer": 3,
          "hint": "Sustituye el óptimo en beneficio menos coste futuro.",
          "explanation": "Sustituye el óptimo en beneficio menos coste futuro. Resultado: 288. Iguala 2n−u al valor marginal futuro n. Segundo resultado: 24."
        }
      ]
    },
    {
      "nombre": "¿Qué estado predice la siguiente iteración?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/25.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,0652",
            "0,1152",
            "0,1652"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1152."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/27.",
          "prompt": "¿Qué estado predice la siguiente iteración? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,107",
            "0,157",
            "0,057"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,107."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/26.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1109 / 0,7167",
            "0,1109 / 0,6667",
            "0,1609 / 0,6667"
          ],
          "answer": 2,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1109. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/28.",
          "prompt": "¿Qué estado predice la siguiente iteración? ¿Qué punto fijo positivo tiene el mapa? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,1033 / 0,6667",
            "0,1533 / 0,6667",
            "0,1033 / 0,7167"
          ],
          "answer": 1,
          "hint": "Sustituye el estado inicial en el mapa.",
          "explanation": "Sustituye el estado inicial en el mapa. Resultado: 0,1033. Resuelve x = 3x(1−x) para x distinto de cero. Segundo resultado: 0,6667."
        }
      ]
    },
    {
      "nombre": "¿Qué punto fijo positivo tiene el mapa?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/25.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667",
            "0,7667",
            "0,5667"
          ],
          "answer": 1,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/27.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7667",
            "0,5667",
            "0,6667"
          ],
          "answer": 3,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/26.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,6667 / -1",
            "0,7667 / -1",
            "0,6667 / -0,9"
          ],
          "answer": 1,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/28.",
          "prompt": "¿Qué punto fijo positivo tiene el mapa? ¿Qué derivada tiene el mapa en ese punto fijo? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0,7667 / -1",
            "0,6667 / -0,9",
            "0,6667 / -1"
          ],
          "answer": 3,
          "hint": "Resuelve x = 3x(1−x) para x distinto de cero.",
          "explanation": "Resuelve x = 3x(1−x) para x distinto de cero. Resultado: 0,6667. Evalúa 3−6x en el punto fijo. Segundo resultado: -1."
        }
      ]
    },
    {
      "nombre": "¿Qué derivada tiene el mapa en ese punto fijo?",
      "facil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/25.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "0",
            "-2",
            "-1"
          ],
          "answer": 3,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/27.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? Redondea a cuatro decimales si es necesario.",
          "options": [
            "-2",
            "-1",
            "0"
          ],
          "answer": 2,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1."
        }
      ],
      "dificil": [
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/26.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "0 / 0,1109",
            "-1 / 1,1109",
            "-1 / 0,1109"
          ],
          "answer": 3,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,1109."
        },
        {
          "story": "Una simulación de capacidad comercial usa x(t+1)=r x(t)(1−x(t)), con r=3 y estado inicial x=1/28.",
          "prompt": "¿Qué derivada tiene el mapa en ese punto fijo? ¿Qué estado predice la siguiente iteración? Elige ambos resultados en ese orden. Redondea a cuatro decimales si es necesario.",
          "options": [
            "-1 / 1,1033",
            "-1 / 0,1033",
            "0 / 0,1033"
          ],
          "answer": 2,
          "hint": "Evalúa 3−6x en el punto fijo.",
          "explanation": "Evalúa 3−6x en el punto fijo. Resultado: -1. Sustituye el estado inicial en el mapa. Segundo resultado: 0,1033."
        }
      ]
    }
  ]
}
];

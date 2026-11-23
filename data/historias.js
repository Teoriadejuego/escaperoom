// Cada relato tiene seis paradas y tres objetos por parada. Las imágenes se resuelven desde assets/.
window.HISTORIAS_EXTRA = [
  {
    "nombre": "La última travesía",
    "palabra": "ESTELA",
    "paradas": [
      {
        "place": "Muelle de la Sal",
        "title": "El manifiesto incompleto",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/salt.svg",
        "time": "11:10",
        "intro": "Un barco de visitantes zarpa esta tarde. El manifiesto que necesita la capitana se ha repartido entre seis oficinas del puerto. Reúne las tres primeras anotaciones para seguir el rastro de la mensajera.",
        "next_text": "Una marca de hierro en el margen señala el puente de Triana.",
        "objetos": [
          "El manifiesto",
          "La amarra",
          "El sello"
        ]
      },
      {
        "place": "Puente de Triana",
        "title": "Una silueta de hierro",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/bridge.svg",
        "time": "11:40",
        "intro": "Bajo el arco, una barquera recuerda haber entregado un sobre a un vendedor. Anotó su puesto en el reverso de tres billetes.",
        "next_text": "Los billetes llevan el número de un puesto del mercado de Triana.",
        "objetos": [
          "El billete",
          "El remache",
          "El sobre"
        ]
      },
      {
        "place": "Mercado de Triana",
        "title": "La cuenta del puesto",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/market.svg",
        "time": "12:10",
        "intro": "Un vendedor envolvió por error una hoja del manifiesto con su pedido. Busca en las cajas, recompón la cuenta y descubre quién recogió el paquete.",
        "next_text": "En la caja vacía hay un azulejo firmado en la calle Alfarería.",
        "objetos": [
          "La balanza",
          "La caja",
          "El recibo"
        ]
      },
      {
        "place": "Calle Alfarería",
        "title": "La marca de la vasija",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/kiln.svg",
        "time": "12:40",
        "intro": "La alfarera ha guardado la hoja para que no se manche de barro. A cambio te pide ayuda para ordenar los documentos que viajarán con su mercancía.",
        "next_text": "Un dibujo de las chimeneas de la Cartuja identifica el almacén de destino.",
        "objetos": [
          "La vasija",
          "El torno",
          "El albarán"
        ]
      },
      {
        "place": "Monasterio de la Cartuja",
        "title": "El cajón de embarque",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/cartuja.svg",
        "time": "13:10",
        "intro": "En el patio del antiguo conjunto fabril encuentras el cajón azul del envío. Sus papeles permiten reconstruir la última escala del barco.",
        "next_text": "La etiqueta del flete dice «Muelle de las Delicias». La capitana sigue allí.",
        "objetos": [
          "El cajón",
          "La etiqueta",
          "El precinto"
        ]
      },
      {
        "place": "Muelle de las Delicias",
        "title": "La última firma",
        "subtitle": "Ruta de la capitana",
        "image": "relatos/boat.svg",
        "time": "13:40",
        "intro": "La capitana espera junto a la pasarela. Ordena las últimas tres anotaciones y reúne los sellos del recorrido para completar el manifiesto antes de zarpar.",
        "next_text": "El manifiesto queda firmado. El barco puede iniciar su travesía.",
        "objetos": [
          "La bitácora",
          "La brújula",
          "La pasarela"
        ]
      }
    ]
  },
  {
    "nombre": "La función de medianoche",
    "palabra": "TELON",
    "paradas": [
      {
        "place": "Alameda de Hércules",
        "title": "El libreto extraviado",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/columns.svg",
        "time": "18:10",
        "intro": "Una compañía prepara una función para visitantes. Al caer la tarde descubre que faltan seis hojas del libreto. En la Alameda, la regidora te presta su carpeta de ensayos.",
        "next_text": "Una máscara dibujada al margen te lleva al Teatro Alameda.",
        "objetos": [
          "La carpeta",
          "El cartel",
          "El atril"
        ]
      },
      {
        "place": "Teatro Alameda",
        "title": "El ensayo interrumpido",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/theatre.svg",
        "time": "18:40",
        "intro": "Tras el ensayo, la utilera encuentra un programa con tres marcas. Reconstruye el itinerario de la mochila que llevaba el libreto.",
        "next_text": "El programa anuncia una visita al mercado de la calle Feria.",
        "objetos": [
          "El programa",
          "La máscara",
          "La mochila"
        ]
      },
      {
        "place": "Mercado de Feria",
        "title": "La lista de atrezo",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/stalls.svg",
        "time": "19:10",
        "intro": "La compañía encargó utilería en varios puestos. Una hoja del libreto sirvió de envoltorio. Identifica el pedido entre las tres piezas de atrezo.",
        "next_text": "Al pie del pedido aparece una cita en la plaza de San Marcos.",
        "objetos": [
          "El farol",
          "La cesta",
          "El pedido"
        ]
      },
      {
        "place": "Plaza de San Marcos",
        "title": "Las campanadas",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/tower.svg",
        "time": "19:40",
        "intro": "La técnica de sonido grabó las campanas para la escena final. Junto a su equipo aparece otra hoja, dividida en tres fragmentos que debes ordenar.",
        "next_text": "El plano de sonido señala la siguiente grabación en la plaza de la Encarnación.",
        "objetos": [
          "La grabadora",
          "El plano",
          "El reloj"
        ]
      },
      {
        "place": "Plaza de la Encarnación",
        "title": "Sombras sobre la plaza",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/setas.svg",
        "time": "20:10",
        "intro": "La escenógrafa ha usado la hoja perdida para esbozar las sombras de la cubierta. Recupera las tres notas que explican cómo montar el decorado.",
        "next_text": "Una indicación de tramoya manda llevar los bocetos al Teatro Lope de Vega.",
        "objetos": [
          "El boceto",
          "La maqueta",
          "El foco"
        ]
      },
      {
        "place": "Teatro Lope de Vega",
        "title": "Que suba el telón",
        "subtitle": "Ruta de la compañía",
        "image": "relatos/dome.svg",
        "time": "20:40",
        "intro": "Ya se oyen pasos en el vestíbulo. La regidora tiene las páginas, pero le falta el orden de las entradas. Resuelve los tres expedientes y entrega el libreto a la compañía.",
        "next_text": "Las hojas vuelven al atril y la función puede comenzar.",
        "objetos": [
          "La batuta",
          "La bambalina",
          "El libreto"
        ]
      }
    ]
  }
];

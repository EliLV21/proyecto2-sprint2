var datos = {
  tituloSeccion : document.getElementById("nuevaLista");
  puntosTitulo  : document.getElementById("titulo");
  puntosSeccion : document.getElementById("listaCreada");
};

function agregarSeccion(){
  //var nuevaFila = document.createElement("tr");
  var nuevaSeccion = document.createElement("section");
  //var elemento = document.createTextNode(elementosLista);
  var elementoSeccion = datos;
  var agregado = document.createTextNode(elementoSeccion);

  nuevaSeccion.appendChild(agregado);

  //nuevaFila.appendChild(elemento);
  //document.getElementById("titulo").appendChild(nuevaFila)
};

function agregarTitulo(){
    //var numeroElementos = prompt("");
    var nuevaLista = document.createElement("h3");
    var elementosLista = document.getElementById("nombreTitulo").value;
    var elemento = document.createTextNode(elementosLista);

    nuevaLista.appendChild(elemento);
    document.getElementById("titulo").appendChild(nuevaLista)
  };

function agregarElementos(){
    //var numeroElementos = prompt("");
    var nuevaLista = document.createElement("li");
    var elementosLista = document.getElementById("lista").value;
    var elemento = document.createTextNode(elementosLista);

    nuevaLista.appendChild(elemento);
    document.getElementById("listaCreada").appendChild(nuevaLista)
  };

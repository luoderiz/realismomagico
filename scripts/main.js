var sugerenciasList = document.getElementById('sugerenciasList');
var unListItem = document.createElement('li');
var textoDeSugerencia = document.createTextNode('Primera Sugerencia');
sugerenciasList.appendChild(unListItem);
unListItem.appendChild(textoDeSugerencia);

let sugerenciasListElements = ["Birdman (2014)", "El secreto de Adeline (2015)", "Diario de un maquinista (2016)", "Zoology (2016)", "Birdman (2014)"];

function cargarLista() {
  for (let elemento of sugerenciasListElements) {
    var sugerenciasList = document.getElementById('sugerenciasList');
    var itemDeLista = document.createElement('li');
    var textoDelItem = document.createTextNode('elemento');
    itemDeLista.innerHTML = elemento;
    sugerenciasList.appendChild(itemDeLista);
    itemDeLista.appendChild(textoDelItem);
}
}

cargarLista();

var sugerenciasButton = document.getElementById('sugerenciasButton');

sugerenciasButton.onclick = function funcionSugerencia() {
  var input = document.getElementById('sugerenciasBox');
  var sugerenciasList = document.getElementById('sugerenciasList');
  var sugerenciaListItem = document.createElement('li');
  if (input.value === '') {
    alert('¡No escribiste ninguna sugerencia!');
  } else if (!sugerenciaExiste(input)) {
    var textoDelItem = document.createTextNode(input.value);
    sugerenciaListItem.appendChild(textoDelItem);
    sugerenciasList.appendChild(sugerenciaListItem);
    sugerenciasListElements.push(input.value);
  } else {
    alert('¡Gracias por la sugerencia! Igual, ¡la próxima vez podrías ser más atento! Esto ya está en la lista');
  }
  return;
}

function sugerenciaExiste(input){
  for (let element of sugerenciasListElements) { 
    if (input.value === element) {
      return true;}
    }
  return false;
  }
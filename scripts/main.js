let myImage = document.querySelector('#portada');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/map-earth.png') {
    myImage.setAttribute('src','images/peony-flowers.png');
  } else {
    myImage.setAttribute('src','images/map-earth.png');
  }
}

//personalized greeting
/* let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Inserte su nombre, atento lector');
  if(!myName) {
    setUserName();
  } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Es nuestra cultura, ' + myName;  
  };
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Es nuestra cultura, ' + storedName;
}

nameChanger.onclick = function() {
  setUserName();
}
 */

//dinamic list

const newList = document.querySelector('#listaDenuncias');
newList.id='listaDenuncias'
const info = document.createElement('p');
info.id='itemDenuncia'

let denButton = document.querySelector('#denButton');

info.textContent = 'Arte con referencias al realismo mágico';
document.body.appendChild(info);
document.body.appendChild(newList);

function insertDenuncia() {
  const listItem = document.createElement('li');
  const listContent = prompt('Escribí acá la manifestación artística que te gustaría que incorporemos al recorrido del proyecto');
  listItem.textContent = listContent;
  for (let item of newList.childNodes) { 
  if (listItem.textContent === item.textContent) {
    alert('¡Gracias por la sugerencia! Igual, ¡la próxima vez podrías ser más atento! Esto ya está en la lista');
    return
    }
  }
  newList.appendChild(listItem);
}

denButton.onclick = function() {
  insertDenuncia();
}
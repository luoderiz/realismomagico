let myImage = document.querySelector('img');
//image changer
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/map-earth.png') {
    myImage.setAttribute('src','images/peony-flowers.png');
  } else {
    myImage.setAttribute('src','images/map-earth.png');
  }
}

//personalized greeting
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

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

myButton.onclick = function() {
  setUserName();
}

//dinamic list
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);
  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
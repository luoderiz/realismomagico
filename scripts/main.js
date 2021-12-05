let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/map-earth.png');{
      myImage.setAttribute('src','images/peony-flowers.png');
    } else {
      myImage.setAttribute('src','images/map-earth.png');
    }
}


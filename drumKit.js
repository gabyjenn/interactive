var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var clap = new Audio("sounds/angry.wav");
      clap.play();
      break;

    case "a":
      var hihat = new Audio("sounds/hungry.wav");
      hihat.play();
      break;

    case "s":
      var boom = new Audio('sounds/attention.wav');
      boom.play();
      break;

    case "d":
      var snare = new Audio('sounds/sweet.wav');
      snare.play();
      break;

    case "f":
      var openhat = new Audio('sounds/openhat.wav');
      openhat.play();
      break;

    case "g":
      var ride = new Audio('sounds/ride.wav');
      ride.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick.wav');
      kick.play();
      break;

    case "k":
      var tink = new Audio('sounds/tink.wav');
      tink.play();
      break;

    case "l":
      var tom = new Audio('sounds/tom.wav');
      tom.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}


function fetchCatImage() {
  let image = document.getElementById("cat-image")
  fetch('https://api.thecatapi.com/v1/images/search?api_key=live_D2SYXrLvFwhsxaT4IhTTkhjLJPsUEtsPNtLypBg4Wdj1v6T7VgawRj7AwF2JFLgs', {
    headers: {
      'x-api-key' : 'live_D2SYXrLvFwhsxaT4IhTTkhjLJPsUEtsPNtLypBg4Wdj1v6T7VgawRj7AwF2JFLgs'
    }
  })
  .then(resp => resp.json())
  .then(json => image.src = json[0].url)
}

function btnClick(){
  let button = document.getElementById("new-cat-btn")
  button.addEventListener("click", fetchCatImage)
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCatImage()
  btnClick()
})
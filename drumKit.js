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
      var clap = new Audio("sounds/clap.wav");
      tom1.play();
      break;

    case "a":
      var hihat = new Audio("sounds/hihat.wav");
      tom2.play();
      break;

    case "s":
      var boom = new Audio('sounds/boom.wav');
      tom3.play();
      break;

    case "d":
      var snare = new Audio('sounds/snare.wav');
      tom4.play();
      break;

    case "f":
      var openhat = new Audio('sounds/openhat.wav');
      tom4.play();
      break;

    case "g":
      var ride = new Audio('sounds/ride.wav');
      tom4.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick.wav');
      snare.play();
      break;

    case "k":
      var tink = new Audio('sounds/tink.wav');
      crash.play();
      break;

    case "l":
      var tom = new Audio('sounds/tom.wav');
      kick.play();
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
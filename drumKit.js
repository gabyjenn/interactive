var numberOfButtons = 
    document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  
document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});
  
function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("sounds/clap.wav");
      sound1.play();
      break;
  
    case "a":
      var sound2 = new Audio("music/hihat.wav");
      sound2.play();
      break;
  
    case "s":
      var sound3 = new Audio('music/snare.wav');
      sound3.play();
      break;
  
    case "d":
      var sound4 = new Audio('music/kick.wav');
      sound4.play();
      break;
  
    case "j":
      var sound5 = new Audio('music/boom.wav');
      sound5.play();
      break;
  
    case "k":
      var sound6 = new Audio('music/tink.wav');
      sound6.play();
      break;
  
    case "l":
      var sound7 = new Audio('music/tom.wav');
      sound7.play();
      break;
  
    default: console.log(key);
  }
}
  
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);
}
var numberOfDrumButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".button")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function (event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {

    case "1":
      var _29 = new Audio("../sounds/piano/29.mp3");
      _29.play();
      break;

    case "2":
      var _31 = new Audio("../sounds/piano/31.mp3");
      _31.play();
      break;

    case "3":
      var _34 = new Audio('../sounds/piano/34.mp3');
      _34.play();
      break;

    case "4":
      var _36 = new Audio('../sounds/piano/36.mp3');
      _36.play();
      break;

    case "5":
      var _38 = new Audio('../sounds/piano/38.mp3');
      _38.play();
      break;

    case "6":
      var _41 = new Audio('../sounds/piano/41.mp3');
      _41.play();
      break;

    case "7":
      var _43 = new Audio('../sounds/piano/43.mp3');
      _43.play();
      break;

    case "8":
      var _46 = new Audio('../sounds/piano/46.mp3');
      _46.play();
      break;

    case "9":
      var _48 = new Audio('../sounds/piano/48.mp3');
      _48.play();
      break;

    case "0":
      var _50 = new Audio('../sounds/piano/50.mp3');
      _50.play();
      break;

    case "q":
      var _53 = new Audio('../sounds/piano/53.mp3');
      _53.play();
      break;

    case "w":
      var _55 = new Audio('../sounds/piano/55.mp3');
      _55.play();
      break;

    case "e":
      var _58 = new Audio('../sounds/piano/58.mp3');
      _58.play();
      break;

    case "r":
      var _60 = new Audio('../sounds/piano/60.mp3');
      _60.play();
      break;

    case "t":
      var _62 = new Audio('../sounds/piano/62.mp3');
      _62.play();
      break;

    case "a":
      var _28 = new Audio('../sounds/piano/28.mp3');
      _28.play();
      break;

    case "s":
      var _30 = new Audio('../sounds/piano/30.mp3');
      _30.play();
      break;

      
    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}

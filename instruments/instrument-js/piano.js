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

    case "d":
      var _32 = new Audio('../sounds/piano/32.mp3');
      _32.play();
      break;

    case "f":
      var _33 = new Audio('../sounds/piano/33.mp3');
      _33.play();
      break;

    case "g":
      var _35 = new Audio('../sounds/piano/35.mp3');
      _35.play();
      break;

    case "h":
      var _37 = new Audio('../sounds/piano/37.mp3');
      _37.play();
      break;
      
    case "j":
      var _39 = new Audio('../sounds/piano/39.mp3');
      _39.play();
      break;

    case "k":
      var _40 = new Audio('../sounds/piano/40.mp3');
      _40.play();
      break;

    case "l":
      var _42 = new Audio('../sounds/piano/42.mp3');
      _42.play();
      break;

    case ";":
      var _44 = new Audio('../sounds/piano/44.mp3');
      _44.play();
      break;

    case "'":
      var _45 = new Audio('../sounds/piano/45.mp3');
      _45.play();
      break;
      
    case "z":
      var _47 = new Audio('../sounds/piano/47.mp3');
      _47.play();
      break;

    case "x":
      var _49 = new Audio('../sounds/piano/49.mp3');
      _49.play();
      break;

    case "c":
      var _51 = new Audio('../sounds/piano/51.mp3');
      _51.play();
      break;

    case "v":
      var _52 = new Audio('../sounds/piano/52.mp3');
      _52.play();
      break;

    case "b":
      var _54 = new Audio('../sounds/piano/54.mp3');
      _54.play();
      break;

    case "n":
      var _56 = new Audio('../sounds/piano/56.mp3');
      _56.play();
      break;

    case "m":
      var _57 = new Audio('../sounds/piano/57.mp3');
      _57.play();
      break;

    case ",":
      var _59 = new Audio('../sounds/piano/59.mp3');
      _59.play();
      break;

    case ".":
      var _61 = new Audio('../sounds/piano/61.mp3');
      _61.play();
      break;

    case "/":
      var _63 = new Audio('../sounds/piano/63.mp3');
      _63.play();
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

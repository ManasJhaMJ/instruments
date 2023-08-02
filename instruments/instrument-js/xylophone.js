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

    case "q":
      var c3 = new Audio("../sounds/xylophone/C3.mp3");
      c3.play();
      break;

    case "w":
      var d3 = new Audio("../sounds/xylophone/D3.mp3");
      d3.play();
      break;

    case "e":
      var e3 = new Audio('../sounds/xylophone/E3.mp3');
      e3.play();
      break;

    case "r":
      var f3 = new Audio('../sounds/xylophone/F3.mp3');
      f3.play();
      break;

    case "t":
      var g3 = new Audio('../sounds/xylophone/G3.mp3');
      g3.play();
      break;

    case "y":
      var a4 = new Audio('../sounds/xylophone/A4.mp3');
      a4.play();
      break;

    case "u":
      var b4 = new Audio('../sounds/xylophone/B4.mp3');
      b4.play();
      break;

    case "a":
      var c4 = new Audio('../sounds/xylophone/C4.mp3');
      c4.play();
      break;

    case "s":
      var d4 = new Audio('../sounds/xylophone/D4.mp3');
      d4.play();
      break;

    case "d":
      var e4 = new Audio('../sounds/xylophone/E4.mp3');
      e4.play();
      break;

    case "f":
      var f4 = new Audio('../sounds/xylophone/F4.mp3');
      f4.play();
      break;

    case "g":
      var g4 = new Audio('../sounds/xylophone/G4.mp3');
      g4.play();
      break;

    case "h":
      var a5 = new Audio('../sounds/xylophone/A5.mp3');
      a5.play();
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

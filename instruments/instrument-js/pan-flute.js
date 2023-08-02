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
      var Sound1 = new Audio("../sounds/pan-flute/sound1.mp3");
      Sound1.play();
      break;

    case "w":
      var Sound2 = new Audio("../sounds/pan-flute/sound2.mp3");
      Sound2.play();
      break;

    case "e":
      var Sound3 = new Audio('../sounds/pan-flute/sound3.mp3');
      Sound3.play();
      break;

    case "r":
      var Sound4 = new Audio('../sounds/pan-flute/sound4.mp3');
      Sound4.play();
      break;

    case "t":
      var Sound5 = new Audio('../sounds/pan-flute/sound5.mp3');
      Sound5.play();
      break;

    case "y":
      var Sound6 = new Audio('../sounds/pan-flute/sound6.mp3');
      Sound6.play();
      break;

    case "u":
      var Sound7 = new Audio('../sounds/pan-flute/sound7.mp3');
      Sound7.play();
      break;

    case "i":
      var Sound8 = new Audio('../sounds/pan-flute/sound8.mp3');
      Sound8.play();
      break;

    case "a":
      var Sound9 = new Audio('../sounds/pan-flute/sound9.mp3');
      Sound9.play();
      break;

    case "s":
      var Sound10 = new Audio('../sounds/pan-flute/sound10.mp3');
      Sound10.play();
      break;

    case "d":
      var Sound11 = new Audio('../sounds/pan-flute/sound11.mp3');
      Sound11.play();
      break;

    case "f":
      var Sound12 = new Audio('../sounds/pan-flute/sound12.mp3');
      Sound12.play();
      break;

    case "g":
      var Sound13 = new Audio('../sounds/pan-flute/sound13.mp3');
      Sound13.play();
      break;

    case "h":
      var Sound14 = new Audio('../sounds/pan-flute/sound14.mp3');
      Sound14.play();
      break;

    case "j":
      var Sound15 = new Audio('../sounds/pan-flute/sound15.mp3');
      Sound15.play();
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

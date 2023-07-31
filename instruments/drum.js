var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

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

    case "y":
      var crash = new Audio("../sounds/drum/crash.mp3");
      crash.play();
      break;

    case "u":
      var ride = new Audio("../sounds/drum/ride.mp3");
      ride.play();
      break;

    case "x":
      var bass = new Audio('../sounds/drum/bass.mp3');
      bass.play();
      break;

    case "e":
      var hihatopen = new Audio('../sounds/drum/hihat-open.mp3');
      hihatopen.play();
      break;

    case "r":
      var hihat = new Audio('../sounds/drum/hihat.mp3');
      hihat.play();
      break;

    case "c":
      var hihatfoot = new Audio('../sounds/drum/hihat-foot.mp3');
      hihatfoot.play();
      break;

    case "g":
      var tom1 = new Audio('../sounds/drum/tom1.mp3');
      tom1.play();
      break;

    case "h":
      var tom2 = new Audio('../sounds/drum/tom2.mp3');
      tom2.play();
      break;

    case "j":
      var floortom = new Audio('../sounds/drum/floor-tom.mp3');
      floortom.play();
      break;

    case "s":
      var snaredrum = new Audio('../sounds/drum/share-drum.mp3');
      snaredrum.play();
      break;

    case "d":
      var snarestick = new Audio('../sounds/drum/share-stick.mp3');
      snarestick.play();
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

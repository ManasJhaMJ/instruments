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

    case "e":
      var crash = new Audio("../sounds/guitar/1st-string.mp3");
      crash.play();
      break;

    case "b":
      var ride = new Audio("../sounds/guitar/2nd-string.mp3");
      ride.play();
      break;

    case "g":
      var bass = new Audio('../sounds/guitar/3rd-string.mp3');
      bass.play();
      break;

    case "d":
      var hihatopen = new Audio('../sounds/guitar/4th-string.mp3');
      hihatopen.play();
      break;

    case "a":
      var hihat = new Audio('../sounds/guitar/5th-string.mp3');
      hihat.play();
      break;

    case "s":
      var hihatfoot = new Audio('../sounds/guitar/6th-string.mp3');
      hihatfoot.play();
      break;

    case "1":
      var tom1 = new Audio('../sounds/guitar/c chord.mp3');
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio('../sounds/guitar/d chord.mp3');
      tom2.play();
      break;

    case "3":
      var floortom = new Audio('../sounds/guitar/dm chord.mp3');
      floortom.play();
      break;

    case "4":
      var snaredrum = new Audio('../sounds/guitar/e chord.mp3');
      snaredrum.play();
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

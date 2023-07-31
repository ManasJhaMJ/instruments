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
      var first = new Audio("../sounds/guitar/1st-string.mp3");
      first.play();
      break;

    case "b":
      var second = new Audio("../sounds/guitar/2nd-string.mp3");
      second.play();
      break;

    case "g":
      var third = new Audio('../sounds/guitar/3rd-string.mp3');
      third.play();
      break;

    case "d":
      var fourth = new Audio('../sounds/guitar/4th-string.mp3');
      fourth.play();
      break;

    case "a":
      var fifth = new Audio('../sounds/guitar/5th-string.mp3');
      fifth.play();
      break;

    case "s":
      var sixth = new Audio('../sounds/guitar/6th-string.mp3');
      sixth.play();
      break;

    case "1":
      var cchord = new Audio('../sounds/guitar/c chord.mp3');
      cchord.play();
      break;

    case "2":
      var dchord = new Audio('../sounds/guitar/d chord.mp3');
      dchord.play();
      break;

    case "3":
      var dmchord = new Audio('../sounds/guitar/dm chord.mp3');
      dmchord.play();
      break;

    case "4":
      var echord = new Audio('../sounds/guitar/e chord.mp3');
      echord.play();
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

const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPickColorPattern = [];
let smena = null;
var round = 1;
document.querySelector(".main").addEventListener("click", function () {
  $("#level-title").text("Round" + " " + `${round}`);
  var randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);
  var i = 0;
  var smena = setInterval(() => {
    $(`#${gamePattern[i]}`).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70);
    var audio = new Audio(`C:/Users/user/Desktop/code/HTML/Simon Game Challenge Starting Files/sounds/` + `${gamePattern[i]}` + `.mp3`);
    audio.play();
    i++;
    if (i == gamePattern.length) {
      clearInterval(smena)
    }
  }, 500);
  round += 1;
  console.log(gamePattern);
})

document.querySelectorAll(".btn").forEach(event => {
  event.addEventListener("click", function () {
    var userChosenColour = this.id;
    var audio = new Audio(`C:/Users/user/Desktop/code/HTML/Simon Game Challenge Starting Files/sounds/` + `${userChosenColour}` + `.mp3`);
    audio.play();
    $(`.${userChosenColour}`).addClass("pressed");
    setTimeout(function () {
      $(`.${userChosenColour}`).removeClass("pressed");
    }, 70);
    playerPickColorPattern.push(userChosenColour);
    checkAnswer(playerPickColorPattern.length - 1);
    console.log(playerPickColorPattern);
  })
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === playerPickColorPattern[currentLevel]) {
    if (playerPickColorPattern.length === gamePattern.length) {
      playerPickColorPattern = [];
    }
  }
  else {
    var loss = new Audio("C:/Users/user/Desktop/code/HTML/Simon Game Challenge Starting Files/sounds/wrong.mp3");
    loss.play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    playerPickColorPattern = [];
    gamePattern = [];
    round = 1;
  }
}




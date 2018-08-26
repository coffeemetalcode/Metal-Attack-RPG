// Metal Attack Game

// set these variables to null for later manipulation
var characters;
var game;

// called at end of file to reset characters and gameplay
function begin() {
  characters = resetChar();
  game = resetGame();
  initChar();
}

// global variables
var playerHealth = 0;
var enemyHealth = 0;
var player;
var defender;

// Avatar Objects
var tomAraya = {
  id: tomAraya,
  name: "Tom Araya",
  health: 125,
  attack: 8,
  counterAttack: 13,
  playerSlide: "<img class='player-img available-player' src='assets/images/tom-araya.jpg'>",
  ringMusic: "assets/mp3/ring-araya.mp3"
}

var scottIan = {
  id: scottIan,
  name: "Scott Ian",
  health: 140,
  attack: 12,
  counterAttack: 10,
  playerSlide: "<img class='player-img available-player' src='assets/images/scott-ian.jpg'>",
  ringMusic: "assets/mp3/ring-ian.mp3"
}

var daveMustaine = {
  id: daveMustaine,
  name: "Dave Mustaine",
  health: 155,
  attack: 10,
  counterAttack: 10,
  playerSlide: "<img class='player-img available-player' src='assets/images/dave-mustaine.jpg'>",
  ringMusic: "assets/mp3/ring-mustaine.mp3"
}

var alexSkolnick = {
  id: alexSkolnick,
  name: "Alex Skolnick",
  health: 170,
  attack: 14,
  counterAttack: 9,
  playerSlide: "<img class='player-img available-player' src='assets/images/alex-skolnick.jpg'>",
  ringMusic: "assets/mp3/ring-skolnick.mp3"
}

// Push all players to .available-player area on doucment load
// This can probably be achieved with a loop
$(document).ready(function () {
  $("#board-message").html("Choose your Avatar");
  $("#player-1").html(tomAraya.playerSlide);
  $("#player-1-info").html(tomAraya.name + " - " + tomAraya.health);
  $("#player-2").html(scottIan.playerSlide);
  $("#player-2-info").html(scottIan.name + " - " + scottIan.health);
  $("#player-3").html(daveMustaine.playerSlide);
  $("#player-3-info").html(daveMustaine.name + " - " + daveMustaine.health);
  $("#player-4").html(alexSkolnick.playerSlide);
  $("#player-4-info").html(alexSkolnick.name + " - " + alexSkolnick.health);
})

// on click, choose your player
$(".available-player").on("click", function () {
  $("#board-message").html("Choose your Adversary");
  player = this;
  $(player).hide();
  $("#player-character").html();
  $("#player-character-info").html();
  console.log(this);
  // console.log("player selected");
})


  // move player out of top row and into bottom left position
  // cause the shred button to appear below player image

// on click, choose your first opponent

  // move oponent out of top row and into bottom left positon, below player

// on click, shred button calculates attack and counter attack results

// *loop

// if playerHealth <= 0

// { lose == true && game over }

// else if enemyHealth <= 0

// { on click chose next opponent }

// else

// { on click play again }

// console.log(alexSkolnick);


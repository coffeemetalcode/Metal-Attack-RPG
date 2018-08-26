// Metal Attack Game

// Declare global variables
var player;
var attack = 0;
var defender;
var counterAttack = 0;
var playerHealth = 0;
var defenderHealth = 0;
var playerIsDead = false; // this is unnecessary
var defenderIsDead = false; // this is also unnecessary
var numDefenders = 3;

// Avatar Objects
var tomAraya = {
  // id: tomAraya, // this seems like a bad idea
  name: "Tom Araya",
  health: 125,
  attack: 8,
  counterAttack: 13,
  playerSlide: "<img class='player-img available-player' src='assets/images/tom-araya.jpg'>",
  ringMusic: "assets/mp3/ring-araya.mp3" // hoping to add ring entrance clips
}

var scottIan = {
  // id: scottIan,
  name: "Scott Ian",
  health: 140,
  attack: 12,
  counterAttack: 10,
  playerSlide: "<img class='player-img available-player' src='assets/images/scott-ian.jpg'>",
  ringMusic: "assets/mp3/ring-ian.mp3"
}

var daveMustaine = {
  // id: daveMustaine,
  name: "Dave Mustaine",
  health: 155,
  attack: 10,
  counterAttack: 10,
  playerSlide: "<img class='player-img available-player' src='assets/images/dave-mustaine.jpg'>",
  ringMusic: "assets/mp3/ring-mustaine.mp3"
}

var alexSkolnick = {
  // id: alexSkolnick,
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

// having trouble getting the below to work. I'm coming up empty with a way to cause the on click to push the clicked object into a new variable (player or defender). proceeding below with game logic.

// // on click, choose your player
$(".available-player").on("click", function () {
  $("#board-message").html("Choose your Adversary");
  // player = this;
  // $(player).hide();
  // $("#player-character").html();
  // $("#player-character-info").html();
  // console.log(this);
  // console.log("player selected");
})

function result() {
  console.log("player: " + player.name + " attack: " + attack + " health: " + playerHealth);
  console.log("defender: " + defender.name + " attack: " + counterAttack + " health: " + defenderHealth);
}

function gamePlay() {

  // the on click event should trigger pushing selected players into the variables player and defender. For now, I'm playing around with it by changing the player and defender variables manually.
  player = scottIan;
  attack = player.attack;
  playerHealth = player.health;

  defender = daveMustaine;
  counterAttack = defender.counterAttack;
  defenderHealth = defender.health;


  for (i = 1; i < numDefenders; i++) {
    $("#attack-btn").on("click", function () {
      if (!(playerHealth < 1) || !(defenderHealth < 1)) {
        playerHealth = (playerHealth - counterAttack);
        defenderHealth = (defenderHealth - attack);
        attack = (attack + player.attack);
        result();
      }
      else if (playerHealth <= 0) {
        result();
        console.log(player.name + " died");
      }
      else if (defenderHealth <= 0) {
        result();
        console.log(defender.name + " died.");
        defender = alexSkolnick;
        console.log("new defender: " + defender.name);
        console.log(defender.name)
        console.log(defender.counterAttack);
      }
    })
  }
}

gamePlay();

// I really bit off a chunk here, going for the "challenge" assignment.
// I'm going to keep hacking away at it until it works. Right now it's
// somewhere between "oil burning jalopy" and "minimum viable product"

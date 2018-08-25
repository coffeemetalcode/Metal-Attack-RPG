// Metal Attack Game

// global variables
var playerHealth = 0;
var enemyHealth = 0;
var player;
var defender;

// Contestants Object...
var contestants = {
  // ...with Avatar Objects inside
  tomAraya: {
    name: "Tom Araya",
    health: 125,
    attack: 8,
    counterAttack: 13,
    playerSlide: "<img class='player-img available-player' src='assets/images/tom-araya.jpg'>"
    // nameHealth: { this.name + " " this.health }
  },
  scottIan: {
    name: "Scott Ian",
    health: 140,
    attack: 12,
    counterAttack: 10,
    playerSlide: "<img class='player-img available-player' src='assets/images/scott-ian.jpg'>"
  },
  daveMustaine: {
    name: "Dave Mustaine",
    health: 155,
    attack: 10,
    counterAttack: 10,
    playerSlide: "<img class='player-img available-player' src='assets/images/dave-mustaine.jpg'>"
  },
  alexSkolnick: {
    name: "Alex Skolnick",
    health: 170,
    attack: 14,
    counterAttack: 9,
    playerSlide: "<img class='player-img available-player' src='assets/images/alex-skolnick.jpg'>"
  }
}

// Push all players to .available-player area on doucment load
// This can probably be achieved with a loop
$(document).ready(function() {
  $("#board-message").html("Choose your Avatar");
  $("#player-1").html(contestants.tomAraya.playerSlide);
  $("#player-1-info").html(contestants.tomAraya.name + " - " + contestants.tomAraya.health);
  $("#player-2").html(contestants.scottIan.playerSlide);
  $("#player-2-info").html(contestants.scottIan.name + " - " + contestants.scottIan.health);
  $("#player-3").html(contestants.daveMustaine.playerSlide);
  $("#player-3-info").html(contestants.daveMustaine.name + " - " + contestants.daveMustaine.health);
  $("#player-4").html(contestants.alexSkolnick.playerSlide);
  $("#player-4-info").html(contestants.alexSkolnick.name + " - " + contestants.alexSkolnick.health);
})

// on click, choose your player
$(".available-player").on("click", function () {
  player = $(this);
  $(this).hide();
  $("#player-character").html(player.playerSlide);
  $("#player-character-info").html(player);
  console.log(player);
  $("#board-message").html("Choose your Aversary");
  console.log("player selected");
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


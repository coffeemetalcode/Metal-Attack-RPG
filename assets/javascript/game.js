// Metal Attack Game

// global variables
var playerHealth = 0;
var enemyHealth = 0;

// Avatar Objects
var tomAraya = {
  health: 125,
  attack: 8,
  counterAttack: 13,
  playerImg: "assets/images/tom-araya.jpg"
}
var scottIan = {
  health: 140,
  attack: 12,
  counterAttack: 10,
  playerImg: "assets/images/scott-ian.jpg"
}
var daveMustaine = {
  health: 155,
  attack: 10,
  counterAttack: 10,
  playerImg: "assets/images/dave-mustaine.jpg"
}
var alexSkolnick = {
  health: 170,
  attack: 14,
  counterAttack: 9,
  playerImg: "assets/images/alex-skolnick.jpg"
}

// on click, choose your player
$("#player-character").on("click", function () {
  console.log("player selected")
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


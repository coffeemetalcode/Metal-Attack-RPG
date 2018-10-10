// Execute this code when the DOM has fully loaded.
$(document).ready(function() {
  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters = {
    "Tom Araya": {
      name: "Tom Araya",
      health: 120,
      attack: 8,
      imageUrl: "assets/images/tom-araya.jpg",
      enemyAttackBack: 15,
      clips: [
        "assets/mp3/tom-araya/angel-of-death.mp3",
        "assets/mp3/tom-araya/criminally-insane.mp3",
        "assets/mp3/tom-araya/hallowed-point.mp3",
        "assets/mp3/tom-araya/postmortem.mp3",
        "assets/mp3/tom-araya/raining-blood.mp3"
      ]
    },
    "Scott Ian": {
      name: "Scott Ian",
      health: 100,
      attack: 14,
      imageUrl: "assets/images/scott-ian.jpg",
      enemyAttackBack: 5,
      clips: [
        "assets/mp3/scott-ian/medusa.mp3",
        "assets/mp3/scott-ian/be-all-end-all.mp3",
        "assets/mp3/scott-ian/caught-in-a-mosh.mp3",
        "assets/mp3/scott-ian/make-me-laugh.mp3"
      ]
    },
    "Alex Skolnick": {
      name: "Alex Skolnick",
      health: 150,
      attack: 8,
      imageUrl: "assets/images/alex-skolnick.jpg",
      enemyAttackBack: 20,
      clips: [
        "assets/mp3/alex-skolnick/time-is-coming.mp3",
        "assets/mp3/alex-skolnick/eerie-inhabitants.mp3",
        "assets/mp3/alex-skolnick/falling-fast.mp3",
        "assets/mp3/alex-skolnick/hypnosis.mp3",
        "assets/mp3/alex-skolnick/practice-preach.mp3"
      ]
    },
    "Dave Mustaine": {
      name: "Dave Mustaine",
      health: 180,
      attack: 7,
      imageUrl: "assets/images/dave-mustaine.jpg",
      enemyAttackBack: 25,
      clips: [
        "assets/mp3/dave-mustaine/holy-wars.mp3",
        "assets/mp3/dave-mustaine/five-magics.mp3",
        "assets/mp3/dave-mustaine/head-crusher.mp3",
        "assets/mp3/dave-mustaine/lucretia.mp3",
        "assets/mp3/dave-mustaine/lucretia-2.mp3"
      ]
    }
  };

  // Will be populated when the player selects a character.
  var attacker;
  // Populated with all the characters the player didn't select.
  var combatants = [];
  // Will be populated when the player chooses an opponent.
  var defender;
  // Will keep track of turns during combat. Used for calculating player damage.
  var turnCounter = 1;
  // Tracks number of defeated opponents.
  var killCount = 0;

  // Music clips associated with attacker
  var aRingMusic;
  var aAttackMusic;

  // Music clips associated with defender
  var dRingMusic;
  var dAttackMusic;

  // FUNCTIONS
  // ===================================================================

  // This function will render a character card to the page.
  // The character rendered, the area they are rendered to, and their status is determined by the arguments passed in.
  var renderCharacter = function(character, renderArea) {
    // This block of code builds the character card, and renders it to the page.
    var charDiv = $(
      "<div class='character' data-name='" + character.name + "'>"
    );
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr(
      "src",
      character.imageUrl
    );
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv
      .append(charName)
      .append(charImage)
      .append(charHealth);
    $(renderArea).append(charDiv);
  };

  // this function will load all the characters into the character section to be selected
  var initializeGame = function() {
    // Loop through the characters object and call the renderCharacter function on each character to render their card.
    for (var key in characters) {
      renderCharacter(characters[key], "#characters-section");
    }
  };

  // remember to run the function here
  initializeGame();

  // This function handles updating the selected player or the current defender. If there is no selected player/defender this
  // function will also place the character based on the areaRender chosen (e.g. #selected-character or #defender)
  var updateCharacter = function(charObj, areaRender) {
    // First we empty the area so that we can re-render the new object
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
  };

  // This function will render the available-to-attack enemies. This should be run once after a character has been selected
  var renderEnemies = function(enemyArr) {
    for (var i = 0; i < enemyArr.length; i++) {
      renderCharacter(enemyArr[i], "#available-to-attack-section");
    }
  };

  // Function to handle rendering game messages.
  var renderMessage = function(message) {
    // Builds the message and appends it to the page.
    var gameMessageSet = $("#game-message");
    var newMessage = $("<div>").text(message);
    gameMessageSet.append(newMessage);
  };

  // Function which handles restarting the game after victory or defeat.
  var restartGame = function(resultMessage) {
    // When the 'Restart' button is clicked, reload the page.
    var restart = $("<button>Play again</button>").click(function() {
      location.reload();
    });

    // Build div that will display the victory/defeat message.
    var gameState = $("<div>").text(resultMessage);

    // Render the restart button and victory/defeat message to the page.
    $("body").append(gameState);
    $("body").append(restart);
  };

  // Function to clear the game message section
  var clearMessage = function() {
    var gameMessage = $("#game-message");

    gameMessage.text("");
  };

  // ===================================================================

  // On click event for selecting our character.
  $("#characters-section").on("click", ".character", function() {
    // Saving the clicked character's name.
    var name = $(this).attr("data-name");

    // If a player character has not yet been chosen...
    if (!attacker) {
      // We populate attacker with the selected character's information.
      attacker = characters[name];
      aRingMusic = new Audio(attacker.clips[0]);
      aRingMusic.play();
      // We then loop through the remaining characters and push them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

      // Hide the character select div.
      $("#characters-section").hide();

      // Then render our selected character and our combatants.
      updateCharacter(attacker, "#selected-character");
      renderMessage(`${attacker.name} is your avatar!`)
      renderEnemies(combatants);
    }
  });

  // Creates an on click event for each enemy.
  $("#available-to-attack-section").on("click", ".character", function() {
    // Saving the opponent's name.
    var name = $(this).attr("data-name");

    // If there is no defender, the clicked enemy will become the defender.
    if ($("#defender").children().length === 0) {
      defender = characters[name];
      dRingMusic = new Audio(defender.clips[0]);
      dRingMusic.play();
      updateCharacter(defender, "#defender");
      // remove element as it will now be a new defender
      $(this).remove();
      clearMessage();
      renderMessage(`${defender.name} is your rival!`);
    }
  });

  // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {
    // If there is a defender, combat will occur.
    if ($("#defender").children().length !== 0) {
      // Creates messages for our attack and our opponents counter attack.
      var r = Math.floor(Math.random() * attacker.clips.length);
      aAttackMusic = new Audio(attacker.clips[r]);
      aAttackMusic.play();
      var attackMessage =
        "You attacked " +
        defender.name +
        " for " +
        attacker.attack * turnCounter +
        " damage.";
      var counterAttackMessage =
        defender.name +
        " retaliated for " +
        defender.enemyAttackBack +
        " damage.";
        // console.log(attacker.clips[0]);
        // attacker.clips[0].play();
      clearMessage();

      // Reduce defender's health by your attack value.
      defender.health -= attacker.attack * turnCounter;

      // If the enemy still has health..
      if (defender.health > 0) {
        // Render the enemy's updated character card.
        updateCharacter(defender, "#defender");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        attacker.health -= defender.enemyAttackBack;

        // Render the player's updated character card.
        updateCharacter(attacker, "#selected-character");

        // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (attacker.health <= 0) {
          clearMessage();
          restartGame();
          renderMessage('You have been vanquished');
          $("#attack-button").off("click");
        }
      } else {
        // If the enemy has less than zero health they are defeated.
        // Remove your opponent's character card.
        $("#defender").empty();

        var gameStateMessage =
          "You have vanquished " +
          defender.name +
          ". You may choose another rival.";
        renderMessage(gameStateMessage);

        // Increment your kill count.
        killCount++;

        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= combatants.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame();
          renderMessage('You reign supreme!');
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    } else {
      // If there is no defender, render an error message.
      clearMessage();
      renderMessage("All rivals have been vanquished.");
    }
  });
});

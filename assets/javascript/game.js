$(document).ready(function() {

  // // // Functions  are Index 3 starting from line**********
  // Index 1: Declaring VARS  Arrays and Prompts
  // Index 2: Keyup Magic!!! What happens when user makes a letter guess.
  // Index 3:  Functions code

  // Index 1: Declaring VARS, Arrays and Prompts
  var playerName = prompt('Hello What is your Name?')
  alert("Hello " + playerName + " I'm Ms Cleo, Can you guess the Letter I'm Thinking?");
  var wins = 0;
  var loss = 0;
  var guess = 10;
  var trash = [];
  var wordBank = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];
  var randomLetterChosen = newLetter();
  console.log(randomLetterChosen);

  // Updates all the HTML id elements set at the beginning of the game
  updateIds()

  // Index 2: Keyup Magic!!! What happens when user makes a letter guess.
  // Lines 33-52 are pretty much the game running. We start off with keyup listener event
  // and log the event value to a var.  After that we clear the event.target.value.
  inputBox.addEventListener("keyup", function(event) {
    var letterUserGuesses = event.target.value;
    event.target.value = '';
    console.log(letterUserGuesses);

    // He we test the event.value and make sure it is alphabet character.
    // if the letter is true we compare it against the random chosen letter and if we
    // find it is a match the user wins the game.  If not the letter is pushed to the trash.
    if (/[A-Za-z]/.test(letterUserGuesses)) {

      if (randomLetterChosen === letterUserGuesses) {
        winGame()
      } else {
        trashPushGuessLoss(letterUserGuesses)
        loseGame()
      }
    }
  });

  // Index 3:  Functions code
  //
  // Fuction that resets game
  function gameReset() {
    guess = 10;
    trash = [];
    document.getElementById('guesses_remaining').innerHTML = guess;
    document.getElementById('wordsUsed').innerHTML = trash;
    // document.getElementById('images').src = "../../assets/images/download.jpg";
    alert("Shall we pay again? " + playerName)
  }

  // Fuction that randomly chooses a new letter
  function newLetter() {
    var letterIndex = (Math.floor(Math.random() * 26) + 0);
    return wordBank[letterIndex]
  }

  // Fuction that determines if you lose the game and what to do.
  function loseGame() {
    if (guess == 0) {
      loss--
      document.getElementById('loses').innerHTML = loss;
      alert(playerName + " You have do better than that that. The Letter was:  " + randomLetterChosen)
      gameReset()
      randomLetterChosen = newLetter()
      console.log(randomLetterChosen);
    }
  }

  // Fuction that pushes letter to trash and takes away a guess.
  // i=letterUserGuesses
  function trashPushGuessLoss(i) {
    if (randomLetterChosen != i && trash.indexOf(i) == -1) {
      guess--
      document.getElementById('guesses_remaining').innerHTML = guess
      trash.push(i)
      document.getElementById('wordsUsed').innerHTML = trash;
    }
  }

  // Fuction that determines if you win the game and what to do.
  function winGame() {
    wins++
    document.getElementById('wins').innerHTML = wins;
    alert("Oooooo You might have the gift. The Letter is:  " + randomLetterChosen)
    gameReset()
    randomLetterChosen = newLetter()
    console.log(randomLetterChosen);
  }

  // Fuction that updates the HTML IDs in the beginning of the game.
  function updateIds() {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('loses').innerHTML = loss;
    document.getElementById('guesses_remaining').innerHTML = guess;
    document.getElementById('wordsUsed').innerHTML = trash;
  }

});

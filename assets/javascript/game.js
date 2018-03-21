// VARIABLES
// ======================================================================================

// Generates a random number between 19 and 120
var randomTargetNum = Math.floor(Math.random() * 102 + 19);

// Generates 4 random numbers, all between 1 and 12, to assign to the seaglass images
var rand1 = Math.floor(Math.random() * 12 + 1);
var rand2 = Math.floor(Math.random() * 12 + 1);
var rand3 = Math.floor(Math.random() * 12 + 1);
var rand4 = Math.floor(Math.random() * 12 + 1);

var wins = 0;
var losses = 0;
var runningScore = 0;

// Write the contents of JS variables to DOM
$('#targetEl').text(randomTargetNum);
$('#winsEl').text(wins);
$('#lossesEl').text(losses);
$('#scoreEl').text(runningScore);

// Functions defining: a Win, a Loss, a Win Checker, and a Reset function
// ======================================================================================

// This function resets the game/round by: generating new random #'s for the crystals and target # -- it also writes them to the DOM
function reset() {
  randomTargetNum = Math.floor(Math.random() * 102 + 19);
  $('#targetEl').text(randomTargetNum);
  rand1 = Math.floor(Math.random() * 12 + 1);
  rand2 = Math.floor(Math.random() * 12 + 1);
  rand3 = Math.floor(Math.random() * 12 + 1);
  rand4 = Math.floor(Math.random() * 12 + 1);
  runningScore = 0;
  $('#scoreEl').text(runningScore);
}

// This function increments the win counter, then writes that to the DOM, then calls the reset() function
function winner() {
  wins++;
  $('#winsEl').text(wins);
  reset();
}

// This function increments the losses counter, then writes that to the DOM, then calls the reset() function
function loser() {
  losses++;
  $('#lossesEl').text(losses);
  reset();
}

// This function checks for a win -- a user-to-target number match
// If the numbers become equal, trigger winner() function -- else if the user exceeds the target, call loser() function
function checkWin() {
  if (runningScore === randomTargetNum) {
    winner();
  } else if (runningScore > randomTargetNum) {
    loser();
  }
}

// jQuery on-click events for the 4 images.
// Here each of the 4 images is waiting to be clicked (click event) if that happens, we run a function that takes the
// running score and adds its random value to it, writes that to the DOM, then runs the checkWin() function.
$('body').on('click', '#one', function() {
  runningScore = runningScore + rand1;
  $('#scoreEl').text(runningScore);
  checkWin();
});

$('body').on('click', '#two', function() {
  runningScore = runningScore + rand2;
  $('#scoreEl').text(runningScore);
  checkWin();
});

$('body').on('click', '#three', function() {
  runningScore = runningScore + rand3;
  $('#scoreEl').text(runningScore);
  checkWin();
});

$('body').on('click', '#four', function() {
  runningScore = runningScore + rand4;
  $('#scoreEl').text(runningScore);
  checkWin();
});
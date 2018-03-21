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

function winner() {
  wins++;
  $('#winsEl').text(wins);
  reset();
}

function loser() {
  losses++;
  $('#lossesEl').text(losses);
  reset();
}

function checkWin() {
  if (runningScore === randomTargetNum) {
    winner();
  } else if (runningScore > randomTargetNum) {
    loser();
  }
}

// On click events for the 4 images
// Blue seaglass(1)
$('body').on('click', '#one', function() {
  runningScore = runningScore + rand1;
  $('#scoreEl').text(runningScore);
  checkWin();
});
// Orange seaglass(2)
$('body').on('click', '#two', function() {
  runningScore = runningScore + rand2;
  $('#scoreEl').text(runningScore);
  checkWin();
});
// Green seaglass(3)
$('body').on('click', '#three', function() {
  runningScore = runningScore + rand3;
  $('#scoreEl').text(runningScore);
  checkWin();
});
// Red seaglass(4)
$('body').on('click', '#four', function() {
  runningScore = runningScore + rand4;
  $('#scoreEl').text(runningScore);
  checkWin();
});
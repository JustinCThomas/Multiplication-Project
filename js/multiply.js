var numbers = document.getElementsByClassName("number");
var numberBoxes = document.getElementsByClassName("number-box");
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var correctness = document.querySelector("#correctness");
var newProblem = document.getElementById("new-problem");

/*
Make the page look nicer and smoother
Add a button to get a new set of numbers
possibly change the color scheme
An option to change how large the factors can be. e.g.( max of 25)
Maybe add a score system
Add a timer, make it 10 seconds for now;

*/

init();

function init() {
  setupGame();
  addBoxEvents();
  newProblemEvent();
}

function getRandomNum() {
  var randomNum = Math.floor(Math.random() * 100);
  return randomNum;
}

function multiply(num1, num2) {
  var answer = num1 * num2;
  var variables = [answer, num1, num2];
  return variables;
}

function setupGame() {
  var x = Math.floor(Math.random() * numbers.length)

  for (var i = 0; i < numbers.length; i++) {
    var arr = multiply(getRandomNum(), getRandomNum());
    numbers[i].textContent = arr[0];
    if (x === i) {
      chooseEquation(arr);
    }
  }
}

function chooseEquation(arr) {
  value1.textContent = arr[1];
  value2.textContent = arr[2];
}

function addBoxEvents() {
  for (var i = 0; i < numberBoxes.length; i++) {
    numberBoxes[i].addEventListener('click', check);
  }
}

function check(){
  if ( (Number(this.textContent)) === (Number(value1.textContent) * Number(value2.textContent)) ) {
    correctness.textContent = "Correct!";
    this.style.backgroundColor = "lime";
    removeBoxEvents();
  } else {
    this.style.backgroundColor = "red";
    correctness.textContent = "Incorrect!";
  }
}

function removeBoxEvents() {
  for (var i = 0; i < numberBoxes.length; i++) {
    numberBoxes[i].removeEventListener('click', check);
  }
}

function newProblemEvent() {
  newProblem.addEventListener('click', function() {
    correctness.textContent = "What's the answer?";
    for (var i = 0; i < numberBoxes.length; i++) {
      numberBoxes[i].style.backgroundColor = "orange";
    }
    init();
  });
}

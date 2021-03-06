"use strict";

var numbers = document.getElementsByClassName("number");
var numberBoxes = document.getElementsByClassName("number-box");
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var correctness = document.querySelector("#correctness");
var newProblem = document.getElementById("new-problem");
var factorOneMax = document.querySelector("input[name='firstFactorMax']");
var factorTwoMax = document.querySelector("input[name='secondFactorMax']");

/*
Make the page look nicer and smoother
possibly change the color scheme
*/

init();

function init() {
  gameLogic();
  newProblemEvent();
}

function gameLogic() {
  setupGame();
  addBoxEvents();
}

function getRandomNum1() {
  if (parseInt(factorOneMax.value) >= 0 && parseInt(factorOneMax.value) <= 100 && parseInt(factorTwoMax.value) >= 0 && parseInt(factorTwoMax.value) <= 100) {
    var randomNum1 = Math.floor(Math.random() * (parseInt(factorOneMax.value) + 1));
    return randomNum1;
  } else {
    var _randomNum = Math.floor(Math.random() * 13);
    return _randomNum;
  }
}

function getRandomNum2() {
  if (parseInt(factorOneMax.value) >= 0 && parseInt(factorOneMax.value) <= 100 && parseInt(factorTwoMax.value) >= 0 && parseInt(factorTwoMax.value) <= 100) {
    var randomNum2 = Math.floor(Math.random() * (parseInt(factorTwoMax.value) + 1));
    return randomNum2;
  } else {
    var _randomNum2 = Math.floor(Math.random() * 13);
    return _randomNum2;
  }
}

function multiply(num1, num2) {
  var answer = num1 * num2;
  var variables = [answer, num1, num2];
  return variables;
}

function setupGame() {
  var x = Math.floor(Math.random() * numbers.length);

  for (var i = 0; i < numbers.length; i++) {
    var arr = multiply(getRandomNum1(), getRandomNum2());
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

function check() {
  if (Number(this.textContent) === Number(value1.textContent) * Number(value2.textContent)) {
    correctness.textContent = "Correct!";
    this.style.backgroundColor = "#11d011";
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
  newProblem.addEventListener('click', function () {
    correctness.textContent = "";
    for (var i = 0; i < numberBoxes.length; i++) {
      numberBoxes[i].style.backgroundColor = "orange";
    }
    gameLogic();
  });
}

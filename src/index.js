import './speech.js';
import './base.css';

var problemX = 0;
var problemY = 0;

function newProblem() {
  console.log('new problem');
  
  var a = document.getElementById('x');
  var b = document.getElementById('y');
  var answer = document.getElementById('answer');

  var va = Math.floor(Math.random() * 5);
  var vb = Math.floor(Math.random() * 5);

  a.innerText = va.toString();
  b.innerText = vb.toString();
  answer.innerText = '?';

  problemX = va;
  problemY = vb;
}

window.addEventListener('load', function() {
  newProblem();
});

window.addEventListener('answer', function(event) {
  let word = event.detail;
  let guess = parseInt( event.detail );
  
  if (word === 'one') guess = 1;
  if (word === 'two') guess = 2;
  if (word === 'three') guess = 3;
  if (word === 'four') guess = 4;
  if (word === 'five') guess = 5;
  if (word === 'six') guess = 6;
  if (word === 'seven') guess = 7;
  if (word === 'eight') guess = 8;
  if (word === 'nine') guess = 9;
  if (word === 'ten') guess = 10;
  
  console.log('guess=',guess);
  console.log(problemX, problemY);
  if (guess == problemX + problemY) {
    newProblem();
  }
});

'use strict';
let secNum = Math.floor(Math.random() * 20) + 1;
console.log(secNum);
let highScore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  let inNum = document.querySelector('.guess').value;

  if (secNum == inNum) {
    console.log('Same');
    document.querySelector('.message').textContent = '👏 Correct Number';
    document.querySelector('.number').textContent = secNum;
    document.querySelector('body').style.background = '#8ED435';
    highScore = score;
    document.querySelector('.score').textContent = highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else {
    if (inNum < secNum) {
      score--;
      highScore = score;
      document.querySelector('.score').textContent = score;
      console.log('Not same');
      document.querySelector('body').style.background = '#E62D12';
      document.querySelector('.message').textContent = '⬇ Low guess';
    } else if (inNum > secNum) {
      console.log('Not same');
      score--;
      highScore = score;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.background = '#E62D12';
      document.querySelector('.message').textContent = '⬆ High guess';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secNum = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = '🛑 Guess Number ';
  document.querySelector('.score').textContent = '20';
});

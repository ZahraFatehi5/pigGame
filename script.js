'use strict';

const dice = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const new_btn = document.querySelector('.btn--new');

let current_score, activeplayer, playing;

let scores = [0, 0];

const initilization = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  current_score = 0;
  activeplayer = 1;

  playing = true;

  dice.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`#name--0`).textContent = 'PlAYER 1 ';
  document.querySelector(`#name--1`).textContent = 'PlAYER 2 ';
};

const switching = function () {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  current0.textContent = 0;
  current1.textContent = 0;
  current_score = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
};
initilization();

// roll button
roll.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;

    if (random !== 1) {
      current_score += random;
      document.getElementById(
        `current--${activeplayer}`
      ).textContent = current_score;
    } else switching();
  }
});

// hold button
hold.addEventListener('click', function () {
  scores[activeplayer] += current_score;

  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
  if (scores[activeplayer] > 100) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document.querySelector(`#name--${activeplayer}`).textContent =
      'You Win... ';
    playing = false;
  }

  current_score = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  switching();
});

new_btn.addEventListener('click', initilization);

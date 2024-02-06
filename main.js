const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const statusLabel = document.querySelector('#status');
const heads = document.querySelector('#headCounter');
const tails = document.querySelector('#tailCounter');

let headsCount = 0;
let tailsCount = 0;

function processResult(result) {
  if (result === 'heads') {
    headsCount += 1;
    heads.innerHTML = headsCount;
  } else {
    tailsCount += 1;
    tails.innerHTML = tailsCount;
  }

  statusLabel.innerText = `${result.toUpperCase()}!`;
}

function disableBtn() {
  button.disabled = true;
  button.innerText = 'Wait...';

  setTimeout(() => {
    button.disabled = false;
    button.innerText = 'Flip it!';
  }, 3000);
}

function flipCoin() {
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';

  disableBtn();

  setTimeout(() => {
    coin.setAttribute('class', `animate-${result}`);

    setTimeout(() => {
      processResult(result);
    }, 2500);
  }, 100);
}

button.addEventListener('click', flipCoin);

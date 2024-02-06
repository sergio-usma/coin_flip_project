const coin = document.querySelector('#coin');
const button = document.querySelector('#coin');
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

function flipCoin() {
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';

  setTimeout(() => {
    coin.setAttribute('class', `animate-${result}`);
    statusLabel.innerText = 'Flipping...';
    setTimeout(() => {
      processResult(result);
    }, 2800);
  }, 50);
}

button.addEventListener('click', flipCoin);

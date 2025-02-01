let balance =  0;

let tapcount = 0;

const MAX_TAPS = 50000;

const COINS_FOR_JOINING_TELEGRAM = 1000;

document.getElementById('tap-coin').addEventListener('click', () => {

    tapCount++;

    balance++;

    if (tapCount >= MAX_TAPS) {

        tapCount = 0;

    }

    document.getElementById('balance').innerText = balance;

    // Add animation for coin tap

    const tapCoin = document.getElementById('tap-coin');

    tapCoin.classList.add('tapped');

    setTimeout(() => {

        tapCoin.classList.remove('tapped');

    }, 100);

});

document.getElementById('connect-wallet').addEventListener('click', () => {

    const walletAddress = document.getElementById('wallet-address').value;

    if (walletAddress) {

        alert('Successfully activated wallet');

        document.getElementById('wallet-address').disabled = true;

        document.getElementById('connect-wallet').disabled = true;

    } else {

        alert('Please enter your TON wallet address');

    }

});

document.getElementById('join-telegram').addEventListener('click', () => {

    balance += COINS_FOR_JOINING_TELEGRAM;

    document.getElementById('balance').innerText = balance;

});






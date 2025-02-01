let balance =  0;

let tapcoin = 0;
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

parseFloat(localStorage.getItem('balance'))|| 0; // Initialize balance from local storage
// Daily bonus logic
const lastBonusDate = localStorage.getItem('lastBonusDate');
const today = new Date().toISOString().split('T')[0];

if (lastBonusDate !== today) {
    balance += 1000; // Add daily bonus
    localStorage.setItem('lastBonusDate', today); // Update last bonus date
}

document.getElementById('balance').innerText = balance.toFixed(4); // Update displayed balance

document.getElementById('mineButton').addEventListener('click', () => {
    balance += 1; // 
    localStorage.setItem('balance', balance); // Save balance to local storage
    document.getElementById('balance').innerText = balance.toFixed(4); // Update displayed balance
});



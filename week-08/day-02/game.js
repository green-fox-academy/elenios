'use-strict';

const candies = document.querySelector('.candies');
const candyCreater = document.querySelector('.create-candies');

candyCreater.addEventListener('click', () => {
candies.innerHTML++;
});
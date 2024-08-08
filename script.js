'use strict'

const adviceId = document.querySelector('.advice__title__id');
const adviceInfo = document.querySelector('.advice__info');
const adviceBtn = document.querySelector('.advice__btn');

const fetchAdvice = function () {
    const url = 'https://api.adviceslip.com/advice?' + new Date().getTime();
    fetch(url)
        .then(response => response.json())
        .then(function ({ slip }) {
            const { id, advice: info } = slip;


            //DOM Manipulation:
            adviceId.textContent = id;
            adviceInfo.textContent = info;


        })
};

adviceBtn.addEventListener('click', fetchAdvice);

fetchAdvice();
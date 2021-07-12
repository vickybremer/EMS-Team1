let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');

btn1.addEventListener('click', () => {
    img.src = 'assets/inaktiv.png';
})

btn2.addEventListener('click', () => {
    img.src = 'assets/neues vokabelpaket.png';
})

btn3.addEventListener('click', () => {
    img.src = 'assets/offen.png';
})

btn4.addEventListener('click', () => {
    img.src = 'assets/screen.png';
})

btn5.addEventListener('click', () => {
    img.src = 'assets/light_off.png';
})

btn6.addEventListener('click', () => {
    img.src = 'assets/light_on.png';
})

btn7.addEventListener('click', () => {
    img.src = 'assets/light_wrong.png';
})
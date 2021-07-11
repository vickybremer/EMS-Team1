let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'assets/inaktiv.png';
})

btn2.addEventListener('click', () => {
    img.src = 'assets/neues spiel.png';
})

btn3.addEventListener('click', () => {
    img.src = 'assets/neues vokabelpaket.png';
})

btn4.addEventListener('click', () => {
    img.src = 'assets/offen.png';
})

btn5.addEventListener('click', () => {
    img.src = 'assets/screen.png';
})

// btn6.addEventListener('click', () => {
//     img.src = 'assets/XX.png';
// })

// btn7.addEventListener('click', () => {
//     img.src = 'assets/XX.png';
// })

// btn8.addEventListener('click', () => {
//     img.src = 'assets/XX.png';
// })
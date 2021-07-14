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
    document.getElementById('unterschrift').innerHTML = "THIS IS INAKTIV";
})

btn2.addEventListener('click', () => {
    img.src = 'assets/neues vokabelpaket.png';
    document.getElementById('unterschrift').innerHTML = "Wortschatz im aktiven Zustand. Die Box hat vom inaktiven in den aktiven Zustand gewechselt. Sie signalisiert, dass neue Vokabeln zum Lernen angekommen sind oder das Spiel für den Tag nun gespielt werden kann. Dabei leuchtet die Kante der Box sowie der Knopf zum Öffnen und der Schlitz, zum Einführen der Karten, auf.";
})

btn3.addEventListener('click', () => {
    img.src = 'assets/offen.png';
    document.getElementById('unterschrift').innerHTML = "ÖPEN";
})

btn4.addEventListener('click', () => {
    img.src = 'assets/screen.png';
    document.getElementById('unterschrift').innerHTML = "SCREAM";
})

btn5.addEventListener('click', () => {
    img.src = 'assets/light_off.png';
    document.getElementById('unterschrift').innerHTML = "NO LIGHTS ON IN THIS BRAIN LOL";
})

btn6.addEventListener('click', () => {
    img.src = 'assets/light_on.png';
    document.getElementById('unterschrift').innerHTML = "ONE LIGHT ON IN THIS BRAIN";
})

btn7.addEventListener('click', () => {
    img.src = 'assets/light_wrong.png';
    document.getElementById('unterschrift').innerHTML = "EE WRONG";
})
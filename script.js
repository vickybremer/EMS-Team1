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
    document.getElementById('unterschrift').innerHTML = "Wortschatz im inaktiven Zustand. Die Box ist im Standby Modus und leuchtet auf, wenn neue Vokabeln bei ihr ankommen. ";
})

btn2.addEventListener('click', () => {
    img.src = 'assets/neues vokabelpaket.png';
    document.getElementById('unterschrift').innerHTML = "Wortschatz im aktiven Zustand. Die Box hat vom inaktiven in den aktiven Zustand gewechselt. Sie signalisiert, dass neue Vokabeln zum Lernen angekommen sind oder das Spiel für den Tag nun gespielt werden kann. Dabei leuchtet die Kante der Box sowie der Knopf zum Öffnen und der Schlitz, zum Einführen der Karten, auf.";
})

btn3.addEventListener('click', () => {
    img.src = 'assets/offen.png';
    document.getElementById('unterschrift').innerHTML = "Wortschatz nachdem es geöffnet wurde. In der Box befinden sich die Karteikarten, welche mit neuen Vokabeln für die Woche bespielt wurden, sowie der dazugehörige Stift für den Screen. Auch im geöffneten Zustand bleibt die Beleuchtung der Box weiterhin aktiv. Der Screen, welcher den unteren Teil der Box ausmacht, lässt sich anhand von Clips an den Seiten abnehmen. ";
})

btn4.addEventListener('click', () => {
    img.src = 'assets/screen.png';
    document.getElementById('unterschrift').innerHTML = "Virtuelle Repräsentation auf dem Screen von Wortschatz. Als Repräsentation von den analogen Karten, erscheint auf dem Screen von Wortschatz eine virtuelle Karte. Auf ihr ist jeweils eine Vokabel gespeichert und ausreichend Platz, um beispielsweise eine bildliche Repräsentation zu erstellen oder die Vokabelspiele zu spielen.";
})

btn5.addEventListener('click', () => {
    img.src = 'assets/light_off.png';
    document.getElementById('unterschrift').innerHTML = "Fortschrittsanzeige in Wortschatz. Um den Fortschritt der einzelnen Vokabeln anschaulich zu machen, sind neben den Steckplätzen der Karteikarten LED’s angebracht. Leuchtet keine LED auf, wurde die Karte noch nicht verwendet und die Vokabel somit noch nicht geübt.";
})

btn6.addEventListener('click', () => {
    img.src = 'assets/light_on.png';
    document.getElementById('unterschrift').innerHTML = "Die Vokabel wurde erfolgreich mit Wortschatz bearbeitet. Nach dem erfolgreichem Bespielen einer Karteikarte leuchtet die Kante der Box bestätigend auf. Die Fortschrittsanzeige einer einzelnen Karte steigt pro Spiel/Erstellen der bildhaften Assoziation um eine leuchtende LED an. Nach 5 Tagen sollten alle LEDs einer Karte leuchten.";
})

btn7.addEventListener('click', () => {
    img.src = 'assets/light_wrong.png';
    document.getElementById('unterschrift').innerHTML = "Die Vokabel wurde nicht erfolgreich bearbeitet. Falls eine Vokabel nicht richtig bearbeitet wurde, wird auch dies in der Fortschrittsanzeige anhand einer gelb aufleuchtenden LED angezeigt. Das Wort muss somit direkt nach dem Spiel erneut wiederholt werden. ";
})
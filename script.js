const messages = [
    "Na pewno nie?",
    "Jesteś pewna??",
    "Ale tak serio?",
    "Martysiu prosze...",
    "A może przemyśl to..",
    "Jak nie przestaniesz odpowiadać nie to będzie mi smutno :(",
    "Bardzo smutno...",
    "Bardzo bardzo smutno :(",
    "no dobra.. już przestane..",
    "Żartowałem, po prostu powiedz tak!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
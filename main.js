let serialElement = document.querySelector(".serial");
let btnGenerate = document.querySelector(".generate");

btnGenerate.onclick = function () {
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charCount = 10;
    let randomSerial = "";
    for (let i = 0 ; i < charCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialElement.innerHTML = randomSerial;
}


let letter = "A";
const MAX_ALPHA = 26;

for (let i = 0; i < MAX_ALPHA; ++i) {
    let btn = document.createElement("BUTTON");
    let btnText = document.createTextNode(letter);
    btn.appendChild(btnText);
    btn.onclick = function() {alert(btnText.textContent)};
    document.getElementById("buttons").appendChild(btn);
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
}
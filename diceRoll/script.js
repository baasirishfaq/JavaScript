const roll = document.getElementById("roll").onclick;
const display = document.getElementById("display");

roll = function() {
    let number = Math.floor(Math.random() * 6) + 1;
    display.textContent = "testing";
}
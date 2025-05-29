document.getElementById("roll").onclick = function() {
    let number = Math.floor(Math.random() * 6) + 1;
    display.textContent = number;
}
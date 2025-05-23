document.getElementById("submit").onclick = function() {

let username = document.getElementById("username").value;

document.getElementById("userEntered").textContent = (`Garbage you entered: ${username}`);
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
document.getElementById("corrected").textContent = (`corrected username: ${username}`);
}




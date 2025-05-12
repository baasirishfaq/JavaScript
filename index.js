let username

document.getElementById("mySubmit").onclick = function() {

    username = document.getElementById("myText").value;
    if (username.length > 0) {
        document.getElementById("myText").value = "";
        window.alert("Hello " + username);
        
    }
    console.log(username);
    document.getElementById("myText").textContent = ""; // clear the username field after submission
}





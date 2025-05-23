
// This is a simple JavaScript code that captures a username 
// input from an HTML form and displays a welcome message on the page.

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("welcome").textContent = `Welcome ${username}`;
    document.getElementById("myText").value = ""; // Clear the input field after taking the username

}   

const logIn = document.getElementById("logIn");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const sms = document.getElementById("sms");
const mysubmit = document.getElementById("mysubmit");
const result1 = document.getElementById("loginResult");
const result2 = document.getElementById("communicationResult");

mysubmit.onclick = function(){

    if(logIn.checked){
        result1.textContent = "You are logged in";
    }
    else{
        result1.textContent = "You are not logged in";
    }

    if(phone.checked){
        result2.textContent = "You will be contacted by phone";
    }
    else if(email.checked){
        result2.textContent = "You will be contacted by email";
    }
    else if(sms.checked){
        result2.textContent = "You will be contacted by SMS";
    }
    else{
        result2.textContent = "You will not be contacted";
    }
}

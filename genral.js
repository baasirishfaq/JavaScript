let time = new Date().getHours();
console.log(time);
let greeting = time < 12 ? "Good Morning" : time < 18 ? "Good afternoon" : time > 18 && time < 20 ? "Good evening " : "Good night";
console.log(greeting);
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const resetToZero = document.getElementById("resetToZero");

let count = 0;
document.getElementById("submit").onclick = function () {
  count = document.getElementById("text").value;
  document.getElementById("text").value = ""; // Clear the input field
  count = Number(count); // Convert the string to a number
  saveValue = count;
  document.getElementById("number").textContent = count;
};
let saveValue = Number(count);

decrease.onclick = function () {
  count--;
  document.getElementById("number").textContent = count;
}
increase.onclick = function () {
    count ++;
    document.getElementById("number").textContent = count;
    }
reset.onclick = function () {
    count = saveValue;
    document.getElementById("number").textContent = count;
}
resetToZero.onclick = function () {
    count = 0;
    saveValue = 0;
    document.getElementById("number").textContent = count;
}

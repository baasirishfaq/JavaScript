function rollDice() {
  const numberOfDice = document.getElementById("numberOfDice").value;
  const result = document.getElementById("result");
  if(numberOfDice == 0 || numberOfDice > 20)
  {
    result.innerHTML = "Should be between 0 - 20";
    return;
  }
//   const values = [];
  const images = [];

  for (let i = 0; i < numberOfDice; i++) 
    {
    const value = Math.floor(Math.random() * 6) + 1;
    // values.push(value);
    images.push(`<img src = "${value}.png">`)
    }
  result.innerHTML = images.join("");
}

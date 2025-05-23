// Initialize an empty string to store the current expression (like "2+3*4")
let expression = ""; 



// List of button IDs for numbers and operators
const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "plus", "minus", "multiply", "divide", "%"];

// Loop through each button ID and assign a click event
buttons.forEach((id) => {
    // Access the button using its ID and attach an event listener
    document.getElementById(id).onclick = function () {
        let value;

        // Check which button was clicked and assign the corresponding value
        if (id === "plus") value = "+";       // "+" button
        else if (id === "minus") value = "-"; // "-" button
        else if (id === "multiply") value = "*"; // "*" button
        else if (id === "%") value = "%"; // "%" button
        else if (id === "divide") value = "/"; // "/" button
        else value = id; // If not an operator, it must be a number (like "1", "2", etc.)
        
        // Update the input field with the selected number or operator
        updateInput(value);
    };
});

// Function to update the input field with the current expression
function updateInput(value) {
    // Append the new value (number/operator) to the expression
    expression += value;
    // Display the updated expression in the input box
    document.getElementById("myText").value = expression;
}

// Clear button: Reset the expression and input field when clicked
document.getElementById("clear").onclick = function () {
    expression = ""; // Reset the expression to an empty string
    document.getElementById("myText").value = ""; // Clear the input box
    document.getElementById("rez").textContent = ""; // Clear the output text
};

// Submit button: Calculate and display the result when clicked
document.getElementById("submit").onclick = function () {
    // Use eval() to calculate the result of the expression
    let result = eval(expression); 
    
    // Display the calculated result in the output area
    document.getElementById("output").textContent = result;
    document.getElementById("rez").textContent = "result: " + result;

    
    // Update the expression to the result so it can be used for further calculations
    expression = result.toString(); 
};

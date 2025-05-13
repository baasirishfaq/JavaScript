let expression = "";

// Function to update the input field
function updateInput(value) {
    expression += value;
    document.getElementById("myText").value = expression;
}

// Attach click event listeners to number and operator buttons
const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "plus", "minus", "multiply", "divide"];
buttons.forEach((id) => {
    document.getElementById(id).onclick = function () {
        let value;
        switch (id) {
            case "plus":
                value = "+";
                break;
            case "minus":
                value = "-";
                break;
            case "multiply":
                value = "*";
                break;
            case "divide":
                value = "/";
                break;
            default:
                value = id;
                break;
        }
        updateInput(value);
    };
});

// Clear the input and output when the "Clear" button is clicked
document.getElementById("clear").onclick = function () {
    expression = "";
    document.getElementById("myText").value = "";
    document.getElementById("output").textContent = "";
};

// Evaluate the expression and display the result when the "Submit" button is clicked
document.getElementById("submit").onclick = function () {
    try {
        // Use eval to calculate the expression, but be cautious as eval can be risky
        let result = eval(expression);
        document.getElementById("output").textContent = result;
        expression = result.toString(); // Keep the result for further calculations
    } catch (error) {
        document.getElementById("output").textContent = "Error!";
    }
};





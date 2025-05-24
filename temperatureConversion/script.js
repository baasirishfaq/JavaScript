const submit = document.getElementById("convertBtn");
const unit =   document.getElementById("unit");
const input =  document.getElementById("temperature").value;
const result = document.getElementById("result");

submit.onclick = function() {
    const input =  document.getElementById("temperature").value;
    const temperature = Number(input);
    let convertedTemperature;
    if (unit.value === "Celsius") {
        convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        result.textContent = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} °F and ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit.value === "Fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        result.textContent = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} °C and ${(convertedTemperature + 273.15).toFixed(2)} K`;
    } else if (unit.value === "Kelvin") {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result.textContent = `${temperature} K = ${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °Fcd`;
    }
}


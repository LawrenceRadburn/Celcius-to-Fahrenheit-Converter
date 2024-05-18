let input = document.getElementById("input")
let output = document.getElementById("output")


function calculation(input) {
    let fahrenheit = 9 * input / 5 + 32;
    output.value = fahrenheit;
    return fahrenheit;
};

input.addEventListener("input", function() {
    let inputValue = parseFloat(input.value);
    calculation(inputValue);
});


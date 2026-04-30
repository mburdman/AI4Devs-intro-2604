const inputText = document.getElementById("inputText");
const result = document.getElementById("result");
const reverseButton = document.getElementById("reverseButton");

inputText.addEventListener("input", function () {
    const input = inputText.value;

    const reversed = input.split("").reverse().join("");
    result.textContent = reversed;

    if (input.length > 3) {
        reverseButton.style.display = "inline-block";
    } else {
        reverseButton.style.display = "none";
    }
});
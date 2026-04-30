function reverseString() {
    // Tomo el valor del input
    const input = document.getElementById("inputText").value;

    // Invierto el string
    const reversed = input.split("").reverse().join("");

    // Lo muestro en pantalla
    document.getElementById("result").textContent = reversed;
}
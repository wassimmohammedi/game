let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0; // Attempt counter

document.getElementById("submitGuess").addEventListener("click", function () {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;
    let resultMessage = "";
    let resultElement = document.getElementById("result");

    // Reset classes before adding a new one
    resultElement.className = "";

    if (userGuess > randomNumber) {
        if (userGuess - randomNumber <= 10) {
            resultMessage = `كبير لكنه قريب بعض الشيئ اعد المحاولة`;
            resultElement.classList.add("close");
        } else {
            resultMessage = "كبير جدا اعد المحاولة";
            resultElement.classList.add("big");
        }
    } else if (userGuess < randomNumber) {
        if (randomNumber - userGuess <= 10) {
            resultMessage = "صغير لكنه قريب بعض الشيئ اعد المحاولة";
            resultElement.classList.add("close");
        } else {
            resultMessage = "صغييير جدا اعد المحاولة";
            resultElement.classList.add("big");
        }
    } else {
        resultMessage = `تهاانينا لقد وجدت الرقم`;
        resultElement.classList.add("correct");
    }

    resultElement.innerText = resultMessage;

    // Update attempts
    let attempt = document.getElementById("attempts");
    if (attempts == 1) {
        attempt.innerText = `محاولة`;
    } else if (attempts == 2) {
        attempt.innerText = `محاولتين`;
    } else {
        attempt.innerHTML = `&#128522 ${attempts} محاولة رقم ;`; // Use innerHTML instead of innerText
    }
});

// Limit input to 3 digits
let userGuessInput = document.getElementById("userGuess");
userGuessInput.addEventListener("input", () => {
    if (userGuessInput.value.length > 3) {
        userGuessInput.value = userGuessInput.value.slice(0, 3);
    }
});

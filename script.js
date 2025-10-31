function askName() {
    let answer = prompt("Hint: Vtuber Hololive ID yang dijuluki Blacksmith Penguin!");

    if (answer === null || answer.trim() === "") {
        alert("Masukkan nama dulu!");
        return askName();
    }

    answer = answer.toLowerCase().trim();

    if (answer === "kaela") {
        showKaelaPage();
    } else {
        showWrongPage();
    }
}

function showKaelaPage() {
    document.getElementById("kaelaPage").classList.remove("hidden");
    document.getElementById("wrongPage").classList.add("hidden");
}

function showWrongPage() {
    document.getElementById("wrongPage").classList.remove("hidden");
    document.getElementById("kaelaPage").classList.add("hidden");
}

function retryQuiz() {
    document.getElementById("wrongPage").classList.add("hidden");
    askName();
}


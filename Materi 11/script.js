// 1. Our First For Loop Practice
function printChorus() {
    let output = "";
    for (let i = 0; i < 6; i++) {
        output += "Da ba dee da ba daa<br>";
    }
    document.getElementById("chorusOutput").innerHTML = output;
}

// 2. For Loops Practice
function countdown() {
    let output = "";
    for (let i = 25; i >= 0; i -= 5) {
        output += i + "<br>";
    }
    document.getElementById("countdownOutput").innerHTML = output;
}

// 3. Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
function printPeople() {
    let output = "";
    for (let i = 0; i < people.length; i++) {
        output += people[i].toUpperCase() + "<br>";
    }
    document.getElementById("peopleOutput").innerHTML = output;
}

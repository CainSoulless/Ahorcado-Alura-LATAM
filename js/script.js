// let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "LATAM"];
let words = ["ONE"];
let secretWord = randomWord();
let canvasEl = document.getElementById("myCanvas");
let table = canvasEl.getContext("2d");

// Show and hidde elements in the page lobby 
function lobbyGame(disp) {
    Array.prototype.forEach.call(document.getElementsByClassName("buttons"), function(el){
        el.style.display = disp;
    });

    if (disp == 'none') {
        canvasEl.style.display = "flex";
    }
    else if (disp == 'flex') {
        canvasEl.style.display = "none";
    }
}

// Return the word randimized.
function randomWord() {
    list = words;
    var index = Math.floor(Math.random() * list.length);
    console.log(list[index]);
    return list[index];
}

// Return the key pressed by the user.
function keyboardCapturer(evObject) {
    var character = String.fromCharCode(evObject.which).toUpperCase();
    var index = secretWord.indexOf(character);
    // Check if the character isn't a number and if there is into the string.
    if (typeof character == 'string' && index != -1) {
        correctChar(character);
    } else {
        incorrectChar(character);
    }
}

function correctChar(character) {
    for (let i = 0; i < secretWord.length; i++) {
        // Found all char coincients
        if (secretWord[i] == character) {
            charDrawing(character, i, true);
        }
    }
}

function incorrectChar(character) {
    charDrawing(character, null, false);
}

function startGame() {
    lobbyGame('none');
    drawingCanvas();
    wordHolder();
    // Keep listening for any keypress event and call a function returning his key.
    document.onkeypress = keyboardCapturer;
    drawGallow(1);
}



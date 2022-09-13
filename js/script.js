let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "LATAM"]
let secretWord = randomWord();
let canvasEl = document.getElementById("myCanvas")
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
    let index = Math.floor(Math.random() * list.length);
    console.log(list[index]);
    return list[index];
}

// Return the key pressed by the user.
function keyboardCapturer(evObject) {
    var character = String.fromCharCode(evObject.which).toUpperCase();

    if (typeof character == 'string' && secretWord.indexOf(character) != -1) {
        let index = secretWord.indexOf(character);
        console.log(secretWord[index]);
    }
}

function startGame() {
    lobbyGame('none');
    drawingCanvas();
    wordHolder();
    // Keep listening for any keypress event and call a function returning his key.
    document.onkeypress = keyboardCapturer;
    wordDrawing()
}


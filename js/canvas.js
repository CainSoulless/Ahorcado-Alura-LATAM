let wordLen = secretWord.length;
// The character plus the space are equal to 100 px
let charSpace = 100;
// length of the whole word maded characters and spaces.
let len = (charSpace * wordLen) - (charSpace / wordLen);
// X, beginning of the word on the cartesian plane.
let x = (1200 / 2) - (len / 2) + 4;
// Create each space for each word.

function drawingCanvas() {
    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";

    table.fillRect(0, 0, 1200, 860);
    table.beginPath();
    table.moveTo(450, 500);
    table.lineTo(750, 500);
    table.stroke();
    table.closePath();
}

function wordHolder() {
    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";

    for (let i = 0; i < wordLen; i++) {
        table.moveTo(x + (charSpace * i), 640);
        table.lineTo(x + 50 + (charSpace * i), 640);
    }

    table.stroke();
    table.closePath();
}

function wordDrawing() {
    table.font = "80px Arial";
    table.strokeText(secretWord[0], x, 630);
    console.log("hello");
}

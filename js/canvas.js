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

// function wordDrawing() {
//     table.font = "80px Arial";
//     table.fillStyle = "#0A3871";
//
//     for (let i = 0; i < wordLen; i++) {
//         table.strokeText(secretWord[i], x, 630);
//         table.fillText(secretWord[i], x, 630);
//         x += 99;
//     }
// }

let incorrectList = [];
// correct arg. take if the char is correct or incorrect (true or false).
function charDrawing(character, index, correct) {
    table.font = "80px Inter";
    table.lineWidth = 2;
    let tmpX = x;
    // -------------incorrect attempts vars --------------------
    let xIncorrect = x;
    if (correct == true) {
        x += (index * 100);
        table.fillStyle = "#0A3871";
        table.strokeText(character, x, 630);
        table.fillText(character, x, 630);
        x = tmpX;
    }
    else if (correct == false){
        table.fillStyle = "#AA4A44";
        if (incorrectList.indexOf(character) == -1) {
            xIncorrect += (incorrectList.length * 100)
            table.strokeText(character, xIncorrect, 750);
            table.fillText(character, xIncorrect, 750);
            incorrectList.push(character);
            console.log(incorrectList.length);
        }
    }
}

function drawGallow(attempts) {
    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";

    // First stick
    table.beginPath();
    table.moveTo(500, 500);
    table.lineTo(500, 100);
    table.stroke();
    table.closePath();

    // Second stick
    table.beginPath();
    table.moveTo(500, 100);
    table.lineTo(650, 100);
    table.stroke();
    table.closePath();

    // Third stick
    table.beginPath();
    table.moveTo(650, 100);
    table.lineTo(650, 150);
    table.stroke();
    table.closePath();

    // Head
    table.beginPath();
    table.arc(650, 200, 45, 2 * Math.PI, false);
    table.stroke();
    table.closePath();

    // Torso
    table.beginPath();
    table.moveTo(650, 245);
    table.lineTo(650, 350);
    table.stroke();
    table.closePath();

    // Right leg
    table.beginPath();
    table.moveTo(650, 350);
    table.lineTo(710, 420);
    table.stroke();
    table.closePath();

    // Left leg
    table.beginPath();
    table.moveTo(650, 350);
    table.lineTo(590, 420);
    table.stroke();
    table.closePath();

   // Rigth arm 
    table.beginPath();
    table.moveTo(650, 260);
    table.lineTo(700, 330);
    table.stroke();
    table.closePath();

   // Left arm 
    table.beginPath();
    table.moveTo(650, 260);
    table.lineTo(600, 330);
    table.stroke();
    table.closePath();
}

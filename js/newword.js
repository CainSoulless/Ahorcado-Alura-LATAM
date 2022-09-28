// let input = document.getElementById("textareaId");
//
// input.addEventListener('keypress', function(event) {
//     if (event.key == "Enter") {
//         event.preventDefault();
//         document.getElementById("btnSave");
//         addWord();
//     }
// });

document.addEventListener('keyup', function(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        addWord(words);
    }
});

function addWord(){
    var text = document.getElementById("textareaId").value.toUpperCase();
    console.log("added " + text);
    
    if (text.length > 8) {
        invalid();
        return false;
    }
    localStorage.setItem('added', text);
    // window.location.replace("index.html");
    return false;
}

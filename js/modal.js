let openModal = document.querySelector(".modal");

function win() {
    document.querySelector(".modal__title").innerHTML = "¡Ganaste!"
    document.querySelector(".modal__img").src = "img/win.svg";
    openModal.classList.add("modal--show"); 
}

function lose() {
    document.querySelector(".modal__title").innerHTML = "Vuelve a intentar."
    document.querySelector(".modal__img").src = "img/lose.svg";
    openModal.classList.add("modal--show"); 
}

function invalid() {
    document.querySelector(".modal__title").innerHTML = "Error!."
    document.querySelector(".modal__img").src = "img/error.svg";
    openModal.classList.add("modal--show"); 
}

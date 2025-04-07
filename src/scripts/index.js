function handleModal() {
    const buttons = document.querySelectorAll(".open--modal");
    const modalContainer = document.querySelector("#modalController")
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            modalContainer.showModal();

            closeModal();
        });
    });
}

function closeModal() {
    const button = document.querySelector("#close__modal");
    const modalContainer = document.querySelector("#modalController")
    button.addEventListener("click", () => {
        modalContainer.close();
    });
}
handleModal();
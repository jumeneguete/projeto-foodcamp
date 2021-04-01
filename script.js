function select (meal) {

    const dontDisplayBorder = document.querySelector(".selected");
    const dontDisplayIcon = document.querySelector(".selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(meal);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");


}


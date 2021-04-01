function selectMeal (meal) {

    const dontDisplayBorder = document.querySelector(".meal-options .selected");
    const dontDisplayIcon = document.querySelector(".meal-options .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(meal);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");
}

function selectDrink (drink) {

    const dontDisplayBorder = document.querySelector(".drink-options .selected");
    const dontDisplayIcon = document.querySelector(".drink-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(drink);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");
}

function selectDessert (dessert) {

    const dontDisplayBorder = document.querySelector(".dessert-options .selected");
    const dontDisplayIcon = document.querySelector(".dessert-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(dessert);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");
}

let receivedMeal;
let receivedDrink;
let receivedDessert;

function selectMeal (mealClass, displayName, price) {
    receivedMeal = mealClass;
    mealPrice = price;

    const dontDisplayBorder = document.querySelector(".meal-options .selected");
    const dontDisplayIcon = document.querySelector(".meal-options .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(mealClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function selectDrink (drinkClass, displayName, price) {

    receivedDrink = drinkClass;
    drinkPrice = price;

    const dontDisplayBorder = document.querySelector(".drink-options .selected");
    const dontDisplayIcon = document.querySelector(".drink-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(drinkClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function selectDessert (dessertClass, displayName, price) {

    receivedDessert = dessertClass;
    dessertPrice = price;

    const dontDisplayBorder = document.querySelector(".dessert-options .selected");
    const dontDisplayIcon = document.querySelector(".dessert-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(dessertClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function send () {

    if (receivedMeal !== undefined && receivedDrink !== undefined && receivedDessert !== undefined){
        let sendButton = document.querySelector("footer button");
        sendButton.classList.add("active-button");
        sendButton.innerHTML = "Fechar Pedido";
        
    }
}

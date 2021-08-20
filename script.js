let receivedMeal;
let receivedDrink;
let receivedDessert;

let mealName;
let drinkName;
let dessertName;

let mealPrice;
let drinkPrice;
let dessertPrice;

let clientName;
let clientAdress;

function selectMeal (mealClass, displayName, price) {
    receivedMeal = mealClass;
    mealName = displayName;
    mealPrice = price;

    const dontDisplayBorder = document.querySelector(".meal-options .selected");
    const dontDisplayIcon = document.querySelector(".meal-options .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(mealClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".meal-options .selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function selectDrink (drinkClass, displayName, price) {

    receivedDrink = drinkClass;
    drinkName = displayName;
    drinkPrice = price;

    const dontDisplayBorder = document.querySelector(".drink-options .selected");
    const dontDisplayIcon = document.querySelector(".drink-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(drinkClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".drink-options .selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function selectDessert (dessertClass, displayName, price) {

    receivedDessert = dessertClass;
    dessertName = displayName;
    dessertPrice = price;

    const dontDisplayBorder = document.querySelector(".dessert-options .selected");
    const dontDisplayIcon = document.querySelector(".dessert-options  .selected ion-icon");

    if (dontDisplayBorder !== null){
        dontDisplayBorder.classList.remove("selected");
        dontDisplayIcon.classList.add("hide-icon");
    }
    
    let displayBorder = document.querySelector(dessertClass);
    displayBorder.classList.add("selected");

    let displayIcon = document.querySelector(".dessert-options .selected ion-icon");
    displayIcon.classList.remove("hide-icon");

    send();
}

function send () {

    if (receivedMeal !== undefined && receivedDrink !== undefined && receivedDessert !== undefined){
        let sendButton = document.querySelector("footer button");
        sendButton.classList.add("active-button");

        let sendToWhatsapp = document.querySelector("footer button");
        sendToWhatsapp.innerHTML = "Fechar Pedido";

    }

}

function confirmationBonus() {
    let confirmation = document.querySelector(".confirmation-screen");
    confirmation.classList.remove("hide-confirmation");

    let finalPriceSum = parseFloat(mealPrice) + parseFloat(drinkPrice) + parseFloat(dessertPrice);
    let finalPrice = finalPriceSum.toFixed(2);


    let confMeal = document.querySelector(".conf-meal");
        confMeal.innerHTML ="<span>" + mealName + "</span> <span>" + mealPrice.toFixed(2) + "</span>";

    let confDrink = document.querySelector(".conf-drink");
        confDrink.innerHTML ="<span>" + drinkName + "</span> <span>" + drinkPrice.toFixed(2) + "</span>";
    
    let confDessert = document.querySelector(".conf-dessert");
        confDessert.innerHTML ="<span>" + dessertName + "</span> <span>" + dessertPrice.toFixed(2) + "</span>";

    let confTotal = document.querySelector(".conf-total");
        confTotal.innerHTML ="<span>TOTAL</span> <span>R&dollar;" + finalPrice + "</span>";


    let finalMessage = "Olá, gostaria de fazer o pedido: \n\ - Prato: " + mealName + "\n\ - Bebida: " + drinkName + "\n\ - Sobremesa: " + dessertName + "\n\Total: R$" + finalPrice;
    finalMessage = encodeURIComponent(finalMessage);
    whatsappLink = "'https://wa.me/5521999989398?text="+ finalMessage + "'";

    let sendToWhatsapp = document.querySelector(".confirmation-box button");
        sendToWhatsapp.innerHTML = "<a id='sending' href=" + whatsappLink + ">Fechar Pedido</a>";
}

function messageBonus (){
    clientName = prompt("Qual é o seu nome?");
    clientAdress = prompt("Qual é o endereço de entrega?");

    let finalPriceSum = parseFloat(mealPrice) + parseFloat(drinkPrice) + parseFloat(dessertPrice);
    let finalPrice = finalPriceSum.toFixed(2);
    let finalMessage = "Olá, gostaria de fazer o pedido: \n\ - Prato: " + mealName + "\n\ - Bebida: " + drinkName + "\n\ - Sobremesa: " + dessertName + "\n\Total: R$" + finalPrice + "\n \nNome: " + clientName + "\n\Endereço: " + clientAdress;
        finalMessage = encodeURIComponent(finalMessage);
    document.getElementById("sending").href = "https://wa.me/5521999999999?text="+ finalMessage;
}

function back (){
    let confirmation = document.querySelector(".confirmation-screen");
    confirmation.classList.add("hide-confirmation");
}

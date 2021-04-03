let receivedMeal;
let receivedDrink;
let receivedDessert;

let mealName;
let drinkName;
let dessertName;

let mealPrice;
let drinkPrice;
let dessertPrice;

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
        let sendButtonLink = document.querySelector("footer button a");
        sendButtonLink.innerHTML = "Fechar Pedido";
    }
}

let clientName;
let clientAdress;

function messageBonus (){
    clientName = prompt("Qual é o seu nome?");
    clientAdress = prompt("Qual é o endereço de entrega?");

    message();

    // && clientName!== undefined && clientAdress !== undefined 
    // + "\n \nNome: " + clientName + "\n\Endereço: " + clientAdress

}

function message (){

    if (receivedMeal !== undefined && receivedDrink !== undefined && receivedDessert !== undefined && mealPrice !== undefined && drinkPrice !== undefined && dessertPrice !== undefined){
        let finalPriceSum = parseFloat(mealPrice) + parseFloat(drinkPrice) + parseFloat(dessertPrice);
        let finalPrice = finalPriceSum.toFixed(2);
        let finalMessage = "Olá, gostaria de fazer o pedido: \n\ - Prato: " + mealName + "\n\ - Bebida: " + drinkName + "\n\ - Sobremesa: " + dessertName + "\n\Total: R$" + finalPrice;
        finalMessage = encodeURIComponent(finalMessage);
        whatsappLink = "'https://wa.me/5521999989398?text="+ finalMessage + "'";

        let sendToWhatsapp = document.querySelector("footer button");
            sendToWhatsapp.innerHTML = "<a href=" + whatsappLink + ">Fechar Pedido</a>";
    }
}

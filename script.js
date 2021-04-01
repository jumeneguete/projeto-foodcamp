function select () {
    const selecionado = document.querySelector(".options li");
    selecionado.classList.add("selected");

    const selecionado1 = document.querySelector("ion-icon");
    selecionado1.classList.remove("selected-icon");

}

/*function mostrarLegenda() {
    var div = document.getElementById("MostraLegenda");

    if (div.style.display == 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}*/
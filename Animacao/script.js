function virarCarta(id) {

    const carta = document.getElementById(id);

    carta.classList.remove("desvirando");

    void carta.offsetWidth;

    carta.classList.add("virando");
}


function desvirarCarta(id) {

    const carta = document.getElementById(id);

    carta.classList.remove("virando");

    void carta.offsetWidth;

    carta.classList.add("desvirando");
}
let temasAbiertos = false;

window.toggleTemas = function(){

    const contenedor =
    document.getElementById(
        "temasOcultos"
    );

    const boton =
    document.getElementById(
        "btnVerTemas"
    );

    temasAbiertos =
    !temasAbiertos;

    if(temasAbiertos){

        contenedor.style.display =
        "block";

        boton.textContent =
        "Ocultar temas";

    }else{

        contenedor.style.display =
        "none";

        boton.textContent =
        "Ver todos los temas";

    }

};

let temasAbiertos = false;

let contadorToques = 0;

window.toqueLogoEscuela = function(){

    contadorToques++;

      if(contadorToques >= 5){

        document
        .getElementById(
            "panelAdminEscuela"
        )
        .style.display = "block";

        contadorToques = 0;

    }

};

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

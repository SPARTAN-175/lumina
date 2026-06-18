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

window.publicarTema = async function(){

    const titulo =
    document.getElementById(
        "tituloTema"
    ).value.trim();

    const versiculo =
    document.getElementById(
        "versiculoTema"
    ).value.trim();

    const textoVersiculo =
    document.getElementById(
        "textoVersiculoTema"
    ).value.trim();

    const resumen =
    document.getElementById(
        "resumenTema"
    ).value.trim();

    const actividad =
    document.getElementById(
        "actividadTema"
    ).value.trim();

    if(
        !titulo ||
        !versiculo ||
        !textoVersiculo ||
        !resumen ||
        !actividad
    ){

        alert(
            "Completa todos los campos"
        );

        return;

    }

    await addDoc(

        collection(
            db,
            "temas_escuela"
        ),

        {
            titulo,
            versiculo,
            textoVersiculo,
            resumen,
            actividad,
            fecha: Date.now()
        }

    );

    alert(
        "Tema publicado correctamente"
    );

    document.getElementById(
        "panelAdminEscuela"
    ).style.display = "none";

};












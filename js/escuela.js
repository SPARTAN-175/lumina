window.mostrarTodos = false;

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

    const estadoActual =
    localStorage.getItem(
        "mostrarTodosTemas"
    ) === "true";

    localStorage.setItem(

        "mostrarTodosTemas",

        !estadoActual

    );

    location.reload();

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




/*window.cargarTemas = function(){

    const consulta = window.query(

    window.collection(
        window.db,
        "temas_escuela"
    ),

    window.orderBy(
        "fecha",
        "desc"
    )

);

    window.onSnapshot(
        consulta,
        (snapshot)=>{

            console.log(
                "Temas encontrados:",
                snapshot.size
            );

        }
    );

};*/


//cargarTemas();










const parametros =
new URLSearchParams(
window.location.search
);

const idTema =
parametros.get("id");

console.log(
    "ID recibido:",
    idTema
);

console.log(
    "dbTema:",
    window.dbTema
);

console.log(
    "getDocTema:",
    window.getDocTema
);

console.log(
    "docTema:",
    window.docTema
);

async function cargarTema(){

    if(!idTema){
        return;
    }

   const documento =
await window.getDocTema(

    window.docTema(
        window.dbTema,
        "temas_escuela",
        idTema
    )

);

    if(!documento.exists()){

        console.log(
            "Tema no encontrado"
        );

        return;

    }

    const tema =
    documento.data();

    document.getElementById(
        "tituloTema"
    ).textContent =
    tema.titulo;

    document.getElementById(
        "referenciaVersiculo"
    ).textContent =
    tema.versiculo;

    document.getElementById(
        "textoVersiculo"
    ).textContent =
    tema.textoVersiculo;

    document.getElementById(
        "resumenTema"
    ).textContent =
    tema.resumen;

    document.getElementById(
        "actividadTema"
    ).textContent =
    tema.actividad;

}

cargarTema();

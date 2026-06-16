/* ======================================
   NAVEGACIÓN ENTRE PANTALLAS
====================================== */
window.verComentarios = function(){

    document
    .querySelector(".card")
    .style.display = "none";

    document
    .querySelector("header")
    .style.display = "none";

    document
    .getElementById("menuInferior")
    .style.display = "none";

    document
    .getElementById(
        "pantallaComentarios"
    )
    .style.display = "block";

    document
    .getElementById(
        "barraComentario"
    )
    .style.display = "flex";

};
    
window.volverInicio = function(){

    document
    .querySelector(".card")
    .style.display = "block";

    document
    .querySelector("header")
    .style.display = "block";

    document
    .getElementById("menuInferior")
    .style.display = "flex";

    document
    .getElementById(
        "pantallaComentarios"
    )
    .style.display = "none";

    document
    .getElementById(
        "barraComentario"
    )
    .style.display = "none";

};

/* ======================================
   MENÚ INFERIOR
====================================== */

window.irInicio = function(){

    volverInicio();

};

window.proximamente = function(){

    alert(
      "🚧 Próximamente disponible"
    );

};

window.irUltimoComentario = function(){

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    document
    .getElementById(
        "nuevoComentario"
    )
    .style.display = "none";

};

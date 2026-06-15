/* ======================================
   NAVEGACIÓN ENTRE PANTALLAS
====================================== */

window.verComentarios = function(){

    document
    .querySelector(".card")
    .style.display = "none";

    document
    .getElementById(
        "pantallaComentarios"
    )
    .style.display = "block";

};


window.volverInicio = function(){

    document
    .querySelector(".card")
    .style.display = "block";

    document
    .getElementById(
        "pantallaComentarios"
    )
    .style.display = "none";

};


window.verComentarios =
    verComentarios;

window.volverInicio =
    volverInicio;

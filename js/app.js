/* ======================================
   NAVEGACIÓN ENTRE PANTALLAS
====================================== */

window.verComentarios = function(){

   alert("verComentarios fue ejecutado");
   alert("Entré a comentarios");
    document
    .querySelector(".card")
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



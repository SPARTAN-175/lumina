/* ======================================
   NAVEGACIÓN ENTRE PANTALLAS
====================================== */

    window.verComentarios = function(){
       
   /* alert("verComentarios fue ejecutado");
   alert("Entré a comentarios");*/
       
    document
    .querySelector(".card")
    .style.display = "none";

    document
    .querySelector("header")
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
    .style.display = "";

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

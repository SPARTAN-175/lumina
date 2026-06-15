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

   console.log(
  document.querySelector("header")
);
   
    document
    .querySelector("header")
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

    const comentarios =
    document.getElementById(
        "listaComentariosCompleta"
    );

    comentarios.lastElementChild
    ?.scrollIntoView({
        behavior:"smooth"
    });

    document
    .getElementById(
        "nuevoComentario"
    )
    .style.display = "none";

};

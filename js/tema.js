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




let temaActual;

if(tema === "fe"){

    temaActual = {

        titulo:
        "¿Qué es la fe?",

        versiculo:
        "Hebreos 11:1",

        textoVersiculo:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",

        resumen:
        "La fe es confiar en Dios incluso cuando no podemos ver el resultado. Es una convicción firme basada en las promesas de Dios.",

        actividad:
        "Escribe una situación en la que hayas necesitado confiar en Dios sin ver una respuesta inmediata.",

        comentarioAutor:
        "Carlos",

        comentarioTexto:
        "Este tema me ayudó mucho."

    };

}

else if(tema === "jesus"){

    temaActual = {

        titulo:
        "¿Quién es Jesús?",

        versiculo:
        "Juan 14:6",

        textoVersiculo:
        "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre sino por mí.",

        resumen:
        "Jesús es el Hijo de Dios y el Salvador del mundo. A través de Él tenemos acceso al Padre.",

        actividad:
        "Reflexiona sobre lo que significa seguir a Jesús en tu vida diaria.",

        comentarioAutor:
        "María",

        comentarioTexto:
        "Me gustó mucho aprender más sobre Jesús."

    };

}

else if(tema === "oracion"){

    temaActual = {

        titulo:
        "La oración",

        versiculo:
        "Mateo 6",

        textoVersiculo:
        "Jesús enseñó a sus discípulos a orar con sinceridad y confianza en Dios.",

        resumen:
        "La oración es la comunicación directa con Dios y una parte fundamental de la vida cristiana.",

        actividad:
        "Dedica unos minutos para agradecer a Dios y presentar tus peticiones.",

        comentarioAutor:
        "José",

        comentarioTexto:
        "La oración fortalece nuestra relación con Dios."

    };

}

if(!temaActual){

    console.log(
        "Tema aún no cargado"
    );

}


document.getElementById(
    "tituloTema"
).textContent =
temaActual.titulo;

document.getElementById(
    "referenciaVersiculo"
).textContent =
temaActual.versiculo;

document.getElementById(
    "textoVersiculo"
).textContent =
temaActual.textoVersiculo;

document.getElementById(
    "resumenTema"
).textContent =
temaActual.resumen;

document.getElementById(
    "actividadTema"
).textContent =
temaActual.actividad;

document.getElementById(
    "ultimoComentarioAutor"
).textContent =
temaActual.comentarioAutor;

document.getElementById(
    "ultimoComentarioTexto"
).textContent =
temaActual.comentarioTexto;

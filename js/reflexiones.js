/* ======================================
   REFLEXIÓN DEL DÍA
====================================== */

window.cargarReflexion = async function(){

    const referencia =
        doc(db,"reflexion_actual","actual");

    const documento =
        await getDoc(referencia);

    if(documento.exists()){

        const datos = documento.data();

        document.getElementById("versiculo")
        .textContent = datos.versiculo;

        document.getElementById("texto")
        .textContent = datos.texto;

        document.getElementById("pregunta")
        .textContent =
        "❓ " + datos.pregunta;

        document.getElementById(
            "versiculoFijo"
        ).textContent =
        datos.versiculo;

        document.getElementById(
            "preguntaFija"
        ).textContent =
        "❓ " + datos.pregunta;

    }

};

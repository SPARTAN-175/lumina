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

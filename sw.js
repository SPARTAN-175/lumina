const CACHE_NAME = "lumina-v1";

const archivos = [

  "/",
  "/index.html",
  "/escuela.html",
  "/tema.html",
  "/chatTema.html",
  "/css/estilos.css",
  "/js/navegacion.js",
  "/js/escuela.js"

];

self.addEventListener(
    "install",
    (evento)=>{

        evento.waitUntil(

            caches.open(
                CACHE_NAME
            )
            .then((cache)=>{

                return cache.addAll(
                    archivos
                );

            })

        );

    }
);

self.addEventListener(
    "fetch",
    (evento)=>{

        evento.respondWith(

            caches.match(
                evento.request
            )
            .then((respuesta)=>{

                return (
                    respuesta ||
                    fetch(
                        evento.request
                    )
                );

            })

        );

    }
);

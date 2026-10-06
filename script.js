
const GOOGLE_REVIEW_URL =
    "https://search.google.com/local/writereview?placeid=ChIJjWb308nHBZEROXhdK-NPFRI";

const inicio =
    document.getElementById("inicio");

const formulario =
    document.getElementById("formulario");

const gracias =
    document.getElementById("gracias");

const btnBueno =
    document.getElementById("btnBueno");

const btnProblema =
    document.getElementById("btnProblema");

const volver =
    document.getElementById("volver");

const volverInicio =
    document.getElementById("volverInicio");

const formIncidente =
    document.getElementById("formIncidente");

const mensaje =
    document.getElementById("mensaje");

const contador =
    document.getElementById("contador");


// ========================================
// CAMBIAR PANTALLA
// ========================================

function mostrarPantalla(pantalla) {

    inicio.classList.remove("activa");
    formulario.classList.remove("activa");
    gracias.classList.remove("activa");

    pantalla.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// BOTÓN VERDE
// ========================================

btnBueno.addEventListener("click", () => {

    window.location.href = GOOGLE_REVIEW_URL;

});


// ========================================
// BOTÓN ROJO
// ========================================

btnProblema.addEventListener("click", () => {

    mostrarPantalla(formulario);

});


// ========================================
// VOLVER
// ========================================

volver.addEventListener("click", () => {

    mostrarPantalla(inicio);

});


// ========================================
// CONTADOR
// ========================================

mensaje.addEventListener("input", () => {

    contador.textContent =
        mensaje.value.length;

});


// ========================================
// ENVIAR FORMULARIO
// ========================================

formIncidente.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const datos = {

            nombre:
                document.getElementById("nombre").value,

            sede:
                document.getElementById("sede").value,

            tipo:
                document.getElementById("tipo").value,

            mensaje:
                document.getElementById("mensaje").value,

            contacto:
                document.getElementById("contacto").value,

            fecha:
                new Date().toISOString()

        };


        console.log(
            "Nuevo comentario:",
            datos
        );


        /*
        AQUÍ SE CONECTARÁ CON TU BASE DE DATOS.

        Por ejemplo:

        Supabase
        Firebase
        Tu propio servidor/API

        El objeto "datos" contiene toda
        la información del incidente.
        */


        formIncidente.reset();

        contador.textContent = "0";

        mostrarPantalla(gracias);

    }
);


// ========================================
// VOLVER AL INICIO
// ========================================

volverInicio.addEventListener(
    "click",
    () => {

        mostrarPantalla(inicio);

    }
);
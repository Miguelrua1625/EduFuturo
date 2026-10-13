document.addEventListener("DOMContentLoaded", function () {
const botonPostula = document.querySelector("#menu button");
const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

botonPostula.addEventListener("click", function () {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });

    campoNombre.focus();
});


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value;

if (nombre === "" || correo === "" || carrera === "") {
    mensaje.textContent = "Por favor completa todos los campos";
    return;
}

mensaje.textContent =
    "¡Gracias, " + nombre +
    "! Tu postulación para " + carrera +
    " ha sido registrada correctamente";

    mensaje.style.color = "#16803c";

    formulario.reset();
});


const tarjetas = document.querySelectorAll(".cartas");
tarjetas.forEach(function (tarjeta) {
    const boton = tarjeta.querySelector("button");

boton.addEventListener("click", function () {
const titulo = tarjeta.querySelector("h3").textContent;
const descripcion = tarjeta.querySelector("p").textContent;
    alert(titulo + "\n\n" + descripcion);
    });
});

});

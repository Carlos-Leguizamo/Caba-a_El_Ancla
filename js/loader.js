// Esperar a que se cargue completamente el documento
document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el loader después de 2 segundos
    setTimeout(function () {
        document.getElementById("onload").style.display = "none";
        document.body.classList.remove("hidden");
    }, 2000); // 4000 milisegundos = 4 segundos
});


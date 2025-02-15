// Abrir el modal de firma
document.getElementById("openModal").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("firmaModal").classList.remove("hidden");
});

// Firmar el documento, cerrar el modal y redirigir
document.getElementById("firmarBtn").addEventListener("click", function () {
    document.getElementById("firmaModal").classList.add("hidden"); // Ocultar modal

    // Agregar un pequeño retraso para que el modal se cierre antes de la redirección
    setTimeout(function () {
        window.location.href = "contrato-generado.html";
    }, 500); // 0.5 segundos de espera
});

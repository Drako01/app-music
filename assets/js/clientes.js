// Asegurar que Alpine ya está cargado antes de usarlo
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("volverInicio").addEventListener("click", function () {

        // ✅ Muestra la notificación
        if (window.Alpine && Alpine.store("notification")) {
            Alpine.store("notification").showMessage("✅ Redirigiendo a Inicio. Aguarde...");
        } else {
            console.error("❌ Error: Alpine Store 'notification' no está disponible");
        }

        // ✅ Redirige después de 2.5 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2500);
    });

});


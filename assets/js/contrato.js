// Asegurar que Alpine ya está cargado antes de usarlo
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("clientesFelices").addEventListener("click", function () {

        // ✅ Muestra la notificación
        if (window.Alpine && Alpine.store("notification")) {
            Alpine.store("notification").showMessage("✅ Redirigiendo. Aguarde...");
        } else {
            console.error("❌ Error: Alpine Store 'notification' no está disponible");
        }

        // ✅ Redirige después de 2.5 segundos
        setTimeout(() => {
            window.location.href = "clientes-felices.html";
        }, 2500);
    });

});


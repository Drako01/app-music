document.getElementById("btnAceptarLegal").addEventListener("click", function () {
    document.getElementById("section-mail").classList.remove("hidden");
    document.getElementById("aceptado").classList.add("hidden");

});

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("irAMail").addEventListener("click", function () {

        // ✅ Muestra la notificación
        if (window.Alpine && Alpine.store("notification")) {
            Alpine.store("notification").showMessage("✅ Redirigiendo. Aguarde...");
        } else {
            console.error("❌ Error: Alpine Store 'notification' no está disponible");
        }

        // ✅ Redirige después de 2.5 segundos
        setTimeout(() => {
            window.location.href = "mail.html";
        }, 2500);
    });

});

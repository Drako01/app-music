if (window.Alpine) {
    Alpine.store("notification", {
        show: false,
        message: "",

        showMessage(msg) {
            this.message = msg;
            this.show = true; // ✅ Hace visible la notificación

            console.log("🔔 Notificación activada:", msg);

            // ✅ Mantenemos el mensaje visible por 2 segundos
            setTimeout(() => {
                this.show = false;
                // ✅ Esperamos 1/2 segundo más antes de redirigir
                setTimeout(() => {
                    window.location.href = "seleccion.html";
                }, 500);
            }, 2000);
        },
    });

    console.log("✅ Store de notificaciones creado correctamente");

} else {
    console.error("❌ Error: Alpine.js no está cargado antes de inicializar el store.");
}




// Asegurar que Alpine ya está cargado antes de usarlo
document.addEventListener("DOMContentLoaded", function () {
    console.log("🖊️ Listo para manejar eventos");

    document.getElementById("openModal").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("firmaModal").classList.remove("hidden");
    });

    document.getElementById("firmarBtn").addEventListener("click", function () {
        

        document.getElementById("firmaModal").classList.add("hidden"); // Cierra el modal

        localStorage.removeItem("cart");

        // ✅ Espera un breve momento antes de mostrar la notificación
        setTimeout(() => {
            if (window.Alpine && Alpine.store("notification")) {
                console.log("✅ Mostrando mensaje de notificación...");
                Alpine.store("notification").showMessage("✅ Redirigigendo a Escribano Digital para Logueo. Aguarde...");
            } else {
                console.error("❌ Error: Alpine Store 'notification' no está disponible");
            }
        }, 500);
    });


});

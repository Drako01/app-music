document.getElementById("btnAceptarLegal").addEventListener("click", function () {
    Alpine.store('notification').showMessage("✅ Usted aceptó las condiciones. Generando contrato...");
    setTimeout(function () {
        window.location.href = "/contrato-generado.html";
    }, 2000);
});
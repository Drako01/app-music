function actualizarValores() {
    const porcentaje = document.getElementById("porcentaje").value;
    let duracion = document.getElementById("duracion").value;
    const porVida = document.getElementById("porVida").checked;
    const valor = document.getElementById("valor").value;

    // Si el checkbox "Por vida" está marcado, lo agregamos
    if (porVida) {
        duracion = "Por vida";
    }

    // Insertar en la tabla
    document.getElementById("seleccionPorcentaje").innerText = porcentaje;
    document.getElementById("seleccionDuracion").innerText = duracion;
    document.getElementById("seleccionValor").innerText = valor;

    // Guardar en LocalStorage
    const order = { porcentaje, duracion, valor };
    localStorage.setItem("order", JSON.stringify(order));
}

// Recuperar datos de LocalStorage si existen
function cargarValoresGuardados() {
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    if (savedOrder) {
        document.getElementById("porcentaje").value = savedOrder.porcentaje;
        document.getElementById("duracion").value = savedOrder.duracion;
        document.getElementById("valor").value = savedOrder.valor;

        document.getElementById("seleccionPorcentaje").innerText = savedOrder.porcentaje;
        document.getElementById("seleccionDuracion").innerText = savedOrder.duracion;
        document.getElementById("seleccionValor").innerText = savedOrder.valor;
    }
}

// Detectar cambios en los selects y checkbox
document.getElementById("porcentaje").addEventListener("change", actualizarValores);
document.getElementById("duracion").addEventListener("change", actualizarValores);
document.getElementById("porVida").addEventListener("change", actualizarValores);
document.getElementById("valor").addEventListener("change", actualizarValores);

// Cargar valores guardados al iniciar
cargarValoresGuardados();

// Botón Aceptar con mensaje y redirección
document.getElementById("btnAceptar").addEventListener("click", function () {
    Alpine.store('notification').showMessage("✅ Usted aceptó la publicación, redireccionando...");
    setTimeout(function () {
        window.location.href = "/finally.html";
    }, 2000);
});
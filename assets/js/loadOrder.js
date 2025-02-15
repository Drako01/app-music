document.addEventListener("DOMContentLoaded", function () {
    // Verificar si hay datos guardados en localStorage bajo la clave 'order'
    const orderData = localStorage.getItem("order");

    if (orderData) {
        // Convertir de string a objeto JSON
        const order = JSON.parse(orderData);

        // Insertar datos en la tabla
        document.getElementById("tdPorcentaje").innerText = order.porcentaje || "N/A";
        document.getElementById("tdDuracion").innerText = order.duracion || "N/A";
        document.getElementById("tdValor").innerText = order.valor || "N/A";
    } else {
        console.warn("No hay datos guardados en localStorage con la clave 'order'.");
    }
});

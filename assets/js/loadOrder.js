document.addEventListener("DOMContentLoaded", function () {
    // Obtener datos guardados en localStorage
    const orderData = localStorage.getItem("order");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const listaComprada = document.getElementById('listaComprada');

    if (orderData) {
        const order = JSON.parse(orderData);

        cart.forEach(element => {
            // Crear un contenedor div para cada item y su tabla
            const div = document.createElement('div');
            div.classList.add("flex", "items-center", "justify-between", "mb-4" , "encolumna");

            // Crear el elemento <li>
            const li = document.createElement('li');
            li.innerHTML = `(${element.type.toUpperCase()}): ${element.title}`;
            li.classList.add("text-lg", "font-semibold", "text-white", "mr-6"); // Espaciado entre la lista y la tabla

            // Crear la tabla de condiciones
            const table = document.createElement('table');
            table.classList.add("border", "border-gray-600", "text-center", "w-1/2");

            table.innerHTML = `
                <tr>
                    <td class="p-2 border border-gray-600 bg-green-600 text-lg">${order.porcentaje || "N/A"}</td>
                    <td class="p-2 border border-gray-600 bg-green-600 text-lg">${order.duracion || "N/A"}</td>
                    <td class="p-2 border border-gray-600 bg-green-600 text-lg">${order.valor || "N/A"}</td>
                </tr>
            `;

            // Agregar el <li> y la tabla al contenedor
            div.appendChild(li);
            div.appendChild(table);

            // Agregar el contenedor a la lista
            listaComprada.appendChild(div);
        });

    } else {
        console.warn("No hay datos guardados en localStorage con la clave 'order'.");
    }
});

const servicios = {
    diseñoPost: {
        nombre: "Diseño de Post",
        precio: 35
    },
    diseñoWeb: {
        nombre: "Diseño Web",
        precio: 400
    },
    manejoRedes: {
        nombre: "Manejo de Redes",
        precio: 100
    }
};

let serviciosSeleccionados = [];

function calcularCostoTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = "";

    let costoTotal = 0;

    const checkboxDiseñoPost = document.getElementById("diseñoPost");
    if (checkboxDiseñoPost.checked) {
        costoTotal += servicios.diseñoPost.precio;
        serviciosSeleccionados.push({ nombre: servicios.diseñoPost.nombre, precio: servicios.diseñoPost.precio });
    }

    const checkboxDiseñoWeb = document.getElementById("diseñoWeb");
    if (checkboxDiseñoWeb.checked) {
        costoTotal += servicios.diseñoWeb.precio;
        serviciosSeleccionados.push({ nombre: servicios.diseñoWeb.nombre, precio: servicios.diseñoWeb.precio });
    }

    const checkboxManejoRedes = document.getElementById("manejoRedes");
    if (checkboxManejoRedes.checked) {
        costoTotal += servicios.manejoRedes.precio;
        serviciosSeleccionados.push({ nombre: servicios.manejoRedes.nombre, precio: servicios.manejoRedes.precio });
    }

    if (costoTotal > 0) {
        mostrarCarrito();
        mostrarTotal(costoTotal);
        actualizarContadorCarrito();
    } else {
        resetearCarrito();
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = "No has seleccionado ningún servicio.";
    }
}

function mostrarCarrito() {
    const tablaCarrito = document.getElementById("tablaCarrito");
    tablaCarrito.innerHTML = "";

    serviciosSeleccionados.forEach(servicio => {
        const row = tablaCarrito.insertRow();
        const cellNombre = row.insertCell(0);
        const cellPrecio = row.insertCell(1);

        cellNombre.textContent = servicio.nombre;
        cellPrecio.textContent = `$${servicio.precio}`;
    });
}

function mostrarTotal(total) {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total a Pagar: $${total}`;
}

function actualizarContadorCarrito() {
    const contadorCarritoElement = document.getElementById("contadorCarrito");
    contadorCarritoElement.textContent = `Items en el carrito: ${serviciosSeleccionados.length}`;
}

function resetearCarrito() {
    serviciosSeleccionados = [];
    const tablaCarrito = document.getElementById("tablaCarrito");
    tablaCarrito.innerHTML = "";
}

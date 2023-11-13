// Requerimiento 1: Estructura HTML del proyecto.
// Requerimiento 2: Variables de JS necesarias.
// Requerimiento 4: Objetos de JS.
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

// Requerimiento adicional: Arrays y Métodos de búsqueda y filtrado sobre el Array.
const serviciosSeleccionados = [];

// Requerimiento 3: Funciones esenciales del proceso a simular.
// Requerimiento 5: Salida de resultados por console.log.
function calcularCostoTotal() {
    let costoTotal = 0;

    const checkboxDiseñoPost = document.getElementById("diseñoPost");
    if (checkboxDiseñoPost.checked) {
        costoTotal += servicios.diseñoPost.precio;
        serviciosSeleccionados.push(servicios.diseñoPost.nombre);
    }

    const checkboxDiseñoWeb = document.getElementById("diseñoWeb");
    if (checkboxDiseñoWeb.checked) {
        costoTotal += servicios.diseñoWeb.precio;
        serviciosSeleccionados.push(servicios.diseñoWeb.nombre);
    }

    const checkboxManejoRedes = document.getElementById("manejoRedes");
    if (checkboxManejoRedes.checked) {
        costoTotal += servicios.manejoRedes.precio;
        serviciosSeleccionados.push(servicios.manejoRedes.nombre);
    }

    // Requerimiento adicional: Console.log para mostrar servicios seleccionados.
    console.log("Servicios seleccionados:", serviciosSeleccionados);

    if (costoTotal > 0) {
        if (costoTotal >= 400) {
            // Requerimiento 6: Descuentos adicionales y Salida en HTML.
            const resultadoAdicionalElement = document.getElementById("resultadoAdicional");
            resultadoAdicionalElement.textContent = `Costo total con descuento adicional: $${calcularDescuentoAdicional(costoTotal)}`;
        }

        // Requerimiento 5: Salida de resultados por console.log.
        console.log("Costo total:", costoTotal);

        // Requerimiento 5: Salida de resultados en HTML.
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = `Costo total: $${costoTotal}`;
    } else {
        // Requerimiento 5: Salida de resultados en HTML.
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = "No has seleccionado ningún servicio.";
    }
}

// Requerimiento 7: Funciones y/o métodos para realizar operaciones.
function calcularDescuentoAdicional(costoTotal) {
    if (costoTotal >= 500) {
        return costoTotal - 50;
    } else if (costoTotal >= 400) {
        return costoTotal - 30;
    } else {
        return costoTotal;
    }
}

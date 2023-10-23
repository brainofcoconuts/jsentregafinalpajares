
alert
pedirNombre();
const MIN_PRICE = 400;
let precioDiseñoPost = 35;
let precioDiseñoWeb = 399;
let precioManejoDeRedes = 100;

function pedirNombre() {
    let nombreIngresado = prompt("Por favor, ingresa tu nombre:");
    alert("Hola, " + nombreIngresado + "! Bienvenido a nuestro servicio de diseño y manejo de redes.");
}

function saludar() {
    let nombre = "Jorge Pajares"; 
    console.log(nombre);
}

function calcularCostoTotal() {
    let costoTotal = 0;

    while (costoTotal === 0) {
        const checkboxDiseñoPost = document.getElementById("diseñoPost");
        if (checkboxDiseñoPost.checked) {
            costoTotal += precioDiseñoPost;
            console.log("Diseño de Post seleccionado. Costo añadido: " + precioDiseñoPost);
        }

        const checkboxDiseñoWeb = document.getElementById("diseñoWeb");
        if (checkboxDiseñoWeb.checked) {
            costoTotal += precioDiseñoWeb;
            console.log("Diseño Web seleccionado. Costo añadido: " + precioDiseñoWeb);
        }

        const checkboxManejoRedes = document.getElementById("manejoRedes");
        if (checkboxManejoRedes.checked) {
            costoTotal += precioManejoDeRedes;
            console.log("Manejo de Redes seleccionado. Costo añadido: " + precioManejoDeRedes);
        }
    }

    switch (true) {
        case costoTotal >= 400:
            costoTotal *= Math.floor(0.95);
            console.log("Se aplicó un descuento del 5%.");
            break;
        case costoTotal < 400:
            costoTotal *= 1;
            console.log("Sin descuento");
            break;
    }

    if (costoTotal > 0) {
        if (costoTotal >= MIN_PRICE) {
            document.getElementById("resultadoAdicional").textContent = "¡Obtuviste un 5% de descuento!";
        } else if (costoTotal <= MIN_PRICE) {
            document.getElementById("resultadoAdicional").textContent = "Completa $400 y obtén un descuento especial";
        }
        document.getElementById("resultado").textContent = `Costo total: $${costoTotal}`;
    } else {
        document.getElementById("resultado").textContent = "No has seleccionado ningún servicio.";
    }
}
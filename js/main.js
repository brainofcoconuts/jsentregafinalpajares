let carrito = [];

// Función para agregar un servicio al carrito
function agregarAlCarrito(servicio, descripcion, precio, cantidadInputId) {
  const cantidad = parseInt(document.getElementById(cantidadInputId).value);

  // Verificar si la cantidad es válida
  if (isNaN(cantidad) || cantidad <= 0 || cantidad > 10) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, ingrese una cantidad válida (entre 1 y 10).',
    });
    return;
  }

  const total = precio * cantidad;

  // Crear objeto de servicio
  const nuevoServicio = {
    servicio: servicio,
    descripcion: descripcion,
    precio: precio,
    cantidad: cantidad,
    total: total.toFixed(2),
  };

  // Agregar al carrito
  carrito.push(nuevoServicio);

  // Actualizar la visualización del carrito
  mostrarCarrito();
}

// Función para mostrar el carrito en la página
function mostrarCarrito() {
  const listaCarrito = document.getElementById("listaCarrito");
  const tablaCarrito = document.getElementById("tablaCarrito");
  const totalElement = document.getElementById("total");

  // Limpiar la lista y la tabla
  listaCarrito.innerHTML = "";
  tablaCarrito.innerHTML = "";

  // Calcular el total del carrito
  let totalCarrito = 0;

  // Recorrer el carrito
  carrito.forEach((item, index) => {
    totalCarrito += parseFloat(item.total);

    // Agregar elemento a la lista
    const listItem = document.createElement("div");
    listItem.innerHTML = `<p>${item.servicio} - Cantidad: ${item.cantidad} - Total: $${item.total}</p>`;
    listaCarrito.appendChild(listItem);

    // Agregar fila a la tabla
    const row = tablaCarrito.insertRow();
    row.innerHTML = `
      <td>${item.servicio}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio.toFixed(2)}</td>
      <td>$${item.total}</td>
      <td><button class="btn btn-danger" onclick="quitarDelCarrito(${index})">Quitar</button></td>
    `;
  });

  // Mostrar el total
  totalElement.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

// Función para quitar un servicio del carrito
function quitarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Función para resetear el carrito
function resetearCarrito() {
  carrito = [];
  mostrarCarrito();
}

// Función para realizar la compra con SweetAlert
function realizarCompra() {
  // Verificar si el carrito está vacío
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, selecciona al menos un servicio antes de realizar la compra.',
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Compra realizada',
    text: 'Tu pedido ha sido enviado. Te contactaremos pronto.',
  });

  // Resetear el carrito después de la compra
  resetearCarrito();
}

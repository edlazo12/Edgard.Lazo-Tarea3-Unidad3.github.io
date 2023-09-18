function agregarAlCarrito(producto, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ producto, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoLista = document.getElementById('carrito-lista');
    const totalElemento = document.getElementById('total');

    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        carritoLista.appendChild(listItem);
        total += item.precio;
    });

    totalElemento.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito(); // Actualiza la vista del carrito
}

mostrarCarrito();
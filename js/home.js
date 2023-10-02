const pintarProductos = (data) => {
    const contenedor = document.querySelector('#contenedor-productos');

    data.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("offer-products");
        div.innerHTML += `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
                <button class="agregar" id="${producto.id}">Agregar al carrito</button>
        `
        contenedor.appendChild(div)
    });
};
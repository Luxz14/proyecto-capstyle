//Funcion para utilizar el DOM y pintar los productos de manera dinamica (pintarProductos)
const pintarProductos = (data) => {
    const contenedorProductos = document.querySelector('#contenedor-productos');
    contenedorProductos.innerHTML = "";

    data.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("offer-products");
        
        div.innerHTML += `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
                <button class="agregar" id="${producto.id}">Agregar al carrito</button>
        `
        contenedorProductos.appendChild(div);
    });
};
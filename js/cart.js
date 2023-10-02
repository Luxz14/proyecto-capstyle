let carrito = [];

const productoContenedor = document.querySelector('#contenedor-productos');

productoContenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('agregar')) {
        validarProductosCarrito(e.target.id);
    }
});

const validarProductosCarrito = (productoId) => {
    console.log(productos)
    const estaRepetido = carrito.some(producto => producto.id === productoId);

    if(!estaRepetido) {
        const producto = productos.find(producto => producto.id === productoId);
        console.log(producto)
        carrito.push(producto);
        console.log(carrito)
    } else {
        //Aumentamos la cantidad del producto en una unidad
    }
}
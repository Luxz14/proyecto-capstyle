//Generacion de variables, llamados utilizando querySelector y uso del localStorage obteniendo la clave carrito.

let carrito; //Variable del carrito

const cantidad = document.querySelector('.cantidad'); //Actualizar como se visualiza el numero de la cantidad de productos en el carrito

const productoContenedor = document.querySelector('#contenedor-productos'); //Obtener el id del producto a traves de los botones

let productosDelCarrito = localStorage.getItem("carrito"); //Obtener la clave de carrito

const botonesCategoria = document.querySelectorAll('.offer-caps') //Dividir los productos en base a las preferencias del usuario


//Actualizar el carrito para que los productos no se borren y la cantidad de productos en el carrito se mantenga en cualquier parte del website.
if(productosDelCarrito) {
    carrito = JSON.parse(productosDelCarrito);
    actualizarCantidad();
} else {
    carrito = [];
}


//Funcion para obtener el id de los productos a traves de los botones con las clases agregar
productoContenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('agregar')) {
        validarProductosCarrito(e.target.id);
    }
});


//Agregar productos al carrito, actualizar la cantidad y setearlos en el local storage.
const validarProductosCarrito = (productoId) => {
    const estaRepetido = carrito.some(producto => producto.id == productoId); //Buscar si algun producto esta repetido

    if(!estaRepetido) {
        const producto = productos.find(producto => producto.id == productoId);
        carrito.push(producto); //Luego de buscar ese producto en el array, si no esta repetido lo pusheamos al array carrito

        producto.cantidad = 1; //Seteamos la cantidad en 1(se ira modificando en base a la cantidad de productos del usuario)
        
    } else {
        const productoRepetido = carrito.find(producto => producto.id == productoId);
        productoRepetido.cantidad++; //Si esta repetido sumamos la cantidad
    }

    actualizarCantidad(); //Llamamos a la funcion para actualizar el numero de los productos del carrito

    localStorage.setItem("carrito", JSON.stringify(carrito)); //Seteamos en el localStorage con la clave carrito y utilizando el metodo stringify.
}


//Funcion para filtrar productos (Incompleto)
botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const productosSeleccionados = productos.filter(producto => producto.tipo == e.currentTarget.id);
        pintarProductos(productosSeleccionados);
    })
})


//Funcion para actualizar el numero de la cantidad de productos del carrito
function actualizarCantidad() {
    let nuevaCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = nuevaCantidad;
}

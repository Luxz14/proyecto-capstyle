//Generacion de variables, llamados utilizando querySelector y uso del localStorage.

let productosDelCarrito = localStorage.getItem("producto-en-el-carrito"); //Obtenemos los productos a traves de la clave producto-en-el-carrito.

productosDelCarrito = JSON.parse(productosDelCarrito); //Utilizamos el metodo parse para obtener el valor de la variable productosDelCarrito.

//Llamados a las clases y id del archivo carrito.html
const carritoVacio = document.querySelector('.carrito-vacio');
const carritoProductos = document.querySelector('#contenedor-productos-carrito');
const carritoOpciones = document.querySelector('.container-carrito-opciones');
const carritoComprado = document.querySelector('.carrito-comprado');
let btnEliminar = document.querySelectorAll('.producto-eliminar')
const totalElement = document.querySelector('#total');
const btnVaciarCarrito = document.querySelector('.vaciar-carrito');
const btnComprarCarrito = document.querySelector('.carrito-comprar');


//Funcion para pintar los productos en el carrito con el DOM
function productosCarrito() {
    if(productosDelCarrito && productosDelCarrito.length > 0) {

        carritoVacio.classList.add('none');
        carritoProductos.classList.remove('none');
        carritoOpciones.classList.remove('none');
        carritoComprado.classList.add('none');
    
        carritoProductos.innerHTML = ""; //Lo iniciamos como vacio
    
        productosDelCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add('producto-carrito');
    
            div.innerHTML = `
            <img class="producto-carrito-img" src="${producto.imagen} " alt="${producto.nombre}">
            <div class="cart-descripcion">
                <h6>Titulo</h6>
                <h4>${producto.nombre}</h4>
            </div>
            <div class="producto-cantidad">
                <h6>Cantidad</h6>
                <p>${producto.cantidad}</p>
            </div>
            <div class="producto-precio">
                <h6>Precio</h6>
                <p>$${producto.precio}</p>
            </div>
            <div class="producto-subtotal">
                <h6>Subtotal</h6>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="producto-eliminar" id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
            `;
            
            carritoProductos.append(div)
            const precioTotal = calcularPrecioTotal(); //Llamamos a la funcion para que actualice el precio total
            totalElement.innerText = `$${precioTotal}`;
        })
    } else {
        carritoVacio.classList.remove('none'); //Si no hay productos en el carrito, dejamos el mensaje de carrito vacio a traves de la clase none.
        carritoProductos.classList.add('none');
        carritoOpciones.classList.add('none');
        carritoComprado.classList.add('none');
    }

    botonesEliminar();
}

//Llamar a la funcion de forma global
productosCarrito();



//Funcion para eliminar productos del carrito con el boton
function botonesEliminar() {
    btnEliminar = document.querySelectorAll('.producto-eliminar');

    btnEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            Swal.fire({
                title: 'Esta seguro que quiere eliminar el producto?',
                text: "Esta a punto de eliminarlo y debera volver a agregarlo desde productos si asi lo desea",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if(result.isConfirmed) {
                    eliminarDelCarrito(boton);
                }
            })
        });
    });
}


//Funcion para borrar los productos seleccionados tanto en la copia del DOM como en el localStorage.
function eliminarDelCarrito(boton) {
    const idBtn = boton.getAttribute('id');

    const index = productosDelCarrito.findIndex(producto => producto.id == idBtn);
    productosDelCarrito.splice(index, 1); //Utilizamos splice para eliminar el producto a traves de su index

    localStorage.setItem("producto-en-el-carrito", JSON.stringify(productosDelCarrito));
    productosCarrito();
    
    const precioTotal = calcularPrecioTotal();
    totalElement.innerText = `$${precioTotal}`;

    Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado con exito.',
        'success'
    );
}



//Funcion para calulcar el total de la compra
function calcularPrecioTotal() {
    let total = 0;

    productosDelCarrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    })
    return total;
}


//Funcion para vaciar el carrito tanto en la copia del DOM como en el LocalStorage
btnVaciarCarrito.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    productosDelCarrito.length = 0;
    localStorage.setItem("producto-en-el-carrito", JSON.stringify(productosDelCarrito));

    productosCarrito();
}


//Funcion para comprar los productos, vaciar el array en el localStorage y mostrar el posterior mensaje de agradecimiento
btnComprarCarrito.addEventListener('click', comprarCarrito);

function comprarCarrito() {
    productosDelCarrito.length = 0;
    localStorage.setItem("producto-en-el-carrito", JSON.stringify(productosDelCarrito));
    
    carritoVacio.classList.add('none');
    carritoProductos.classList.add('none');
    carritoOpciones.classList.add('none');
    carritoComprado.classList.remove('none');
}
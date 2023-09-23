//Segunda pre-entrega de JS


//Funcion Saludo
const saludo = () => {
    let preguntarUser; 
    while(true) {
        preguntarUser = prompt("Hola! Ingrese su nombre, por favor: ");
        if(preguntarUser.trim().length === 0) { //Verificamos si el usuario no ingresa un string vacio
            alert("Ingrese su nombre, por favor");
        } else {
            alert("Bienvenido " + preguntarUser + " a CapStyle, gracias por elegirnos!");
            break; //Detenemos el bucle una vez cumplido el else
        }
    }
}


const carrito = []; //Variable global para crear el carrito de compras


//Funcion para preguntar al usuario si desea ordenar los productos en base a su precio
const ordenarProductos = () => {
    const productosBaratos = confirm('Desea ordenar los productos del mas barato al mas caro?');

    if(productosBaratos) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
}


//Funcion para ordenar de menor a mayor los precios
const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio); //Utilizamos el metodo sort para ordenar los productos
    mostrarProductos(); //Llamamos a la funcion que muestra los productos al usuario
}



//Funcion para ordenar de mayor a menor los precios
const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio); //Utilizamos el metodo sort para ordenar los productos
    mostrarProductos(); //Llamamos a la funcion que muestra los productos al usuario
}



//Funcion para mostrar los productos al usuario
const mostrarProductos = () => {
    const listaProductos = productos.map(producto => { 
        return '•' + producto.nombre + ' $' + producto.precio;
    })

    alert("Lista de productos de CapStyle:" + '\n\n' + listaProductos.join('\n'));
    comprarGorras(listaProductos);
}


//Funcion para comprar los productos
const comprarGorras = (listaProductos) => {
    let subtotal = 0;
    let seguirComprando = false;
    let cantidad = 0;
    let precio = 0;
    let talles = '';
    let gorras = '';    


    do {
        gorras = prompt('Que tipo de gorra le gustaria comprar?' + '\n\n' + listaProductos.join('\n'));
        talles = prompt('Que talle prefiere: S, M, L o XL').toUpperCase();
        cantidad = parseInt(prompt('Cuantas gorras desea comprar?'));

        console.log(gorras)
        console.log(talles)


        const encontrarProductos = productos.some(producto => producto.nombre.toLowerCase() === gorras);

        if(encontrarProductos) {
            const producto = productos.find(producto => producto.nombre.toLowerCase() === gorras);
            agregarProductoCarrito(producto, cantidad); //Llamamos a la funcion para verificar si el producto ya estaba en el carrito anteriormente(de esa manera solamente sumar la cantidad) o si hay que agregarlo.

            subtotal += producto.precio * cantidad; //Calculamos el subtotal
        } else {
            alert('El producto seleccionado no se encuentra en el catalogo anteriormente mostrado, intentalo de nuevo.');
        }

        seguirComprando = confirm('Desea seguir comprando?');

    } while (seguirComprando);
    confirmarCompra();

    alert('Su precio final es de: $' + subtotal);
    alert('Gracias por confiar en CapStyle, lo esperamos pronto!!');
}

//Funcion para agregar producto al carrito o sumar la cantidad de productos en el mismo.
const agregarProductoCarrito = (producto, cantidad) => {
    const productoId = producto.id;
    const productoEnCarrito = carrito.find(producto => producto.id === productoId)

    if(!productoEnCarrito) {
        producto.cantidad += cantidad;
        carrito.push(producto); //Luego de sumar la cantidad de productos que el usuario querra, lo agregamos directamente al carrito
    } else {
        productoEnCarrito.cantidad += cantidad; //Si el producto esta repetido, sumamos la cantidad del mismo
    }
}

const confirmarCompra = () => {
    const resumenCompra = carrito.map(producto => {
        return '•' + producto.nombre + ' || Cantidad: ' + producto.cantidad;
    });

    const listaDeCompras = alert('Carrito: '
    + '\n\n' + resumenCompra.join('\n')
    );
}




//Llamamos a la funcion saludo
saludo();


//Presentacion luego del saludo
let alertPresentacion = alert('En CapStyle nos diferenciamos por nuestro detalle y empeño que le ponemos a la customizacion de gorras.');


//Llamamos a la funcion para ordenar los productos
ordenarProductos();
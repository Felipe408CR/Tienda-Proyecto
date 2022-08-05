import {pintarResumenCompra} from './controladorPintarResumen.js'


// Accedemos a la variable local del carrito

let carrito=JSON.parse(localStorage.getItem('carrito'))



// Comparo o pregunto si el carrito esta vacio

if(carrito==null){

    pintarResumenCompra('../../assets/img/carrito.jpg','Carrito Vacio',true,false,null,false,null)

}else{ // El carrito esta lleno

    // Recorro el carrito de compras 

    carrito.forEach(function(producto){

        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)
        console.log(producto.cantidad)
        console.log(producto.precio)

        console.log(producto.precio.split("€")[1])
    })

}

// Rutina para limpiar el resumen de la compra 

let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")
    localStorage.removeItem("cantidad")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""

    pintarResumenCompra('../../assets/img/carrito.jpg','Carrito Vacio',true,false,null,false,null)
})


console.log("hola estamos comprando")
console.log( JSON.parse(localStorage.getItem('infoProducto')))
let producto=JSON.parse(localStorage.getItem('infoProducto'))

let carrito

// Revisar verificar si hay productos en el carrito

if(JSON.parse(localStorage.getItem("carrito"))==null){
    
    // Creamos el carrito de compras
    carrito=[]

}else{

    carrito=JSON.parse(localStorage.getItem("carrito"))
}

console.log(JSON.parse(localStorage.getItem("carrito")))


// Pintamos la foto desde el objeto del localstorage

let foto=document.getElementById("foto")
foto.src=producto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

// Capturar la cantidad del producto seleccionado
// Capturamos el value del input

let cantidad=document.getElementById("cantidad").value

// Agrego un nuevo atributo (Cantidad) al objeto producto

let botonAgregar=document.getElementById("botonAgregar")

botonAgregar.addEventListener("click",function(evento){
    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
    
    // Agregando un nuevo elemento al arreglo
    // Agregando un producto al carrito de compras
    console.log(cantidad)
    carrito.push(producto)

    // Almaceno el carrito en el localstorage

    localStorage.setItem("carrito",JSON.stringify(carrito))

  

})



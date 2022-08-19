// import {productosBD} from '../helpers/baseDatos.js';

console.log("hola estamos comprando")
console.log("este"+ JSON.parse(localStorage.getItem('infoProducto')))
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
// foto.classList.add("img-fluid","w-100","h-100")
// foto.src=producto.fotos[1]

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

let estrellas=document.getElementById("estrella")
//estrellas.textContent=producto.popularidad


let baseEstrellas=document.getElementById("contenedorEstrellas")
for(let i=1; i<=Number(producto.popularidad);i++){
    
    let estrella=document.createElement("i")
    estrella.classList.add("bi","bi-star-fill",'estrella')

    baseEstrellas.appendChild(estrella)
}



// Capturar la cantidad del producto seleccionado
// Capturamos el value del input

let cantidad=document.getElementById("cantidad").value

// Agrego un nuevo atributo (Cantidad) al objeto producto

let botonAgregar=document.getElementById("botonAgregar")
let suma=0

if(localStorage.getItem("cantidad")!=null){
    suma=localStorage.getItem("cantidad")
    console.log("null")
}else{
    suma=0
}

let bolitaCantidad=document.getElementById("contadorCarrito")
bolitaCantidad.textContent=suma


botonAgregar.addEventListener("click",function(evento){
    
    // Se agrega la alerta

    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible")

    setTimeout(function(){
        alerta.classList.add("invisible")
    },3000)

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
    
    // Agregando un nuevo elemento al arreglo
    // Agregando un producto al carrito de compras
    console.log(cantidad)
    carrito.push(producto)

    // Almaceno el carrito en el localstorage

    localStorage.setItem("carrito",JSON.stringify(carrito))

    // Recorriendo un arreglo
    suma=Number(suma)+Number(producto.cantidad)
    
    console.log(suma)
    
    bolitaCantidad.textContent=suma
    
    localStorage.setItem("cantidad",suma)
    
})
console.log(producto)


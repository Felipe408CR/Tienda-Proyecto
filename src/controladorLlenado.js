// Funcion para pintar productos en la tienda

export function pintarProductos(productos){
    
    // Pasos para pintar (HACER RENDER) de etiquetas HTML desde JS
    // TRAVERSING

    // 1. Crear una referencia en memoria (Variable) que almacena
    // la etiqueta sobre la cual voy a pintar (ETIQUETA PADRE O ETIQUETA RAIZ)

    let fila = document.getElementById("fila")

    // 2. Recorro el arreglo de datos y aplico TRAVERSING

    productos.forEach(function(producto){

    // 2.1 Creando una columna desde JS

    let columna=document.createElement("div")
    columna.classList.add("col")

    // 2.2 Creando la tarjeta

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    // 2.3 Creando la foto

    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100","h-100")
    fotoProducto.src=producto.fotos[0]

    // 2.4 Creando el nombre del producto

    let nombreProducto=document.createElement("h3")
    nombreProducto.textContent=producto.nombre

    // 2.5 Creando el precio del producto

    let precioProducto=document.createElement("h2")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent='$'+producto.precio+'€'

    // 2.6 Detectando eventos

    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })

    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })

    // 3. Defino padres e hijos

    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    })


}






/*
let buscador=document.getElementById("busqueda")

buscador.addEventListener("keypress",function(evento){
    console.log(evento.target.value)
})
*/
export function pintarResumenCompra(fotoURL,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto){

    console.log(fotoURL)
    let contenedor=document.getElementById("contenedor")

    // Crear una referencia para almacenar el contenedor

    let fila=document.createElement("div")
    fila.classList.add("row")

    // Limpiar el contenedor

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end","mt-3","my-3")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6","align-self-center","text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL
    
    let nombre=document.createElement("h2")
    nombre.classList.add("fw-boldr")
    nombre.textContent=nombreMensaje

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la Tienda"
    boton.setAttribute("href","../../nuestrosautos.html")

    let precio=document.createElement("h3")
    precio.classList.add("fw-bold")
    precio.textContent="Precio Und: " + precioProducto
    console.log(precioProducto)


    let cantidad=document.createElement("h3")
    cantidad.textContent= "Cantidad: " + cantidadProducto
    
    let subtotal =document.createElement('h2')
    subtotal.classList.add("fw-bold")
    if(banderaPrecio){
        subtotal.textContent= 'SubTotal: ' + Number(precioProducto.split('€')[0])*cantidadProducto + '€'
    }
    
    
     // Padres e hijos

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton==true){
        columna2.appendChild(boton) 
    }

    if(banderaPrecio==true){
        columna2.appendChild(precio)
    }

    if(banderaCantidad==true){
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
    }


    fila.appendChild(columna1)
    fila.appendChild(columna2)
    
    contenedor.appendChild(fila)
    
}

let suma=0

if(localStorage.getItem("cantidad")!=null){
    suma=localStorage.getItem("cantidad")
}else{
    suma=0
}

let bolitaCantidad=document.getElementById("contadorCarrito")
bolitaCantidad.textContent=suma